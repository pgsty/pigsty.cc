---
title: "aws_s3"
linkTitle: "aws_s3"
description: "从S3导入导出数据的外部数据源包装器"
weight: 8800
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/chimpler/postgres-aws-s3">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">chimpler/postgres-aws-s3</div>
    <div class="ext-card__desc">https://github.com/chimpler/postgres-aws-s3</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/aws_s3-0.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">aws_s3-0.0.1.tar.gz</div>
    <div class="ext-card__desc">aws_s3-0.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`aws_s3`**](/ext/e/aws_s3) | `0.0.1` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8800  | [**`aws_s3`**](/ext/e/aws_s3) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_parquet`](/ext/e/pg_parquet) [`hdfs_fdw`](/ext/e/hdfs_fdw) [`file_fdw`](/ext/e/file_fdw) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`wrappers`](/ext/e/wrappers) [`pg_bulkload`](/ext/e/pg_bulkload) [`columnar`](/ext/e/columnar) [`pg_analytics`](/ext/e/pg_analytics) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `aws_s3` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `aws_s3_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-aws-s3` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
@ el8.x86_64 18 aws_s3_18 aws_s3_18-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/aws_s3_18-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 aws_s3_18 aws_s3_18-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/aws_s3_18-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 aws_s3_18 aws_s3_18-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/aws_s3_18-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 aws_s3_18 aws_s3_18-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/aws_s3_18-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 aws_s3_18 aws_s3_18-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 9.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/aws_s3_18-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 aws_s3_18 aws_s3_18-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/aws_s3_18-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-aws-s3 postgresql-18-aws-s3_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aws-s3/postgresql-18-aws-s3_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-aws-s3 postgresql-18-aws-s3_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aws-s3/postgresql-18-aws-s3_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-aws-s3 postgresql-18-aws-s3_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aws-s3/postgresql-18-aws-s3_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-aws-s3 postgresql-18-aws-s3_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aws-s3/postgresql-18-aws-s3_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-aws-s3 postgresql-18-aws-s3_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aws-s3/postgresql-18-aws-s3_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-aws-s3 postgresql-18-aws-s3_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aws-s3/postgresql-18-aws-s3_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-aws-s3 postgresql-18-aws-s3_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aws-s3/postgresql-18-aws-s3_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-aws-s3 postgresql-18-aws-s3_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aws-s3/postgresql-18-aws-s3_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-aws-s3 postgresql-18-aws-s3_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/aws-s3/postgresql-18-aws-s3_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-aws-s3 postgresql-18-aws-s3_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/aws-s3/postgresql-18-aws-s3_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 aws_s3_17 aws_s3_17-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/aws_s3_17-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 aws_s3_17 aws_s3_17-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/aws_s3_17-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 aws_s3_17 aws_s3_17-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/aws_s3_17-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 aws_s3_17 aws_s3_17-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/aws_s3_17-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 aws_s3_17 aws_s3_17-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 9.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/aws_s3_17-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 aws_s3_17 aws_s3_17-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/aws_s3_17-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-aws-s3 postgresql-17-aws-s3_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aws-s3/postgresql-17-aws-s3_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-aws-s3 postgresql-17-aws-s3_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aws-s3/postgresql-17-aws-s3_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-aws-s3 postgresql-17-aws-s3_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aws-s3/postgresql-17-aws-s3_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-aws-s3 postgresql-17-aws-s3_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aws-s3/postgresql-17-aws-s3_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-aws-s3 postgresql-17-aws-s3_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aws-s3/postgresql-17-aws-s3_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-aws-s3 postgresql-17-aws-s3_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aws-s3/postgresql-17-aws-s3_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-aws-s3 postgresql-17-aws-s3_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aws-s3/postgresql-17-aws-s3_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-aws-s3 postgresql-17-aws-s3_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aws-s3/postgresql-17-aws-s3_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-aws-s3 postgresql-17-aws-s3_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/aws-s3/postgresql-17-aws-s3_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-aws-s3 postgresql-17-aws-s3_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/aws-s3/postgresql-17-aws-s3_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 aws_s3_16 aws_s3_16-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/aws_s3_16-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 aws_s3_16 aws_s3_16-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/aws_s3_16-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 aws_s3_16 aws_s3_16-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/aws_s3_16-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 aws_s3_16 aws_s3_16-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/aws_s3_16-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 aws_s3_16 aws_s3_16-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 9.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/aws_s3_16-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 aws_s3_16 aws_s3_16-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/aws_s3_16-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-aws-s3 postgresql-16-aws-s3_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aws-s3/postgresql-16-aws-s3_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-aws-s3 postgresql-16-aws-s3_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aws-s3/postgresql-16-aws-s3_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-aws-s3 postgresql-16-aws-s3_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aws-s3/postgresql-16-aws-s3_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-aws-s3 postgresql-16-aws-s3_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aws-s3/postgresql-16-aws-s3_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-aws-s3 postgresql-16-aws-s3_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aws-s3/postgresql-16-aws-s3_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-aws-s3 postgresql-16-aws-s3_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aws-s3/postgresql-16-aws-s3_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-aws-s3 postgresql-16-aws-s3_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aws-s3/postgresql-16-aws-s3_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-aws-s3 postgresql-16-aws-s3_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aws-s3/postgresql-16-aws-s3_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-aws-s3 postgresql-16-aws-s3_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/aws-s3/postgresql-16-aws-s3_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-aws-s3 postgresql-16-aws-s3_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/aws-s3/postgresql-16-aws-s3_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 aws_s3_15 aws_s3_15-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/aws_s3_15-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 aws_s3_15 aws_s3_15-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/aws_s3_15-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 aws_s3_15 aws_s3_15-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/aws_s3_15-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 aws_s3_15 aws_s3_15-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/aws_s3_15-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 aws_s3_15 aws_s3_15-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 9.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/aws_s3_15-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 aws_s3_15 aws_s3_15-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/aws_s3_15-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-aws-s3 postgresql-15-aws-s3_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aws-s3/postgresql-15-aws-s3_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-aws-s3 postgresql-15-aws-s3_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aws-s3/postgresql-15-aws-s3_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-aws-s3 postgresql-15-aws-s3_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aws-s3/postgresql-15-aws-s3_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-aws-s3 postgresql-15-aws-s3_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aws-s3/postgresql-15-aws-s3_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-aws-s3 postgresql-15-aws-s3_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aws-s3/postgresql-15-aws-s3_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-aws-s3 postgresql-15-aws-s3_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aws-s3/postgresql-15-aws-s3_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-aws-s3 postgresql-15-aws-s3_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aws-s3/postgresql-15-aws-s3_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-aws-s3 postgresql-15-aws-s3_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aws-s3/postgresql-15-aws-s3_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-aws-s3 postgresql-15-aws-s3_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/aws-s3/postgresql-15-aws-s3_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-aws-s3 postgresql-15-aws-s3_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/aws-s3/postgresql-15-aws-s3_0.0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 aws_s3_14 aws_s3_14-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/aws_s3_14-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 aws_s3_14 aws_s3_14-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/aws_s3_14-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 aws_s3_14 aws_s3_14-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/aws_s3_14-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 aws_s3_14 aws_s3_14-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/aws_s3_14-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 aws_s3_14 aws_s3_14-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 9.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/aws_s3_14-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 aws_s3_14 aws_s3_14-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 9.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/aws_s3_14-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-aws-s3 postgresql-14-aws-s3_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aws-s3/postgresql-14-aws-s3_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-aws-s3 postgresql-14-aws-s3_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/aws-s3/postgresql-14-aws-s3_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-aws-s3 postgresql-14-aws-s3_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aws-s3/postgresql-14-aws-s3_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-aws-s3 postgresql-14-aws-s3_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/aws-s3/postgresql-14-aws-s3_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-aws-s3 postgresql-14-aws-s3_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aws-s3/postgresql-14-aws-s3_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-aws-s3 postgresql-14-aws-s3_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/aws-s3/postgresql-14-aws-s3_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-aws-s3 postgresql-14-aws-s3_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aws-s3/postgresql-14-aws-s3_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-aws-s3 postgresql-14-aws-s3_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/aws-s3/postgresql-14-aws-s3_0.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-aws-s3 postgresql-14-aws-s3_0.0.1-1PIGSTY~resolute_amd64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/aws-s3/postgresql-14-aws-s3_0.0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-aws-s3 postgresql-14-aws-s3_0.0.1-1PIGSTY~resolute_arm64.deb pigsty 0.0.1 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/aws-s3/postgresql-14-aws-s3_0.0.1-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `aws_s3` 扩展的 RPM / DEB 包：

```bash
pig build pkg aws_s3         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `aws_s3` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install aws_s3;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y aws_s3 -v 18  # PG 18
pig ext install -y aws_s3 -v 17  # PG 17
pig ext install -y aws_s3 -v 16  # PG 16
pig ext install -y aws_s3 -v 15  # PG 15
pig ext install -y aws_s3 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y aws_s3_18       # PG 18
dnf install -y aws_s3_17       # PG 17
dnf install -y aws_s3_16       # PG 16
dnf install -y aws_s3_15       # PG 15
dnf install -y aws_s3_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-aws-s3   # PG 18
apt install -y postgresql-17-aws-s3   # PG 17
apt install -y postgresql-16-aws-s3   # PG 16
apt install -y postgresql-15-aws-s3   # PG 15
apt install -y postgresql-14-aws-s3   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION aws_s3;
```



## 用法

> [aws_s3: 从 S3 导入/导出数据的 PostgreSQL 扩展](https://github.com/chimpler/postgres-aws-s3)

### 设置凭证

通过 PostgreSQL 会话变量配置 AWS 凭证：

```sql
SET aws_s3.access_key_id TO 'your_access_key';
SET aws_s3.secret_key TO 'your_secret_key';
SET aws_s3.session_token TO 'optional_session_token';  -- 使用临时凭证时
```

本地开发使用 LocalStack：

```sql
SET aws_s3.endpoint_url TO 'http://localhost:4566';
```

### 从 S3 导入数据

```sql
CREATE EXTENSION aws_s3;

CREATE TABLE animals (
  name text,
  age int
);

SELECT aws_s3.table_import_from_s3(
  'animals',
  '',
  '(FORMAT CSV, DELIMITER '','', HEADER true)',
  'my-bucket',
  'animals.csv',
  'us-east-1'
);

SELECT * FROM animals;
```

**参数：** 表名、列列表（空字符串表示全部）、COPY 选项、S3 桶名、S3 键名、AWS 区域。

### 导出数据到 S3

```sql
SELECT * FROM aws_s3.query_export_to_s3(
  'SELECT * FROM animals',
  'my-bucket',
  'export/animals.csv',
  'us-east-1',
  options := 'FORMAT CSV, HEADER true'
);
```

**参数：** SQL 查询、S3 桶名、S3 键名、AWS 区域、COPY 选项。

### 特性

- 带有 `Content-Encoding=gzip` 元数据的文件在导入时自动解压
- 凭证可以作为函数参数直接传递或通过会话变量设置
- 使用与 PostgreSQL 相同的 COPY 格式选项（CSV、TEXT、BINARY，以及所有相关设置如 DELIMITER、HEADER、NULL 等）

---
title: "wal2mongo"
linkTitle: "wal2mongo"
description: "使用逻辑解码捕获MongoDB JSON格式的CDC变更"
weight: 9640
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/HighgoSoftware/wal2mongo">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">HighgoSoftware/wal2mongo</div>
    <div class="ext-card__desc">https://github.com/HighgoSoftware/wal2mongo</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/wal2mongo-1.0.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">wal2mongo-1.0.7.tar.gz</div>
    <div class="ext-card__desc">wal2mongo-1.0.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`wal2mongo`**](/ext/e/wal2mongo) | `1.0.7` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9640  | [**`wal2mongo`**](/ext/e/wal2mongo) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`mongo_fdw`](/ext/e/mongo_fdw) [`wal2json`](/ext/e/wal2json) [`decoderbufs`](/ext/e/decoderbufs) [`decoder_raw`](/ext/e/decoder_raw) [`documentdb`](/ext/e/documentdb) [`pglogical`](/ext/e/pglogical) [`test_decoding`](/ext/e/test_decoding) [`pgoutput`](/ext/e/pgoutput) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.7` | {{< pgvers "16,15,14" >}} | `wal2mongo` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.7` | {{< pgvers "16,15,14" >}} | `wal2mongo_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.7` | {{< pgvers "16,15,14" >}} | `postgresql-$v-wal2mongo` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 |
| el8.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 |
| el9.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 |
| el9.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 |
| el10.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 |
| el10.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 | AVAIL PGDG 1.0.7 1 |
| d12.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 |
| d12.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 |
| d13.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 |
| d13.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 |
| u22.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 |
| u22.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 |
| u24.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 |
| u24.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 | AVAIL PIGSTY 1.0.7 1 |
@ el8.x86_64 16 wal2mongo_16 wal2mongo_16-1.0.7-1PGDG.rhel8.x86_64.rpm pgdg 1.0.7 20.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/wal2mongo_16-1.0.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 wal2mongo_16 wal2mongo_16-1.0.7-1PGDG.rhel8.aarch64.rpm pgdg 1.0.7 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/wal2mongo_16-1.0.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 wal2mongo_16 wal2mongo_16-1.0.7-1PGDG.rhel9.x86_64.rpm pgdg 1.0.7 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/wal2mongo_16-1.0.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 wal2mongo_16 wal2mongo_16-1.0.7-1PGDG.rhel9.aarch64.rpm pgdg 1.0.7 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/wal2mongo_16-1.0.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 wal2mongo_16 wal2mongo_16-1.0.7-3PGDG.rhel10.x86_64.rpm pgdg 1.0.7 20.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/wal2mongo_16-1.0.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 wal2mongo_16 wal2mongo_16-1.0.7-3PGDG.rhel10.aarch64.rpm pgdg 1.0.7 20.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/wal2mongo_16-1.0.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-wal2mongo postgresql-16-wal2mongo_1.0.7-1PIGSTY~bookworm_amd64.deb pigsty 1.0.7 34.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wal2mongo/postgresql-16-wal2mongo_1.0.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-wal2mongo postgresql-16-wal2mongo_1.0.7-1PIGSTY~bookworm_arm64.deb pigsty 1.0.7 34.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wal2mongo/postgresql-16-wal2mongo_1.0.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-wal2mongo postgresql-16-wal2mongo_1.0.7-1PIGSTY~trixie_amd64.deb pigsty 1.0.7 34.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wal2mongo/postgresql-16-wal2mongo_1.0.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-wal2mongo postgresql-16-wal2mongo_1.0.7-1PIGSTY~trixie_arm64.deb pigsty 1.0.7 34.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wal2mongo/postgresql-16-wal2mongo_1.0.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-wal2mongo postgresql-16-wal2mongo_1.0.7-1PIGSTY~jammy_amd64.deb pigsty 1.0.7 39.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wal2mongo/postgresql-16-wal2mongo_1.0.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-wal2mongo postgresql-16-wal2mongo_1.0.7-1PIGSTY~jammy_arm64.deb pigsty 1.0.7 39.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wal2mongo/postgresql-16-wal2mongo_1.0.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-wal2mongo postgresql-16-wal2mongo_1.0.7-1PIGSTY~noble_amd64.deb pigsty 1.0.7 35.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wal2mongo/postgresql-16-wal2mongo_1.0.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-wal2mongo postgresql-16-wal2mongo_1.0.7-1PIGSTY~noble_arm64.deb pigsty 1.0.7 35.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wal2mongo/postgresql-16-wal2mongo_1.0.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-wal2mongo postgresql-16-wal2mongo_1.0.7-1PIGSTY~resolute_amd64.deb pigsty 1.0.7 35.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wal2mongo/postgresql-16-wal2mongo_1.0.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-wal2mongo postgresql-16-wal2mongo_1.0.7-1PIGSTY~resolute_arm64.deb pigsty 1.0.7 35.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wal2mongo/postgresql-16-wal2mongo_1.0.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 wal2mongo_15 wal2mongo_15-1.0.7-1PGDG.rhel8.x86_64.rpm pgdg 1.0.7 20.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/wal2mongo_15-1.0.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 wal2mongo_15 wal2mongo_15-1.0.7-1PGDG.rhel8.aarch64.rpm pgdg 1.0.7 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/wal2mongo_15-1.0.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 wal2mongo_15 wal2mongo_15-1.0.7-1PGDG.rhel9.x86_64.rpm pgdg 1.0.7 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/wal2mongo_15-1.0.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 wal2mongo_15 wal2mongo_15-1.0.7-1PGDG.rhel9.aarch64.rpm pgdg 1.0.7 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/wal2mongo_15-1.0.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 wal2mongo_15 wal2mongo_15-1.0.7-3PGDG.rhel10.x86_64.rpm pgdg 1.0.7 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/wal2mongo_15-1.0.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 wal2mongo_15 wal2mongo_15-1.0.7-3PGDG.rhel10.aarch64.rpm pgdg 1.0.7 20.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/wal2mongo_15-1.0.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-wal2mongo postgresql-15-wal2mongo_1.0.7-1PIGSTY~bookworm_amd64.deb pigsty 1.0.7 34.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wal2mongo/postgresql-15-wal2mongo_1.0.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-wal2mongo postgresql-15-wal2mongo_1.0.7-1PIGSTY~bookworm_arm64.deb pigsty 1.0.7 33.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wal2mongo/postgresql-15-wal2mongo_1.0.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-wal2mongo postgresql-15-wal2mongo_1.0.7-1PIGSTY~trixie_amd64.deb pigsty 1.0.7 34.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wal2mongo/postgresql-15-wal2mongo_1.0.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-wal2mongo postgresql-15-wal2mongo_1.0.7-1PIGSTY~trixie_arm64.deb pigsty 1.0.7 33.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wal2mongo/postgresql-15-wal2mongo_1.0.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-wal2mongo postgresql-15-wal2mongo_1.0.7-1PIGSTY~jammy_amd64.deb pigsty 1.0.7 39.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wal2mongo/postgresql-15-wal2mongo_1.0.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-wal2mongo postgresql-15-wal2mongo_1.0.7-1PIGSTY~jammy_arm64.deb pigsty 1.0.7 38.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wal2mongo/postgresql-15-wal2mongo_1.0.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-wal2mongo postgresql-15-wal2mongo_1.0.7-1PIGSTY~noble_amd64.deb pigsty 1.0.7 35.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wal2mongo/postgresql-15-wal2mongo_1.0.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-wal2mongo postgresql-15-wal2mongo_1.0.7-1PIGSTY~noble_arm64.deb pigsty 1.0.7 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wal2mongo/postgresql-15-wal2mongo_1.0.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-wal2mongo postgresql-15-wal2mongo_1.0.7-1PIGSTY~resolute_amd64.deb pigsty 1.0.7 35.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wal2mongo/postgresql-15-wal2mongo_1.0.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-wal2mongo postgresql-15-wal2mongo_1.0.7-1PIGSTY~resolute_arm64.deb pigsty 1.0.7 34.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wal2mongo/postgresql-15-wal2mongo_1.0.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 wal2mongo_14 wal2mongo_14-1.0.7-1PGDG.rhel8.x86_64.rpm pgdg 1.0.7 20.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/wal2mongo_14-1.0.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 wal2mongo_14 wal2mongo_14-1.0.7-1PGDG.rhel8.aarch64.rpm pgdg 1.0.7 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/wal2mongo_14-1.0.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 wal2mongo_14 wal2mongo_14-1.0.7-1PGDG.rhel9.x86_64.rpm pgdg 1.0.7 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/wal2mongo_14-1.0.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 wal2mongo_14 wal2mongo_14-1.0.7-1PGDG.rhel9.aarch64.rpm pgdg 1.0.7 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/wal2mongo_14-1.0.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 wal2mongo_14 wal2mongo_14-1.0.7-3PGDG.rhel10.x86_64.rpm pgdg 1.0.7 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/wal2mongo_14-1.0.7-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 wal2mongo_14 wal2mongo_14-1.0.7-3PGDG.rhel10.aarch64.rpm pgdg 1.0.7 20.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/wal2mongo_14-1.0.7-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-wal2mongo postgresql-14-wal2mongo_1.0.7-1PIGSTY~bookworm_amd64.deb pigsty 1.0.7 34.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wal2mongo/postgresql-14-wal2mongo_1.0.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-wal2mongo postgresql-14-wal2mongo_1.0.7-1PIGSTY~bookworm_arm64.deb pigsty 1.0.7 33.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wal2mongo/postgresql-14-wal2mongo_1.0.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-wal2mongo postgresql-14-wal2mongo_1.0.7-1PIGSTY~trixie_amd64.deb pigsty 1.0.7 34.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wal2mongo/postgresql-14-wal2mongo_1.0.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-wal2mongo postgresql-14-wal2mongo_1.0.7-1PIGSTY~trixie_arm64.deb pigsty 1.0.7 33.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wal2mongo/postgresql-14-wal2mongo_1.0.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-wal2mongo postgresql-14-wal2mongo_1.0.7-1PIGSTY~jammy_amd64.deb pigsty 1.0.7 39.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wal2mongo/postgresql-14-wal2mongo_1.0.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-wal2mongo postgresql-14-wal2mongo_1.0.7-1PIGSTY~jammy_arm64.deb pigsty 1.0.7 38.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wal2mongo/postgresql-14-wal2mongo_1.0.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-wal2mongo postgresql-14-wal2mongo_1.0.7-1PIGSTY~noble_amd64.deb pigsty 1.0.7 35.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wal2mongo/postgresql-14-wal2mongo_1.0.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-wal2mongo postgresql-14-wal2mongo_1.0.7-1PIGSTY~noble_arm64.deb pigsty 1.0.7 34.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wal2mongo/postgresql-14-wal2mongo_1.0.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-wal2mongo postgresql-14-wal2mongo_1.0.7-1PIGSTY~resolute_amd64.deb pigsty 1.0.7 35.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wal2mongo/postgresql-14-wal2mongo_1.0.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-wal2mongo postgresql-14-wal2mongo_1.0.7-1PIGSTY~resolute_arm64.deb pigsty 1.0.7 34.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wal2mongo/postgresql-14-wal2mongo_1.0.7-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `wal2mongo` 扩展的 DEB 包：

```bash
pig build pkg wal2mongo         # 构建 DEB 包
```


## 安装

您可以直接安装 `wal2mongo` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install wal2mongo;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y wal2mongo -v 16  # PG 16
pig ext install -y wal2mongo -v 15  # PG 15
pig ext install -y wal2mongo -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y wal2mongo_16       # PG 16
dnf install -y wal2mongo_15       # PG 15
dnf install -y wal2mongo_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-16-wal2mongo   # PG 16
apt install -y postgresql-15-wal2mongo   # PG 15
apt install -y postgresql-14-wal2mongo   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}

> 此扩展不需要执行 `CREATE EXTENSION` 语句



## 用法

> [wal2mongo: MongoDB 的 PostgreSQL 逻辑解码输出插件](https://github.com/HighgoSoftware/wal2mongo)

一个逻辑解码输出插件，将 PostgreSQL WAL 变更格式化为 MongoDB 兼容命令，实现从 PostgreSQL 到 MongoDB 的数据复制。

### 配置

在 `postgresql.conf` 中：

```ini
wal_level = logical
max_replication_slots = 10
```

### 使用 SQL 函数

```sql
-- 创建逻辑复制槽
SELECT * FROM pg_create_logical_replication_slot('w2m_slot', 'wal2mongo');

-- 执行 DML 操作
CREATE TABLE books (id SERIAL PRIMARY KEY, title VARCHAR(100), author VARCHAR(100));
INSERT INTO books (id, title, author) VALUES (123, 'My Book', 'Author');

-- 查看变更（MongoDB 格式）
SELECT * FROM pg_logical_slot_peek_changes('w2m_slot', NULL, NULL);
-- 输出：db.books.insertOne( { id:123, title:"My Book", author:"Author" } )

-- 消费变更
SELECT * FROM pg_logical_slot_get_changes('w2m_slot', NULL, NULL);

-- 删除槽
SELECT pg_drop_replication_slot('w2m_slot');
```

### 使用 pg_recvlogical

```bash
pg_recvlogical -d postgres --slot w2m_slot --create-slot -P wal2mongo
pg_recvlogical -d postgres --slot w2m_slot --start -f -
```

### 复制到 MongoDB

输出可以直接在 MongoDB shell 中应用：

```javascript
// 复制 pg_logical_slot_get_changes 的输出
db.books.insertOne( { id:123, title:"My Book", author:"Author" } )
```

或保存为 `.js` 文件并导入：

```bash
mongo < changes.js
```

### 输出格式

- **INSERT**：`db.<table>.insertOne( { <columns> } )`
- **UPDATE**：`db.<table>.updateOne( { <key> }, { $set: { <changes> } } )`
- **DELETE**：`db.<table>.deleteOne( { <key> } )`

表需要主键或副本标识才能捕获 UPDATE/DELETE 操作。

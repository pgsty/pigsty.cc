---
title: "wal2json"
linkTitle: "wal2json"
description: "用逻辑解码捕获 JSON 格式的 CDC 变更"
weight: 9630
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/eulerto/wal2json">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">eulerto/wal2json</div>
    <div class="ext-card__desc">https://github.com/eulerto/wal2json</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/wal2json-2.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">wal2json-2.6.tar.gz</div>
    <div class="ext-card__desc">wal2json-2.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`wal2json`**](/ext/e/wal2json) | `2.6` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9630  | [**`wal2json`**](/ext/e/wal2json) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pglogical`](/ext/e/pglogical) [`wal2mongo`](/ext/e/wal2mongo) [`decoderbufs`](/ext/e/decoderbufs) [`decoder_raw`](/ext/e/decoder_raw) [`kafka_fdw`](/ext/e/kafka_fdw) [`pglogical_origin`](/ext/e/pglogical_origin) [`pglogical_ticker`](/ext/e/pglogical_ticker) [`pg_failover_slots`](/ext/e/pg_failover_slots) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.6` | {{< pgvers "18,17,16,15,14" >}} | `wal2json` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.6` | {{< pgvers "18,17,16,15,14" >}} | `wal2json_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-wal2json` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.6 2 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 2 | AVAIL PGDG 2.6 2 | AVAIL PGDG 2.6 3 |
| el8.aarch64 | AVAIL PGDG 2.6 2 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 2 | AVAIL PGDG 2.6 3 | AVAIL PGDG 2.6 3 |
| el9.x86_64 | AVAIL PGDG 2.6 2 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.5 1 | AVAIL PGDG 2.5 1 | AVAIL PGDG 2.5 1 |
| el9.aarch64 | AVAIL PGDG 2.6 2 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 2 | AVAIL PGDG 2.6 3 | AVAIL PGDG 2.6 3 |
| el10.x86_64 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 |
| el10.aarch64 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 |
| d12.x86_64 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 |
| d12.aarch64 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 |
| d13.x86_64 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 |
| d13.aarch64 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 |
| u22.x86_64 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 |
| u22.aarch64 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 |
| u24.x86_64 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 |
| u24.aarch64 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 | AVAIL PGDG 2.6 1 |
@ el8.x86_64 18 wal2json_18 wal2json_18-2.6-3PGDG.rhel8.x86_64.rpm pgdg 2.6 33.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/wal2json_18-2.6-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 wal2json_18 wal2json_18-2.6-1PIGSTY.el8.x86_64.rpm pigsty 2.6 31.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/wal2json_18-2.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 wal2json_18 wal2json_18-2.6-3PGDG.rhel8.aarch64.rpm pgdg 2.6 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/wal2json_18-2.6-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 wal2json_18 wal2json_18-2.6-1PIGSTY.el8.aarch64.rpm pigsty 2.6 29.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/wal2json_18-2.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 wal2json_18 wal2json_18-2.6-3PGDG.rhel9.x86_64.rpm pgdg 2.6 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/wal2json_18-2.6-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 wal2json_18 wal2json_18-2.6-1PIGSTY.el9.x86_64.rpm pigsty 2.6 31.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/wal2json_18-2.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 wal2json_18 wal2json_18-2.6-3PGDG.rhel9.aarch64.rpm pgdg 2.6 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/wal2json_18-2.6-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 wal2json_18 wal2json_18-2.6-1PIGSTY.el9.aarch64.rpm pigsty 2.6 30.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/wal2json_18-2.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 wal2json_18 wal2json_18-2.6-3PGDG.rhel10.x86_64.rpm pgdg 2.6 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/wal2json_18-2.6-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 wal2json_18 wal2json_18-2.6-3PGDG.rhel10.aarch64.rpm pgdg 2.6 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/wal2json_18-2.6-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-wal2json postgresql-18-wal2json_2.6-3.pgdg12+1_amd64.deb pgdg 2.6 56.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-18-wal2json_2.6-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-wal2json postgresql-18-wal2json_2.6-3.pgdg12+1_arm64.deb pgdg 2.6 53.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-18-wal2json_2.6-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-wal2json postgresql-18-wal2json_2.6-3.pgdg13+1_amd64.deb pgdg 2.6 55.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-18-wal2json_2.6-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-wal2json postgresql-18-wal2json_2.6-3.pgdg13+1_arm64.deb pgdg 2.6 54.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-18-wal2json_2.6-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-wal2json postgresql-18-wal2json_2.6-3.pgdg22.04+1_amd64.deb pgdg 2.6 57.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-18-wal2json_2.6-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-wal2json postgresql-18-wal2json_2.6-3.pgdg22.04+1_arm64.deb pgdg 2.6 54.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-18-wal2json_2.6-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-wal2json postgresql-18-wal2json_2.6-3.pgdg24.04+1_amd64.deb pgdg 2.6 56.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-18-wal2json_2.6-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-wal2json postgresql-18-wal2json_2.6-3.pgdg24.04+1_arm64.deb pgdg 2.6 53.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-18-wal2json_2.6-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 wal2json_17 wal2json_17-2.6-2PGDG.rhel8.x86_64.rpm pgdg 2.6 33.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/wal2json_17-2.6-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 wal2json_17 wal2json_17-2.6-2PGDG.rhel8.aarch64.rpm pgdg 2.6 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/wal2json_17-2.6-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 wal2json_17 wal2json_17-2.6-2PGDG.rhel9.x86_64.rpm pgdg 2.6 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/wal2json_17-2.6-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 wal2json_17 wal2json_17-2.6-2PGDG.rhel9.aarch64.rpm pgdg 2.6 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/wal2json_17-2.6-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 wal2json_17 wal2json_17-2.6-3PGDG.rhel10.x86_64.rpm pgdg 2.6 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/wal2json_17-2.6-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 wal2json_17 wal2json_17-2.6-3PGDG.rhel10.aarch64.rpm pgdg 2.6 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/wal2json_17-2.6-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-wal2json postgresql-17-wal2json_2.6-3.pgdg12+1_amd64.deb pgdg 2.6 56.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-17-wal2json_2.6-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-wal2json postgresql-17-wal2json_2.6-3.pgdg12+1_arm64.deb pgdg 2.6 53.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-17-wal2json_2.6-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-wal2json postgresql-17-wal2json_2.6-3.pgdg13+1_amd64.deb pgdg 2.6 55.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-17-wal2json_2.6-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-wal2json postgresql-17-wal2json_2.6-3.pgdg13+1_arm64.deb pgdg 2.6 54.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-17-wal2json_2.6-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-wal2json postgresql-17-wal2json_2.6-3.pgdg22.04+1_amd64.deb pgdg 2.6 63.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-17-wal2json_2.6-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-wal2json postgresql-17-wal2json_2.6-3.pgdg22.04+1_arm64.deb pgdg 2.6 61.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-17-wal2json_2.6-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-wal2json postgresql-17-wal2json_2.6-3.pgdg24.04+1_amd64.deb pgdg 2.6 55.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-17-wal2json_2.6-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-wal2json postgresql-17-wal2json_2.6-3.pgdg24.04+1_arm64.deb pgdg 2.6 53.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-17-wal2json_2.6-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 wal2json_16 wal2json_16-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/wal2json_16-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 wal2json_16 wal2json_16-2.5-3.rhel8.1.x86_64.rpm pgdg 2.5 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/wal2json_16-2.5-3.rhel8.1.x86_64.rpm
@ el8.aarch64 16 wal2json_16 wal2json_16-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/wal2json_16-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 wal2json_16 wal2json_16-2.5-3.rhel8.1.aarch64.rpm pgdg 2.5 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/wal2json_16-2.5-3.rhel8.1.aarch64.rpm
@ el9.x86_64 16 wal2json_16 wal2json_16-2.5-3.rhel9.1.x86_64.rpm pgdg 2.5 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/wal2json_16-2.5-3.rhel9.1.x86_64.rpm
@ el9.aarch64 16 wal2json_16 wal2json_16-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/wal2json_16-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 wal2json_16 wal2json_16-2.5-3.rhel9.1.aarch64.rpm pgdg 2.5 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/wal2json_16-2.5-3.rhel9.1.aarch64.rpm
@ el10.x86_64 16 wal2json_16 wal2json_16-2.6-3PGDG.rhel10.x86_64.rpm pgdg 2.6 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/wal2json_16-2.6-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 wal2json_16 wal2json_16-2.6-3PGDG.rhel10.aarch64.rpm pgdg 2.6 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/wal2json_16-2.6-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-wal2json postgresql-16-wal2json_2.6-3.pgdg12+1_amd64.deb pgdg 2.6 56.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-16-wal2json_2.6-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-wal2json postgresql-16-wal2json_2.6-3.pgdg12+1_arm64.deb pgdg 2.6 53.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-16-wal2json_2.6-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-wal2json postgresql-16-wal2json_2.6-3.pgdg13+1_amd64.deb pgdg 2.6 55.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-16-wal2json_2.6-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-wal2json postgresql-16-wal2json_2.6-3.pgdg13+1_arm64.deb pgdg 2.6 54.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-16-wal2json_2.6-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-wal2json postgresql-16-wal2json_2.6-3.pgdg22.04+1_amd64.deb pgdg 2.6 63.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-16-wal2json_2.6-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-wal2json postgresql-16-wal2json_2.6-3.pgdg22.04+1_arm64.deb pgdg 2.6 61.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-16-wal2json_2.6-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-wal2json postgresql-16-wal2json_2.6-3.pgdg24.04+1_amd64.deb pgdg 2.6 56.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-16-wal2json_2.6-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-wal2json postgresql-16-wal2json_2.6-3.pgdg24.04+1_arm64.deb pgdg 2.6 53.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-16-wal2json_2.6-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 wal2json_15 wal2json_15-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 33.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/wal2json_15-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 wal2json_15 wal2json_15-2.5-1.rhel8.x86_64.rpm pgdg 2.5 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/wal2json_15-2.5-1.rhel8.x86_64.rpm
@ el8.aarch64 15 wal2json_15 wal2json_15-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/wal2json_15-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 wal2json_15 wal2json_15-2.5-2.rhel8.aarch64.rpm pgdg 2.5 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/wal2json_15-2.5-2.rhel8.aarch64.rpm
@ el8.aarch64 15 wal2json_15 wal2json_15-2.5-1.rhel8.aarch64.rpm pgdg 2.5 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/wal2json_15-2.5-1.rhel8.aarch64.rpm
@ el9.x86_64 15 wal2json_15 wal2json_15-2.5-1.rhel9.x86_64.rpm pgdg 2.5 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/wal2json_15-2.5-1.rhel9.x86_64.rpm
@ el9.aarch64 15 wal2json_15 wal2json_15-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/wal2json_15-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 wal2json_15 wal2json_15-2.5-2.rhel9.aarch64.rpm pgdg 2.5 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/wal2json_15-2.5-2.rhel9.aarch64.rpm
@ el9.aarch64 15 wal2json_15 wal2json_15-2.5-1.rhel9.aarch64.rpm pgdg 2.5 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/wal2json_15-2.5-1.rhel9.aarch64.rpm
@ el10.x86_64 15 wal2json_15 wal2json_15-2.6-3PGDG.rhel10.x86_64.rpm pgdg 2.6 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/wal2json_15-2.6-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 wal2json_15 wal2json_15-2.6-3PGDG.rhel10.aarch64.rpm pgdg 2.6 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/wal2json_15-2.6-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-wal2json postgresql-15-wal2json_2.6-3.pgdg12+1_amd64.deb pgdg 2.6 56.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-15-wal2json_2.6-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-wal2json postgresql-15-wal2json_2.6-3.pgdg12+1_arm64.deb pgdg 2.6 54.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-15-wal2json_2.6-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-wal2json postgresql-15-wal2json_2.6-3.pgdg13+1_amd64.deb pgdg 2.6 56.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-15-wal2json_2.6-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-wal2json postgresql-15-wal2json_2.6-3.pgdg13+1_arm64.deb pgdg 2.6 54.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-15-wal2json_2.6-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-wal2json postgresql-15-wal2json_2.6-3.pgdg22.04+1_amd64.deb pgdg 2.6 64.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-15-wal2json_2.6-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-wal2json postgresql-15-wal2json_2.6-3.pgdg22.04+1_arm64.deb pgdg 2.6 61.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-15-wal2json_2.6-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-wal2json postgresql-15-wal2json_2.6-3.pgdg24.04+1_amd64.deb pgdg 2.6 56.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-15-wal2json_2.6-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-wal2json postgresql-15-wal2json_2.6-3.pgdg24.04+1_arm64.deb pgdg 2.6 54.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-15-wal2json_2.6-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 wal2json_14 wal2json_14-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 33.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/wal2json_14-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 wal2json_14 wal2json_14-2.5-1.rhel8.x86_64.rpm pgdg 2.5 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/wal2json_14-2.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 wal2json_14 wal2json_14-2.4-1.rhel8.x86_64.rpm pgdg 2.4 76.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/wal2json_14-2.4-1.rhel8.x86_64.rpm
@ el8.aarch64 14 wal2json_14 wal2json_14-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/wal2json_14-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 wal2json_14 wal2json_14-2.5-2.rhel8.aarch64.rpm pgdg 2.5 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/wal2json_14-2.5-2.rhel8.aarch64.rpm
@ el8.aarch64 14 wal2json_14 wal2json_14-2.5-1.rhel8.aarch64.rpm pgdg 2.5 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/wal2json_14-2.5-1.rhel8.aarch64.rpm
@ el9.x86_64 14 wal2json_14 wal2json_14-2.5-1.rhel9.x86_64.rpm pgdg 2.5 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/wal2json_14-2.5-1.rhel9.x86_64.rpm
@ el9.aarch64 14 wal2json_14 wal2json_14-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/wal2json_14-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 wal2json_14 wal2json_14-2.5-2.rhel9.aarch64.rpm pgdg 2.5 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/wal2json_14-2.5-2.rhel9.aarch64.rpm
@ el9.aarch64 14 wal2json_14 wal2json_14-2.5-1.rhel9.aarch64.rpm pgdg 2.5 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/wal2json_14-2.5-1.rhel9.aarch64.rpm
@ el10.x86_64 14 wal2json_14 wal2json_14-2.6-3PGDG.rhel10.x86_64.rpm pgdg 2.6 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/wal2json_14-2.6-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 wal2json_14 wal2json_14-2.6-3PGDG.rhel10.aarch64.rpm pgdg 2.6 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/wal2json_14-2.6-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-wal2json postgresql-14-wal2json_2.6-3.pgdg12+1_amd64.deb pgdg 2.6 56.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-14-wal2json_2.6-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-wal2json postgresql-14-wal2json_2.6-3.pgdg12+1_arm64.deb pgdg 2.6 53.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-14-wal2json_2.6-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-wal2json postgresql-14-wal2json_2.6-3.pgdg13+1_amd64.deb pgdg 2.6 56.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-14-wal2json_2.6-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-wal2json postgresql-14-wal2json_2.6-3.pgdg13+1_arm64.deb pgdg 2.6 53.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-14-wal2json_2.6-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-wal2json postgresql-14-wal2json_2.6-3.pgdg22.04+1_amd64.deb pgdg 2.6 64.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-14-wal2json_2.6-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-wal2json postgresql-14-wal2json_2.6-3.pgdg22.04+1_arm64.deb pgdg 2.6 61.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-14-wal2json_2.6-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-wal2json postgresql-14-wal2json_2.6-3.pgdg24.04+1_amd64.deb pgdg 2.6 56.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-14-wal2json_2.6-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-wal2json postgresql-14-wal2json_2.6-3.pgdg24.04+1_arm64.deb pgdg 2.6 53.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/w/wal2json/postgresql-14-wal2json_2.6-3.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `wal2json` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install wal2json;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y wal2json -v 18  # PG 18
pig ext install -y wal2json -v 17  # PG 17
pig ext install -y wal2json -v 16  # PG 16
pig ext install -y wal2json -v 15  # PG 15
pig ext install -y wal2json -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y wal2json_18       # PG 18
dnf install -y wal2json_17       # PG 17
dnf install -y wal2json_16       # PG 16
dnf install -y wal2json_15       # PG 15
dnf install -y wal2json_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-wal2json   # PG 18
apt install -y postgresql-17-wal2json   # PG 17
apt install -y postgresql-16-wal2json   # PG 16
apt install -y postgresql-15-wal2json   # PG 15
apt install -y postgresql-14-wal2json   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}

> 此扩展不需要执行 `CREATE EXTENSION` 语句



## 用法

> [wal2json: JSON 格式的变更数据捕获](https://github.com/eulerto/wal2json)

一个逻辑解码输出插件，从 PostgreSQL WAL 生成 JSON 格式的变更数据捕获。

### 配置

在 `postgresql.conf` 中：

```ini
wal_level = logical
max_replication_slots = 10
max_wal_senders = 10
```

### 使用流协议（pg_recvlogical）

```bash
# 创建复制槽
pg_recvlogical -d postgres --slot test_slot --create-slot -P wal2json

# 开始消费变更
pg_recvlogical -d postgres --slot test_slot --start -o pretty-print=1 -f -

# 完成后删除槽
pg_recvlogical -d postgres --slot test_slot --drop-slot
```

### 使用 SQL 函数

```sql
-- 创建逻辑复制槽
SELECT * FROM pg_create_logical_replication_slot('test_slot', 'wal2json');

-- 查看变更（不消费）
SELECT data FROM pg_logical_slot_peek_changes('test_slot', NULL, NULL);

-- 获取并消费变更
SELECT data FROM pg_logical_slot_get_changes('test_slot', NULL, NULL,
    'pretty-print', '1');

-- 删除槽
SELECT pg_drop_replication_slot('test_slot');
```

### 输出格式 v1（每事务 JSON）

```json
{
  "change": [
    {
      "kind": "insert",
      "schema": "public",
      "table": "my_table",
      "columnnames": ["a", "b"],
      "columntypes": ["integer", "text"],
      "columnvalues": [1, "hello"]
    },
    {
      "kind": "delete",
      "schema": "public",
      "table": "my_table",
      "oldkeys": {
        "keynames": ["a"],
        "keytypes": ["integer"],
        "keyvalues": [1]
      }
    }
  ]
}
```

### 输出格式 v2（每元组 JSON）

启用方式：`'format-version', '2'`

### 关键参数

- `include-xids` - 添加事务 ID（默认：false）
- `include-timestamp` - 添加时间戳（默认：false）
- `include-schemas` - 添加模式名（默认：true）
- `include-types` - 添加列类型（默认：true）
- `include-pk` - 添加主键信息（默认：false）
- `include-lsn` - 添加 WAL LSN（默认：false）
- `include-not-null` - 添加 NOT NULL 信息（默认：false）
- `include-default` - 添加默认表达式（默认：false）
- `pretty-print` - 格式化 JSON 输出（默认：false）
- `filter-tables` - 逗号分隔的要包含的表列表
- `add-tables` - 与 filter-tables 相同
- `filter-msg-prefixes` - 按前缀过滤逻辑消息
- `format-version` - 1（每事务）或 2（每元组）
- `actions` - 按操作类型过滤：insert、update、delete、truncate

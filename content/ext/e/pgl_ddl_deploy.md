---
title: "pgl_ddl_deploy"
linkTitle: "pgl_ddl_deploy"
description: "使用 pglogical 执行自动 DDL 部署"
weight: 9520
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/enova/pgl_ddl_deploy">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">enova/pgl_ddl_deploy</div>
    <div class="ext-card__desc">https://github.com/enova/pgl_ddl_deploy</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgl_ddl_deploy`**](/ext/e/pgl_ddl_deploy) | `2.2.1` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9520  | [**`pgl_ddl_deploy`**](/ext/e/pgl_ddl_deploy) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgl_ddl_deploy` |
{.ext-table}

| **相关扩展** | [`pglogical`](/ext/e/pglogical) [`pglogical_origin`](/ext/e/pglogical_origin) [`pglogical_ticker`](/ext/e/pglogical_ticker) [`ddlx`](/ext/e/ddlx) [`pg_permissions`](/ext/e/pg_permissions) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`pgactive`](/ext/e/pgactive) [`wal2json`](/ext/e/wal2json) [`decoderbufs`](/ext/e/decoderbufs) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.2.1` | {{< pgvers "17,16,15,14" >}} | `pgl_ddl_deploy` | `pglogical` |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.2.1` | {{< pgvers "17,16,15,14" >}} | `pgl_ddl_deploy_$v` | `pglogical_$v` |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.2.1` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-pgl-ddl-deploy` | `postgresql-$v-pglogical` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 2 | AVAIL PGDG 2.2.1 2 | AVAIL PGDG 2.2.1 2 |
| el8.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 2 | AVAIL PGDG 2.2.1 2 | AVAIL PGDG 2.2.1 2 |
| el9.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 2 | AVAIL PGDG 2.2.0 1 | AVAIL PGDG 2.2.0 1 |
| el9.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 2 | AVAIL PGDG 2.2.1 2 | AVAIL PGDG 2.2.1 2 |
| el10.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 |
| el10.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 |
| d12.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 |
| d12.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 |
| d13.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 |
| d13.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 |
| u22.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 |
| u22.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 |
| u24.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 |
| u24.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 | AVAIL PGDG 2.2.1 1 |
| u26.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u26.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 17 pgl_ddl_deploy_17 pgl_ddl_deploy_17-2.2.1-2PGDG.rhel8.x86_64.rpm pgdg 2.2.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgl_ddl_deploy_17-2.2.1-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgl_ddl_deploy_17 pgl_ddl_deploy_17-2.2.1-2PGDG.rhel8.aarch64.rpm pgdg 2.2.1 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgl_ddl_deploy_17-2.2.1-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgl_ddl_deploy_17 pgl_ddl_deploy_17-2.2.1-2PGDG.rhel9.x86_64.rpm pgdg 2.2.1 38.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgl_ddl_deploy_17-2.2.1-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgl_ddl_deploy_17 pgl_ddl_deploy_17-2.2.1-2PGDG.rhel9.aarch64.rpm pgdg 2.2.1 38.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgl_ddl_deploy_17-2.2.1-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgl_ddl_deploy_17 pgl_ddl_deploy_17-2.2.1-3PGDG.rhel10.x86_64.rpm pgdg 2.2.1 38.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgl_ddl_deploy_17-2.2.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgl_ddl_deploy_17 pgl_ddl_deploy_17-2.2.1-3PGDG.rhel10.aarch64.rpm pgdg 2.2.1 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgl_ddl_deploy_17-2.2.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgl-ddl-deploy postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg120+1_amd64.deb pgdg 2.2.1 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg120+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgl-ddl-deploy postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg120+1_arm64.deb pgdg 2.2.1 39.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg120+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgl-ddl-deploy postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg130+2_amd64.deb pgdg 2.2.1 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg130+2_amd64.deb
@ d13.aarch64 17 postgresql-17-pgl-ddl-deploy postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg130+2_arm64.deb pgdg 2.2.1 39.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg130+2_arm64.deb
@ u22.x86_64 17 postgresql-17-pgl-ddl-deploy postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_amd64.deb pgdg 2.2.1 40.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgl-ddl-deploy postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_arm64.deb pgdg 2.2.1 40.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgl-ddl-deploy postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_amd64.deb pgdg 2.2.1 38.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgl-ddl-deploy postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_arm64.deb pgdg 2.2.1 38.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-17-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgl_ddl_deploy_16 pgl_ddl_deploy_16-2.2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.2.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgl_ddl_deploy_16-2.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgl_ddl_deploy_16 pgl_ddl_deploy_16-2.2.0-1PGDG.rhel8.x86_64.rpm pgdg 2.2.0 39.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgl_ddl_deploy_16-2.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgl_ddl_deploy_16 pgl_ddl_deploy_16-2.2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.2.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgl_ddl_deploy_16-2.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgl_ddl_deploy_16 pgl_ddl_deploy_16-2.2.0-1PGDG.rhel8.aarch64.rpm pgdg 2.2.0 39.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgl_ddl_deploy_16-2.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgl_ddl_deploy_16 pgl_ddl_deploy_16-2.2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.2.1 38.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgl_ddl_deploy_16-2.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgl_ddl_deploy_16 pgl_ddl_deploy_16-2.2.0-1PGDG.rhel9.x86_64.rpm pgdg 2.2.0 37.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgl_ddl_deploy_16-2.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgl_ddl_deploy_16 pgl_ddl_deploy_16-2.2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.2.1 38.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgl_ddl_deploy_16-2.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgl_ddl_deploy_16 pgl_ddl_deploy_16-2.2.0-1PGDG.rhel9.aarch64.rpm pgdg 2.2.0 37.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgl_ddl_deploy_16-2.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgl_ddl_deploy_16 pgl_ddl_deploy_16-2.2.1-3PGDG.rhel10.x86_64.rpm pgdg 2.2.1 38.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgl_ddl_deploy_16-2.2.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgl_ddl_deploy_16 pgl_ddl_deploy_16-2.2.1-3PGDG.rhel10.aarch64.rpm pgdg 2.2.1 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgl_ddl_deploy_16-2.2.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgl-ddl-deploy postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg120+1_amd64.deb pgdg 2.2.1 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg120+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgl-ddl-deploy postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg120+1_arm64.deb pgdg 2.2.1 39.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg120+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgl-ddl-deploy postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg130+2_amd64.deb pgdg 2.2.1 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg130+2_amd64.deb
@ d13.aarch64 16 postgresql-16-pgl-ddl-deploy postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg130+2_arm64.deb pgdg 2.2.1 39.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg130+2_arm64.deb
@ u22.x86_64 16 postgresql-16-pgl-ddl-deploy postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_amd64.deb pgdg 2.2.1 40.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgl-ddl-deploy postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_arm64.deb pgdg 2.2.1 40.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgl-ddl-deploy postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_amd64.deb pgdg 2.2.1 38.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgl-ddl-deploy postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_arm64.deb pgdg 2.2.1 38.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-16-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgl_ddl_deploy_15 pgl_ddl_deploy_15-2.2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.2.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgl_ddl_deploy_15-2.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgl_ddl_deploy_15 pgl_ddl_deploy_15-2.2.0-1PGDG.rhel8.x86_64.rpm pgdg 2.2.0 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgl_ddl_deploy_15-2.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pgl_ddl_deploy_15 pgl_ddl_deploy_15-2.2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.2.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgl_ddl_deploy_15-2.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgl_ddl_deploy_15 pgl_ddl_deploy_15-2.2.0-1PGDG.rhel8.aarch64.rpm pgdg 2.2.0 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgl_ddl_deploy_15-2.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pgl_ddl_deploy_15 pgl_ddl_deploy_15-2.2.0-1PGDG.rhel9.x86_64.rpm pgdg 2.2.0 37.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgl_ddl_deploy_15-2.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pgl_ddl_deploy_15 pgl_ddl_deploy_15-2.2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.2.1 38.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgl_ddl_deploy_15-2.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgl_ddl_deploy_15 pgl_ddl_deploy_15-2.2.0-1PGDG.rhel9.aarch64.rpm pgdg 2.2.0 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgl_ddl_deploy_15-2.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pgl_ddl_deploy_15 pgl_ddl_deploy_15-2.2.1-3PGDG.rhel10.x86_64.rpm pgdg 2.2.1 38.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgl_ddl_deploy_15-2.2.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgl_ddl_deploy_15 pgl_ddl_deploy_15-2.2.1-3PGDG.rhel10.aarch64.rpm pgdg 2.2.1 38.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgl_ddl_deploy_15-2.2.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgl-ddl-deploy postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg120+1_amd64.deb pgdg 2.2.1 39.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg120+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgl-ddl-deploy postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg120+1_arm64.deb pgdg 2.2.1 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg120+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgl-ddl-deploy postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg130+2_amd64.deb pgdg 2.2.1 39.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg130+2_amd64.deb
@ d13.aarch64 15 postgresql-15-pgl-ddl-deploy postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg130+2_arm64.deb pgdg 2.2.1 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg130+2_arm64.deb
@ u22.x86_64 15 postgresql-15-pgl-ddl-deploy postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_amd64.deb pgdg 2.2.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgl-ddl-deploy postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_arm64.deb pgdg 2.2.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgl-ddl-deploy postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_amd64.deb pgdg 2.2.1 38.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgl-ddl-deploy postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_arm64.deb pgdg 2.2.1 38.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-15-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgl_ddl_deploy_14 pgl_ddl_deploy_14-2.2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.2.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgl_ddl_deploy_14-2.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgl_ddl_deploy_14 pgl_ddl_deploy_14-2.2.0-1PGDG.rhel8.x86_64.rpm pgdg 2.2.0 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgl_ddl_deploy_14-2.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pgl_ddl_deploy_14 pgl_ddl_deploy_14-2.2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.2.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgl_ddl_deploy_14-2.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgl_ddl_deploy_14 pgl_ddl_deploy_14-2.2.0-1PGDG.rhel8.aarch64.rpm pgdg 2.2.0 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgl_ddl_deploy_14-2.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pgl_ddl_deploy_14 pgl_ddl_deploy_14-2.2.0-1PGDG.rhel9.x86_64.rpm pgdg 2.2.0 37.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgl_ddl_deploy_14-2.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pgl_ddl_deploy_14 pgl_ddl_deploy_14-2.2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.2.1 38.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgl_ddl_deploy_14-2.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgl_ddl_deploy_14 pgl_ddl_deploy_14-2.2.0-1PGDG.rhel9.aarch64.rpm pgdg 2.2.0 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgl_ddl_deploy_14-2.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pgl_ddl_deploy_14 pgl_ddl_deploy_14-2.2.1-3PGDG.rhel10.x86_64.rpm pgdg 2.2.1 38.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgl_ddl_deploy_14-2.2.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgl_ddl_deploy_14 pgl_ddl_deploy_14-2.2.1-3PGDG.rhel10.aarch64.rpm pgdg 2.2.1 38.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgl_ddl_deploy_14-2.2.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgl-ddl-deploy postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg120+1_amd64.deb pgdg 2.2.1 39.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg120+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgl-ddl-deploy postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg120+1_arm64.deb pgdg 2.2.1 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg120+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgl-ddl-deploy postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg130+2_amd64.deb pgdg 2.2.1 38.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg130+2_amd64.deb
@ d13.aarch64 14 postgresql-14-pgl-ddl-deploy postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg130+2_arm64.deb pgdg 2.2.1 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg130+2_arm64.deb
@ u22.x86_64 14 postgresql-14-pgl-ddl-deploy postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_amd64.deb pgdg 2.2.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgl-ddl-deploy postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_arm64.deb pgdg 2.2.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgl-ddl-deploy postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_amd64.deb pgdg 2.2.1 38.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgl-ddl-deploy postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_arm64.deb pgdg 2.2.1 38.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgl-ddl-deploy/postgresql-14-pgl-ddl-deploy_2.2.1-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgl_ddl_deploy` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgl_ddl_deploy;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgl_ddl_deploy -v 17  # PG 17
pig ext install -y pgl_ddl_deploy -v 16  # PG 16
pig ext install -y pgl_ddl_deploy -v 15  # PG 15
pig ext install -y pgl_ddl_deploy -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgl_ddl_deploy_17       # PG 17
dnf install -y pgl_ddl_deploy_16       # PG 16
dnf install -y pgl_ddl_deploy_15       # PG 15
dnf install -y pgl_ddl_deploy_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-17-pgl-ddl-deploy   # PG 17
apt install -y postgresql-16-pgl-ddl-deploy   # PG 16
apt install -y postgresql-15-pgl-ddl-deploy   # PG 15
apt install -y postgresql-14-pgl-ddl-deploy   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgl_ddl_deploy CASCADE;  -- 依赖: pglogical
```



## 用法

> [pgl_ddl_deploy: 使用 pglogical 自动化 DDL 部署](https://github.com/enova/pgl_ddl_deploy)

支持 pglogical 和原生逻辑复制的 PostgreSQL 9.5+ 透明 DDL 复制。自动将 DDL 变更（CREATE TABLE、ALTER TABLE 等）传播到订阅者。

### 启用

```sql
CREATE EXTENSION pgl_ddl_deploy;
```

### 配置

向 `pgl_ddl_deploy.set_configs` 表中插入配置：

```sql
-- 复制所有用户模式的 DDL 并自动添加新表
INSERT INTO pgl_ddl_deploy.set_configs (set_name, include_schema_regex, driver)
VALUES ('default', '.*', 'native'::pgl_ddl_deploy.driver);

-- 或使用 pglogical 驱动
INSERT INTO pgl_ddl_deploy.set_configs (set_name, include_schema_regex, driver)
VALUES ('default', '.*', 'pglogical'::pgl_ddl_deploy.driver);

-- 仅维护已在复制中的特定表（仅 ALTER TABLE）
INSERT INTO pgl_ddl_deploy.set_configs (set_name, include_only_repset_tables, driver)
VALUES ('my_tables', TRUE, 'native'::pgl_ddl_deploy.driver);
```

### 部署事件触发器

配置后，部署事件触发器：

```sql
SELECT pgl_ddl_deploy.deploy(set_config_id) FROM pgl_ddl_deploy.set_configs;
```

### 关键配置选项

- `driver`：`native` 或 `pglogical`
- `set_name`：发布名称或 pglogical 复制集名称
- `include_schema_regex`：匹配 DDL 复制模式的正则表达式
- `include_only_repset_tables`：为 true 时，仅对已在复制中的表执行 ALTER TABLE
- `lock_safe_deployment`：为 true 时，DDL 在订阅者上以低 lock_timeout 循环执行
- `allow_multi_statements`：为 true 时，可以传播多语句 DDL
- `queue_subscriber_failures`：为 true 时，订阅者上失败的 DDL 会排队重试
- `ddl_only_replication`：仅复制模式，不自动将表添加到数据复制

### 监控

```sql
-- 查看未处理的 DDL 事件
SELECT * FROM pgl_ddl_deploy.unhandled;

-- 查看订阅者失败的 DDL
SELECT * FROM pgl_ddl_deploy.subscriber_logs WHERE NOT succeeded;

-- 在订阅者上重试失败的 DDL
SELECT pgl_ddl_deploy.retry_all_subscriber_logs();
```

### 检查已解析的模式

```sql
SELECT pgl_ddl_deploy.resolved_regex_include_schemas(set_config_id)
FROM pgl_ddl_deploy.set_configs;
```

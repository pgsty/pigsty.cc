---
title: "mongo_fdw"
linkTitle: "mongo_fdw"
description: "MongoDB 外部数据包装器"
weight: 8700
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/EnterpriseDB/mongo_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">EnterpriseDB/mongo_fdw</div>
    <div class="ext-card__desc">https://github.com/EnterpriseDB/mongo_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/mongo_fdw-REL-5_5_3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">mongo_fdw-REL-5_5_3.tar.gz</div>
    <div class="ext-card__desc">mongo_fdw-REL-5_5_3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`mongo_fdw`**](/ext/e/mongo_fdw) | `5.5.3` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8700  | [**`mongo_fdw`**](/ext/e/mongo_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`documentdb`](/ext/e/documentdb) [`pg_projection`](/ext/e/pg_projection) [`pgbson`](/ext/e/pgbson) [`jsquery`](/ext/e/jsquery) [`pgjq`](/ext/e/pgjq) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsonschema`](/ext/e/jsonschema) [`redis_fdw`](/ext/e/redis_fdw) [`etcd_fdw`](/ext/e/etcd_fdw) [`rdf_fdw`](/ext/e/rdf_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.5.3` | {{< pgvers "19,18,17,16,15" >}} | `mongo_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.5.3` | {{< pgvers "19,18,17,16,15" >}} | `mongo_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.5.3` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-mongo-fdw` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PGDG - 0 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 4 | AVAIL PGDG 5.5.3 6 |
| el8.aarch64 | N/A PGDG - 0 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 4 | AVAIL PGDG 5.5.3 4 |
| el9.x86_64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 |
| el9.aarch64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 |
| el10.x86_64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 |
| el10.aarch64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PGDG 5.5.3 5 | AVAIL PGDG 5.5.3 5 | AVAIL PGDG 5.5.3 5 | AVAIL PGDG 5.5.3 5 |
| d12.x86_64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 |
| d12.aarch64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 |
| d13.x86_64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 |
| d13.aarch64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 |
| u22.x86_64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 |
| u22.aarch64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 |
| u24.x86_64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 |
| u24.aarch64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 | AVAIL PIGSTY 5.5.3 1 |
| u26.x86_64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 |
| u26.aarch64 | AVAIL PIGSTY 5.5.3 1 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 | AVAIL PGDG 5.5.3 3 |
@ el9.x86_64 19 mongo_fdw_19 mongo_fdw_19-5.5.3-1PGSTY.el9.x86_64.rpm pigsty 5.5.3 128.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/mongo_fdw_19-5.5.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 19 mongo_fdw_19 mongo_fdw_19-5.5.3-1PGSTY.el9.aarch64.rpm pigsty 5.5.3 125.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/mongo_fdw_19-5.5.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 19 mongo_fdw_19 mongo_fdw_19-5.5.3-1PGSTY.el10.x86_64.rpm pigsty 5.5.3 129.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/mongo_fdw_19-5.5.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 19 mongo_fdw_19 mongo_fdw_19-5.5.3-1PGSTY.el10.aarch64.rpm pigsty 5.5.3 126.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/mongo_fdw_19-5.5.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 19 postgresql-19-mongo-fdw postgresql-19-mongo-fdw_5.5.3-1PGSTY~bookworm_amd64.deb pigsty 5.5.3 113.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mongo-fdw/postgresql-19-mongo-fdw_5.5.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-mongo-fdw postgresql-19-mongo-fdw_5.5.3-1PGSTY~bookworm_arm64.deb pigsty 5.5.3 109.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mongo-fdw/postgresql-19-mongo-fdw_5.5.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-mongo-fdw postgresql-19-mongo-fdw_5.5.3-1PGSTY~trixie_amd64.deb pigsty 5.5.3 113.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mongo-fdw/postgresql-19-mongo-fdw_5.5.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-mongo-fdw postgresql-19-mongo-fdw_5.5.3-1PGSTY~trixie_arm64.deb pigsty 5.5.3 110.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mongo-fdw/postgresql-19-mongo-fdw_5.5.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-mongo-fdw postgresql-19-mongo-fdw_5.5.3-1PGSTY~jammy_amd64.deb pigsty 5.5.3 124.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mongo-fdw/postgresql-19-mongo-fdw_5.5.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-mongo-fdw postgresql-19-mongo-fdw_5.5.3-1PGSTY~jammy_arm64.deb pigsty 5.5.3 122.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mongo-fdw/postgresql-19-mongo-fdw_5.5.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-mongo-fdw postgresql-19-mongo-fdw_5.5.3-1PGSTY~noble_amd64.deb pigsty 5.5.3 118.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mongo-fdw/postgresql-19-mongo-fdw_5.5.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-mongo-fdw postgresql-19-mongo-fdw_5.5.3-1PGSTY~noble_arm64.deb pigsty 5.5.3 116.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mongo-fdw/postgresql-19-mongo-fdw_5.5.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-mongo-fdw postgresql-19-mongo-fdw_5.5.3-1PGSTY~resolute_amd64.deb pigsty 5.5.3 117.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mongo-fdw/postgresql-19-mongo-fdw_5.5.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-mongo-fdw postgresql-19-mongo-fdw_5.5.3-1PGSTY~resolute_arm64.deb pigsty 5.5.3 115.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mongo-fdw/postgresql-19-mongo-fdw_5.5.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-7PGDG.rhel8.10.x86_64.rpm pgdg 5.5.3 55.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/mongo_fdw_18-5.5.3-7PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-6PGDG.rhel8.10.x86_64.rpm pgdg 5.5.3 55.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/mongo_fdw_18-5.5.3-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-2PGDG.rhel8.x86_64.rpm pgdg 5.5.3 54.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/mongo_fdw_18-5.5.3-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-7PGDG.rhel8.10.aarch64.rpm pgdg 5.5.3 53.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/mongo_fdw_18-5.5.3-7PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-6PGDG.rhel8.10.aarch64.rpm pgdg 5.5.3 53.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/mongo_fdw_18-5.5.3-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-2PGDG.rhel8.aarch64.rpm pgdg 5.5.3 52.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/mongo_fdw_18-5.5.3-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-7PGDG.rhel9.9.x86_64.rpm pgdg 5.5.3 53.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/mongo_fdw_18-5.5.3-7PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-7PGDG.rhel9.9.aarch64.rpm pgdg 5.5.3 51.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/mongo_fdw_18-5.5.3-7PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-7PGDG.rhel10.3.x86_64.rpm pgdg 5.5.3 54.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/mongo_fdw_18-5.5.3-7PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-7PGDG.rhel10.3.aarch64.rpm pgdg 5.5.3 52.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/mongo_fdw_18-5.5.3-7PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-7PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 52.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/mongo_fdw_18-5.5.3-7PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-6PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 52.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/mongo_fdw_18-5.5.3-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-3PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 52.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/mongo_fdw_18-5.5.3-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-2PGDG.rhel10.aarch64.rpm pgdg 5.5.3 52.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/mongo_fdw_18-5.5.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1PGSTY~bookworm_amd64.deb pigsty 5.5.3 113.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1PGSTY~bookworm_arm64.deb pigsty 5.5.3 109.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1.pgdg13+2_amd64.deb pgdg 5.5.3 113.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1.pgdg13+2_amd64.deb
@ d13.x86_64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1.pgdg13+1_amd64.deb pgdg 5.5.3 113.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1PGSTY~trixie_amd64.deb pigsty 5.5.3 114.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1.pgdg13+2_arm64.deb pgdg 5.5.3 109.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1.pgdg13+2_arm64.deb
@ d13.aarch64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1.pgdg13+1_arm64.deb pgdg 5.5.3 109.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1PGSTY~trixie_arm64.deb pigsty 5.5.3 110.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1PGSTY~jammy_amd64.deb pigsty 5.5.3 124.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1PGSTY~jammy_arm64.deb pigsty 5.5.3 122.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1PGSTY~noble_amd64.deb pigsty 5.5.3 118.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1PGSTY~noble_arm64.deb pigsty 5.5.3 116.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1.pgdg26.04+2_amd64.deb pgdg 5.5.3 112.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1.pgdg26.04+1_amd64.deb pgdg 5.5.3 112.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1PGSTY~resolute_amd64.deb pigsty 5.5.3 118.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1.pgdg26.04+2_arm64.deb pgdg 5.5.3 108.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1.pgdg26.04+1_arm64.deb pgdg 5.5.3 108.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-mongo-fdw postgresql-18-mongo-fdw_5.5.3-1PGSTY~resolute_arm64.deb pigsty 5.5.3 115.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mongo-fdw/postgresql-18-mongo-fdw_5.5.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-7PGDG.rhel8.10.x86_64.rpm pgdg 5.5.3 55.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/mongo_fdw_17-5.5.3-7PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-6PGDG.rhel8.10.x86_64.rpm pgdg 5.5.3 55.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/mongo_fdw_17-5.5.3-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-2PGDG.rhel8.x86_64.rpm pgdg 5.5.3 54.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/mongo_fdw_17-5.5.3-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-7PGDG.rhel8.10.aarch64.rpm pgdg 5.5.3 53.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/mongo_fdw_17-5.5.3-7PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-6PGDG.rhel8.10.aarch64.rpm pgdg 5.5.3 52.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/mongo_fdw_17-5.5.3-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-2PGDG.rhel8.aarch64.rpm pgdg 5.5.3 52.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/mongo_fdw_17-5.5.3-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-7PGDG.rhel9.9.x86_64.rpm pgdg 5.5.3 52.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/mongo_fdw_17-5.5.3-7PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-7PGDG.rhel9.9.aarch64.rpm pgdg 5.5.3 51.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/mongo_fdw_17-5.5.3-7PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-7PGDG.rhel10.3.x86_64.rpm pgdg 5.5.3 54.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/mongo_fdw_17-5.5.3-7PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-7PGDG.rhel10.3.aarch64.rpm pgdg 5.5.3 52.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/mongo_fdw_17-5.5.3-7PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-7PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 52.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/mongo_fdw_17-5.5.3-7PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-6PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 52.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/mongo_fdw_17-5.5.3-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-3PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 51.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/mongo_fdw_17-5.5.3-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-2PGDG.rhel10.aarch64.rpm pgdg 5.5.3 52.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/mongo_fdw_17-5.5.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1PGSTY~bookworm_amd64.deb pigsty 5.5.3 113.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1PGSTY~bookworm_arm64.deb pigsty 5.5.3 109.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1.pgdg13+2_amd64.deb pgdg 5.5.3 113.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1.pgdg13+2_amd64.deb
@ d13.x86_64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1.pgdg13+1_amd64.deb pgdg 5.5.3 113.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1PGSTY~trixie_amd64.deb pigsty 5.5.3 113.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1.pgdg13+2_arm64.deb pgdg 5.5.3 109.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1.pgdg13+2_arm64.deb
@ d13.aarch64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1.pgdg13+1_arm64.deb pgdg 5.5.3 109.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1PGSTY~trixie_arm64.deb pigsty 5.5.3 109.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1PGSTY~jammy_amd64.deb pigsty 5.5.3 144.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1PGSTY~jammy_arm64.deb pigsty 5.5.3 141.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1PGSTY~noble_amd64.deb pigsty 5.5.3 118.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1PGSTY~noble_arm64.deb pigsty 5.5.3 115.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1.pgdg26.04+2_amd64.deb pgdg 5.5.3 111.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1.pgdg26.04+1_amd64.deb pgdg 5.5.3 111.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1PGSTY~resolute_amd64.deb pigsty 5.5.3 117.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1.pgdg26.04+2_arm64.deb pgdg 5.5.3 108.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1.pgdg26.04+1_arm64.deb pgdg 5.5.3 108.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-mongo-fdw postgresql-17-mongo-fdw_5.5.3-1PGSTY~resolute_arm64.deb pigsty 5.5.3 115.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mongo-fdw/postgresql-17-mongo-fdw_5.5.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-7PGDG.rhel8.10.x86_64.rpm pgdg 5.5.3 55.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/mongo_fdw_16-5.5.3-7PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-6PGDG.rhel8.10.x86_64.rpm pgdg 5.5.3 55.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/mongo_fdw_16-5.5.3-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-2PGDG.rhel8.x86_64.rpm pgdg 5.5.3 54.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/mongo_fdw_16-5.5.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 mongo_fdw_16 mongo_fdw_16-5.5.1-1PGDG.rhel8.x86_64.rpm pgdg 5.5.1 74.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/mongo_fdw_16-5.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-7PGDG.rhel8.10.aarch64.rpm pgdg 5.5.3 53.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/mongo_fdw_16-5.5.3-7PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-6PGDG.rhel8.10.aarch64.rpm pgdg 5.5.3 52.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/mongo_fdw_16-5.5.3-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-2PGDG.rhel8.aarch64.rpm pgdg 5.5.3 52.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/mongo_fdw_16-5.5.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.1-1PGDG.rhel8.aarch64.rpm pgdg 5.5.1 70.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/mongo_fdw_16-5.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-7PGDG.rhel9.9.x86_64.rpm pgdg 5.5.3 52.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/mongo_fdw_16-5.5.3-7PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-7PGDG.rhel9.9.aarch64.rpm pgdg 5.5.3 51.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/mongo_fdw_16-5.5.3-7PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-7PGDG.rhel10.3.x86_64.rpm pgdg 5.5.3 53.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/mongo_fdw_16-5.5.3-7PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-7PGDG.rhel10.3.aarch64.rpm pgdg 5.5.3 52.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/mongo_fdw_16-5.5.3-7PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-7PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 53.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/mongo_fdw_16-5.5.3-7PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-6PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 52.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/mongo_fdw_16-5.5.3-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-3PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 52.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/mongo_fdw_16-5.5.3-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-2PGDG.rhel10.aarch64.rpm pgdg 5.5.3 52.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/mongo_fdw_16-5.5.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1PGSTY~bookworm_amd64.deb pigsty 5.5.3 113.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1PGSTY~bookworm_arm64.deb pigsty 5.5.3 109.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1.pgdg13+2_amd64.deb pgdg 5.5.3 113.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1.pgdg13+2_amd64.deb
@ d13.x86_64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1.pgdg13+1_amd64.deb pgdg 5.5.3 112.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1PGSTY~trixie_amd64.deb pigsty 5.5.3 113.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1.pgdg13+2_arm64.deb pgdg 5.5.3 109.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1.pgdg13+2_arm64.deb
@ d13.aarch64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1.pgdg13+1_arm64.deb pgdg 5.5.3 109.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1PGSTY~trixie_arm64.deb pigsty 5.5.3 109.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1PGSTY~jammy_amd64.deb pigsty 5.5.3 144.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1PGSTY~jammy_arm64.deb pigsty 5.5.3 141.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1PGSTY~noble_amd64.deb pigsty 5.5.3 118.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1PGSTY~noble_arm64.deb pigsty 5.5.3 115.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1.pgdg26.04+2_amd64.deb pgdg 5.5.3 111.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1.pgdg26.04+1_amd64.deb pgdg 5.5.3 111.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1PGSTY~resolute_amd64.deb pigsty 5.5.3 117.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1.pgdg26.04+2_arm64.deb pgdg 5.5.3 107.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1.pgdg26.04+1_arm64.deb pgdg 5.5.3 107.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-mongo-fdw postgresql-16-mongo-fdw_5.5.3-1PGSTY~resolute_arm64.deb pigsty 5.5.3 115.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mongo-fdw/postgresql-16-mongo-fdw_5.5.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-7PGDG.rhel8.10.x86_64.rpm pgdg 5.5.3 56.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/mongo_fdw_15-5.5.3-7PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-6PGDG.rhel8.10.x86_64.rpm pgdg 5.5.3 56.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/mongo_fdw_15-5.5.3-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-2PGDG.rhel8.x86_64.rpm pgdg 5.5.3 56.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/mongo_fdw_15-5.5.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.1-1PGDG.rhel8.x86_64.rpm pgdg 5.5.1 77.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/mongo_fdw_15-5.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.0-1.rhel8.x86_64.rpm pgdg 5.5.0 74.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/mongo_fdw_15-5.5.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.4.0-1.rhel8.x86_64.rpm pgdg 5.4.0 74.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/mongo_fdw_15-5.4.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-7PGDG.rhel8.10.aarch64.rpm pgdg 5.5.3 54.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/mongo_fdw_15-5.5.3-7PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-6PGDG.rhel8.10.aarch64.rpm pgdg 5.5.3 54.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/mongo_fdw_15-5.5.3-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-2PGDG.rhel8.aarch64.rpm pgdg 5.5.3 53.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/mongo_fdw_15-5.5.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.1-1PGDG.rhel8.aarch64.rpm pgdg 5.5.1 73.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/mongo_fdw_15-5.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-7PGDG.rhel9.9.x86_64.rpm pgdg 5.5.3 56.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/mongo_fdw_15-5.5.3-7PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-7PGDG.rhel9.9.aarch64.rpm pgdg 5.5.3 53.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/mongo_fdw_15-5.5.3-7PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-7PGDG.rhel10.3.x86_64.rpm pgdg 5.5.3 57.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/mongo_fdw_15-5.5.3-7PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-7PGDG.rhel10.3.aarch64.rpm pgdg 5.5.3 54.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/mongo_fdw_15-5.5.3-7PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-7PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 54.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/mongo_fdw_15-5.5.3-7PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-6PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 54.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/mongo_fdw_15-5.5.3-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-3PGDG.rhel10.2.aarch64.rpm pgdg 5.5.3 54.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/mongo_fdw_15-5.5.3-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-2PGDG.rhel10.aarch64.rpm pgdg 5.5.3 54.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/mongo_fdw_15-5.5.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1PGSTY~bookworm_amd64.deb pigsty 5.5.3 114.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1PGSTY~bookworm_arm64.deb pigsty 5.5.3 110.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1.pgdg13+2_amd64.deb pgdg 5.5.3 113.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1.pgdg13+2_amd64.deb
@ d13.x86_64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1.pgdg13+1_amd64.deb pgdg 5.5.3 113.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1PGSTY~trixie_amd64.deb pigsty 5.5.3 114.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1.pgdg13+2_arm64.deb pgdg 5.5.3 110.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1.pgdg13+2_arm64.deb
@ d13.aarch64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1.pgdg13+1_arm64.deb pgdg 5.5.3 110.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1PGSTY~trixie_arm64.deb pigsty 5.5.3 110.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1PGSTY~jammy_amd64.deb pigsty 5.5.3 145.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1PGSTY~jammy_arm64.deb pigsty 5.5.3 142.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1PGSTY~noble_amd64.deb pigsty 5.5.3 119.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1PGSTY~noble_arm64.deb pigsty 5.5.3 117.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1.pgdg26.04+2_amd64.deb pgdg 5.5.3 113.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1.pgdg26.04+1_amd64.deb pgdg 5.5.3 113.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1PGSTY~resolute_amd64.deb pigsty 5.5.3 119.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1.pgdg26.04+2_arm64.deb pgdg 5.5.3 109.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1.pgdg26.04+1_arm64.deb pgdg 5.5.3 109.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-mongo-fdw postgresql-15-mongo-fdw_5.5.3-1PGSTY~resolute_arm64.deb pigsty 5.5.3 117.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mongo-fdw/postgresql-15-mongo-fdw_5.5.3-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `mongo_fdw` 扩展的 RPM / DEB 包：

```bash
pig build pkg mongo_fdw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `mongo_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install mongo_fdw;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y mongo_fdw -v 19  # PG 19
pig ext install -y mongo_fdw -v 18  # PG 18
pig ext install -y mongo_fdw -v 17  # PG 17
pig ext install -y mongo_fdw -v 16  # PG 16
pig ext install -y mongo_fdw -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y mongo_fdw_19       # PG 19
dnf install -y mongo_fdw_18       # PG 18
dnf install -y mongo_fdw_17       # PG 17
dnf install -y mongo_fdw_16       # PG 16
dnf install -y mongo_fdw_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-mongo-fdw   # PG 19
apt install -y postgresql-18-mongo-fdw   # PG 18
apt install -y postgresql-17-mongo-fdw   # PG 17
apt install -y postgresql-16-mongo-fdw   # PG 16
apt install -y postgresql-15-mongo-fdw   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION mongo_fdw;
```




## 用法

来源：[README](https://github.com/EnterpriseDB/mongo_fdw/blob/REL-5_5_3/README.md)、[REL-5_5_3 release](https://github.com/EnterpriseDB/mongo_fdw/releases/tag/REL-5_5_3)

### 创建服务器

```sql
CREATE EXTENSION mongo_fdw;

CREATE SERVER mongo_server FOREIGN DATA WRAPPER mongo_fdw
  OPTIONS (address '127.0.0.1', port '27017');
```

**服务器选项：** `address`（默认 `127.0.0.1`）、`port`（默认 `27017`）、`authentication_database`、`replica_set`、`read_preference`（`primary`、`secondary`、`primaryPreferred`、`secondaryPreferred`、`nearest`）、`ssl`（默认 `false`）、`pem_file`、`pem_pwd`、`ca_file`、`ca_dir`、`crl_file`、`weak_cert_validation`、`use_remote_estimate`（默认 `false`）、`enable_join_pushdown`（默认 `true`）、`enable_aggregate_pushdown`（默认 `true`）、`enable_order_by_pushdown`（默认 `true`）。

### 创建用户映射

```sql
CREATE USER MAPPING FOR pguser SERVER mongo_server
  OPTIONS (username 'mongouser', password 'mongopass');
```

### 创建外部表

```sql
CREATE FOREIGN TABLE warehouse (
  _id name,
  warehouse_id int,
  warehouse_name text,
  warehouse_created timestamptz
)
SERVER mongo_server
OPTIONS (database 'mydb', collection 'warehouse');
```

**重要：** 第一列必须是 `name` 类型的 `_id`（MongoDB 的对象标识符）。

**表选项：** `database`（默认 `test`）、`collection`（默认为表名）、`enable_join_pushdown`、`enable_aggregate_pushdown`、`enable_order_by_pushdown`。

### CRUD 操作

```sql
SELECT warehouse_id, warehouse_name FROM warehouse WHERE warehouse_id > 10;
INSERT INTO warehouse VALUES ('new_id', 100, 'New Warehouse', now());
UPDATE warehouse SET warehouse_name = 'Updated' WHERE warehouse_id = 100;
DELETE FROM warehouse WHERE warehouse_id = 100;
```

### 下推特性

mongo_fdw 将 WHERE 子句、同一服务器上外部表之间的 JOIN、聚合函数、ORDER BY、LIMIT 和 OFFSET 下推到 MongoDB，以实现高效查询执行。诊断远端执行计划时，可使用 `mongo_fdw.enable_join_pushdown`、`mongo_fdw.enable_aggregate_pushdown`、`mongo_fdw.enable_order_by_pushdown` 和 `mongo_fdw.log_remote_query` GUC。

### 版本说明

`mongo_fdw` 5.5.3，上游 tag 为 `REL-5_5_3`，增加 PostgreSQL 18 支持，为 MongoDB 8 更新 bundled `mongoc-driver` 和 `json-c` libraries，增加 `mongo_fdw.log_remote_query` debug GUC，并修复 nested-field、WHERE、ORDER BY 和 unsafe join-pushdown 场景。本线中上游已停止 PostgreSQL 12 支持。

### 注意事项

- BSON 仅支持 UTF-8；确保 PostgreSQL 数据库使用 UTF-8 编码
- 包含大写字母或点号（用于嵌套文档）的列名需要双引号
- PostgreSQL 默认将列名限制为 63 个字符

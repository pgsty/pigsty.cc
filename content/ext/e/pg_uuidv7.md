---
title: "pg_uuidv7"
linkTitle: "pg_uuidv7"
description: "UUIDv7 支持"
weight: 4540
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/fboulnois/pg_uuidv7">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">fboulnois/pg_uuidv7</div>
    <div class="ext-card__desc">https://github.com/fboulnois/pg_uuidv7</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_uuidv7-1.7.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_uuidv7-1.7.0.tar.gz</div>
    <div class="ext-card__desc">pg_uuidv7-1.7.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_uuidv7`**](/ext/e/pg_uuidv7) | `1.7.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mpl20" href="/ext/license#mpl20">MPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4540  | [**`pg_uuidv7`**](/ext/e/pg_uuidv7) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`uuid-ossp`](/ext/e/uuid-ossp) [`sequential_uuids`](/ext/e/sequential_uuids) [`pg_hashids`](/ext/e/pg_hashids) [`permuteseq`](/ext/e/permuteseq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_uuidv7` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_uuidv7_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-uuidv7` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 3 | AVAIL PGDG 1.7.0 7 | AVAIL PGDG 1.7.0 10 | AVAIL PGDG 1.7.0 10 |
| el8.aarch64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 3 | AVAIL PGDG 1.7.0 7 | AVAIL PGDG 1.7.0 9 | AVAIL PGDG 1.7.0 9 |
| el9.x86_64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 3 | AVAIL PGDG 1.7.0 7 | AVAIL PGDG 1.7.0 9 | AVAIL PGDG 1.7.0 9 |
| el9.aarch64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 3 | AVAIL PGDG 1.7.0 7 | AVAIL PGDG 1.7.0 9 | AVAIL PGDG 1.7.0 9 |
| el10.x86_64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| el10.aarch64 | AVAIL PGDG 1.6.0 1 | AVAIL PGDG 1.6.0 1 | AVAIL PGDG 1.6.0 1 | AVAIL PGDG 1.6.0 1 | AVAIL PGDG 1.6.0 1 |
| d12.x86_64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| d12.aarch64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| d13.x86_64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| d13.aarch64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| u22.x86_64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| u22.aarch64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| u24.x86_64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
| u24.aarch64 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 | AVAIL PGDG 1.7.0 2 |
@ el8.x86_64 18 pg_uuidv7_18 pg_uuidv7_18-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_uuidv7_18-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_uuidv7_18 pg_uuidv7_18-1.6.0-2PGDG.rhel8.x86_64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_uuidv7_18-1.6.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_uuidv7_18 pg_uuidv7_18-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 21.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_uuidv7_18-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_uuidv7_18 pg_uuidv7_18-1.6.0-2PGDG.rhel8.aarch64.rpm pgdg 1.6.0 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_uuidv7_18-1.6.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_uuidv7_18 pg_uuidv7_18-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_uuidv7_18-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_uuidv7_18 pg_uuidv7_18-1.6.0-2PGDG.rhel9.x86_64.rpm pgdg 1.6.0 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_uuidv7_18-1.6.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_uuidv7_18 pg_uuidv7_18-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 21.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_uuidv7_18-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_uuidv7_18 pg_uuidv7_18-1.6.0-2PGDG.rhel9.aarch64.rpm pgdg 1.6.0 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_uuidv7_18-1.6.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_uuidv7_18 pg_uuidv7_18-1.7.0-1PGDG.rhel10.x86_64.rpm pgdg 1.7.0 21.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_uuidv7_18-1.7.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_uuidv7_18 pg_uuidv7_18-1.6.0-2PGDG.rhel10.x86_64.rpm pgdg 1.6.0 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_uuidv7_18-1.6.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_uuidv7_18 pg_uuidv7_18-1.6.0-2PGDG.rhel10.aarch64.rpm pgdg 1.6.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_uuidv7_18-1.6.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1.pgdg12+1_amd64.deb pgdg 1.7.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1.pgdg12+1_arm64.deb pgdg 1.7.0 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1.pgdg13+1_amd64.deb pgdg 1.7.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1.pgdg13+1_arm64.deb pgdg 1.7.0 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1.pgdg22.04+1_amd64.deb pgdg 1.7.0 12.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1.pgdg22.04+1_arm64.deb pgdg 1.7.0 12.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1.pgdg24.04+1_amd64.deb pgdg 1.7.0 12.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1.pgdg24.04+1_arm64.deb pgdg 1.7.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-uuidv7 postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuidv7/postgresql-18-pg-uuidv7_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_uuidv7_17 pg_uuidv7_17-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_uuidv7_17-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_uuidv7_17 pg_uuidv7_17-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_uuidv7_17-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_uuidv7_17 pg_uuidv7_17-1.5.0-3PGDG.rhel8.x86_64.rpm pgdg 1.5.0 20.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_uuidv7_17-1.5.0-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_uuidv7_17 pg_uuidv7_17-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 21.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_uuidv7_17-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_uuidv7_17 pg_uuidv7_17-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_uuidv7_17-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_uuidv7_17 pg_uuidv7_17-1.5.0-3PGDG.rhel8.aarch64.rpm pgdg 1.5.0 20.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_uuidv7_17-1.5.0-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_uuidv7_17 pg_uuidv7_17-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_uuidv7_17-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_uuidv7_17 pg_uuidv7_17-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_uuidv7_17-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_uuidv7_17 pg_uuidv7_17-1.5.0-3PGDG.rhel9.x86_64.rpm pgdg 1.5.0 20.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_uuidv7_17-1.5.0-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_uuidv7_17 pg_uuidv7_17-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 21.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_uuidv7_17-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_uuidv7_17 pg_uuidv7_17-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_uuidv7_17-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_uuidv7_17 pg_uuidv7_17-1.5.0-3PGDG.rhel9.aarch64.rpm pgdg 1.5.0 20.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_uuidv7_17-1.5.0-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_uuidv7_17 pg_uuidv7_17-1.7.0-1PGDG.rhel10.x86_64.rpm pgdg 1.7.0 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_uuidv7_17-1.7.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_uuidv7_17 pg_uuidv7_17-1.6.0-2PGDG.rhel10.x86_64.rpm pgdg 1.6.0 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_uuidv7_17-1.6.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_uuidv7_17 pg_uuidv7_17-1.6.0-2PGDG.rhel10.aarch64.rpm pgdg 1.6.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_uuidv7_17-1.6.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1.pgdg12+1_amd64.deb pgdg 1.7.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1.pgdg12+1_arm64.deb pgdg 1.7.0 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1.pgdg13+1_amd64.deb pgdg 1.7.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1.pgdg13+1_arm64.deb pgdg 1.7.0 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1.pgdg22.04+1_amd64.deb pgdg 1.7.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1.pgdg22.04+1_arm64.deb pgdg 1.7.0 12.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1.pgdg24.04+1_amd64.deb pgdg 1.7.0 12.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1.pgdg24.04+1_arm64.deb pgdg 1.7.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-uuidv7 postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuidv7/postgresql-17-pg-uuidv7_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_uuidv7_16-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_uuidv7_16-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.5.0-1PGDG.rhel8.x86_64.rpm pgdg 1.5.0 20.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_uuidv7_16-1.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_uuidv7_16-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.4.0-1PGDG.rhel8.x86_64.rpm pgdg 1.4.0 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_uuidv7_16-1.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.3.0-1PGDG.rhel8.x86_64.rpm pgdg 1.3.0 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_uuidv7_16-1.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_uuidv7_16-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 21.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_uuidv7_16-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_uuidv7_16-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.5.0-1PGDG.rhel8.aarch64.rpm pgdg 1.5.0 20.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_uuidv7_16-1.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 20.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_uuidv7_16-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.4.0-1PGDG.rhel8.aarch64.rpm pgdg 1.4.0 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_uuidv7_16-1.4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.3.0-1PGDG.rhel8.aarch64.rpm pgdg 1.3.0 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_uuidv7_16-1.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_uuidv7_16-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_uuidv7_16-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_uuidv7_16-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.5.0-1PGDG.rhel9.x86_64.rpm pgdg 1.5.0 20.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_uuidv7_16-1.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_uuidv7_16-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.4.0-1PGDG.rhel9.x86_64.rpm pgdg 1.4.0 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_uuidv7_16-1.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.3.0-1PGDG.rhel9.x86_64.rpm pgdg 1.3.0 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_uuidv7_16-1.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_uuidv7_16-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 21.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_uuidv7_16-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_uuidv7_16-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.5.0-1PGDG.rhel9.aarch64.rpm pgdg 1.5.0 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_uuidv7_16-1.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_uuidv7_16-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.4.0-1PGDG.rhel9.aarch64.rpm pgdg 1.4.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_uuidv7_16-1.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.3.0-1PGDG.rhel9.aarch64.rpm pgdg 1.3.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_uuidv7_16-1.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 19.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_uuidv7_16-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.7.0-1PGDG.rhel10.x86_64.rpm pgdg 1.7.0 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_uuidv7_16-1.7.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_uuidv7_16 pg_uuidv7_16-1.6.0-2PGDG.rhel10.x86_64.rpm pgdg 1.6.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_uuidv7_16-1.6.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_uuidv7_16 pg_uuidv7_16-1.6.0-2PGDG.rhel10.aarch64.rpm pgdg 1.6.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_uuidv7_16-1.6.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1.pgdg12+1_amd64.deb pgdg 1.7.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1.pgdg12+1_arm64.deb pgdg 1.7.0 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1.pgdg13+1_amd64.deb pgdg 1.7.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1.pgdg13+1_arm64.deb pgdg 1.7.0 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1.pgdg22.04+1_amd64.deb pgdg 1.7.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1.pgdg22.04+1_arm64.deb pgdg 1.7.0 12.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1.pgdg24.04+1_amd64.deb pgdg 1.7.0 12.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1.pgdg24.04+1_arm64.deb pgdg 1.7.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-uuidv7 postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuidv7/postgresql-16-pg-uuidv7_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_uuidv7_15-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_uuidv7_15-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.5.0-1PGDG.rhel8.x86_64.rpm pgdg 1.5.0 20.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_uuidv7_15-1.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_uuidv7_15-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.4.0-1PGDG.rhel8.x86_64.rpm pgdg 1.4.0 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_uuidv7_15-1.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.3.0-1PGDG.rhel8.x86_64.rpm pgdg 1.3.0 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_uuidv7_15-1.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_uuidv7_15-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.1.1-1PGDG.rhel8.x86_64.rpm pgdg 1.1.1 19.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_uuidv7_15-1.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 19.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_uuidv7_15-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.0.2-1PGDG.rhel8.x86_64.rpm pgdg 1.0.2 18.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_uuidv7_15-1.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 21.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_uuidv7_15-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_uuidv7_15-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.5.0-1PGDG.rhel8.aarch64.rpm pgdg 1.5.0 20.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_uuidv7_15-1.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 20.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_uuidv7_15-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.4.0-1PGDG.rhel8.aarch64.rpm pgdg 1.4.0 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_uuidv7_15-1.4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.3.0-1PGDG.rhel8.aarch64.rpm pgdg 1.3.0 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_uuidv7_15-1.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_uuidv7_15-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.1.1-1PGDG.rhel8.aarch64.rpm pgdg 1.1.1 19.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_uuidv7_15-1.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_uuidv7_15-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_uuidv7_15-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_uuidv7_15-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.5.0-1PGDG.rhel9.x86_64.rpm pgdg 1.5.0 20.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_uuidv7_15-1.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_uuidv7_15-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.4.0-1PGDG.rhel9.x86_64.rpm pgdg 1.4.0 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_uuidv7_15-1.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.3.0-1PGDG.rhel9.x86_64.rpm pgdg 1.3.0 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_uuidv7_15-1.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_uuidv7_15-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.1.1-1PGDG.rhel9.x86_64.rpm pgdg 1.1.1 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_uuidv7_15-1.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 18.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_uuidv7_15-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 21.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_uuidv7_15-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_uuidv7_15-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.5.0-1PGDG.rhel9.aarch64.rpm pgdg 1.5.0 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_uuidv7_15-1.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_uuidv7_15-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.4.0-1PGDG.rhel9.aarch64.rpm pgdg 1.4.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_uuidv7_15-1.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.3.0-1PGDG.rhel9.aarch64.rpm pgdg 1.3.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_uuidv7_15-1.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 19.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_uuidv7_15-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.1.1-1PGDG.rhel9.aarch64.rpm pgdg 1.1.1 18.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_uuidv7_15-1.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 18.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_uuidv7_15-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.7.0-1PGDG.rhel10.x86_64.rpm pgdg 1.7.0 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_uuidv7_15-1.7.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_uuidv7_15 pg_uuidv7_15-1.6.0-2PGDG.rhel10.x86_64.rpm pgdg 1.6.0 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_uuidv7_15-1.6.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_uuidv7_15 pg_uuidv7_15-1.6.0-2PGDG.rhel10.aarch64.rpm pgdg 1.6.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_uuidv7_15-1.6.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1.pgdg12+1_amd64.deb pgdg 1.7.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1.pgdg12+1_arm64.deb pgdg 1.7.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1.pgdg13+1_amd64.deb pgdg 1.7.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1.pgdg13+1_arm64.deb pgdg 1.7.0 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1.pgdg22.04+1_amd64.deb pgdg 1.7.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1.pgdg22.04+1_arm64.deb pgdg 1.7.0 12.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1.pgdg24.04+1_amd64.deb pgdg 1.7.0 12.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1.pgdg24.04+1_arm64.deb pgdg 1.7.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-uuidv7 postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuidv7/postgresql-15-pg-uuidv7_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_uuidv7_14-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_uuidv7_14-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.5.0-1PGDG.rhel8.x86_64.rpm pgdg 1.5.0 20.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_uuidv7_14-1.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_uuidv7_14-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.4.0-1PGDG.rhel8.x86_64.rpm pgdg 1.4.0 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_uuidv7_14-1.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.3.0-1PGDG.rhel8.x86_64.rpm pgdg 1.3.0 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_uuidv7_14-1.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_uuidv7_14-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.1.1-1PGDG.rhel8.x86_64.rpm pgdg 1.1.1 19.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_uuidv7_14-1.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 19.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_uuidv7_14-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.0.2-1PGDG.rhel8.x86_64.rpm pgdg 1.0.2 18.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_uuidv7_14-1.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 21.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_uuidv7_14-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_uuidv7_14-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.5.0-1PGDG.rhel8.aarch64.rpm pgdg 1.5.0 20.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_uuidv7_14-1.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_uuidv7_14-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.4.0-1PGDG.rhel8.aarch64.rpm pgdg 1.4.0 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_uuidv7_14-1.4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.3.0-1PGDG.rhel8.aarch64.rpm pgdg 1.3.0 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_uuidv7_14-1.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_uuidv7_14-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.1.1-1PGDG.rhel8.aarch64.rpm pgdg 1.1.1 19.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_uuidv7_14-1.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_uuidv7_14-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_uuidv7_14-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_uuidv7_14-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.5.0-1PGDG.rhel9.x86_64.rpm pgdg 1.5.0 20.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_uuidv7_14-1.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_uuidv7_14-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.4.0-1PGDG.rhel9.x86_64.rpm pgdg 1.4.0 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_uuidv7_14-1.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.3.0-1PGDG.rhel9.x86_64.rpm pgdg 1.3.0 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_uuidv7_14-1.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_uuidv7_14-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.1.1-1PGDG.rhel9.x86_64.rpm pgdg 1.1.1 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_uuidv7_14-1.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 18.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_uuidv7_14-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 21.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_uuidv7_14-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_uuidv7_14-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.5.0-1PGDG.rhel9.aarch64.rpm pgdg 1.5.0 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_uuidv7_14-1.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_uuidv7_14-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.4.0-1PGDG.rhel9.aarch64.rpm pgdg 1.4.0 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_uuidv7_14-1.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.3.0-1PGDG.rhel9.aarch64.rpm pgdg 1.3.0 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_uuidv7_14-1.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 19.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_uuidv7_14-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.1.1-1PGDG.rhel9.aarch64.rpm pgdg 1.1.1 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_uuidv7_14-1.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 18.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_uuidv7_14-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.7.0-1PGDG.rhel10.x86_64.rpm pgdg 1.7.0 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_uuidv7_14-1.7.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_uuidv7_14 pg_uuidv7_14-1.6.0-2PGDG.rhel10.x86_64.rpm pgdg 1.6.0 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_uuidv7_14-1.6.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_uuidv7_14 pg_uuidv7_14-1.6.0-2PGDG.rhel10.aarch64.rpm pgdg 1.6.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_uuidv7_14-1.6.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1.pgdg12+1_amd64.deb pgdg 1.7.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1.pgdg12+1_arm64.deb pgdg 1.7.0 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1.pgdg13+1_amd64.deb pgdg 1.7.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1.pgdg13+1_arm64.deb pgdg 1.7.0 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1.pgdg22.04+1_amd64.deb pgdg 1.7.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1.pgdg22.04+1_arm64.deb pgdg 1.7.0 12.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1.pgdg24.04+1_amd64.deb pgdg 1.7.0 12.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1.pgdg24.04+1_arm64.deb pgdg 1.7.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-uuidv7 postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uuidv7/postgresql-14-pg-uuidv7_1.7.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_uuidv7` 扩展的 DEB 包：

```bash
pig build pkg pg_uuidv7         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_uuidv7` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_uuidv7;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_uuidv7 -v 18  # PG 18
pig ext install -y pg_uuidv7 -v 17  # PG 17
pig ext install -y pg_uuidv7 -v 16  # PG 16
pig ext install -y pg_uuidv7 -v 15  # PG 15
pig ext install -y pg_uuidv7 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_uuidv7_18       # PG 18
dnf install -y pg_uuidv7_17       # PG 17
dnf install -y pg_uuidv7_16       # PG 16
dnf install -y pg_uuidv7_15       # PG 15
dnf install -y pg_uuidv7_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-uuidv7   # PG 18
apt install -y postgresql-17-pg-uuidv7   # PG 17
apt install -y postgresql-16-pg-uuidv7   # PG 16
apt install -y postgresql-15-pg-uuidv7   # PG 15
apt install -y postgresql-14-pg-uuidv7   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_uuidv7;
```



## 用法

> [pg_uuidv7: 在 PostgreSQL 中创建有效的版本 7 UUID](https://github.com/fboulnois/pg_uuidv7)

```sql
CREATE EXTENSION pg_uuidv7;
```

### 函数

| 函数 | 描述 |
|---|---|
| `uuid_generate_v7()` | 生成一个新的 UUIDv7 |
| `uuid_v7_to_timestamptz(uuid)` | 从 UUIDv7 中提取时间戳 |
| `uuid_timestamptz_to_v7(timestamptz [, bool])` | 将时间戳转换为 UUIDv7（第二个参数设为 `true` 则将随机位清零） |

### 示例

```sql
-- 生成一个 UUIDv7
SELECT uuid_generate_v7();
-- 018570bb-4a7d-7c7e-8df4-6d47afd8c8fc

-- 从 UUIDv7 中提取时间戳
SELECT uuid_v7_to_timestamptz('018570bb-4a7d-7c7e-8df4-6d47afd8c8fc');
-- 2023-01-02 04:26:40.637+00

-- 将时间戳转换为 UUIDv7
SELECT uuid_timestamptz_to_v7('2023-01-02 04:26:40.637+00');
-- 018570bb-4a7d-7630-a5c4-89b795024c5d

-- 用于日期范围查询时，将随机位清零
SELECT uuid_timestamptz_to_v7('2023-01-02 04:26:40.637+00', true);
-- 018570bb-4a7d-7000-8000-000000000000

-- 用作主键
CREATE TABLE events (
  id uuid NOT NULL DEFAULT uuid_generate_v7() PRIMARY KEY,
  data text
);
```

---
title: "pg_orphaned"
linkTitle: "pg_orphaned"
description: "处理孤儿文件的扩展插件"
weight: 5200
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bdrouvot/pg_orphaned">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bdrouvot/pg_orphaned</div>
    <div class="ext-card__desc">https://github.com/bdrouvot/pg_orphaned</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_orphaned-git20260427.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_orphaned-git20260427.tar.gz</div>
    <div class="ext-card__desc">pg_orphaned-git20260427.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_orphaned`**](/ext/e/pg_orphaned) | `1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5200  | [**`pg_orphaned`**](/ext/e/pg_orphaned) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_checksums`](/ext/e/pg_checksums) [`amcheck`](/ext/e/amcheck) [`pg_catcheck`](/ext/e/pg_catcheck) [`pg_pathcheck`](/ext/e/pg_pathcheck) [`pg_surgery`](/ext/e/pg_surgery) [`pageinspect`](/ext/e/pageinspect) [`pg_isok`](/ext/e/pg_isok) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "19,18,17,16,15" >}} | `pg_orphaned` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "19,18,17,16,15" >}} | `pg_orphaned_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-pg-orphaned` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el9.x86_64 19 pg_orphaned_19 pg_orphaned_19-1.0-2.git20260427.4e23c9cPGSTY.el9.x86_64.rpm pigsty 1.0 39.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_orphaned_19-1.0-2.git20260427.4e23c9cPGSTY.el9.x86_64.rpm
@ el9.aarch64 19 pg_orphaned_19 pg_orphaned_19-1.0-2.git20260427.4e23c9cPGSTY.el9.aarch64.rpm pigsty 1.0 39.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_orphaned_19-1.0-2.git20260427.4e23c9cPGSTY.el9.aarch64.rpm
@ el10.x86_64 19 pg_orphaned_19 pg_orphaned_19-1.0-2.git20260427.4e23c9cPGSTY.el10.x86_64.rpm pigsty 1.0 39.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_orphaned_19-1.0-2.git20260427.4e23c9cPGSTY.el10.x86_64.rpm
@ el10.aarch64 19 pg_orphaned_19 pg_orphaned_19-1.0-2.git20260427.4e23c9cPGSTY.el10.aarch64.rpm pigsty 1.0 39.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_orphaned_19-1.0-2.git20260427.4e23c9cPGSTY.el10.aarch64.rpm
@ d12.x86_64 19 postgresql-19-pg-orphaned postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_amd64.deb pigsty 1.0 29.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orphaned/postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-pg-orphaned postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_arm64.deb pigsty 1.0 29.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orphaned/postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-pg-orphaned postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~trixie_amd64.deb pigsty 1.0 29.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orphaned/postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-pg-orphaned postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~trixie_arm64.deb pigsty 1.0 29.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orphaned/postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-pg-orphaned postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~jammy_amd64.deb pigsty 1.0 31.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orphaned/postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-pg-orphaned postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~jammy_arm64.deb pigsty 1.0 31.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orphaned/postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-pg-orphaned postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~noble_amd64.deb pigsty 1.0 30.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orphaned/postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-pg-orphaned postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~noble_arm64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orphaned/postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-pg-orphaned postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~resolute_amd64.deb pigsty 1.0 30.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orphaned/postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-pg-orphaned postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~resolute_arm64.deb pigsty 1.0 30.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orphaned/postgresql-19-pg-orphaned_1.0+git20260427-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 pg_orphaned_18 pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el8.x86_64.rpm pigsty 1.0 38.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_orphaned_18 pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el8.aarch64.rpm pigsty 1.0 38.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_orphaned_18 pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el9.x86_64.rpm pigsty 1.0 39.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_orphaned_18 pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el9.aarch64.rpm pigsty 1.0 39.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_orphaned_18 pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el10.x86_64.rpm pigsty 1.0 39.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_orphaned_18 pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el10.aarch64.rpm pigsty 1.0 39.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_orphaned_18-1.0-2.git20260427.4e23c9cPGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-orphaned postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_amd64.deb pigsty 1.0 29.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orphaned/postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-orphaned postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_arm64.deb pigsty 1.0 29.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orphaned/postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-orphaned postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~trixie_amd64.deb pigsty 1.0 29.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orphaned/postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-orphaned postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~trixie_arm64.deb pigsty 1.0 29.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orphaned/postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-orphaned postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~jammy_amd64.deb pigsty 1.0 31.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orphaned/postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-orphaned postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~jammy_arm64.deb pigsty 1.0 31.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orphaned/postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-orphaned postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~noble_amd64.deb pigsty 1.0 30.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orphaned/postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-orphaned postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~noble_arm64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orphaned/postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-orphaned postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~resolute_amd64.deb pigsty 1.0 30.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orphaned/postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-orphaned postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~resolute_arm64.deb pigsty 1.0 30.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orphaned/postgresql-18-pg-orphaned_1.0+git20260427-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_orphaned_17 pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el8.x86_64.rpm pigsty 1.0 38.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_orphaned_17 pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el8.aarch64.rpm pigsty 1.0 38.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_orphaned_17 pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el9.x86_64.rpm pigsty 1.0 39.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_orphaned_17 pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el9.aarch64.rpm pigsty 1.0 39.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_orphaned_17 pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el10.x86_64.rpm pigsty 1.0 39.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_orphaned_17 pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el10.aarch64.rpm pigsty 1.0 39.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_orphaned_17-1.0-2.git20260427.4e23c9cPGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-orphaned postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_amd64.deb pigsty 1.0 29.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orphaned/postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-orphaned postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_arm64.deb pigsty 1.0 29.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orphaned/postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-orphaned postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~trixie_amd64.deb pigsty 1.0 29.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orphaned/postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-orphaned postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~trixie_arm64.deb pigsty 1.0 29.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orphaned/postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-orphaned postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~jammy_amd64.deb pigsty 1.0 35.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orphaned/postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-orphaned postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~jammy_arm64.deb pigsty 1.0 35.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orphaned/postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-orphaned postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~noble_amd64.deb pigsty 1.0 30.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orphaned/postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-orphaned postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~noble_arm64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orphaned/postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-orphaned postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~resolute_amd64.deb pigsty 1.0 30.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orphaned/postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-orphaned postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~resolute_arm64.deb pigsty 1.0 30.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orphaned/postgresql-17-pg-orphaned_1.0+git20260427-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_orphaned_16 pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el8.x86_64.rpm pigsty 1.0 38.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_orphaned_16 pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el8.aarch64.rpm pigsty 1.0 38.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_orphaned_16 pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el9.x86_64.rpm pigsty 1.0 39.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_orphaned_16 pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el9.aarch64.rpm pigsty 1.0 39.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_orphaned_16 pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el10.x86_64.rpm pigsty 1.0 39.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_orphaned_16 pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el10.aarch64.rpm pigsty 1.0 39.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_orphaned_16-1.0-2.git20260427.4e23c9cPGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-orphaned postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_amd64.deb pigsty 1.0 29.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orphaned/postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-orphaned postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_arm64.deb pigsty 1.0 29.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orphaned/postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-orphaned postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~trixie_amd64.deb pigsty 1.0 29.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orphaned/postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-orphaned postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~trixie_arm64.deb pigsty 1.0 29.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orphaned/postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-orphaned postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~jammy_amd64.deb pigsty 1.0 35.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orphaned/postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-orphaned postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~jammy_arm64.deb pigsty 1.0 35.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orphaned/postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-orphaned postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~noble_amd64.deb pigsty 1.0 30.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orphaned/postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-orphaned postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~noble_arm64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orphaned/postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-orphaned postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~resolute_amd64.deb pigsty 1.0 30.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orphaned/postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-orphaned postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~resolute_arm64.deb pigsty 1.0 30.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orphaned/postgresql-16-pg-orphaned_1.0+git20260427-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_orphaned_15 pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el8.x86_64.rpm pigsty 1.0 38.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_orphaned_15 pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el8.aarch64.rpm pigsty 1.0 38.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_orphaned_15 pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el9.x86_64.rpm pigsty 1.0 39.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_orphaned_15 pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el9.aarch64.rpm pigsty 1.0 39.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_orphaned_15 pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el10.x86_64.rpm pigsty 1.0 39.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_orphaned_15 pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el10.aarch64.rpm pigsty 1.0 39.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_orphaned_15-1.0-2.git20260427.4e23c9cPGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-orphaned postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_amd64.deb pigsty 1.0 29.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orphaned/postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-orphaned postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_arm64.deb pigsty 1.0 29.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orphaned/postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-orphaned postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~trixie_amd64.deb pigsty 1.0 29.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orphaned/postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-orphaned postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~trixie_arm64.deb pigsty 1.0 29.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orphaned/postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-orphaned postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~jammy_amd64.deb pigsty 1.0 35.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orphaned/postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-orphaned postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~jammy_arm64.deb pigsty 1.0 35.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orphaned/postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-orphaned postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~noble_amd64.deb pigsty 1.0 30.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orphaned/postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-orphaned postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~noble_arm64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orphaned/postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-orphaned postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~resolute_amd64.deb pigsty 1.0 30.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orphaned/postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-orphaned postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~resolute_arm64.deb pigsty 1.0 30.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orphaned/postgresql-15-pg-orphaned_1.0+git20260427-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_orphaned` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_orphaned         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_orphaned` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_orphaned;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_orphaned -v 19  # PG 19
pig ext install -y pg_orphaned -v 18  # PG 18
pig ext install -y pg_orphaned -v 17  # PG 17
pig ext install -y pg_orphaned -v 16  # PG 16
pig ext install -y pg_orphaned -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_orphaned_19       # PG 19
dnf install -y pg_orphaned_18       # PG 18
dnf install -y pg_orphaned_17       # PG 17
dnf install -y pg_orphaned_16       # PG 16
dnf install -y pg_orphaned_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pg-orphaned   # PG 19
apt install -y postgresql-18-pg-orphaned   # PG 18
apt install -y postgresql-17-pg-orphaned   # PG 17
apt install -y postgresql-16-pg-orphaned   # PG 16
apt install -y postgresql-15-pg-orphaned   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION pg_orphaned;
```




## 用法

> [pg_orphaned: 处理孤立文件](https://github.com/bdrouvot/pg_orphaned)

pg_orphaned 提供检测和管理 PostgreSQL 中孤立数据文件的函数。它通过使用脏快照处理进行中的事务可能导致误报的边角情况。

### 列出孤立文件

```sql
-- 列出孤立文件（默认：超过 1 天的标记为 "older"）
SELECT * FROM pg_list_orphaned();

-- 自定义时间阈值
SELECT * FROM pg_list_orphaned('10 seconds');
SELECT * FROM pg_list_orphaned('1 minute');
```

返回：`dbname`、`path`、`name`、`size`、`mod_time`、`relfilenode`、`reloid`、`older`（布尔值）。

### 将孤立文件移至备份

```sql
-- 将超过阈值的文件移动到 orphaned_backup 目录
SELECT pg_move_orphaned('1 minute');
```

### 列出已移动的文件

```sql
SELECT * FROM pg_list_orphaned_moved();
```

### 将文件移回（如果仍然是孤立的）

```sql
SELECT pg_move_back_orphaned();
```

### 删除已移动的文件

```sql
SELECT pg_remove_moved_orphaned();
```

### 典型工作流程

```sql
-- 1. 检查孤立文件
SELECT * FROM pg_list_orphaned('1 minute');

-- 2. 将它们移到备份（仅超过阈值的）
SELECT pg_move_orphaned('1 minute');

-- 3. 验证移动了什么
SELECT * FROM pg_list_orphaned_moved();

-- 4. 确认后删除备份文件
SELECT pg_remove_moved_orphaned();
```

注意：函数操作的是你当前连接的数据库中的孤立文件。在移动或删除文件前请务必仔细检查。

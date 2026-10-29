---
title: "oai_fdw"
linkTitle: "oai_fdw"
description: "通过 HTTP/HTTPS 采集 OAI-PMH 元数据的只读外部数据包装器。"
weight: 8770
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/jimjonesbr/oai_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">jimjonesbr/oai_fdw</div>
    <div class="ext-card__desc">https://github.com/jimjonesbr/oai_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/oai_fdw-1.16.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">oai_fdw-1.16.0.tar.gz</div>
    <div class="ext-card__desc">oai_fdw-1.16.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`oai_fdw`**](/ext/e/oai_fdw) | `1.16` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8770  | [**`oai_fdw`**](/ext/e/oai_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`rdf_fdw`](/ext/e/rdf_fdw) [`http`](/ext/e/http) [`postgres_fdw`](/ext/e/postgres_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> SQL/control 1.16; package 1.16.0 (tag v1.16). Read-only OAI-PMH 2.0 FDW; libcurl/libxml2; no preload. Response limit has a 1 GB hard ceiling. PG14-18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.16` | {{< pgvers "14,15,16,17,18" >}} | `oai_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.16.0` | {{< pgvers "14,15,16,17,18" >}} | `oai_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.16.0` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-oai-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 | AVAIL PIGSTY 1.16.0 1 |
@ el8.x86_64 18 oai_fdw_18 oai_fdw_18-1.16.0-1PGSTY.el8.x86_64.rpm pigsty 1.16.0 115.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/oai_fdw_18-1.16.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 oai_fdw_18 oai_fdw_18-1.16.0-1PGSTY.el8.aarch64.rpm pigsty 1.16.0 113.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/oai_fdw_18-1.16.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 oai_fdw_18 oai_fdw_18-1.16.0-1PGSTY.el9.x86_64.rpm pigsty 1.16.0 117.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/oai_fdw_18-1.16.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 oai_fdw_18 oai_fdw_18-1.16.0-1PGSTY.el9.aarch64.rpm pigsty 1.16.0 115.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/oai_fdw_18-1.16.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 oai_fdw_18 oai_fdw_18-1.16.0-1PGSTY.el10.x86_64.rpm pigsty 1.16.0 117.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/oai_fdw_18-1.16.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 oai_fdw_18 oai_fdw_18-1.16.0-1PGSTY.el10.aarch64.rpm pigsty 1.16.0 116.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/oai_fdw_18-1.16.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-oai-fdw postgresql-18-oai-fdw_1.16.0-1PGSTY~bookworm_amd64.deb pigsty 1.16.0 107.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oai-fdw/postgresql-18-oai-fdw_1.16.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-oai-fdw postgresql-18-oai-fdw_1.16.0-1PGSTY~bookworm_arm64.deb pigsty 1.16.0 105.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oai-fdw/postgresql-18-oai-fdw_1.16.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-oai-fdw postgresql-18-oai-fdw_1.16.0-1PGSTY~trixie_amd64.deb pigsty 1.16.0 107.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oai-fdw/postgresql-18-oai-fdw_1.16.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-oai-fdw postgresql-18-oai-fdw_1.16.0-1PGSTY~trixie_arm64.deb pigsty 1.16.0 104.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oai-fdw/postgresql-18-oai-fdw_1.16.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-oai-fdw postgresql-18-oai-fdw_1.16.0-1PGSTY~jammy_amd64.deb pigsty 1.16.0 116.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oai-fdw/postgresql-18-oai-fdw_1.16.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-oai-fdw postgresql-18-oai-fdw_1.16.0-1PGSTY~jammy_arm64.deb pigsty 1.16.0 114.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oai-fdw/postgresql-18-oai-fdw_1.16.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-oai-fdw postgresql-18-oai-fdw_1.16.0-1PGSTY~noble_amd64.deb pigsty 1.16.0 111.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oai-fdw/postgresql-18-oai-fdw_1.16.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-oai-fdw postgresql-18-oai-fdw_1.16.0-1PGSTY~noble_arm64.deb pigsty 1.16.0 109.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oai-fdw/postgresql-18-oai-fdw_1.16.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-oai-fdw postgresql-18-oai-fdw_1.16.0-1PGSTY~resolute_amd64.deb pigsty 1.16.0 109.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/oai-fdw/postgresql-18-oai-fdw_1.16.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-oai-fdw postgresql-18-oai-fdw_1.16.0-1PGSTY~resolute_arm64.deb pigsty 1.16.0 108.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/oai-fdw/postgresql-18-oai-fdw_1.16.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 oai_fdw_17 oai_fdw_17-1.16.0-1PGSTY.el8.x86_64.rpm pigsty 1.16.0 115.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/oai_fdw_17-1.16.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 oai_fdw_17 oai_fdw_17-1.16.0-1PGSTY.el8.aarch64.rpm pigsty 1.16.0 113.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/oai_fdw_17-1.16.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 oai_fdw_17 oai_fdw_17-1.16.0-1PGSTY.el9.x86_64.rpm pigsty 1.16.0 117.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/oai_fdw_17-1.16.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 oai_fdw_17 oai_fdw_17-1.16.0-1PGSTY.el9.aarch64.rpm pigsty 1.16.0 115.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/oai_fdw_17-1.16.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 oai_fdw_17 oai_fdw_17-1.16.0-1PGSTY.el10.x86_64.rpm pigsty 1.16.0 117.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/oai_fdw_17-1.16.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 oai_fdw_17 oai_fdw_17-1.16.0-1PGSTY.el10.aarch64.rpm pigsty 1.16.0 116.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/oai_fdw_17-1.16.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-oai-fdw postgresql-17-oai-fdw_1.16.0-1PGSTY~bookworm_amd64.deb pigsty 1.16.0 107.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oai-fdw/postgresql-17-oai-fdw_1.16.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-oai-fdw postgresql-17-oai-fdw_1.16.0-1PGSTY~bookworm_arm64.deb pigsty 1.16.0 105.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oai-fdw/postgresql-17-oai-fdw_1.16.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-oai-fdw postgresql-17-oai-fdw_1.16.0-1PGSTY~trixie_amd64.deb pigsty 1.16.0 107.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oai-fdw/postgresql-17-oai-fdw_1.16.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-oai-fdw postgresql-17-oai-fdw_1.16.0-1PGSTY~trixie_arm64.deb pigsty 1.16.0 104.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oai-fdw/postgresql-17-oai-fdw_1.16.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-oai-fdw postgresql-17-oai-fdw_1.16.0-1PGSTY~jammy_amd64.deb pigsty 1.16.0 125.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oai-fdw/postgresql-17-oai-fdw_1.16.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-oai-fdw postgresql-17-oai-fdw_1.16.0-1PGSTY~jammy_arm64.deb pigsty 1.16.0 123.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oai-fdw/postgresql-17-oai-fdw_1.16.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-oai-fdw postgresql-17-oai-fdw_1.16.0-1PGSTY~noble_amd64.deb pigsty 1.16.0 111.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oai-fdw/postgresql-17-oai-fdw_1.16.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-oai-fdw postgresql-17-oai-fdw_1.16.0-1PGSTY~noble_arm64.deb pigsty 1.16.0 109.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oai-fdw/postgresql-17-oai-fdw_1.16.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-oai-fdw postgresql-17-oai-fdw_1.16.0-1PGSTY~resolute_amd64.deb pigsty 1.16.0 109.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/oai-fdw/postgresql-17-oai-fdw_1.16.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-oai-fdw postgresql-17-oai-fdw_1.16.0-1PGSTY~resolute_arm64.deb pigsty 1.16.0 108.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/oai-fdw/postgresql-17-oai-fdw_1.16.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 oai_fdw_16 oai_fdw_16-1.16.0-1PGSTY.el8.x86_64.rpm pigsty 1.16.0 115.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/oai_fdw_16-1.16.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 oai_fdw_16 oai_fdw_16-1.16.0-1PGSTY.el8.aarch64.rpm pigsty 1.16.0 113.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/oai_fdw_16-1.16.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 oai_fdw_16 oai_fdw_16-1.16.0-1PGSTY.el9.x86_64.rpm pigsty 1.16.0 117.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/oai_fdw_16-1.16.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 oai_fdw_16 oai_fdw_16-1.16.0-1PGSTY.el9.aarch64.rpm pigsty 1.16.0 115.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/oai_fdw_16-1.16.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 oai_fdw_16 oai_fdw_16-1.16.0-1PGSTY.el10.x86_64.rpm pigsty 1.16.0 117.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/oai_fdw_16-1.16.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 oai_fdw_16 oai_fdw_16-1.16.0-1PGSTY.el10.aarch64.rpm pigsty 1.16.0 116.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/oai_fdw_16-1.16.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-oai-fdw postgresql-16-oai-fdw_1.16.0-1PGSTY~bookworm_amd64.deb pigsty 1.16.0 107.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oai-fdw/postgresql-16-oai-fdw_1.16.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-oai-fdw postgresql-16-oai-fdw_1.16.0-1PGSTY~bookworm_arm64.deb pigsty 1.16.0 105.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oai-fdw/postgresql-16-oai-fdw_1.16.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-oai-fdw postgresql-16-oai-fdw_1.16.0-1PGSTY~trixie_amd64.deb pigsty 1.16.0 107.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oai-fdw/postgresql-16-oai-fdw_1.16.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-oai-fdw postgresql-16-oai-fdw_1.16.0-1PGSTY~trixie_arm64.deb pigsty 1.16.0 104.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oai-fdw/postgresql-16-oai-fdw_1.16.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-oai-fdw postgresql-16-oai-fdw_1.16.0-1PGSTY~jammy_amd64.deb pigsty 1.16.0 125.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oai-fdw/postgresql-16-oai-fdw_1.16.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-oai-fdw postgresql-16-oai-fdw_1.16.0-1PGSTY~jammy_arm64.deb pigsty 1.16.0 123.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oai-fdw/postgresql-16-oai-fdw_1.16.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-oai-fdw postgresql-16-oai-fdw_1.16.0-1PGSTY~noble_amd64.deb pigsty 1.16.0 111.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oai-fdw/postgresql-16-oai-fdw_1.16.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-oai-fdw postgresql-16-oai-fdw_1.16.0-1PGSTY~noble_arm64.deb pigsty 1.16.0 111.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oai-fdw/postgresql-16-oai-fdw_1.16.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-oai-fdw postgresql-16-oai-fdw_1.16.0-1PGSTY~resolute_amd64.deb pigsty 1.16.0 109.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/oai-fdw/postgresql-16-oai-fdw_1.16.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-oai-fdw postgresql-16-oai-fdw_1.16.0-1PGSTY~resolute_arm64.deb pigsty 1.16.0 108.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/oai-fdw/postgresql-16-oai-fdw_1.16.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 oai_fdw_15 oai_fdw_15-1.16.0-1PGSTY.el8.x86_64.rpm pigsty 1.16.0 115.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/oai_fdw_15-1.16.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 oai_fdw_15 oai_fdw_15-1.16.0-1PGSTY.el8.aarch64.rpm pigsty 1.16.0 113.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/oai_fdw_15-1.16.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 oai_fdw_15 oai_fdw_15-1.16.0-1PGSTY.el9.x86_64.rpm pigsty 1.16.0 117.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/oai_fdw_15-1.16.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 oai_fdw_15 oai_fdw_15-1.16.0-1PGSTY.el9.aarch64.rpm pigsty 1.16.0 115.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/oai_fdw_15-1.16.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 oai_fdw_15 oai_fdw_15-1.16.0-1PGSTY.el10.x86_64.rpm pigsty 1.16.0 117.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/oai_fdw_15-1.16.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 oai_fdw_15 oai_fdw_15-1.16.0-1PGSTY.el10.aarch64.rpm pigsty 1.16.0 116.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/oai_fdw_15-1.16.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-oai-fdw postgresql-15-oai-fdw_1.16.0-1PGSTY~bookworm_amd64.deb pigsty 1.16.0 107.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oai-fdw/postgresql-15-oai-fdw_1.16.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-oai-fdw postgresql-15-oai-fdw_1.16.0-1PGSTY~bookworm_arm64.deb pigsty 1.16.0 116.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oai-fdw/postgresql-15-oai-fdw_1.16.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-oai-fdw postgresql-15-oai-fdw_1.16.0-1PGSTY~trixie_amd64.deb pigsty 1.16.0 107.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oai-fdw/postgresql-15-oai-fdw_1.16.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-oai-fdw postgresql-15-oai-fdw_1.16.0-1PGSTY~trixie_arm64.deb pigsty 1.16.0 104.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oai-fdw/postgresql-15-oai-fdw_1.16.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-oai-fdw postgresql-15-oai-fdw_1.16.0-1PGSTY~jammy_amd64.deb pigsty 1.16.0 125.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oai-fdw/postgresql-15-oai-fdw_1.16.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-oai-fdw postgresql-15-oai-fdw_1.16.0-1PGSTY~jammy_arm64.deb pigsty 1.16.0 123.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oai-fdw/postgresql-15-oai-fdw_1.16.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-oai-fdw postgresql-15-oai-fdw_1.16.0-1PGSTY~noble_amd64.deb pigsty 1.16.0 111.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oai-fdw/postgresql-15-oai-fdw_1.16.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-oai-fdw postgresql-15-oai-fdw_1.16.0-1PGSTY~noble_arm64.deb pigsty 1.16.0 109.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oai-fdw/postgresql-15-oai-fdw_1.16.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-oai-fdw postgresql-15-oai-fdw_1.16.0-1PGSTY~resolute_amd64.deb pigsty 1.16.0 109.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/oai-fdw/postgresql-15-oai-fdw_1.16.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-oai-fdw postgresql-15-oai-fdw_1.16.0-1PGSTY~resolute_arm64.deb pigsty 1.16.0 108.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/oai-fdw/postgresql-15-oai-fdw_1.16.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 oai_fdw_14 oai_fdw_14-1.16.0-1PGSTY.el8.x86_64.rpm pigsty 1.16.0 115.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/oai_fdw_14-1.16.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 oai_fdw_14 oai_fdw_14-1.16.0-1PGSTY.el8.aarch64.rpm pigsty 1.16.0 113.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/oai_fdw_14-1.16.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 oai_fdw_14 oai_fdw_14-1.16.0-1PGSTY.el9.x86_64.rpm pigsty 1.16.0 117.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/oai_fdw_14-1.16.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 oai_fdw_14 oai_fdw_14-1.16.0-1PGSTY.el9.aarch64.rpm pigsty 1.16.0 115.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/oai_fdw_14-1.16.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 oai_fdw_14 oai_fdw_14-1.16.0-1PGSTY.el10.x86_64.rpm pigsty 1.16.0 117.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/oai_fdw_14-1.16.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 oai_fdw_14 oai_fdw_14-1.16.0-1PGSTY.el10.aarch64.rpm pigsty 1.16.0 116.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/oai_fdw_14-1.16.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-oai-fdw postgresql-14-oai-fdw_1.16.0-1PGSTY~bookworm_amd64.deb pigsty 1.16.0 107.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oai-fdw/postgresql-14-oai-fdw_1.16.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-oai-fdw postgresql-14-oai-fdw_1.16.0-1PGSTY~bookworm_arm64.deb pigsty 1.16.0 105.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oai-fdw/postgresql-14-oai-fdw_1.16.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-oai-fdw postgresql-14-oai-fdw_1.16.0-1PGSTY~trixie_amd64.deb pigsty 1.16.0 107.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oai-fdw/postgresql-14-oai-fdw_1.16.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-oai-fdw postgresql-14-oai-fdw_1.16.0-1PGSTY~trixie_arm64.deb pigsty 1.16.0 104.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oai-fdw/postgresql-14-oai-fdw_1.16.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-oai-fdw postgresql-14-oai-fdw_1.16.0-1PGSTY~jammy_amd64.deb pigsty 1.16.0 125.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oai-fdw/postgresql-14-oai-fdw_1.16.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-oai-fdw postgresql-14-oai-fdw_1.16.0-1PGSTY~jammy_arm64.deb pigsty 1.16.0 123.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oai-fdw/postgresql-14-oai-fdw_1.16.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-oai-fdw postgresql-14-oai-fdw_1.16.0-1PGSTY~noble_amd64.deb pigsty 1.16.0 111.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oai-fdw/postgresql-14-oai-fdw_1.16.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-oai-fdw postgresql-14-oai-fdw_1.16.0-1PGSTY~noble_arm64.deb pigsty 1.16.0 109.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oai-fdw/postgresql-14-oai-fdw_1.16.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-oai-fdw postgresql-14-oai-fdw_1.16.0-1PGSTY~resolute_amd64.deb pigsty 1.16.0 109.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/oai-fdw/postgresql-14-oai-fdw_1.16.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-oai-fdw postgresql-14-oai-fdw_1.16.0-1PGSTY~resolute_arm64.deb pigsty 1.16.0 107.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/oai-fdw/postgresql-14-oai-fdw_1.16.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `oai_fdw` 扩展的 RPM / DEB 包：

```bash
pig build pkg oai_fdw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `oai_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install oai_fdw;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y oai_fdw -v 18  # PG 18
pig ext install -y oai_fdw -v 17  # PG 17
pig ext install -y oai_fdw -v 16  # PG 16
pig ext install -y oai_fdw -v 15  # PG 15
pig ext install -y oai_fdw -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y oai_fdw_18       # PG 18
dnf install -y oai_fdw_17       # PG 17
dnf install -y oai_fdw_16       # PG 16
dnf install -y oai_fdw_15       # PG 15
dnf install -y oai_fdw_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-oai-fdw   # PG 18
apt install -y postgresql-17-oai-fdw   # PG 17
apt install -y postgresql-16-oai-fdw   # PG 16
apt install -y postgresql-15-oai-fdw   # PG 15
apt install -y postgresql-14-oai-fdw   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION oai_fdw;
```

## 用法

来源：

- [CHANGELOG.md](https://github.com/jimjonesbr/oai_fdw/blob/206169ac1cc2ea9a35d92e9a3ade9d82ec01d18c/CHANGELOG.md)
- [官方 v1.16 README](https://github.com/jimjonesbr/oai_fdw/blob/206169ac1cc2ea9a35d92e9a3ade9d82ec01d18c/README.md)
- [官方 v1.16 控制文件](https://github.com/jimjonesbr/oai_fdw/blob/206169ac1cc2ea9a35d92e9a3ade9d82ec01d18c/oai_fdw.control)
- [官方 v1.16 更新日志](https://github.com/jimjonesbr/oai_fdw/blob/206169ac1cc2ea9a35d92e9a3ade9d82ec01d18c/CHANGELOG.md)
- [官方 OAI-PMH 规范](https://www.openarchives.org/OAI/openarchivesprotocol.html)

`oai_fdw` 1.16 是一个通过 HTTP 或 HTTPS 从 OAI-PMH 2.0 仓库采集元数据的外部数据包装器。它把 OAI 记录头和 XML 内容映射到外部表列，支持按仓库或 set 自动生成表，也可以把采集记录复制到本地表。

### 核心流程

先为仓库创建 server，再显式定义外部表或使用 `IMPORT FOREIGN SCHEMA`。每张表都需要 `oai_dc` 等元数据格式。

```sql
CREATE EXTENSION oai_fdw;
CREATE SCHEMA oai_data;

CREATE SERVER museum_oai
FOREIGN DATA WRAPPER oai_fdw
OPTIONS (url 'https://example.org/oai');

CREATE FOREIGN TABLE oai_data.records (
    id text OPTIONS (oai_node 'identifier'),
    content xml OPTIONS (oai_node 'content'),
    sets text[] OPTIONS (oai_node 'setspec'),
    datestamp timestamp OPTIONS (oai_node 'datestamp'),
    format text OPTIONS (oai_node 'metadataprefix'),
    status boolean OPTIONS (oai_node 'status')
)
SERVER museum_oai
OPTIONS (metadataprefix 'oai_dc');

SELECT id, datestamp
FROM oai_data.records
LIMIT 100;
```

如果没有 `setspec`，一次扫描可能采集仓库暴露的全部 set。可视情况使用 `from`、`until` 或 `setspec` 表选项和外层 `LIMIT`，但必须用远程服务验证实际请求行为。

### 导入与支持接口

- `IMPORT FOREIGN SCHEMA oai_repository` 创建一张覆盖整个仓库的表；`oai_sets` 为每个 OAI set 创建一张表。两者都要求 `metadataprefix` 导入选项，并支持 `LIMIT TO` 或 `EXCEPT`。
- 列选项 `oai_node` 把 `identifier`、`setspec`、`datestamp`、`content`、`metadataprefix` 或 `status` 映射到兼容的 PostgreSQL 类型。
- Server 选项包括 `url`、`http_proxy`、`connect_timeout`、`connect_retry`、`request_redirect` 和 `request_max_redirect`。
- `OAI_HarvestTable` 把外部表采集结果复制到本地表；OAI 支持函数暴露 set、格式等仓库元数据。

1.13 版把 `proxy_user` 和 `proxy_password` 移到了 user mapping。仓库 `user` 与 `password` 也应放在那里，并使用 HTTP Basic Authentication。

### 网络、凭据与一致性

查询会同步发出远程请求并解析不可信 XML。延迟、分页、服务限流、重定向、畸形响应及仓库变化都会影响结果。应把凭据放在最小权限 user mapping 中，限制创建或修改 server 的权限，并把可配置 URL/代理视为具有 SSRF 影响的出站网络访问。

OAI-PMH 是采集协议，不是事务数据库 API。重复扫描可能看到变化中的页面和删除记录；本地副本也会过期。应记录采集窗口与标识符，使刷新可重启，并显式协调删除/状态记录。1.13 版需要匹配的 libcurl/libxml2 构建依赖，还应针对每个目标仓库的元数据格式进行测试。

### 1.15 版本变化

HTTP 429 与 503 重试遵循退避及 Retry-After，from/until 校验和时间戳粒度检查更加严格。会检查服务器 USAGE 权限及视图所有者的用户映射，并修复采集时间窗口和取消处理。持续低速传输达到文档中的五分钟阈值后会中止。安装匹配文件后执行 `ALTER EXTENSION oai_fdw UPDATE`。PGXN 分发版本为 1.15.0，SQL／控制版本则为 1.15。

### 1.16 响应限制

可用 server 选项 `max_response_size` 限制响应字节数；即使未配置更小的上限，也有 1 GB 的硬限制。超过上限会中止请求。该 FDW 只读，INSERT、UPDATE 和 DELETE 现在立即报错。GetRecord 估计行数上限为 1，EXPLAIN 显示 server 标识。发行版 1.16.0 使用 SQL 版本 1.16；安装匹配文件后执行 `ALTER EXTENSION oai_fdw UPDATE TO '1.16'`。

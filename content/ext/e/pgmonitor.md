---
title: "pgmonitor"
linkTitle: "pgmonitor"
description: "面向外部采集器的指标视图与后台刷新工作进程"
weight: 6070
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/CrunchyData/pgmonitor-extension">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">CrunchyData/pgmonitor-extension</div>
    <div class="ext-card__desc">https://github.com/CrunchyData/pgmonitor-extension</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgmonitor-extension-2.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgmonitor-extension-2.2.0.tar.gz</div>
    <div class="ext-card__desc">pgmonitor-extension-2.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmonitor`**](/ext/e/pgmonitor) | `2.2.0` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6070  | [**`pgmonitor`**](/ext/e/pgmonitor) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgnodemx`](/ext/e/pgnodemx) [`system_stats`](/ext/e/system_stats) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_profile`](/ext/e/pg_profile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Metric objects work without preloading; the optional background worker requires shared_preload_libraries=pgmonitor_bgw.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmonitor` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmonitor_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmonitor` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 | AVAIL PIGSTY 2.2.0 1 |
@ el8.x86_64 18 pgmonitor_18 pgmonitor_18-2.2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.2.0 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmonitor_18-2.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgmonitor_18 pgmonitor_18-2.2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.2.0 32.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmonitor_18-2.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgmonitor_18 pgmonitor_18-2.2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.2.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmonitor_18-2.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgmonitor_18 pgmonitor_18-2.2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.2.0 31.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmonitor_18-2.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgmonitor_18 pgmonitor_18-2.2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.2.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmonitor_18-2.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgmonitor_18 pgmonitor_18-2.2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.2.0 31.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmonitor_18-2.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgmonitor postgresql-18-pgmonitor_2.2.0-1PIGSTY~bookworm_amd64.deb pigsty 2.2.0 36.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmonitor/postgresql-18-pgmonitor_2.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgmonitor postgresql-18-pgmonitor_2.2.0-1PIGSTY~bookworm_arm64.deb pigsty 2.2.0 36.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmonitor/postgresql-18-pgmonitor_2.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgmonitor postgresql-18-pgmonitor_2.2.0-1PIGSTY~trixie_amd64.deb pigsty 2.2.0 36.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmonitor/postgresql-18-pgmonitor_2.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgmonitor postgresql-18-pgmonitor_2.2.0-1PIGSTY~trixie_arm64.deb pigsty 2.2.0 36.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmonitor/postgresql-18-pgmonitor_2.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgmonitor postgresql-18-pgmonitor_2.2.0-1PIGSTY~jammy_amd64.deb pigsty 2.2.0 38.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmonitor/postgresql-18-pgmonitor_2.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgmonitor postgresql-18-pgmonitor_2.2.0-1PIGSTY~jammy_arm64.deb pigsty 2.2.0 38.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmonitor/postgresql-18-pgmonitor_2.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgmonitor postgresql-18-pgmonitor_2.2.0-1PIGSTY~noble_amd64.deb pigsty 2.2.0 38.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmonitor/postgresql-18-pgmonitor_2.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgmonitor postgresql-18-pgmonitor_2.2.0-1PIGSTY~noble_arm64.deb pigsty 2.2.0 37.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmonitor/postgresql-18-pgmonitor_2.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgmonitor postgresql-18-pgmonitor_2.2.0-1PIGSTY~resolute_amd64.deb pigsty 2.2.0 38.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmonitor/postgresql-18-pgmonitor_2.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgmonitor postgresql-18-pgmonitor_2.2.0-1PIGSTY~resolute_arm64.deb pigsty 2.2.0 37.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmonitor/postgresql-18-pgmonitor_2.2.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgmonitor_17 pgmonitor_17-2.2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.2.0 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmonitor_17-2.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgmonitor_17 pgmonitor_17-2.2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.2.0 32.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmonitor_17-2.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgmonitor_17 pgmonitor_17-2.2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.2.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmonitor_17-2.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgmonitor_17 pgmonitor_17-2.2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.2.0 31.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmonitor_17-2.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgmonitor_17 pgmonitor_17-2.2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.2.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmonitor_17-2.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgmonitor_17 pgmonitor_17-2.2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.2.0 31.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmonitor_17-2.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgmonitor postgresql-17-pgmonitor_2.2.0-1PIGSTY~bookworm_amd64.deb pigsty 2.2.0 36.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmonitor/postgresql-17-pgmonitor_2.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgmonitor postgresql-17-pgmonitor_2.2.0-1PIGSTY~bookworm_arm64.deb pigsty 2.2.0 36.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmonitor/postgresql-17-pgmonitor_2.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgmonitor postgresql-17-pgmonitor_2.2.0-1PIGSTY~trixie_amd64.deb pigsty 2.2.0 36.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmonitor/postgresql-17-pgmonitor_2.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgmonitor postgresql-17-pgmonitor_2.2.0-1PIGSTY~trixie_arm64.deb pigsty 2.2.0 36.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmonitor/postgresql-17-pgmonitor_2.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgmonitor postgresql-17-pgmonitor_2.2.0-1PIGSTY~jammy_amd64.deb pigsty 2.2.0 43.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmonitor/postgresql-17-pgmonitor_2.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgmonitor postgresql-17-pgmonitor_2.2.0-1PIGSTY~jammy_arm64.deb pigsty 2.2.0 42.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmonitor/postgresql-17-pgmonitor_2.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgmonitor postgresql-17-pgmonitor_2.2.0-1PIGSTY~noble_amd64.deb pigsty 2.2.0 37.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmonitor/postgresql-17-pgmonitor_2.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgmonitor postgresql-17-pgmonitor_2.2.0-1PIGSTY~noble_arm64.deb pigsty 2.2.0 37.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmonitor/postgresql-17-pgmonitor_2.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgmonitor postgresql-17-pgmonitor_2.2.0-1PIGSTY~resolute_amd64.deb pigsty 2.2.0 38.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmonitor/postgresql-17-pgmonitor_2.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgmonitor postgresql-17-pgmonitor_2.2.0-1PIGSTY~resolute_arm64.deb pigsty 2.2.0 38.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmonitor/postgresql-17-pgmonitor_2.2.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgmonitor_16 pgmonitor_16-2.2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.2.0 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmonitor_16-2.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgmonitor_16 pgmonitor_16-2.2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.2.0 32.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmonitor_16-2.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgmonitor_16 pgmonitor_16-2.2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.2.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmonitor_16-2.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgmonitor_16 pgmonitor_16-2.2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.2.0 31.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmonitor_16-2.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgmonitor_16 pgmonitor_16-2.2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.2.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmonitor_16-2.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgmonitor_16 pgmonitor_16-2.2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.2.0 31.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmonitor_16-2.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgmonitor postgresql-16-pgmonitor_2.2.0-1PIGSTY~bookworm_amd64.deb pigsty 2.2.0 36.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmonitor/postgresql-16-pgmonitor_2.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgmonitor postgresql-16-pgmonitor_2.2.0-1PIGSTY~bookworm_arm64.deb pigsty 2.2.0 36.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmonitor/postgresql-16-pgmonitor_2.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgmonitor postgresql-16-pgmonitor_2.2.0-1PIGSTY~trixie_amd64.deb pigsty 2.2.0 36.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmonitor/postgresql-16-pgmonitor_2.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgmonitor postgresql-16-pgmonitor_2.2.0-1PIGSTY~trixie_arm64.deb pigsty 2.2.0 36.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmonitor/postgresql-16-pgmonitor_2.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgmonitor postgresql-16-pgmonitor_2.2.0-1PIGSTY~jammy_amd64.deb pigsty 2.2.0 42.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmonitor/postgresql-16-pgmonitor_2.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgmonitor postgresql-16-pgmonitor_2.2.0-1PIGSTY~jammy_arm64.deb pigsty 2.2.0 42.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmonitor/postgresql-16-pgmonitor_2.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgmonitor postgresql-16-pgmonitor_2.2.0-1PIGSTY~noble_amd64.deb pigsty 2.2.0 37.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmonitor/postgresql-16-pgmonitor_2.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgmonitor postgresql-16-pgmonitor_2.2.0-1PIGSTY~noble_arm64.deb pigsty 2.2.0 37.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmonitor/postgresql-16-pgmonitor_2.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgmonitor postgresql-16-pgmonitor_2.2.0-1PIGSTY~resolute_amd64.deb pigsty 2.2.0 38.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmonitor/postgresql-16-pgmonitor_2.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgmonitor postgresql-16-pgmonitor_2.2.0-1PIGSTY~resolute_arm64.deb pigsty 2.2.0 38.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmonitor/postgresql-16-pgmonitor_2.2.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgmonitor_15 pgmonitor_15-2.2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.2.0 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmonitor_15-2.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgmonitor_15 pgmonitor_15-2.2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.2.0 32.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmonitor_15-2.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgmonitor_15 pgmonitor_15-2.2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.2.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmonitor_15-2.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgmonitor_15 pgmonitor_15-2.2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.2.0 31.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmonitor_15-2.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgmonitor_15 pgmonitor_15-2.2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.2.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmonitor_15-2.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgmonitor_15 pgmonitor_15-2.2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.2.0 31.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmonitor_15-2.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgmonitor postgresql-15-pgmonitor_2.2.0-1PIGSTY~bookworm_amd64.deb pigsty 2.2.0 36.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmonitor/postgresql-15-pgmonitor_2.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgmonitor postgresql-15-pgmonitor_2.2.0-1PIGSTY~bookworm_arm64.deb pigsty 2.2.0 36.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmonitor/postgresql-15-pgmonitor_2.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgmonitor postgresql-15-pgmonitor_2.2.0-1PIGSTY~trixie_amd64.deb pigsty 2.2.0 36.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmonitor/postgresql-15-pgmonitor_2.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgmonitor postgresql-15-pgmonitor_2.2.0-1PIGSTY~trixie_arm64.deb pigsty 2.2.0 36.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmonitor/postgresql-15-pgmonitor_2.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgmonitor postgresql-15-pgmonitor_2.2.0-1PIGSTY~jammy_amd64.deb pigsty 2.2.0 42.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmonitor/postgresql-15-pgmonitor_2.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgmonitor postgresql-15-pgmonitor_2.2.0-1PIGSTY~jammy_arm64.deb pigsty 2.2.0 42.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmonitor/postgresql-15-pgmonitor_2.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgmonitor postgresql-15-pgmonitor_2.2.0-1PIGSTY~noble_amd64.deb pigsty 2.2.0 38.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmonitor/postgresql-15-pgmonitor_2.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgmonitor postgresql-15-pgmonitor_2.2.0-1PIGSTY~noble_arm64.deb pigsty 2.2.0 37.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmonitor/postgresql-15-pgmonitor_2.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgmonitor postgresql-15-pgmonitor_2.2.0-1PIGSTY~resolute_amd64.deb pigsty 2.2.0 38.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmonitor/postgresql-15-pgmonitor_2.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgmonitor postgresql-15-pgmonitor_2.2.0-1PIGSTY~resolute_arm64.deb pigsty 2.2.0 38.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmonitor/postgresql-15-pgmonitor_2.2.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgmonitor_14 pgmonitor_14-2.2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.2.0 32.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmonitor_14-2.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgmonitor_14 pgmonitor_14-2.2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.2.0 32.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmonitor_14-2.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgmonitor_14 pgmonitor_14-2.2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.2.0 31.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmonitor_14-2.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgmonitor_14 pgmonitor_14-2.2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.2.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmonitor_14-2.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgmonitor_14 pgmonitor_14-2.2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.2.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmonitor_14-2.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgmonitor_14 pgmonitor_14-2.2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.2.0 31.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmonitor_14-2.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgmonitor postgresql-14-pgmonitor_2.2.0-1PIGSTY~bookworm_amd64.deb pigsty 2.2.0 36.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmonitor/postgresql-14-pgmonitor_2.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgmonitor postgresql-14-pgmonitor_2.2.0-1PIGSTY~bookworm_arm64.deb pigsty 2.2.0 36.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmonitor/postgresql-14-pgmonitor_2.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgmonitor postgresql-14-pgmonitor_2.2.0-1PIGSTY~trixie_amd64.deb pigsty 2.2.0 36.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmonitor/postgresql-14-pgmonitor_2.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgmonitor postgresql-14-pgmonitor_2.2.0-1PIGSTY~trixie_arm64.deb pigsty 2.2.0 36.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmonitor/postgresql-14-pgmonitor_2.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgmonitor postgresql-14-pgmonitor_2.2.0-1PIGSTY~jammy_amd64.deb pigsty 2.2.0 41.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmonitor/postgresql-14-pgmonitor_2.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgmonitor postgresql-14-pgmonitor_2.2.0-1PIGSTY~jammy_arm64.deb pigsty 2.2.0 41.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmonitor/postgresql-14-pgmonitor_2.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgmonitor postgresql-14-pgmonitor_2.2.0-1PIGSTY~noble_amd64.deb pigsty 2.2.0 38.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmonitor/postgresql-14-pgmonitor_2.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgmonitor postgresql-14-pgmonitor_2.2.0-1PIGSTY~noble_arm64.deb pigsty 2.2.0 37.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmonitor/postgresql-14-pgmonitor_2.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgmonitor postgresql-14-pgmonitor_2.2.0-1PIGSTY~resolute_amd64.deb pigsty 2.2.0 38.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmonitor/postgresql-14-pgmonitor_2.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgmonitor postgresql-14-pgmonitor_2.2.0-1PIGSTY~resolute_arm64.deb pigsty 2.2.0 38.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmonitor/postgresql-14-pgmonitor_2.2.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgmonitor` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgmonitor         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgmonitor` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgmonitor;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgmonitor -v 18  # PG 18
pig ext install -y pgmonitor -v 17  # PG 17
pig ext install -y pgmonitor -v 16  # PG 16
pig ext install -y pgmonitor -v 15  # PG 15
pig ext install -y pgmonitor -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgmonitor_18       # PG 18
dnf install -y pgmonitor_17       # PG 17
dnf install -y pgmonitor_16       # PG 16
dnf install -y pgmonitor_15       # PG 15
dnf install -y pgmonitor_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgmonitor   # PG 18
apt install -y postgresql-17-pgmonitor   # PG 17
apt install -y postgresql-16-pgmonitor   # PG 16
apt install -y postgresql-15-pgmonitor   # PG 15
apt install -y postgresql-14-pgmonitor   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgmonitor_bgw';
```


**创建扩展**：

```sql
CREATE EXTENSION pgmonitor;
```

## 用法

来源：

- [pgmonitor-extension v2.2.0 README](https://github.com/CrunchyData/pgmonitor-extension/blob/v2.2.0/README.md)
- [pgmonitor v2.2.0 control file](https://github.com/CrunchyData/pgmonitor-extension/blob/v2.2.0/pgmonitor.control)
- [pgmonitor-extension v2.2.0 release notes](https://github.com/CrunchyData/pgmonitor-extension/releases/tag/v2.2.0)

pgmonitor 通过一组精心挑选的视图、物化视图和表向外部收集器暴露 PostgreSQL 监控指标。其 SQL 指标无需后台工作进程即可使用；可选的 pgmonitor_bgw 后台工作进程会定期刷新物化数据。

### 安装扩展

创建一个专用模式并在此安装 pgmonitor：

    CREATE SCHEMA pgmonitor_ext;
    CREATE EXTENSION pgmonitor SCHEMA pgmonitor_ext;

仅授予收集器所需的访问权限，以访问指标对象。某些底层的 PostgreSQL 统计信息仍受内置角色和行可见性规则的约束。

### 收集指标

外部代理可以选择由扩展配置表描述的活动对象：

    SELECT *
    FROM pgmonitor_ext.metric_views
    WHERE active;

    SELECT *
    FROM pgmonitor_ext.metric_matviews
    WHERE active;

    SELECT *
    FROM pgmonitor_ext.metric_tables
    WHERE active;

这些表描述了指标名称、激活状态、作用范围和刷新间隔。查询安装的定义，而不是假设每个 PostgreSQL 版本都启用了所有指标。

指标表面包括活动情况、数据库和表统计信息、锁、复制、WAL 和归档状态、真空进度、配置设置、检查点以及当其依赖项可用时的扩展特定视图。

### 手动刷新物化指标

无需后台工作进程，可以调用为指定模式和指标配置的刷新过程：

    CALL pgmonitor_ext.refresh_metrics(
      'pgmonitor_ext',
      'pg_stat_statements'
    );

使用 metric_matviews 返回的名称；不要假设示例指标已安装或处于活动状态。该扩展保留了一个兼容性旧版刷新函数，但新的集成应使用文档中的过程。

### 可选后台工作进程

要在 PostgreSQL 内部安排刷新：

    shared_preload_libraries = 'pgmonitor_bgw'
    pgmonitor_bgw.dbname = 'postgres,app'
    pgmonitor_bgw.role = 'postgres'
    pgmonitor_bgw.interval = 30

更改 shared_preload_libraries 后重启 PostgreSQL。pgmonitor_bgw.dbname 是必需的，列出了要维护的数据库。上游 v2.2 当前要求工作进程角色为超级用户；使用最窄控制的角色，并保护其凭据和设置。

### 对象索引

- metric_views: 直接查询的指标视图及其收集元数据。
- metric_matviews: 物化指标及刷新间隔。
- metric_tables: 表支持的指标及维护元数据。
- refresh_metrics(schema, name): 为一个配置的指标调用刷新过程。
- pgmonitor_bgw.dbname: 由可选工作进程处理的数据库。
- pgmonitor_bgw.role: 用于刷新工作的角色。
- pgmonitor_bgw.interval: 工作循环间隔（秒）。

### 版本 2.2 及注意事项

版本 2.2 移除了设置校验指标，修复了 PostgreSQL 13 上的旧版刷新路径，并减少了常规日志噪音。

- 指标查询会增加共享统计信息、目录和扩展对象的负载。根据测量的成本设置收集间隔。
- 健康的收集器连接并不能证明物化视图是新鲜的；监控它们的时间戳和工作进程日志。
- 该扩展提供数据库指标，而不是主机、文件系统或进程指标。
- 安装 pgmonitor 不会自动配置 Prometheus、导出程序、仪表板或警报规则。

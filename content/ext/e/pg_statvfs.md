---
title: "pg_statvfs"
linkTitle: "pg_statvfs"
description: "通过 statvfs 查询服务器文件系统容量与 inode 统计"
weight: 6470
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/michaelpq/pg_plugins/tree/ae57c1f3df697fb942f4576f873a655187193ace/pg_statvfs">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ae57c1f3df697fb942f4576f873a655187193ace/pg_statvfs</div>
    <div class="ext-card__desc">https://github.com/michaelpq/pg_plugins/tree/ae57c1f3df697fb942f4576f873a655187193ace/pg_statvfs</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_plugins-ae57c1f3df69.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_plugins-ae57c1f3df69.tar.gz</div>
    <div class="ext-card__desc">pg_plugins-ae57c1f3df69.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_statvfs`**](/ext/e/pg_statvfs) | `1.0` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6470  | [**`pg_statvfs`**](/ext/e/pg_statvfs) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`system_stats`](/ext/e/system_stats) [`pgnodemx`](/ext/e/pgnodemx) [`pgexporter_ext`](/ext/e/pgexporter_ext) [`pg_proctab`](/ext/e/pg_proctab) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Superuser-only; checks server paths under data/log-directory rules. No preload. PostgreSQL 14-18 verified in PGSTY builds; upstream declares no major-version matrix.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_statvfs` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_statvfs_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-statvfs` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
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
@ el8.x86_64 18 pg_statvfs_18 pg_statvfs_18-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 20.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statvfs_18-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_statvfs_18 pg_statvfs_18-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 20.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statvfs_18-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_statvfs_18 pg_statvfs_18-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statvfs_18-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_statvfs_18 pg_statvfs_18-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statvfs_18-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_statvfs_18 pg_statvfs_18-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statvfs_18-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_statvfs_18 pg_statvfs_18-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 20.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statvfs_18-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-statvfs postgresql-18-pg-statvfs_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 11.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statvfs/postgresql-18-pg-statvfs_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-statvfs postgresql-18-pg-statvfs_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 11.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statvfs/postgresql-18-pg-statvfs_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-statvfs postgresql-18-pg-statvfs_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 11.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statvfs/postgresql-18-pg-statvfs_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-statvfs postgresql-18-pg-statvfs_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 11.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statvfs/postgresql-18-pg-statvfs_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-statvfs postgresql-18-pg-statvfs_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 11.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statvfs/postgresql-18-pg-statvfs_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-statvfs postgresql-18-pg-statvfs_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 11.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statvfs/postgresql-18-pg-statvfs_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-statvfs postgresql-18-pg-statvfs_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statvfs/postgresql-18-pg-statvfs_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-statvfs postgresql-18-pg-statvfs_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statvfs/postgresql-18-pg-statvfs_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-statvfs postgresql-18-pg-statvfs_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 11.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statvfs/postgresql-18-pg-statvfs_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-statvfs postgresql-18-pg-statvfs_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 11.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statvfs/postgresql-18-pg-statvfs_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_statvfs_17 pg_statvfs_17-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 20.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statvfs_17-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_statvfs_17 pg_statvfs_17-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 20.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statvfs_17-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_statvfs_17 pg_statvfs_17-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statvfs_17-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_statvfs_17 pg_statvfs_17-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statvfs_17-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_statvfs_17 pg_statvfs_17-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statvfs_17-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_statvfs_17 pg_statvfs_17-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 20.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statvfs_17-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-statvfs postgresql-17-pg-statvfs_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 11.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statvfs/postgresql-17-pg-statvfs_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-statvfs postgresql-17-pg-statvfs_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 11.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statvfs/postgresql-17-pg-statvfs_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-statvfs postgresql-17-pg-statvfs_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 11.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statvfs/postgresql-17-pg-statvfs_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-statvfs postgresql-17-pg-statvfs_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 11.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statvfs/postgresql-17-pg-statvfs_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-statvfs postgresql-17-pg-statvfs_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statvfs/postgresql-17-pg-statvfs_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-statvfs postgresql-17-pg-statvfs_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 12.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statvfs/postgresql-17-pg-statvfs_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-statvfs postgresql-17-pg-statvfs_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statvfs/postgresql-17-pg-statvfs_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-statvfs postgresql-17-pg-statvfs_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statvfs/postgresql-17-pg-statvfs_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-statvfs postgresql-17-pg-statvfs_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 11.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statvfs/postgresql-17-pg-statvfs_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-statvfs postgresql-17-pg-statvfs_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 11.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statvfs/postgresql-17-pg-statvfs_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_statvfs_16 pg_statvfs_16-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statvfs_16-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_statvfs_16 pg_statvfs_16-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 20.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statvfs_16-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_statvfs_16 pg_statvfs_16-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statvfs_16-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_statvfs_16 pg_statvfs_16-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statvfs_16-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_statvfs_16 pg_statvfs_16-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statvfs_16-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_statvfs_16 pg_statvfs_16-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 20.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statvfs_16-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-statvfs postgresql-16-pg-statvfs_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 11.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statvfs/postgresql-16-pg-statvfs_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-statvfs postgresql-16-pg-statvfs_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 11.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statvfs/postgresql-16-pg-statvfs_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-statvfs postgresql-16-pg-statvfs_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 11.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statvfs/postgresql-16-pg-statvfs_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-statvfs postgresql-16-pg-statvfs_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 11.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statvfs/postgresql-16-pg-statvfs_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-statvfs postgresql-16-pg-statvfs_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statvfs/postgresql-16-pg-statvfs_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-statvfs postgresql-16-pg-statvfs_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 12.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statvfs/postgresql-16-pg-statvfs_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-statvfs postgresql-16-pg-statvfs_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statvfs/postgresql-16-pg-statvfs_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-statvfs postgresql-16-pg-statvfs_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statvfs/postgresql-16-pg-statvfs_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-statvfs postgresql-16-pg-statvfs_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 11.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statvfs/postgresql-16-pg-statvfs_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-statvfs postgresql-16-pg-statvfs_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 11.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statvfs/postgresql-16-pg-statvfs_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_statvfs_15 pg_statvfs_15-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 20.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statvfs_15-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_statvfs_15 pg_statvfs_15-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 20.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statvfs_15-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_statvfs_15 pg_statvfs_15-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statvfs_15-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_statvfs_15 pg_statvfs_15-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statvfs_15-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_statvfs_15 pg_statvfs_15-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statvfs_15-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_statvfs_15 pg_statvfs_15-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 20.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statvfs_15-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-statvfs postgresql-15-pg-statvfs_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 11.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statvfs/postgresql-15-pg-statvfs_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-statvfs postgresql-15-pg-statvfs_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 11.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statvfs/postgresql-15-pg-statvfs_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-statvfs postgresql-15-pg-statvfs_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 11.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statvfs/postgresql-15-pg-statvfs_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-statvfs postgresql-15-pg-statvfs_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 11.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statvfs/postgresql-15-pg-statvfs_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-statvfs postgresql-15-pg-statvfs_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statvfs/postgresql-15-pg-statvfs_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-statvfs postgresql-15-pg-statvfs_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 12.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statvfs/postgresql-15-pg-statvfs_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-statvfs postgresql-15-pg-statvfs_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statvfs/postgresql-15-pg-statvfs_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-statvfs postgresql-15-pg-statvfs_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statvfs/postgresql-15-pg-statvfs_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-statvfs postgresql-15-pg-statvfs_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 11.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statvfs/postgresql-15-pg-statvfs_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-statvfs postgresql-15-pg-statvfs_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 11.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statvfs/postgresql-15-pg-statvfs_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_statvfs_14 pg_statvfs_14-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 20.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statvfs_14-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_statvfs_14 pg_statvfs_14-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 20.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statvfs_14-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_statvfs_14 pg_statvfs_14-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statvfs_14-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_statvfs_14 pg_statvfs_14-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 20.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statvfs_14-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_statvfs_14 pg_statvfs_14-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 20.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statvfs_14-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_statvfs_14 pg_statvfs_14-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 20.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statvfs_14-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-statvfs postgresql-14-pg-statvfs_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 11.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statvfs/postgresql-14-pg-statvfs_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-statvfs postgresql-14-pg-statvfs_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 11.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statvfs/postgresql-14-pg-statvfs_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-statvfs postgresql-14-pg-statvfs_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 11.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statvfs/postgresql-14-pg-statvfs_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-statvfs postgresql-14-pg-statvfs_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statvfs/postgresql-14-pg-statvfs_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-statvfs postgresql-14-pg-statvfs_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 13.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statvfs/postgresql-14-pg-statvfs_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-statvfs postgresql-14-pg-statvfs_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 12.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statvfs/postgresql-14-pg-statvfs_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-statvfs postgresql-14-pg-statvfs_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 12.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statvfs/postgresql-14-pg-statvfs_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-statvfs postgresql-14-pg-statvfs_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 12.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statvfs/postgresql-14-pg-statvfs_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-statvfs postgresql-14-pg-statvfs_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statvfs/postgresql-14-pg-statvfs_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-statvfs postgresql-14-pg-statvfs_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statvfs/postgresql-14-pg-statvfs_1.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_statvfs` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_statvfs         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_statvfs` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_statvfs;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_statvfs -v 18  # PG 18
pig ext install -y pg_statvfs -v 17  # PG 17
pig ext install -y pg_statvfs -v 16  # PG 16
pig ext install -y pg_statvfs -v 15  # PG 15
pig ext install -y pg_statvfs -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_statvfs_18       # PG 18
dnf install -y pg_statvfs_17       # PG 17
dnf install -y pg_statvfs_16       # PG 16
dnf install -y pg_statvfs_15       # PG 15
dnf install -y pg_statvfs_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-statvfs   # PG 18
apt install -y postgresql-17-pg-statvfs   # PG 17
apt install -y postgresql-16-pg-statvfs   # PG 16
apt install -y postgresql-15-pg-statvfs   # PG 15
apt install -y postgresql-14-pg-statvfs   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_statvfs;
```

## 用法

来源：

- [Official documentation](https://github.com/michaelpq/pg_plugins/blob/ae57c1f3df697fb942f4576f873a655187193ace/pg_statvfs/README)
- [Control file](https://github.com/michaelpq/pg_plugins/blob/ae57c1f3df697fb942f4576f873a655187193ace/pg_statvfs/pg_statvfs.control)
- [Version 1.0 SQL](https://github.com/michaelpq/pg_plugins/blob/ae57c1f3df697fb942f4576f873a655187193ace/pg_statvfs/pg_statvfs--1.0.sql)
- [Privilege and path checks](https://github.com/michaelpq/pg_plugins/blob/ae57c1f3df697fb942f4576f873a655187193ace/pg_statvfs/pg_statvfs.c)

`pg_statvfs` 1.0 通过服务器的 statvfs 调用提供文件系统容量、inode 可用量和挂载标志。查询对象是服务器路径所在的文件系统，不是客户端目录，也不是单个关系的大小。

### 核心流程

安装扩展文件后，使用超级用户会话：

```sql
CREATE EXTENSION pg_statvfs;
SELECT * FROM pg_statvfs(current_setting('data_directory'));
SELECT f_frsize * f_blocks AS total_bytes,
       f_frsize * f_bavail AS available_bytes
FROM pg_statvfs(current_setting('data_directory'));
```

### 返回结果与权限

`pg_statvfs(path text)` 返回一条记录。`f_bsize` 是首选块大小，`f_frsize` 是块计数的单位；`f_blocks`、`f_bfree` 和 `f_bavail` 分别表示总块数、空闲块数及非特权用户可用块数。`f_files`、`f_ffree` 和 `f_favail` 描述 inode 数量；`f_fsid`、`f_namemax` 和 `flags` 提供文件系统标识、名称长度限制及支持的挂载标志。

C 函数显式要求超级用户权限，并在请求操作系统前检查路径。路径不存在或不可访问时会报错。扩展自身不需要预加载或重启；控制文件允许迁移模式，但未声明为受信任扩展。上游子目录没有给出完整的 PostgreSQL 主版本兼容矩阵，操作系统支持和可返回的挂载标志也存在差异。

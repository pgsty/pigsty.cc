---
title: "pagevis"
linkTitle: "pagevis"
description: "使用ASCII字符可视化数据库物理页面布局"
weight: 6860
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/hollobon/pagevis">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">hollobon/pagevis</div>
    <div class="ext-card__desc">https://github.com/hollobon/pagevis</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pagevis-0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pagevis-0.1.tar.gz</div>
    <div class="ext-card__desc">pagevis-0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pagevis`**](/ext/e/pagevis) | `0.1` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6860  | [**`pagevis`**](/ext/e/pagevis) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pageinspect`](/ext/e/pageinspect) [`pg_visibility`](/ext/e/pg_visibility) [`amcheck`](/ext/e/amcheck) [`pg_surgery`](/ext/e/pg_surgery) [`pgstattuple`](/ext/e/pgstattuple) [`pg_dirtyread`](/ext/e/pg_dirtyread) [`toastinfo`](/ext/e/toastinfo) [`pg_profile`](/ext/e/pg_profile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1` | {{< pgvers "18,17,16,15,14" >}} | `pagevis` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1` | {{< pgvers "18,17,16,15,14" >}} | `pagevis_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pagevis` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 | AVAIL PIGSTY 0.1 1 |
@ el8.x86_64 18 pagevis_18 pagevis_18-0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pagevis_18-0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pagevis_18 pagevis_18-0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pagevis_18-0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pagevis_18 pagevis_18-0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pagevis_18-0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pagevis_18 pagevis_18-0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pagevis_18-0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pagevis_18 pagevis_18-0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pagevis_18-0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pagevis_18 pagevis_18-0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pagevis_18-0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pagevis postgresql-18-pagevis_0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pagevis/postgresql-18-pagevis_0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pagevis postgresql-18-pagevis_0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pagevis/postgresql-18-pagevis_0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pagevis postgresql-18-pagevis_0.1-1PIGSTY~trixie_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pagevis/postgresql-18-pagevis_0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pagevis postgresql-18-pagevis_0.1-1PIGSTY~trixie_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pagevis/postgresql-18-pagevis_0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pagevis postgresql-18-pagevis_0.1-1PIGSTY~jammy_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pagevis/postgresql-18-pagevis_0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pagevis postgresql-18-pagevis_0.1-1PIGSTY~jammy_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pagevis/postgresql-18-pagevis_0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pagevis postgresql-18-pagevis_0.1-1PIGSTY~noble_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pagevis/postgresql-18-pagevis_0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pagevis postgresql-18-pagevis_0.1-1PIGSTY~noble_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pagevis/postgresql-18-pagevis_0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pagevis postgresql-18-pagevis_0.1-1PIGSTY~resolute_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pagevis/postgresql-18-pagevis_0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pagevis postgresql-18-pagevis_0.1-1PIGSTY~resolute_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pagevis/postgresql-18-pagevis_0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pagevis_17 pagevis_17-0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pagevis_17-0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pagevis_17 pagevis_17-0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pagevis_17-0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pagevis_17 pagevis_17-0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pagevis_17-0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pagevis_17 pagevis_17-0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pagevis_17-0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pagevis_17 pagevis_17-0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pagevis_17-0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pagevis_17 pagevis_17-0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pagevis_17-0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pagevis postgresql-17-pagevis_0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pagevis/postgresql-17-pagevis_0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pagevis postgresql-17-pagevis_0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pagevis/postgresql-17-pagevis_0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pagevis postgresql-17-pagevis_0.1-1PIGSTY~trixie_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pagevis/postgresql-17-pagevis_0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pagevis postgresql-17-pagevis_0.1-1PIGSTY~trixie_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pagevis/postgresql-17-pagevis_0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pagevis postgresql-17-pagevis_0.1-1PIGSTY~jammy_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pagevis/postgresql-17-pagevis_0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pagevis postgresql-17-pagevis_0.1-1PIGSTY~jammy_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pagevis/postgresql-17-pagevis_0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pagevis postgresql-17-pagevis_0.1-1PIGSTY~noble_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pagevis/postgresql-17-pagevis_0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pagevis postgresql-17-pagevis_0.1-1PIGSTY~noble_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pagevis/postgresql-17-pagevis_0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pagevis postgresql-17-pagevis_0.1-1PIGSTY~resolute_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pagevis/postgresql-17-pagevis_0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pagevis postgresql-17-pagevis_0.1-1PIGSTY~resolute_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pagevis/postgresql-17-pagevis_0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pagevis_16 pagevis_16-0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pagevis_16-0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pagevis_16 pagevis_16-0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pagevis_16-0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pagevis_16 pagevis_16-0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pagevis_16-0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pagevis_16 pagevis_16-0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pagevis_16-0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pagevis_16 pagevis_16-0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pagevis_16-0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pagevis_16 pagevis_16-0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pagevis_16-0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pagevis postgresql-16-pagevis_0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pagevis/postgresql-16-pagevis_0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pagevis postgresql-16-pagevis_0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pagevis/postgresql-16-pagevis_0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pagevis postgresql-16-pagevis_0.1-1PIGSTY~trixie_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pagevis/postgresql-16-pagevis_0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pagevis postgresql-16-pagevis_0.1-1PIGSTY~trixie_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pagevis/postgresql-16-pagevis_0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pagevis postgresql-16-pagevis_0.1-1PIGSTY~jammy_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pagevis/postgresql-16-pagevis_0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pagevis postgresql-16-pagevis_0.1-1PIGSTY~jammy_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pagevis/postgresql-16-pagevis_0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pagevis postgresql-16-pagevis_0.1-1PIGSTY~noble_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pagevis/postgresql-16-pagevis_0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pagevis postgresql-16-pagevis_0.1-1PIGSTY~noble_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pagevis/postgresql-16-pagevis_0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pagevis postgresql-16-pagevis_0.1-1PIGSTY~resolute_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pagevis/postgresql-16-pagevis_0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pagevis postgresql-16-pagevis_0.1-1PIGSTY~resolute_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pagevis/postgresql-16-pagevis_0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pagevis_15 pagevis_15-0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pagevis_15-0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pagevis_15 pagevis_15-0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pagevis_15-0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pagevis_15 pagevis_15-0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pagevis_15-0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pagevis_15 pagevis_15-0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pagevis_15-0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pagevis_15 pagevis_15-0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pagevis_15-0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pagevis_15 pagevis_15-0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pagevis_15-0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pagevis postgresql-15-pagevis_0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pagevis/postgresql-15-pagevis_0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pagevis postgresql-15-pagevis_0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pagevis/postgresql-15-pagevis_0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pagevis postgresql-15-pagevis_0.1-1PIGSTY~trixie_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pagevis/postgresql-15-pagevis_0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pagevis postgresql-15-pagevis_0.1-1PIGSTY~trixie_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pagevis/postgresql-15-pagevis_0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pagevis postgresql-15-pagevis_0.1-1PIGSTY~jammy_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pagevis/postgresql-15-pagevis_0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pagevis postgresql-15-pagevis_0.1-1PIGSTY~jammy_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pagevis/postgresql-15-pagevis_0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pagevis postgresql-15-pagevis_0.1-1PIGSTY~noble_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pagevis/postgresql-15-pagevis_0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pagevis postgresql-15-pagevis_0.1-1PIGSTY~noble_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pagevis/postgresql-15-pagevis_0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pagevis postgresql-15-pagevis_0.1-1PIGSTY~resolute_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pagevis/postgresql-15-pagevis_0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pagevis postgresql-15-pagevis_0.1-1PIGSTY~resolute_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pagevis/postgresql-15-pagevis_0.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pagevis_14 pagevis_14-0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pagevis_14-0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pagevis_14 pagevis_14-0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pagevis_14-0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pagevis_14 pagevis_14-0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pagevis_14-0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pagevis_14 pagevis_14-0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1 8.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pagevis_14-0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pagevis_14 pagevis_14-0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pagevis_14-0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pagevis_14 pagevis_14-0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1 8.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pagevis_14-0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pagevis postgresql-14-pagevis_0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pagevis/postgresql-14-pagevis_0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pagevis postgresql-14-pagevis_0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pagevis/postgresql-14-pagevis_0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pagevis postgresql-14-pagevis_0.1-1PIGSTY~trixie_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pagevis/postgresql-14-pagevis_0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pagevis postgresql-14-pagevis_0.1-1PIGSTY~trixie_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pagevis/postgresql-14-pagevis_0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pagevis postgresql-14-pagevis_0.1-1PIGSTY~jammy_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pagevis/postgresql-14-pagevis_0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pagevis postgresql-14-pagevis_0.1-1PIGSTY~jammy_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pagevis/postgresql-14-pagevis_0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pagevis postgresql-14-pagevis_0.1-1PIGSTY~noble_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pagevis/postgresql-14-pagevis_0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pagevis postgresql-14-pagevis_0.1-1PIGSTY~noble_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pagevis/postgresql-14-pagevis_0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pagevis postgresql-14-pagevis_0.1-1PIGSTY~resolute_amd64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pagevis/postgresql-14-pagevis_0.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pagevis postgresql-14-pagevis_0.1-1PIGSTY~resolute_arm64.deb pigsty 0.1 5.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pagevis/postgresql-14-pagevis_0.1-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pagevis` 扩展的 RPM / DEB 包：

```bash
pig build pkg pagevis         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pagevis` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pagevis;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pagevis -v 18  # PG 18
pig ext install -y pagevis -v 17  # PG 17
pig ext install -y pagevis -v 16  # PG 16
pig ext install -y pagevis -v 15  # PG 15
pig ext install -y pagevis -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pagevis_18       # PG 18
dnf install -y pagevis_17       # PG 17
dnf install -y pagevis_16       # PG 16
dnf install -y pagevis_15       # PG 15
dnf install -y pagevis_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pagevis   # PG 18
apt install -y postgresql-17-pagevis   # PG 17
apt install -y postgresql-16-pagevis   # PG 16
apt install -y postgresql-15-pagevis   # PG 15
apt install -y postgresql-14-pagevis   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pagevis;
```




## 用法

> [pagevis: PostgreSQL 数据库页面的 ASCII 可视化](https://github.com/hollobon/pagevis)

pagevis 提供 PostgreSQL 数据库页面内容的 ASCII 图形化表示。它依赖 `pageinspect` 扩展。

### 函数

```sql
-- show_page(关系名, 块号, 行宽)
SELECT show_page('my_table', 0, 64);
```

### 输出字符

| 字符 | 含义 |
|-----------|---------|
| `P` | 页头 |
| `U` | 未使用的行指针 |
| `N` | 正常行指针 |
| `R` | 重定向行指针 |
| `D` | 已死行指针 |
| (空格) | 空闲空间（"空洞"） |
| `[n]` | 元组编号（叠加在元组头上） |
| `H` | 元组头 |
| `#` | 元组数据 |
| `-` | 对当前事务不可见的元组（已死） |
| `.` | 元组间填充 |

### 示例

```sql
SELECT show_page('pvtest', 0, 64);
                             show_page
------------------------------------------------------------------
 PPPPPPPPPPPPPPPPPPPPPPPP001N002N003N004N005N006N007N008N009N010N
 011N012N013N014N015N016N017N018N019N020N...

 [226]HHHHHHHHHHHHHHHHHHH####....[225]HHHHHHHHHHHHHHHHHHH####....
 [224]HHHHHHHHHHHHHHHHHHH####....[223]HHHHHHHHHHHHHHHHHHH####....
```

页头（`P`）和行指针（`N`）出现在开头，空闲空间在中间，元组从页面末尾向前增长。当行指针和元组之间没有剩余空间时，页面就满了。

需要超级用户权限（使用 `pageinspect` 的 `get_raw_page`）。

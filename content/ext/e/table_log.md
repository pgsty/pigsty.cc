---
title: "table_log"
linkTitle: "table_log"
description: "记录某张表的修改日志并做表/行级时间点恢复"
weight: 5860
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/df7cb/table_log">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">df7cb/table_log</div>
    <div class="ext-card__desc">https://github.com/df7cb/table_log</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/table_log-0.6.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">table_log-0.6.4.tar.gz</div>
    <div class="ext-card__desc">table_log-0.6.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`table_log`**](/ext/e/table_log) | `0.6.4` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5860  | [**`table_log`**](/ext/e/table_log) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`temporal_tables`](/ext/e/temporal_tables) [`emaj`](/ext/e/emaj) [`pg_drop_events`](/ext/e/pg_drop_events) [`pg_auditor`](/ext/e/pg_auditor) [`pg_upless`](/ext/e/pg_upless) [`pg_savior`](/ext/e/pg_savior) [`pgaudit`](/ext/e/pgaudit) [`pgauditlogtofile`](/ext/e/pgauditlogtofile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.6.4` | {{< pgvers "18,17,16,15,14" >}} | `table_log` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.4` | {{< pgvers "18,17,16,15,14" >}} | `table_log_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.6.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-tablelog` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| el8.aarch64 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| el9.x86_64 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| el9.aarch64 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| el10.x86_64 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| el10.aarch64 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| d12.x86_64 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 |
| d12.aarch64 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 |
| d13.x86_64 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 |
| d13.aarch64 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 |
| u22.x86_64 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 |
| u22.aarch64 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 |
| u24.x86_64 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 |
| u24.aarch64 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 | AVAIL PGDG 0.6.4 1 |
@ el8.x86_64 18 table_log_18 table_log_18-0.6.4-1PIGSTY.el8.x86_64.rpm pigsty 0.6.4 29.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/table_log_18-0.6.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 table_log_18 table_log_18-0.6.4-1PIGSTY.el8.aarch64.rpm pigsty 0.6.4 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/table_log_18-0.6.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 table_log_18 table_log_18-0.6.4-1PIGSTY.el9.x86_64.rpm pigsty 0.6.4 29.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/table_log_18-0.6.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 table_log_18 table_log_18-0.6.4-1PIGSTY.el9.aarch64.rpm pigsty 0.6.4 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/table_log_18-0.6.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 table_log_18 table_log_18-0.6.4-1PIGSTY.el10.x86_64.rpm pigsty 0.6.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/table_log_18-0.6.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 table_log_18 table_log_18-0.6.4-1PIGSTY.el10.aarch64.rpm pigsty 0.6.4 29.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/table_log_18-0.6.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-tablelog postgresql-18-tablelog_0.6.4-4.pgdg12+1_amd64.deb pgdg 0.6.4 45.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-18-tablelog_0.6.4-4.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-tablelog postgresql-18-tablelog_0.6.4-4.pgdg12+1_arm64.deb pgdg 0.6.4 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-18-tablelog_0.6.4-4.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-tablelog postgresql-18-tablelog_0.6.4-4.pgdg13+1_amd64.deb pgdg 0.6.4 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-18-tablelog_0.6.4-4.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-tablelog postgresql-18-tablelog_0.6.4-4.pgdg13+1_arm64.deb pgdg 0.6.4 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-18-tablelog_0.6.4-4.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-tablelog postgresql-18-tablelog_0.6.4-4.pgdg22.04+1_amd64.deb pgdg 0.6.4 45.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-18-tablelog_0.6.4-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-tablelog postgresql-18-tablelog_0.6.4-4.pgdg22.04+1_arm64.deb pgdg 0.6.4 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-18-tablelog_0.6.4-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-tablelog postgresql-18-tablelog_0.6.4-4.pgdg24.04+1_amd64.deb pgdg 0.6.4 45.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-18-tablelog_0.6.4-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-tablelog postgresql-18-tablelog_0.6.4-4.pgdg24.04+1_arm64.deb pgdg 0.6.4 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-18-tablelog_0.6.4-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 table_log_17 table_log_17-0.6.4-1PIGSTY.el8.x86_64.rpm pigsty 0.6.4 29.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/table_log_17-0.6.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 table_log_17 table_log_17-0.6.4-1PIGSTY.el8.aarch64.rpm pigsty 0.6.4 28.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/table_log_17-0.6.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 table_log_17 table_log_17-0.6.4-1PIGSTY.el9.x86_64.rpm pigsty 0.6.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/table_log_17-0.6.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 table_log_17 table_log_17-0.6.4-1PIGSTY.el9.aarch64.rpm pigsty 0.6.4 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/table_log_17-0.6.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 table_log_17 table_log_17-0.6.4-1PIGSTY.el10.x86_64.rpm pigsty 0.6.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/table_log_17-0.6.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 table_log_17 table_log_17-0.6.4-1PIGSTY.el10.aarch64.rpm pigsty 0.6.4 29.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/table_log_17-0.6.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-tablelog postgresql-17-tablelog_0.6.4-4.pgdg12+1_amd64.deb pgdg 0.6.4 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-17-tablelog_0.6.4-4.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-tablelog postgresql-17-tablelog_0.6.4-4.pgdg12+1_arm64.deb pgdg 0.6.4 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-17-tablelog_0.6.4-4.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-tablelog postgresql-17-tablelog_0.6.4-4.pgdg13+1_amd64.deb pgdg 0.6.4 45.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-17-tablelog_0.6.4-4.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-tablelog postgresql-17-tablelog_0.6.4-4.pgdg13+1_arm64.deb pgdg 0.6.4 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-17-tablelog_0.6.4-4.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-tablelog postgresql-17-tablelog_0.6.4-4.pgdg22.04+1_amd64.deb pgdg 0.6.4 50.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-17-tablelog_0.6.4-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-tablelog postgresql-17-tablelog_0.6.4-4.pgdg22.04+1_arm64.deb pgdg 0.6.4 48.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-17-tablelog_0.6.4-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-tablelog postgresql-17-tablelog_0.6.4-4.pgdg24.04+1_amd64.deb pgdg 0.6.4 45.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-17-tablelog_0.6.4-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-tablelog postgresql-17-tablelog_0.6.4-4.pgdg24.04+1_arm64.deb pgdg 0.6.4 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-17-tablelog_0.6.4-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 table_log_16 table_log_16-0.6.4-1PIGSTY.el8.x86_64.rpm pigsty 0.6.4 29.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/table_log_16-0.6.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 table_log_16 table_log_16-0.6.4-1PIGSTY.el8.aarch64.rpm pigsty 0.6.4 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/table_log_16-0.6.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 table_log_16 table_log_16-0.6.4-1PIGSTY.el9.x86_64.rpm pigsty 0.6.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/table_log_16-0.6.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 table_log_16 table_log_16-0.6.4-1PIGSTY.el9.aarch64.rpm pigsty 0.6.4 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/table_log_16-0.6.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 table_log_16 table_log_16-0.6.4-1PIGSTY.el10.x86_64.rpm pigsty 0.6.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/table_log_16-0.6.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 table_log_16 table_log_16-0.6.4-1PIGSTY.el10.aarch64.rpm pigsty 0.6.4 29.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/table_log_16-0.6.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-tablelog postgresql-16-tablelog_0.6.4-4.pgdg12+1_amd64.deb pgdg 0.6.4 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-16-tablelog_0.6.4-4.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-tablelog postgresql-16-tablelog_0.6.4-4.pgdg12+1_arm64.deb pgdg 0.6.4 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-16-tablelog_0.6.4-4.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-tablelog postgresql-16-tablelog_0.6.4-4.pgdg13+1_amd64.deb pgdg 0.6.4 45.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-16-tablelog_0.6.4-4.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-tablelog postgresql-16-tablelog_0.6.4-4.pgdg13+1_arm64.deb pgdg 0.6.4 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-16-tablelog_0.6.4-4.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-tablelog postgresql-16-tablelog_0.6.4-4.pgdg22.04+1_amd64.deb pgdg 0.6.4 50.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-16-tablelog_0.6.4-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-tablelog postgresql-16-tablelog_0.6.4-4.pgdg22.04+1_arm64.deb pgdg 0.6.4 48.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-16-tablelog_0.6.4-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-tablelog postgresql-16-tablelog_0.6.4-4.pgdg24.04+1_amd64.deb pgdg 0.6.4 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-16-tablelog_0.6.4-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-tablelog postgresql-16-tablelog_0.6.4-4.pgdg24.04+1_arm64.deb pgdg 0.6.4 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-16-tablelog_0.6.4-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 table_log_15 table_log_15-0.6.4-1PIGSTY.el8.x86_64.rpm pigsty 0.6.4 29.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/table_log_15-0.6.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 table_log_15 table_log_15-0.6.4-1PIGSTY.el8.aarch64.rpm pigsty 0.6.4 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/table_log_15-0.6.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 table_log_15 table_log_15-0.6.4-1PIGSTY.el9.x86_64.rpm pigsty 0.6.4 29.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/table_log_15-0.6.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 table_log_15 table_log_15-0.6.4-1PIGSTY.el9.aarch64.rpm pigsty 0.6.4 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/table_log_15-0.6.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 table_log_15 table_log_15-0.6.4-1PIGSTY.el10.x86_64.rpm pigsty 0.6.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/table_log_15-0.6.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 table_log_15 table_log_15-0.6.4-1PIGSTY.el10.aarch64.rpm pigsty 0.6.4 29.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/table_log_15-0.6.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-tablelog postgresql-15-tablelog_0.6.4-4.pgdg12+1_amd64.deb pgdg 0.6.4 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-15-tablelog_0.6.4-4.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-tablelog postgresql-15-tablelog_0.6.4-4.pgdg12+1_arm64.deb pgdg 0.6.4 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-15-tablelog_0.6.4-4.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-tablelog postgresql-15-tablelog_0.6.4-4.pgdg13+1_amd64.deb pgdg 0.6.4 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-15-tablelog_0.6.4-4.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-tablelog postgresql-15-tablelog_0.6.4-4.pgdg13+1_arm64.deb pgdg 0.6.4 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-15-tablelog_0.6.4-4.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-tablelog postgresql-15-tablelog_0.6.4-4.pgdg22.04+1_amd64.deb pgdg 0.6.4 50.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-15-tablelog_0.6.4-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-tablelog postgresql-15-tablelog_0.6.4-4.pgdg22.04+1_arm64.deb pgdg 0.6.4 48.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-15-tablelog_0.6.4-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-tablelog postgresql-15-tablelog_0.6.4-4.pgdg24.04+1_amd64.deb pgdg 0.6.4 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-15-tablelog_0.6.4-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-tablelog postgresql-15-tablelog_0.6.4-4.pgdg24.04+1_arm64.deb pgdg 0.6.4 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-15-tablelog_0.6.4-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 table_log_14 table_log_14-0.6.4-1PIGSTY.el8.x86_64.rpm pigsty 0.6.4 29.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/table_log_14-0.6.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 table_log_14 table_log_14-0.6.4-1PIGSTY.el8.aarch64.rpm pigsty 0.6.4 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/table_log_14-0.6.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 table_log_14 table_log_14-0.6.4-1PIGSTY.el9.x86_64.rpm pigsty 0.6.4 29.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/table_log_14-0.6.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 table_log_14 table_log_14-0.6.4-1PIGSTY.el9.aarch64.rpm pigsty 0.6.4 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/table_log_14-0.6.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 table_log_14 table_log_14-0.6.4-1PIGSTY.el10.x86_64.rpm pigsty 0.6.4 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/table_log_14-0.6.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 table_log_14 table_log_14-0.6.4-1PIGSTY.el10.aarch64.rpm pigsty 0.6.4 29.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/table_log_14-0.6.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-tablelog postgresql-14-tablelog_0.6.4-4.pgdg12+1_amd64.deb pgdg 0.6.4 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-14-tablelog_0.6.4-4.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-tablelog postgresql-14-tablelog_0.6.4-4.pgdg12+1_arm64.deb pgdg 0.6.4 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-14-tablelog_0.6.4-4.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-tablelog postgresql-14-tablelog_0.6.4-4.pgdg13+1_amd64.deb pgdg 0.6.4 45.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-14-tablelog_0.6.4-4.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-tablelog postgresql-14-tablelog_0.6.4-4.pgdg13+1_arm64.deb pgdg 0.6.4 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-14-tablelog_0.6.4-4.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-tablelog postgresql-14-tablelog_0.6.4-4.pgdg22.04+1_amd64.deb pgdg 0.6.4 48.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-14-tablelog_0.6.4-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-tablelog postgresql-14-tablelog_0.6.4-4.pgdg22.04+1_arm64.deb pgdg 0.6.4 46.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-14-tablelog_0.6.4-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-tablelog postgresql-14-tablelog_0.6.4-4.pgdg24.04+1_amd64.deb pgdg 0.6.4 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-14-tablelog_0.6.4-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-tablelog postgresql-14-tablelog_0.6.4-4.pgdg24.04+1_arm64.deb pgdg 0.6.4 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/tablelog/postgresql-14-tablelog_0.6.4-4.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `table_log` 扩展的 RPM 包：

```bash
pig build pkg table_log         # 构建 RPM 包
```


## 安装

您可以直接安装 `table_log` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install table_log;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y table_log -v 18  # PG 18
pig ext install -y table_log -v 17  # PG 17
pig ext install -y table_log -v 16  # PG 16
pig ext install -y table_log -v 15  # PG 15
pig ext install -y table_log -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y table_log_18       # PG 18
dnf install -y table_log_17       # PG 17
dnf install -y table_log_16       # PG 16
dnf install -y table_log_15       # PG 15
dnf install -y table_log_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-tablelog   # PG 18
apt install -y postgresql-17-tablelog   # PG 17
apt install -y postgresql-16-tablelog   # PG 16
apt install -y postgresql-15-tablelog   # PG 15
apt install -y postgresql-14-tablelog   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION table_log;
```



## 用法

> [table_log: 记录表修改日志并实现表/行级别的时间点恢复](https://github.com/df7cb/table_log)

`table_log` 扩展将对表的 INSERT、UPDATE 和 DELETE 操作记录到单独的日志表中，实现表或行级别的时间点恢复。

### 初始化日志

```sql
CREATE EXTENSION table_log;

-- 基本设置：为 'my_table' 创建日志表和触发器
-- Level 5 = 记录 trigger_id + trigger_user + trigger 列
SELECT table_log_init(5, 'my_table');

-- 指定日志模式
SELECT table_log_init(5, 'my_table', 'log_schema');

-- 完整形式，包含所有选项
SELECT table_log_init(
    5,                -- 级别: 3=最小, 4=+用户, 5=+id+用户
    'public',         -- 源模式
    'my_table',       -- 源表
    'log_schema',     -- 日志表模式
    'my_table_log',   -- 日志表名（默认: {table}_log）
    'SINGLE',         -- 分区模式: 'SINGLE' 或 'PARTITION'
    false,            -- basic_mode（更简单的触发器）
    '{INSERT, UPDATE, DELETE}'::text[]  -- 要记录的操作
);
```

### 日志表结构

日志表镜像原始表的列，加上元数据：

| 列 | 描述 |
|--------|-------------|
| `trigger_mode` | 操作类型：INSERT、UPDATE、DELETE |
| `trigger_tuple` | 元组版本：'old' 或 'new' |
| `trigger_changed` | 变更时间戳 |
| `trigger_id` | 序列 ID（级别 4+） |
| `trigger_user` | 执行变更的用户（级别 5） |

### 时间点恢复

```sql
-- 将表恢复到特定时间点
SELECT table_log_restore_table(
    'my_table',           -- 原始表名
    'my_table_log',       -- 日志表名
    'id',                 -- 主键列
    'trigger_changed',    -- 日志中的时间戳列
    'trigger_tuple',      -- 日志中的元组类型列
    '2024-01-15 10:30:00' -- 恢复到此时间戳
);
```

### 触发器函数

| 函数 | 描述 |
|----------|-------------|
| `table_log()` | 完整触发器函数，记录所有列 |
| `table_log_basic()` | 基本触发器函数，更简单的记录 |
| `table_log_restore_table(...)` | 将表状态恢复到给定时间戳 |

---
title: "pg_drop_events"
linkTitle: "pg_drop_events"
description: "记录删表删列删视图的事务号，辅助PITR确定时间点"
weight: 5850
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bolajiwahab/pg_drop_events">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bolajiwahab/pg_drop_events</div>
    <div class="ext-card__desc">https://github.com/bolajiwahab/pg_drop_events</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_drop_events-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_drop_events-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_drop_events-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_drop_events`**](/ext/e/pg_drop_events) | `0.1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5850  | [**`pg_drop_events`**](/ext/e/pg_drop_events) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `public` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pg_savior`](/ext/e/pg_savior) [`table_log`](/ext/e/table_log) [`pgaudit`](/ext/e/pgaudit) [`pg_auditor`](/ext/e/pg_auditor) [`temporal_tables`](/ext/e/temporal_tables) [`emaj`](/ext/e/emaj) [`pg_upless`](/ext/e/pg_upless) [`pgauditlogtofile`](/ext/e/pgauditlogtofile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_drop_events` | `plpgsql` |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_drop_events_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-drop-events` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
@ el8.x86_64 18 pg_drop_events_18 pg_drop_events_18-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_drop_events_18-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_drop_events_18 pg_drop_events_18-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_drop_events_18-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_drop_events_18 pg_drop_events_18-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_drop_events_18-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_drop_events_18 pg_drop_events_18-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_drop_events_18-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_drop_events_18 pg_drop_events_18-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 11.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_drop_events_18-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_drop_events_18 pg_drop_events_18-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 11.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_drop_events_18-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-drop-events postgresql-18-pg-drop-events_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-drop-events/postgresql-18-pg-drop-events_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-drop-events postgresql-18-pg-drop-events_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-drop-events/postgresql-18-pg-drop-events_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-drop-events postgresql-18-pg-drop-events_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-drop-events/postgresql-18-pg-drop-events_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-drop-events postgresql-18-pg-drop-events_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-drop-events/postgresql-18-pg-drop-events_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-drop-events postgresql-18-pg-drop-events_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-drop-events/postgresql-18-pg-drop-events_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-drop-events postgresql-18-pg-drop-events_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-drop-events/postgresql-18-pg-drop-events_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-drop-events postgresql-18-pg-drop-events_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-drop-events/postgresql-18-pg-drop-events_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-drop-events postgresql-18-pg-drop-events_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-drop-events/postgresql-18-pg-drop-events_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-drop-events postgresql-18-pg-drop-events_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 5.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-drop-events/postgresql-18-pg-drop-events_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-drop-events postgresql-18-pg-drop-events_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 5.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-drop-events/postgresql-18-pg-drop-events_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_drop_events_17 pg_drop_events_17-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_drop_events_17-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_drop_events_17 pg_drop_events_17-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_drop_events_17-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_drop_events_17 pg_drop_events_17-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_drop_events_17-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_drop_events_17 pg_drop_events_17-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_drop_events_17-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_drop_events_17 pg_drop_events_17-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 11.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_drop_events_17-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_drop_events_17 pg_drop_events_17-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 11.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_drop_events_17-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-drop-events postgresql-17-pg-drop-events_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-drop-events/postgresql-17-pg-drop-events_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-drop-events postgresql-17-pg-drop-events_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-drop-events/postgresql-17-pg-drop-events_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-drop-events postgresql-17-pg-drop-events_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-drop-events/postgresql-17-pg-drop-events_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-drop-events postgresql-17-pg-drop-events_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-drop-events/postgresql-17-pg-drop-events_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-drop-events postgresql-17-pg-drop-events_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-drop-events/postgresql-17-pg-drop-events_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-drop-events postgresql-17-pg-drop-events_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-drop-events/postgresql-17-pg-drop-events_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-drop-events postgresql-17-pg-drop-events_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-drop-events/postgresql-17-pg-drop-events_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-drop-events postgresql-17-pg-drop-events_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-drop-events/postgresql-17-pg-drop-events_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-drop-events postgresql-17-pg-drop-events_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 5.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-drop-events/postgresql-17-pg-drop-events_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-drop-events postgresql-17-pg-drop-events_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 5.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-drop-events/postgresql-17-pg-drop-events_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_drop_events_16 pg_drop_events_16-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_drop_events_16-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_drop_events_16 pg_drop_events_16-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_drop_events_16-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_drop_events_16 pg_drop_events_16-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_drop_events_16-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_drop_events_16 pg_drop_events_16-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_drop_events_16-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_drop_events_16 pg_drop_events_16-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 11.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_drop_events_16-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_drop_events_16 pg_drop_events_16-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 11.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_drop_events_16-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-drop-events postgresql-16-pg-drop-events_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-drop-events/postgresql-16-pg-drop-events_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-drop-events postgresql-16-pg-drop-events_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-drop-events/postgresql-16-pg-drop-events_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-drop-events postgresql-16-pg-drop-events_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-drop-events/postgresql-16-pg-drop-events_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-drop-events postgresql-16-pg-drop-events_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-drop-events/postgresql-16-pg-drop-events_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-drop-events postgresql-16-pg-drop-events_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-drop-events/postgresql-16-pg-drop-events_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-drop-events postgresql-16-pg-drop-events_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-drop-events/postgresql-16-pg-drop-events_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-drop-events postgresql-16-pg-drop-events_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-drop-events/postgresql-16-pg-drop-events_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-drop-events postgresql-16-pg-drop-events_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-drop-events/postgresql-16-pg-drop-events_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-drop-events postgresql-16-pg-drop-events_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 5.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-drop-events/postgresql-16-pg-drop-events_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-drop-events postgresql-16-pg-drop-events_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 5.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-drop-events/postgresql-16-pg-drop-events_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_drop_events_15 pg_drop_events_15-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_drop_events_15-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_drop_events_15 pg_drop_events_15-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_drop_events_15-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_drop_events_15 pg_drop_events_15-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_drop_events_15-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_drop_events_15 pg_drop_events_15-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_drop_events_15-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_drop_events_15 pg_drop_events_15-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 11.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_drop_events_15-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_drop_events_15 pg_drop_events_15-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 11.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_drop_events_15-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-drop-events postgresql-15-pg-drop-events_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-drop-events/postgresql-15-pg-drop-events_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-drop-events postgresql-15-pg-drop-events_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-drop-events/postgresql-15-pg-drop-events_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-drop-events postgresql-15-pg-drop-events_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-drop-events/postgresql-15-pg-drop-events_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-drop-events postgresql-15-pg-drop-events_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-drop-events/postgresql-15-pg-drop-events_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-drop-events postgresql-15-pg-drop-events_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-drop-events/postgresql-15-pg-drop-events_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-drop-events postgresql-15-pg-drop-events_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-drop-events/postgresql-15-pg-drop-events_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-drop-events postgresql-15-pg-drop-events_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-drop-events/postgresql-15-pg-drop-events_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-drop-events postgresql-15-pg-drop-events_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-drop-events/postgresql-15-pg-drop-events_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-drop-events postgresql-15-pg-drop-events_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 5.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-drop-events/postgresql-15-pg-drop-events_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-drop-events postgresql-15-pg-drop-events_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 5.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-drop-events/postgresql-15-pg-drop-events_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_drop_events_14 pg_drop_events_14-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_drop_events_14-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_drop_events_14 pg_drop_events_14-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_drop_events_14-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_drop_events_14 pg_drop_events_14-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_drop_events_14-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_drop_events_14 pg_drop_events_14-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 10.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_drop_events_14-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_drop_events_14 pg_drop_events_14-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 11.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_drop_events_14-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_drop_events_14 pg_drop_events_14-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 11.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_drop_events_14-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-drop-events postgresql-14-pg-drop-events_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-drop-events/postgresql-14-pg-drop-events_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-drop-events postgresql-14-pg-drop-events_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-drop-events/postgresql-14-pg-drop-events_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-drop-events postgresql-14-pg-drop-events_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-drop-events/postgresql-14-pg-drop-events_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-drop-events postgresql-14-pg-drop-events_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-drop-events/postgresql-14-pg-drop-events_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-drop-events postgresql-14-pg-drop-events_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-drop-events/postgresql-14-pg-drop-events_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-drop-events postgresql-14-pg-drop-events_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-drop-events/postgresql-14-pg-drop-events_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-drop-events postgresql-14-pg-drop-events_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-drop-events/postgresql-14-pg-drop-events_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-drop-events postgresql-14-pg-drop-events_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-drop-events/postgresql-14-pg-drop-events_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-drop-events postgresql-14-pg-drop-events_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 5.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-drop-events/postgresql-14-pg-drop-events_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-drop-events postgresql-14-pg-drop-events_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 5.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-drop-events/postgresql-14-pg-drop-events_0.1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_drop_events` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_drop_events         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_drop_events` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_drop_events;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_drop_events -v 18  # PG 18
pig ext install -y pg_drop_events -v 17  # PG 17
pig ext install -y pg_drop_events -v 16  # PG 16
pig ext install -y pg_drop_events -v 15  # PG 15
pig ext install -y pg_drop_events -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_drop_events_18       # PG 18
dnf install -y pg_drop_events_17       # PG 17
dnf install -y pg_drop_events_16       # PG 16
dnf install -y pg_drop_events_15       # PG 15
dnf install -y pg_drop_events_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-drop-events   # PG 18
apt install -y postgresql-17-pg-drop-events   # PG 17
apt install -y postgresql-16-pg-drop-events   # PG 16
apt install -y postgresql-15-pg-drop-events   # PG 15
apt install -y postgresql-14-pg-drop-events   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_drop_events CASCADE;  -- 依赖: plpgsql
```



## 用法

> [pg_drop_events: 记录 DROP TABLE、DROP COLUMN、DROP MATERIALIZED VIEW 语句的事务 ID](https://github.com/bolajiwahab/pg_drop_events)

`pg_drop_events` 扩展使用事件触发器自动记录对表、列和物化视图的 DROP 操作详情。记录的信息可用于意外删除后的时间点恢复（PITR）。

### 跟踪的操作

- `DROP TABLE`
- `DROP COLUMN`（通过 `ALTER TABLE`）
- `DROP MATERIALIZED VIEW`

### 记录的信息

| 列 | 描述 |
|--------|-------------|
| `pid` | 进程标识符 |
| `usename` | 执行命令的数据库用户 |
| `query` | SQL 语句 |
| `xact_id` | 事务标识符 |
| `wal_position` | 预写日志位置 |
| `objid` | 对象标识符 |
| `object_name` | 被删除对象的完全限定名称 |
| `object_type` | 对象分类（表、表列等） |
| `xact_time` | 事务时间戳 |

### 示例

```sql
CREATE EXTENSION pg_drop_events;

-- 删除一个表
DROP TABLE t.t3;
-- NOTICE: table t.t3 dropped by transaction 1085.

-- 查询事件日志
SELECT * FROM pg_drop_events;
```

### 时间点恢复

记录的数据直接映射到 PostgreSQL 恢复参数：

| pg_drop_events 列 | 恢复参数 |
|-----------------------|-------------------|
| `xact_id` | `recovery_target_xid` |
| `xact_time` | `recovery_target_time` |
| `wal_position` | `recovery_target_lsn` |

在 `postgresql.conf` 或 `recovery.conf` 中使用这些值将数据库恢复到意外删除之前的时间点。

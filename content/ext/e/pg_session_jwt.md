---
title: "pg_session_jwt"
linkTitle: "pg_session_jwt"
description: "使用JWT进行会话认证"
weight: 7040
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/neondatabase/pg_session_jwt">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">neondatabase/pg_session_jwt</div>
    <div class="ext-card__desc">https://github.com/neondatabase/pg_session_jwt</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_session_jwt-0.4.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_session_jwt-0.4.0.tar.gz</div>
    <div class="ext-card__desc">pg_session_jwt-0.4.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_session_jwt`**](/ext/e/pg_session_jwt) | `0.4.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7040  | [**`pg_session_jwt`**](/ext/e/pg_session_jwt) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `auth` |
{.ext-table}

| **相关扩展** | [`pgjwt`](/ext/e/pgjwt) [`pgaudit`](/ext/e/pgaudit) [`pgsodium`](/ext/e/pgsodium) [`supabase_vault`](/ext/e/supabase_vault) [`anon`](/ext/e/anon) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manual updated pgrx by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_session_jwt` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_session_jwt_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-session-jwt` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 | AVAIL PIGSTY 0.4.0 1 |
@ el8.x86_64 18 pg_session_jwt_18 pg_session_jwt_18-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 435.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_session_jwt_18-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_session_jwt_18 pg_session_jwt_18-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 308.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_session_jwt_18-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_session_jwt_18 pg_session_jwt_18-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 450.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_session_jwt_18-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_session_jwt_18 pg_session_jwt_18-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 327.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_session_jwt_18-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_session_jwt_18 pg_session_jwt_18-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 450.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_session_jwt_18-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_session_jwt_18 pg_session_jwt_18-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 327.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_session_jwt_18-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-session-jwt postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 364.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-session-jwt/postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-session-jwt postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 245.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-session-jwt/postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-session-jwt postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 363.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-session-jwt/postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-session-jwt postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 245.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-session-jwt/postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-session-jwt postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 406.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-session-jwt/postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-session-jwt postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 284.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-session-jwt/postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-session-jwt postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 403.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-session-jwt/postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-session-jwt postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 281.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-session-jwt/postgresql-18-pg-session-jwt_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_session_jwt_17 pg_session_jwt_17-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 435.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_session_jwt_17-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_session_jwt_17 pg_session_jwt_17-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 308.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_session_jwt_17-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_session_jwt_17 pg_session_jwt_17-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 450.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_session_jwt_17-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_session_jwt_17 pg_session_jwt_17-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 327.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_session_jwt_17-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_session_jwt_17 pg_session_jwt_17-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 451.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_session_jwt_17-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_session_jwt_17 pg_session_jwt_17-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 327.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_session_jwt_17-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-session-jwt postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 364.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-session-jwt/postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-session-jwt postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 245.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-session-jwt/postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-session-jwt postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 364.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-session-jwt/postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-session-jwt postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 245.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-session-jwt/postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-session-jwt postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 407.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-session-jwt/postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-session-jwt postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 284.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-session-jwt/postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-session-jwt postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 403.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-session-jwt/postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-session-jwt postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 281.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-session-jwt/postgresql-17-pg-session-jwt_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_session_jwt_16 pg_session_jwt_16-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 435.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_session_jwt_16-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_session_jwt_16 pg_session_jwt_16-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 308.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_session_jwt_16-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_session_jwt_16 pg_session_jwt_16-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 451.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_session_jwt_16-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_session_jwt_16 pg_session_jwt_16-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 327.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_session_jwt_16-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_session_jwt_16 pg_session_jwt_16-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 451.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_session_jwt_16-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_session_jwt_16 pg_session_jwt_16-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 327.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_session_jwt_16-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-session-jwt postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 363.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-session-jwt/postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-session-jwt postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 245.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-session-jwt/postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-session-jwt postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 364.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-session-jwt/postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-session-jwt postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 245.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-session-jwt/postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-session-jwt postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 407.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-session-jwt/postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-session-jwt postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 284.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-session-jwt/postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-session-jwt postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 403.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-session-jwt/postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-session-jwt postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 281.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-session-jwt/postgresql-16-pg-session-jwt_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_session_jwt_15 pg_session_jwt_15-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 435.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_session_jwt_15-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_session_jwt_15 pg_session_jwt_15-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 308.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_session_jwt_15-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_session_jwt_15 pg_session_jwt_15-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 450.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_session_jwt_15-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_session_jwt_15 pg_session_jwt_15-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 327.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_session_jwt_15-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_session_jwt_15 pg_session_jwt_15-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 451.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_session_jwt_15-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_session_jwt_15 pg_session_jwt_15-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 327.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_session_jwt_15-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-session-jwt postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 363.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-session-jwt/postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-session-jwt postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 245.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-session-jwt/postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-session-jwt postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 363.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-session-jwt/postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-session-jwt postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 246.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-session-jwt/postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-session-jwt postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 406.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-session-jwt/postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-session-jwt postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 284.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-session-jwt/postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-session-jwt postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 402.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-session-jwt/postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-session-jwt postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 281.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-session-jwt/postgresql-15-pg-session-jwt_0.4.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_session_jwt_14 pg_session_jwt_14-0.4.0-1PIGSTY.el8.x86_64.rpm pigsty 0.4.0 435.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_session_jwt_14-0.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_session_jwt_14 pg_session_jwt_14-0.4.0-1PIGSTY.el8.aarch64.rpm pigsty 0.4.0 308.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_session_jwt_14-0.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_session_jwt_14 pg_session_jwt_14-0.4.0-1PIGSTY.el9.x86_64.rpm pigsty 0.4.0 451.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_session_jwt_14-0.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_session_jwt_14 pg_session_jwt_14-0.4.0-1PIGSTY.el9.aarch64.rpm pigsty 0.4.0 327.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_session_jwt_14-0.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_session_jwt_14 pg_session_jwt_14-0.4.0-1PIGSTY.el10.x86_64.rpm pigsty 0.4.0 451.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_session_jwt_14-0.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_session_jwt_14 pg_session_jwt_14-0.4.0-1PIGSTY.el10.aarch64.rpm pigsty 0.4.0 327.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_session_jwt_14-0.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-session-jwt postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~bookworm_amd64.deb pigsty 0.4.0 363.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-session-jwt/postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-session-jwt postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~bookworm_arm64.deb pigsty 0.4.0 245.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-session-jwt/postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-session-jwt postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~trixie_amd64.deb pigsty 0.4.0 363.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-session-jwt/postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-session-jwt postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~trixie_arm64.deb pigsty 0.4.0 245.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-session-jwt/postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-session-jwt postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~jammy_amd64.deb pigsty 0.4.0 406.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-session-jwt/postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-session-jwt postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~jammy_arm64.deb pigsty 0.4.0 284.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-session-jwt/postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-session-jwt postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~noble_amd64.deb pigsty 0.4.0 403.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-session-jwt/postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-session-jwt postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~noble_arm64.deb pigsty 0.4.0 281.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-session-jwt/postgresql-14-pg-session-jwt_0.4.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_session_jwt` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_session_jwt         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_session_jwt` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_session_jwt;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_session_jwt -v 18  # PG 18
pig ext install -y pg_session_jwt -v 17  # PG 17
pig ext install -y pg_session_jwt -v 16  # PG 16
pig ext install -y pg_session_jwt -v 15  # PG 15
pig ext install -y pg_session_jwt -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_session_jwt_18       # PG 18
dnf install -y pg_session_jwt_17       # PG 17
dnf install -y pg_session_jwt_16       # PG 16
dnf install -y pg_session_jwt_15       # PG 15
dnf install -y pg_session_jwt_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-session-jwt   # PG 18
apt install -y postgresql-17-pg-session-jwt   # PG 17
apt install -y postgresql-16-pg-session-jwt   # PG 16
apt install -y postgresql-15-pg-session-jwt   # PG 15
apt install -y postgresql-14-pg-session-jwt   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_session_jwt;
```

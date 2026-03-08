---
title: "supautils"
linkTitle: "supautils"
description: "用于在云环境中确保数据库集群的安全"
weight: 7010
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/supabase/supautils">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">supabase/supautils</div>
    <div class="ext-card__desc">https://github.com/supabase/supautils</div>
  </a>
  <a class="ext-card ext-card--source" href="supautils-3.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">supautils-3.1.0.tar.gz</div>
    <div class="ext-card__desc">supautils-3.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`supautils`**](/ext/e/supautils) | `3.1.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7010  | [**`supautils`**](/ext/e/supautils) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) [`pgsodium`](/ext/e/pgsodium) [`supabase_vault`](/ext/e/supabase_vault) [`pg_session_jwt`](/ext/e/pg_session_jwt) [`anon`](/ext/e/anon) [`pg_tde`](/ext/e/pg_tde) [`pgsmcrypto`](/ext/e/pgsmcrypto) [`pgaudit`](/ext/e/pgaudit) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.0` | {{< pgvers "18,17,16,15,14" >}} | `supautils` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.0` | {{< pgvers "18,17,16,15,14" >}} | `supautils_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-supautils` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
@ el8.x86_64 18 supautils_18 supautils_18-3.1.0-1PIGSTY.el8.x86_64.rpm pigsty 3.1.0 30.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/supautils_18-3.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 supautils_18 supautils_18-3.1.0-1PIGSTY.el8.aarch64.rpm pigsty 3.1.0 29.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/supautils_18-3.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 supautils_18 supautils_18-3.1.0-1PIGSTY.el9.x86_64.rpm pigsty 3.1.0 29.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/supautils_18-3.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 supautils_18 supautils_18-3.1.0-1PIGSTY.el9.aarch64.rpm pigsty 3.1.0 28.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/supautils_18-3.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 supautils_18 supautils_18-3.1.0-1PIGSTY.el10.x86_64.rpm pigsty 3.1.0 29.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/supautils_18-3.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 supautils_18 supautils_18-3.1.0-1PIGSTY.el10.aarch64.rpm pigsty 3.1.0 28.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/supautils_18-3.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-supautils postgresql-18-supautils_3.1.0-1PIGSTY~bookworm_amd64.deb pigsty 3.1.0 23.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-18-supautils_3.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-supautils postgresql-18-supautils_3.1.0-1PIGSTY~bookworm_arm64.deb pigsty 3.1.0 22.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-18-supautils_3.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-supautils postgresql-18-supautils_3.1.0-1PIGSTY~trixie_amd64.deb pigsty 3.1.0 23.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/supautils/postgresql-18-supautils_3.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-supautils postgresql-18-supautils_3.1.0-1PIGSTY~trixie_arm64.deb pigsty 3.1.0 22.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/supautils/postgresql-18-supautils_3.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-supautils postgresql-18-supautils_3.1.0-1PIGSTY~jammy_amd64.deb pigsty 3.1.0 24.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/supautils/postgresql-18-supautils_3.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-supautils postgresql-18-supautils_3.1.0-1PIGSTY~jammy_arm64.deb pigsty 3.1.0 23.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/supautils/postgresql-18-supautils_3.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-supautils postgresql-18-supautils_3.1.0-1PIGSTY~noble_amd64.deb pigsty 3.1.0 24.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/supautils/postgresql-18-supautils_3.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-supautils postgresql-18-supautils_3.1.0-1PIGSTY~noble_arm64.deb pigsty 3.1.0 23.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/supautils/postgresql-18-supautils_3.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 supautils_17 supautils_17-3.1.0-1PIGSTY.el8.x86_64.rpm pigsty 3.1.0 30.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/supautils_17-3.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 supautils_17 supautils_17-3.1.0-1PIGSTY.el8.aarch64.rpm pigsty 3.1.0 29.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/supautils_17-3.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 supautils_17 supautils_17-3.1.0-1PIGSTY.el9.x86_64.rpm pigsty 3.1.0 29.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/supautils_17-3.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 supautils_17 supautils_17-3.1.0-1PIGSTY.el9.aarch64.rpm pigsty 3.1.0 28.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/supautils_17-3.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 supautils_17 supautils_17-3.1.0-1PIGSTY.el10.x86_64.rpm pigsty 3.1.0 29.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/supautils_17-3.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 supautils_17 supautils_17-3.1.0-1PIGSTY.el10.aarch64.rpm pigsty 3.1.0 28.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/supautils_17-3.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-supautils postgresql-17-supautils_3.1.0-1PIGSTY~bookworm_amd64.deb pigsty 3.1.0 23.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-17-supautils_3.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-supautils postgresql-17-supautils_3.1.0-1PIGSTY~bookworm_arm64.deb pigsty 3.1.0 22.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-17-supautils_3.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-supautils postgresql-17-supautils_3.1.0-1PIGSTY~trixie_amd64.deb pigsty 3.1.0 23.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/supautils/postgresql-17-supautils_3.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-supautils postgresql-17-supautils_3.1.0-1PIGSTY~trixie_arm64.deb pigsty 3.1.0 22.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/supautils/postgresql-17-supautils_3.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-supautils postgresql-17-supautils_3.1.0-1PIGSTY~jammy_amd64.deb pigsty 3.1.0 24.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/supautils/postgresql-17-supautils_3.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-supautils postgresql-17-supautils_3.1.0-1PIGSTY~jammy_arm64.deb pigsty 3.1.0 23.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/supautils/postgresql-17-supautils_3.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-supautils postgresql-17-supautils_3.1.0-1PIGSTY~noble_amd64.deb pigsty 3.1.0 24.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/supautils/postgresql-17-supautils_3.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-supautils postgresql-17-supautils_3.1.0-1PIGSTY~noble_arm64.deb pigsty 3.1.0 23.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/supautils/postgresql-17-supautils_3.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 supautils_16 supautils_16-3.1.0-1PIGSTY.el8.x86_64.rpm pigsty 3.1.0 30.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/supautils_16-3.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 supautils_16 supautils_16-3.1.0-1PIGSTY.el8.aarch64.rpm pigsty 3.1.0 29.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/supautils_16-3.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 supautils_16 supautils_16-3.1.0-1PIGSTY.el9.x86_64.rpm pigsty 3.1.0 29.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/supautils_16-3.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 supautils_16 supautils_16-3.1.0-1PIGSTY.el9.aarch64.rpm pigsty 3.1.0 28.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/supautils_16-3.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 supautils_16 supautils_16-3.1.0-1PIGSTY.el10.x86_64.rpm pigsty 3.1.0 29.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/supautils_16-3.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 supautils_16 supautils_16-3.1.0-1PIGSTY.el10.aarch64.rpm pigsty 3.1.0 28.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/supautils_16-3.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-supautils postgresql-16-supautils_3.1.0-1PIGSTY~bookworm_amd64.deb pigsty 3.1.0 23.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-16-supautils_3.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-supautils postgresql-16-supautils_3.1.0-1PIGSTY~bookworm_arm64.deb pigsty 3.1.0 22.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-16-supautils_3.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-supautils postgresql-16-supautils_3.1.0-1PIGSTY~trixie_amd64.deb pigsty 3.1.0 23.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/supautils/postgresql-16-supautils_3.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-supautils postgresql-16-supautils_3.1.0-1PIGSTY~trixie_arm64.deb pigsty 3.1.0 22.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/supautils/postgresql-16-supautils_3.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-supautils postgresql-16-supautils_3.1.0-1PIGSTY~jammy_amd64.deb pigsty 3.1.0 25.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/supautils/postgresql-16-supautils_3.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-supautils postgresql-16-supautils_3.1.0-1PIGSTY~jammy_arm64.deb pigsty 3.1.0 23.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/supautils/postgresql-16-supautils_3.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-supautils postgresql-16-supautils_3.1.0-1PIGSTY~noble_amd64.deb pigsty 3.1.0 24.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/supautils/postgresql-16-supautils_3.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-supautils postgresql-16-supautils_3.1.0-1PIGSTY~noble_arm64.deb pigsty 3.1.0 23.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/supautils/postgresql-16-supautils_3.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 supautils_15 supautils_15-3.1.0-1PIGSTY.el8.x86_64.rpm pigsty 3.1.0 31.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/supautils_15-3.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 supautils_15 supautils_15-3.1.0-1PIGSTY.el8.aarch64.rpm pigsty 3.1.0 30.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/supautils_15-3.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 supautils_15 supautils_15-3.1.0-1PIGSTY.el9.x86_64.rpm pigsty 3.1.0 30.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/supautils_15-3.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 supautils_15 supautils_15-3.1.0-1PIGSTY.el9.aarch64.rpm pigsty 3.1.0 29.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/supautils_15-3.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 supautils_15 supautils_15-3.1.0-1PIGSTY.el10.x86_64.rpm pigsty 3.1.0 31.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/supautils_15-3.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 supautils_15 supautils_15-3.1.0-1PIGSTY.el10.aarch64.rpm pigsty 3.1.0 30.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/supautils_15-3.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-supautils postgresql-15-supautils_3.1.0-1PIGSTY~bookworm_amd64.deb pigsty 3.1.0 24.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-15-supautils_3.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-supautils postgresql-15-supautils_3.1.0-1PIGSTY~bookworm_arm64.deb pigsty 3.1.0 23.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-15-supautils_3.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-supautils postgresql-15-supautils_3.1.0-1PIGSTY~trixie_amd64.deb pigsty 3.1.0 24.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/supautils/postgresql-15-supautils_3.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-supautils postgresql-15-supautils_3.1.0-1PIGSTY~trixie_arm64.deb pigsty 3.1.0 23.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/supautils/postgresql-15-supautils_3.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-supautils postgresql-15-supautils_3.1.0-1PIGSTY~jammy_amd64.deb pigsty 3.1.0 25.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/supautils/postgresql-15-supautils_3.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-supautils postgresql-15-supautils_3.1.0-1PIGSTY~jammy_arm64.deb pigsty 3.1.0 25.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/supautils/postgresql-15-supautils_3.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-supautils postgresql-15-supautils_3.1.0-1PIGSTY~noble_amd64.deb pigsty 3.1.0 25.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/supautils/postgresql-15-supautils_3.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-supautils postgresql-15-supautils_3.1.0-1PIGSTY~noble_arm64.deb pigsty 3.1.0 25.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/supautils/postgresql-15-supautils_3.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 supautils_14 supautils_14-3.1.0-1PIGSTY.el8.x86_64.rpm pigsty 3.1.0 31.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/supautils_14-3.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 supautils_14 supautils_14-3.1.0-1PIGSTY.el8.aarch64.rpm pigsty 3.1.0 30.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/supautils_14-3.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 supautils_14 supautils_14-3.1.0-1PIGSTY.el9.x86_64.rpm pigsty 3.1.0 30.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/supautils_14-3.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 supautils_14 supautils_14-3.1.0-1PIGSTY.el9.aarch64.rpm pigsty 3.1.0 29.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/supautils_14-3.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 supautils_14 supautils_14-3.1.0-1PIGSTY.el10.x86_64.rpm pigsty 3.1.0 30.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/supautils_14-3.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 supautils_14 supautils_14-3.1.0-1PIGSTY.el10.aarch64.rpm pigsty 3.1.0 30.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/supautils_14-3.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-supautils postgresql-14-supautils_3.1.0-1PIGSTY~bookworm_amd64.deb pigsty 3.1.0 24.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-14-supautils_3.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-supautils postgresql-14-supautils_3.1.0-1PIGSTY~bookworm_arm64.deb pigsty 3.1.0 23.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-14-supautils_3.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-supautils postgresql-14-supautils_3.1.0-1PIGSTY~trixie_amd64.deb pigsty 3.1.0 24.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/supautils/postgresql-14-supautils_3.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-supautils postgresql-14-supautils_3.1.0-1PIGSTY~trixie_arm64.deb pigsty 3.1.0 23.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/supautils/postgresql-14-supautils_3.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-supautils postgresql-14-supautils_3.1.0-1PIGSTY~jammy_amd64.deb pigsty 3.1.0 25.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/supautils/postgresql-14-supautils_3.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-supautils postgresql-14-supautils_3.1.0-1PIGSTY~jammy_arm64.deb pigsty 3.1.0 25.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/supautils/postgresql-14-supautils_3.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-supautils postgresql-14-supautils_3.1.0-1PIGSTY~noble_amd64.deb pigsty 3.1.0 25.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/supautils/postgresql-14-supautils_3.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-supautils postgresql-14-supautils_3.1.0-1PIGSTY~noble_arm64.deb pigsty 3.1.0 25.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/supautils/postgresql-14-supautils_3.1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `supautils` 扩展的 RPM / DEB 包：

```bash
pig build pkg supautils         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `supautils` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install supautils;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y supautils -v 18  # PG 18
pig ext install -y supautils -v 17  # PG 17
pig ext install -y supautils -v 16  # PG 16
pig ext install -y supautils -v 15  # PG 15
pig ext install -y supautils -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y supautils_18       # PG 18
dnf install -y supautils_17       # PG 17
dnf install -y supautils_16       # PG 16
dnf install -y supautils_15       # PG 15
dnf install -y supautils_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-supautils   # PG 18
apt install -y postgresql-17-supautils   # PG 17
apt install -y postgresql-16-supautils   # PG 16
apt install -y postgresql-15-supautils   # PG 15
apt install -y postgresql-14-supautils   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'supautils';
```


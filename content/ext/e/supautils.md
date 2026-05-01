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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/supautils-3.2.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">supautils-3.2.1.tar.gz</div>
    <div class="ext-card__desc">supautils-3.2.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`supautils`**](/ext/e/supautils) | `3.2.1` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.2.1` | {{< pgvers "18,17,16,15,14" >}} | `supautils` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.2.1` | {{< pgvers "18,17,16,15,14" >}} | `supautils_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.2.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-supautils` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| el8.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| el9.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| el9.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| el10.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| el10.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| d12.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| d12.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| d13.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| d13.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u22.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u22.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u24.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u24.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u26.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u26.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
@ el8.x86_64 18 supautils_18 supautils_18-3.2.1-1PIGSTY.el8.x86_64.rpm pigsty 3.2.1 32.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/supautils_18-3.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 supautils_18 supautils_18-3.2.1-1PIGSTY.el8.aarch64.rpm pigsty 3.2.1 31.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/supautils_18-3.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 supautils_18 supautils_18-3.2.1-1PIGSTY.el9.x86_64.rpm pigsty 3.2.1 30.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/supautils_18-3.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 supautils_18 supautils_18-3.2.1-1PIGSTY.el9.aarch64.rpm pigsty 3.2.1 29.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/supautils_18-3.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 supautils_18 supautils_18-3.2.1-1PIGSTY.el10.x86_64.rpm pigsty 3.2.1 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/supautils_18-3.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 supautils_18 supautils_18-3.2.1-1PIGSTY.el10.aarch64.rpm pigsty 3.2.1 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/supautils_18-3.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-supautils postgresql-18-supautils_3.2.1-1PIGSTY~bookworm_amd64.deb pigsty 3.2.1 25.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-18-supautils_3.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-supautils postgresql-18-supautils_3.2.1-1PIGSTY~bookworm_arm64.deb pigsty 3.2.1 24.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-18-supautils_3.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-supautils postgresql-18-supautils_3.2.1-1PIGSTY~trixie_amd64.deb pigsty 3.2.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/supautils/postgresql-18-supautils_3.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-supautils postgresql-18-supautils_3.2.1-1PIGSTY~trixie_arm64.deb pigsty 3.2.1 24.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/supautils/postgresql-18-supautils_3.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-supautils postgresql-18-supautils_3.2.1-1PIGSTY~jammy_amd64.deb pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/supautils/postgresql-18-supautils_3.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-supautils postgresql-18-supautils_3.2.1-1PIGSTY~jammy_arm64.deb pigsty 3.2.1 25.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/supautils/postgresql-18-supautils_3.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-supautils postgresql-18-supautils_3.2.1-1PIGSTY~noble_amd64.deb pigsty 3.2.1 26.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/supautils/postgresql-18-supautils_3.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-supautils postgresql-18-supautils_3.2.1-1PIGSTY~noble_arm64.deb pigsty 3.2.1 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/supautils/postgresql-18-supautils_3.2.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-supautils postgresql-18-supautils_3.2.1-1PIGSTY~resolute_amd64.deb pigsty 3.2.1 26.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/supautils/postgresql-18-supautils_3.2.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-supautils postgresql-18-supautils_3.2.1-1PIGSTY~resolute_arm64.deb pigsty 3.2.1 25.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/supautils/postgresql-18-supautils_3.2.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 supautils_17 supautils_17-3.2.1-1PIGSTY.el8.x86_64.rpm pigsty 3.2.1 32.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/supautils_17-3.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 supautils_17 supautils_17-3.2.1-1PIGSTY.el8.aarch64.rpm pigsty 3.2.1 31.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/supautils_17-3.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 supautils_17 supautils_17-3.2.1-1PIGSTY.el9.x86_64.rpm pigsty 3.2.1 30.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/supautils_17-3.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 supautils_17 supautils_17-3.2.1-1PIGSTY.el9.aarch64.rpm pigsty 3.2.1 29.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/supautils_17-3.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 supautils_17 supautils_17-3.2.1-1PIGSTY.el10.x86_64.rpm pigsty 3.2.1 31.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/supautils_17-3.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 supautils_17 supautils_17-3.2.1-1PIGSTY.el10.aarch64.rpm pigsty 3.2.1 29.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/supautils_17-3.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-supautils postgresql-17-supautils_3.2.1-1PIGSTY~bookworm_amd64.deb pigsty 3.2.1 25.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-17-supautils_3.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-supautils postgresql-17-supautils_3.2.1-1PIGSTY~bookworm_arm64.deb pigsty 3.2.1 24.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-17-supautils_3.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-supautils postgresql-17-supautils_3.2.1-1PIGSTY~trixie_amd64.deb pigsty 3.2.1 25.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/supautils/postgresql-17-supautils_3.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-supautils postgresql-17-supautils_3.2.1-1PIGSTY~trixie_arm64.deb pigsty 3.2.1 24.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/supautils/postgresql-17-supautils_3.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-supautils postgresql-17-supautils_3.2.1-1PIGSTY~jammy_amd64.deb pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/supautils/postgresql-17-supautils_3.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-supautils postgresql-17-supautils_3.2.1-1PIGSTY~jammy_arm64.deb pigsty 3.2.1 25.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/supautils/postgresql-17-supautils_3.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-supautils postgresql-17-supautils_3.2.1-1PIGSTY~noble_amd64.deb pigsty 3.2.1 26.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/supautils/postgresql-17-supautils_3.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-supautils postgresql-17-supautils_3.2.1-1PIGSTY~noble_arm64.deb pigsty 3.2.1 25.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/supautils/postgresql-17-supautils_3.2.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-supautils postgresql-17-supautils_3.2.1-1PIGSTY~resolute_amd64.deb pigsty 3.2.1 26.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/supautils/postgresql-17-supautils_3.2.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-supautils postgresql-17-supautils_3.2.1-1PIGSTY~resolute_arm64.deb pigsty 3.2.1 25.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/supautils/postgresql-17-supautils_3.2.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 supautils_16 supautils_16-3.2.1-1PIGSTY.el8.x86_64.rpm pigsty 3.2.1 32.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/supautils_16-3.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 supautils_16 supautils_16-3.2.1-1PIGSTY.el8.aarch64.rpm pigsty 3.2.1 31.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/supautils_16-3.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 supautils_16 supautils_16-3.2.1-1PIGSTY.el9.x86_64.rpm pigsty 3.2.1 30.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/supautils_16-3.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 supautils_16 supautils_16-3.2.1-1PIGSTY.el9.aarch64.rpm pigsty 3.2.1 29.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/supautils_16-3.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 supautils_16 supautils_16-3.2.1-1PIGSTY.el10.x86_64.rpm pigsty 3.2.1 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/supautils_16-3.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 supautils_16 supautils_16-3.2.1-1PIGSTY.el10.aarch64.rpm pigsty 3.2.1 29.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/supautils_16-3.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-supautils postgresql-16-supautils_3.2.1-1PIGSTY~bookworm_amd64.deb pigsty 3.2.1 25.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-16-supautils_3.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-supautils postgresql-16-supautils_3.2.1-1PIGSTY~bookworm_arm64.deb pigsty 3.2.1 24.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-16-supautils_3.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-supautils postgresql-16-supautils_3.2.1-1PIGSTY~trixie_amd64.deb pigsty 3.2.1 25.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/supautils/postgresql-16-supautils_3.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-supautils postgresql-16-supautils_3.2.1-1PIGSTY~trixie_arm64.deb pigsty 3.2.1 24.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/supautils/postgresql-16-supautils_3.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-supautils postgresql-16-supautils_3.2.1-1PIGSTY~jammy_amd64.deb pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/supautils/postgresql-16-supautils_3.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-supautils postgresql-16-supautils_3.2.1-1PIGSTY~jammy_arm64.deb pigsty 3.2.1 25.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/supautils/postgresql-16-supautils_3.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-supautils postgresql-16-supautils_3.2.1-1PIGSTY~noble_amd64.deb pigsty 3.2.1 26.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/supautils/postgresql-16-supautils_3.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-supautils postgresql-16-supautils_3.2.1-1PIGSTY~noble_arm64.deb pigsty 3.2.1 25.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/supautils/postgresql-16-supautils_3.2.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-supautils postgresql-16-supautils_3.2.1-1PIGSTY~resolute_amd64.deb pigsty 3.2.1 26.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/supautils/postgresql-16-supautils_3.2.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-supautils postgresql-16-supautils_3.2.1-1PIGSTY~resolute_arm64.deb pigsty 3.2.1 25.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/supautils/postgresql-16-supautils_3.2.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 supautils_15 supautils_15-3.2.1-1PIGSTY.el8.x86_64.rpm pigsty 3.2.1 33.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/supautils_15-3.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 supautils_15 supautils_15-3.2.1-1PIGSTY.el8.aarch64.rpm pigsty 3.2.1 32.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/supautils_15-3.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 supautils_15 supautils_15-3.2.1-1PIGSTY.el9.x86_64.rpm pigsty 3.2.1 32.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/supautils_15-3.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 supautils_15 supautils_15-3.2.1-1PIGSTY.el9.aarch64.rpm pigsty 3.2.1 31.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/supautils_15-3.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 supautils_15 supautils_15-3.2.1-1PIGSTY.el10.x86_64.rpm pigsty 3.2.1 32.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/supautils_15-3.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 supautils_15 supautils_15-3.2.1-1PIGSTY.el10.aarch64.rpm pigsty 3.2.1 31.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/supautils_15-3.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-supautils postgresql-15-supautils_3.2.1-1PIGSTY~bookworm_amd64.deb pigsty 3.2.1 26.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-15-supautils_3.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-supautils postgresql-15-supautils_3.2.1-1PIGSTY~bookworm_arm64.deb pigsty 3.2.1 24.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-15-supautils_3.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-supautils postgresql-15-supautils_3.2.1-1PIGSTY~trixie_amd64.deb pigsty 3.2.1 26.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/supautils/postgresql-15-supautils_3.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-supautils postgresql-15-supautils_3.2.1-1PIGSTY~trixie_arm64.deb pigsty 3.2.1 25.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/supautils/postgresql-15-supautils_3.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-supautils postgresql-15-supautils_3.2.1-1PIGSTY~jammy_amd64.deb pigsty 3.2.1 27.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/supautils/postgresql-15-supautils_3.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-supautils postgresql-15-supautils_3.2.1-1PIGSTY~jammy_arm64.deb pigsty 3.2.1 27.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/supautils/postgresql-15-supautils_3.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-supautils postgresql-15-supautils_3.2.1-1PIGSTY~noble_amd64.deb pigsty 3.2.1 27.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/supautils/postgresql-15-supautils_3.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-supautils postgresql-15-supautils_3.2.1-1PIGSTY~noble_arm64.deb pigsty 3.2.1 26.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/supautils/postgresql-15-supautils_3.2.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-supautils postgresql-15-supautils_3.2.1-1PIGSTY~resolute_amd64.deb pigsty 3.2.1 27.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/supautils/postgresql-15-supautils_3.2.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-supautils postgresql-15-supautils_3.2.1-1PIGSTY~resolute_arm64.deb pigsty 3.2.1 27.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/supautils/postgresql-15-supautils_3.2.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 supautils_14 supautils_14-3.2.1-1PIGSTY.el8.x86_64.rpm pigsty 3.2.1 33.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/supautils_14-3.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 supautils_14 supautils_14-3.2.1-1PIGSTY.el8.aarch64.rpm pigsty 3.2.1 31.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/supautils_14-3.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 supautils_14 supautils_14-3.2.1-1PIGSTY.el9.x86_64.rpm pigsty 3.2.1 32.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/supautils_14-3.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 supautils_14 supautils_14-3.2.1-1PIGSTY.el9.aarch64.rpm pigsty 3.2.1 31.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/supautils_14-3.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 supautils_14 supautils_14-3.2.1-1PIGSTY.el10.x86_64.rpm pigsty 3.2.1 32.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/supautils_14-3.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 supautils_14 supautils_14-3.2.1-1PIGSTY.el10.aarch64.rpm pigsty 3.2.1 31.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/supautils_14-3.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-supautils postgresql-14-supautils_3.2.1-1PIGSTY~bookworm_amd64.deb pigsty 3.2.1 26.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-14-supautils_3.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-supautils postgresql-14-supautils_3.2.1-1PIGSTY~bookworm_arm64.deb pigsty 3.2.1 24.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/supautils/postgresql-14-supautils_3.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-supautils postgresql-14-supautils_3.2.1-1PIGSTY~trixie_amd64.deb pigsty 3.2.1 26.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/supautils/postgresql-14-supautils_3.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-supautils postgresql-14-supautils_3.2.1-1PIGSTY~trixie_arm64.deb pigsty 3.2.1 25.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/supautils/postgresql-14-supautils_3.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-supautils postgresql-14-supautils_3.2.1-1PIGSTY~jammy_amd64.deb pigsty 3.2.1 27.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/supautils/postgresql-14-supautils_3.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-supautils postgresql-14-supautils_3.2.1-1PIGSTY~jammy_arm64.deb pigsty 3.2.1 26.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/supautils/postgresql-14-supautils_3.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-supautils postgresql-14-supautils_3.2.1-1PIGSTY~noble_amd64.deb pigsty 3.2.1 27.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/supautils/postgresql-14-supautils_3.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-supautils postgresql-14-supautils_3.2.1-1PIGSTY~noble_arm64.deb pigsty 3.2.1 26.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/supautils/postgresql-14-supautils_3.2.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-supautils postgresql-14-supautils_3.2.1-1PIGSTY~resolute_amd64.deb pigsty 3.2.1 27.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/supautils/postgresql-14-supautils_3.2.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-supautils postgresql-14-supautils_3.2.1-1PIGSTY~resolute_arm64.deb pigsty 3.2.1 27.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/supautils/postgresql-14-supautils_3.2.1-1PIGSTY~resolute_arm64.deb
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


## 用法

来源：[README](https://github.com/supabase/supautils/blob/master/README.md)，[homepage](https://supabase.github.io/supautils/)，[releases](https://github.com/supabase/supautils/releases)

`supautils` 是一个可加载库，允许通过配置把部分原本仅限超级用户的 PostgreSQL 能力安全地开放给非超级用户。上游特别强调：它不会在数据库里创建表、函数或 security label。

### 加载方式

集群级：

```ini
shared_preload_libraries = 'supautils'
supautils.privileged_role = 'your_privileged_role'
```

按角色启用：

```sql
ALTER ROLE role1 SET session_preload_libraries TO 'supautils';
```

### 特权代理角色能力

README 记录了一个 privileged proxy role，可在不授予 `SUPERUSER` 的前提下创建 publication、foreign data wrapper、event trigger 和 privileged extension。

```sql
SET ROLE privileged_role;
CREATE PUBLICATION p FOR ALL TABLES;
DROP PUBLICATION p;
```

对于 event trigger，README 说明这些触发器会对非超级用户生效，但会跳过超级用户和 reserved roles；同时它也明确记录了一条限制：在创建 publication、foreign data wrapper 或 extension 时，这些触发器不会触发。

### 重要配置项

- `supautils.superuser`
- `supautils.privileged_role`
- `supautils.privileged_role_allowed_configs`
- `supautils.privileged_extensions`
- `supautils.extension_custom_scripts_path`
- `supautils.constrained_extensions`
- `supautils.extensions_parameter_overrides`
- `supautils.policy_grants`
- `supautils.drop_trigger_grants`
- `supautils.reserved_roles`
- `supautils.reserved_memberships`
- `supautils.hint_roles`
- `supautils.log_skipped_evtrigs`

### 常见示例

允许非超级用户创建指定 privileged extension：

```ini
supautils.privileged_extensions = 'hstore'
```

允许某个角色管理自己并不拥有的表上的 RLS policy：

```ini
supautils.policy_grants = '{ "my_role": ["public.not_my_table"] }'
```

在 `CREATE EXTENSION` 时强制把扩展装入指定 schema：

```ini
supautils.extensions_parameter_overrides = '{ "pg_cron": { "schema": "pg_catalog" } }'
```

保护托管服务角色不被 `CREATEROLE` 用户修改：

```ini
supautils.reserved_roles = 'connector, storage_admin'
supautils.reserved_memberships = 'pg_read_server_files'
```

### 发布说明

- `v3.2.1` 发布于 2026-04-02，公开说明以维护类改动为主，没有新增用户可见 SQL 接口。
- `v3.2.0` 新增了缺失 `GRANT` 权限时的 hint。

### 注意事项

这是一个强配置驱动的扩展。编写说明时应优先依据 README 中的 GUC 和行为保证，不要暗示任何上游已明确声明“不会创建”的数据库对象。

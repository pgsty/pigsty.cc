---
title: "pg_policy"
linkTitle: "pg_policy"
description: "面向 AI 智能体的 PostgreSQL 策略语言，提供护栏、软性引导与会话级控制"
weight: 7440
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rahiakil/pg-policy">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rahiakil/pg-policy</div>
    <div class="ext-card__desc">https://github.com/rahiakil/pg-policy</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_policy-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_policy-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_policy-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_policy`**](/ext/e/pg_policy) | `0.1.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7440  | [**`pg_policy`**](/ext/e/pg_policy) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `policy` |
{.ext-table}

| **相关扩展** | [`pg_command_fw`](/ext/e/pg_command_fw) [`pgextwlist`](/ext/e/pgextwlist) [`set_user`](/ext/e/set_user) [`noset`](/ext/e/noset) [`block_copy_command`](/ext/e/block_copy_command) [`supautils`](/ext/e/supautils) [`anon`](/ext/e/anon) [`pgaudit`](/ext/e/pgaudit) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PIGSTY patches the reserved upstream schema pg_policy to policy and quotes the reserved check function, so the packaged API is policy.check() rather than pg_policy.check(); pure SQL and PL/pgSQL, no preload.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_policy` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_policy_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-pg-policy` | - |
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
@ el8.x86_64 18 pg_policy_18 pg_policy_18-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_policy_18-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 pg_policy_18 pg_policy_18-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_policy_18-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 pg_policy_18 pg_policy_18-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_policy_18-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 pg_policy_18 pg_policy_18-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_policy_18-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 pg_policy_18 pg_policy_18-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 16.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_policy_18-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_policy_18 pg_policy_18-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_policy_18-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-policy postgresql-18-pg-policy_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-policy/postgresql-18-pg-policy_0.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pg-policy postgresql-18-pg-policy_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-policy/postgresql-18-pg-policy_0.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pg-policy postgresql-18-pg-policy_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-policy/postgresql-18-pg-policy_0.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pg-policy postgresql-18-pg-policy_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-policy/postgresql-18-pg-policy_0.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pg-policy postgresql-18-pg-policy_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-policy/postgresql-18-pg-policy_0.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pg-policy postgresql-18-pg-policy_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-policy/postgresql-18-pg-policy_0.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pg-policy postgresql-18-pg-policy_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-policy/postgresql-18-pg-policy_0.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pg-policy postgresql-18-pg-policy_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-policy/postgresql-18-pg-policy_0.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pg-policy postgresql-18-pg-policy_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-policy/postgresql-18-pg-policy_0.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pg-policy postgresql-18-pg-policy_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-policy/postgresql-18-pg-policy_0.1.0-1PGSTY~resolute_all.deb
@ el8.x86_64 17 pg_policy_17 pg_policy_17-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_policy_17-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 pg_policy_17 pg_policy_17-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_policy_17-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 pg_policy_17 pg_policy_17-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_policy_17-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 pg_policy_17 pg_policy_17-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_policy_17-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 pg_policy_17 pg_policy_17-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 16.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_policy_17-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_policy_17 pg_policy_17-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_policy_17-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-policy postgresql-17-pg-policy_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-policy/postgresql-17-pg-policy_0.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pg-policy postgresql-17-pg-policy_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-policy/postgresql-17-pg-policy_0.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pg-policy postgresql-17-pg-policy_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-policy/postgresql-17-pg-policy_0.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pg-policy postgresql-17-pg-policy_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-policy/postgresql-17-pg-policy_0.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pg-policy postgresql-17-pg-policy_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-policy/postgresql-17-pg-policy_0.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pg-policy postgresql-17-pg-policy_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-policy/postgresql-17-pg-policy_0.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pg-policy postgresql-17-pg-policy_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-policy/postgresql-17-pg-policy_0.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pg-policy postgresql-17-pg-policy_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-policy/postgresql-17-pg-policy_0.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pg-policy postgresql-17-pg-policy_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-policy/postgresql-17-pg-policy_0.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pg-policy postgresql-17-pg-policy_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-policy/postgresql-17-pg-policy_0.1.0-1PGSTY~resolute_all.deb
@ el8.x86_64 16 pg_policy_16 pg_policy_16-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_policy_16-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 pg_policy_16 pg_policy_16-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_policy_16-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 pg_policy_16 pg_policy_16-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_policy_16-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 pg_policy_16 pg_policy_16-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_policy_16-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 pg_policy_16 pg_policy_16-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 16.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_policy_16-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_policy_16 pg_policy_16-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_policy_16-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-policy postgresql-16-pg-policy_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-policy/postgresql-16-pg-policy_0.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pg-policy postgresql-16-pg-policy_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-policy/postgresql-16-pg-policy_0.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pg-policy postgresql-16-pg-policy_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-policy/postgresql-16-pg-policy_0.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pg-policy postgresql-16-pg-policy_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-policy/postgresql-16-pg-policy_0.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pg-policy postgresql-16-pg-policy_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-policy/postgresql-16-pg-policy_0.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pg-policy postgresql-16-pg-policy_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-policy/postgresql-16-pg-policy_0.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pg-policy postgresql-16-pg-policy_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-policy/postgresql-16-pg-policy_0.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pg-policy postgresql-16-pg-policy_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-policy/postgresql-16-pg-policy_0.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pg-policy postgresql-16-pg-policy_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-policy/postgresql-16-pg-policy_0.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pg-policy postgresql-16-pg-policy_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-policy/postgresql-16-pg-policy_0.1.0-1PGSTY~resolute_all.deb
@ el8.x86_64 15 pg_policy_15 pg_policy_15-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_policy_15-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 pg_policy_15 pg_policy_15-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_policy_15-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 pg_policy_15 pg_policy_15-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_policy_15-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 pg_policy_15 pg_policy_15-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_policy_15-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 pg_policy_15 pg_policy_15-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 16.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_policy_15-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 pg_policy_15 pg_policy_15-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_policy_15-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-policy postgresql-15-pg-policy_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-policy/postgresql-15-pg-policy_0.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pg-policy postgresql-15-pg-policy_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-policy/postgresql-15-pg-policy_0.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pg-policy postgresql-15-pg-policy_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-policy/postgresql-15-pg-policy_0.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pg-policy postgresql-15-pg-policy_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-policy/postgresql-15-pg-policy_0.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pg-policy postgresql-15-pg-policy_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-policy/postgresql-15-pg-policy_0.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pg-policy postgresql-15-pg-policy_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-policy/postgresql-15-pg-policy_0.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pg-policy postgresql-15-pg-policy_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-policy/postgresql-15-pg-policy_0.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pg-policy postgresql-15-pg-policy_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-policy/postgresql-15-pg-policy_0.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pg-policy postgresql-15-pg-policy_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-policy/postgresql-15-pg-policy_0.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pg-policy postgresql-15-pg-policy_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-policy/postgresql-15-pg-policy_0.1.0-1PGSTY~resolute_all.deb
@ el8.x86_64 14 pg_policy_14 pg_policy_14-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_policy_14-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 pg_policy_14 pg_policy_14-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_policy_14-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 14 pg_policy_14 pg_policy_14-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_policy_14-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 pg_policy_14 pg_policy_14-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 15.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_policy_14-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 14 pg_policy_14 pg_policy_14-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 16.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_policy_14-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 pg_policy_14 pg_policy_14-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_policy_14-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-policy postgresql-14-pg-policy_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-policy/postgresql-14-pg-policy_0.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pg-policy postgresql-14-pg-policy_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-policy/postgresql-14-pg-policy_0.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pg-policy postgresql-14-pg-policy_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-policy/postgresql-14-pg-policy_0.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pg-policy postgresql-14-pg-policy_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 10.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-policy/postgresql-14-pg-policy_0.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pg-policy postgresql-14-pg-policy_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-policy/postgresql-14-pg-policy_0.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pg-policy postgresql-14-pg-policy_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-policy/postgresql-14-pg-policy_0.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pg-policy postgresql-14-pg-policy_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-policy/postgresql-14-pg-policy_0.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pg-policy postgresql-14-pg-policy_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-policy/postgresql-14-pg-policy_0.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pg-policy postgresql-14-pg-policy_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-policy/postgresql-14-pg-policy_0.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pg-policy postgresql-14-pg-policy_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 10.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-policy/postgresql-14-pg-policy_0.1.0-1PGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_policy` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_policy         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_policy` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_policy;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_policy -v 18  # PG 18
pig ext install -y pg_policy -v 17  # PG 17
pig ext install -y pg_policy -v 16  # PG 16
pig ext install -y pg_policy -v 15  # PG 15
pig ext install -y pg_policy -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_policy_18       # PG 18
dnf install -y pg_policy_17       # PG 17
dnf install -y pg_policy_16       # PG 16
dnf install -y pg_policy_15       # PG 15
dnf install -y pg_policy_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-policy   # PG 18
apt install -y postgresql-17-pg-policy   # PG 17
apt install -y postgresql-16-pg-policy   # PG 16
apt install -y postgresql-15-pg-policy   # PG 15
apt install -y postgresql-14-pg-policy   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_policy;
```

## 用法

来源：

- [PGXN 上的 pg_policy 0.1.0](https://pgxn.org/dist/pg_policy/0.1.0/)
- [pg_policy 0.1.0 README](https://api.pgxn.org/src/pg_policy/pg_policy-0.1.0/README.md)
- [Agent Policy Language 参考](https://api.pgxn.org/src/pg_policy/pg_policy-0.1.0/doc/language.md)
- [pg_policy 0.1.0 安全策略](https://api.pgxn.org/src/pg_policy/pg_policy-0.1.0/SECURITY.md)
- [pg_policy 0.1.0 控制文件](https://api.pgxn.org/src/pg_policy/pg_policy-0.1.0/pg_policy.control)
- [pg_policy 0.1.0 扩展 SQL](https://api.pgxn.org/src/pg_policy/pg_policy-0.1.0/sql/pg_policy--0.1.0.sql)
- [Pigsty pg_policy 软件包页面](https://pgext.cloud/ext/pg_policy)

`pg_policy` 0.1.0 是一个实验性的 SQL 与 PL/pgSQL 策略求值器，用于代理和工具动作。它存储 Agent Policy Language 规则，依据上下文和会话历史求值，记录每次决策，并返回供网关执行的义务。它用于补充 PostgreSQL 角色与行级安全，而不会自行拦截 SQL 或工具调用。

### Pigsty 模式兼容性

上游 0.1.0 声明了保留模式名 `pg_policy`，并定义了名为 `check` 的未加引号函数。Pigsty 软件包把安装模式修补为 `policy`，将保留函数名加引号为 `policy."check"()`，并固定函数搜索路径。因此，上游示例不能原样复制到 Pigsty 安装中。

```sql
CREATE EXTENSION pg_policy;

SELECT policy.set_setting('enforcement_mode', 'log_only');
```

该扩展不可重定位，要求 PostgreSQL 14 或以上版本，不需要 `shared_preload_libraries`，也无需重启 PostgreSQL。当前 Pigsty 软件包覆盖 PostgreSQL 14–18。

### 定义并求值一条护栏

```sql
SELECT policy.upsert_policy('block_ddl', $apl$
forbid
  principal agent "research_bot"
  action tool "execute_sql"
  when { context.statement_type in ["DROP", "TRUNCATE", "ALTER", "CREATE"] }
  reason "Research agents may not run DDL"
$apl$);

SELECT policy.set_setting('enforcement_mode', 'enforce');

SELECT policy.evaluate(
  'agent', 'research_bot',
  'tool', 'execute_sql',
  '*', '*',
  '{"statement_type":"DROP"}'::jsonb,
  NULL
);

SELECT policy."check"(
  'research_bot',
  'execute_sql',
  '{"statement_type":"DROP"}'::jsonb
);
```

`policy.evaluate(...)` 返回包含 `decision`、`allowed`、`matched_policies`、`obligations`、`reasons` 与 `mode` 的 JSON。便捷封装 `policy."check"()` 只返回布尔值。`policy.enforce()` 会在模式为 `enforce` 时请求遇到拒绝即抛出异常。

### APL 能力边界

APL 文档以 `permit`、`forbid` 或 `guide` 三种效果之一开头，可以匹配主体、动作和资源的类型与标识符。在 0.1.0 中，上下文条件只支持 `==`、`in [...]` 与 `and`。当求值时传入会话标识符，时间子句可以统计给定时间间隔内匹配的会话事件。

匹配的 `forbid` 会覆盖 `permit`。`guide` 允许动作，并可返回 `advice`、`prefer_tool` 或 `max_rows` 义务。这些义务必须由调用方解释和执行，而不是由扩展自动处理。

### 会话、时间限制与审计

```sql
SELECT policy.open_session(
  'sess-1',
  'agent',
  'research_bot'
);

SELECT policy.upsert_policy('export_budget', $apl$
forbid
  principal agent "research_bot"
  action tool "export_csv"
  when temporal {
    count(action == "export_csv") within interval '1 hour' >= 3
  }
  reason "Export budget exceeded"
$apl$);

SELECT policy.evaluate(
  'agent', 'research_bot',
  'tool', 'export_csv',
  '*', '*',
  '{}'::jsonb,
  'sess-1'
);
```

`policy.open_session()` 创建或更新会话。带会话标识符的求值会追加事件，并可满足时间谓词。每次求值都会写入 `policy.decision_log`；其他重要关系包括 `policy.policies`、`policy.sessions`、`policy.events` 与 `policy.settings`。

### 执行与安全边界

- 默认 `enforcement_mode` 是 `log_only`，默认决策是 `permit`。匹配的拒绝会变成允许，并附加 `shadow_deny` 义务。
- 在 `guide` 模式下，匹配的拒绝会变成允许，并附加 `would_deny`。只有 `enforce` 会保留拒绝，并允许 `policy.enforce()` 抛出错误。
- 网关必须在受保护动作之前调用求值器，并在拒绝时硬失败。工具执行后才调用 `policy.evaluate(...)` 只能提供审计。
- 应继续把 PostgreSQL `GRANT` 与 `REVOKE`、行级安全、网络控制和最小权限凭证作为权威的数据面控制。超级用户以及带有 `BYPASSRLS` 的角色可以绕过行级控制。
- 0.1 系列明确是实验性 MVP，而不是加固过的生产安全边界。切换到 `enforce` 前，应影子测试策略、限制能修改 `policy.settings` 或 `policy.policies` 的角色，并监控 `policy.decision_log`。

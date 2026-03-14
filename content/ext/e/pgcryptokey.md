---
title: "pgcryptokey"
linkTitle: "pgcryptokey"
description: "PG密钥管理"
weight: 7320
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://momjian.us/download/pgcryptokey/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://momjian.us/download/pgcryptokey/</div>
    <div class="ext-card__desc">https://momjian.us/download/pgcryptokey/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgcryptokey-0.85.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgcryptokey-0.85.tar.gz</div>
    <div class="ext-card__desc">pgcryptokey-0.85.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgcryptokey`**](/ext/e/pgcryptokey) | `0.85` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7320  | [**`pgcryptokey`**](/ext/e/pgcryptokey) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgcrypto`](/ext/e/pgcrypto) [`pgsodium`](/ext/e/pgsodium) [`pgsmcrypto`](/ext/e/pgsmcrypto) [`pg_tde`](/ext/e/pg_tde) [`faker`](/ext/e/faker) [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) [`supautils`](/ext/e/supautils) [`supabase_vault`](/ext/e/supabase_vault) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> missing 14 on el pgdg repo


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.85` | {{< pgvers "18,17,16,15,14" >}} | `pgcryptokey` | `pgcrypto` |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.85` | {{< pgvers "18,17,16,15,14" >}} | `pgcryptokey_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.85` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgcryptokey` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 |
| el8.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 |
| el9.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PIGSTY 0.85 1 |
| el9.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 |
| el10.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 |
| el10.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 | AVAIL PGDG 0.85 2 |
| d12.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| d12.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| d13.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| d13.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| u22.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| u22.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| u24.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| u24.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
@ el8.x86_64 18 pgcryptokey_18 pgcryptokey_18-0.85-1PIGSTY.el8.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcryptokey_18-0.85-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgcryptokey_18 pgcryptokey_18-0.85-1PIGSTY.el8.aarch64.rpm pigsty 0.85 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcryptokey_18-0.85-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgcryptokey_18 pgcryptokey_18-0.85-1PIGSTY.el9.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcryptokey_18-0.85-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgcryptokey_18 pgcryptokey_18-0.85-1PIGSTY.el9.aarch64.rpm pigsty 0.85 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcryptokey_18-0.85-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgcryptokey_18 pgcryptokey_18-0.85-1PIGSTY.el10.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcryptokey_18-0.85-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgcryptokey_18 pgcryptokey_18-0.85-1PIGSTY.el10.aarch64.rpm pigsty 0.85 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcryptokey_18-0.85-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgcryptokey postgresql-18-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-18-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgcryptokey postgresql-18-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-18-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgcryptokey postgresql-18-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-18-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgcryptokey postgresql-18-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-18-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgcryptokey postgresql-18-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-18-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgcryptokey postgresql-18-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-18-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgcryptokey postgresql-18-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-18-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgcryptokey postgresql-18-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-18-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-6PGDG.rhel8.x86_64.rpm pgdg 0.85 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgcryptokey_17-0.85-6PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el8.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcryptokey_17-0.85-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-6PGDG.rhel8.aarch64.rpm pgdg 0.85 18.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgcryptokey_17-0.85-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el8.aarch64.rpm pigsty 0.85 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcryptokey_17-0.85-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-6PGDG.rhel9.x86_64.rpm pgdg 0.85 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgcryptokey_17-0.85-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el9.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcryptokey_17-0.85-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-6PGDG.rhel9.aarch64.rpm pgdg 0.85 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgcryptokey_17-0.85-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el9.aarch64.rpm pigsty 0.85 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcryptokey_17-0.85-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-8PGDG.rhel10.x86_64.rpm pgdg 0.85 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgcryptokey_17-0.85-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el10.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcryptokey_17-0.85-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-8PGDG.rhel10.aarch64.rpm pgdg 0.85 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgcryptokey_17-0.85-8PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el10.aarch64.rpm pigsty 0.85 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcryptokey_17-0.85-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb pigsty 0.85 11.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb pigsty 0.85 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-5PGDG.rhel8.x86_64.rpm pgdg 0.85 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgcryptokey_16-0.85-5PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el8.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcryptokey_16-0.85-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-5PGDG.rhel8.aarch64.rpm pgdg 0.85 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgcryptokey_16-0.85-5PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el8.aarch64.rpm pigsty 0.85 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcryptokey_16-0.85-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-5PGDG.rhel9.x86_64.rpm pgdg 0.85 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgcryptokey_16-0.85-5PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el9.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcryptokey_16-0.85-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-5PGDG.rhel9.aarch64.rpm pgdg 0.85 17.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgcryptokey_16-0.85-5PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el9.aarch64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcryptokey_16-0.85-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-8PGDG.rhel10.x86_64.rpm pgdg 0.85 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgcryptokey_16-0.85-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el10.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcryptokey_16-0.85-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-8PGDG.rhel10.aarch64.rpm pgdg 0.85 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgcryptokey_16-0.85-8PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el10.aarch64.rpm pigsty 0.85 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcryptokey_16-0.85-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb pigsty 0.85 11.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb pigsty 0.85 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-3.rhel8.x86_64.rpm pgdg 0.85 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgcryptokey_15-0.85-3.rhel8.x86_64.rpm
@ el8.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el8.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcryptokey_15-0.85-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-3.rhel8.aarch64.rpm pgdg 0.85 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgcryptokey_15-0.85-3.rhel8.aarch64.rpm
@ el8.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el8.aarch64.rpm pigsty 0.85 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcryptokey_15-0.85-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-3.rhel9.x86_64.rpm pgdg 0.85 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgcryptokey_15-0.85-3.rhel9.x86_64.rpm
@ el9.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el9.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcryptokey_15-0.85-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-3.rhel9.aarch64.rpm pgdg 0.85 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgcryptokey_15-0.85-3.rhel9.aarch64.rpm
@ el9.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el9.aarch64.rpm pigsty 0.85 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcryptokey_15-0.85-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-8PGDG.rhel10.x86_64.rpm pgdg 0.85 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgcryptokey_15-0.85-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el10.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcryptokey_15-0.85-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-8PGDG.rhel10.aarch64.rpm pgdg 0.85 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgcryptokey_15-0.85-8PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el10.aarch64.rpm pigsty 0.85 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcryptokey_15-0.85-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb pigsty 0.85 11.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb pigsty 0.85 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-3.rhel8.x86_64.rpm pgdg 0.85 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgcryptokey_14-0.85-3.rhel8.x86_64.rpm
@ el8.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el8.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcryptokey_14-0.85-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-3.rhel8.aarch64.rpm pgdg 0.85 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgcryptokey_14-0.85-3.rhel8.aarch64.rpm
@ el8.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el8.aarch64.rpm pigsty 0.85 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcryptokey_14-0.85-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el9.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcryptokey_14-0.85-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-3.rhel9.aarch64.rpm pgdg 0.85 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgcryptokey_14-0.85-3.rhel9.aarch64.rpm
@ el9.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el9.aarch64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcryptokey_14-0.85-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-8PGDG.rhel10.x86_64.rpm pgdg 0.85 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgcryptokey_14-0.85-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el10.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcryptokey_14-0.85-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-8PGDG.rhel10.aarch64.rpm pgdg 0.85 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgcryptokey_14-0.85-8PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el10.aarch64.rpm pigsty 0.85 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcryptokey_14-0.85-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb pigsty 0.85 11.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgcryptokey` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgcryptokey         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgcryptokey` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgcryptokey;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgcryptokey -v 18  # PG 18
pig ext install -y pgcryptokey -v 17  # PG 17
pig ext install -y pgcryptokey -v 16  # PG 16
pig ext install -y pgcryptokey -v 15  # PG 15
pig ext install -y pgcryptokey -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgcryptokey_18       # PG 18
dnf install -y pgcryptokey_17       # PG 17
dnf install -y pgcryptokey_16       # PG 16
dnf install -y pgcryptokey_15       # PG 15
dnf install -y pgcryptokey_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgcryptokey   # PG 18
apt install -y postgresql-17-pgcryptokey   # PG 17
apt install -y postgresql-16-pgcryptokey   # PG 16
apt install -y postgresql-15-pgcryptokey   # PG 15
apt install -y postgresql-14-pgcryptokey   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgcryptokey CASCADE;  -- 依赖: pgcrypto
```



## 用法

> [pgcryptokey: PostgreSQL 加密密钥管理](https://momjian.us/download/pgcryptokey/)

`pgcryptokey` 在 PostgreSQL 内部管理加密数据密钥。密钥以加密方式存储，通过访问密码保护，支持系统级和会话级密钥访问。

```sql
CREATE EXTENSION pgcryptokey;
```

### 密钥管理函数

| 函数 | 描述 |
|----------|-------------|
| `create_cryptokey(name, byte_len)` | 生成新的加密密钥 |
| `set_cryptokey(name)` | 设置当前活动密钥 |
| `get_cryptokey(name)` | 获取密钥材料 |
| `drop_cryptokey(name)` | 删除密钥 |
| `supersede_cryptokey()` | 轮换到新密钥（相同访问密码） |
| `change_key_access_password()` | 更新密钥认证凭据 |
| `reencrypt_data()` | 使用不同密钥重新加密数据 |

### 会话控制

| 函数 | 描述 |
|----------|-------------|
| `get_shared_key()` | 建立客户端/服务器共享密钥（仅 SSL/Unix） |
| `set_session_access_password()` | 客户端提供的密码认证 |

### 典型工作流程

```sql
-- 创建密钥
SELECT create_cryptokey('mykey', 32);

-- 设置活动密钥
SELECT set_cryptokey('mykey');

-- 使用 pgcrypto 函数和托管密钥加密数据
UPDATE secrets SET data = pgp_sym_encrypt(plaintext, get_cryptokey('mykey'));

-- 解密数据
SELECT pgp_sym_decrypt(data, get_cryptokey('mykey')) FROM secrets;

-- 轮换密钥
SELECT supersede_cryptokey();
```

访问密码可以在数据库启动时配置以实现系统级访问，也可以由各个客户端按会话配置以实现细粒度安全控制。

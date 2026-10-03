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

| **相关扩展** | [`pgcrypto`](/ext/e/pgcrypto) [`pgsodium`](/ext/e/pgsodium) [`column_encrypt`](/ext/e/column_encrypt) [`supabase_vault`](/ext/e/supabase_vault) [`pg_enigma`](/ext/e/pg_enigma) [`pg_tde`](/ext/e/pg_tde) [`pgcrypto`](/ext/e/pgcrypto) [`shacrypt`](/ext/e/shacrypt) [`cryptint`](/ext/e/cryptint) [`pguecc`](/ext/e/pguecc) [`pgsmcrypto`](/ext/e/pgsmcrypto) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


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
| el9.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 2 |
| el9.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 3 |
| el10.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 3 |
| el10.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 3 | AVAIL PGDG 0.85 3 |
| d12.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| d12.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| d13.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| d13.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| u22.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| u22.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| u24.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| u24.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| u26.x86_64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
| u26.aarch64 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 | AVAIL PIGSTY 0.85 1 |
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
@ u26.x86_64 18 postgresql-18-pgcryptokey postgresql-18-pgcryptokey_0.85-1PIGSTY~resolute_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcryptokey/postgresql-18-pgcryptokey_0.85-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgcryptokey postgresql-18-pgcryptokey_0.85-1PIGSTY~resolute_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcryptokey/postgresql-18-pgcryptokey_0.85-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-6PGDG.rhel8.x86_64.rpm pgdg 0.85 18.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgcryptokey_17-0.85-6PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el8.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcryptokey_17-0.85-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-6PGDG.rhel8.aarch64.rpm pgdg 0.85 18.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgcryptokey_17-0.85-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el8.aarch64.rpm pigsty 0.85 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcryptokey_17-0.85-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-10PGDG.rhel9.8.x86_64.rpm pgdg 0.85 17.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgcryptokey_17-0.85-10PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-6PGDG.rhel9.x86_64.rpm pgdg 0.85 17.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgcryptokey_17-0.85-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el9.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcryptokey_17-0.85-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-10PGDG.rhel9.8.aarch64.rpm pgdg 0.85 17.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgcryptokey_17-0.85-10PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-6PGDG.rhel9.aarch64.rpm pgdg 0.85 17.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgcryptokey_17-0.85-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el9.aarch64.rpm pigsty 0.85 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcryptokey_17-0.85-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-10PGDG.rhel10.2.x86_64.rpm pgdg 0.85 17.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgcryptokey_17-0.85-10PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-8PGDG.rhel10.x86_64.rpm pgdg 0.85 17.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgcryptokey_17-0.85-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el10.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcryptokey_17-0.85-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-10PGDG.rhel10.2.aarch64.rpm pgdg 0.85 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgcryptokey_17-0.85-10PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-8PGDG.rhel10.aarch64.rpm pgdg 0.85 17.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgcryptokey_17-0.85-8PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgcryptokey_17 pgcryptokey_17-0.85-1PIGSTY.el10.aarch64.rpm pigsty 0.85 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcryptokey_17-0.85-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb pigsty 0.85 11.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb pigsty 0.85 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~resolute_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgcryptokey postgresql-17-pgcryptokey_0.85-1PIGSTY~resolute_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcryptokey/postgresql-17-pgcryptokey_0.85-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-5PGDG.rhel8.x86_64.rpm pgdg 0.85 18.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgcryptokey_16-0.85-5PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el8.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcryptokey_16-0.85-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-5PGDG.rhel8.aarch64.rpm pgdg 0.85 18.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgcryptokey_16-0.85-5PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el8.aarch64.rpm pigsty 0.85 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcryptokey_16-0.85-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-10PGDG.rhel9.8.x86_64.rpm pgdg 0.85 17.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgcryptokey_16-0.85-10PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-5PGDG.rhel9.x86_64.rpm pgdg 0.85 17.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgcryptokey_16-0.85-5PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el9.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcryptokey_16-0.85-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-10PGDG.rhel9.8.aarch64.rpm pgdg 0.85 17.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgcryptokey_16-0.85-10PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-5PGDG.rhel9.aarch64.rpm pgdg 0.85 17.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgcryptokey_16-0.85-5PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el9.aarch64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcryptokey_16-0.85-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-10PGDG.rhel10.2.x86_64.rpm pgdg 0.85 17.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgcryptokey_16-0.85-10PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-8PGDG.rhel10.x86_64.rpm pgdg 0.85 17.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgcryptokey_16-0.85-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el10.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcryptokey_16-0.85-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-10PGDG.rhel10.2.aarch64.rpm pgdg 0.85 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgcryptokey_16-0.85-10PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-8PGDG.rhel10.aarch64.rpm pgdg 0.85 17.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgcryptokey_16-0.85-8PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgcryptokey_16 pgcryptokey_16-0.85-1PIGSTY.el10.aarch64.rpm pigsty 0.85 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcryptokey_16-0.85-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb pigsty 0.85 11.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb pigsty 0.85 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~resolute_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgcryptokey postgresql-16-pgcryptokey_0.85-1PIGSTY~resolute_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcryptokey/postgresql-16-pgcryptokey_0.85-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-3.rhel8.x86_64.rpm pgdg 0.85 22.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgcryptokey_15-0.85-3.rhel8.x86_64.rpm
@ el8.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el8.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcryptokey_15-0.85-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-3.rhel8.aarch64.rpm pgdg 0.85 22.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgcryptokey_15-0.85-3.rhel8.aarch64.rpm
@ el8.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el8.aarch64.rpm pigsty 0.85 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcryptokey_15-0.85-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-10PGDG.rhel9.8.x86_64.rpm pgdg 0.85 17.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgcryptokey_15-0.85-10PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-3.rhel9.x86_64.rpm pgdg 0.85 22.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgcryptokey_15-0.85-3.rhel9.x86_64.rpm
@ el9.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el9.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcryptokey_15-0.85-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-10PGDG.rhel9.8.aarch64.rpm pgdg 0.85 17.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgcryptokey_15-0.85-10PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-3.rhel9.aarch64.rpm pgdg 0.85 22.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgcryptokey_15-0.85-3.rhel9.aarch64.rpm
@ el9.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el9.aarch64.rpm pigsty 0.85 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcryptokey_15-0.85-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-10PGDG.rhel10.2.x86_64.rpm pgdg 0.85 17.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgcryptokey_15-0.85-10PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-8PGDG.rhel10.x86_64.rpm pgdg 0.85 17.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgcryptokey_15-0.85-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el10.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcryptokey_15-0.85-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-10PGDG.rhel10.2.aarch64.rpm pgdg 0.85 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgcryptokey_15-0.85-10PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-8PGDG.rhel10.aarch64.rpm pgdg 0.85 17.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgcryptokey_15-0.85-8PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgcryptokey_15 pgcryptokey_15-0.85-1PIGSTY.el10.aarch64.rpm pigsty 0.85 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcryptokey_15-0.85-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb pigsty 0.85 11.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb pigsty 0.85 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~resolute_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgcryptokey postgresql-15-pgcryptokey_0.85-1PIGSTY~resolute_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcryptokey/postgresql-15-pgcryptokey_0.85-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-3.rhel8.x86_64.rpm pgdg 0.85 22.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgcryptokey_14-0.85-3.rhel8.x86_64.rpm
@ el8.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el8.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcryptokey_14-0.85-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-3.rhel8.aarch64.rpm pgdg 0.85 22.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgcryptokey_14-0.85-3.rhel8.aarch64.rpm
@ el8.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el8.aarch64.rpm pigsty 0.85 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcryptokey_14-0.85-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-10PGDG.rhel9.8.x86_64.rpm pgdg 0.85 17.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgcryptokey_14-0.85-10PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el9.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcryptokey_14-0.85-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-10PGDG.rhel9.8.aarch64.rpm pgdg 0.85 17.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgcryptokey_14-0.85-10PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-3.rhel9.aarch64.rpm pgdg 0.85 22.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgcryptokey_14-0.85-3.rhel9.aarch64.rpm
@ el9.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el9.aarch64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcryptokey_14-0.85-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-10PGDG.rhel10.2.x86_64.rpm pgdg 0.85 17.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgcryptokey_14-0.85-10PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-8PGDG.rhel10.x86_64.rpm pgdg 0.85 17.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgcryptokey_14-0.85-8PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el10.x86_64.rpm pigsty 0.85 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcryptokey_14-0.85-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-10PGDG.rhel10.2.aarch64.rpm pgdg 0.85 17.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgcryptokey_14-0.85-10PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-8PGDG.rhel10.aarch64.rpm pgdg 0.85 17.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgcryptokey_14-0.85-8PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgcryptokey_14 pgcryptokey_14-0.85-1PIGSTY.el10.aarch64.rpm pigsty 0.85 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcryptokey_14-0.85-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb pigsty 0.85 11.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb pigsty 0.85 11.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~resolute_amd64.deb pigsty 0.85 11.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgcryptokey postgresql-14-pgcryptokey_0.85-1PIGSTY~resolute_arm64.deb pigsty 0.85 11.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcryptokey/postgresql-14-pgcryptokey_0.85-1PIGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgcryptokey;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgcryptokey -v 18  # PG 18
pig ext install -y pgcryptokey -v 17  # PG 17
pig ext install -y pgcryptokey -v 16  # PG 16
pig ext install -y pgcryptokey -v 15  # PG 15
pig ext install -y pgcryptokey -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgcryptokey_18       # PG 18
dnf install -y pgcryptokey_17       # PG 17
dnf install -y pgcryptokey_16       # PG 16
dnf install -y pgcryptokey_15       # PG 15
dnf install -y pgcryptokey_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pgcryptokey   # PG 18
apt install -y postgresql-17-pgcryptokey   # PG 17
apt install -y postgresql-16-pgcryptokey   # PG 16
apt install -y postgresql-15-pgcryptokey   # PG 15
apt install -y postgresql-14-pgcryptokey   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pgcryptokey CASCADE;  -- 依赖: pgcrypto
```

## 用法

来源：

- [Official 0.85 source archive](https://momjian.us/download/pgcryptokey/pgcryptokey-0.85.tar.gz)
- [Official project directory](https://momjian.us/download/pgcryptokey/)

`pgcryptokey` 管理由访问密码包裹的数据加密密钥。它把包裹后的密钥保存在数据库表中，并结合 `pgcrypto` 完成加密、密钥轮换和重新加密。

### 安装和解锁

```sql
CREATE EXTENSION pgcryptokey CASCADE;
```

依赖扩展是 `pgcrypto`。源码发布版 0.85 使用 SQL 扩展版本 1.0，安装需要超级用户。在客户端模式中，应先按照上游流程，使用 `get_shared_key()` 和 `set_session_access_password(encrypted_password)` 建立会话访问密码。共享密钥交换仅支持 SSL 或 Unix 域套接字连接；加密密码参数使用十六进制编码。

启动模式则预加载 `pgcryptokey_acpass`，执行受保护的服务器端密码获取脚本，并需要重启。这种模式让访问密码在整个服务器范围内生效且只读。应选择一种模式；服务器运行期间不能混用启动和客户端模式。

### 创建和使用密钥

解锁密钥访问后：

```sql
SELECT create_cryptokey('app-key', 32);
SELECT set_cryptokey('app-key');

CREATE TEMP TABLE secrets(ciphertext bytea);
INSERT INTO secrets VALUES
  (pgp_sym_encrypt('example', get_cryptokey('app-key')));
SELECT pgp_sym_decrypt(ciphertext, get_cryptokey('app-key'))
FROM secrets;
```

密钥长度单位为字节。可以按名称或整数密钥 ID 选择密钥；按名称查找只定位当前未被替代的密钥。

### 轮换和重新加密

`supersede_cryptokey(name, byte_len)` 及其密钥 ID 重载创建替代密钥并返回 ID。新旧密钥最初使用相同的访问密码。修改包裹密码时，应使用整数密钥 ID 重载 `change_key_access_password(key_id, new_encrypted_password)`。会话必须已经设置共享密钥和当前访问密码；新密码必须用共享密钥加密，并使用十六进制编码。

源码发布版 0.85 的名称重载调用了未定义的 `change_access_password` 函数，无法完成密码修改。应使用上面的整数重载。

`reencrypt_data(data, old_key_id, new_key_id)` 和 `reencrypt_data_bytea(data, old_key_id, new_key_id)` 迁移加密值。应在密文旁保留原密钥 ID，并在调用 `drop_cryptokey(name)` 或密钥 ID 重载前验证重新加密结果；删除密钥可能让残留密文无法读取。

### 安全边界

应保护密钥表、函数授权、访问密码获取脚本和备份。上游指出，所有用户都能查看启动模式的 `pgcryptokey.access_password`；使用包裹密钥仍需要表权限。`get_cryptokey(name)` 返回原始密钥材料，不应通过普通查询、日志或应用追踪暴露其结果。这种设计不隔离可信数据库管理员对密钥的访问。

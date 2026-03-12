---
title: "pgsodium"
linkTitle: "pgsodium"
description: "表数据加密存储 TDE"
weight: 7020
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/michelp/pgsodium">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">michelp/pgsodium</div>
    <div class="ext-card__desc">https://github.com/michelp/pgsodium</div>
  </a>
  <a class="ext-card ext-card--source" href="pgsodium-3.1.9.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsodium-3.1.9.tar.gz</div>
    <div class="ext-card__desc">pgsodium-3.1.9.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgsodium`**](/ext/e/pgsodium) | `3.1.9` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7020  | [**`pgsodium`**](/ext/e/pgsodium) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgsodium` |
{.ext-table}

| **相关扩展** | [`pgsmcrypto`](/ext/e/pgsmcrypto) [`pgcryptokey`](/ext/e/pgcryptokey) [`pgcrypto`](/ext/e/pgcrypto) [`anon`](/ext/e/anon) [`pg_tde`](/ext/e/pg_tde) [`sslutils`](/ext/e/sslutils) [`faker`](/ext/e/faker) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`supabase_vault`](/ext/e/supabase_vault) |
{.ext-table .ext-table--rel}


> +fix missing pg17


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.9` | {{< pgvers "18,17,16,15,14" >}} | `pgsodium` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.9` | {{< pgvers "18,17,16,15,14" >}} | `pgsodium_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.9` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgsodium` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 | AVAIL PIGSTY 3.1.9 3 | AVAIL PIGSTY 3.1.9 12 | AVAIL PIGSTY 3.1.9 15 |
| el8.aarch64 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 | AVAIL PIGSTY 3.1.9 3 | AVAIL PIGSTY 3.1.9 11 | AVAIL PIGSTY 3.1.9 11 |
| el9.x86_64 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 | AVAIL PIGSTY 3.1.9 3 | AVAIL PIGSTY 3.1.9 11 | AVAIL PIGSTY 3.1.9 12 |
| el9.aarch64 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 | AVAIL PIGSTY 3.1.9 3 | AVAIL PIGSTY 3.1.9 11 | AVAIL PIGSTY 3.1.9 11 |
| el10.x86_64 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 |
| el10.aarch64 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 | AVAIL PGDG 3.1.9 2 |
| d12.x86_64 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 |
| d12.aarch64 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 |
| d13.x86_64 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 |
| d13.aarch64 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 |
| u22.x86_64 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 |
| u22.aarch64 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 |
| u24.x86_64 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 |
| u24.aarch64 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 | AVAIL PIGSTY 3.1.9 1 |
@ el8.x86_64 18 pgsodium_18 pgsodium_18-3.1.9-4PGDG.rhel8.x86_64.rpm pgdg 3.1.9 71.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgsodium_18-3.1.9-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pgsodium_18 pgsodium_18-3.1.9-1PIGSTY.el8.x86_64.rpm pigsty 3.1.9 60.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgsodium_18-3.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgsodium_18 pgsodium_18-3.1.9-4PGDG.rhel8.aarch64.rpm pgdg 3.1.9 67.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgsodium_18-3.1.9-4PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pgsodium_18 pgsodium_18-3.1.9-1PIGSTY.el8.aarch64.rpm pigsty 3.1.9 57.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgsodium_18-3.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgsodium_18 pgsodium_18-3.1.9-4PGDG.rhel9.x86_64.rpm pgdg 3.1.9 70.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgsodium_18-3.1.9-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pgsodium_18 pgsodium_18-3.1.9-1PIGSTY.el9.x86_64.rpm pigsty 3.1.9 56.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgsodium_18-3.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgsodium_18 pgsodium_18-3.1.9-4PGDG.rhel9.aarch64.rpm pgdg 3.1.9 67.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgsodium_18-3.1.9-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pgsodium_18 pgsodium_18-3.1.9-1PIGSTY.el9.aarch64.rpm pigsty 3.1.9 54.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgsodium_18-3.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgsodium_18 pgsodium_18-3.1.9-4PGDG.rhel10.x86_64.rpm pgdg 3.1.9 70.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgsodium_18-3.1.9-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pgsodium_18 pgsodium_18-3.1.9-1PIGSTY.el10.x86_64.rpm pigsty 3.1.9 56.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgsodium_18-3.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgsodium_18 pgsodium_18-3.1.9-4PGDG.rhel10.aarch64.rpm pgdg 3.1.9 68.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgsodium_18-3.1.9-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pgsodium_18 pgsodium_18-3.1.9-1PIGSTY.el10.aarch64.rpm pigsty 3.1.9 54.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgsodium_18-3.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgsodium postgresql-18-pgsodium_3.1.9-1PIGSTY~bookworm_amd64.deb pigsty 3.1.9 182.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsodium/postgresql-18-pgsodium_3.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgsodium postgresql-18-pgsodium_3.1.9-1PIGSTY~bookworm_arm64.deb pigsty 3.1.9 179.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsodium/postgresql-18-pgsodium_3.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgsodium postgresql-18-pgsodium_3.1.9-1PIGSTY~trixie_amd64.deb pigsty 3.1.9 183.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsodium/postgresql-18-pgsodium_3.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgsodium postgresql-18-pgsodium_3.1.9-1PIGSTY~trixie_arm64.deb pigsty 3.1.9 179.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsodium/postgresql-18-pgsodium_3.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgsodium postgresql-18-pgsodium_3.1.9-1PIGSTY~jammy_amd64.deb pigsty 3.1.9 194.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsodium/postgresql-18-pgsodium_3.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgsodium postgresql-18-pgsodium_3.1.9-1PIGSTY~jammy_arm64.deb pigsty 3.1.9 190.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsodium/postgresql-18-pgsodium_3.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgsodium postgresql-18-pgsodium_3.1.9-1PIGSTY~noble_amd64.deb pigsty 3.1.9 192.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsodium/postgresql-18-pgsodium_3.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgsodium postgresql-18-pgsodium_3.1.9-1PIGSTY~noble_arm64.deb pigsty 3.1.9 189.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsodium/postgresql-18-pgsodium_3.1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgsodium_17 pgsodium_17-3.1.9-3PGDG.rhel8.x86_64.rpm pgdg 3.1.9 71.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgsodium_17-3.1.9-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgsodium_17 pgsodium_17-3.1.9-1PIGSTY.el8.x86_64.rpm pigsty 3.1.9 60.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgsodium_17-3.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgsodium_17 pgsodium_17-3.1.9-3PGDG.rhel8.aarch64.rpm pgdg 3.1.9 67.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgsodium_17-3.1.9-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgsodium_17 pgsodium_17-3.1.9-1PIGSTY.el8.aarch64.rpm pigsty 3.1.9 57.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgsodium_17-3.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgsodium_17 pgsodium_17-3.1.9-3PGDG.rhel9.x86_64.rpm pgdg 3.1.9 71.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgsodium_17-3.1.9-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgsodium_17 pgsodium_17-3.1.9-1PIGSTY.el9.x86_64.rpm pigsty 3.1.9 56.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgsodium_17-3.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgsodium_17 pgsodium_17-3.1.9-3PGDG.rhel9.aarch64.rpm pgdg 3.1.9 68.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgsodium_17-3.1.9-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgsodium_17 pgsodium_17-3.1.9-1PIGSTY.el9.aarch64.rpm pigsty 3.1.9 54.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgsodium_17-3.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgsodium_17 pgsodium_17-3.1.9-4PGDG.rhel10.x86_64.rpm pgdg 3.1.9 70.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgsodium_17-3.1.9-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgsodium_17 pgsodium_17-3.1.9-1PIGSTY.el10.x86_64.rpm pigsty 3.1.9 56.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgsodium_17-3.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgsodium_17 pgsodium_17-3.1.9-4PGDG.rhel10.aarch64.rpm pgdg 3.1.9 68.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgsodium_17-3.1.9-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgsodium_17 pgsodium_17-3.1.9-1PIGSTY.el10.aarch64.rpm pigsty 3.1.9 54.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgsodium_17-3.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgsodium postgresql-17-pgsodium_3.1.9-1PIGSTY~bookworm_amd64.deb pigsty 3.1.9 182.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsodium/postgresql-17-pgsodium_3.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgsodium postgresql-17-pgsodium_3.1.9-1PIGSTY~bookworm_arm64.deb pigsty 3.1.9 179.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsodium/postgresql-17-pgsodium_3.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgsodium postgresql-17-pgsodium_3.1.9-1PIGSTY~trixie_amd64.deb pigsty 3.1.9 183.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsodium/postgresql-17-pgsodium_3.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgsodium postgresql-17-pgsodium_3.1.9-1PIGSTY~trixie_arm64.deb pigsty 3.1.9 179.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsodium/postgresql-17-pgsodium_3.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgsodium postgresql-17-pgsodium_3.1.9-1PIGSTY~jammy_amd64.deb pigsty 3.1.9 204.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsodium/postgresql-17-pgsodium_3.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgsodium postgresql-17-pgsodium_3.1.9-1PIGSTY~jammy_arm64.deb pigsty 3.1.9 201.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsodium/postgresql-17-pgsodium_3.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgsodium postgresql-17-pgsodium_3.1.9-1PIGSTY~noble_amd64.deb pigsty 3.1.9 192.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsodium/postgresql-17-pgsodium_3.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgsodium postgresql-17-pgsodium_3.1.9-1PIGSTY~noble_arm64.deb pigsty 3.1.9 189.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsodium/postgresql-17-pgsodium_3.1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgsodium_16 pgsodium_16-3.1.9-1PIGSTY.el8.x86_64.rpm pigsty 3.1.9 60.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgsodium_16-3.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pgsodium_16 pgsodium_16-3.1.9-1PGDG.rhel8.x86_64.rpm pgdg 3.1.9 71.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgsodium_16-3.1.9-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgsodium_16 pgsodium_16-3.1.8-1PGDG.rhel8.x86_64.rpm pgdg 3.1.8 69.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgsodium_16-3.1.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgsodium_16 pgsodium_16-3.1.9-1PIGSTY.el8.aarch64.rpm pigsty 3.1.9 57.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgsodium_16-3.1.9-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pgsodium_16 pgsodium_16-3.1.9-1PGDG.rhel8.aarch64.rpm pgdg 3.1.9 67.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgsodium_16-3.1.9-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgsodium_16 pgsodium_16-3.1.8-1PGDG.rhel8.aarch64.rpm pgdg 3.1.8 65.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgsodium_16-3.1.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgsodium_16 pgsodium_16-3.1.9-1PIGSTY.el9.x86_64.rpm pigsty 3.1.9 56.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgsodium_16-3.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pgsodium_16 pgsodium_16-3.1.9-1PGDG.rhel9.x86_64.rpm pgdg 3.1.9 71.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgsodium_16-3.1.9-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgsodium_16 pgsodium_16-3.1.8-1PGDG.rhel9.x86_64.rpm pgdg 3.1.8 69.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgsodium_16-3.1.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgsodium_16 pgsodium_16-3.1.9-1PIGSTY.el9.aarch64.rpm pigsty 3.1.9 54.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgsodium_16-3.1.9-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pgsodium_16 pgsodium_16-3.1.9-1PGDG.rhel9.aarch64.rpm pgdg 3.1.9 68.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgsodium_16-3.1.9-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgsodium_16 pgsodium_16-3.1.8-1PGDG.rhel9.aarch64.rpm pgdg 3.1.8 66.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgsodium_16-3.1.8-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgsodium_16 pgsodium_16-3.1.9-4PGDG.rhel10.x86_64.rpm pgdg 3.1.9 70.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgsodium_16-3.1.9-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgsodium_16 pgsodium_16-3.1.9-1PIGSTY.el10.x86_64.rpm pigsty 3.1.9 56.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgsodium_16-3.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgsodium_16 pgsodium_16-3.1.9-4PGDG.rhel10.aarch64.rpm pgdg 3.1.9 68.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgsodium_16-3.1.9-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgsodium_16 pgsodium_16-3.1.9-1PIGSTY.el10.aarch64.rpm pigsty 3.1.9 54.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgsodium_16-3.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgsodium postgresql-16-pgsodium_3.1.9-1PIGSTY~bookworm_amd64.deb pigsty 3.1.9 178.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsodium/postgresql-16-pgsodium_3.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgsodium postgresql-16-pgsodium_3.1.9-1PIGSTY~bookworm_arm64.deb pigsty 3.1.9 173.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsodium/postgresql-16-pgsodium_3.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgsodium postgresql-16-pgsodium_3.1.9-1PIGSTY~trixie_amd64.deb pigsty 3.1.9 178.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsodium/postgresql-16-pgsodium_3.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgsodium postgresql-16-pgsodium_3.1.9-1PIGSTY~trixie_arm64.deb pigsty 3.1.9 174.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsodium/postgresql-16-pgsodium_3.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgsodium postgresql-16-pgsodium_3.1.9-1PIGSTY~jammy_amd64.deb pigsty 3.1.9 200.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsodium/postgresql-16-pgsodium_3.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgsodium postgresql-16-pgsodium_3.1.9-1PIGSTY~jammy_arm64.deb pigsty 3.1.9 196.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsodium/postgresql-16-pgsodium_3.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgsodium postgresql-16-pgsodium_3.1.9-1PIGSTY~noble_amd64.deb pigsty 3.1.9 187.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsodium/postgresql-16-pgsodium_3.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgsodium postgresql-16-pgsodium_3.1.9-1PIGSTY~noble_arm64.deb pigsty 3.1.9 184.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsodium/postgresql-16-pgsodium_3.1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.1.9-1PIGSTY.el8.x86_64.rpm pigsty 3.1.9 58.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgsodium_15-3.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.1.9-1PGDG.rhel8.x86_64.rpm pgdg 3.1.9 69.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsodium_15-3.1.9-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.1.8-1PGDG.rhel8.x86_64.rpm pgdg 3.1.8 67.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsodium_15-3.1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.1.7-1.rhel8.x86_64.rpm pgdg 3.1.7 67.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsodium_15-3.1.7-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.1.6-1.rhel8.x86_64.rpm pgdg 3.1.6 66.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsodium_15-3.1.6-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.1.5-1.rhel8.x86_64.rpm pgdg 3.1.5 66.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsodium_15-3.1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.1.4-1.rhel8.x86_64.rpm pgdg 3.1.4 66.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsodium_15-3.1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.1.1-1.rhel8.x86_64.rpm pgdg 3.1.1 65.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsodium_15-3.1.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.1.0-1.rhel8.x86_64.rpm pgdg 3.1.0 64.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsodium_15-3.1.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.0.6-1.rhel8.x86_64.rpm pgdg 3.0.6 57.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsodium_15-3.0.6-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.0.5-1.rhel8.x86_64.rpm pgdg 3.0.5 56.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsodium_15-3.0.5-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsodium_15 pgsodium_15-3.0.4-2.rhel8.x86_64.rpm pgdg 3.0.4 53.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsodium_15-3.0.4-2.rhel8.x86_64.rpm
@ el8.aarch64 15 pgsodium_15 pgsodium_15-3.1.9-1PIGSTY.el8.aarch64.rpm pigsty 3.1.9 56.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgsodium_15-3.1.9-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pgsodium_15 pgsodium_15-3.1.9-1PGDG.rhel8.aarch64.rpm pgdg 3.1.9 66.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsodium_15-3.1.9-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsodium_15 pgsodium_15-3.1.8-1PGDG.rhel8.aarch64.rpm pgdg 3.1.8 64.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsodium_15-3.1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsodium_15 pgsodium_15-3.1.7-1.rhel8.aarch64.rpm pgdg 3.1.7 63.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsodium_15-3.1.7-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsodium_15 pgsodium_15-3.1.6-1.rhel8.aarch64.rpm pgdg 3.1.6 63.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsodium_15-3.1.6-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsodium_15 pgsodium_15-3.1.5-1.rhel8.aarch64.rpm pgdg 3.1.5 63.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsodium_15-3.1.5-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsodium_15 pgsodium_15-3.1.4-1.rhel8.aarch64.rpm pgdg 3.1.4 62.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsodium_15-3.1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsodium_15 pgsodium_15-3.1.1-1.rhel8.aarch64.rpm pgdg 3.1.1 61.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsodium_15-3.1.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsodium_15 pgsodium_15-3.1.0-1.rhel8.aarch64.rpm pgdg 3.1.0 61.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsodium_15-3.1.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsodium_15 pgsodium_15-3.0.6-1.rhel8.aarch64.rpm pgdg 3.0.6 55.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsodium_15-3.0.6-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsodium_15 pgsodium_15-3.0.5-1.rhel8.aarch64.rpm pgdg 3.0.5 55.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsodium_15-3.0.5-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pgsodium_15 pgsodium_15-3.1.9-1PIGSTY.el9.x86_64.rpm pigsty 3.1.9 55.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgsodium_15-3.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pgsodium_15 pgsodium_15-3.1.9-1PGDG.rhel9.x86_64.rpm pgdg 3.1.9 69.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsodium_15-3.1.9-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsodium_15 pgsodium_15-3.1.8-1PGDG.rhel9.x86_64.rpm pgdg 3.1.8 67.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsodium_15-3.1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsodium_15 pgsodium_15-3.1.7-1.rhel9.x86_64.rpm pgdg 3.1.7 67.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsodium_15-3.1.7-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsodium_15 pgsodium_15-3.1.6-1.rhel9.x86_64.rpm pgdg 3.1.6 66.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsodium_15-3.1.6-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsodium_15 pgsodium_15-3.1.5-1.rhel9.x86_64.rpm pgdg 3.1.5 66.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsodium_15-3.1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsodium_15 pgsodium_15-3.1.4-1.rhel9.x86_64.rpm pgdg 3.1.4 66.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsodium_15-3.1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsodium_15 pgsodium_15-3.1.1-1.rhel9.x86_64.rpm pgdg 3.1.1 65.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsodium_15-3.1.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsodium_15 pgsodium_15-3.1.0-1.rhel9.x86_64.rpm pgdg 3.1.0 64.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsodium_15-3.1.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsodium_15 pgsodium_15-3.0.6-1.rhel9.x86_64.rpm pgdg 3.0.6 57.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsodium_15-3.0.6-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsodium_15 pgsodium_15-3.0.5-1.rhel9.x86_64.rpm pgdg 3.0.5 57.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsodium_15-3.0.5-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgsodium_15 pgsodium_15-3.1.9-1PIGSTY.el9.aarch64.rpm pigsty 3.1.9 52.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgsodium_15-3.1.9-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pgsodium_15 pgsodium_15-3.1.9-1PGDG.rhel9.aarch64.rpm pgdg 3.1.9 66.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsodium_15-3.1.9-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsodium_15 pgsodium_15-3.1.8-1PGDG.rhel9.aarch64.rpm pgdg 3.1.8 64.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsodium_15-3.1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsodium_15 pgsodium_15-3.1.7-1.rhel9.aarch64.rpm pgdg 3.1.7 64.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsodium_15-3.1.7-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsodium_15 pgsodium_15-3.1.6-1.rhel9.aarch64.rpm pgdg 3.1.6 63.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsodium_15-3.1.6-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsodium_15 pgsodium_15-3.1.5-1.rhel9.aarch64.rpm pgdg 3.1.5 63.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsodium_15-3.1.5-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsodium_15 pgsodium_15-3.1.4-1.rhel9.aarch64.rpm pgdg 3.1.4 63.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsodium_15-3.1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsodium_15 pgsodium_15-3.1.1-1.rhel9.aarch64.rpm pgdg 3.1.1 62.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsodium_15-3.1.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsodium_15 pgsodium_15-3.1.0-1.rhel9.aarch64.rpm pgdg 3.1.0 61.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsodium_15-3.1.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsodium_15 pgsodium_15-3.0.6-1.rhel9.aarch64.rpm pgdg 3.0.6 56.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsodium_15-3.0.6-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsodium_15 pgsodium_15-3.0.5-1.rhel9.aarch64.rpm pgdg 3.0.5 56.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsodium_15-3.0.5-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pgsodium_15 pgsodium_15-3.1.9-4PGDG.rhel10.x86_64.rpm pgdg 3.1.9 69.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgsodium_15-3.1.9-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgsodium_15 pgsodium_15-3.1.9-1PIGSTY.el10.x86_64.rpm pigsty 3.1.9 55.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgsodium_15-3.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgsodium_15 pgsodium_15-3.1.9-4PGDG.rhel10.aarch64.rpm pgdg 3.1.9 66.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgsodium_15-3.1.9-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgsodium_15 pgsodium_15-3.1.9-1PIGSTY.el10.aarch64.rpm pigsty 3.1.9 52.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgsodium_15-3.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgsodium postgresql-15-pgsodium_3.1.9-1PIGSTY~bookworm_amd64.deb pigsty 3.1.9 172.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsodium/postgresql-15-pgsodium_3.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgsodium postgresql-15-pgsodium_3.1.9-1PIGSTY~bookworm_arm64.deb pigsty 3.1.9 168.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsodium/postgresql-15-pgsodium_3.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgsodium postgresql-15-pgsodium_3.1.9-1PIGSTY~trixie_amd64.deb pigsty 3.1.9 173.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsodium/postgresql-15-pgsodium_3.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgsodium postgresql-15-pgsodium_3.1.9-1PIGSTY~trixie_arm64.deb pigsty 3.1.9 168.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsodium/postgresql-15-pgsodium_3.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgsodium postgresql-15-pgsodium_3.1.9-1PIGSTY~jammy_amd64.deb pigsty 3.1.9 195.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsodium/postgresql-15-pgsodium_3.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgsodium postgresql-15-pgsodium_3.1.9-1PIGSTY~jammy_arm64.deb pigsty 3.1.9 192.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsodium/postgresql-15-pgsodium_3.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgsodium postgresql-15-pgsodium_3.1.9-1PIGSTY~noble_amd64.deb pigsty 3.1.9 181.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsodium/postgresql-15-pgsodium_3.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgsodium postgresql-15-pgsodium_3.1.9-1PIGSTY~noble_arm64.deb pigsty 3.1.9 178.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsodium/postgresql-15-pgsodium_3.1.9-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.1.9-1PIGSTY.el8.x86_64.rpm pigsty 3.1.9 58.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgsodium_14-3.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.1.9-1PGDG.rhel8.x86_64.rpm pgdg 3.1.9 69.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.1.9-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.1.8-1PGDG.rhel8.x86_64.rpm pgdg 3.1.8 67.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.1.7-1.rhel8.x86_64.rpm pgdg 3.1.7 67.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.1.7-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.1.6-1.rhel8.x86_64.rpm pgdg 3.1.6 66.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.1.6-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.1.5-1.rhel8.x86_64.rpm pgdg 3.1.5 66.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.1.4-1.rhel8.x86_64.rpm pgdg 3.1.4 66.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.1.1-1.rhel8.x86_64.rpm pgdg 3.1.1 65.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.1.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.1.0-1.rhel8.x86_64.rpm pgdg 3.1.0 64.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.1.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.0.6-1.rhel8.x86_64.rpm pgdg 3.0.6 56.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.0.6-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.0.5-1.rhel8.x86_64.rpm pgdg 3.0.5 56.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.0.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.0.4-1.rhel8.x86_64.rpm pgdg 3.0.4 53.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.0.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.0.2-1.rhel8.x86_64.rpm pgdg 3.0.2 52.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.0.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-3.0.0-1.rhel8.x86_64.rpm pgdg 3.0.0 52.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-3.0.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsodium_14 pgsodium_14-2.0.2-1.rhel8.x86_64.rpm pgdg 2.0.2 48.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsodium_14-2.0.2-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pgsodium_14 pgsodium_14-3.1.9-1PIGSTY.el8.aarch64.rpm pigsty 3.1.9 56.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgsodium_14-3.1.9-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pgsodium_14 pgsodium_14-3.1.9-1PGDG.rhel8.aarch64.rpm pgdg 3.1.9 66.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsodium_14-3.1.9-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsodium_14 pgsodium_14-3.1.8-1PGDG.rhel8.aarch64.rpm pgdg 3.1.8 64.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsodium_14-3.1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsodium_14 pgsodium_14-3.1.7-1.rhel8.aarch64.rpm pgdg 3.1.7 63.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsodium_14-3.1.7-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsodium_14 pgsodium_14-3.1.6-1.rhel8.aarch64.rpm pgdg 3.1.6 63.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsodium_14-3.1.6-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsodium_14 pgsodium_14-3.1.5-1.rhel8.aarch64.rpm pgdg 3.1.5 62.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsodium_14-3.1.5-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsodium_14 pgsodium_14-3.1.4-1.rhel8.aarch64.rpm pgdg 3.1.4 62.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsodium_14-3.1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsodium_14 pgsodium_14-3.1.1-1.rhel8.aarch64.rpm pgdg 3.1.1 61.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsodium_14-3.1.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsodium_14 pgsodium_14-3.1.0-1.rhel8.aarch64.rpm pgdg 3.1.0 61.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsodium_14-3.1.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsodium_14 pgsodium_14-3.0.6-1.rhel8.aarch64.rpm pgdg 3.0.6 55.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsodium_14-3.0.6-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsodium_14 pgsodium_14-3.0.5-1.rhel8.aarch64.rpm pgdg 3.0.5 55.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsodium_14-3.0.5-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-3.1.9-1PIGSTY.el9.x86_64.rpm pigsty 3.1.9 55.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgsodium_14-3.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-3.1.9-1PGDG.rhel9.x86_64.rpm pgdg 3.1.9 69.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsodium_14-3.1.9-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-3.1.8-1PGDG.rhel9.x86_64.rpm pgdg 3.1.8 67.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsodium_14-3.1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-3.1.7-1.rhel9.x86_64.rpm pgdg 3.1.7 67.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsodium_14-3.1.7-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-3.1.6-1.rhel9.x86_64.rpm pgdg 3.1.6 66.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsodium_14-3.1.6-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-3.1.5-1.rhel9.x86_64.rpm pgdg 3.1.5 66.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsodium_14-3.1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-3.1.4-1.rhel9.x86_64.rpm pgdg 3.1.4 66.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsodium_14-3.1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-3.1.1-1.rhel9.x86_64.rpm pgdg 3.1.1 65.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsodium_14-3.1.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-3.1.0-1.rhel9.x86_64.rpm pgdg 3.1.0 64.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsodium_14-3.1.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-3.0.6-1.rhel9.x86_64.rpm pgdg 3.0.6 57.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsodium_14-3.0.6-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-3.0.5-1.rhel9.x86_64.rpm pgdg 3.0.5 57.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsodium_14-3.0.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsodium_14 pgsodium_14-2.0.2-1.rhel9.x86_64.rpm pgdg 2.0.2 49.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsodium_14-2.0.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgsodium_14 pgsodium_14-3.1.9-1PIGSTY.el9.aarch64.rpm pigsty 3.1.9 52.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgsodium_14-3.1.9-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pgsodium_14 pgsodium_14-3.1.9-1PGDG.rhel9.aarch64.rpm pgdg 3.1.9 66.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsodium_14-3.1.9-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsodium_14 pgsodium_14-3.1.8-1PGDG.rhel9.aarch64.rpm pgdg 3.1.8 64.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsodium_14-3.1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsodium_14 pgsodium_14-3.1.7-1.rhel9.aarch64.rpm pgdg 3.1.7 64.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsodium_14-3.1.7-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsodium_14 pgsodium_14-3.1.6-1.rhel9.aarch64.rpm pgdg 3.1.6 63.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsodium_14-3.1.6-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsodium_14 pgsodium_14-3.1.5-1.rhel9.aarch64.rpm pgdg 3.1.5 63.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsodium_14-3.1.5-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsodium_14 pgsodium_14-3.1.4-1.rhel9.aarch64.rpm pgdg 3.1.4 63.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsodium_14-3.1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsodium_14 pgsodium_14-3.1.1-1.rhel9.aarch64.rpm pgdg 3.1.1 62.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsodium_14-3.1.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsodium_14 pgsodium_14-3.1.0-1.rhel9.aarch64.rpm pgdg 3.1.0 61.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsodium_14-3.1.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsodium_14 pgsodium_14-3.0.6-1.rhel9.aarch64.rpm pgdg 3.0.6 56.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsodium_14-3.0.6-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsodium_14 pgsodium_14-3.0.5-1.rhel9.aarch64.rpm pgdg 3.0.5 56.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsodium_14-3.0.5-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgsodium_14 pgsodium_14-3.1.9-4PGDG.rhel10.x86_64.rpm pgdg 3.1.9 69.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgsodium_14-3.1.9-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgsodium_14 pgsodium_14-3.1.9-1PIGSTY.el10.x86_64.rpm pigsty 3.1.9 55.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgsodium_14-3.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgsodium_14 pgsodium_14-3.1.9-4PGDG.rhel10.aarch64.rpm pgdg 3.1.9 66.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgsodium_14-3.1.9-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgsodium_14 pgsodium_14-3.1.9-1PIGSTY.el10.aarch64.rpm pigsty 3.1.9 52.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgsodium_14-3.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgsodium postgresql-14-pgsodium_3.1.9-1PIGSTY~bookworm_amd64.deb pigsty 3.1.9 172.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsodium/postgresql-14-pgsodium_3.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgsodium postgresql-14-pgsodium_3.1.9-1PIGSTY~bookworm_arm64.deb pigsty 3.1.9 168.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsodium/postgresql-14-pgsodium_3.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgsodium postgresql-14-pgsodium_3.1.9-1PIGSTY~trixie_amd64.deb pigsty 3.1.9 172.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsodium/postgresql-14-pgsodium_3.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgsodium postgresql-14-pgsodium_3.1.9-1PIGSTY~trixie_arm64.deb pigsty 3.1.9 168.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsodium/postgresql-14-pgsodium_3.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgsodium postgresql-14-pgsodium_3.1.9-1PIGSTY~jammy_amd64.deb pigsty 3.1.9 195.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsodium/postgresql-14-pgsodium_3.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgsodium postgresql-14-pgsodium_3.1.9-1PIGSTY~jammy_arm64.deb pigsty 3.1.9 192.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsodium/postgresql-14-pgsodium_3.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgsodium postgresql-14-pgsodium_3.1.9-1PIGSTY~noble_amd64.deb pigsty 3.1.9 181.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsodium/postgresql-14-pgsodium_3.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgsodium postgresql-14-pgsodium_3.1.9-1PIGSTY~noble_arm64.deb pigsty 3.1.9 178.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsodium/postgresql-14-pgsodium_3.1.9-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgsodium` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgsodium         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgsodium` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgsodium;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgsodium -v 18  # PG 18
pig ext install -y pgsodium -v 17  # PG 17
pig ext install -y pgsodium -v 16  # PG 16
pig ext install -y pgsodium -v 15  # PG 15
pig ext install -y pgsodium -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgsodium_18       # PG 18
dnf install -y pgsodium_17       # PG 17
dnf install -y pgsodium_16       # PG 16
dnf install -y pgsodium_15       # PG 15
dnf install -y pgsodium_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgsodium   # PG 18
apt install -y postgresql-17-pgsodium   # PG 17
apt install -y postgresql-16-pgsodium   # PG 16
apt install -y postgresql-15-pgsodium   # PG 15
apt install -y postgresql-14-pgsodium   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgsodium';
```


**创建扩展**：

```sql
CREATE EXTENSION pgsodium;
```



## 用法

> [pgsodium: 基于 libsodium 的 PostgreSQL 加密函数](https://github.com/michelp/pgsodium)

`pgsodium` 是一个使用 [libsodium](https://download.libsodium.org/doc/) 库的 PostgreSQL 加密扩展。它提供了 libsodium 的直接 SQL 接口、服务器管理的密钥派生和透明列加密（TCE）。

```sql
CREATE EXTENSION pgsodium;
```

### 生成随机数据

```sql
SELECT pgsodium.randombytes_random();
SELECT pgsodium.randombytes_buf(16);         -- 16个随机字节
SELECT pgsodium.randombytes_uniform(100);    -- 0-99之间的随机整数
```

### 对称密钥加密（带认证）

```sql
SELECT * FROM pgsodium.crypto_secretbox_keygen();
SELECT pgsodium.crypto_secretbox('message', nonce, key);
SELECT pgsodium.crypto_secretbox_open(ciphertext, nonce, key);
```

### 公钥加密

```sql
SELECT * FROM pgsodium.crypto_box_new_keypair();
SELECT pgsodium.crypto_box('message', nonce, public_key, secret_key);
SELECT pgsodium.crypto_box_open(ciphertext, nonce, public_key, secret_key);
```

### 公钥签名

```sql
SELECT * FROM pgsodium.crypto_sign_new_keypair();
SELECT pgsodium.crypto_sign('message', secret_key);
SELECT pgsodium.crypto_sign_open(signed_message, public_key);
```

### 密码哈希

```sql
SELECT pgsodium.crypto_pwhash_str('my_password');
SELECT pgsodium.crypto_pwhash_str_verify(hash, 'my_password');
```

### 哈希

```sql
SELECT pgsodium.crypto_generichash('data');
SELECT pgsodium.crypto_shorthash('data', key);
```

### 服务器密钥管理

pgsodium 可以将外部根密钥加载到内存中，该密钥永远无法通过 SQL 访问。子密钥通过密钥 ID 派生：

```sql
SELECT * FROM pgsodium.create_key();
-- 返回一个 UUID 密钥 ID，用于 TCE 或加密函数
```

### 透明列加密（TCE）

```sql
CREATE TABLE private.users (
    id bigserial PRIMARY KEY,
    secret text
);

SECURITY LABEL FOR pgsodium ON COLUMN private.users.secret
  IS 'ENCRYPT WITH KEY ID dfc44293-fa78-4a1a-9ef9-7e600e63e101';
```

加密数据存储在磁盘上，通过生成的视图自动解密。

### 安全角色

- `pgsodium_keyiduser` -- 较低权限，只能通过 UUID 访问密钥
- `pgsodium_keymaker` -- 较高权限，可以操作原始密钥

---
title: "supabase_vault"
linkTitle: "supabase_vault"
description: "在 Vault 中存储加密凭证的扩展 (supabase)"
weight: 7030
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/supabase/vault">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">supabase/vault</div>
    <div class="ext-card__desc">https://github.com/supabase/vault</div>
  </a>
  <a class="ext-card ext-card--source" href="vault-0.3.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">vault-0.3.1.tar.gz</div>
    <div class="ext-card__desc">vault-0.3.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_vault`**](/ext/e/supabase_vault) | `0.3.1` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7030  | [**`supabase_vault`**](/ext/e/supabase_vault) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `vault` |
{.ext-table}

| **相关扩展** | [`pgsodium`](/ext/e/pgsodium) [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) [`supautils`](/ext/e/supautils) [`pg_session_jwt`](/ext/e/pg_session_jwt) [`anon`](/ext/e/anon) [`pg_tde`](/ext/e/pg_tde) [`pgsmcrypto`](/ext/e/pgsmcrypto) [`pgaudit`](/ext/e/pgaudit) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_vault` | `pgsodium` |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.1` | {{< pgvers "18,17,16,15,14" >}} | `vault_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-vault` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
@ el8.x86_64 18 vault_18 vault_18-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 26.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/vault_18-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 vault_18 vault_18-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 26.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/vault_18-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 vault_18 vault_18-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 25.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/vault_18-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 vault_18 vault_18-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 25.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/vault_18-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 vault_18 vault_18-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/vault_18-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 vault_18 vault_18-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/vault_18-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~bookworm_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~bookworm_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~trixie_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~trixie_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~jammy_amd64.deb pigsty 0.3.1 31.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~jammy_arm64.deb pigsty 0.3.1 31.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~noble_amd64.deb pigsty 0.3.1 30.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~noble_arm64.deb pigsty 0.3.1 30.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 vault_17 vault_17-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 26.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/vault_17-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 vault_17 vault_17-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 26.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/vault_17-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 vault_17 vault_17-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 25.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/vault_17-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 vault_17 vault_17-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 25.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/vault_17-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 vault_17 vault_17-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/vault_17-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 vault_17 vault_17-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/vault_17-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~bookworm_amd64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~bookworm_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~trixie_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~trixie_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~jammy_amd64.deb pigsty 0.3.1 32.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~jammy_arm64.deb pigsty 0.3.1 32.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~noble_amd64.deb pigsty 0.3.1 30.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~noble_arm64.deb pigsty 0.3.1 30.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 vault_16 vault_16-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 26.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/vault_16-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 vault_16 vault_16-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 26.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/vault_16-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 vault_16 vault_16-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 25.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/vault_16-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 vault_16 vault_16-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 25.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/vault_16-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 vault_16 vault_16-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/vault_16-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 vault_16 vault_16-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/vault_16-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~bookworm_amd64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~bookworm_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~trixie_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~trixie_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~jammy_amd64.deb pigsty 0.3.1 32.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~jammy_arm64.deb pigsty 0.3.1 32.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~noble_amd64.deb pigsty 0.3.1 30.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~noble_arm64.deb pigsty 0.3.1 30.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 vault_15 vault_15-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 26.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/vault_15-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 vault_15 vault_15-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 26.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/vault_15-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 vault_15 vault_15-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 25.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/vault_15-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 vault_15 vault_15-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 25.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/vault_15-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 vault_15 vault_15-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 25.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/vault_15-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 vault_15 vault_15-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 25.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/vault_15-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~bookworm_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~bookworm_arm64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~trixie_amd64.deb pigsty 0.3.1 29.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~trixie_arm64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~jammy_amd64.deb pigsty 0.3.1 32.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~jammy_arm64.deb pigsty 0.3.1 32.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~noble_amd64.deb pigsty 0.3.1 31.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~noble_arm64.deb pigsty 0.3.1 31.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 vault_14 vault_14-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 26.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/vault_14-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 vault_14 vault_14-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 26.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/vault_14-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 vault_14 vault_14-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 25.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/vault_14-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 vault_14 vault_14-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 25.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/vault_14-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 vault_14 vault_14-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 25.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/vault_14-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 vault_14 vault_14-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 25.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/vault_14-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~bookworm_amd64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~bookworm_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~trixie_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~trixie_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~jammy_amd64.deb pigsty 0.3.1 32.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~jammy_arm64.deb pigsty 0.3.1 32.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~noble_amd64.deb pigsty 0.3.1 30.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~noble_arm64.deb pigsty 0.3.1 31.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_vault` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_vault         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_vault` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_vault;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_vault -v 18  # PG 18
pig ext install -y pg_vault -v 17  # PG 17
pig ext install -y pg_vault -v 16  # PG 16
pig ext install -y pg_vault -v 15  # PG 15
pig ext install -y pg_vault -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y vault_18       # PG 18
dnf install -y vault_17       # PG 17
dnf install -y vault_16       # PG 16
dnf install -y vault_15       # PG 15
dnf install -y vault_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-vault   # PG 18
apt install -y postgresql-17-vault   # PG 17
apt install -y postgresql-16-vault   # PG 16
apt install -y postgresql-15-vault   # PG 15
apt install -y postgresql-14-vault   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION supabase_vault CASCADE;  -- 依赖: pgsodium
```

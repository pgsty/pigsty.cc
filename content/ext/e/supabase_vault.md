---
title: "supabase_vault"
linkTitle: "supabase_vault"
description: "在 Vault 中存储加密凭证的扩展 (supabase)"
weight: 7050
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/supabase/vault">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">supabase/vault</div>
    <div class="ext-card__desc">https://github.com/supabase/vault</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/vault-0.3.1.tar.gz">
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
| 7050  | [**`supabase_vault`**](/ext/e/supabase_vault) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `vault` |
{.ext-table}

| **相关扩展** | [`column_encrypt`](/ext/e/column_encrypt) [`pg_tde`](/ext/e/pg_tde) [`pg_enigma`](/ext/e/pg_enigma) [`pgsodium`](/ext/e/pgsodium) [`pgcryptokey`](/ext/e/pgcryptokey) [`anon`](/ext/e/anon) [`pgcrypto`](/ext/e/pgcrypto) [`pgsmcrypto`](/ext/e/pgsmcrypto) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Upstream 0.3.2/pkg 0.3.1; restrict decrypted view access; keep plaintext out of logs; pgsodium no longer required.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_vault` | - |
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
| u26.x86_64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 | AVAIL PIGSTY 0.3.1 1 |
@ el8.x86_64 18 vault_18 vault_18-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 26.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vault_18-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 vault_18 vault_18-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 26.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vault_18-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 vault_18 vault_18-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 25.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vault_18-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 vault_18 vault_18-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vault_18-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 vault_18 vault_18-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vault_18-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 vault_18 vault_18-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vault_18-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~bookworm_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~bookworm_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~trixie_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~trixie_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~jammy_amd64.deb pigsty 0.3.1 31.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~jammy_arm64.deb pigsty 0.3.1 31.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~noble_amd64.deb pigsty 0.3.1 30.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~noble_arm64.deb pigsty 0.3.1 30.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~resolute_amd64.deb pigsty 0.3.1 30.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-vault postgresql-18-vault_0.3.1-1PIGSTY~resolute_arm64.deb pigsty 0.3.1 31.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vault/postgresql-18-vault_0.3.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 vault_17 vault_17-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 26.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vault_17-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 vault_17 vault_17-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 26.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vault_17-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 vault_17 vault_17-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 25.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vault_17-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 vault_17 vault_17-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vault_17-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 vault_17 vault_17-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vault_17-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 vault_17 vault_17-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vault_17-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~bookworm_amd64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~bookworm_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~trixie_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~trixie_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~jammy_amd64.deb pigsty 0.3.1 32.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~jammy_arm64.deb pigsty 0.3.1 32.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~noble_amd64.deb pigsty 0.3.1 30.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~noble_arm64.deb pigsty 0.3.1 30.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~resolute_amd64.deb pigsty 0.3.1 30.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-vault postgresql-17-vault_0.3.1-1PIGSTY~resolute_arm64.deb pigsty 0.3.1 31.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vault/postgresql-17-vault_0.3.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 vault_16 vault_16-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 26.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vault_16-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 vault_16 vault_16-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 26.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vault_16-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 vault_16 vault_16-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 25.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vault_16-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 vault_16 vault_16-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vault_16-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 vault_16 vault_16-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vault_16-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 vault_16 vault_16-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 25.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vault_16-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~bookworm_amd64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~bookworm_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~trixie_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~trixie_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~jammy_amd64.deb pigsty 0.3.1 32.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~jammy_arm64.deb pigsty 0.3.1 32.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~noble_amd64.deb pigsty 0.3.1 30.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~noble_arm64.deb pigsty 0.3.1 30.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~resolute_amd64.deb pigsty 0.3.1 30.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-vault postgresql-16-vault_0.3.1-1PIGSTY~resolute_arm64.deb pigsty 0.3.1 31.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vault/postgresql-16-vault_0.3.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 vault_15 vault_15-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vault_15-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 vault_15 vault_15-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 26.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vault_15-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 vault_15 vault_15-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 25.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vault_15-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 vault_15 vault_15-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 25.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vault_15-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 vault_15 vault_15-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vault_15-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 vault_15 vault_15-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vault_15-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~bookworm_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~bookworm_arm64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~trixie_amd64.deb pigsty 0.3.1 29.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~trixie_arm64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~jammy_amd64.deb pigsty 0.3.1 32.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~jammy_arm64.deb pigsty 0.3.1 32.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~noble_amd64.deb pigsty 0.3.1 31.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~noble_arm64.deb pigsty 0.3.1 31.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~resolute_amd64.deb pigsty 0.3.1 30.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-vault postgresql-15-vault_0.3.1-1PIGSTY~resolute_arm64.deb pigsty 0.3.1 31.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vault/postgresql-15-vault_0.3.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 vault_14 vault_14-0.3.1-1PIGSTY.el8.x86_64.rpm pigsty 0.3.1 26.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/vault_14-0.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 vault_14 vault_14-0.3.1-1PIGSTY.el8.aarch64.rpm pigsty 0.3.1 26.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/vault_14-0.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 vault_14 vault_14-0.3.1-1PIGSTY.el9.x86_64.rpm pigsty 0.3.1 25.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/vault_14-0.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 vault_14 vault_14-0.3.1-1PIGSTY.el9.aarch64.rpm pigsty 0.3.1 25.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/vault_14-0.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 vault_14 vault_14-0.3.1-1PIGSTY.el10.x86_64.rpm pigsty 0.3.1 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/vault_14-0.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 vault_14 vault_14-0.3.1-1PIGSTY.el10.aarch64.rpm pigsty 0.3.1 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/vault_14-0.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~bookworm_amd64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~bookworm_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~trixie_amd64.deb pigsty 0.3.1 29.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~trixie_arm64.deb pigsty 0.3.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~jammy_amd64.deb pigsty 0.3.1 32.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~jammy_arm64.deb pigsty 0.3.1 32.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~noble_amd64.deb pigsty 0.3.1 30.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~noble_arm64.deb pigsty 0.3.1 31.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~resolute_amd64.deb pigsty 0.3.1 30.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-vault postgresql-14-vault_0.3.1-1PIGSTY~resolute_arm64.deb pigsty 0.3.1 31.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/v/vault/postgresql-14-vault_0.3.1-1PIGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_vault;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_vault -v 18  # PG 18
pig ext install -y pg_vault -v 17  # PG 17
pig ext install -y pg_vault -v 16  # PG 16
pig ext install -y pg_vault -v 15  # PG 15
pig ext install -y pg_vault -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y vault_18       # PG 18
dnf install -y vault_17       # PG 17
dnf install -y vault_16       # PG 16
dnf install -y vault_15       # PG 15
dnf install -y vault_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-vault   # PG 18
apt install -y postgresql-17-vault   # PG 17
apt install -y postgresql-16-vault   # PG 16
apt install -y postgresql-15-vault   # PG 15
apt install -y postgresql-14-vault   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION supabase_vault;
```

## 用法

来源：

- [Official source](https://github.com/supabase/vault/blob/2f05b9be4dcac774a458d5a9e6acae794eb6b8c4/README.md)
- [Official source](https://github.com/supabase/vault/blob/2f05b9be4dcac774a458d5a9e6acae794eb6b8c4/supabase_vault.control.in)
- [Official source](https://github.com/supabase/vault/blob/2f05b9be4dcac774a458d5a9e6acae794eb6b8c4/Makefile)
- [Official source](https://github.com/supabase/vault/blob/2f05b9be4dcac774a458d5a9e6acae794eb6b8c4/sql/supabase_vault--0.3.1--0.3.2.sql)

`supabase_vault` 0.3.2 在 PostgreSQL 中保存加密秘密，并通过受权限控制的视图提供解密结果。固定模式为 `vault`，当前版本不再依赖 `pgsodium`。上游测试 PostgreSQL 14–19。由超级用户安装，无须预加载或重启。

### 基本流程

以下值均为演示字符串，不是真实凭据：

```sql
CREATE EXTENSION supabase_vault;
SELECT vault.create_secret('example-secret', 'api_token', 'Demo only');
SELECT name, decrypted_secret FROM vault.decrypted_secrets WHERE name = 'api_token';
SELECT vault.update_secret(id, 'replacement-example', 'api_token', 'Rotated demo')
FROM vault.secrets WHERE name = 'api_token';
```

`vault.create_secret` 返回秘密 UUID，可接受名称与描述；`vault.update_secret` 更新指定 UUID。`vault.secrets` 保存密文和元数据，`vault.decrypted_secrets` 向获准读取的角色提供明文。应明确限制辅助函数与解密视图的权限。

### 安全与升级

0.3.2 将秘密创建和更新辅助函数搜索路径中的 `pg_temp` 移到最后。安装对应文件后，在每个数据库执行 `ALTER EXTENSION supabase_vault UPDATE TO '0.3.2'`。

静态加密不能阻止有权查询的角色读取明文。秘密字面量和返回值可能进入数据库日志、客户端历史或应用遥测；应使用文档规定的秘密处理流程，并正确配置这些系统。保护加密密钥环境，验证备份恢复行为。不能因为存储表加密，就把解密视图的访问视为安全。

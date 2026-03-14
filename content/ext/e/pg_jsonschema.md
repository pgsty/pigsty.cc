---
title: "pg_jsonschema"
linkTitle: "pg_jsonschema"
description: "提供JSON Schema校验能力"
weight: 2760
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/supabase/pg_jsonschema">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">supabase/pg_jsonschema</div>
    <div class="ext-card__desc">https://github.com/supabase/pg_jsonschema</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_jsonschema-0.3.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_jsonschema-0.3.4.tar.gz</div>
    <div class="ext-card__desc">pg_jsonschema-0.3.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_jsonschema`**](/ext/e/pg_jsonschema) | `0.3.4` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2760  | [**`pg_jsonschema`**](/ext/e/pg_jsonschema) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_graphql`](/ext/e/pg_graphql) [`jsquery`](/ext/e/jsquery) [`plv8`](/ext/e/plv8) [`jsonb_plperl`](/ext/e/jsonb_plperl) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_summarize`](/ext/e/pg_summarize) [`pg_tiktoken`](/ext/e/pg_tiktoken) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manual update from 0.16.0 by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_jsonschema` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_jsonschema_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-jsonschema` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| el8.aarch64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| el9.x86_64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| el9.aarch64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| el10.x86_64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| el10.aarch64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| d12.x86_64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| d12.aarch64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| d13.x86_64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| d13.aarch64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| u22.x86_64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| u22.aarch64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| u24.x86_64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
| u24.aarch64 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 | AVAIL PIGSTY 0.3.4 1 |
@ el8.x86_64 18 pg_jsonschema_18 pg_jsonschema_18-0.3.4-1PIGSTY.el8.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_jsonschema_18-0.3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_jsonschema_18 pg_jsonschema_18-0.3.4-1PIGSTY.el8.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_jsonschema_18-0.3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_jsonschema_18 pg_jsonschema_18-0.3.4-1PIGSTY.el9.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_jsonschema_18-0.3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_jsonschema_18 pg_jsonschema_18-0.3.4-1PIGSTY.el9.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_jsonschema_18-0.3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_jsonschema_18 pg_jsonschema_18-0.3.4-1PIGSTY.el10.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_jsonschema_18-0.3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_jsonschema_18 pg_jsonschema_18-0.3.4-1PIGSTY.el10.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_jsonschema_18-0.3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-jsonschema postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~bookworm_amd64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jsonschema/postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-jsonschema postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~bookworm_arm64.deb pigsty 0.3.4 936.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jsonschema/postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-jsonschema postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~trixie_amd64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jsonschema/postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-jsonschema postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~trixie_arm64.deb pigsty 0.3.4 938.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jsonschema/postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-jsonschema postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~jammy_amd64.deb pigsty 0.3.4 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jsonschema/postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-jsonschema postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~jammy_arm64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jsonschema/postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-jsonschema postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~noble_amd64.deb pigsty 0.3.4 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jsonschema/postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-jsonschema postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~noble_arm64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jsonschema/postgresql-18-pg-jsonschema_0.3.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_jsonschema_17 pg_jsonschema_17-0.3.4-1PIGSTY.el8.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_jsonschema_17-0.3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_jsonschema_17 pg_jsonschema_17-0.3.4-1PIGSTY.el8.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_jsonschema_17-0.3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_jsonschema_17 pg_jsonschema_17-0.3.4-1PIGSTY.el9.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_jsonschema_17-0.3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_jsonschema_17 pg_jsonschema_17-0.3.4-1PIGSTY.el9.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_jsonschema_17-0.3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_jsonschema_17 pg_jsonschema_17-0.3.4-1PIGSTY.el10.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_jsonschema_17-0.3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_jsonschema_17 pg_jsonschema_17-0.3.4-1PIGSTY.el10.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_jsonschema_17-0.3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-jsonschema postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~bookworm_amd64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jsonschema/postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-jsonschema postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~bookworm_arm64.deb pigsty 0.3.4 937.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jsonschema/postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-jsonschema postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~trixie_amd64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jsonschema/postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-jsonschema postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~trixie_arm64.deb pigsty 0.3.4 938.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jsonschema/postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-jsonschema postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~jammy_amd64.deb pigsty 0.3.4 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jsonschema/postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-jsonschema postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~jammy_arm64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jsonschema/postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-jsonschema postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~noble_amd64.deb pigsty 0.3.4 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jsonschema/postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-jsonschema postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~noble_arm64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jsonschema/postgresql-17-pg-jsonschema_0.3.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_jsonschema_16 pg_jsonschema_16-0.3.4-1PIGSTY.el8.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_jsonschema_16-0.3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_jsonschema_16 pg_jsonschema_16-0.3.4-1PIGSTY.el8.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_jsonschema_16-0.3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_jsonschema_16 pg_jsonschema_16-0.3.4-1PIGSTY.el9.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_jsonschema_16-0.3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_jsonschema_16 pg_jsonschema_16-0.3.4-1PIGSTY.el9.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_jsonschema_16-0.3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_jsonschema_16 pg_jsonschema_16-0.3.4-1PIGSTY.el10.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_jsonschema_16-0.3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_jsonschema_16 pg_jsonschema_16-0.3.4-1PIGSTY.el10.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_jsonschema_16-0.3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-jsonschema postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~bookworm_amd64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jsonschema/postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-jsonschema postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~bookworm_arm64.deb pigsty 0.3.4 937.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jsonschema/postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-jsonschema postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~trixie_amd64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jsonschema/postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-jsonschema postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~trixie_arm64.deb pigsty 0.3.4 937.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jsonschema/postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-jsonschema postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~jammy_amd64.deb pigsty 0.3.4 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jsonschema/postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-jsonschema postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~jammy_arm64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jsonschema/postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-jsonschema postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~noble_amd64.deb pigsty 0.3.4 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jsonschema/postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-jsonschema postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~noble_arm64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jsonschema/postgresql-16-pg-jsonschema_0.3.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_jsonschema_15 pg_jsonschema_15-0.3.4-1PIGSTY.el8.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_jsonschema_15-0.3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_jsonschema_15 pg_jsonschema_15-0.3.4-1PIGSTY.el8.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_jsonschema_15-0.3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_jsonschema_15 pg_jsonschema_15-0.3.4-1PIGSTY.el9.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_jsonschema_15-0.3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_jsonschema_15 pg_jsonschema_15-0.3.4-1PIGSTY.el9.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_jsonschema_15-0.3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_jsonschema_15 pg_jsonschema_15-0.3.4-1PIGSTY.el10.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_jsonschema_15-0.3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_jsonschema_15 pg_jsonschema_15-0.3.4-1PIGSTY.el10.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_jsonschema_15-0.3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-jsonschema postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~bookworm_amd64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jsonschema/postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-jsonschema postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~bookworm_arm64.deb pigsty 0.3.4 936.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jsonschema/postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-jsonschema postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~trixie_amd64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jsonschema/postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-jsonschema postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~trixie_arm64.deb pigsty 0.3.4 937.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jsonschema/postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-jsonschema postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~jammy_amd64.deb pigsty 0.3.4 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jsonschema/postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-jsonschema postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~jammy_arm64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jsonschema/postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-jsonschema postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~noble_amd64.deb pigsty 0.3.4 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jsonschema/postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-jsonschema postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~noble_arm64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jsonschema/postgresql-15-pg-jsonschema_0.3.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_jsonschema_14 pg_jsonschema_14-0.3.4-1PIGSTY.el8.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_jsonschema_14-0.3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_jsonschema_14 pg_jsonschema_14-0.3.4-1PIGSTY.el8.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_jsonschema_14-0.3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_jsonschema_14 pg_jsonschema_14-0.3.4-1PIGSTY.el9.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_jsonschema_14-0.3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_jsonschema_14 pg_jsonschema_14-0.3.4-1PIGSTY.el9.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_jsonschema_14-0.3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_jsonschema_14 pg_jsonschema_14-0.3.4-1PIGSTY.el10.x86_64.rpm pigsty 0.3.4 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_jsonschema_14-0.3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_jsonschema_14 pg_jsonschema_14-0.3.4-1PIGSTY.el10.aarch64.rpm pigsty 0.3.4 1.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_jsonschema_14-0.3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-jsonschema postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~bookworm_amd64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jsonschema/postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-jsonschema postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~bookworm_arm64.deb pigsty 0.3.4 937.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-jsonschema/postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-jsonschema postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~trixie_amd64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jsonschema/postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-jsonschema postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~trixie_arm64.deb pigsty 0.3.4 938.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-jsonschema/postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-jsonschema postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~jammy_amd64.deb pigsty 0.3.4 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jsonschema/postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-jsonschema postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~jammy_arm64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-jsonschema/postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-jsonschema postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~noble_amd64.deb pigsty 0.3.4 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jsonschema/postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-jsonschema postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~noble_arm64.deb pigsty 0.3.4 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-jsonschema/postgresql-14-pg-jsonschema_0.3.4-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_jsonschema` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_jsonschema         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_jsonschema` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_jsonschema;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_jsonschema -v 18  # PG 18
pig ext install -y pg_jsonschema -v 17  # PG 17
pig ext install -y pg_jsonschema -v 16  # PG 16
pig ext install -y pg_jsonschema -v 15  # PG 15
pig ext install -y pg_jsonschema -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_jsonschema_18       # PG 18
dnf install -y pg_jsonschema_17       # PG 17
dnf install -y pg_jsonschema_16       # PG 16
dnf install -y pg_jsonschema_15       # PG 15
dnf install -y pg_jsonschema_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-jsonschema   # PG 18
apt install -y postgresql-17-pg-jsonschema   # PG 17
apt install -y postgresql-16-pg-jsonschema   # PG 16
apt install -y postgresql-15-pg-jsonschema   # PG 15
apt install -y postgresql-14-pg-jsonschema   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_jsonschema;
```




## 用法

> [pg_jsonschema: 提供 JSON Schema 校验的 PostgreSQL 扩展](https://github.com/supabase/pg_jsonschema)

`pg_jsonschema` 为 PostgreSQL 添加了 JSON Schema 校验函数，可通过检查约束对 JSON/JSONB 列实施模式验证。

### 函数

| 函数 | 描述 |
|------|------|
| `json_matches_schema(schema json, instance json)` | 验证 JSON 实例是否符合 schema，返回布尔值 |
| `jsonb_matches_schema(schema json, instance jsonb)` | 验证 JSONB 实例是否符合 schema，返回布尔值 |
| `jsonschema_is_valid(schema json)` | 检查 JSON schema 本身是否合法 |
| `jsonschema_validation_errors(schema json, instance json)` | 返回校验错误消息数组 |

### 表约束

使用检查约束强制文档结构：

```sql
CREATE TABLE customer (
    id serial PRIMARY KEY,
    metadata json,
    CHECK (
        json_matches_schema(
            '{
                "type": "object",
                "properties": {
                    "tags": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "maxLength": 16
                        }
                    }
                }
            }',
            metadata
        )
    )
);

-- 有效插入（通过检查约束）
INSERT INTO customer(metadata) VALUES ('{"tags": ["vip", "darkmode-ui"]}');

-- 无效插入（被检查约束拒绝）
INSERT INTO customer(metadata) VALUES ('{"tags": [1, 3]}');
-- ERROR: new row violates check constraint
```

### 错误检查

获取详细的校验错误信息：

```sql
SELECT jsonschema_validation_errors('{"maxLength": 4}', '"123456789"');
-- 返回: {"\"123456789\" is longer than 4 characters"}
```

### 模式校验

使用前验证 schema 是否格式正确：

```sql
SELECT jsonschema_is_valid('{
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "age":  {"type": "integer", "minimum": 0}
    },
    "required": ["name"]
}');
-- 返回: true
```

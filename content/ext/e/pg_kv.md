---
title: "pg_kv"
linkTitle: "pg_kv"
description: "共享内存键值缓存、令牌桶限流与有序集合。"
weight: 2895
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Murat7Ay/pg_kv">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Murat7Ay/pg_kv</div>
    <div class="ext-card__desc">https://github.com/Murat7Ay/pg_kv</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_kv-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_kv-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_kv-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_kv`**](/ext/e/pg_kv) | `0.1.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2895  | [**`pg_kv`**](/ext/e/pg_kv) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `kv` |
{.ext-table}


> Early release, not production ready. Preload/restart and superuser installation required. Cluster-wide keyspace: nontransactional, not durable or replicated. Grant kv schema usage deliberately; prefixing keys is not tenant access control. Capacity eviction can reset rate-limit allowance.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "15,16,17,18" >}} | `pg_kv` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "15,16,17,18" >}} | `pg_kv_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "15,16,17,18" >}} | `postgresql-$v-pg-kv` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_kv_18 pg_kv_18-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 242.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kv_18-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_kv_18 pg_kv_18-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 213.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kv_18-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_kv_18 pg_kv_18-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 246.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kv_18-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_kv_18 pg_kv_18-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 229.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kv_18-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_kv_18 pg_kv_18-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 246.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kv_18-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_kv_18 pg_kv_18-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 229.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kv_18-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-kv postgresql-18-pg-kv_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 209.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kv/postgresql-18-pg-kv_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-kv postgresql-18-pg-kv_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 181.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kv/postgresql-18-pg-kv_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-kv postgresql-18-pg-kv_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 209.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kv/postgresql-18-pg-kv_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-kv postgresql-18-pg-kv_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 181.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kv/postgresql-18-pg-kv_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-kv postgresql-18-pg-kv_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 224.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kv/postgresql-18-pg-kv_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-kv postgresql-18-pg-kv_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 208.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kv/postgresql-18-pg-kv_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-kv postgresql-18-pg-kv_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 223.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kv/postgresql-18-pg-kv_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-kv postgresql-18-pg-kv_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 206.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kv/postgresql-18-pg-kv_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-kv postgresql-18-pg-kv_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 223.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kv/postgresql-18-pg-kv_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-kv postgresql-18-pg-kv_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 206.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kv/postgresql-18-pg-kv_0.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_kv_17 pg_kv_17-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 242.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kv_17-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_kv_17 pg_kv_17-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 213.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kv_17-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_kv_17 pg_kv_17-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 246.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kv_17-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_kv_17 pg_kv_17-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 229.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kv_17-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_kv_17 pg_kv_17-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 246.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kv_17-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_kv_17 pg_kv_17-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 229.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kv_17-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-kv postgresql-17-pg-kv_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 209.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kv/postgresql-17-pg-kv_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-kv postgresql-17-pg-kv_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 181.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kv/postgresql-17-pg-kv_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-kv postgresql-17-pg-kv_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 209.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kv/postgresql-17-pg-kv_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-kv postgresql-17-pg-kv_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 181.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kv/postgresql-17-pg-kv_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-kv postgresql-17-pg-kv_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 224.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kv/postgresql-17-pg-kv_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-kv postgresql-17-pg-kv_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 208.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kv/postgresql-17-pg-kv_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-kv postgresql-17-pg-kv_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 223.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kv/postgresql-17-pg-kv_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-kv postgresql-17-pg-kv_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 206.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kv/postgresql-17-pg-kv_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-kv postgresql-17-pg-kv_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 223.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kv/postgresql-17-pg-kv_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-kv postgresql-17-pg-kv_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 206.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kv/postgresql-17-pg-kv_0.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_kv_16 pg_kv_16-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 242.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kv_16-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_kv_16 pg_kv_16-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 213.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kv_16-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_kv_16 pg_kv_16-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 246.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kv_16-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_kv_16 pg_kv_16-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 229.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kv_16-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_kv_16 pg_kv_16-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 246.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kv_16-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_kv_16 pg_kv_16-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 229.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kv_16-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-kv postgresql-16-pg-kv_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 209.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kv/postgresql-16-pg-kv_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-kv postgresql-16-pg-kv_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 181.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kv/postgresql-16-pg-kv_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-kv postgresql-16-pg-kv_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 209.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kv/postgresql-16-pg-kv_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-kv postgresql-16-pg-kv_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 181.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kv/postgresql-16-pg-kv_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-kv postgresql-16-pg-kv_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 224.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kv/postgresql-16-pg-kv_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-kv postgresql-16-pg-kv_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 208.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kv/postgresql-16-pg-kv_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-kv postgresql-16-pg-kv_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 223.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kv/postgresql-16-pg-kv_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-kv postgresql-16-pg-kv_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 206.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kv/postgresql-16-pg-kv_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-kv postgresql-16-pg-kv_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 223.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kv/postgresql-16-pg-kv_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-kv postgresql-16-pg-kv_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 205.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kv/postgresql-16-pg-kv_0.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_kv_15 pg_kv_15-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 242.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kv_15-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_kv_15 pg_kv_15-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 213.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kv_15-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_kv_15 pg_kv_15-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 246.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kv_15-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_kv_15 pg_kv_15-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 229.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kv_15-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_kv_15 pg_kv_15-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 246.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kv_15-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_kv_15 pg_kv_15-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 229.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kv_15-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-kv postgresql-15-pg-kv_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 209.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kv/postgresql-15-pg-kv_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-kv postgresql-15-pg-kv_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 181.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kv/postgresql-15-pg-kv_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-kv postgresql-15-pg-kv_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 209.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kv/postgresql-15-pg-kv_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-kv postgresql-15-pg-kv_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 181.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kv/postgresql-15-pg-kv_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-kv postgresql-15-pg-kv_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 224.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kv/postgresql-15-pg-kv_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-kv postgresql-15-pg-kv_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 208.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kv/postgresql-15-pg-kv_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-kv postgresql-15-pg-kv_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 223.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kv/postgresql-15-pg-kv_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-kv postgresql-15-pg-kv_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 206.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kv/postgresql-15-pg-kv_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-kv postgresql-15-pg-kv_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 223.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kv/postgresql-15-pg-kv_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-kv postgresql-15-pg-kv_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 205.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-kv/postgresql-15-pg-kv_0.1.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_kv` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_kv         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_kv` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_kv;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_kv -v 18  # PG 18
pig ext install -y pg_kv -v 17  # PG 17
pig ext install -y pg_kv -v 16  # PG 16
pig ext install -y pg_kv -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_kv_18       # PG 18
dnf install -y pg_kv_17       # PG 17
dnf install -y pg_kv_16       # PG 16
dnf install -y pg_kv_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-kv   # PG 18
apt install -y postgresql-17-pg-kv   # PG 17
apt install -y postgresql-16-pg-kv   # PG 16
apt install -y postgresql-15-pg-kv   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_kv';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_kv;
```

## 用法

来源：

- [官方资料](https://github.com/Murat7Ay/pg_kv/blob/bf45bbfd6f29782701a4e6c9bf9c672a0c02bc8f/README.md)
- [官方资料](https://github.com/Murat7Ay/pg_kv/blob/bf45bbfd6f29782701a4e6c9bf9c672a0c02bc8f/pg_kv.control)
- [官方资料](https://github.com/Murat7Ay/pg_kv/blob/bf45bbfd6f29782701a4e6c9bf9c672a0c02bc8f/Cargo.toml)
- [官方资料](https://github.com/Murat7Ay/pg_kv/blob/bf45bbfd6f29782701a4e6c9bf9c672a0c02bc8f/src/lib.rs)

`pg_kv` 0.1.0 提供共享内存缓存、计数器、令牌桶限流与有序集合。该早期版本面向 PostgreSQL 15–18，尚不适合生产使用。

### 核心流程

将库加入现有预加载列表并重启 PostgreSQL，然后以超级用户安装扩展：

```ini
shared_preload_libraries = 'pg_kv'
```

```sql
CREATE EXTENSION pg_kv;
SELECT kv.set('app:session:42', '{"user":1}', interval '30 minutes');
SELECT kv.get('app:session:42');
SELECT kv.ttl('app:session:42');
SELECT kv.incr('app:views:7');
SELECT kv.rate_limit('app:api:42', 100, interval '1 minute');
SELECT kv.zadd('app:leaderboard', 'player:9', 1520);
SELECT * FROM kv.zrange('app:leaderboard', 0, 9, reverse => true);
SELECT * FROM kv.stats();
```

没有预加载库时，安装会失败。仅向预期调用者授予 `kv` 模式的使用权限。集群中的所有数据库共享同一个键空间；前缀便于组织键，但不能提供租户隔离。

### 操作与容量

`kv.ttl` 返回毫秒数，-1 表示永不过期，-2 表示键不存在。`kv.expire` 修改有效期，`kv.del` 删除键，`kv.rate_limit_info` 返回是否放行及重试时间。有序集合还提供 `kv.zscore`、`kv.zrank`、`kv.zrevrank`、`kv.zincrby`、`kv.zcard` 和 `kv.zrem`。

需要重启的参数包括 `pg_kv.max_entries`、`pg_kv.max_key_bytes`、`pg_kv.max_value_bytes`、`pg_kv.shards`、`pg_kv.sweep_interval_ms`、`pg_kv.max_zset_members` 和 `pg_kv.max_member_bytes`。存储容量固定，超大值会报错，容量压力可能触发缓存淘汰。`kv.flush` 是管理操作，默认不向公共角色开放。

### 持久性边界

缓存修改不会随事务回滚撤销，但服务器重启或崩溃后会丢失。它不写入 WAL，也不复制；备库拥有独立缓存。适合可丢弃状态，不适合作为权威数据，或跨独立服务器协调的全局限流器。

---
title: "pg_when"
linkTitle: "pg_when"
description: "PostgreSQL 自然语言时间解析扩展"
weight: 1120
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/frectonz/pg-when">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">frectonz/pg-when</div>
    <div class="ext-card__desc">https://github.com/frectonz/pg-when</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_when-0.1.9.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_when-0.1.9.tar.gz</div>
    <div class="ext-card__desc">pg_when-0.1.9.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_when`**](/ext/e/pg_when) | `0.1.9` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1120  | [**`pg_when`**](/ext/e/pg_when) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.9` | {{< pgvers "18,17,16,15,14" >}} | `pg_when` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.9` | {{< pgvers "18,17,16,15,14" >}} | `pg_when_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.9` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-when` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
@ el8.x86_64 18 pg_when_18 pg_when_18-0.1.9-3PIGSTY.el8.x86_64.rpm pigsty 0.1.9 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_18-0.1.9-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_when_18 pg_when_18-0.1.9-3PIGSTY.el8.aarch64.rpm pigsty 0.1.9 981.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_18-0.1.9-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_when_18 pg_when_18-0.1.9-3PIGSTY.el9.x86_64.rpm pigsty 0.1.9 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_18-0.1.9-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_when_18 pg_when_18-0.1.9-3PIGSTY.el9.aarch64.rpm pigsty 0.1.9 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_18-0.1.9-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_when_18 pg_when_18-0.1.9-3PIGSTY.el10.x86_64.rpm pigsty 0.1.9 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_18-0.1.9-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_when_18 pg_when_18-0.1.9-3PIGSTY.el10.aarch64.rpm pigsty 0.1.9 1017.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_18-0.1.9-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-3PIGSTY~bookworm_amd64.deb pigsty 0.1.9 872.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-3PIGSTY~bookworm_arm64.deb pigsty 0.1.9 744.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-3PIGSTY~trixie_amd64.deb pigsty 0.1.9 873.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-3PIGSTY~trixie_arm64.deb pigsty 0.1.9 744.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-3PIGSTY~jammy_amd64.deb pigsty 0.1.9 964.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-3PIGSTY~jammy_arm64.deb pigsty 0.1.9 873.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-3PIGSTY~noble_amd64.deb pigsty 0.1.9 956.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-3PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-3PIGSTY~noble_arm64.deb pigsty 0.1.9 863.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-3PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-3PIGSTY~resolute_amd64.deb pigsty 0.1.9 952.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.9-3PIGSTY~resolute_arm64.deb pigsty 0.1.9 861.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-18-pg-when_0.1.9-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_when_17 pg_when_17-0.1.9-3PIGSTY.el8.x86_64.rpm pigsty 0.1.9 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_17-0.1.9-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_when_17 pg_when_17-0.1.9-3PIGSTY.el8.aarch64.rpm pigsty 0.1.9 978.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_17-0.1.9-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_when_17 pg_when_17-0.1.9-3PIGSTY.el9.x86_64.rpm pigsty 0.1.9 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_17-0.1.9-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_when_17 pg_when_17-0.1.9-3PIGSTY.el9.aarch64.rpm pigsty 0.1.9 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_17-0.1.9-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_when_17 pg_when_17-0.1.9-3PIGSTY.el10.x86_64.rpm pigsty 0.1.9 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_17-0.1.9-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_when_17 pg_when_17-0.1.9-3PIGSTY.el10.aarch64.rpm pigsty 0.1.9 1017.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_17-0.1.9-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-3PIGSTY~bookworm_amd64.deb pigsty 0.1.9 870.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-3PIGSTY~bookworm_arm64.deb pigsty 0.1.9 743.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-3PIGSTY~trixie_amd64.deb pigsty 0.1.9 870.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-3PIGSTY~trixie_arm64.deb pigsty 0.1.9 742.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-3PIGSTY~jammy_amd64.deb pigsty 0.1.9 963.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-3PIGSTY~jammy_arm64.deb pigsty 0.1.9 871.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-3PIGSTY~noble_amd64.deb pigsty 0.1.9 954.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-3PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-3PIGSTY~noble_arm64.deb pigsty 0.1.9 861.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-3PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-3PIGSTY~resolute_amd64.deb pigsty 0.1.9 950.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.9-3PIGSTY~resolute_arm64.deb pigsty 0.1.9 859.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-17-pg-when_0.1.9-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_when_16 pg_when_16-0.1.9-3PIGSTY.el8.x86_64.rpm pigsty 0.1.9 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_16-0.1.9-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_when_16 pg_when_16-0.1.9-3PIGSTY.el8.aarch64.rpm pigsty 0.1.9 976.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_16-0.1.9-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_when_16 pg_when_16-0.1.9-3PIGSTY.el9.x86_64.rpm pigsty 0.1.9 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_16-0.1.9-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_when_16 pg_when_16-0.1.9-3PIGSTY.el9.aarch64.rpm pigsty 0.1.9 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_16-0.1.9-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_when_16 pg_when_16-0.1.9-3PIGSTY.el10.x86_64.rpm pigsty 0.1.9 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_16-0.1.9-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_when_16 pg_when_16-0.1.9-3PIGSTY.el10.aarch64.rpm pigsty 0.1.9 1016.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_16-0.1.9-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-3PIGSTY~bookworm_amd64.deb pigsty 0.1.9 869.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-3PIGSTY~bookworm_arm64.deb pigsty 0.1.9 742.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-3PIGSTY~trixie_amd64.deb pigsty 0.1.9 869.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-3PIGSTY~trixie_arm64.deb pigsty 0.1.9 742.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-3PIGSTY~jammy_amd64.deb pigsty 0.1.9 962.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-3PIGSTY~jammy_arm64.deb pigsty 0.1.9 870.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-3PIGSTY~noble_amd64.deb pigsty 0.1.9 953.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-3PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-3PIGSTY~noble_arm64.deb pigsty 0.1.9 860.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-3PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-3PIGSTY~resolute_amd64.deb pigsty 0.1.9 948.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.9-3PIGSTY~resolute_arm64.deb pigsty 0.1.9 858.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-16-pg-when_0.1.9-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_when_15 pg_when_15-0.1.9-3PIGSTY.el8.x86_64.rpm pigsty 0.1.9 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_15-0.1.9-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_when_15 pg_when_15-0.1.9-3PIGSTY.el8.aarch64.rpm pigsty 0.1.9 968.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_15-0.1.9-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_when_15 pg_when_15-0.1.9-3PIGSTY.el9.x86_64.rpm pigsty 0.1.9 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_15-0.1.9-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_when_15 pg_when_15-0.1.9-3PIGSTY.el9.aarch64.rpm pigsty 0.1.9 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_15-0.1.9-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_when_15 pg_when_15-0.1.9-3PIGSTY.el10.x86_64.rpm pigsty 0.1.9 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_15-0.1.9-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_when_15 pg_when_15-0.1.9-3PIGSTY.el10.aarch64.rpm pigsty 0.1.9 1013.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_15-0.1.9-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-3PIGSTY~bookworm_amd64.deb pigsty 0.1.9 864.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-3PIGSTY~bookworm_arm64.deb pigsty 0.1.9 737.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-3PIGSTY~trixie_amd64.deb pigsty 0.1.9 864.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-3PIGSTY~trixie_arm64.deb pigsty 0.1.9 737.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-3PIGSTY~jammy_amd64.deb pigsty 0.1.9 954.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-3PIGSTY~jammy_arm64.deb pigsty 0.1.9 866.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-3PIGSTY~noble_amd64.deb pigsty 0.1.9 945.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-3PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-3PIGSTY~noble_arm64.deb pigsty 0.1.9 854.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-3PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-3PIGSTY~resolute_amd64.deb pigsty 0.1.9 941.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.9-3PIGSTY~resolute_arm64.deb pigsty 0.1.9 853.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-15-pg-when_0.1.9-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_when_14 pg_when_14-0.1.9-3PIGSTY.el8.x86_64.rpm pigsty 0.1.9 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_14-0.1.9-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_when_14 pg_when_14-0.1.9-3PIGSTY.el8.aarch64.rpm pigsty 0.1.9 965.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_14-0.1.9-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_when_14 pg_when_14-0.1.9-3PIGSTY.el9.x86_64.rpm pigsty 0.1.9 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_14-0.1.9-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_when_14 pg_when_14-0.1.9-3PIGSTY.el9.aarch64.rpm pigsty 0.1.9 1021.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_14-0.1.9-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_when_14 pg_when_14-0.1.9-3PIGSTY.el10.x86_64.rpm pigsty 0.1.9 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_14-0.1.9-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_when_14 pg_when_14-0.1.9-3PIGSTY.el10.aarch64.rpm pigsty 0.1.9 1011.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_14-0.1.9-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-3PIGSTY~bookworm_amd64.deb pigsty 0.1.9 862.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-3PIGSTY~bookworm_arm64.deb pigsty 0.1.9 735.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-3PIGSTY~trixie_amd64.deb pigsty 0.1.9 862.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-3PIGSTY~trixie_arm64.deb pigsty 0.1.9 736.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-3PIGSTY~jammy_amd64.deb pigsty 0.1.9 952.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-3PIGSTY~jammy_arm64.deb pigsty 0.1.9 863.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-3PIGSTY~noble_amd64.deb pigsty 0.1.9 943.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-3PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-3PIGSTY~noble_arm64.deb pigsty 0.1.9 854.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-3PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-3PIGSTY~resolute_amd64.deb pigsty 0.1.9 939.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.9-3PIGSTY~resolute_arm64.deb pigsty 0.1.9 850.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-14-pg-when_0.1.9-3PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_when` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_when         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_when` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_when;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_when -v 18  # PG 18
pig ext install -y pg_when -v 17  # PG 17
pig ext install -y pg_when -v 16  # PG 16
pig ext install -y pg_when -v 15  # PG 15
pig ext install -y pg_when -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_when_18       # PG 18
dnf install -y pg_when_17       # PG 17
dnf install -y pg_when_16       # PG 16
dnf install -y pg_when_15       # PG 15
dnf install -y pg_when_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-when   # PG 18
apt install -y postgresql-17-pg-when   # PG 17
apt install -y postgresql-16-pg-when   # PG 16
apt install -y postgresql-15-pg-when   # PG 15
apt install -y postgresql-14-pg-when   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_when;
```




## 用法

来源：[README](https://github.com/frectonz/pg-when/blob/main/README.md), [Cargo.toml version 0.1.9](https://github.com/frectonz/pg-when/blob/main/Cargo.toml), [META.json](https://github.com/frectonz/pg-when/blob/main/META.json)

`pg-when` 解析受限的自然语言时间表达式，并返回 PostgreSQL timestamp with time zone，或以不同精度返回 Unix epoch 值。

```sql
CREATE EXTENSION pg_when;

SELECT when_is('next friday at 8:00 pm in America/New_York');
SELECT seconds_at('next friday at 8:00 pm in America/New_York');
SELECT millis_at('next friday at 8:00 pm in America/New_York');
SELECT micros_at('next friday at 8:00 pm in America/New_York');
SELECT nanos_at('next friday at 8:00 pm in America/New_York');
```

### 支持的查询形状

解析器接受最多三个部分：

```sql
SELECT when_is('<date> at <time> in <timezone>');
SELECT when_is('<date>');
SELECT when_is('<time> in <timezone>');
SELECT when_is('<date> at <time>');
```

如果没有提供 timezone，上游说明默认是 UTC。

### 常见输入

- relative dates：`today`、`tomorrow`、`last month`、`this friday`、`5 days ago`、`in 2 years`
- exact dates：`YYYY-MM-DD`、`DD/MM/YYYY`、`January 10, 2004`、`10 Jan 2004`
- relative times：`noon`、`midnight`、`morning`、`evening`、`next hour`
- exact times：`8:30 pm`、`15:45`
- time zones：`America/New_York`、`Europe/London`、`UTC-08:00`、`UTC+05:30`

### 示例

```sql
SELECT when_is('5 days ago at this hour in Asia/Tokyo');
SELECT when_is('in 2 months at midnight in UTC-8');
SELECT when_is('December 31, 2026 at evening');
```

### 注意事项

- 扩展面向上面记录的 grammar，不是任意英文解析器。
- 上游仍列出 PostgreSQL 13 到 18 的源码/runtime 支持和 Docker image 示例，但本仓库 package matrix 仅为 PostgreSQL 14 到 18；不要假设 Pigsty 为 PostgreSQL 13 提供包。
- 上游 `Cargo.toml` 当前固定 `pgrx` 0.15.0；本仓库 package metadata 记录了手工升级到 `pgrx` 0.17.0。

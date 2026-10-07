---
title: "pg_money"
linkTitle: "pg_money"
description: "精确的带币种金额类型、算术与金额分摊"
weight: 3690
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/RustedBytes/pg-money">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">RustedBytes/pg-money</div>
    <div class="ext-card__desc">https://github.com/RustedBytes/pg-money</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_money-0.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_money-0.3.0.tar.gz</div>
    <div class="ext-card__desc">pg_money-0.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_money`**](/ext/e/pg_money) | `0.3.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3690  | [**`pg_money`**](/ext/e/pg_money) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`currency`](/ext/e/currency) [`financial`](/ext/e/financial) [`pg_rational`](/ext/e/pg_rational) [`pgmp`](/ext/e/pgmp) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Currency metadata is built in; the currency extension is related, not required.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_money` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_money_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-money` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
@ el8.x86_64 18 pg_money_18 pg_money_18-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 1017.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_money_18-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_money_18 pg_money_18-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 970.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_money_18-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_money_18 pg_money_18-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_money_18-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_money_18 pg_money_18-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_money_18-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_money_18 pg_money_18-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_money_18-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_money_18 pg_money_18-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 1018.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_money_18-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-money postgresql-18-pg-money_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 853.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-money/postgresql-18-pg-money_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-money postgresql-18-pg-money_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 790.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-money/postgresql-18-pg-money_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-money postgresql-18-pg-money_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 853.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-money/postgresql-18-pg-money_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-money postgresql-18-pg-money_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 791.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-money/postgresql-18-pg-money_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-money postgresql-18-pg-money_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 951.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-money/postgresql-18-pg-money_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-money postgresql-18-pg-money_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 921.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-money/postgresql-18-pg-money_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-money postgresql-18-pg-money_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 927.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-money/postgresql-18-pg-money_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-money postgresql-18-pg-money_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 914.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-money/postgresql-18-pg-money_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-money postgresql-18-pg-money_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 924.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-money/postgresql-18-pg-money_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-money postgresql-18-pg-money_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 910.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-money/postgresql-18-pg-money_0.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_money_17 pg_money_17-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 1014.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_money_17-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_money_17 pg_money_17-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 966.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_money_17-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_money_17 pg_money_17-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_money_17-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_money_17 pg_money_17-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_money_17-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_money_17 pg_money_17-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_money_17-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_money_17 pg_money_17-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 1017.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_money_17-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-money postgresql-17-pg-money_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 851.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-money/postgresql-17-pg-money_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-money postgresql-17-pg-money_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 788.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-money/postgresql-17-pg-money_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-money postgresql-17-pg-money_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 851.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-money/postgresql-17-pg-money_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-money postgresql-17-pg-money_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 789.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-money/postgresql-17-pg-money_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-money postgresql-17-pg-money_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 947.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-money/postgresql-17-pg-money_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-money postgresql-17-pg-money_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 920.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-money/postgresql-17-pg-money_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-money postgresql-17-pg-money_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 925.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-money/postgresql-17-pg-money_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-money postgresql-17-pg-money_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 912.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-money/postgresql-17-pg-money_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-money postgresql-17-pg-money_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 923.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-money/postgresql-17-pg-money_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-money postgresql-17-pg-money_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 908.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-money/postgresql-17-pg-money_0.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_money_16 pg_money_16-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 1013.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_money_16-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_money_16 pg_money_16-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 965.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_money_16-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_money_16 pg_money_16-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_money_16-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_money_16 pg_money_16-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_money_16-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_money_16 pg_money_16-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_money_16-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_money_16 pg_money_16-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 1019.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_money_16-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-money postgresql-16-pg-money_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 850.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-money/postgresql-16-pg-money_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-money postgresql-16-pg-money_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 787.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-money/postgresql-16-pg-money_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-money postgresql-16-pg-money_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 850.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-money/postgresql-16-pg-money_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-money postgresql-16-pg-money_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 788.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-money/postgresql-16-pg-money_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-money postgresql-16-pg-money_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 948.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-money/postgresql-16-pg-money_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-money postgresql-16-pg-money_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 920.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-money/postgresql-16-pg-money_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-money postgresql-16-pg-money_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 927.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-money/postgresql-16-pg-money_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-money postgresql-16-pg-money_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 913.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-money/postgresql-16-pg-money_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-money postgresql-16-pg-money_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 923.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-money/postgresql-16-pg-money_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-money postgresql-16-pg-money_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 908.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-money/postgresql-16-pg-money_0.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_money_15 pg_money_15-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 1005.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_money_15-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_money_15 pg_money_15-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 955.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_money_15-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_money_15 pg_money_15-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 1022.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_money_15-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_money_15 pg_money_15-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_money_15-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_money_15 pg_money_15-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 1023.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_money_15-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_money_15 pg_money_15-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 1015.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_money_15-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-money postgresql-15-pg-money_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 845.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-money/postgresql-15-pg-money_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-money postgresql-15-pg-money_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 782.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-money/postgresql-15-pg-money_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-money postgresql-15-pg-money_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 845.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-money/postgresql-15-pg-money_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-money postgresql-15-pg-money_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 783.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-money/postgresql-15-pg-money_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-money postgresql-15-pg-money_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 939.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-money/postgresql-15-pg-money_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-money postgresql-15-pg-money_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 917.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-money/postgresql-15-pg-money_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-money postgresql-15-pg-money_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 921.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-money/postgresql-15-pg-money_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-money postgresql-15-pg-money_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 911.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-money/postgresql-15-pg-money_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-money postgresql-15-pg-money_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 918.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-money/postgresql-15-pg-money_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-money postgresql-15-pg-money_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 908.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-money/postgresql-15-pg-money_0.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_money_14 pg_money_14-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 1003.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_money_14-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_money_14 pg_money_14-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 953.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_money_14-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_money_14 pg_money_14-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 1019.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_money_14-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_money_14 pg_money_14-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 1021.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_money_14-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_money_14 pg_money_14-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 1021.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_money_14-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_money_14 pg_money_14-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 1013.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_money_14-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-money postgresql-14-pg-money_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 845.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-money/postgresql-14-pg-money_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-money postgresql-14-pg-money_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 783.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-money/postgresql-14-pg-money_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-money postgresql-14-pg-money_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 845.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-money/postgresql-14-pg-money_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-money postgresql-14-pg-money_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 784.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-money/postgresql-14-pg-money_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-money postgresql-14-pg-money_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 938.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-money/postgresql-14-pg-money_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-money postgresql-14-pg-money_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 918.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-money/postgresql-14-pg-money_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-money postgresql-14-pg-money_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 921.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-money/postgresql-14-pg-money_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-money postgresql-14-pg-money_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 911.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-money/postgresql-14-pg-money_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-money postgresql-14-pg-money_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 919.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-money/postgresql-14-pg-money_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-money postgresql-14-pg-money_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 908.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-money/postgresql-14-pg-money_0.3.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_money` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_money         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_money` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_money;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_money -v 18  # PG 18
pig ext install -y pg_money -v 17  # PG 17
pig ext install -y pg_money -v 16  # PG 16
pig ext install -y pg_money -v 15  # PG 15
pig ext install -y pg_money -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_money_18       # PG 18
dnf install -y pg_money_17       # PG 17
dnf install -y pg_money_16       # PG 16
dnf install -y pg_money_15       # PG 15
dnf install -y pg_money_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-money   # PG 18
apt install -y postgresql-17-pg-money   # PG 17
apt install -y postgresql-16-pg-money   # PG 16
apt install -y postgresql-15-pg-money   # PG 15
apt install -y postgresql-14-pg-money   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_money;
```

## 用法

来源：

- [README](https://github.com/RustedBytes/pg-money/blob/4dfa040a59ef4d53eebd274749ada42ee184be29/README.md)
- [Control file / 控制文件](https://github.com/RustedBytes/pg-money/blob/4dfa040a59ef4d53eebd274749ada42ee184be29/pg_money.control)
- [Cargo.toml](https://github.com/RustedBytes/pg-money/blob/4dfa040a59ef4d53eebd274749ada42ee184be29/Cargo.toml)
- [src/lib.rs](https://github.com/RustedBytes/pg-money/blob/4dfa040a59ef4d53eebd274749ada42ee184be29/src/lib.rs)
- [docs/SECURITY.md](https://github.com/RustedBytes/pg-money/blob/4dfa040a59ef4d53eebd274749ada42ee184be29/docs/SECURITY.md)

`pg_money` 在 PostgreSQL 14–18 中提供精确的带币种金额、算术、舍入与分摊功能，其类型独立于受区域设置影响的内置金额类型。

### 核心工作流

```sql
CREATE EXTENSION pg_money;
CREATE TABLE invoices (id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                       total money_with_currency NOT NULL);
INSERT INTO invoices(total) VALUES ('USD 19.95'), (money_make(5.25, 'USD'));
SELECT sum(total), avg(total), money_format(sum(total)) FROM invoices;
SELECT money_split('USD 10.00', 3);
SELECT money_exchange('USD 100', 'EUR', 0.85);
```

### 对象与语义

`money_with_currency` 将币种与精确十进制金额一起存储，`money_minor` 处理最小货币单位金额。`money_make`、`money_from_minor` 和 `money_minor_make` 用于构造值。`money_round` 接受明确的舍入模式，`money_split` 在保持总额不变的前提下分配余数。

算术和聚合会拒绝不兼容币种，不会隐式兑换。汇率须显式提供，或由 `money_exchange_at` 从应用管理的表中读取；扩展不获取市场行情。应在应用边界检查舍入和金额范围。

### 运行

0.3.0 控制文件要求超级用户安装，并允许重定位，无需预加载。应将汇率表和修改权限与只读算术区分管理；SQL 输入本身不能证明汇率正确或及时。

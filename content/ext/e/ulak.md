---
title: "ulak"
linkTitle: "ulak"
description: "支持可靠异步投递的 PostgreSQL 事务型 Outbox 扩展"
weight: 2680
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/zeybek/ulak">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">zeybek/ulak</div>
    <div class="ext-card__desc">https://github.com/zeybek/ulak</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/ulak-0.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">ulak-0.3.0.tar.gz</div>
    <div class="ext-card__desc">ulak-0.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`ulak`**](/ext/e/ulak) | `0.3.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2680  | [**`ulak`**](/ext/e/ulak) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `ulak` |
{.ext-table .wide .expand}

| **相关扩展** | [`pgmq`](/ext/e/pgmq) [`pgmb`](/ext/e/pgmb) [`pg_durable`](/ext/e/pg_durable) [`redis`](/ext/e/redis) [`pgq`](/ext/e/pgq) [`pgmqtt`](/ext/e/pgmqtt) [`pg_task`](/ext/e/pg_task) [`tcn`](/ext/e/tcn) [`pg_background`](/ext/e/pg_background) [`fsm_core`](/ext/e/fsm_core) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> preload required; rm README from RPM/DEB


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "19,18,17,16,15" >}} | `ulak` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "19,18,17,16,15" >}} | `ulak_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-ulak` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
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
@ el9.x86_64 19 ulak_19 ulak_19-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 357.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ulak_19-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 19 ulak_19 ulak_19-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 353.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ulak_19-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 19 ulak_19 ulak_19-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 360.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ulak_19-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 19 ulak_19 ulak_19-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 355.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ulak_19-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 19 postgresql-19-ulak postgresql-19-ulak_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 306.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-19-ulak_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-ulak postgresql-19-ulak_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 299.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-19-ulak_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-ulak postgresql-19-ulak_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 337.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-19-ulak_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-ulak postgresql-19-ulak_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 329.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-19-ulak_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-ulak postgresql-19-ulak_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 321.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-19-ulak_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-ulak postgresql-19-ulak_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 316.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-19-ulak_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-ulak postgresql-19-ulak_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 344.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-19-ulak_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-ulak postgresql-19-ulak_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 340.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-19-ulak_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-ulak postgresql-19-ulak_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 342.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/u/ulak/postgresql-19-ulak_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-ulak postgresql-19-ulak_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 337.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/u/ulak/postgresql-19-ulak_0.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 ulak_18 ulak_18-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 330.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ulak_18-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 ulak_18 ulak_18-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 322.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ulak_18-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 ulak_18 ulak_18-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 358.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ulak_18-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 ulak_18 ulak_18-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 354.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ulak_18-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 ulak_18 ulak_18-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 361.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ulak_18-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 ulak_18 ulak_18-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 356.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ulak_18-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-ulak postgresql-18-ulak_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 307.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-18-ulak_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-ulak postgresql-18-ulak_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 300.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-18-ulak_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-ulak postgresql-18-ulak_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 337.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-18-ulak_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-ulak postgresql-18-ulak_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 329.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-18-ulak_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-ulak postgresql-18-ulak_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 322.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-18-ulak_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-ulak postgresql-18-ulak_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 317.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-18-ulak_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-ulak postgresql-18-ulak_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 345.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-18-ulak_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-ulak postgresql-18-ulak_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 340.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-18-ulak_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-ulak postgresql-18-ulak_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 343.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/u/ulak/postgresql-18-ulak_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-ulak postgresql-18-ulak_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 338.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/u/ulak/postgresql-18-ulak_0.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 ulak_17 ulak_17-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 330.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ulak_17-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 ulak_17 ulak_17-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 322.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ulak_17-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 ulak_17 ulak_17-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 358.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ulak_17-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 ulak_17 ulak_17-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 353.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ulak_17-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 ulak_17 ulak_17-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 361.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ulak_17-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 ulak_17 ulak_17-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 356.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ulak_17-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-ulak postgresql-17-ulak_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 307.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-17-ulak_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-ulak postgresql-17-ulak_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 299.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-17-ulak_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-ulak postgresql-17-ulak_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 337.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-17-ulak_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-ulak postgresql-17-ulak_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 329.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-17-ulak_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-ulak postgresql-17-ulak_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 348.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-17-ulak_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-ulak postgresql-17-ulak_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 344.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-17-ulak_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-ulak postgresql-17-ulak_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 345.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-17-ulak_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-ulak postgresql-17-ulak_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 340.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-17-ulak_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-ulak postgresql-17-ulak_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 343.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/u/ulak/postgresql-17-ulak_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-ulak postgresql-17-ulak_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 338.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/u/ulak/postgresql-17-ulak_0.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 ulak_16 ulak_16-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 330.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ulak_16-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 ulak_16 ulak_16-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 322.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ulak_16-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 ulak_16 ulak_16-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 358.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ulak_16-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 ulak_16 ulak_16-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 353.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ulak_16-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 ulak_16 ulak_16-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 361.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ulak_16-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 ulak_16 ulak_16-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 356.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ulak_16-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-ulak postgresql-16-ulak_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 307.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-16-ulak_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-ulak postgresql-16-ulak_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 299.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-16-ulak_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-ulak postgresql-16-ulak_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 337.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-16-ulak_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-ulak postgresql-16-ulak_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 329.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-16-ulak_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-ulak postgresql-16-ulak_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 348.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-16-ulak_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-ulak postgresql-16-ulak_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 344.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-16-ulak_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-ulak postgresql-16-ulak_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 345.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-16-ulak_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-ulak postgresql-16-ulak_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 340.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-16-ulak_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-ulak postgresql-16-ulak_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 343.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/u/ulak/postgresql-16-ulak_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-ulak postgresql-16-ulak_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 338.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/u/ulak/postgresql-16-ulak_0.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 ulak_15 ulak_15-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 332.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ulak_15-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 ulak_15 ulak_15-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 324.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ulak_15-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 ulak_15 ulak_15-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 366.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ulak_15-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 ulak_15 ulak_15-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 361.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ulak_15-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 ulak_15 ulak_15-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 368.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ulak_15-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 ulak_15 ulak_15-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 363.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ulak_15-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-ulak postgresql-15-ulak_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 310.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-15-ulak_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-ulak postgresql-15-ulak_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 302.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-15-ulak_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-ulak postgresql-15-ulak_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 342.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-15-ulak_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-ulak postgresql-15-ulak_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 332.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-15-ulak_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-ulak postgresql-15-ulak_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 354.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-15-ulak_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-ulak postgresql-15-ulak_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 352.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-15-ulak_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-ulak postgresql-15-ulak_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 352.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-15-ulak_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-ulak postgresql-15-ulak_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 349.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-15-ulak_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-ulak postgresql-15-ulak_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 350.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/u/ulak/postgresql-15-ulak_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-ulak postgresql-15-ulak_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 346.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/u/ulak/postgresql-15-ulak_0.3.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `ulak` 扩展的 RPM / DEB 包：

```bash
pig build pkg ulak         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `ulak` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install ulak;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y ulak -v 19  # PG 19
pig ext install -y ulak -v 18  # PG 18
pig ext install -y ulak -v 17  # PG 17
pig ext install -y ulak -v 16  # PG 16
pig ext install -y ulak -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y ulak_19       # PG 19
dnf install -y ulak_18       # PG 18
dnf install -y ulak_17       # PG 17
dnf install -y ulak_16       # PG 16
dnf install -y ulak_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-ulak   # PG 19
apt install -y postgresql-18-ulak   # PG 18
apt install -y postgresql-17-ulak   # PG 17
apt install -y postgresql-16-ulak   # PG 16
apt install -y postgresql-15-ulak   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'ulak';
```


**创建扩展**：

```sql
CREATE EXTENSION ulak;
```

## 用法

来源：

- [README](https://api.pgxn.org/src/ulak/ulak-0.3.0/README.md)
- [Control](https://api.pgxn.org/src/ulak/ulak-0.3.0/ulak.control)
- [Changelog](https://api.pgxn.org/src/ulak/ulak-0.3.0/CHANGELOG.md)
- [Install SQL](https://api.pgxn.org/src/ulak/ulak-0.3.0/sql/ulak--0.3.0.sql)
- [Upgrade SQL](https://api.pgxn.org/src/ulak/ulak-0.3.0/sql/ulak--0.2.0--0.3.0.sql)

`ulak` 实现事务型 Outbox：消息与应用数据在同一个事务中入队，再由后台工作进程投递。远端投递为至少一次，消费者必须容忍重复消息。

### 启用

支持 PostgreSQL 14–18。设置 `shared_preload_libraries` 与 `ulak.database` 后重启 PostgreSQL，再在该库创建扩展。内置 HTTP；Kafka、MQTT、Redis Streams、AMQP 和 NATS 需要编译相应可选适配器及其客户端库。

```ini
shared_preload_libraries = 'ulak'
ulak.database = 'appdb'
```

```sql
CREATE EXTENSION ulak;
```

### 入队与发布

由管理员创建端点，通过 `ulak_application` 授予应用访问权。`ulak_admin` 管理端点和运维操作；`ulak_monitor` 读取监控数据。使用 `ulak.endpoint_status` 查看端点状态，避免暴露端点凭据。事务回滚后消息不会保留。

```sql
SELECT ulak.create_endpoint('orders-http', 'http',
  '{"url":"https://example.com/webhook","method":"POST"}'::jsonb);
BEGIN;
SELECT ulak.send('orders-http', '{"event":"order.created","id":123}'::jsonb);
COMMIT;

SELECT ulak.send_batch('orders-http', ARRAY['{"id":1}'::jsonb, '{"id":2}'::jsonb]);
SELECT ulak.create_event_type('order.created', 'Order created');
SELECT ulak.subscribe('order.created', 'orders-http');
SELECT ulak.publish('order.created', '{"id":123}'::jsonb);
```

### 投递限制与重试

`ulak.send_with_options` 支持优先级、定时、幂等、过期和顺序控制。0.3.0 的所有入队接口均执行 `ulak.max_payload_size` 限制，超大载荷报 `54000`。批量接口按每行计入 `ulak.max_queue_size`，超限报 `53400`。卡在处理中的消息会消耗重试次数，耗尽后进入死信队列。工作进程使用 `synchronous_commit = local` 和 `lock_timeout = 10s`。

### 协议与升级变化

0.3.0 会重试 HTTP 408/425、Redis OOM/READONLY 以及无法路由的 mandatory AMQP 消息；Redis TLS 现会检查主机名。`ulak.mqtt_default_qos` 默认值为 1；多个工作进程会为配置的 MQTT 客户端 ID 附加进程编号。NATS 消息 ID 包含集群和数据库标识，AMQP 消息 ID 使用队列行 ID，应复核下游去重假设。安装匹配的库与 SQL，重启以加载工作进程库，再升级扩展。外部监听者需要设置 `ulak.wake_notify = on` 才会收到 `ulak_new_msg`；内置工作进程使用共享内存唤醒。

```sql
ALTER EXTENSION ulak UPDATE TO '0.3.0';
```

### 监控与恢复

按负载调整 `ulak.workers`、`ulak.poll_interval`、`ulak.batch_size`、重试和熔断配置。重新投递前应检查失败原因；重投和回放可能再次投递远端已经收到的消息。HTTP SSRF 限制默认生效，除非显式放宽。

```sql
SELECT * FROM ulak.health_check();
SELECT * FROM ulak.get_worker_status();
SELECT * FROM ulak.get_endpoint_health();
SELECT * FROM ulak.dlq_summary();
SELECT ulak.redrive_endpoint('orders-http');
```

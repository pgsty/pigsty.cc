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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/ulak-0.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">ulak-0.0.2.tar.gz</div>
    <div class="ext-card__desc">ulak-0.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`ulak`**](/ext/e/ulak) | `0.0.2` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2680  | [**`ulak`**](/ext/e/ulak) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `ulak` |
{.ext-table}


> preload required


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `ulak` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `ulak_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-ulak` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
@ el8.x86_64 18 ulak_18 ulak_18-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 108.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ulak_18-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 ulak_18 ulak_18-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 106.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ulak_18-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 ulak_18 ulak_18-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 104.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ulak_18-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 ulak_18 ulak_18-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 104.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ulak_18-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 ulak_18 ulak_18-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 104.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ulak_18-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 ulak_18 ulak_18-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 104.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ulak_18-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-ulak postgresql-18-ulak_0.0.2-2PIGSTY~bookworm_amd64.deb pigsty 0.0.2 273.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-18-ulak_0.0.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-ulak postgresql-18-ulak_0.0.2-2PIGSTY~bookworm_arm64.deb pigsty 0.0.2 266.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-18-ulak_0.0.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-ulak postgresql-18-ulak_0.0.2-2PIGSTY~trixie_amd64.deb pigsty 0.0.2 298.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-18-ulak_0.0.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-ulak postgresql-18-ulak_0.0.2-2PIGSTY~trixie_arm64.deb pigsty 0.0.2 291.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-18-ulak_0.0.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-ulak postgresql-18-ulak_0.0.2-2PIGSTY~jammy_amd64.deb pigsty 0.0.2 288.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-18-ulak_0.0.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-ulak postgresql-18-ulak_0.0.2-2PIGSTY~jammy_arm64.deb pigsty 0.0.2 284.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-18-ulak_0.0.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-ulak postgresql-18-ulak_0.0.2-2PIGSTY~noble_amd64.deb pigsty 0.0.2 305.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-18-ulak_0.0.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-ulak postgresql-18-ulak_0.0.2-2PIGSTY~noble_arm64.deb pigsty 0.0.2 302.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-18-ulak_0.0.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 ulak_17 ulak_17-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 108.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ulak_17-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 ulak_17 ulak_17-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 106.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ulak_17-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 ulak_17 ulak_17-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 105.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ulak_17-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 ulak_17 ulak_17-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 104.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ulak_17-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 ulak_17 ulak_17-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 105.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ulak_17-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 ulak_17 ulak_17-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 104.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ulak_17-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-ulak postgresql-17-ulak_0.0.2-2PIGSTY~bookworm_amd64.deb pigsty 0.0.2 273.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-17-ulak_0.0.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-ulak postgresql-17-ulak_0.0.2-2PIGSTY~bookworm_arm64.deb pigsty 0.0.2 266.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-17-ulak_0.0.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-ulak postgresql-17-ulak_0.0.2-2PIGSTY~trixie_amd64.deb pigsty 0.0.2 298.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-17-ulak_0.0.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-ulak postgresql-17-ulak_0.0.2-2PIGSTY~trixie_arm64.deb pigsty 0.0.2 291.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-17-ulak_0.0.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-ulak postgresql-17-ulak_0.0.2-2PIGSTY~jammy_amd64.deb pigsty 0.0.2 313.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-17-ulak_0.0.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-ulak postgresql-17-ulak_0.0.2-2PIGSTY~jammy_arm64.deb pigsty 0.0.2 309.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-17-ulak_0.0.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-ulak postgresql-17-ulak_0.0.2-2PIGSTY~noble_amd64.deb pigsty 0.0.2 306.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-17-ulak_0.0.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-ulak postgresql-17-ulak_0.0.2-2PIGSTY~noble_arm64.deb pigsty 0.0.2 302.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-17-ulak_0.0.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 ulak_16 ulak_16-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 108.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ulak_16-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 ulak_16 ulak_16-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 106.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ulak_16-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 ulak_16 ulak_16-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 105.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ulak_16-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 ulak_16 ulak_16-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 104.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ulak_16-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 ulak_16 ulak_16-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 105.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ulak_16-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 ulak_16 ulak_16-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 104.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ulak_16-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-ulak postgresql-16-ulak_0.0.2-2PIGSTY~bookworm_amd64.deb pigsty 0.0.2 273.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-16-ulak_0.0.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-ulak postgresql-16-ulak_0.0.2-2PIGSTY~bookworm_arm64.deb pigsty 0.0.2 267.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-16-ulak_0.0.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-ulak postgresql-16-ulak_0.0.2-2PIGSTY~trixie_amd64.deb pigsty 0.0.2 298.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-16-ulak_0.0.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-ulak postgresql-16-ulak_0.0.2-2PIGSTY~trixie_arm64.deb pigsty 0.0.2 291.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-16-ulak_0.0.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-ulak postgresql-16-ulak_0.0.2-2PIGSTY~jammy_amd64.deb pigsty 0.0.2 313.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-16-ulak_0.0.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-ulak postgresql-16-ulak_0.0.2-2PIGSTY~jammy_arm64.deb pigsty 0.0.2 309.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-16-ulak_0.0.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-ulak postgresql-16-ulak_0.0.2-2PIGSTY~noble_amd64.deb pigsty 0.0.2 306.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-16-ulak_0.0.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-ulak postgresql-16-ulak_0.0.2-2PIGSTY~noble_arm64.deb pigsty 0.0.2 302.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-16-ulak_0.0.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 ulak_15 ulak_15-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 112.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ulak_15-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 ulak_15 ulak_15-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 109.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ulak_15-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 ulak_15 ulak_15-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 115.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ulak_15-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 ulak_15 ulak_15-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 114.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ulak_15-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 ulak_15 ulak_15-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 115.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ulak_15-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 ulak_15 ulak_15-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 115.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ulak_15-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-ulak postgresql-15-ulak_0.0.2-2PIGSTY~bookworm_amd64.deb pigsty 0.0.2 277.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-15-ulak_0.0.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-ulak postgresql-15-ulak_0.0.2-2PIGSTY~bookworm_arm64.deb pigsty 0.0.2 270.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-15-ulak_0.0.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-ulak postgresql-15-ulak_0.0.2-2PIGSTY~trixie_amd64.deb pigsty 0.0.2 302.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-15-ulak_0.0.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-ulak postgresql-15-ulak_0.0.2-2PIGSTY~trixie_arm64.deb pigsty 0.0.2 294.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-15-ulak_0.0.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-ulak postgresql-15-ulak_0.0.2-2PIGSTY~jammy_amd64.deb pigsty 0.0.2 321.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-15-ulak_0.0.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-ulak postgresql-15-ulak_0.0.2-2PIGSTY~jammy_arm64.deb pigsty 0.0.2 317.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-15-ulak_0.0.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-ulak postgresql-15-ulak_0.0.2-2PIGSTY~noble_amd64.deb pigsty 0.0.2 314.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-15-ulak_0.0.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-ulak postgresql-15-ulak_0.0.2-2PIGSTY~noble_arm64.deb pigsty 0.0.2 310.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-15-ulak_0.0.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 ulak_14 ulak_14-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 112.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ulak_14-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 ulak_14 ulak_14-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 109.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ulak_14-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 ulak_14 ulak_14-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 114.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ulak_14-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 ulak_14 ulak_14-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 114.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ulak_14-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 ulak_14 ulak_14-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 115.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ulak_14-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 ulak_14 ulak_14-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 115.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ulak_14-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-ulak postgresql-14-ulak_0.0.2-2PIGSTY~bookworm_amd64.deb pigsty 0.0.2 277.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-14-ulak_0.0.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-ulak postgresql-14-ulak_0.0.2-2PIGSTY~bookworm_arm64.deb pigsty 0.0.2 270.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/ulak/postgresql-14-ulak_0.0.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-ulak postgresql-14-ulak_0.0.2-2PIGSTY~trixie_amd64.deb pigsty 0.0.2 301.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-14-ulak_0.0.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-ulak postgresql-14-ulak_0.0.2-2PIGSTY~trixie_arm64.deb pigsty 0.0.2 294.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/ulak/postgresql-14-ulak_0.0.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-ulak postgresql-14-ulak_0.0.2-2PIGSTY~jammy_amd64.deb pigsty 0.0.2 319.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-14-ulak_0.0.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-ulak postgresql-14-ulak_0.0.2-2PIGSTY~jammy_arm64.deb pigsty 0.0.2 316.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/ulak/postgresql-14-ulak_0.0.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-ulak postgresql-14-ulak_0.0.2-2PIGSTY~noble_amd64.deb pigsty 0.0.2 313.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-14-ulak_0.0.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-ulak postgresql-14-ulak_0.0.2-2PIGSTY~noble_arm64.deb pigsty 0.0.2 310.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/ulak/postgresql-14-ulak_0.0.2-2PIGSTY~noble_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install ulak;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y ulak -v 18  # PG 18
pig ext install -y ulak -v 17  # PG 17
pig ext install -y ulak -v 16  # PG 16
pig ext install -y ulak -v 15  # PG 15
pig ext install -y ulak -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y ulak_18       # PG 18
dnf install -y ulak_17       # PG 17
dnf install -y ulak_16       # PG 16
dnf install -y ulak_15       # PG 15
dnf install -y ulak_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-ulak   # PG 18
apt install -y postgresql-17-ulak   # PG 17
apt install -y postgresql-16-ulak   # PG 16
apt install -y postgresql-15-ulak   # PG 15
apt install -y postgresql-14-ulak   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'ulak';
```


**创建扩展**：

```sql
CREATE EXTENSION ulak;
```

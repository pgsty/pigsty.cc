---
title: "opencc"
linkTitle: "opencc"
description: "基于 OpenCC 的简繁中文、地区用语与日文新字体转换"
weight: 4480
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgsty/pg_opencc">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgsty/pg_opencc</div>
    <div class="ext-card__desc">https://github.com/pgsty/pg_opencc</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_opencc-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_opencc-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_opencc-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_opencc`**](/ext/e/opencc) | `0.1.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license apache20 and bsd2clause and mit" href="/ext/license#apache20andbsd2clauseandmit">Apache-2.0 AND BSD-2-Clause AND MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4480  | [**`opencc`**](/ext/e/opencc) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `opencc` |
{.ext-table .wide .expand}


> UTF8; bundled OpenCC 1.4.2.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_opencc` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_opencc_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-opencc` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
@ el8.x86_64 18 pg_opencc_18 pg_opencc_18-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 890.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_opencc_18-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_opencc_18 pg_opencc_18-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 850.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_opencc_18-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_opencc_18 pg_opencc_18-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 799.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_opencc_18-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_opencc_18 pg_opencc_18-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 782.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_opencc_18-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_opencc_18 pg_opencc_18-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 813.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_opencc_18-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_opencc_18 pg_opencc_18-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 790.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_opencc_18-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-opencc postgresql-18-opencc_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 784.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-opencc/postgresql-18-opencc_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-opencc postgresql-18-opencc_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 749.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-opencc/postgresql-18-opencc_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-opencc postgresql-18-opencc_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 802.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-opencc/postgresql-18-opencc_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-opencc postgresql-18-opencc_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 764.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-opencc/postgresql-18-opencc_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-opencc postgresql-18-opencc_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 774.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-opencc/postgresql-18-opencc_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-opencc postgresql-18-opencc_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 764.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-opencc/postgresql-18-opencc_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-opencc postgresql-18-opencc_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 764.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-opencc/postgresql-18-opencc_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-opencc postgresql-18-opencc_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 753.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-opencc/postgresql-18-opencc_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-opencc postgresql-18-opencc_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 770.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-opencc/postgresql-18-opencc_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-opencc postgresql-18-opencc_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 761.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-opencc/postgresql-18-opencc_0.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_opencc_17 pg_opencc_17-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 890.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_opencc_17-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_opencc_17 pg_opencc_17-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 850.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_opencc_17-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_opencc_17 pg_opencc_17-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 798.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_opencc_17-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_opencc_17 pg_opencc_17-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 782.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_opencc_17-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_opencc_17 pg_opencc_17-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 813.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_opencc_17-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_opencc_17 pg_opencc_17-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 790.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_opencc_17-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-opencc postgresql-17-opencc_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 784.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-opencc/postgresql-17-opencc_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-opencc postgresql-17-opencc_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 749.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-opencc/postgresql-17-opencc_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-opencc postgresql-17-opencc_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 802.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-opencc/postgresql-17-opencc_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-opencc postgresql-17-opencc_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 764.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-opencc/postgresql-17-opencc_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-opencc postgresql-17-opencc_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 778.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-opencc/postgresql-17-opencc_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-opencc postgresql-17-opencc_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 767.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-opencc/postgresql-17-opencc_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-opencc postgresql-17-opencc_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 763.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-opencc/postgresql-17-opencc_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-opencc postgresql-17-opencc_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 753.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-opencc/postgresql-17-opencc_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-opencc postgresql-17-opencc_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 769.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-opencc/postgresql-17-opencc_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-opencc postgresql-17-opencc_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 761.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-opencc/postgresql-17-opencc_0.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_opencc_16 pg_opencc_16-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 890.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_opencc_16-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_opencc_16 pg_opencc_16-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 850.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_opencc_16-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_opencc_16 pg_opencc_16-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 798.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_opencc_16-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_opencc_16 pg_opencc_16-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 782.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_opencc_16-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_opencc_16 pg_opencc_16-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 813.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_opencc_16-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_opencc_16 pg_opencc_16-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 790.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_opencc_16-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-opencc postgresql-16-opencc_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 784.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-opencc/postgresql-16-opencc_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-opencc postgresql-16-opencc_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 749.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-opencc/postgresql-16-opencc_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-opencc postgresql-16-opencc_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 802.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-opencc/postgresql-16-opencc_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-opencc postgresql-16-opencc_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 764.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-opencc/postgresql-16-opencc_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-opencc postgresql-16-opencc_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 778.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-opencc/postgresql-16-opencc_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-opencc postgresql-16-opencc_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 767.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-opencc/postgresql-16-opencc_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-opencc postgresql-16-opencc_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 763.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-opencc/postgresql-16-opencc_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-opencc postgresql-16-opencc_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 753.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-opencc/postgresql-16-opencc_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-opencc postgresql-16-opencc_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 769.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-opencc/postgresql-16-opencc_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-opencc postgresql-16-opencc_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 761.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-opencc/postgresql-16-opencc_0.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_opencc_15 pg_opencc_15-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 890.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_opencc_15-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_opencc_15 pg_opencc_15-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 850.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_opencc_15-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_opencc_15 pg_opencc_15-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 799.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_opencc_15-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_opencc_15 pg_opencc_15-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 782.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_opencc_15-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_opencc_15 pg_opencc_15-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 813.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_opencc_15-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_opencc_15 pg_opencc_15-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 790.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_opencc_15-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-opencc postgresql-15-opencc_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 784.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-opencc/postgresql-15-opencc_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-opencc postgresql-15-opencc_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 752.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-opencc/postgresql-15-opencc_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-opencc postgresql-15-opencc_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 802.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-opencc/postgresql-15-opencc_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-opencc postgresql-15-opencc_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 764.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-opencc/postgresql-15-opencc_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-opencc postgresql-15-opencc_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 778.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-opencc/postgresql-15-opencc_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-opencc postgresql-15-opencc_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 767.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-opencc/postgresql-15-opencc_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-opencc postgresql-15-opencc_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 763.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-opencc/postgresql-15-opencc_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-opencc postgresql-15-opencc_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 754.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-opencc/postgresql-15-opencc_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-opencc postgresql-15-opencc_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 769.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-opencc/postgresql-15-opencc_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-opencc postgresql-15-opencc_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 761.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-opencc/postgresql-15-opencc_0.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_opencc_14 pg_opencc_14-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 890.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_opencc_14-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_opencc_14 pg_opencc_14-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 850.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_opencc_14-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_opencc_14 pg_opencc_14-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 798.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_opencc_14-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_opencc_14 pg_opencc_14-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 782.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_opencc_14-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_opencc_14 pg_opencc_14-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 813.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_opencc_14-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_opencc_14 pg_opencc_14-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 790.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_opencc_14-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-opencc postgresql-14-opencc_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 784.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-opencc/postgresql-14-opencc_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-opencc postgresql-14-opencc_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 749.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-opencc/postgresql-14-opencc_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-opencc postgresql-14-opencc_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 802.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-opencc/postgresql-14-opencc_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-opencc postgresql-14-opencc_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 764.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-opencc/postgresql-14-opencc_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-opencc postgresql-14-opencc_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 778.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-opencc/postgresql-14-opencc_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-opencc postgresql-14-opencc_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 767.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-opencc/postgresql-14-opencc_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-opencc postgresql-14-opencc_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 763.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-opencc/postgresql-14-opencc_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-opencc postgresql-14-opencc_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 753.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-opencc/postgresql-14-opencc_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-opencc postgresql-14-opencc_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 769.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-opencc/postgresql-14-opencc_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-opencc postgresql-14-opencc_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 761.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-opencc/postgresql-14-opencc_0.1.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_opencc` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_opencc         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_opencc` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_opencc;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_opencc -v 18  # PG 18
pig ext install -y pg_opencc -v 17  # PG 17
pig ext install -y pg_opencc -v 16  # PG 16
pig ext install -y pg_opencc -v 15  # PG 15
pig ext install -y pg_opencc -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_opencc_18       # PG 18
dnf install -y pg_opencc_17       # PG 17
dnf install -y pg_opencc_16       # PG 16
dnf install -y pg_opencc_15       # PG 15
dnf install -y pg_opencc_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-opencc   # PG 18
apt install -y postgresql-17-opencc   # PG 17
apt install -y postgresql-16-opencc   # PG 16
apt install -y postgresql-15-opencc   # PG 15
apt install -y postgresql-14-opencc   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION opencc;
```

## 用法

来源：

- [pg_opencc 0.1.0 README](https://github.com/pgsty/pg_opencc/blob/v0.1.0/README.md)
- [扩展控制文件](https://github.com/pgsty/pg_opencc/blob/v0.1.0/opencc.control)
- [SQL API](https://github.com/pgsty/pg_opencc/blob/v0.1.0/sql/opencc--0.1.0.sql)
- [发布说明](https://github.com/pgsty/pg_opencc/releases/tag/v0.1.0)

`opencc` 由 `pg_opencc` 项目提供，用于简体中文、繁体中文、台湾与香港用语以及日文新字体之间的转换。0.1.0 版本将 OpenCC 1.4.2 及其词典嵌入共享库，运行时无需系统 OpenCC 或外部词典文件。

### 启用与转换

支持 PostgreSQL 14–18，要求数据库使用 `UTF8` 编码。这是受信任扩展，拥有数据库 `CREATE` 权限的用户即可安装。对象位于固定的 `opencc` 模式中，扩展不可迁移模式。基本使用无需预加载或重启服务器。

```sql
CREATE EXTENSION opencc;

SELECT opencc.s2twp('鼠标里面的硅二极管坏了，导致光标分辨率降低。');
SELECT opencc.convert('繁體中文', 't2s');
SELECT * FROM opencc.configs;
```

`opencc.convert(input, config)` 用于明确指定转换配置。`opencc.s2t()`、`opencc.t2s()` 等快捷函数与各个配置一一对应：

| 配置 | 转换用途 |
| --- | --- |
| `s2t`, `t2s` | 简体中文与繁体中文互转 |
| `s2tw`, `tw2s`, `s2hk`, `hk2s` | 台湾或香港字形转换 |
| `s2twp`, `tw2sp` | 台湾地区词汇转换 |
| `s2hkp`, `hk2sp` | 香港地区词汇转换，仍在完善中 |
| `t2tw`, `tw2t`, `t2hk`, `hk2t` | 繁体中文不同地区字形互转 |
| `t2jp`, `jp2t` | 日文旧字体与新字体互转，实验性功能 |

### 地区转换与结果检查

`opencc.localize(input, target, source)` 接受 `zh-Hans`、`zh-Hant`、`zh-CN`、`zh-TW`、`zh-HK` 和 `ja`。默认的 `source => 'auto'` 可以判断文字类别，但无法区分台湾和香港词汇。需要准确转换地区用语时，应明确指定来源地区。

```sql
SELECT opencc.localize('滑鼠裡面的矽二極體壞了', 'zh-CN', source => 'zh-TW');
SELECT opencc.detect('中文'), opencc.script_stats('中文');
SELECT * FROM opencc.routes;
SELECT * FROM opencc.ambiguities('大战文丑的时候，他的头发很干燥', 's2t');
SELECT opencc.candidates('发', 's2t');
SELECT * FROM opencc.explain('数据库连接池', 's2twp');
```

| 对象 | 用途 |
| --- | --- |
| `opencc.detect()` | 判断文字类别，包括混合文字与无法区分简繁的文字 |
| `opencc.script_stats()` | 统计汉字、简体字、繁体字和假名 |
| `opencc.configs`, `opencc.routes` | 检查配置与地区转换链 |
| `opencc.ambiguities()`, `opencc.candidates()` | 检查歧义片段和词典候选项 |
| `opencc.explain()` | 检查各阶段的转换结果 |
| `opencc.version()` | 返回扩展版本、引擎版本和词典摘要 |
| `opencc.dependents()` | 查找依赖对象并给出建议的重建语句 |

### 运行与升级

转换函数在同一扩展版本内具有 `IMMUTABLE STRICT PARALLEL SAFE` 属性，可用于表达式索引和存储生成列。PostgreSQL 18 的生成列若调用自定义转换函数，必须明确指定 `STORED`。

未来扩展版本更新词典时，转换结果可能变化。升级时应检查 `opencc.version()`，并审阅 `opencc.dependents()` 返回的语句。依赖检查无法发现封装在其他自定义函数中的调用。

```sql
SELECT * FROM opencc.version();
SELECT * FROM opencc.dependents();
```

每个后端按需初始化转换器。也可选择在服务器启动时预加载，使后端共享相关内存；修改 `shared_preload_libraries` 需要重启：

```ini
shared_preload_libraries = 'opencc'
opencc.preload = 's2t,t2s,s2twp,tw2sp'
```

若已有预加载列表，将 `opencc` 加入其中。`opencc.preload` 也接受 `all`。删除扩展后会保留空模式。

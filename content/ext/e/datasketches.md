---
title: "datasketches"
linkTitle: "datasketches"
description: "PostgreSQL 近似分析摘要数据结构与聚合函数"
weight: 4690
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/apache/datasketches-postgresql">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">apache/datasketches-postgresql</div>
    <div class="ext-card__desc">https://github.com/apache/datasketches-postgresql</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/apache-datasketches-postgresql-1.7.0-src.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">apache-datasketches-postgresql-1.7.0-src.tar.gz</div>
    <div class="ext-card__desc">apache-datasketches-postgresql-1.7.0-src.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`datasketches`**](/ext/e/datasketches) | `1.7.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4690  | [**`datasketches`**](/ext/e/datasketches) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


> Built against Apache DataSketches C++ core 5.0.0.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `datasketches` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `datasketches_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-datasketches` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
@ el8.x86_64 18 datasketches_18 datasketches_18-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 324.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/datasketches_18-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 datasketches_18 datasketches_18-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 314.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/datasketches_18-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 datasketches_18 datasketches_18-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 309.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/datasketches_18-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 datasketches_18 datasketches_18-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 315.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/datasketches_18-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 datasketches_18 datasketches_18-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 319.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/datasketches_18-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 datasketches_18 datasketches_18-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 319.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/datasketches_18-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-datasketches postgresql-18-datasketches_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 918.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/datasketches/postgresql-18-datasketches_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-datasketches postgresql-18-datasketches_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 920.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/datasketches/postgresql-18-datasketches_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-datasketches postgresql-18-datasketches_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 943.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/datasketches/postgresql-18-datasketches_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-datasketches postgresql-18-datasketches_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 944.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/datasketches/postgresql-18-datasketches_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-datasketches postgresql-18-datasketches_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 1017.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/datasketches/postgresql-18-datasketches_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-datasketches postgresql-18-datasketches_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 1020.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/datasketches/postgresql-18-datasketches_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-datasketches postgresql-18-datasketches_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 977.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/datasketches/postgresql-18-datasketches_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-datasketches postgresql-18-datasketches_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 991.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/datasketches/postgresql-18-datasketches_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 datasketches_17 datasketches_17-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 324.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/datasketches_17-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 datasketches_17 datasketches_17-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 314.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/datasketches_17-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 datasketches_17 datasketches_17-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 309.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/datasketches_17-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 datasketches_17 datasketches_17-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 315.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/datasketches_17-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 datasketches_17 datasketches_17-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 319.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/datasketches_17-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 datasketches_17 datasketches_17-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 319.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/datasketches_17-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-datasketches postgresql-17-datasketches_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 918.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/datasketches/postgresql-17-datasketches_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-datasketches postgresql-17-datasketches_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 919.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/datasketches/postgresql-17-datasketches_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-datasketches postgresql-17-datasketches_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 942.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/datasketches/postgresql-17-datasketches_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-datasketches postgresql-17-datasketches_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 943.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/datasketches/postgresql-17-datasketches_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-datasketches postgresql-17-datasketches_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/datasketches/postgresql-17-datasketches_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-datasketches postgresql-17-datasketches_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/datasketches/postgresql-17-datasketches_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-datasketches postgresql-17-datasketches_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 977.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/datasketches/postgresql-17-datasketches_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-datasketches postgresql-17-datasketches_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 991.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/datasketches/postgresql-17-datasketches_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 datasketches_16 datasketches_16-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 324.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/datasketches_16-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 datasketches_16 datasketches_16-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 314.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/datasketches_16-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 datasketches_16 datasketches_16-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 309.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/datasketches_16-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 datasketches_16 datasketches_16-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 315.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/datasketches_16-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 datasketches_16 datasketches_16-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 319.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/datasketches_16-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 datasketches_16 datasketches_16-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 319.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/datasketches_16-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-datasketches postgresql-16-datasketches_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 918.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/datasketches/postgresql-16-datasketches_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-datasketches postgresql-16-datasketches_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 919.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/datasketches/postgresql-16-datasketches_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-datasketches postgresql-16-datasketches_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 943.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/datasketches/postgresql-16-datasketches_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-datasketches postgresql-16-datasketches_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 943.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/datasketches/postgresql-16-datasketches_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-datasketches postgresql-16-datasketches_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/datasketches/postgresql-16-datasketches_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-datasketches postgresql-16-datasketches_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/datasketches/postgresql-16-datasketches_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-datasketches postgresql-16-datasketches_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 977.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/datasketches/postgresql-16-datasketches_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-datasketches postgresql-16-datasketches_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 991.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/datasketches/postgresql-16-datasketches_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 datasketches_15 datasketches_15-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 342.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/datasketches_15-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 datasketches_15 datasketches_15-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 332.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/datasketches_15-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 datasketches_15 datasketches_15-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 323.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/datasketches_15-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 datasketches_15 datasketches_15-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 329.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/datasketches_15-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 datasketches_15 datasketches_15-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 325.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/datasketches_15-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 datasketches_15 datasketches_15-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 325.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/datasketches_15-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-datasketches postgresql-15-datasketches_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 932.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/datasketches/postgresql-15-datasketches_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-datasketches postgresql-15-datasketches_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 933.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/datasketches/postgresql-15-datasketches_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-datasketches postgresql-15-datasketches_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 957.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/datasketches/postgresql-15-datasketches_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-datasketches postgresql-15-datasketches_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 957.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/datasketches/postgresql-15-datasketches_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-datasketches postgresql-15-datasketches_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/datasketches/postgresql-15-datasketches_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-datasketches postgresql-15-datasketches_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/datasketches/postgresql-15-datasketches_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-datasketches postgresql-15-datasketches_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 984.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/datasketches/postgresql-15-datasketches_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-datasketches postgresql-15-datasketches_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 998.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/datasketches/postgresql-15-datasketches_1.7.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 datasketches_14 datasketches_14-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 342.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/datasketches_14-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 datasketches_14 datasketches_14-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 332.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/datasketches_14-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 datasketches_14 datasketches_14-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 323.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/datasketches_14-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 datasketches_14 datasketches_14-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 328.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/datasketches_14-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 datasketches_14 datasketches_14-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 325.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/datasketches_14-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 datasketches_14 datasketches_14-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 325.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/datasketches_14-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-datasketches postgresql-14-datasketches_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 932.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/datasketches/postgresql-14-datasketches_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-datasketches postgresql-14-datasketches_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 933.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/datasketches/postgresql-14-datasketches_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-datasketches postgresql-14-datasketches_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 957.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/datasketches/postgresql-14-datasketches_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-datasketches postgresql-14-datasketches_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 957.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/datasketches/postgresql-14-datasketches_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-datasketches postgresql-14-datasketches_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/datasketches/postgresql-14-datasketches_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-datasketches postgresql-14-datasketches_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/datasketches/postgresql-14-datasketches_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-datasketches postgresql-14-datasketches_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 984.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/datasketches/postgresql-14-datasketches_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-datasketches postgresql-14-datasketches_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 998.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/datasketches/postgresql-14-datasketches_1.7.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `datasketches` 扩展的 RPM / DEB 包：

```bash
pig build pkg datasketches         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `datasketches` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install datasketches;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y datasketches -v 18  # PG 18
pig ext install -y datasketches -v 17  # PG 17
pig ext install -y datasketches -v 16  # PG 16
pig ext install -y datasketches -v 15  # PG 15
pig ext install -y datasketches -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y datasketches_18       # PG 18
dnf install -y datasketches_17       # PG 17
dnf install -y datasketches_16       # PG 16
dnf install -y datasketches_15       # PG 15
dnf install -y datasketches_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-datasketches   # PG 18
apt install -y postgresql-17-datasketches   # PG 17
apt install -y postgresql-16-datasketches   # PG 16
apt install -y postgresql-15-datasketches   # PG 15
apt install -y postgresql-14-datasketches   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION datasketches;
```

## 用法

> 来源: [README](https://raw.githubusercontent.com/apache/datasketches-postgresql/master/README.md), [Apache DataSketches 网站](https://datasketches.apache.org)
> PostgreSQL 扩展，用于近似分析草图与聚合。

```sql
CREATE EXTENSION datasketches;
```

该扩展支持 CPC、HLL、Theta、Array Of Doubles、KLL、Quantiles 以及 Frequent Strings 草图。

### 草图类型

- CPC 用于紧凑的去重计数。
- HLL 用于 HyperLogLog 风格的去重计数。
- Theta 用于去重计数，并支持 union、intersection 和 A-not-B 等集合运算。
- Array Of Doubles 用于每个键对应一个 double 数组的 tuple sketch。
- KLL 用于分位数、排名、PMF 和 CDF 估计。
- Quantiles 草图用于分布估计。
- Frequent strings 用于按计数或权重追踪最重项。

### 示例

```sql
SELECT cpc_sketch_to_string(cpc_sketch_build(1));
SELECT cpc_sketch_distinct(id) FROM random_ints_100m;
SELECT cpc_sketch_get_estimate(cpc_sketch_union(sketch)) FROM cpc_sketch_test;
SELECT theta_sketch_get_estimate(theta_sketch_union(sketch)) FROM theta_sketch_test;
SELECT theta_sketch_get_estimate(theta_sketch_intersection(sketch1, sketch2)) FROM theta_set_op_test;
SELECT hll_sketch_get_estimate(hll_sketch_union(sketch)) FROM hll_sketch_test;
SELECT hll_sketch_get_estimate(hll_sketch_union(hll_sketch_build(1), hll_sketch_build(2)));
SELECT kll_float_sketch_get_quantile(kll_float_sketch_merge(sketch), 0.5) FROM kll_float_sketch_test;
SELECT frequent_strings_sketch_result_no_false_negatives(frequent_strings_sketch_build(9, value), 1000000) FROM zipf_1p1_8k_100m;
```

### 核心操作

- 使用 `*_sketch_build(...)` 构建草图。
- 使用 `*_sketch_union(...)`、`*_sketch_merge(...)` 以及各类草图特定的集合运算辅助函数进行合并或聚合。
- 使用 `*_sketch_get_estimate(...)` 以及 `kll_float_sketch_get_quantile(...)` 等函数读取估计值。

### 说明

- README 说明该扩展面向 PostgreSQL 9.6 及以上版本，并依赖 Boost 1.75 和 DataSketches C++ core 5.0.0 或更高版本。
- 上游示例强调的是面向数据立方体的增量分析，而不是普通聚合的精确替代品。

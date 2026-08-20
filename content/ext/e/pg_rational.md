---
title: "pg_rational"
linkTitle: "pg_rational"
description: "使用BIGINT表示的有理数数据类型"
weight: 3720
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/begriffs/pg_rational">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">begriffs/pg_rational</div>
    <div class="ext-card__desc">https://github.com/begriffs/pg_rational</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_rational-0.0.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_rational-0.0.3.tar.gz</div>
    <div class="ext-card__desc">pg_rational-0.0.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_rational`**](/ext/e/pg_rational) | `0.0.3` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3720  | [**`pg_rational`**](/ext/e/pg_rational) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`unit`](/ext/e/unit) [`pgmp`](/ext/e/pgmp) [`numeral`](/ext/e/numeral) [`uint`](/ext/e/uint) [`uint128`](/ext/e/uint128) [`seg`](/ext/e/seg) [`cube`](/ext/e/cube) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_rational` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_rational_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-rational` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d12.x86_64 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 |
| d12.aarch64 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 |
| d13.x86_64 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 |
| d13.aarch64 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 |
| u22.x86_64 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 |
| u22.aarch64 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 |
| u24.x86_64 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 |
| u24.aarch64 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 |
| u26.x86_64 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 |
| u26.aarch64 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 | AVAIL PGDG 0.0.3 2 |
@ el8.x86_64 18 pg_rational_18 pg_rational_18-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 20.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rational_18-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_rational_18 pg_rational_18-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 20.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rational_18-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_rational_18 pg_rational_18-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 19.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rational_18-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_rational_18 pg_rational_18-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rational_18-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_rational_18 pg_rational_18-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rational_18-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_rational_18 pg_rational_18-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rational_18-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.3-1.pgdg12+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg12+1_amd64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.3-1.pgdg12+1_arm64.deb pgdg 0.0.3 24.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg12+1_arm64.deb pgdg 0.0.2 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.3-1.pgdg13+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg13+1_amd64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.3-1.pgdg13+1_arm64.deb pgdg 0.0.3 25.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg13+1_arm64.deb pgdg 0.0.2 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.3-1.pgdg22.04+1_amd64.deb pgdg 0.0.3 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg22.04+1_amd64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.3-1.pgdg22.04+1_arm64.deb pgdg 0.0.3 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg22.04+1_arm64.deb pgdg 0.0.2 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.3-1.pgdg24.04+1_amd64.deb pgdg 0.0.3 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg24.04+1_amd64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.3-1.pgdg24.04+1_arm64.deb pgdg 0.0.3 25.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg24.04+1_arm64.deb pgdg 0.0.2 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.3-1.pgdg26.04+1_amd64.deb pgdg 0.0.3 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg26.04+1_amd64.deb pgdg 0.0.2 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.3-1.pgdg26.04+1_arm64.deb pgdg 0.0.3 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg26.04+1_arm64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_rational_17 pg_rational_17-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 20.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rational_17-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_rational_17 pg_rational_17-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 20.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rational_17-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_rational_17 pg_rational_17-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 19.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rational_17-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_rational_17 pg_rational_17-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rational_17-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_rational_17 pg_rational_17-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rational_17-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_rational_17 pg_rational_17-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rational_17-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.3-1.pgdg12+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg12+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.3-1.pgdg12+1_arm64.deb pgdg 0.0.3 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg12+1_arm64.deb pgdg 0.0.2 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.3-1.pgdg13+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg13+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.3-1.pgdg13+1_arm64.deb pgdg 0.0.3 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg13+1_arm64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.3-1.pgdg22.04+1_amd64.deb pgdg 0.0.3 25.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg22.04+1_amd64.deb pgdg 0.0.2 25.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.3-1.pgdg22.04+1_arm64.deb pgdg 0.0.3 25.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg22.04+1_arm64.deb pgdg 0.0.2 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.3-1.pgdg24.04+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg24.04+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.3-1.pgdg24.04+1_arm64.deb pgdg 0.0.3 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg24.04+1_arm64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.3-1.pgdg26.04+1_amd64.deb pgdg 0.0.3 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg26.04+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.3-1.pgdg26.04+1_arm64.deb pgdg 0.0.3 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg26.04+1_arm64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_rational_16 pg_rational_16-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 20.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rational_16-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_rational_16 pg_rational_16-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 20.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rational_16-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_rational_16 pg_rational_16-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 19.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rational_16-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_rational_16 pg_rational_16-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rational_16-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_rational_16 pg_rational_16-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rational_16-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_rational_16 pg_rational_16-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rational_16-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.3-1.pgdg12+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg12+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.3-1.pgdg12+1_arm64.deb pgdg 0.0.3 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg12+1_arm64.deb pgdg 0.0.2 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.3-1.pgdg13+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg13+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.3-1.pgdg13+1_arm64.deb pgdg 0.0.3 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg13+1_arm64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.3-1.pgdg22.04+1_amd64.deb pgdg 0.0.3 25.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg22.04+1_amd64.deb pgdg 0.0.2 25.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.3-1.pgdg22.04+1_arm64.deb pgdg 0.0.3 25.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg22.04+1_arm64.deb pgdg 0.0.2 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.3-1.pgdg24.04+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg24.04+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.3-1.pgdg24.04+1_arm64.deb pgdg 0.0.3 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg24.04+1_arm64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.3-1.pgdg26.04+1_amd64.deb pgdg 0.0.3 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg26.04+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.3-1.pgdg26.04+1_arm64.deb pgdg 0.0.3 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg26.04+1_arm64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_rational_15 pg_rational_15-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 20.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rational_15-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_rational_15 pg_rational_15-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 20.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rational_15-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_rational_15 pg_rational_15-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 19.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rational_15-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_rational_15 pg_rational_15-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rational_15-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_rational_15 pg_rational_15-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rational_15-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_rational_15 pg_rational_15-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rational_15-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.3-1.pgdg12+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg12+1_amd64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.3-1.pgdg12+1_arm64.deb pgdg 0.0.3 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg12+1_arm64.deb pgdg 0.0.2 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.3-1.pgdg13+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg13+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.3-1.pgdg13+1_arm64.deb pgdg 0.0.3 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg13+1_arm64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.3-1.pgdg22.04+1_amd64.deb pgdg 0.0.3 25.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg22.04+1_amd64.deb pgdg 0.0.2 25.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.3-1.pgdg22.04+1_arm64.deb pgdg 0.0.3 25.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg22.04+1_arm64.deb pgdg 0.0.2 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.3-1.pgdg24.04+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg24.04+1_amd64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.3-1.pgdg24.04+1_arm64.deb pgdg 0.0.3 25.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg24.04+1_arm64.deb pgdg 0.0.2 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.3-1.pgdg26.04+1_amd64.deb pgdg 0.0.3 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg26.04+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.3-1.pgdg26.04+1_arm64.deb pgdg 0.0.3 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg26.04+1_arm64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_rational_14 pg_rational_14-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 20.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rational_14-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_rational_14 pg_rational_14-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 20.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rational_14-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_rational_14 pg_rational_14-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 19.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rational_14-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_rational_14 pg_rational_14-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rational_14-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_rational_14 pg_rational_14-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rational_14-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_rational_14 pg_rational_14-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 19.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rational_14-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.3-1.pgdg12+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg12+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.3-1.pgdg12+1_arm64.deb pgdg 0.0.3 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg12+1_arm64.deb pgdg 0.0.2 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.3-1.pgdg13+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg13+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.3-1.pgdg13+1_arm64.deb pgdg 0.0.3 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg13+1_arm64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.3-1.pgdg22.04+1_amd64.deb pgdg 0.0.3 25.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg22.04+1_amd64.deb pgdg 0.0.2 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.3-1.pgdg22.04+1_arm64.deb pgdg 0.0.3 25.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg22.04+1_arm64.deb pgdg 0.0.2 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.3-1.pgdg24.04+1_amd64.deb pgdg 0.0.3 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg24.04+1_amd64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.3-1.pgdg24.04+1_arm64.deb pgdg 0.0.3 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg24.04+1_arm64.deb pgdg 0.0.2 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.3-1.pgdg26.04+1_amd64.deb pgdg 0.0.3 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg26.04+1_amd64.deb pgdg 0.0.2 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.3-1.pgdg26.04+1_arm64.deb pgdg 0.0.3 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg26.04+1_arm64.deb pgdg 0.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_rational` 扩展的 RPM 包：

```bash
pig build pkg pg_rational         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_rational` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install pg_rational;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_rational -v 18  # PG 18
pig ext install -y pg_rational -v 17  # PG 17
pig ext install -y pg_rational -v 16  # PG 16
pig ext install -y pg_rational -v 15  # PG 15
pig ext install -y pg_rational -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_rational_18       # PG 18
dnf install -y pg_rational_17       # PG 17
dnf install -y pg_rational_16       # PG 16
dnf install -y pg_rational_15       # PG 15
dnf install -y pg_rational_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-rational   # PG 18
apt install -y postgresql-17-rational   # PG 17
apt install -y postgresql-16-rational   # PG 16
apt install -y postgresql-15-rational   # PG 15
apt install -y postgresql-14-rational   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_rational;
```

## 用法

来源：

- [pg_rational v0.0.3 README](https://github.com/begriffs/pg_rational/blob/v0.0.3/README.md)
- [pg_rational v0.0.3 控制文件](https://github.com/begriffs/pg_rational/blob/v0.0.3/pg_rational.control)
- [截至 v0.0.3 的变更](https://github.com/begriffs/pg_rational/compare/v0.0.2...v0.0.3)

`pg_rational` 通过固定的 64 位 PostgreSQL 类型提供精确分数运算。对于必须保持精确的数值，以及需要在现有位置之间插入新位置而无需重新编号整张表的用户自定义行排序，可以使用 `rational`。

### 精确运算

```sql
CREATE EXTENSION pg_rational;

SELECT 1::rational / 3 * 3 = 1;
SELECT '1/3'::rational + '2/7'::rational;
SELECT rational_simplify('36/12');
```

扩展会检测算术溢出，而不是静默回绕。`ratt` 是用于元组强制转换的辅助类型：

```sql
SELECT 1 + (i, i + 1)::ratt
FROM generate_series(1, 5) AS i;
```

整数值、浮点值与有理数之间可以相互转换。浮点数转换会寻找有理数近似值；将有理数转换成浮点数则会失去精确性。

### 稳定的用户自定义排序

```sql
CREATE SEQUENCE todos_seq AS integer;

CREATE TABLE todos (
  prio rational UNIQUE DEFAULT nextval('todos_seq')::integer,
  what text NOT NULL
);

INSERT INTO todos (what)
VALUES ('install extension'), ('read about it'), ('try it');

UPDATE todos
SET prio = rational_intermediate(1, 2)
WHERE what = 'try it';

SELECT * FROM todos ORDER BY prio;
```

请使用 `integer` 序列，并显式转换 `nextval()`。该扩展有意不提供从 `bigint` 到 `rational` 的隐式转换，因为其分子受 PostgreSQL `integer` 范围限制。

### 索引、聚合与注意事项

- `rational` 支持 btree 和 hash 操作符类，因此可用于排序索引和等值索引。
- 除算术及比较操作符外，该扩展还提供 `min(rational)`、`max(rational)` 和 `sum(rational)` 聚合函数。
- `rational_intermediate(lower, upper)` 沿 Stern-Brocot 树查找两个参数之间的分数。范围极窄时耗时会更长，而 v0.0.3 没有最大深度参数；在没有语句超时保护的情况下，不要向攻击者开放由其控制的病态边界。
- 只有当算术运算保持在该类型的分子和分母限制内时，值才是精确的。应处理溢出错误，不要静默回退为浮点数。
- 版本 0.0.3 主要是构建兼容性和文档发行版；面向用户的有理数运算接口保持稳定。

---
title: "pg_sphere"
linkTitle: "pg_sphere"
description: "球面对象函数、运算符与索引支持"
weight: 3650
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgrespro/pgsphere">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgrespro/pgsphere</div>
    <div class="ext-card__desc">https://github.com/postgrespro/pgsphere</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgsphere-1.5.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsphere-1.5.2.tar.gz</div>
    <div class="ext-card__desc">pgsphere-1.5.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgsphere`**](/ext/e/pg_sphere) | `1.5.2` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3650  | [**`pg_sphere`**](/ext/e/pg_sphere) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`q3c`](/ext/e/q3c) [`earthdistance`](/ext/e/earthdistance) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.5.2` | {{< pgvers "18,17,16,15,14" >}} | `pgsphere` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.2` | {{< pgvers "18,17,16,15,14" >}} | `pgsphere_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.5.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgsphere` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| el8.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| el9.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| el9.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| el10.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| el10.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| d12.x86_64 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 |
| d12.aarch64 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 |
| d13.x86_64 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 |
| d13.aarch64 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 |
| u22.x86_64 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 |
| u22.aarch64 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 |
| u24.x86_64 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 |
| u24.aarch64 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 |
| u26.x86_64 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 |
| u26.aarch64 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 | AVAIL PGDG 1.5.2 1 |
@ el8.x86_64 18 pgsphere_18 pgsphere_18-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 125.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsphere_18-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgsphere_18 pgsphere_18-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 122.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsphere_18-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgsphere_18 pgsphere_18-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 118.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsphere_18-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgsphere_18 pgsphere_18-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 116.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsphere_18-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgsphere_18 pgsphere_18-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 119.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsphere_18-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgsphere_18 pgsphere_18-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 119.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsphere_18-1.5.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgsphere postgresql-18-pgsphere_1.5.2-1.pgdg12+1_amd64.deb pgdg 1.5.2 405.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-18-pgsphere_1.5.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgsphere postgresql-18-pgsphere_1.5.2-1.pgdg12+1_arm64.deb pgdg 1.5.2 400.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-18-pgsphere_1.5.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgsphere postgresql-18-pgsphere_1.5.2-1.pgdg13+1_amd64.deb pgdg 1.5.2 405.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-18-pgsphere_1.5.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgsphere postgresql-18-pgsphere_1.5.2-1.pgdg13+1_arm64.deb pgdg 1.5.2 402.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-18-pgsphere_1.5.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgsphere postgresql-18-pgsphere_1.5.2-1.pgdg22.04+1_amd64.deb pgdg 1.5.2 413.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-18-pgsphere_1.5.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgsphere postgresql-18-pgsphere_1.5.2-1.pgdg22.04+1_arm64.deb pgdg 1.5.2 407.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-18-pgsphere_1.5.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgsphere postgresql-18-pgsphere_1.5.2-1.pgdg24.04+1_amd64.deb pgdg 1.5.2 406.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-18-pgsphere_1.5.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgsphere postgresql-18-pgsphere_1.5.2-1.pgdg24.04+1_arm64.deb pgdg 1.5.2 401.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-18-pgsphere_1.5.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pgsphere postgresql-18-pgsphere_1.5.2-1.pgdg26.04+1_amd64.deb pgdg 1.5.2 404.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-18-pgsphere_1.5.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pgsphere postgresql-18-pgsphere_1.5.2-1.pgdg26.04+1_arm64.deb pgdg 1.5.2 400.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-18-pgsphere_1.5.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pgsphere_17 pgsphere_17-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 125.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsphere_17-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgsphere_17 pgsphere_17-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 122.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsphere_17-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgsphere_17 pgsphere_17-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 118.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsphere_17-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgsphere_17 pgsphere_17-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 116.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsphere_17-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgsphere_17 pgsphere_17-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 119.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsphere_17-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgsphere_17 pgsphere_17-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 119.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsphere_17-1.5.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgsphere postgresql-17-pgsphere_1.5.2-1.pgdg12+1_amd64.deb pgdg 1.5.2 404.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-17-pgsphere_1.5.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgsphere postgresql-17-pgsphere_1.5.2-1.pgdg12+1_arm64.deb pgdg 1.5.2 400.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-17-pgsphere_1.5.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgsphere postgresql-17-pgsphere_1.5.2-1.pgdg13+1_amd64.deb pgdg 1.5.2 405.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-17-pgsphere_1.5.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgsphere postgresql-17-pgsphere_1.5.2-1.pgdg13+1_arm64.deb pgdg 1.5.2 402.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-17-pgsphere_1.5.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgsphere postgresql-17-pgsphere_1.5.2-1.pgdg22.04+1_amd64.deb pgdg 1.5.2 434.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-17-pgsphere_1.5.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgsphere postgresql-17-pgsphere_1.5.2-1.pgdg22.04+1_arm64.deb pgdg 1.5.2 427.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-17-pgsphere_1.5.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgsphere postgresql-17-pgsphere_1.5.2-1.pgdg24.04+1_amd64.deb pgdg 1.5.2 406.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-17-pgsphere_1.5.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgsphere postgresql-17-pgsphere_1.5.2-1.pgdg24.04+1_arm64.deb pgdg 1.5.2 401.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-17-pgsphere_1.5.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pgsphere postgresql-17-pgsphere_1.5.2-1.pgdg26.04+1_amd64.deb pgdg 1.5.2 404.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-17-pgsphere_1.5.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pgsphere postgresql-17-pgsphere_1.5.2-1.pgdg26.04+1_arm64.deb pgdg 1.5.2 400.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-17-pgsphere_1.5.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pgsphere_16 pgsphere_16-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 125.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsphere_16-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgsphere_16 pgsphere_16-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 122.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsphere_16-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgsphere_16 pgsphere_16-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 118.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsphere_16-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgsphere_16 pgsphere_16-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 116.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsphere_16-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgsphere_16 pgsphere_16-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 119.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsphere_16-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgsphere_16 pgsphere_16-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 119.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsphere_16-1.5.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgsphere postgresql-16-pgsphere_1.5.2-1.pgdg12+1_amd64.deb pgdg 1.5.2 404.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-16-pgsphere_1.5.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgsphere postgresql-16-pgsphere_1.5.2-1.pgdg12+1_arm64.deb pgdg 1.5.2 400.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-16-pgsphere_1.5.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgsphere postgresql-16-pgsphere_1.5.2-1.pgdg13+1_amd64.deb pgdg 1.5.2 405.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-16-pgsphere_1.5.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgsphere postgresql-16-pgsphere_1.5.2-1.pgdg13+1_arm64.deb pgdg 1.5.2 402.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-16-pgsphere_1.5.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgsphere postgresql-16-pgsphere_1.5.2-1.pgdg22.04+1_amd64.deb pgdg 1.5.2 433.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-16-pgsphere_1.5.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgsphere postgresql-16-pgsphere_1.5.2-1.pgdg22.04+1_arm64.deb pgdg 1.5.2 427.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-16-pgsphere_1.5.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgsphere postgresql-16-pgsphere_1.5.2-1.pgdg24.04+1_amd64.deb pgdg 1.5.2 406.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-16-pgsphere_1.5.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgsphere postgresql-16-pgsphere_1.5.2-1.pgdg24.04+1_arm64.deb pgdg 1.5.2 401.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-16-pgsphere_1.5.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pgsphere postgresql-16-pgsphere_1.5.2-1.pgdg26.04+1_amd64.deb pgdg 1.5.2 405.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-16-pgsphere_1.5.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pgsphere postgresql-16-pgsphere_1.5.2-1.pgdg26.04+1_arm64.deb pgdg 1.5.2 400.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-16-pgsphere_1.5.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pgsphere_15 pgsphere_15-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 127.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsphere_15-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgsphere_15 pgsphere_15-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 124.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsphere_15-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgsphere_15 pgsphere_15-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 114.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsphere_15-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgsphere_15 pgsphere_15-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 114.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsphere_15-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgsphere_15 pgsphere_15-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 114.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsphere_15-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgsphere_15 pgsphere_15-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 116.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsphere_15-1.5.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgsphere postgresql-15-pgsphere_1.5.2-1.pgdg12+1_amd64.deb pgdg 1.5.2 405.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-15-pgsphere_1.5.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgsphere postgresql-15-pgsphere_1.5.2-1.pgdg12+1_arm64.deb pgdg 1.5.2 401.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-15-pgsphere_1.5.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgsphere postgresql-15-pgsphere_1.5.2-1.pgdg13+1_amd64.deb pgdg 1.5.2 406.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-15-pgsphere_1.5.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgsphere postgresql-15-pgsphere_1.5.2-1.pgdg13+1_arm64.deb pgdg 1.5.2 403.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-15-pgsphere_1.5.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgsphere postgresql-15-pgsphere_1.5.2-1.pgdg22.04+1_amd64.deb pgdg 1.5.2 434.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-15-pgsphere_1.5.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgsphere postgresql-15-pgsphere_1.5.2-1.pgdg22.04+1_arm64.deb pgdg 1.5.2 428.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-15-pgsphere_1.5.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgsphere postgresql-15-pgsphere_1.5.2-1.pgdg24.04+1_amd64.deb pgdg 1.5.2 404.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-15-pgsphere_1.5.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgsphere postgresql-15-pgsphere_1.5.2-1.pgdg24.04+1_arm64.deb pgdg 1.5.2 402.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-15-pgsphere_1.5.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pgsphere postgresql-15-pgsphere_1.5.2-1.pgdg26.04+1_amd64.deb pgdg 1.5.2 402.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-15-pgsphere_1.5.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pgsphere postgresql-15-pgsphere_1.5.2-1.pgdg26.04+1_arm64.deb pgdg 1.5.2 399.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-15-pgsphere_1.5.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pgsphere_14 pgsphere_14-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 127.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsphere_14-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgsphere_14 pgsphere_14-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 124.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsphere_14-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgsphere_14 pgsphere_14-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 114.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsphere_14-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgsphere_14 pgsphere_14-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 114.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsphere_14-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgsphere_14 pgsphere_14-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 114.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsphere_14-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgsphere_14 pgsphere_14-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 116.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsphere_14-1.5.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgsphere postgresql-14-pgsphere_1.5.2-1.pgdg12+1_amd64.deb pgdg 1.5.2 406.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-14-pgsphere_1.5.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgsphere postgresql-14-pgsphere_1.5.2-1.pgdg12+1_arm64.deb pgdg 1.5.2 400.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-14-pgsphere_1.5.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgsphere postgresql-14-pgsphere_1.5.2-1.pgdg13+1_amd64.deb pgdg 1.5.2 406.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-14-pgsphere_1.5.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgsphere postgresql-14-pgsphere_1.5.2-1.pgdg13+1_arm64.deb pgdg 1.5.2 403.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-14-pgsphere_1.5.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgsphere postgresql-14-pgsphere_1.5.2-1.pgdg22.04+1_amd64.deb pgdg 1.5.2 433.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-14-pgsphere_1.5.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgsphere postgresql-14-pgsphere_1.5.2-1.pgdg22.04+1_arm64.deb pgdg 1.5.2 428.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-14-pgsphere_1.5.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgsphere postgresql-14-pgsphere_1.5.2-1.pgdg24.04+1_amd64.deb pgdg 1.5.2 405.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-14-pgsphere_1.5.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgsphere postgresql-14-pgsphere_1.5.2-1.pgdg24.04+1_arm64.deb pgdg 1.5.2 402.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-14-pgsphere_1.5.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-pgsphere postgresql-14-pgsphere_1.5.2-1.pgdg26.04+1_amd64.deb pgdg 1.5.2 402.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-14-pgsphere_1.5.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pgsphere postgresql-14-pgsphere_1.5.2-1.pgdg26.04+1_arm64.deb pgdg 1.5.2 399.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsphere/postgresql-14-pgsphere_1.5.2-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgsphere` 扩展的 RPM 包：

```bash
pig build pkg pgsphere         # 构建 RPM 包
```


## 安装

您可以直接安装 `pgsphere` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgsphere;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgsphere -v 18  # PG 18
pig ext install -y pgsphere -v 17  # PG 17
pig ext install -y pgsphere -v 16  # PG 16
pig ext install -y pgsphere -v 15  # PG 15
pig ext install -y pgsphere -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgsphere_18       # PG 18
dnf install -y pgsphere_17       # PG 17
dnf install -y pgsphere_16       # PG 16
dnf install -y pgsphere_15       # PG 15
dnf install -y pgsphere_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgsphere   # PG 18
apt install -y postgresql-17-pgsphere   # PG 17
apt install -y postgresql-16-pgsphere   # PG 16
apt install -y postgresql-15-pgsphere   # PG 15
apt install -y postgresql-14-pgsphere   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_sphere;
```



## 用法

> [pg_sphere: PostgreSQL 的球面几何数据类型与运算](https://github.com/postgrespro/pgsphere)

`pg_sphere` 扩展提供球面几何类型和运算，适用于天文学、地理空间以及其他涉及球面坐标的应用。

```sql
CREATE EXTENSION pg_sphere;
```

### 数据类型

- **球面点（`spoint`）**：球面上的位置（经度、纬度，单位弧度）
- **球面圆（`scircle`）**：由圆心和半径定义的圆形区域
- **球面线（`sline`）**：大圆弧段
- **球面椭圆（`sellipse`）**：球面上的椭圆区域
- **球面多边形（`spoly`）**：球面上的多顶点形状
- **球面路径（`spath`）**：连续点的序列
- **球面框（`sbox`）**：球面上的边界框

### 核心运算

- 成员测试（点在多边形内、点在圆内等）
- 球面对象之间的重叠检测
- 周长和面积计算
- 使用欧拉角进行坐标变换的对象旋转
- 球面对象之间的距离计算

### 索引支持

- **GiST 索引**：用于高效空间查询的 R 树实现
- **BRIN 索引**：用于大型数据集的块范围索引

### 输入/输出

该扩展处理天文学和地理空间应用中常用的各种坐标格式的输入输出，包括度、弧度以及 HMS/DMS 记法。

```sql
-- 创建球面点（赤经，赤纬）
SELECT spoint '(10.25d, 45.5d)';

-- 创建球面圆（圆心，半径）
SELECT scircle '<(10.25d, 45.5d), 1d>';

-- 检查包含关系
SELECT spoint '(10.25d, 45.5d)' @ scircle '<(10d, 45d), 2d>';
```

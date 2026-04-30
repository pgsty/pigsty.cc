---
title: "numeral"
linkTitle: "numeral"
description: "数值类型扩展"
weight: 3710
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/df7cb/postgresql-numeral">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">df7cb/postgresql-numeral</div>
    <div class="ext-card__desc">https://github.com/df7cb/postgresql-numeral</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/postgresql-numeral-1.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgresql-numeral-1.3.tar.gz</div>
    <div class="ext-card__desc">postgresql-numeral-1.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`numeral`**](/ext/e/numeral) | `1.3` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3710  | [**`numeral`**](/ext/e/numeral) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`currency`](/ext/e/currency) [`pgmp`](/ext/e/pgmp) [`unit`](/ext/e/unit) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.3` | {{< pgvers "18,17,16,15,14" >}} | `numeral` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3` | {{< pgvers "18,17,16,15,14" >}} | `numeral_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-numeral` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| el8.aarch64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| el9.x86_64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| el9.aarch64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| el10.x86_64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| el10.aarch64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| d12.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| d12.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| d13.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| d13.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| u22.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| u22.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| u24.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| u24.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| u26.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| u26.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
@ el8.x86_64 18 numeral_18 numeral_18-1.3-1PIGSTY.el8.x86_64.rpm pigsty 1.3 33.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/numeral_18-1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 numeral_18 numeral_18-1.3-1PIGSTY.el8.aarch64.rpm pigsty 1.3 32.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/numeral_18-1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 numeral_18 numeral_18-1.3-1PIGSTY.el9.x86_64.rpm pigsty 1.3 31.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/numeral_18-1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 numeral_18 numeral_18-1.3-1PIGSTY.el9.aarch64.rpm pigsty 1.3 32.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/numeral_18-1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 numeral_18 numeral_18-1.3-1PIGSTY.el10.x86_64.rpm pigsty 1.3 32.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/numeral_18-1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 numeral_18 numeral_18-1.3-1PIGSTY.el10.aarch64.rpm pigsty 1.3 32.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/numeral_18-1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-numeral postgresql-18-numeral_1.3-8.pgdg12+1_amd64.deb pgdg 1.3 74.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-18-numeral_1.3-8.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-numeral postgresql-18-numeral_1.3-8.pgdg12+1_arm64.deb pgdg 1.3 72.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-18-numeral_1.3-8.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-numeral postgresql-18-numeral_1.3-8.pgdg13+1_amd64.deb pgdg 1.3 75.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-18-numeral_1.3-8.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-numeral postgresql-18-numeral_1.3-8.pgdg13+1_arm64.deb pgdg 1.3 73.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-18-numeral_1.3-8.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-numeral postgresql-18-numeral_1.3-8.pgdg22.04+1_amd64.deb pgdg 1.3 74.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-18-numeral_1.3-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-numeral postgresql-18-numeral_1.3-8.pgdg22.04+1_arm64.deb pgdg 1.3 74.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-18-numeral_1.3-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-numeral postgresql-18-numeral_1.3-8.pgdg24.04+1_amd64.deb pgdg 1.3 73.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-18-numeral_1.3-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-numeral postgresql-18-numeral_1.3-8.pgdg24.04+1_arm64.deb pgdg 1.3 73.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-18-numeral_1.3-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-numeral postgresql-18-numeral_1.3-8.pgdg26.04+1_amd64.deb pgdg 1.3 73.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-18-numeral_1.3-8.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-numeral postgresql-18-numeral_1.3-8.pgdg26.04+1_arm64.deb pgdg 1.3 72.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-18-numeral_1.3-8.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 numeral_17 numeral_17-1.3-1PIGSTY.el8.x86_64.rpm pigsty 1.3 33.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/numeral_17-1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 numeral_17 numeral_17-1.3-1PIGSTY.el8.aarch64.rpm pigsty 1.3 32.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/numeral_17-1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 numeral_17 numeral_17-1.3-1PIGSTY.el9.x86_64.rpm pigsty 1.3 31.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/numeral_17-1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 numeral_17 numeral_17-1.3-1PIGSTY.el9.aarch64.rpm pigsty 1.3 32.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/numeral_17-1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 numeral_17 numeral_17-1.3-1PIGSTY.el10.x86_64.rpm pigsty 1.3 32.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/numeral_17-1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 numeral_17 numeral_17-1.3-1PIGSTY.el10.aarch64.rpm pigsty 1.3 32.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/numeral_17-1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-numeral postgresql-17-numeral_1.3-8.pgdg12+1_amd64.deb pgdg 1.3 74.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-17-numeral_1.3-8.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-numeral postgresql-17-numeral_1.3-8.pgdg12+1_arm64.deb pgdg 1.3 72.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-17-numeral_1.3-8.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-numeral postgresql-17-numeral_1.3-8.pgdg13+1_amd64.deb pgdg 1.3 75.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-17-numeral_1.3-8.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-numeral postgresql-17-numeral_1.3-8.pgdg13+1_arm64.deb pgdg 1.3 73.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-17-numeral_1.3-8.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-numeral postgresql-17-numeral_1.3-8.pgdg22.04+1_amd64.deb pgdg 1.3 77.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-17-numeral_1.3-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-numeral postgresql-17-numeral_1.3-8.pgdg22.04+1_arm64.deb pgdg 1.3 77.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-17-numeral_1.3-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-numeral postgresql-17-numeral_1.3-8.pgdg24.04+1_amd64.deb pgdg 1.3 73.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-17-numeral_1.3-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-numeral postgresql-17-numeral_1.3-8.pgdg24.04+1_arm64.deb pgdg 1.3 73.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-17-numeral_1.3-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-numeral postgresql-17-numeral_1.3-8.pgdg26.04+1_amd64.deb pgdg 1.3 73.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-17-numeral_1.3-8.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-numeral postgresql-17-numeral_1.3-8.pgdg26.04+1_arm64.deb pgdg 1.3 72.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-17-numeral_1.3-8.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 numeral_16 numeral_16-1.3-1PIGSTY.el8.x86_64.rpm pigsty 1.3 33.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/numeral_16-1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 numeral_16 numeral_16-1.3-1PIGSTY.el8.aarch64.rpm pigsty 1.3 32.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/numeral_16-1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 numeral_16 numeral_16-1.3-1PIGSTY.el9.x86_64.rpm pigsty 1.3 31.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/numeral_16-1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 numeral_16 numeral_16-1.3-1PIGSTY.el9.aarch64.rpm pigsty 1.3 32.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/numeral_16-1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 numeral_16 numeral_16-1.3-1PIGSTY.el10.x86_64.rpm pigsty 1.3 32.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/numeral_16-1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 numeral_16 numeral_16-1.3-1PIGSTY.el10.aarch64.rpm pigsty 1.3 32.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/numeral_16-1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-numeral postgresql-16-numeral_1.3-8.pgdg12+1_amd64.deb pgdg 1.3 74.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-16-numeral_1.3-8.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-numeral postgresql-16-numeral_1.3-8.pgdg12+1_arm64.deb pgdg 1.3 72.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-16-numeral_1.3-8.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-numeral postgresql-16-numeral_1.3-8.pgdg13+1_amd64.deb pgdg 1.3 75.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-16-numeral_1.3-8.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-numeral postgresql-16-numeral_1.3-8.pgdg13+1_arm64.deb pgdg 1.3 73.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-16-numeral_1.3-8.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-numeral postgresql-16-numeral_1.3-8.pgdg22.04+1_amd64.deb pgdg 1.3 77.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-16-numeral_1.3-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-numeral postgresql-16-numeral_1.3-8.pgdg22.04+1_arm64.deb pgdg 1.3 77.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-16-numeral_1.3-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-numeral postgresql-16-numeral_1.3-8.pgdg24.04+1_amd64.deb pgdg 1.3 73.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-16-numeral_1.3-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-numeral postgresql-16-numeral_1.3-8.pgdg24.04+1_arm64.deb pgdg 1.3 73.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-16-numeral_1.3-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-numeral postgresql-16-numeral_1.3-8.pgdg26.04+1_amd64.deb pgdg 1.3 73.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-16-numeral_1.3-8.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-numeral postgresql-16-numeral_1.3-8.pgdg26.04+1_arm64.deb pgdg 1.3 72.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-16-numeral_1.3-8.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 numeral_15 numeral_15-1.3-1PIGSTY.el8.x86_64.rpm pigsty 1.3 35.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/numeral_15-1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 numeral_15 numeral_15-1.3-1PIGSTY.el8.aarch64.rpm pigsty 1.3 34.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/numeral_15-1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 numeral_15 numeral_15-1.3-1PIGSTY.el9.x86_64.rpm pigsty 1.3 35.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/numeral_15-1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 numeral_15 numeral_15-1.3-1PIGSTY.el9.aarch64.rpm pigsty 1.3 34.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/numeral_15-1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 numeral_15 numeral_15-1.3-1PIGSTY.el10.x86_64.rpm pigsty 1.3 35.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/numeral_15-1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 numeral_15 numeral_15-1.3-1PIGSTY.el10.aarch64.rpm pigsty 1.3 35.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/numeral_15-1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-numeral postgresql-15-numeral_1.3-8.pgdg12+1_amd64.deb pgdg 1.3 76.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-15-numeral_1.3-8.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-numeral postgresql-15-numeral_1.3-8.pgdg12+1_arm64.deb pgdg 1.3 74.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-15-numeral_1.3-8.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-numeral postgresql-15-numeral_1.3-8.pgdg13+1_amd64.deb pgdg 1.3 77.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-15-numeral_1.3-8.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-numeral postgresql-15-numeral_1.3-8.pgdg13+1_arm64.deb pgdg 1.3 75.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-15-numeral_1.3-8.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-numeral postgresql-15-numeral_1.3-8.pgdg22.04+1_amd64.deb pgdg 1.3 79.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-15-numeral_1.3-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-numeral postgresql-15-numeral_1.3-8.pgdg22.04+1_arm64.deb pgdg 1.3 78.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-15-numeral_1.3-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-numeral postgresql-15-numeral_1.3-8.pgdg24.04+1_amd64.deb pgdg 1.3 75.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-15-numeral_1.3-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-numeral postgresql-15-numeral_1.3-8.pgdg24.04+1_arm64.deb pgdg 1.3 74.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-15-numeral_1.3-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-numeral postgresql-15-numeral_1.3-8.pgdg26.04+1_amd64.deb pgdg 1.3 75.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-15-numeral_1.3-8.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-numeral postgresql-15-numeral_1.3-8.pgdg26.04+1_arm64.deb pgdg 1.3 74.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-15-numeral_1.3-8.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 numeral_14 numeral_14-1.3-1PIGSTY.el8.x86_64.rpm pigsty 1.3 35.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/numeral_14-1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 numeral_14 numeral_14-1.3-1PIGSTY.el8.aarch64.rpm pigsty 1.3 34.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/numeral_14-1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 numeral_14 numeral_14-1.3-1PIGSTY.el9.x86_64.rpm pigsty 1.3 35.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/numeral_14-1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 numeral_14 numeral_14-1.3-1PIGSTY.el9.aarch64.rpm pigsty 1.3 34.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/numeral_14-1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 numeral_14 numeral_14-1.3-1PIGSTY.el10.x86_64.rpm pigsty 1.3 35.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/numeral_14-1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 numeral_14 numeral_14-1.3-1PIGSTY.el10.aarch64.rpm pigsty 1.3 34.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/numeral_14-1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-numeral postgresql-14-numeral_1.3-8.pgdg12+1_amd64.deb pgdg 1.3 76.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-14-numeral_1.3-8.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-numeral postgresql-14-numeral_1.3-8.pgdg12+1_arm64.deb pgdg 1.3 74.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-14-numeral_1.3-8.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-numeral postgresql-14-numeral_1.3-8.pgdg13+1_amd64.deb pgdg 1.3 77.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-14-numeral_1.3-8.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-numeral postgresql-14-numeral_1.3-8.pgdg13+1_arm64.deb pgdg 1.3 75.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-14-numeral_1.3-8.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-numeral postgresql-14-numeral_1.3-8.pgdg22.04+1_amd64.deb pgdg 1.3 79.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-14-numeral_1.3-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-numeral postgresql-14-numeral_1.3-8.pgdg22.04+1_arm64.deb pgdg 1.3 78.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-14-numeral_1.3-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-numeral postgresql-14-numeral_1.3-8.pgdg24.04+1_amd64.deb pgdg 1.3 75.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-14-numeral_1.3-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-numeral postgresql-14-numeral_1.3-8.pgdg24.04+1_arm64.deb pgdg 1.3 74.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-14-numeral_1.3-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-numeral postgresql-14-numeral_1.3-8.pgdg26.04+1_amd64.deb pgdg 1.3 75.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-14-numeral_1.3-8.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-numeral postgresql-14-numeral_1.3-8.pgdg26.04+1_arm64.deb pgdg 1.3 74.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-numeral/postgresql-14-numeral_1.3-8.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `numeral` 扩展的 RPM 包：

```bash
pig build pkg numeral         # 构建 RPM 包
```


## 安装

您可以直接安装 `numeral` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install numeral;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y numeral -v 18  # PG 18
pig ext install -y numeral -v 17  # PG 17
pig ext install -y numeral -v 16  # PG 16
pig ext install -y numeral -v 15  # PG 15
pig ext install -y numeral -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y numeral_18       # PG 18
dnf install -y numeral_17       # PG 17
dnf install -y numeral_16       # PG 16
dnf install -y numeral_15       # PG 15
dnf install -y numeral_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-numeral   # PG 18
apt install -y postgresql-17-numeral   # PG 17
apt install -y postgresql-16-numeral   # PG 16
apt install -y postgresql-15-numeral   # PG 15
apt install -y postgresql-14-numeral   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION numeral;
```



## 用法

> [numeral: 文本数词数据类型（英语、德语、罗马数字）](https://github.com/df7cb/postgresql-numeral)

`numeral` 扩展提供了三种自定义数值数据类型，使用文本数词而非数字。

```sql
CREATE EXTENSION numeral;
```

### 数据类型

- **`numeral`**：英语数词，使用短级差制（10^9 = billion）
- **`zahl`**：德语数词，使用长级差制（10^9 = Milliarde）
- **`roman`**：罗马数字

三种类型在内部与 `bigint` 二进制兼容，并可隐式转换为 `bigint`。

### 示例

```sql
-- 英语数词
SELECT 'thirty'::numeral + 'twelve'::numeral;
-- forty-two

-- 德语数词
SELECT 'siebzehn'::zahl * 'dreiundzwanzig'::zahl;
-- dreihunderteinundneunzig

-- 罗马数字
SELECT 'MCMLV'::roman + 'II'::roman * 'XXX'::roman;
-- MMXV
```

### 运算符

标准算术运算符（`+`、`-`、`*`、`/`）通过隐式 `bigint` 转换实现。所有现有的 bigint 运算符和函数均可使用。

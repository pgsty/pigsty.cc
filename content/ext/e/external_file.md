---
title: "external_file"
linkTitle: "external_file"
description: "通过 PostgreSQL 函数访问服务器端外部文件"
weight: 4285
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/darold/external_file">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">darold/external_file</div>
    <div class="ext-card__desc">https://github.com/darold/external_file</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/external_file-1.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">external_file-1.2.tar.gz</div>
    <div class="ext-card__desc">external_file-1.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`external_file`**](/ext/e/external_file) | `1.2` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4285  | [**`external_file`**](/ext/e/external_file) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `external_file` |
{.ext-table}


> Fixed schema external_file; superuser required.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2` | {{< pgvers "18,17,16,15,14" >}} | `external_file` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2` | {{< pgvers "18,17,16,15,14" >}} | `external_file_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-external-file` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| el8.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
@ el8.x86_64 18 external_file_18 external_file_18-1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/external_file_18-1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 external_file_18 external_file_18-1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/external_file_18-1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 external_file_18 external_file_18-1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/external_file_18-1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 external_file_18 external_file_18-1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/external_file_18-1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 external_file_18 external_file_18-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/external_file_18-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 external_file_18 external_file_18-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/external_file_18-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-external-file postgresql-18-external-file_1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/external-file/postgresql-18-external-file_1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-external-file postgresql-18-external-file_1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/external-file/postgresql-18-external-file_1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-external-file postgresql-18-external-file_1.2-1PIGSTY~trixie_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/external-file/postgresql-18-external-file_1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-external-file postgresql-18-external-file_1.2-1PIGSTY~trixie_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/external-file/postgresql-18-external-file_1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-external-file postgresql-18-external-file_1.2-1PIGSTY~jammy_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/external-file/postgresql-18-external-file_1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-external-file postgresql-18-external-file_1.2-1PIGSTY~jammy_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/external-file/postgresql-18-external-file_1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-external-file postgresql-18-external-file_1.2-1PIGSTY~noble_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/external-file/postgresql-18-external-file_1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-external-file postgresql-18-external-file_1.2-1PIGSTY~noble_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/external-file/postgresql-18-external-file_1.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 external_file_17 external_file_17-1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/external_file_17-1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 external_file_17 external_file_17-1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/external_file_17-1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 external_file_17 external_file_17-1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/external_file_17-1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 external_file_17 external_file_17-1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/external_file_17-1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 external_file_17 external_file_17-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/external_file_17-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 external_file_17 external_file_17-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/external_file_17-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-external-file postgresql-17-external-file_1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/external-file/postgresql-17-external-file_1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-external-file postgresql-17-external-file_1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/external-file/postgresql-17-external-file_1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-external-file postgresql-17-external-file_1.2-1PIGSTY~trixie_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/external-file/postgresql-17-external-file_1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-external-file postgresql-17-external-file_1.2-1PIGSTY~trixie_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/external-file/postgresql-17-external-file_1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-external-file postgresql-17-external-file_1.2-1PIGSTY~jammy_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/external-file/postgresql-17-external-file_1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-external-file postgresql-17-external-file_1.2-1PIGSTY~jammy_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/external-file/postgresql-17-external-file_1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-external-file postgresql-17-external-file_1.2-1PIGSTY~noble_amd64.deb pigsty 1.2 7.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/external-file/postgresql-17-external-file_1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-external-file postgresql-17-external-file_1.2-1PIGSTY~noble_arm64.deb pigsty 1.2 7.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/external-file/postgresql-17-external-file_1.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 external_file_16 external_file_16-1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/external_file_16-1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 external_file_16 external_file_16-1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/external_file_16-1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 external_file_16 external_file_16-1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/external_file_16-1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 external_file_16 external_file_16-1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/external_file_16-1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 external_file_16 external_file_16-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/external_file_16-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 external_file_16 external_file_16-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/external_file_16-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-external-file postgresql-16-external-file_1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/external-file/postgresql-16-external-file_1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-external-file postgresql-16-external-file_1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/external-file/postgresql-16-external-file_1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-external-file postgresql-16-external-file_1.2-1PIGSTY~trixie_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/external-file/postgresql-16-external-file_1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-external-file postgresql-16-external-file_1.2-1PIGSTY~trixie_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/external-file/postgresql-16-external-file_1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-external-file postgresql-16-external-file_1.2-1PIGSTY~jammy_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/external-file/postgresql-16-external-file_1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-external-file postgresql-16-external-file_1.2-1PIGSTY~jammy_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/external-file/postgresql-16-external-file_1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-external-file postgresql-16-external-file_1.2-1PIGSTY~noble_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/external-file/postgresql-16-external-file_1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-external-file postgresql-16-external-file_1.2-1PIGSTY~noble_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/external-file/postgresql-16-external-file_1.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 external_file_15 external_file_15-1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/external_file_15-1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 external_file_15 external_file_15-1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/external_file_15-1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 external_file_15 external_file_15-1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/external_file_15-1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 external_file_15 external_file_15-1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/external_file_15-1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 external_file_15 external_file_15-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/external_file_15-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 external_file_15 external_file_15-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/external_file_15-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-external-file postgresql-15-external-file_1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/external-file/postgresql-15-external-file_1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-external-file postgresql-15-external-file_1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/external-file/postgresql-15-external-file_1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-external-file postgresql-15-external-file_1.2-1PIGSTY~trixie_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/external-file/postgresql-15-external-file_1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-external-file postgresql-15-external-file_1.2-1PIGSTY~trixie_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/external-file/postgresql-15-external-file_1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-external-file postgresql-15-external-file_1.2-1PIGSTY~jammy_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/external-file/postgresql-15-external-file_1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-external-file postgresql-15-external-file_1.2-1PIGSTY~jammy_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/external-file/postgresql-15-external-file_1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-external-file postgresql-15-external-file_1.2-1PIGSTY~noble_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/external-file/postgresql-15-external-file_1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-external-file postgresql-15-external-file_1.2-1PIGSTY~noble_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/external-file/postgresql-15-external-file_1.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 external_file_14 external_file_14-1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/external_file_14-1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 external_file_14 external_file_14-1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/external_file_14-1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 external_file_14 external_file_14-1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/external_file_14-1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 external_file_14 external_file_14-1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2 12.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/external_file_14-1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 external_file_14 external_file_14-1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/external_file_14-1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 external_file_14 external_file_14-1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/external_file_14-1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-external-file postgresql-14-external-file_1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/external-file/postgresql-14-external-file_1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-external-file postgresql-14-external-file_1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/external-file/postgresql-14-external-file_1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-external-file postgresql-14-external-file_1.2-1PIGSTY~trixie_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/external-file/postgresql-14-external-file_1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-external-file postgresql-14-external-file_1.2-1PIGSTY~trixie_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/external-file/postgresql-14-external-file_1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-external-file postgresql-14-external-file_1.2-1PIGSTY~jammy_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/external-file/postgresql-14-external-file_1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-external-file postgresql-14-external-file_1.2-1PIGSTY~jammy_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/external-file/postgresql-14-external-file_1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-external-file postgresql-14-external-file_1.2-1PIGSTY~noble_amd64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/external-file/postgresql-14-external-file_1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-external-file postgresql-14-external-file_1.2-1PIGSTY~noble_arm64.deb pigsty 1.2 7.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/external-file/postgresql-14-external-file_1.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `external_file` 扩展的 RPM / DEB 包：

```bash
pig build pkg external_file         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `external_file` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install external_file;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y external_file -v 18  # PG 18
pig ext install -y external_file -v 17  # PG 17
pig ext install -y external_file -v 16  # PG 16
pig ext install -y external_file -v 15  # PG 15
pig ext install -y external_file -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y external_file_18       # PG 18
dnf install -y external_file_17       # PG 17
dnf install -y external_file_16       # PG 16
dnf install -y external_file_15       # PG 15
dnf install -y external_file_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-external-file   # PG 18
apt install -y postgresql-17-external-file   # PG 17
apt install -y postgresql-16-external-file   # PG 16
apt install -y postgresql-15-external-file   # PG 15
apt install -y postgresql-14-external-file   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION external_file;
```

## 用法

- 来源: [GitHub 仓库](https://github.com/darold/external_file), [README](https://github.com/darold/external_file/blob/master/README.md)
- `external_file` 提供通过 PostgreSQL 扩展访问外部文件的能力，类似 Oracle BFILE 风格的定位器。

```sql
CREATE EXTENSION external_file;
```

README 说明对象默认创建在 `external_file` 模式中，且创建扩展需要 PostgreSQL 超级用户权限。

## 核心流程

该扩展使用“目录别名 + 文件名”来标识外部文件。上游 README 展示的流程如下：

```sql
INSERT INTO directories(directory_name, directory_path)
VALUES ('temporary', '/tmp/');

INSERT INTO directory_roles(directory_name, directory_role, directory_read, directory_write)
VALUES ('temporary', 'a_role', true, false);

SELECT writeEfile('\x48656c6c6f2c0a0a596f75206172652072656164696e67206120746578742066696c652e0a0a526567617264732c0a',
                  ('temporary', 'blahblah.txt'));
SELECT readefile(the_file) FROM efile_test;
SELECT copyefile(('temporary', 'blahblah.txt'), ('temporary', 'copy_blahblah.txt'));
```

主要导出辅助函数包括 `efilename`、`readEfile`、`writeEfile`、`copyEfile` 和 `getEfilePath`。

## 备注

该扩展不会直接读取服务器文件系统上的文件。它通过服务器端 `lo_*` 系列函数访问文件，并通过目录表和角色表控制访问权限。

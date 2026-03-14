---
title: "pg_crash"
linkTitle: "pg_crash"
description: "向数据库进程随机发送信号模拟故障"
weight: 5210
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/cybertec-postgresql/pg_crash">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">cybertec-postgresql/pg_crash</div>
    <div class="ext-card__desc">https://github.com/cybertec-postgresql/pg_crash</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_crash-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_crash-1.0.tar.gz</div>
    <div class="ext-card__desc">pg_crash-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_crash`**](/ext/e/pg_crash) | `1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5210  | [**`pg_crash`**](/ext/e/pg_crash) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_snakeoil`](/ext/e/pg_snakeoil) [`pg_cheat_funcs`](/ext/e/pg_cheat_funcs) [`pg_savior`](/ext/e/pg_savior) [`pg_dirtyread`](/ext/e/pg_dirtyread) [`pg_surgery`](/ext/e/pg_surgery) [`pg_repack`](/ext/e/pg_repack) [`pg_rewrite`](/ext/e/pg_rewrite) [`pg_squeeze`](/ext/e/pg_squeeze) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_crash` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_crash_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-crash` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PGDG 0.3 1 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 |
| d12.aarch64 | AVAIL PGDG 0.3 1 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 |
| d13.x86_64 | AVAIL PGDG 0.3 1 | AVAIL PGDG 0.3 1 | AVAIL PGDG 0.3 1 | AVAIL PGDG 0.3 1 | AVAIL PGDG 0.3 1 |
| d13.aarch64 | AVAIL PGDG 0.3 1 | AVAIL PGDG 0.3 1 | AVAIL PGDG 0.3 1 | AVAIL PGDG 0.3 1 | AVAIL PGDG 0.3 1 |
| u22.x86_64 | AVAIL PGDG 0.3 1 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 |
| u22.aarch64 | AVAIL PGDG 0.3 1 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 |
| u24.x86_64 | AVAIL PGDG 0.3 1 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 |
| u24.aarch64 | AVAIL PGDG 0.3 1 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 | AVAIL PIGSTY 1.0 2 |
@ el8.x86_64 18 pg_crash_18 pg_crash_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_crash_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_crash_18 pg_crash_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_crash_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_crash_18 pg_crash_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_crash_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_crash_18 pg_crash_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 12.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_crash_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_crash_18 pg_crash_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_crash_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_crash_18 pg_crash_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_crash_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-crash postgresql-18-pg-crash_0.3-2.pgdg12+1_amd64.deb pgdg 0.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-18-pg-crash_0.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-crash postgresql-18-pg-crash_0.3-2.pgdg12+1_arm64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-18-pg-crash_0.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-crash postgresql-18-pg-crash_0.3-2.pgdg13+1_amd64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-18-pg-crash_0.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-crash postgresql-18-pg-crash_0.3-2.pgdg13+1_arm64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-18-pg-crash_0.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-crash postgresql-18-pg-crash_0.3-2.pgdg22.04+1_amd64.deb pgdg 0.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-18-pg-crash_0.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-crash postgresql-18-pg-crash_0.3-2.pgdg22.04+1_arm64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-18-pg-crash_0.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-crash postgresql-18-pg-crash_0.3-2.pgdg24.04+1_amd64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-18-pg-crash_0.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-crash postgresql-18-pg-crash_0.3-2.pgdg24.04+1_arm64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-18-pg-crash_0.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_crash_17 pg_crash_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_crash_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_crash_17 pg_crash_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_crash_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_crash_17 pg_crash_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_crash_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_crash_17 pg_crash_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_crash_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_crash_17 pg_crash_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_crash_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_crash_17 pg_crash_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_crash_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-crash postgresql-17-pg-crash_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-crash/postgresql-17-pg-crash_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-crash postgresql-17-pg-crash_0.3-2.pgdg12+1_amd64.deb pgdg 0.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-17-pg-crash_0.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-crash postgresql-17-pg-crash_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 12.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-crash/postgresql-17-pg-crash_1.0-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-crash postgresql-17-pg-crash_0.3-2.pgdg12+1_arm64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-17-pg-crash_0.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-crash postgresql-17-pg-crash_0.3-2.pgdg13+1_amd64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-17-pg-crash_0.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-crash postgresql-17-pg-crash_0.3-2.pgdg13+1_arm64.deb pgdg 0.3 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-17-pg-crash_0.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-crash postgresql-17-pg-crash_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 13.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-crash/postgresql-17-pg-crash_1.0-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-crash postgresql-17-pg-crash_0.3-2.pgdg22.04+1_amd64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-17-pg-crash_0.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-crash postgresql-17-pg-crash_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 13.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-crash/postgresql-17-pg-crash_1.0-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-crash postgresql-17-pg-crash_0.3-2.pgdg22.04+1_arm64.deb pgdg 0.3 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-17-pg-crash_0.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-crash postgresql-17-pg-crash_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-crash/postgresql-17-pg-crash_1.0-1PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-crash postgresql-17-pg-crash_0.3-2.pgdg24.04+1_amd64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-17-pg-crash_0.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-crash postgresql-17-pg-crash_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-crash/postgresql-17-pg-crash_1.0-1PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-crash postgresql-17-pg-crash_0.3-2.pgdg24.04+1_arm64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-17-pg-crash_0.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_crash_16 pg_crash_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_crash_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_crash_16 pg_crash_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_crash_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_crash_16 pg_crash_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_crash_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_crash_16 pg_crash_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_crash_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_crash_16 pg_crash_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_crash_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_crash_16 pg_crash_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 13.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_crash_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-crash postgresql-16-pg-crash_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-crash/postgresql-16-pg-crash_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-crash postgresql-16-pg-crash_0.3-2.pgdg12+1_amd64.deb pgdg 0.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-16-pg-crash_0.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-crash postgresql-16-pg-crash_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 12.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-crash/postgresql-16-pg-crash_1.0-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-crash postgresql-16-pg-crash_0.3-2.pgdg12+1_arm64.deb pgdg 0.3 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-16-pg-crash_0.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-crash postgresql-16-pg-crash_0.3-2.pgdg13+1_amd64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-16-pg-crash_0.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-crash postgresql-16-pg-crash_0.3-2.pgdg13+1_arm64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-16-pg-crash_0.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-crash postgresql-16-pg-crash_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 13.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-crash/postgresql-16-pg-crash_1.0-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-crash postgresql-16-pg-crash_0.3-2.pgdg22.04+1_amd64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-16-pg-crash_0.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-crash postgresql-16-pg-crash_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 13.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-crash/postgresql-16-pg-crash_1.0-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-crash postgresql-16-pg-crash_0.3-2.pgdg22.04+1_arm64.deb pgdg 0.3 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-16-pg-crash_0.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-crash postgresql-16-pg-crash_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-crash/postgresql-16-pg-crash_1.0-1PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-crash postgresql-16-pg-crash_0.3-2.pgdg24.04+1_amd64.deb pgdg 0.3 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-16-pg-crash_0.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-crash postgresql-16-pg-crash_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-crash/postgresql-16-pg-crash_1.0-1PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-crash postgresql-16-pg-crash_0.3-2.pgdg24.04+1_arm64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-16-pg-crash_0.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_crash_15 pg_crash_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_crash_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_crash_15 pg_crash_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_crash_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_crash_15 pg_crash_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_crash_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_crash_15 pg_crash_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_crash_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_crash_15 pg_crash_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_crash_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_crash_15 pg_crash_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_crash_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-crash postgresql-15-pg-crash_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 12.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-crash/postgresql-15-pg-crash_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-crash postgresql-15-pg-crash_0.3-2.pgdg12+1_amd64.deb pgdg 0.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-15-pg-crash_0.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-crash postgresql-15-pg-crash_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 12.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-crash/postgresql-15-pg-crash_1.0-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-crash postgresql-15-pg-crash_0.3-2.pgdg12+1_arm64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-15-pg-crash_0.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-crash postgresql-15-pg-crash_0.3-2.pgdg13+1_amd64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-15-pg-crash_0.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-crash postgresql-15-pg-crash_0.3-2.pgdg13+1_arm64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-15-pg-crash_0.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-crash postgresql-15-pg-crash_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 13.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-crash/postgresql-15-pg-crash_1.0-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-crash postgresql-15-pg-crash_0.3-2.pgdg22.04+1_amd64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-15-pg-crash_0.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-crash postgresql-15-pg-crash_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 13.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-crash/postgresql-15-pg-crash_1.0-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-crash postgresql-15-pg-crash_0.3-2.pgdg22.04+1_arm64.deb pgdg 0.3 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-15-pg-crash_0.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-crash postgresql-15-pg-crash_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-crash/postgresql-15-pg-crash_1.0-1PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-crash postgresql-15-pg-crash_0.3-2.pgdg24.04+1_amd64.deb pgdg 0.3 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-15-pg-crash_0.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-crash postgresql-15-pg-crash_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-crash/postgresql-15-pg-crash_1.0-1PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-crash postgresql-15-pg-crash_0.3-2.pgdg24.04+1_arm64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-15-pg-crash_0.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_crash_14 pg_crash_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_crash_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_crash_14 pg_crash_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_crash_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_crash_14 pg_crash_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_crash_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_crash_14 pg_crash_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_crash_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_crash_14 pg_crash_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 13.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_crash_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_crash_14 pg_crash_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_crash_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-crash postgresql-14-pg-crash_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-crash/postgresql-14-pg-crash_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-crash postgresql-14-pg-crash_0.3-2.pgdg12+1_amd64.deb pgdg 0.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-14-pg-crash_0.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-crash postgresql-14-pg-crash_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 12.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-crash/postgresql-14-pg-crash_1.0-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-crash postgresql-14-pg-crash_0.3-2.pgdg12+1_arm64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-14-pg-crash_0.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-crash postgresql-14-pg-crash_0.3-2.pgdg13+1_amd64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-14-pg-crash_0.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-crash postgresql-14-pg-crash_0.3-2.pgdg13+1_arm64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-14-pg-crash_0.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-crash postgresql-14-pg-crash_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 13.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-crash/postgresql-14-pg-crash_1.0-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-crash postgresql-14-pg-crash_0.3-2.pgdg22.04+1_amd64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-14-pg-crash_0.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-crash postgresql-14-pg-crash_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 13.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-crash/postgresql-14-pg-crash_1.0-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-crash postgresql-14-pg-crash_0.3-2.pgdg22.04+1_arm64.deb pgdg 0.3 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-14-pg-crash_0.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-crash postgresql-14-pg-crash_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-crash/postgresql-14-pg-crash_1.0-1PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-crash postgresql-14-pg-crash_0.3-2.pgdg24.04+1_amd64.deb pgdg 0.3 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-14-pg-crash_0.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-crash postgresql-14-pg-crash_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-crash/postgresql-14-pg-crash_1.0-1PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-crash postgresql-14-pg-crash_0.3-2.pgdg24.04+1_arm64.deb pgdg 0.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-crash/postgresql-14-pg-crash_0.3-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_crash` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_crash         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_crash` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_crash;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_crash -v 18  # PG 18
pig ext install -y pg_crash -v 17  # PG 17
pig ext install -y pg_crash -v 16  # PG 16
pig ext install -y pg_crash -v 15  # PG 15
pig ext install -y pg_crash -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_crash_18       # PG 18
dnf install -y pg_crash_17       # PG 17
dnf install -y pg_crash_16       # PG 16
dnf install -y pg_crash_15       # PG 15
dnf install -y pg_crash_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-crash   # PG 18
apt install -y postgresql-17-pg-crash   # PG 17
apt install -y postgresql-16-pg-crash   # PG 16
apt install -y postgresql-15-pg-crash   # PG 15
apt install -y postgresql-14-pg-crash   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_crash';
```




## 用法

> [pg_crash: 向随机进程发送随机信号](https://github.com/cybertec-postgresql/pg_crash)

pg_crash 是一个混沌工程扩展，定期向 PostgreSQL 后端进程发送 kill 信号，适用于高可用和故障转移测试。必须添加到 `shared_preload_libraries` 中。

### 配置

添加到 `postgresql.conf`：

```
shared_preload_libraries = 'pg_crash'

# 要发送的 POSIX 信号（空格分隔）
crash.signals = '1 2 3'

# 发送信号之间的延迟秒数
crash.delay = 30
```

### 信号参考

常用 POSIX 信号：`1`（SIGHUP）、`2`（SIGINT）、`3`（SIGQUIT）、`9`（SIGKILL）、`15`（SIGTERM）。

配置后重启服务器。后台工作进程将按照指定的间隔定期向随机后端进程发送配置的信号。

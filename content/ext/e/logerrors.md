---
title: "logerrors"
linkTitle: "logerrors"
description: "用于收集日志文件中消息统计信息的函数"
weight: 7140
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/munakoiso/logerrors">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">munakoiso/logerrors</div>
    <div class="ext-card__desc">https://github.com/munakoiso/logerrors</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/logerrors-2.1.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">logerrors-2.1.5.tar.gz</div>
    <div class="ext-card__desc">logerrors-2.1.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`logerrors`**](/ext/e/logerrors) | `2.1.5` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7140  | [**`logerrors`**](/ext/e/logerrors) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgauditlogtofile`](/ext/e/pgauditlogtofile) [`pg_auth_mon`](/ext/e/pg_auth_mon) [`pg_jobmon`](/ext/e/pg_jobmon) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`auto_explain`](/ext/e/auto_explain) [`pg_track_settings`](/ext/e/pg_track_settings) [`pgaudit`](/ext/e/pgaudit) [`pgsentinel`](/ext/e/pgsentinel) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `2.1.5` | {{< pgvers "18,17,16,15,14" >}} | `logerrors` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.5` | {{< pgvers "18,17,16,15,14" >}} | `logerrors_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-logerrors` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.1.5 1 | AVAIL PGDG 2.1.5 2 | AVAIL PGDG 2.1.5 3 | AVAIL PGDG 2.1.5 7 | AVAIL PGDG 2.1.5 7 |
| el8.aarch64 | AVAIL PGDG 2.1.5 1 | AVAIL PGDG 2.1.5 2 | AVAIL PGDG 2.1.5 3 | AVAIL PGDG 2.1.5 7 | AVAIL PGDG 2.1.5 7 |
| el9.x86_64 | AVAIL PGDG 2.1.5 1 | AVAIL PGDG 2.1.5 2 | AVAIL PGDG 2.1.5 3 | AVAIL PGDG 2.1.5 7 | AVAIL PGDG 2.1.5 6 |
| el9.aarch64 | AVAIL PGDG 2.1.5 1 | AVAIL PGDG 2.1.5 2 | AVAIL PGDG 2.1.5 3 | AVAIL PGDG 2.1.5 7 | AVAIL PGDG 2.1.5 7 |
| el10.x86_64 | AVAIL PGDG 2.1.5 1 | AVAIL PGDG 2.1.5 2 | AVAIL PGDG 2.1.5 2 | AVAIL PGDG 2.1.5 2 | AVAIL PGDG 2.1.5 2 |
| el10.aarch64 | AVAIL PGDG 2.1.5 1 | AVAIL PGDG 2.1.5 2 | AVAIL PGDG 2.1.5 2 | AVAIL PGDG 2.1.5 2 | AVAIL PGDG 2.1.5 2 |
| d12.x86_64 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 |
| d12.aarch64 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 |
| d13.x86_64 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 |
| d13.aarch64 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 |
| u22.x86_64 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 |
| u22.aarch64 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 |
| u24.x86_64 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 |
| u24.aarch64 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 | AVAIL PIGSTY 2.1.5 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 logerrors_18 logerrors_18-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/logerrors_18-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 logerrors_18 logerrors_18-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/logerrors_18-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 logerrors_18 logerrors_18-2.1.5-1PGDG.rhel9.x86_64.rpm pgdg 2.1.5 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/logerrors_18-2.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 logerrors_18 logerrors_18-2.1.5-1PGDG.rhel9.aarch64.rpm pgdg 2.1.5 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/logerrors_18-2.1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 logerrors_18 logerrors_18-2.1.5-1PGDG.rhel10.x86_64.rpm pgdg 2.1.5 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/logerrors_18-2.1.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 logerrors_18 logerrors_18-2.1.5-1PGDG.rhel10.aarch64.rpm pgdg 2.1.5 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/logerrors_18-2.1.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.5-1PIGSTY~bookworm_amd64.deb pigsty 2.1.5 30.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-18-logerrors_2.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.5-1PIGSTY~bookworm_arm64.deb pigsty 2.1.5 30.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-18-logerrors_2.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.5-1PIGSTY~trixie_amd64.deb pigsty 2.1.5 30.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-18-logerrors_2.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.5-1PIGSTY~trixie_arm64.deb pigsty 2.1.5 30.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-18-logerrors_2.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.5-1PIGSTY~jammy_amd64.deb pigsty 2.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-18-logerrors_2.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.5-1PIGSTY~jammy_arm64.deb pigsty 2.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-18-logerrors_2.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.5-1PIGSTY~noble_amd64.deb pigsty 2.1.5 32.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-18-logerrors_2.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.5-1PIGSTY~noble_arm64.deb pigsty 2.1.5 32.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-18-logerrors_2.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 logerrors_17 logerrors_17-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/logerrors_17-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 logerrors_17 logerrors_17-2.1.3-1PGDG.rhel8.x86_64.rpm pgdg 2.1.3 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/logerrors_17-2.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 logerrors_17 logerrors_17-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/logerrors_17-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 logerrors_17 logerrors_17-2.1.3-1PGDG.rhel8.aarch64.rpm pgdg 2.1.3 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/logerrors_17-2.1.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 logerrors_17 logerrors_17-2.1.5-1PGDG.rhel9.x86_64.rpm pgdg 2.1.5 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/logerrors_17-2.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 logerrors_17 logerrors_17-2.1.3-1PGDG.rhel9.x86_64.rpm pgdg 2.1.3 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/logerrors_17-2.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 logerrors_17 logerrors_17-2.1.5-1PGDG.rhel9.aarch64.rpm pgdg 2.1.5 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/logerrors_17-2.1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 logerrors_17 logerrors_17-2.1.3-1PGDG.rhel9.aarch64.rpm pgdg 2.1.3 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/logerrors_17-2.1.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 logerrors_17 logerrors_17-2.1.5-1PGDG.rhel10.x86_64.rpm pgdg 2.1.5 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/logerrors_17-2.1.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 logerrors_17 logerrors_17-2.1.3-2PGDG.rhel10.x86_64.rpm pgdg 2.1.3 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/logerrors_17-2.1.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 logerrors_17 logerrors_17-2.1.5-1PGDG.rhel10.aarch64.rpm pgdg 2.1.5 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/logerrors_17-2.1.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 logerrors_17 logerrors_17-2.1.3-2PGDG.rhel10.aarch64.rpm pgdg 2.1.3 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/logerrors_17-2.1.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.5-1PIGSTY~bookworm_amd64.deb pigsty 2.1.5 30.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-17-logerrors_2.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.5-1PIGSTY~bookworm_arm64.deb pigsty 2.1.5 30.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-17-logerrors_2.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.5-1PIGSTY~trixie_amd64.deb pigsty 2.1.5 30.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-17-logerrors_2.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.5-1PIGSTY~trixie_arm64.deb pigsty 2.1.5 30.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-17-logerrors_2.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.5-1PIGSTY~jammy_amd64.deb pigsty 2.1.5 38.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-17-logerrors_2.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.5-1PIGSTY~jammy_arm64.deb pigsty 2.1.5 38.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-17-logerrors_2.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.5-1PIGSTY~noble_amd64.deb pigsty 2.1.5 32.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-17-logerrors_2.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.5-1PIGSTY~noble_arm64.deb pigsty 2.1.5 32.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-17-logerrors_2.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 logerrors_16 logerrors_16-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/logerrors_16-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 logerrors_16 logerrors_16-2.1.3-1PGDG.rhel8.x86_64.rpm pgdg 2.1.3 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/logerrors_16-2.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 logerrors_16 logerrors_16-2.1.2-1.rhel8.x86_64.rpm pgdg 2.1.2 22.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/logerrors_16-2.1.2-1.rhel8.x86_64.rpm
@ el8.aarch64 16 logerrors_16 logerrors_16-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/logerrors_16-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 logerrors_16 logerrors_16-2.1.3-1PGDG.rhel8.aarch64.rpm pgdg 2.1.3 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/logerrors_16-2.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 logerrors_16 logerrors_16-2.1.2-1.rhel8.aarch64.rpm pgdg 2.1.2 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/logerrors_16-2.1.2-1.rhel8.aarch64.rpm
@ el9.x86_64 16 logerrors_16 logerrors_16-2.1.5-1PGDG.rhel9.x86_64.rpm pgdg 2.1.5 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/logerrors_16-2.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 logerrors_16 logerrors_16-2.1.3-1PGDG.rhel9.x86_64.rpm pgdg 2.1.3 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/logerrors_16-2.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 logerrors_16 logerrors_16-2.1.2-1.rhel9.x86_64.rpm pgdg 2.1.2 22.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/logerrors_16-2.1.2-1.rhel9.x86_64.rpm
@ el9.aarch64 16 logerrors_16 logerrors_16-2.1.5-1PGDG.rhel9.aarch64.rpm pgdg 2.1.5 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/logerrors_16-2.1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 logerrors_16 logerrors_16-2.1.3-1PGDG.rhel9.aarch64.rpm pgdg 2.1.3 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/logerrors_16-2.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 logerrors_16 logerrors_16-2.1.2-1.rhel9.aarch64.rpm pgdg 2.1.2 21.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/logerrors_16-2.1.2-1.rhel9.aarch64.rpm
@ el10.x86_64 16 logerrors_16 logerrors_16-2.1.5-1PGDG.rhel10.x86_64.rpm pgdg 2.1.5 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/logerrors_16-2.1.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 logerrors_16 logerrors_16-2.1.3-2PGDG.rhel10.x86_64.rpm pgdg 2.1.3 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/logerrors_16-2.1.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 logerrors_16 logerrors_16-2.1.5-1PGDG.rhel10.aarch64.rpm pgdg 2.1.5 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/logerrors_16-2.1.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 logerrors_16 logerrors_16-2.1.3-2PGDG.rhel10.aarch64.rpm pgdg 2.1.3 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/logerrors_16-2.1.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.5-1PIGSTY~bookworm_amd64.deb pigsty 2.1.5 30.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-16-logerrors_2.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.5-1PIGSTY~bookworm_arm64.deb pigsty 2.1.5 30.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-16-logerrors_2.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.5-1PIGSTY~trixie_amd64.deb pigsty 2.1.5 30.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-16-logerrors_2.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.5-1PIGSTY~trixie_arm64.deb pigsty 2.1.5 30.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-16-logerrors_2.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.5-1PIGSTY~jammy_amd64.deb pigsty 2.1.5 38.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-16-logerrors_2.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.5-1PIGSTY~jammy_arm64.deb pigsty 2.1.5 37.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-16-logerrors_2.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.5-1PIGSTY~noble_amd64.deb pigsty 2.1.5 32.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-16-logerrors_2.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.5-1PIGSTY~noble_arm64.deb pigsty 2.1.5 32.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-16-logerrors_2.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1.3-1PGDG.rhel8.x86_64.rpm pgdg 2.1.3 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1.2-1.rhel8.x86_64.rpm pgdg 2.1.2 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1-2.rhel8.x86_64.rpm pgdg 2.1 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1-2.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1-1.rhel8.x86_64.rpm pgdg 2.1 20.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.0-2.rhel8.x86_64.rpm pgdg 2.0 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.0-2.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.0-1.rhel8.x86_64.rpm pgdg 2.0 41.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1.3-1PGDG.rhel8.aarch64.rpm pgdg 2.1.3 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1.2-1.rhel8.aarch64.rpm pgdg 2.1.2 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1-2.rhel8.aarch64.rpm pgdg 2.1 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1-2.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1-1.rhel8.aarch64.rpm pgdg 2.1 20.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.0-2.rhel8.aarch64.rpm pgdg 2.0 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.0-2.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.0-1.rhel8.aarch64.rpm pgdg 2.0 41.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 logerrors_15 logerrors_15-2.1.5-1PGDG.rhel9.x86_64.rpm pgdg 2.1.5 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/logerrors_15-2.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 logerrors_15 logerrors_15-2.1.3-1PGDG.rhel9.x86_64.rpm pgdg 2.1.3 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/logerrors_15-2.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 logerrors_15 logerrors_15-2.1.2-1.rhel9.x86_64.rpm pgdg 2.1.2 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/logerrors_15-2.1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 logerrors_15 logerrors_15-2.1-2.rhel9.x86_64.rpm pgdg 2.1 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/logerrors_15-2.1-2.rhel9.x86_64.rpm
@ el9.x86_64 15 logerrors_15 logerrors_15-2.1-1.rhel9.x86_64.rpm pgdg 2.1 21.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/logerrors_15-2.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 logerrors_15 logerrors_15-2.0-2.rhel9.x86_64.rpm pgdg 2.0 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/logerrors_15-2.0-2.rhel9.x86_64.rpm
@ el9.x86_64 15 logerrors_15 logerrors_15-2.0-1.rhel9.x86_64.rpm pgdg 2.0 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/logerrors_15-2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 logerrors_15 logerrors_15-2.1.5-1PGDG.rhel9.aarch64.rpm pgdg 2.1.5 23.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/logerrors_15-2.1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 logerrors_15 logerrors_15-2.1.3-1PGDG.rhel9.aarch64.rpm pgdg 2.1.3 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/logerrors_15-2.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 logerrors_15 logerrors_15-2.1.2-1.rhel9.aarch64.rpm pgdg 2.1.2 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/logerrors_15-2.1.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 logerrors_15 logerrors_15-2.1-2.rhel9.aarch64.rpm pgdg 2.1 21.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/logerrors_15-2.1-2.rhel9.aarch64.rpm
@ el9.aarch64 15 logerrors_15 logerrors_15-2.1-1.rhel9.aarch64.rpm pgdg 2.1 20.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/logerrors_15-2.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 logerrors_15 logerrors_15-2.0-2.rhel9.aarch64.rpm pgdg 2.0 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/logerrors_15-2.0-2.rhel9.aarch64.rpm
@ el9.aarch64 15 logerrors_15 logerrors_15-2.0-1.rhel9.aarch64.rpm pgdg 2.0 42.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/logerrors_15-2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 logerrors_15 logerrors_15-2.1.5-1PGDG.rhel10.x86_64.rpm pgdg 2.1.5 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/logerrors_15-2.1.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 logerrors_15 logerrors_15-2.1.3-2PGDG.rhel10.x86_64.rpm pgdg 2.1.3 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/logerrors_15-2.1.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 logerrors_15 logerrors_15-2.1.5-1PGDG.rhel10.aarch64.rpm pgdg 2.1.5 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/logerrors_15-2.1.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 logerrors_15 logerrors_15-2.1.3-2PGDG.rhel10.aarch64.rpm pgdg 2.1.3 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/logerrors_15-2.1.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.5-1PIGSTY~bookworm_amd64.deb pigsty 2.1.5 30.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-15-logerrors_2.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.5-1PIGSTY~bookworm_arm64.deb pigsty 2.1.5 30.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-15-logerrors_2.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.5-1PIGSTY~trixie_amd64.deb pigsty 2.1.5 31.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-15-logerrors_2.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.5-1PIGSTY~trixie_arm64.deb pigsty 2.1.5 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-15-logerrors_2.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.5-1PIGSTY~jammy_amd64.deb pigsty 2.1.5 38.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-15-logerrors_2.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.5-1PIGSTY~jammy_arm64.deb pigsty 2.1.5 38.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-15-logerrors_2.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.5-1PIGSTY~noble_amd64.deb pigsty 2.1.5 32.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-15-logerrors_2.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.5-1PIGSTY~noble_arm64.deb pigsty 2.1.5 32.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-15-logerrors_2.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 logerrors_14 logerrors_14-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/logerrors_14-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 logerrors_14 logerrors_14-2.1.3-1PGDG.rhel8.x86_64.rpm pgdg 2.1.3 23.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/logerrors_14-2.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 logerrors_14 logerrors_14-2.1.2-1.rhel8.x86_64.rpm pgdg 2.1.2 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/logerrors_14-2.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 logerrors_14 logerrors_14-2.1-2.rhel8.x86_64.rpm pgdg 2.1 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/logerrors_14-2.1-2.rhel8.x86_64.rpm
@ el8.x86_64 14 logerrors_14 logerrors_14-2.1-1.rhel8.x86_64.rpm pgdg 2.1 20.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/logerrors_14-2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 logerrors_14 logerrors_14-2.0-2.rhel8.x86_64.rpm pgdg 2.0 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/logerrors_14-2.0-2.rhel8.x86_64.rpm
@ el8.x86_64 14 logerrors_14 logerrors_14-2.0-1.rhel8.x86_64.rpm pgdg 2.0 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/logerrors_14-2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 logerrors_14 logerrors_14-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/logerrors_14-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 logerrors_14 logerrors_14-2.1.3-1PGDG.rhel8.aarch64.rpm pgdg 2.1.3 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/logerrors_14-2.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 logerrors_14 logerrors_14-2.1.2-1.rhel8.aarch64.rpm pgdg 2.1.2 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/logerrors_14-2.1.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 logerrors_14 logerrors_14-2.1-2.rhel8.aarch64.rpm pgdg 2.1 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/logerrors_14-2.1-2.rhel8.aarch64.rpm
@ el8.aarch64 14 logerrors_14 logerrors_14-2.1-1.rhel8.aarch64.rpm pgdg 2.1 20.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/logerrors_14-2.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 logerrors_14 logerrors_14-2.0-2.rhel8.aarch64.rpm pgdg 2.0 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/logerrors_14-2.0-2.rhel8.aarch64.rpm
@ el8.aarch64 14 logerrors_14 logerrors_14-2.0-1.rhel8.aarch64.rpm pgdg 2.0 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/logerrors_14-2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 logerrors_14 logerrors_14-2.1.5-1PGDG.rhel9.x86_64.rpm pgdg 2.1.5 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/logerrors_14-2.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 logerrors_14 logerrors_14-2.1.3-1PGDG.rhel9.x86_64.rpm pgdg 2.1.3 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/logerrors_14-2.1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 logerrors_14 logerrors_14-2.1.2-1.rhel9.x86_64.rpm pgdg 2.1.2 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/logerrors_14-2.1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 logerrors_14 logerrors_14-2.1-2.rhel9.x86_64.rpm pgdg 2.1 21.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/logerrors_14-2.1-2.rhel9.x86_64.rpm
@ el9.x86_64 14 logerrors_14 logerrors_14-2.1-1.rhel9.x86_64.rpm pgdg 2.1 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/logerrors_14-2.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 logerrors_14 logerrors_14-2.0-2.rhel9.x86_64.rpm pgdg 2.0 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/logerrors_14-2.0-2.rhel9.x86_64.rpm
@ el9.aarch64 14 logerrors_14 logerrors_14-2.1.5-1PGDG.rhel9.aarch64.rpm pgdg 2.1.5 23.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/logerrors_14-2.1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 logerrors_14 logerrors_14-2.1.3-1PGDG.rhel9.aarch64.rpm pgdg 2.1.3 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/logerrors_14-2.1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 logerrors_14 logerrors_14-2.1.2-1.rhel9.aarch64.rpm pgdg 2.1.2 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/logerrors_14-2.1.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 logerrors_14 logerrors_14-2.1-2.rhel9.aarch64.rpm pgdg 2.1 21.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/logerrors_14-2.1-2.rhel9.aarch64.rpm
@ el9.aarch64 14 logerrors_14 logerrors_14-2.1-1.rhel9.aarch64.rpm pgdg 2.1 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/logerrors_14-2.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 logerrors_14 logerrors_14-2.0-2.rhel9.aarch64.rpm pgdg 2.0 20.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/logerrors_14-2.0-2.rhel9.aarch64.rpm
@ el9.aarch64 14 logerrors_14 logerrors_14-2.0-1.rhel9.aarch64.rpm pgdg 2.0 40.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/logerrors_14-2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 logerrors_14 logerrors_14-2.1.5-1PGDG.rhel10.x86_64.rpm pgdg 2.1.5 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/logerrors_14-2.1.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 logerrors_14 logerrors_14-2.1.3-2PGDG.rhel10.x86_64.rpm pgdg 2.1.3 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/logerrors_14-2.1.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 logerrors_14 logerrors_14-2.1.5-1PGDG.rhel10.aarch64.rpm pgdg 2.1.5 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/logerrors_14-2.1.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 logerrors_14 logerrors_14-2.1.3-2PGDG.rhel10.aarch64.rpm pgdg 2.1.3 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/logerrors_14-2.1.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-logerrors postgresql-14-logerrors_2.1.5-1PIGSTY~bookworm_amd64.deb pigsty 2.1.5 30.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-14-logerrors_2.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-logerrors postgresql-14-logerrors_2.1.5-1PIGSTY~bookworm_arm64.deb pigsty 2.1.5 30.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-14-logerrors_2.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-logerrors postgresql-14-logerrors_2.1.5-1PIGSTY~trixie_amd64.deb pigsty 2.1.5 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-14-logerrors_2.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-logerrors postgresql-14-logerrors_2.1.5-1PIGSTY~trixie_arm64.deb pigsty 2.1.5 30.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-14-logerrors_2.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-logerrors postgresql-14-logerrors_2.1.5-1PIGSTY~jammy_amd64.deb pigsty 2.1.5 36.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-14-logerrors_2.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-logerrors postgresql-14-logerrors_2.1.5-1PIGSTY~jammy_arm64.deb pigsty 2.1.5 36.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-14-logerrors_2.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-logerrors postgresql-14-logerrors_2.1.5-1PIGSTY~noble_amd64.deb pigsty 2.1.5 32.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-14-logerrors_2.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-logerrors postgresql-14-logerrors_2.1.5-1PIGSTY~noble_arm64.deb pigsty 2.1.5 32.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-14-logerrors_2.1.5-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `logerrors` 扩展的 DEB 包：

```bash
pig build pkg logerrors         # 构建 DEB 包
```


## 安装

您可以直接安装 `logerrors` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install logerrors;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y logerrors -v 18  # PG 18
pig ext install -y logerrors -v 17  # PG 17
pig ext install -y logerrors -v 16  # PG 16
pig ext install -y logerrors -v 15  # PG 15
pig ext install -y logerrors -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y logerrors_18       # PG 18
dnf install -y logerrors_17       # PG 17
dnf install -y logerrors_16       # PG 16
dnf install -y logerrors_15       # PG 15
dnf install -y logerrors_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-logerrors   # PG 18
apt install -y postgresql-17-logerrors   # PG 17
apt install -y postgresql-16-logerrors   # PG 16
apt install -y postgresql-15-logerrors   # PG 15
apt install -y postgresql-14-logerrors   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'logerrors';
```


**创建扩展**：

```sql
CREATE EXTENSION logerrors;
```




## 用法

> [logerrors: 收集日志消息统计信息](https://github.com/munakoiso/logerrors)

`logerrors` 收集 PostgreSQL 日志文件中 WARNING、ERROR 和 FATAL 消息的统计信息，无需解析日志即可轻松监控错误率。

```sql
CREATE EXTENSION logerrors;
```

### 配置参数

| 参数 | 默认值 | 描述 |
|------|--------|------|
| `logerrors.interval` | `5000`（5秒） | 写入统计到缓冲区的间隔（毫秒，最大 60 秒） |
| `logerrors.intervals_count` | `120` | 缓冲区中保留的间隔数（最大 360） |
| `logerrors.excluded_errcodes` | （空） | 要排除的错误代码，逗号分隔 |

### 查询错误统计

```sql
SELECT * FROM pg_log_errors_stats();
 time_interval |  type   |       message        | count | username | database | sqlstate
---------------+---------+----------------------+-------+----------+----------+----------
               | WARNING | TOTAL                |     0 |          |          |
               | ERROR   | TOTAL                |     1 |          |          |
               | FATAL   | TOTAL                |     0 |          |          |
             5 | ERROR   | ERRCODE_SYNTAX_ERROR |     1 | postgres | postgres | 42601
           600 | ERROR   | ERRCODE_SYNTAX_ERROR |     1 | postgres | postgres | 42601
```

### 慢日志统计

```sql
SELECT * FROM pg_slow_log_stats();
 slow_count |         reset_time
------------+----------------------------
          1 | 2020-06-13 00:19:31.084923
```

### 重置统计

```sql
SELECT pg_log_errors_reset();
```

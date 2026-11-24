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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/logerrors-2.1.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">logerrors-2.1.6.tar.gz</div>
    <div class="ext-card__desc">logerrors-2.1.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`logerrors`**](/ext/e/logerrors) | `2.1.6` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7140  | [**`logerrors`**](/ext/e/logerrors) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_stat_log`](/ext/e/pg_stat_log) [`pgelog`](/ext/e/pgelog) [`pg_sqlog`](/ext/e/pg_sqlog) [`log_fdw`](/ext/e/log_fdw) [`pgaudit`](/ext/e/pgaudit) [`pgdisablelogerror`](/ext/e/pgdisablelogerror) [`pg_auth_mon`](/ext/e/pg_auth_mon) [`pgfr_record`](/ext/e/pgfr_record) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `2.1.6` | {{< pgvers "19,18,17,16,15" >}} | `logerrors` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.6` | {{< pgvers "19,18,17,16,15" >}} | `logerrors_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.6` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-logerrors` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PGDG - 0 | AVAIL PGDG 2.1.6 3 | AVAIL PGDG 2.1.6 4 | AVAIL PGDG 2.1.6 5 | AVAIL PGDG 2.1.6 9 |
| el8.aarch64 | N/A PGDG - 0 | AVAIL PGDG 2.1.6 3 | AVAIL PGDG 2.1.6 4 | AVAIL PGDG 2.1.6 5 | AVAIL PGDG 2.1.6 9 |
| el9.x86_64 | AVAIL PGDG 2.1.6 1 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 |
| el9.aarch64 | AVAIL PGDG 2.1.6 1 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 |
| el10.x86_64 | AVAIL PGDG 2.1.6 1 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 | AVAIL PGDG 2.1.6 2 |
| el10.aarch64 | AVAIL PGDG 2.1.6 1 | AVAIL PGDG 2.1.6 6 | AVAIL PGDG 2.1.6 7 | AVAIL PGDG 2.1.6 7 | AVAIL PGDG 2.1.6 7 |
| d12.x86_64 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 |
| d12.aarch64 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 |
| d13.x86_64 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 |
| d13.aarch64 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 |
| u22.x86_64 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 |
| u22.aarch64 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 |
| u24.x86_64 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 |
| u24.aarch64 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 |
| u26.x86_64 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 |
| u26.aarch64 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 | AVAIL PIGSTY 2.1.6 1 |
@ el9.x86_64 19 logerrors_19 logerrors_19-2.1.6-1PGDG.rhel9.9.x86_64.rpm pgdg 2.1.6 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-x86_64/logerrors_19-2.1.6-1PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 19 logerrors_19 logerrors_19-2.1.6-1PGDG.rhel9.9.aarch64.rpm pgdg 2.1.6 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-aarch64/logerrors_19-2.1.6-1PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 19 logerrors_19 logerrors_19-2.1.6-1PGDG.rhel10.3.x86_64.rpm pgdg 2.1.6 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-x86_64/logerrors_19-2.1.6-1PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 19 logerrors_19 logerrors_19-2.1.6-1PGDG.rhel10.3.aarch64.rpm pgdg 2.1.6 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-aarch64/logerrors_19-2.1.6-1PGDG.rhel10.3.aarch64.rpm
@ d12.x86_64 19 postgresql-19-logerrors postgresql-19-logerrors_2.1.6-1PGSTY~bookworm_amd64.deb pigsty 2.1.6 30.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-19-logerrors_2.1.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-logerrors postgresql-19-logerrors_2.1.6-1PGSTY~bookworm_arm64.deb pigsty 2.1.6 30.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-19-logerrors_2.1.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-logerrors postgresql-19-logerrors_2.1.6-1PGSTY~trixie_amd64.deb pigsty 2.1.6 30.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-19-logerrors_2.1.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-logerrors postgresql-19-logerrors_2.1.6-1PGSTY~trixie_arm64.deb pigsty 2.1.6 30.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-19-logerrors_2.1.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-logerrors postgresql-19-logerrors_2.1.6-1PGSTY~jammy_amd64.deb pigsty 2.1.6 33.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-19-logerrors_2.1.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-logerrors postgresql-19-logerrors_2.1.6-1PGSTY~jammy_arm64.deb pigsty 2.1.6 33.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-19-logerrors_2.1.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-logerrors postgresql-19-logerrors_2.1.6-1PGSTY~noble_amd64.deb pigsty 2.1.6 32.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-19-logerrors_2.1.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-logerrors postgresql-19-logerrors_2.1.6-1PGSTY~noble_arm64.deb pigsty 2.1.6 32.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-19-logerrors_2.1.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-logerrors postgresql-19-logerrors_2.1.6-1PGSTY~resolute_amd64.deb pigsty 2.1.6 32.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logerrors/postgresql-19-logerrors_2.1.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-logerrors postgresql-19-logerrors_2.1.6-1PGSTY~resolute_arm64.deb pigsty 2.1.6 32.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logerrors/postgresql-19-logerrors_2.1.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 logerrors_18 logerrors_18-2.1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.6 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/logerrors_18-2.1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 logerrors_18 logerrors_18-2.1.5-7PGDG.rhel8.10.x86_64.rpm pgdg 2.1.5 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/logerrors_18-2.1.5-7PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 logerrors_18 logerrors_18-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/logerrors_18-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 logerrors_18 logerrors_18-2.1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.6 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/logerrors_18-2.1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 logerrors_18 logerrors_18-2.1.5-7PGDG.rhel8.10.aarch64.rpm pgdg 2.1.5 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/logerrors_18-2.1.5-7PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 logerrors_18 logerrors_18-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/logerrors_18-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 logerrors_18 logerrors_18-2.1.6-1PGDG.rhel9.9.x86_64.rpm pgdg 2.1.6 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/logerrors_18-2.1.6-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 18 logerrors_18 logerrors_18-2.1.5-7PGDG.rhel9.9.x86_64.rpm pgdg 2.1.5 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/logerrors_18-2.1.5-7PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 18 logerrors_18 logerrors_18-2.1.6-1PGDG.rhel9.9.aarch64.rpm pgdg 2.1.6 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/logerrors_18-2.1.6-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 18 logerrors_18 logerrors_18-2.1.5-7PGDG.rhel9.9.aarch64.rpm pgdg 2.1.5 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/logerrors_18-2.1.5-7PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 18 logerrors_18 logerrors_18-2.1.6-1PGDG.rhel10.3.x86_64.rpm pgdg 2.1.6 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/logerrors_18-2.1.6-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 18 logerrors_18 logerrors_18-2.1.5-7PGDG.rhel10.3.x86_64.rpm pgdg 2.1.5 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/logerrors_18-2.1.5-7PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 18 logerrors_18 logerrors_18-2.1.6-1PGDG.rhel10.3.aarch64.rpm pgdg 2.1.6 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/logerrors_18-2.1.6-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 logerrors_18 logerrors_18-2.1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 2.1.6 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/logerrors_18-2.1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 logerrors_18 logerrors_18-2.1.5-7PGDG.rhel10.3.aarch64.rpm pgdg 2.1.5 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/logerrors_18-2.1.5-7PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 logerrors_18 logerrors_18-2.1.5-7PGDG.rhel10.2.aarch64.rpm pgdg 2.1.5 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/logerrors_18-2.1.5-7PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 logerrors_18 logerrors_18-2.1.5-3PGDG.rhel10.2.aarch64.rpm pgdg 2.1.5 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/logerrors_18-2.1.5-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 logerrors_18 logerrors_18-2.1.5-1PGDG.rhel10.aarch64.rpm pgdg 2.1.5 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/logerrors_18-2.1.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.6-1PGSTY~bookworm_amd64.deb pigsty 2.1.6 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-18-logerrors_2.1.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.6-1PGSTY~bookworm_arm64.deb pigsty 2.1.6 30.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-18-logerrors_2.1.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.6-1PGSTY~trixie_amd64.deb pigsty 2.1.6 31.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-18-logerrors_2.1.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.6-1PGSTY~trixie_arm64.deb pigsty 2.1.6 30.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-18-logerrors_2.1.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.6-1PGSTY~jammy_amd64.deb pigsty 2.1.6 33.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-18-logerrors_2.1.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.6-1PGSTY~jammy_arm64.deb pigsty 2.1.6 33.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-18-logerrors_2.1.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.6-1PGSTY~noble_amd64.deb pigsty 2.1.6 32.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-18-logerrors_2.1.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.6-1PGSTY~noble_arm64.deb pigsty 2.1.6 32.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-18-logerrors_2.1.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.6-1PGSTY~resolute_amd64.deb pigsty 2.1.6 32.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logerrors/postgresql-18-logerrors_2.1.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-logerrors postgresql-18-logerrors_2.1.6-1PGSTY~resolute_arm64.deb pigsty 2.1.6 32.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logerrors/postgresql-18-logerrors_2.1.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 logerrors_17 logerrors_17-2.1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.6 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/logerrors_17-2.1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 logerrors_17 logerrors_17-2.1.5-7PGDG.rhel8.10.x86_64.rpm pgdg 2.1.5 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/logerrors_17-2.1.5-7PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 logerrors_17 logerrors_17-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/logerrors_17-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 logerrors_17 logerrors_17-2.1.3-1PGDG.rhel8.x86_64.rpm pgdg 2.1.3 22.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/logerrors_17-2.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 logerrors_17 logerrors_17-2.1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.6 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/logerrors_17-2.1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 logerrors_17 logerrors_17-2.1.5-7PGDG.rhel8.10.aarch64.rpm pgdg 2.1.5 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/logerrors_17-2.1.5-7PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 logerrors_17 logerrors_17-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/logerrors_17-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 logerrors_17 logerrors_17-2.1.3-1PGDG.rhel8.aarch64.rpm pgdg 2.1.3 23.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/logerrors_17-2.1.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 logerrors_17 logerrors_17-2.1.6-1PGDG.rhel9.9.x86_64.rpm pgdg 2.1.6 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/logerrors_17-2.1.6-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 17 logerrors_17 logerrors_17-2.1.5-7PGDG.rhel9.9.x86_64.rpm pgdg 2.1.5 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/logerrors_17-2.1.5-7PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 17 logerrors_17 logerrors_17-2.1.6-1PGDG.rhel9.9.aarch64.rpm pgdg 2.1.6 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/logerrors_17-2.1.6-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 17 logerrors_17 logerrors_17-2.1.5-7PGDG.rhel9.9.aarch64.rpm pgdg 2.1.5 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/logerrors_17-2.1.5-7PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 17 logerrors_17 logerrors_17-2.1.6-1PGDG.rhel10.3.x86_64.rpm pgdg 2.1.6 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/logerrors_17-2.1.6-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 17 logerrors_17 logerrors_17-2.1.5-7PGDG.rhel10.3.x86_64.rpm pgdg 2.1.5 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/logerrors_17-2.1.5-7PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 17 logerrors_17 logerrors_17-2.1.6-1PGDG.rhel10.3.aarch64.rpm pgdg 2.1.6 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/logerrors_17-2.1.6-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 logerrors_17 logerrors_17-2.1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 2.1.6 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/logerrors_17-2.1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 logerrors_17 logerrors_17-2.1.5-7PGDG.rhel10.3.aarch64.rpm pgdg 2.1.5 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/logerrors_17-2.1.5-7PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 logerrors_17 logerrors_17-2.1.5-7PGDG.rhel10.2.aarch64.rpm pgdg 2.1.5 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/logerrors_17-2.1.5-7PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 logerrors_17 logerrors_17-2.1.5-3PGDG.rhel10.2.aarch64.rpm pgdg 2.1.5 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/logerrors_17-2.1.5-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 logerrors_17 logerrors_17-2.1.5-1PGDG.rhel10.aarch64.rpm pgdg 2.1.5 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/logerrors_17-2.1.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 logerrors_17 logerrors_17-2.1.3-2PGDG.rhel10.aarch64.rpm pgdg 2.1.3 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/logerrors_17-2.1.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.6-1PGSTY~bookworm_amd64.deb pigsty 2.1.6 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-17-logerrors_2.1.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.6-1PGSTY~bookworm_arm64.deb pigsty 2.1.6 30.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-17-logerrors_2.1.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.6-1PGSTY~trixie_amd64.deb pigsty 2.1.6 31.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-17-logerrors_2.1.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.6-1PGSTY~trixie_arm64.deb pigsty 2.1.6 30.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-17-logerrors_2.1.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.6-1PGSTY~jammy_amd64.deb pigsty 2.1.6 38.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-17-logerrors_2.1.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.6-1PGSTY~jammy_arm64.deb pigsty 2.1.6 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-17-logerrors_2.1.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.6-1PGSTY~noble_amd64.deb pigsty 2.1.6 32.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-17-logerrors_2.1.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.6-1PGSTY~noble_arm64.deb pigsty 2.1.6 32.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-17-logerrors_2.1.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.6-1PGSTY~resolute_amd64.deb pigsty 2.1.6 32.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logerrors/postgresql-17-logerrors_2.1.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-logerrors postgresql-17-logerrors_2.1.6-1PGSTY~resolute_arm64.deb pigsty 2.1.6 32.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logerrors/postgresql-17-logerrors_2.1.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 logerrors_16 logerrors_16-2.1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.6 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/logerrors_16-2.1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 logerrors_16 logerrors_16-2.1.5-7PGDG.rhel8.10.x86_64.rpm pgdg 2.1.5 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/logerrors_16-2.1.5-7PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 logerrors_16 logerrors_16-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/logerrors_16-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 logerrors_16 logerrors_16-2.1.3-1PGDG.rhel8.x86_64.rpm pgdg 2.1.3 22.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/logerrors_16-2.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 logerrors_16 logerrors_16-2.1.2-1.rhel8.x86_64.rpm pgdg 2.1.2 22.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/logerrors_16-2.1.2-1.rhel8.x86_64.rpm
@ el8.aarch64 16 logerrors_16 logerrors_16-2.1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.6 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/logerrors_16-2.1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 logerrors_16 logerrors_16-2.1.5-7PGDG.rhel8.10.aarch64.rpm pgdg 2.1.5 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/logerrors_16-2.1.5-7PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 logerrors_16 logerrors_16-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/logerrors_16-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 logerrors_16 logerrors_16-2.1.3-1PGDG.rhel8.aarch64.rpm pgdg 2.1.3 23.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/logerrors_16-2.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 logerrors_16 logerrors_16-2.1.2-1.rhel8.aarch64.rpm pgdg 2.1.2 22.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/logerrors_16-2.1.2-1.rhel8.aarch64.rpm
@ el9.x86_64 16 logerrors_16 logerrors_16-2.1.6-1PGDG.rhel9.9.x86_64.rpm pgdg 2.1.6 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/logerrors_16-2.1.6-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 16 logerrors_16 logerrors_16-2.1.5-7PGDG.rhel9.9.x86_64.rpm pgdg 2.1.5 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/logerrors_16-2.1.5-7PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 16 logerrors_16 logerrors_16-2.1.6-1PGDG.rhel9.9.aarch64.rpm pgdg 2.1.6 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/logerrors_16-2.1.6-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 16 logerrors_16 logerrors_16-2.1.5-7PGDG.rhel9.9.aarch64.rpm pgdg 2.1.5 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/logerrors_16-2.1.5-7PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 16 logerrors_16 logerrors_16-2.1.6-1PGDG.rhel10.3.x86_64.rpm pgdg 2.1.6 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/logerrors_16-2.1.6-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 16 logerrors_16 logerrors_16-2.1.5-7PGDG.rhel10.3.x86_64.rpm pgdg 2.1.5 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/logerrors_16-2.1.5-7PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 16 logerrors_16 logerrors_16-2.1.6-1PGDG.rhel10.3.aarch64.rpm pgdg 2.1.6 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/logerrors_16-2.1.6-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 logerrors_16 logerrors_16-2.1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 2.1.6 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/logerrors_16-2.1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 logerrors_16 logerrors_16-2.1.5-7PGDG.rhel10.3.aarch64.rpm pgdg 2.1.5 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/logerrors_16-2.1.5-7PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 logerrors_16 logerrors_16-2.1.5-7PGDG.rhel10.2.aarch64.rpm pgdg 2.1.5 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/logerrors_16-2.1.5-7PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 logerrors_16 logerrors_16-2.1.5-3PGDG.rhel10.2.aarch64.rpm pgdg 2.1.5 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/logerrors_16-2.1.5-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 logerrors_16 logerrors_16-2.1.5-1PGDG.rhel10.aarch64.rpm pgdg 2.1.5 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/logerrors_16-2.1.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 logerrors_16 logerrors_16-2.1.3-2PGDG.rhel10.aarch64.rpm pgdg 2.1.3 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/logerrors_16-2.1.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.6-1PGSTY~bookworm_amd64.deb pigsty 2.1.6 30.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-16-logerrors_2.1.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.6-1PGSTY~bookworm_arm64.deb pigsty 2.1.6 30.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-16-logerrors_2.1.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.6-1PGSTY~trixie_amd64.deb pigsty 2.1.6 31.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-16-logerrors_2.1.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.6-1PGSTY~trixie_arm64.deb pigsty 2.1.6 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-16-logerrors_2.1.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.6-1PGSTY~jammy_amd64.deb pigsty 2.1.6 38.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-16-logerrors_2.1.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.6-1PGSTY~jammy_arm64.deb pigsty 2.1.6 36.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-16-logerrors_2.1.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.6-1PGSTY~noble_amd64.deb pigsty 2.1.6 32.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-16-logerrors_2.1.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.6-1PGSTY~noble_arm64.deb pigsty 2.1.6 32.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-16-logerrors_2.1.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.6-1PGSTY~resolute_amd64.deb pigsty 2.1.6 32.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logerrors/postgresql-16-logerrors_2.1.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-logerrors postgresql-16-logerrors_2.1.6-1PGSTY~resolute_arm64.deb pigsty 2.1.6 32.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logerrors/postgresql-16-logerrors_2.1.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.6 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1.5-7PGDG.rhel8.10.x86_64.rpm pgdg 2.1.5 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1.5-7PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1.5-1PGDG.rhel8.x86_64.rpm pgdg 2.1.5 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1.3-1PGDG.rhel8.x86_64.rpm pgdg 2.1.3 23.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1.2-1.rhel8.x86_64.rpm pgdg 2.1.2 22.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1-2.rhel8.x86_64.rpm pgdg 2.1 21.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1-2.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.1-1.rhel8.x86_64.rpm pgdg 2.1 20.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.0-2.rhel8.x86_64.rpm pgdg 2.0 19.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.0-2.rhel8.x86_64.rpm
@ el8.x86_64 15 logerrors_15 logerrors_15-2.0-1.rhel8.x86_64.rpm pgdg 2.0 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/logerrors_15-2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.6 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1.5-7PGDG.rhel8.10.aarch64.rpm pgdg 2.1.5 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1.5-7PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1.5-1PGDG.rhel8.aarch64.rpm pgdg 2.1.5 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1.3-1PGDG.rhel8.aarch64.rpm pgdg 2.1.3 23.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1.2-1.rhel8.aarch64.rpm pgdg 2.1.2 22.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1-2.rhel8.aarch64.rpm pgdg 2.1 21.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1-2.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.1-1.rhel8.aarch64.rpm pgdg 2.1 20.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.0-2.rhel8.aarch64.rpm pgdg 2.0 19.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.0-2.rhel8.aarch64.rpm
@ el8.aarch64 15 logerrors_15 logerrors_15-2.0-1.rhel8.aarch64.rpm pgdg 2.0 41.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/logerrors_15-2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 logerrors_15 logerrors_15-2.1.6-1PGDG.rhel9.9.x86_64.rpm pgdg 2.1.6 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/logerrors_15-2.1.6-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 15 logerrors_15 logerrors_15-2.1.5-7PGDG.rhel9.9.x86_64.rpm pgdg 2.1.5 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/logerrors_15-2.1.5-7PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 15 logerrors_15 logerrors_15-2.1.6-1PGDG.rhel9.9.aarch64.rpm pgdg 2.1.6 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/logerrors_15-2.1.6-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 15 logerrors_15 logerrors_15-2.1.5-7PGDG.rhel9.9.aarch64.rpm pgdg 2.1.5 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/logerrors_15-2.1.5-7PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 15 logerrors_15 logerrors_15-2.1.6-1PGDG.rhel10.3.x86_64.rpm pgdg 2.1.6 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/logerrors_15-2.1.6-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 15 logerrors_15 logerrors_15-2.1.5-7PGDG.rhel10.3.x86_64.rpm pgdg 2.1.5 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/logerrors_15-2.1.5-7PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 15 logerrors_15 logerrors_15-2.1.6-1PGDG.rhel10.3.aarch64.rpm pgdg 2.1.6 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/logerrors_15-2.1.6-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 15 logerrors_15 logerrors_15-2.1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 2.1.6 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/logerrors_15-2.1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 logerrors_15 logerrors_15-2.1.5-7PGDG.rhel10.3.aarch64.rpm pgdg 2.1.5 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/logerrors_15-2.1.5-7PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 15 logerrors_15 logerrors_15-2.1.5-7PGDG.rhel10.2.aarch64.rpm pgdg 2.1.5 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/logerrors_15-2.1.5-7PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 logerrors_15 logerrors_15-2.1.5-3PGDG.rhel10.2.aarch64.rpm pgdg 2.1.5 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/logerrors_15-2.1.5-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 logerrors_15 logerrors_15-2.1.5-1PGDG.rhel10.aarch64.rpm pgdg 2.1.5 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/logerrors_15-2.1.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 logerrors_15 logerrors_15-2.1.3-2PGDG.rhel10.aarch64.rpm pgdg 2.1.3 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/logerrors_15-2.1.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.6-1PGSTY~bookworm_amd64.deb pigsty 2.1.6 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-15-logerrors_2.1.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.6-1PGSTY~bookworm_arm64.deb pigsty 2.1.6 30.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logerrors/postgresql-15-logerrors_2.1.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.6-1PGSTY~trixie_amd64.deb pigsty 2.1.6 31.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-15-logerrors_2.1.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.6-1PGSTY~trixie_arm64.deb pigsty 2.1.6 30.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logerrors/postgresql-15-logerrors_2.1.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.6-1PGSTY~jammy_amd64.deb pigsty 2.1.6 38.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-15-logerrors_2.1.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.6-1PGSTY~jammy_arm64.deb pigsty 2.1.6 36.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logerrors/postgresql-15-logerrors_2.1.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.6-1PGSTY~noble_amd64.deb pigsty 2.1.6 32.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-15-logerrors_2.1.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.6-1PGSTY~noble_arm64.deb pigsty 2.1.6 32.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logerrors/postgresql-15-logerrors_2.1.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.6-1PGSTY~resolute_amd64.deb pigsty 2.1.6 32.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logerrors/postgresql-15-logerrors_2.1.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-logerrors postgresql-15-logerrors_2.1.6-1PGSTY~resolute_arm64.deb pigsty 2.1.6 32.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logerrors/postgresql-15-logerrors_2.1.6-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install logerrors;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y logerrors -v 19  # PG 19
pig ext install -y logerrors -v 18  # PG 18
pig ext install -y logerrors -v 17  # PG 17
pig ext install -y logerrors -v 16  # PG 16
pig ext install -y logerrors -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y logerrors_19       # PG 19
dnf install -y logerrors_18       # PG 18
dnf install -y logerrors_17       # PG 17
dnf install -y logerrors_16       # PG 16
dnf install -y logerrors_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-logerrors   # PG 19
apt install -y postgresql-18-logerrors   # PG 18
apt install -y postgresql-17-logerrors   # PG 17
apt install -y postgresql-16-logerrors   # PG 16
apt install -y postgresql-15-logerrors   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'logerrors';
```


**创建扩展**：

```sql
CREATE EXTENSION logerrors;
```

## 用法

来源：

- [Official source](https://github.com/munakoiso/logerrors/blob/v2.1.6/README.md)
- [Official source](https://github.com/munakoiso/logerrors/blob/v2.1.6/logerrors.control)
- [Official source](https://github.com/munakoiso/logerrors/releases/tag/v2.1.6)

`logerrors` 通过服务端钩子收集 WARNING、ERROR 和 FATAL 消息计数。2.1.6 修复 PostgreSQL 19 的 ABI/构建兼容问题，SQL 扩展版本仍为 2.1。

### 启用与查询

将库加入已有预加载列表，重启 PostgreSQL，然后创建 SQL 扩展：

```ini
shared_preload_libraries = 'logerrors'
```

```sql
CREATE EXTENSION logerrors;
SELECT * FROM pg_log_errors_stats();
SELECT * FROM pg_slow_log_stats();
SELECT pg_log_errors_reset();
```

`pg_log_errors_stats()` 返回统计区间、消息类型、计数、角色/数据库名称及 SQLSTATE。`pg_slow_log_stats()` 返回慢日志计数和重置时间；`pg_log_errors_reset()` 重置统计。

### 配置

`logerrors.interval` 以毫秒控制统计间隔，默认 5000、最大 60000。`logerrors.intervals_count` 默认保留 120 个区间，最多 360 个。`logerrors.excluded_errcodes` 接受逗号分隔的错误码。

这些是有限的内存统计，并非持久审计档案。应按数据库策略限制运行信息的访问。由于库在启动时预加载，替换库后需要重启；单凭 SQL extversion 2.1 无法识别运行库是否包含 2.1.6 修复。

---
title: "pg_tle"
linkTitle: "pg_tle"
description: "AWS 可信语言扩展"
weight: 3000
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/aws/pg_tle">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">aws/pg_tle</div>
    <div class="ext-card__desc">https://github.com/aws/pg_tle</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_tle-1.5.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_tle-1.5.3.tar.gz</div>
    <div class="ext-card__desc">pg_tle-1.5.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_tle`**](/ext/e/pg_tle) | `1.5.3` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3000  | [**`pg_tle`**](/ext/e/pg_tle) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgtle` |
{.ext-table}

| **相关扩展** | [`plv8`](/ext/e/plv8) [`pljs`](/ext/e/pljs) [`pgwasm`](/ext/e/pgwasm) [`pllua`](/ext/e/pllua) [`pg_extension_base`](/ext/e/pg_extension_base) [`pgextwlist`](/ext/e/pgextwlist) [`pg_readme`](/ext/e/pg_readme) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Preload/restart; build needs flex; RPM 1.5.3, indexed DEB 1.5.2, recipe 1.5.3; PG19 beta.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_tle` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_tle_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-tle` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.5.3 3 | AVAIL PGDG 1.5.3 5 | AVAIL PGDG 1.5.3 5 | AVAIL PGDG 1.5.3 5 | AVAIL PGDG 1.5.3 5 |
| el8.aarch64 | AVAIL PGDG 1.5.3 3 | AVAIL PGDG 1.5.3 5 | AVAIL PGDG 1.5.3 5 | AVAIL PGDG 1.5.3 5 | AVAIL PGDG 1.5.3 5 |
| el9.x86_64 | AVAIL PGDG 1.5.3 4 | AVAIL PGDG 1.5.3 6 | AVAIL PGDG 1.5.3 6 | AVAIL PGDG 1.5.3 6 | AVAIL PGDG 1.5.3 6 |
| el9.aarch64 | AVAIL PGDG 1.5.3 4 | AVAIL PGDG 1.5.3 6 | AVAIL PGDG 1.5.3 6 | AVAIL PGDG 1.5.3 6 | AVAIL PGDG 1.5.3 6 |
| el10.x86_64 | AVAIL PGDG 1.5.3 4 | AVAIL PGDG 1.5.3 4 | AVAIL PGDG 1.5.3 4 | AVAIL PGDG 1.5.3 4 | AVAIL PGDG 1.5.3 4 |
| el10.aarch64 | AVAIL PGDG 1.5.2 3 | AVAIL PGDG 1.5.2 3 | AVAIL PGDG 1.5.2 3 | AVAIL PGDG 1.5.2 3 | AVAIL PGDG 1.5.2 3 |
| d12.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| u26.x86_64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
| u26.aarch64 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 | AVAIL PIGSTY 1.5.2 1 |
@ el8.x86_64 18 pg_tle_18 pg_tle_18-1.5.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.5.3 71.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_tle_18-1.5.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 68.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tle_18-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel8.x86_64.rpm pgdg 1.5.2 68.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_tle_18-1.5.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_tle_18 pg_tle_18-1.5.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.5.3 67.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_tle_18-1.5.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 65.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tle_18-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel8.aarch64.rpm pgdg 1.5.2 65.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_tle_18-1.5.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_tle_18 pg_tle_18-1.5.3-1PGDG.rhel9.8.x86_64.rpm pgdg 1.5.3 67.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_tle_18-1.5.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-3PGDG.rhel9.8.x86_64.rpm pgdg 1.5.2 65.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_tle_18-1.5.2-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 63.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tle_18-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel9.x86_64.rpm pgdg 1.5.2 65.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_tle_18-1.5.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_tle_18 pg_tle_18-1.5.3-1PGDG.rhel9.8.aarch64.rpm pgdg 1.5.3 64.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_tle_18-1.5.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-3PGDG.rhel9.8.aarch64.rpm pgdg 1.5.2 62.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_tle_18-1.5.2-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 59.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tle_18-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel9.aarch64.rpm pgdg 1.5.2 62.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_tle_18-1.5.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_tle_18 pg_tle_18-1.5.3-1PGDG.rhel10.2.x86_64.rpm pgdg 1.5.3 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_tle_18-1.5.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-3PGDG.rhel10.2.x86_64.rpm pgdg 1.5.2 65.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_tle_18-1.5.2-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 63.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tle_18-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel10.x86_64.rpm pgdg 1.5.2 65.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_tle_18-1.5.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-3PGDG.rhel10.2.aarch64.rpm pgdg 1.5.2 63.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_tle_18-1.5.2-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 60.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tle_18-1.5.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_tle_18 pg_tle_18-1.5.2-1PGDG.rhel10.aarch64.rpm pgdg 1.5.2 63.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_tle_18-1.5.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb pigsty 1.5.2 159.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb pigsty 1.5.2 155.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb pigsty 1.5.2 160.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb pigsty 1.5.2 155.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb pigsty 1.5.2 168.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb pigsty 1.5.2 165.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb pigsty 1.5.2 162.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb pigsty 1.5.2 159.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~resolute_amd64.deb pigsty 1.5.2 160.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-tle postgresql-18-pg-tle_1.5.2-1PIGSTY~resolute_arm64.deb pigsty 1.5.2 158.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tle/postgresql-18-pg-tle_1.5.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_tle_17 pg_tle_17-1.5.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.5.3 71.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_tle_17-1.5.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 68.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tle_17-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel8.x86_64.rpm pgdg 1.5.1 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_tle_17-1.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_tle_17 pg_tle_17-1.5.0-1PGDG.rhel8.x86_64.rpm pgdg 1.5.0 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_tle_17-1.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_tle_17 pg_tle_17-1.2.0-2PGDG.rhel8.x86_64.rpm pgdg 1.2.0 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_tle_17-1.2.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_tle_17 pg_tle_17-1.5.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.5.3 67.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_tle_17-1.5.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 65.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tle_17-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel8.aarch64.rpm pgdg 1.5.1 64.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_tle_17-1.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_tle_17 pg_tle_17-1.5.0-1PGDG.rhel8.aarch64.rpm pgdg 1.5.0 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_tle_17-1.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_tle_17 pg_tle_17-1.2.0-2PGDG.rhel8.aarch64.rpm pgdg 1.2.0 59.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_tle_17-1.2.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_tle_17 pg_tle_17-1.5.3-1PGDG.rhel9.8.x86_64.rpm pgdg 1.5.3 67.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_tle_17-1.5.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_tle_17 pg_tle_17-1.5.2-3PGDG.rhel9.8.x86_64.rpm pgdg 1.5.2 65.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_tle_17-1.5.2-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 63.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tle_17-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel9.x86_64.rpm pgdg 1.5.1 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_tle_17-1.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_tle_17 pg_tle_17-1.5.0-1PGDG.rhel9.x86_64.rpm pgdg 1.5.0 64.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_tle_17-1.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_tle_17 pg_tle_17-1.2.0-2PGDG.rhel9.x86_64.rpm pgdg 1.2.0 59.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_tle_17-1.2.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_tle_17 pg_tle_17-1.5.3-1PGDG.rhel9.8.aarch64.rpm pgdg 1.5.3 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_tle_17-1.5.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_tle_17 pg_tle_17-1.5.2-3PGDG.rhel9.8.aarch64.rpm pgdg 1.5.2 62.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_tle_17-1.5.2-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 60.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tle_17-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel9.aarch64.rpm pgdg 1.5.1 61.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_tle_17-1.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_tle_17 pg_tle_17-1.5.0-1PGDG.rhel9.aarch64.rpm pgdg 1.5.0 61.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_tle_17-1.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_tle_17 pg_tle_17-1.2.0-2PGDG.rhel9.aarch64.rpm pgdg 1.2.0 56.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_tle_17-1.2.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_tle_17 pg_tle_17-1.5.3-1PGDG.rhel10.2.x86_64.rpm pgdg 1.5.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_tle_17-1.5.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_tle_17 pg_tle_17-1.5.2-3PGDG.rhel10.2.x86_64.rpm pgdg 1.5.2 65.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_tle_17-1.5.2-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 63.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tle_17-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel10.x86_64.rpm pgdg 1.5.1 65.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_tle_17-1.5.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_tle_17 pg_tle_17-1.5.2-3PGDG.rhel10.2.aarch64.rpm pgdg 1.5.2 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_tle_17-1.5.2-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_tle_17 pg_tle_17-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 60.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tle_17-1.5.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_tle_17 pg_tle_17-1.5.1-1PGDG.rhel10.aarch64.rpm pgdg 1.5.1 62.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_tle_17-1.5.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb pigsty 1.5.2 159.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb pigsty 1.5.2 154.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb pigsty 1.5.2 159.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb pigsty 1.5.2 155.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb pigsty 1.5.2 183.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb pigsty 1.5.2 179.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb pigsty 1.5.2 162.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb pigsty 1.5.2 159.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~resolute_amd64.deb pigsty 1.5.2 160.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-tle postgresql-17-pg-tle_1.5.2-1PIGSTY~resolute_arm64.deb pigsty 1.5.2 158.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tle/postgresql-17-pg-tle_1.5.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_tle_16 pg_tle_16-1.5.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.5.3 71.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_tle_16-1.5.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 68.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tle_16-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel8.x86_64.rpm pgdg 1.5.1 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_tle_16-1.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_tle_16 pg_tle_16-1.5.0-1PGDG.rhel8.x86_64.rpm pgdg 1.5.0 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_tle_16-1.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_tle_16 pg_tle_16-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 63.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_tle_16-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_tle_16 pg_tle_16-1.5.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.5.3 67.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_tle_16-1.5.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 65.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tle_16-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel8.aarch64.rpm pgdg 1.5.1 64.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_tle_16-1.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_tle_16 pg_tle_16-1.5.0-1PGDG.rhel8.aarch64.rpm pgdg 1.5.0 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_tle_16-1.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_tle_16 pg_tle_16-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 59.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_tle_16-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_tle_16 pg_tle_16-1.5.3-1PGDG.rhel9.8.x86_64.rpm pgdg 1.5.3 67.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_tle_16-1.5.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_tle_16 pg_tle_16-1.5.2-3PGDG.rhel9.8.x86_64.rpm pgdg 1.5.2 65.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_tle_16-1.5.2-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 63.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tle_16-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel9.x86_64.rpm pgdg 1.5.1 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_tle_16-1.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_tle_16 pg_tle_16-1.5.0-1PGDG.rhel9.x86_64.rpm pgdg 1.5.0 64.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_tle_16-1.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_tle_16 pg_tle_16-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 59.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_tle_16-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_tle_16 pg_tle_16-1.5.3-1PGDG.rhel9.8.aarch64.rpm pgdg 1.5.3 64.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_tle_16-1.5.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_tle_16 pg_tle_16-1.5.2-3PGDG.rhel9.8.aarch64.rpm pgdg 1.5.2 62.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_tle_16-1.5.2-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 60.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tle_16-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel9.aarch64.rpm pgdg 1.5.1 61.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_tle_16-1.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_tle_16 pg_tle_16-1.5.0-1PGDG.rhel9.aarch64.rpm pgdg 1.5.0 61.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_tle_16-1.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_tle_16 pg_tle_16-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 56.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_tle_16-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_tle_16 pg_tle_16-1.5.3-1PGDG.rhel10.2.x86_64.rpm pgdg 1.5.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_tle_16-1.5.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_tle_16 pg_tle_16-1.5.2-3PGDG.rhel10.2.x86_64.rpm pgdg 1.5.2 65.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_tle_16-1.5.2-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 63.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tle_16-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel10.x86_64.rpm pgdg 1.5.1 65.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_tle_16-1.5.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_tle_16 pg_tle_16-1.5.2-3PGDG.rhel10.2.aarch64.rpm pgdg 1.5.2 63.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_tle_16-1.5.2-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_tle_16 pg_tle_16-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 60.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tle_16-1.5.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_tle_16 pg_tle_16-1.5.1-1PGDG.rhel10.aarch64.rpm pgdg 1.5.1 62.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_tle_16-1.5.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb pigsty 1.5.2 159.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb pigsty 1.5.2 155.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb pigsty 1.5.2 160.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb pigsty 1.5.2 155.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb pigsty 1.5.2 183.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb pigsty 1.5.2 179.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb pigsty 1.5.2 162.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb pigsty 1.5.2 159.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~resolute_amd64.deb pigsty 1.5.2 160.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-tle postgresql-16-pg-tle_1.5.2-1PIGSTY~resolute_arm64.deb pigsty 1.5.2 158.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tle/postgresql-16-pg-tle_1.5.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_tle_15 pg_tle_15-1.5.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.5.3 72.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_tle_15-1.5.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 69.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tle_15-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel8.x86_64.rpm pgdg 1.5.1 69.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_tle_15-1.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_tle_15 pg_tle_15-1.5.0-1PGDG.rhel8.x86_64.rpm pgdg 1.5.0 69.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_tle_15-1.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_tle_15 pg_tle_15-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 63.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_tle_15-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_tle_15 pg_tle_15-1.5.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.5.3 68.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_tle_15-1.5.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 66.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tle_15-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel8.aarch64.rpm pgdg 1.5.1 65.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_tle_15-1.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_tle_15 pg_tle_15-1.5.0-1PGDG.rhel8.aarch64.rpm pgdg 1.5.0 65.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_tle_15-1.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_tle_15 pg_tle_15-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 60.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_tle_15-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_tle_15 pg_tle_15-1.5.3-1PGDG.rhel9.8.x86_64.rpm pgdg 1.5.3 73.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_tle_15-1.5.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_tle_15 pg_tle_15-1.5.2-3PGDG.rhel9.8.x86_64.rpm pgdg 1.5.2 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_tle_15-1.5.2-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 69.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tle_15-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel9.x86_64.rpm pgdg 1.5.1 70.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_tle_15-1.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_tle_15 pg_tle_15-1.5.0-1PGDG.rhel9.x86_64.rpm pgdg 1.5.0 70.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_tle_15-1.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_tle_15 pg_tle_15-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 65.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_tle_15-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_tle_15 pg_tle_15-1.5.3-1PGDG.rhel9.8.aarch64.rpm pgdg 1.5.3 71.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_tle_15-1.5.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_tle_15 pg_tle_15-1.5.2-3PGDG.rhel9.8.aarch64.rpm pgdg 1.5.2 68.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_tle_15-1.5.2-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 66.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tle_15-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel9.aarch64.rpm pgdg 1.5.1 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_tle_15-1.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_tle_15 pg_tle_15-1.5.0-1PGDG.rhel9.aarch64.rpm pgdg 1.5.0 67.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_tle_15-1.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_tle_15 pg_tle_15-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 62.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_tle_15-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_tle_15 pg_tle_15-1.5.3-1PGDG.rhel10.2.x86_64.rpm pgdg 1.5.3 74.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_tle_15-1.5.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_tle_15 pg_tle_15-1.5.2-3PGDG.rhel10.2.x86_64.rpm pgdg 1.5.2 72.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_tle_15-1.5.2-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 69.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tle_15-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel10.x86_64.rpm pgdg 1.5.1 71.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_tle_15-1.5.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_tle_15 pg_tle_15-1.5.2-3PGDG.rhel10.2.aarch64.rpm pgdg 1.5.2 69.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_tle_15-1.5.2-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_tle_15 pg_tle_15-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 67.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tle_15-1.5.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_tle_15 pg_tle_15-1.5.1-1PGDG.rhel10.aarch64.rpm pgdg 1.5.1 68.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_tle_15-1.5.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb pigsty 1.5.2 161.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb pigsty 1.5.2 156.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb pigsty 1.5.2 161.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb pigsty 1.5.2 156.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb pigsty 1.5.2 189.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb pigsty 1.5.2 186.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb pigsty 1.5.2 168.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb pigsty 1.5.2 166.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~resolute_amd64.deb pigsty 1.5.2 167.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-tle postgresql-15-pg-tle_1.5.2-1PIGSTY~resolute_arm64.deb pigsty 1.5.2 164.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tle/postgresql-15-pg-tle_1.5.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_tle_14 pg_tle_14-1.5.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.5.3 72.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_tle_14-1.5.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el8.x86_64.rpm pigsty 1.5.2 70.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tle_14-1.5.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel8.x86_64.rpm pgdg 1.5.1 69.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_tle_14-1.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_tle_14 pg_tle_14-1.5.0-1PGDG.rhel8.x86_64.rpm pgdg 1.5.0 69.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_tle_14-1.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_tle_14 pg_tle_14-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 64.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_tle_14-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_tle_14 pg_tle_14-1.5.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.5.3 68.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_tle_14-1.5.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el8.aarch64.rpm pigsty 1.5.2 66.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tle_14-1.5.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel8.aarch64.rpm pgdg 1.5.1 65.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_tle_14-1.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_tle_14 pg_tle_14-1.5.0-1PGDG.rhel8.aarch64.rpm pgdg 1.5.0 65.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_tle_14-1.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_tle_14 pg_tle_14-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 60.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_tle_14-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_tle_14 pg_tle_14-1.5.3-1PGDG.rhel9.8.x86_64.rpm pgdg 1.5.3 74.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_tle_14-1.5.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_tle_14 pg_tle_14-1.5.2-3PGDG.rhel9.8.x86_64.rpm pgdg 1.5.2 71.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_tle_14-1.5.2-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el9.x86_64.rpm pigsty 1.5.2 69.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tle_14-1.5.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel9.x86_64.rpm pgdg 1.5.1 70.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_tle_14-1.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_tle_14 pg_tle_14-1.5.0-1PGDG.rhel9.x86_64.rpm pgdg 1.5.0 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_tle_14-1.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_tle_14 pg_tle_14-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 65.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_tle_14-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_tle_14 pg_tle_14-1.5.3-1PGDG.rhel9.8.aarch64.rpm pgdg 1.5.3 70.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_tle_14-1.5.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_tle_14 pg_tle_14-1.5.2-3PGDG.rhel9.8.aarch64.rpm pgdg 1.5.2 68.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_tle_14-1.5.2-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el9.aarch64.rpm pigsty 1.5.2 66.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tle_14-1.5.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel9.aarch64.rpm pgdg 1.5.1 68.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_tle_14-1.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_tle_14 pg_tle_14-1.5.0-1PGDG.rhel9.aarch64.rpm pgdg 1.5.0 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_tle_14-1.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_tle_14 pg_tle_14-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 62.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_tle_14-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_tle_14 pg_tle_14-1.5.3-1PGDG.rhel10.2.x86_64.rpm pgdg 1.5.3 75.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_tle_14-1.5.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_tle_14 pg_tle_14-1.5.2-3PGDG.rhel10.2.x86_64.rpm pgdg 1.5.2 72.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_tle_14-1.5.2-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el10.x86_64.rpm pigsty 1.5.2 70.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tle_14-1.5.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel10.x86_64.rpm pgdg 1.5.1 71.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_tle_14-1.5.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_tle_14 pg_tle_14-1.5.2-3PGDG.rhel10.2.aarch64.rpm pgdg 1.5.2 69.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_tle_14-1.5.2-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_tle_14 pg_tle_14-1.5.2-1PIGSTY.el10.aarch64.rpm pigsty 1.5.2 67.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tle_14-1.5.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_tle_14 pg_tle_14-1.5.1-1PGDG.rhel10.aarch64.rpm pgdg 1.5.1 69.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_tle_14-1.5.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb pigsty 1.5.2 162.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb pigsty 1.5.2 156.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb pigsty 1.5.2 162.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb pigsty 1.5.2 157.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb pigsty 1.5.2 189.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb pigsty 1.5.2 186.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb pigsty 1.5.2 169.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb pigsty 1.5.2 167.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~resolute_amd64.deb pigsty 1.5.2 167.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-tle postgresql-14-pg-tle_1.5.2-1PIGSTY~resolute_arm64.deb pigsty 1.5.2 165.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tle/postgresql-14-pg-tle_1.5.2-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_tle` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_tle         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_tle` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_tle;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_tle -v 18  # PG 18
pig ext install -y pg_tle -v 17  # PG 17
pig ext install -y pg_tle -v 16  # PG 16
pig ext install -y pg_tle -v 15  # PG 15
pig ext install -y pg_tle -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_tle_18       # PG 18
dnf install -y pg_tle_17       # PG 17
dnf install -y pg_tle_16       # PG 16
dnf install -y pg_tle_15       # PG 15
dnf install -y pg_tle_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-tle   # PG 18
apt install -y postgresql-17-pg-tle   # PG 17
apt install -y postgresql-16-pg-tle   # PG 16
apt install -y postgresql-15-pg-tle   # PG 15
apt install -y postgresql-14-pg-tle   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_tle';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_tle;
```

## 用法

来源：

- [README.md](https://github.com/aws/pg_tle/blob/6340fd2ef19a806dc0f2588d6aec10a0a12f7e8b/README.md)
- [pg_tle.control.in](https://github.com/aws/pg_tle/blob/6340fd2ef19a806dc0f2588d6aec10a0a12f7e8b/pg_tle.control.in)
- [pg_tle--1.5.2--1.5.3.sql](https://github.com/aws/pg_tle/blob/6340fd2ef19a806dc0f2588d6aec10a0a12f7e8b/pg_tle--1.5.2--1.5.3.sql)

`pg_tle` 1.5.3 管理以 PostgreSQL 可信语言编写的扩展。原生组件安装需要共享预加载和服务器重启，之后的 TLE 定义存储在数据库中。上游文档支持 PostgreSQL 12 至 19 Beta 4。

### 核心用法

```ini
shared_preload_libraries = 'pg_tle'
```

```sql
CREATE EXTENSION pg_tle;
SELECT pgtle.available_extensions();
```

### 运行边界

`pgtle.install_extension()` 存储扩展定义，`CREATE EXTENSION` 在数据库中启用它。`pgtle.install_update_path()` 与 `pgtle.set_default_version()` 管理版本，`pgtle.available_extensions()` 列出定义。1.5.3 新增 `pgtle.set_extension_schema()` 设置受管扩展的模式元数据，并收紧标识符校验。TLE 管理由 `pgtle_admin` 限制，已安装扩展的执行仍遵循 PostgreSQL 语言和对象权限。删除已启用扩展与卸载其 TLE 定义是两个独立操作。仅使用可信扩展代码，并审查依赖与升级 SQL。

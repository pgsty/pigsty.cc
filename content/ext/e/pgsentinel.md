---
title: "pgsentinel"
linkTitle: "pgsentinel"
description: "活跃会话历史"
weight: 6410
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgsentinel/pgsentinel">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgsentinel/pgsentinel</div>
    <div class="ext-card__desc">https://github.com/pgsentinel/pgsentinel</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgsentinel-1.4.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsentinel-1.4.2.tar.gz</div>
    <div class="ext-card__desc">pgsentinel-1.4.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgsentinel`**](/ext/e/pgsentinel) | `1.4.2` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6410  | [**`pgsentinel`**](/ext/e/pgsentinel) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`system_stats`](/ext/e/system_stats) [`pgnodemx`](/ext/e/pgnodemx) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_wait_sampling`](/ext/e/pg_wait_sampling) [`bgw_replstatus`](/ext/e/bgw_replstatus) [`pg_profile`](/ext/e/pg_profile) [`pg_proctab`](/ext/e/pg_proctab) [`powa`](/ext/e/powa) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Package/source release and PIGSTY RPM are 1.4.2; shipped pgsentinel.control and PGDG DEB remain 1.4.1.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.4.2` | {{< pgvers "18,17,16,15,14" >}} | `pgsentinel` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.2` | {{< pgvers "18,17,16,15,14" >}} | `pgsentinel_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgsentinel` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 4 | AVAIL PIGSTY 1.4.2 4 | AVAIL PIGSTY 1.4.2 4 | AVAIL PIGSTY 1.4.2 4 |
| el8.aarch64 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 4 | AVAIL PIGSTY 1.4.2 4 | AVAIL PIGSTY 1.4.2 4 | AVAIL PIGSTY 1.4.2 4 |
| el9.x86_64 | AVAIL PIGSTY 1.4.2 6 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 |
| el9.aarch64 | AVAIL PIGSTY 1.4.2 6 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 |
| el10.x86_64 | AVAIL PIGSTY 1.4.2 6 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 |
| el10.aarch64 | AVAIL PIGSTY 1.4.2 6 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 |
| d12.x86_64 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 |
| d12.aarch64 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 |
| d13.x86_64 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 |
| d13.aarch64 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 |
| u22.x86_64 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 |
| u22.aarch64 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 |
| u24.x86_64 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 |
| u24.aarch64 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 |
| u26.x86_64 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 |
| u26.aarch64 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 | AVAIL PGDG 1.4.2 4 |
@ el8.x86_64 18 pgsentinel_18 pgsentinel_18-1.4.2-1PIGSTY.el8.x86_64.rpm pigsty 1.4.2 23.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsentinel_18-1.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pgsentinel_18 pgsentinel_18-1.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgsentinel_18-1.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgsentinel_18 pgsentinel_18-1.3.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3.1 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgsentinel_18-1.3.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 pgsentinel_18 pgsentinel_18-1.4.2-1PIGSTY.el8.aarch64.rpm pigsty 1.4.2 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsentinel_18-1.4.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pgsentinel_18 pgsentinel_18-1.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgsentinel_18-1.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgsentinel_18 pgsentinel_18-1.3.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3.1 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgsentinel_18-1.3.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 pgsentinel_18 pgsentinel_18-1.4.2-1PIGSTY.el9.x86_64.rpm pigsty 1.4.2 23.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsentinel_18-1.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pgsentinel_18 pgsentinel_18-1.4.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.1 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgsentinel_18-1.4.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pgsentinel_18 pgsentinel_18-1.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.4.0 25.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgsentinel_18-1.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgsentinel_18 pgsentinel_18-1.4.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.4.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgsentinel_18-1.4.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 pgsentinel_18 pgsentinel_18-1.3.1-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3.1 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgsentinel_18-1.3.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgsentinel_18 pgsentinel_18-1.3.1-1PGDG.rhel9.6.x86_64.rpm pgdg 1.3.1 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgsentinel_18-1.3.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 pgsentinel_18 pgsentinel_18-1.4.2-1PIGSTY.el9.aarch64.rpm pigsty 1.4.2 23.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsentinel_18-1.4.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pgsentinel_18 pgsentinel_18-1.4.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.1 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgsentinel_18-1.4.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pgsentinel_18 pgsentinel_18-1.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.4.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgsentinel_18-1.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgsentinel_18 pgsentinel_18-1.4.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.4.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgsentinel_18-1.4.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 pgsentinel_18 pgsentinel_18-1.3.1-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3.1 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgsentinel_18-1.3.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgsentinel_18 pgsentinel_18-1.3.1-1PGDG.rhel9.6.aarch64.rpm pgdg 1.3.1 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgsentinel_18-1.3.1-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 pgsentinel_18 pgsentinel_18-1.4.2-1PIGSTY.el10.x86_64.rpm pigsty 1.4.2 24.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsentinel_18-1.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pgsentinel_18 pgsentinel_18-1.4.1-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.1 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgsentinel_18-1.4.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pgsentinel_18 pgsentinel_18-1.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.4.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgsentinel_18-1.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgsentinel_18 pgsentinel_18-1.4.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.4.0 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgsentinel_18-1.4.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 pgsentinel_18 pgsentinel_18-1.3.1-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3.1 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgsentinel_18-1.3.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgsentinel_18 pgsentinel_18-1.3.1-1PGDG.rhel10.0.x86_64.rpm pgdg 1.3.1 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgsentinel_18-1.3.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 pgsentinel_18 pgsentinel_18-1.4.2-1PIGSTY.el10.aarch64.rpm pigsty 1.4.2 23.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsentinel_18-1.4.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pgsentinel_18 pgsentinel_18-1.4.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgsentinel_18-1.4.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgsentinel_18 pgsentinel_18-1.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.4.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgsentinel_18-1.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgsentinel_18 pgsentinel_18-1.4.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.4.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgsentinel_18-1.4.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pgsentinel_18 pgsentinel_18-1.3.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3.1 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgsentinel_18-1.3.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgsentinel_18 pgsentinel_18-1.3.1-1PGDG.rhel10.0.aarch64.rpm pgdg 1.3.1 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgsentinel_18-1.3.1-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.2-1.pgdg12+1_amd64.deb pgdg 1.4.2 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1.pgdg12+1_amd64.deb pgdg 1.4.1 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1.pgdg12+1_amd64.deb pgdg 1.4.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 40.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.2-1.pgdg12+1_arm64.deb pgdg 1.4.2 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1.pgdg12+1_arm64.deb pgdg 1.4.1 43.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1.pgdg12+1_arm64.deb pgdg 1.4.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 39.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.2-1.pgdg13+1_amd64.deb pgdg 1.4.2 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1.pgdg13+1_amd64.deb pgdg 1.4.1 44.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1.pgdg13+1_amd64.deb pgdg 1.4.0 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 40.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.2-1.pgdg13+1_arm64.deb pgdg 1.4.2 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1.pgdg13+1_arm64.deb pgdg 1.4.1 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1.pgdg13+1_arm64.deb pgdg 1.4.0 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 39.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.2-1.pgdg22.04+1_amd64.deb pgdg 1.4.2 46.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1.pgdg22.04+1_amd64.deb pgdg 1.4.1 46.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1.pgdg22.04+1_amd64.deb pgdg 1.4.0 45.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 44.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.2-1.pgdg22.04+1_arm64.deb pgdg 1.4.2 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1.pgdg22.04+1_arm64.deb pgdg 1.4.1 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1.pgdg22.04+1_arm64.deb pgdg 1.4.0 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 43.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.2-1.pgdg24.04+1_amd64.deb pgdg 1.4.2 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1.pgdg24.04+1_amd64.deb pgdg 1.4.1 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1.pgdg24.04+1_amd64.deb pgdg 1.4.0 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 42.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.2-1.pgdg24.04+1_arm64.deb pgdg 1.4.2 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1.pgdg24.04+1_arm64.deb pgdg 1.4.1 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1.pgdg24.04+1_arm64.deb pgdg 1.4.0 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 42.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.2-1.pgdg26.04+1_amd64.deb pgdg 1.4.2 45.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1.pgdg26.04+1_amd64.deb pgdg 1.4.1 45.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1PIGSTY~resolute_amd64.deb pigsty 1.4.1 43.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1.pgdg26.04+1_amd64.deb pgdg 1.4.0 44.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.2-1.pgdg26.04+1_arm64.deb pgdg 1.4.2 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1.pgdg26.04+1_arm64.deb pgdg 1.4.1 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.1-1PIGSTY~resolute_arm64.deb pigsty 1.4.1 42.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-pgsentinel postgresql-18-pgsentinel_1.4.0-1.pgdg26.04+1_arm64.deb pgdg 1.4.0 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-18-pgsentinel_1.4.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pgsentinel_17 pgsentinel_17-1.4.2-1PIGSTY.el8.x86_64.rpm pigsty 1.4.2 23.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsentinel_17-1.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pgsentinel_17 pgsentinel_17-1.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgsentinel_17-1.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgsentinel_17 pgsentinel_17-1.3.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3.1 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgsentinel_17-1.3.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgsentinel_17 pgsentinel_17-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgsentinel_17-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgsentinel_17 pgsentinel_17-1.4.2-1PIGSTY.el8.aarch64.rpm pigsty 1.4.2 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsentinel_17-1.4.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pgsentinel_17 pgsentinel_17-1.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.0 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgsentinel_17-1.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgsentinel_17 pgsentinel_17-1.3.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3.1 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgsentinel_17-1.3.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgsentinel_17 pgsentinel_17-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgsentinel_17-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgsentinel_17 pgsentinel_17-1.4.2-1PIGSTY.el9.x86_64.rpm pigsty 1.4.2 24.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsentinel_17-1.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pgsentinel_17 pgsentinel_17-1.4.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.1 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsentinel_17-1.4.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pgsentinel_17 pgsentinel_17-1.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.4.0 25.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsentinel_17-1.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgsentinel_17 pgsentinel_17-1.4.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.4.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsentinel_17-1.4.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 pgsentinel_17 pgsentinel_17-1.3.1-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3.1 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsentinel_17-1.3.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgsentinel_17 pgsentinel_17-1.3.1-1PGDG.rhel9.6.x86_64.rpm pgdg 1.3.1 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsentinel_17-1.3.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 pgsentinel_17 pgsentinel_17-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsentinel_17-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgsentinel_17 pgsentinel_17-1.4.2-1PIGSTY.el9.aarch64.rpm pigsty 1.4.2 23.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsentinel_17-1.4.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pgsentinel_17 pgsentinel_17-1.4.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.1 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsentinel_17-1.4.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgsentinel_17 pgsentinel_17-1.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.4.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsentinel_17-1.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgsentinel_17 pgsentinel_17-1.4.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.4.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsentinel_17-1.4.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 pgsentinel_17 pgsentinel_17-1.3.1-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3.1 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsentinel_17-1.3.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgsentinel_17 pgsentinel_17-1.3.1-1PGDG.rhel9.6.aarch64.rpm pgdg 1.3.1 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsentinel_17-1.3.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 pgsentinel_17 pgsentinel_17-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsentinel_17-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgsentinel_17 pgsentinel_17-1.4.2-1PIGSTY.el10.x86_64.rpm pigsty 1.4.2 24.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsentinel_17-1.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pgsentinel_17 pgsentinel_17-1.4.1-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.1 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgsentinel_17-1.4.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgsentinel_17 pgsentinel_17-1.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.4.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgsentinel_17-1.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgsentinel_17 pgsentinel_17-1.4.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.4.0 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgsentinel_17-1.4.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 pgsentinel_17 pgsentinel_17-1.3.1-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3.1 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgsentinel_17-1.3.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgsentinel_17 pgsentinel_17-1.3.1-1PGDG.rhel10.0.x86_64.rpm pgdg 1.3.1 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgsentinel_17-1.3.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 pgsentinel_17 pgsentinel_17-1.2.0-1PGDG.rhel10.x86_64.rpm pgdg 1.2.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgsentinel_17-1.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgsentinel_17 pgsentinel_17-1.4.2-1PIGSTY.el10.aarch64.rpm pigsty 1.4.2 23.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsentinel_17-1.4.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pgsentinel_17 pgsentinel_17-1.4.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgsentinel_17-1.4.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgsentinel_17 pgsentinel_17-1.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.4.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgsentinel_17-1.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgsentinel_17 pgsentinel_17-1.4.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.4.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgsentinel_17-1.4.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pgsentinel_17 pgsentinel_17-1.3.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3.1 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgsentinel_17-1.3.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgsentinel_17 pgsentinel_17-1.3.1-1PGDG.rhel10.0.aarch64.rpm pgdg 1.3.1 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgsentinel_17-1.3.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pgsentinel_17 pgsentinel_17-1.2.0-1PGDG.rhel10.aarch64.rpm pgdg 1.2.0 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgsentinel_17-1.2.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.2-1.pgdg12+1_amd64.deb pgdg 1.4.2 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1.pgdg12+1_amd64.deb pgdg 1.4.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1.pgdg12+1_amd64.deb pgdg 1.4.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 40.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.2-1.pgdg12+1_arm64.deb pgdg 1.4.2 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1.pgdg12+1_arm64.deb pgdg 1.4.1 43.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1.pgdg12+1_arm64.deb pgdg 1.4.0 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 39.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.2-1.pgdg13+1_amd64.deb pgdg 1.4.2 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1.pgdg13+1_amd64.deb pgdg 1.4.1 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1.pgdg13+1_amd64.deb pgdg 1.4.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 40.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.2-1.pgdg13+1_arm64.deb pgdg 1.4.2 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1.pgdg13+1_arm64.deb pgdg 1.4.1 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1.pgdg13+1_arm64.deb pgdg 1.4.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 39.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.2-1.pgdg22.04+1_amd64.deb pgdg 1.4.2 54.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1.pgdg22.04+1_amd64.deb pgdg 1.4.1 54.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1.pgdg22.04+1_amd64.deb pgdg 1.4.0 53.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 52.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.2-1.pgdg22.04+1_arm64.deb pgdg 1.4.2 52.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1.pgdg22.04+1_arm64.deb pgdg 1.4.1 52.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1.pgdg22.04+1_arm64.deb pgdg 1.4.0 52.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 51.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.2-1.pgdg24.04+1_amd64.deb pgdg 1.4.2 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1.pgdg24.04+1_amd64.deb pgdg 1.4.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1.pgdg24.04+1_amd64.deb pgdg 1.4.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 42.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.2-1.pgdg24.04+1_arm64.deb pgdg 1.4.2 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1.pgdg24.04+1_arm64.deb pgdg 1.4.1 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1.pgdg24.04+1_arm64.deb pgdg 1.4.0 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 42.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.2-1.pgdg26.04+1_amd64.deb pgdg 1.4.2 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1.pgdg26.04+1_amd64.deb pgdg 1.4.1 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1PIGSTY~resolute_amd64.deb pigsty 1.4.1 43.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1.pgdg26.04+1_amd64.deb pgdg 1.4.0 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.2-1.pgdg26.04+1_arm64.deb pgdg 1.4.2 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1.pgdg26.04+1_arm64.deb pgdg 1.4.1 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.1-1PIGSTY~resolute_arm64.deb pigsty 1.4.1 42.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-pgsentinel postgresql-17-pgsentinel_1.4.0-1.pgdg26.04+1_arm64.deb pgdg 1.4.0 43.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-17-pgsentinel_1.4.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pgsentinel_16 pgsentinel_16-1.4.2-1PIGSTY.el8.x86_64.rpm pigsty 1.4.2 23.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsentinel_16-1.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pgsentinel_16 pgsentinel_16-1.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgsentinel_16-1.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgsentinel_16 pgsentinel_16-1.3.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3.1 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgsentinel_16-1.3.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgsentinel_16 pgsentinel_16-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgsentinel_16-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgsentinel_16 pgsentinel_16-1.4.2-1PIGSTY.el8.aarch64.rpm pigsty 1.4.2 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsentinel_16-1.4.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pgsentinel_16 pgsentinel_16-1.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgsentinel_16-1.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgsentinel_16 pgsentinel_16-1.3.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3.1 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgsentinel_16-1.3.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgsentinel_16 pgsentinel_16-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgsentinel_16-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgsentinel_16 pgsentinel_16-1.4.2-1PIGSTY.el9.x86_64.rpm pigsty 1.4.2 23.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsentinel_16-1.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pgsentinel_16 pgsentinel_16-1.4.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.1 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsentinel_16-1.4.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pgsentinel_16 pgsentinel_16-1.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.4.0 25.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsentinel_16-1.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgsentinel_16 pgsentinel_16-1.4.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.4.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsentinel_16-1.4.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 pgsentinel_16 pgsentinel_16-1.3.1-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3.1 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsentinel_16-1.3.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgsentinel_16 pgsentinel_16-1.3.1-1PGDG.rhel9.6.x86_64.rpm pgdg 1.3.1 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsentinel_16-1.3.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 pgsentinel_16 pgsentinel_16-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsentinel_16-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgsentinel_16 pgsentinel_16-1.4.2-1PIGSTY.el9.aarch64.rpm pigsty 1.4.2 23.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsentinel_16-1.4.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pgsentinel_16 pgsentinel_16-1.4.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.1 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsentinel_16-1.4.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgsentinel_16 pgsentinel_16-1.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.4.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsentinel_16-1.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgsentinel_16 pgsentinel_16-1.4.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.4.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsentinel_16-1.4.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 pgsentinel_16 pgsentinel_16-1.3.1-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3.1 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsentinel_16-1.3.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgsentinel_16 pgsentinel_16-1.3.1-1PGDG.rhel9.6.aarch64.rpm pgdg 1.3.1 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsentinel_16-1.3.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 pgsentinel_16 pgsentinel_16-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsentinel_16-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgsentinel_16 pgsentinel_16-1.4.2-1PIGSTY.el10.x86_64.rpm pigsty 1.4.2 24.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsentinel_16-1.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pgsentinel_16 pgsentinel_16-1.4.1-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.1 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgsentinel_16-1.4.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgsentinel_16 pgsentinel_16-1.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.4.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgsentinel_16-1.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgsentinel_16 pgsentinel_16-1.4.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.4.0 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgsentinel_16-1.4.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 pgsentinel_16 pgsentinel_16-1.3.1-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3.1 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgsentinel_16-1.3.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgsentinel_16 pgsentinel_16-1.3.1-1PGDG.rhel10.0.x86_64.rpm pgdg 1.3.1 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgsentinel_16-1.3.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 pgsentinel_16 pgsentinel_16-1.2.0-1PGDG.rhel10.x86_64.rpm pgdg 1.2.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgsentinel_16-1.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgsentinel_16 pgsentinel_16-1.4.2-1PIGSTY.el10.aarch64.rpm pigsty 1.4.2 23.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsentinel_16-1.4.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pgsentinel_16 pgsentinel_16-1.4.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgsentinel_16-1.4.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgsentinel_16 pgsentinel_16-1.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.4.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgsentinel_16-1.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgsentinel_16 pgsentinel_16-1.4.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.4.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgsentinel_16-1.4.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pgsentinel_16 pgsentinel_16-1.3.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3.1 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgsentinel_16-1.3.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgsentinel_16 pgsentinel_16-1.3.1-1PGDG.rhel10.0.aarch64.rpm pgdg 1.3.1 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgsentinel_16-1.3.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pgsentinel_16 pgsentinel_16-1.2.0-1PGDG.rhel10.aarch64.rpm pgdg 1.2.0 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgsentinel_16-1.2.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.2-1.pgdg12+1_amd64.deb pgdg 1.4.2 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1.pgdg12+1_amd64.deb pgdg 1.4.1 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1.pgdg12+1_amd64.deb pgdg 1.4.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 40.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.2-1.pgdg12+1_arm64.deb pgdg 1.4.2 43.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1.pgdg12+1_arm64.deb pgdg 1.4.1 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1.pgdg12+1_arm64.deb pgdg 1.4.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 39.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.2-1.pgdg13+1_amd64.deb pgdg 1.4.2 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1.pgdg13+1_amd64.deb pgdg 1.4.1 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1.pgdg13+1_amd64.deb pgdg 1.4.0 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 40.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.2-1.pgdg13+1_arm64.deb pgdg 1.4.2 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1.pgdg13+1_arm64.deb pgdg 1.4.1 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1.pgdg13+1_arm64.deb pgdg 1.4.0 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 39.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.2-1.pgdg22.04+1_amd64.deb pgdg 1.4.2 53.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1.pgdg22.04+1_amd64.deb pgdg 1.4.1 53.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1.pgdg22.04+1_amd64.deb pgdg 1.4.0 53.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 52.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.2-1.pgdg22.04+1_arm64.deb pgdg 1.4.2 52.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1.pgdg22.04+1_arm64.deb pgdg 1.4.1 52.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1.pgdg22.04+1_arm64.deb pgdg 1.4.0 52.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 51.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.2-1.pgdg24.04+1_amd64.deb pgdg 1.4.2 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1.pgdg24.04+1_amd64.deb pgdg 1.4.1 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1.pgdg24.04+1_amd64.deb pgdg 1.4.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 42.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.2-1.pgdg24.04+1_arm64.deb pgdg 1.4.2 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1.pgdg24.04+1_arm64.deb pgdg 1.4.1 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1.pgdg24.04+1_arm64.deb pgdg 1.4.0 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 42.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.2-1.pgdg26.04+1_amd64.deb pgdg 1.4.2 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1.pgdg26.04+1_amd64.deb pgdg 1.4.1 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1PIGSTY~resolute_amd64.deb pigsty 1.4.1 43.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1.pgdg26.04+1_amd64.deb pgdg 1.4.0 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.2-1.pgdg26.04+1_arm64.deb pgdg 1.4.2 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1.pgdg26.04+1_arm64.deb pgdg 1.4.1 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.1-1PIGSTY~resolute_arm64.deb pigsty 1.4.1 42.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-pgsentinel postgresql-16-pgsentinel_1.4.0-1.pgdg26.04+1_arm64.deb pgdg 1.4.0 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-16-pgsentinel_1.4.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pgsentinel_15 pgsentinel_15-1.4.2-1PIGSTY.el8.x86_64.rpm pigsty 1.4.2 23.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsentinel_15-1.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pgsentinel_15 pgsentinel_15-1.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.0 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgsentinel_15-1.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgsentinel_15 pgsentinel_15-1.3.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3.1 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgsentinel_15-1.3.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgsentinel_15 pgsentinel_15-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgsentinel_15-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pgsentinel_15 pgsentinel_15-1.4.2-1PIGSTY.el8.aarch64.rpm pigsty 1.4.2 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsentinel_15-1.4.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pgsentinel_15 pgsentinel_15-1.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgsentinel_15-1.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgsentinel_15 pgsentinel_15-1.3.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3.1 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgsentinel_15-1.3.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgsentinel_15 pgsentinel_15-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgsentinel_15-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pgsentinel_15 pgsentinel_15-1.4.2-1PIGSTY.el9.x86_64.rpm pigsty 1.4.2 24.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsentinel_15-1.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pgsentinel_15 pgsentinel_15-1.4.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.1 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsentinel_15-1.4.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pgsentinel_15 pgsentinel_15-1.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.4.0 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsentinel_15-1.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgsentinel_15 pgsentinel_15-1.4.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.4.0 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsentinel_15-1.4.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 pgsentinel_15 pgsentinel_15-1.3.1-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3.1 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsentinel_15-1.3.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgsentinel_15 pgsentinel_15-1.3.1-1PGDG.rhel9.6.x86_64.rpm pgdg 1.3.1 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsentinel_15-1.3.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 pgsentinel_15 pgsentinel_15-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsentinel_15-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pgsentinel_15 pgsentinel_15-1.4.2-1PIGSTY.el9.aarch64.rpm pigsty 1.4.2 23.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsentinel_15-1.4.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pgsentinel_15 pgsentinel_15-1.4.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.1 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsentinel_15-1.4.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgsentinel_15 pgsentinel_15-1.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.4.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsentinel_15-1.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgsentinel_15 pgsentinel_15-1.4.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.4.0 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsentinel_15-1.4.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 pgsentinel_15 pgsentinel_15-1.3.1-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3.1 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsentinel_15-1.3.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgsentinel_15 pgsentinel_15-1.3.1-1PGDG.rhel9.6.aarch64.rpm pgdg 1.3.1 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsentinel_15-1.3.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 pgsentinel_15 pgsentinel_15-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsentinel_15-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pgsentinel_15 pgsentinel_15-1.4.2-1PIGSTY.el10.x86_64.rpm pigsty 1.4.2 24.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsentinel_15-1.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pgsentinel_15 pgsentinel_15-1.4.1-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.1 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgsentinel_15-1.4.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgsentinel_15 pgsentinel_15-1.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.4.0 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgsentinel_15-1.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgsentinel_15 pgsentinel_15-1.4.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.4.0 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgsentinel_15-1.4.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 pgsentinel_15 pgsentinel_15-1.3.1-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3.1 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgsentinel_15-1.3.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgsentinel_15 pgsentinel_15-1.3.1-1PGDG.rhel10.0.x86_64.rpm pgdg 1.3.1 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgsentinel_15-1.3.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 pgsentinel_15 pgsentinel_15-1.2.0-1PGDG.rhel10.x86_64.rpm pgdg 1.2.0 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgsentinel_15-1.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgsentinel_15 pgsentinel_15-1.4.2-1PIGSTY.el10.aarch64.rpm pigsty 1.4.2 23.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsentinel_15-1.4.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pgsentinel_15 pgsentinel_15-1.4.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgsentinel_15-1.4.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgsentinel_15 pgsentinel_15-1.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.4.0 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgsentinel_15-1.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgsentinel_15 pgsentinel_15-1.4.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.4.0 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgsentinel_15-1.4.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pgsentinel_15 pgsentinel_15-1.3.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3.1 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgsentinel_15-1.3.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgsentinel_15 pgsentinel_15-1.3.1-1PGDG.rhel10.0.aarch64.rpm pgdg 1.3.1 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgsentinel_15-1.3.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pgsentinel_15 pgsentinel_15-1.2.0-1PGDG.rhel10.aarch64.rpm pgdg 1.2.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgsentinel_15-1.2.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.2-1.pgdg12+1_amd64.deb pgdg 1.4.2 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1.pgdg12+1_amd64.deb pgdg 1.4.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1.pgdg12+1_amd64.deb pgdg 1.4.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 40.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.2-1.pgdg12+1_arm64.deb pgdg 1.4.2 43.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1.pgdg12+1_arm64.deb pgdg 1.4.1 43.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1.pgdg12+1_arm64.deb pgdg 1.4.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 39.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.2-1.pgdg13+1_amd64.deb pgdg 1.4.2 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1.pgdg13+1_amd64.deb pgdg 1.4.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1.pgdg13+1_amd64.deb pgdg 1.4.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 40.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.2-1.pgdg13+1_arm64.deb pgdg 1.4.2 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1.pgdg13+1_arm64.deb pgdg 1.4.1 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1.pgdg13+1_arm64.deb pgdg 1.4.0 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 39.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.2-1.pgdg22.04+1_amd64.deb pgdg 1.4.2 53.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1.pgdg22.04+1_amd64.deb pgdg 1.4.1 53.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1.pgdg22.04+1_amd64.deb pgdg 1.4.0 53.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 52.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.2-1.pgdg22.04+1_arm64.deb pgdg 1.4.2 52.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1.pgdg22.04+1_arm64.deb pgdg 1.4.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1.pgdg22.04+1_arm64.deb pgdg 1.4.0 52.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 51.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.2-1.pgdg24.04+1_amd64.deb pgdg 1.4.2 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1.pgdg24.04+1_amd64.deb pgdg 1.4.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1.pgdg24.04+1_amd64.deb pgdg 1.4.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 42.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.2-1.pgdg24.04+1_arm64.deb pgdg 1.4.2 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1.pgdg24.04+1_arm64.deb pgdg 1.4.1 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1.pgdg24.04+1_arm64.deb pgdg 1.4.0 43.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 42.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.2-1.pgdg26.04+1_amd64.deb pgdg 1.4.2 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1.pgdg26.04+1_amd64.deb pgdg 1.4.1 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1PIGSTY~resolute_amd64.deb pigsty 1.4.1 43.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1.pgdg26.04+1_amd64.deb pgdg 1.4.0 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.2-1.pgdg26.04+1_arm64.deb pgdg 1.4.2 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1.pgdg26.04+1_arm64.deb pgdg 1.4.1 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.1-1PIGSTY~resolute_arm64.deb pigsty 1.4.1 42.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-pgsentinel postgresql-15-pgsentinel_1.4.0-1.pgdg26.04+1_arm64.deb pgdg 1.4.0 43.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-15-pgsentinel_1.4.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pgsentinel_14 pgsentinel_14-1.4.2-1PIGSTY.el8.x86_64.rpm pigsty 1.4.2 23.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsentinel_14-1.4.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pgsentinel_14 pgsentinel_14-1.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgsentinel_14-1.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgsentinel_14 pgsentinel_14-1.3.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3.1 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgsentinel_14-1.3.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgsentinel_14 pgsentinel_14-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgsentinel_14-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pgsentinel_14 pgsentinel_14-1.4.2-1PIGSTY.el8.aarch64.rpm pigsty 1.4.2 22.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsentinel_14-1.4.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pgsentinel_14 pgsentinel_14-1.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgsentinel_14-1.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgsentinel_14 pgsentinel_14-1.3.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3.1 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgsentinel_14-1.3.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgsentinel_14 pgsentinel_14-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgsentinel_14-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pgsentinel_14 pgsentinel_14-1.4.2-1PIGSTY.el9.x86_64.rpm pigsty 1.4.2 24.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsentinel_14-1.4.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pgsentinel_14 pgsentinel_14-1.4.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.1 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsentinel_14-1.4.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pgsentinel_14 pgsentinel_14-1.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.4.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsentinel_14-1.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgsentinel_14 pgsentinel_14-1.4.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.4.0 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsentinel_14-1.4.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 pgsentinel_14 pgsentinel_14-1.3.1-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3.1 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsentinel_14-1.3.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgsentinel_14 pgsentinel_14-1.3.1-1PGDG.rhel9.6.x86_64.rpm pgdg 1.3.1 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsentinel_14-1.3.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 pgsentinel_14 pgsentinel_14-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsentinel_14-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pgsentinel_14 pgsentinel_14-1.4.2-1PIGSTY.el9.aarch64.rpm pigsty 1.4.2 23.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsentinel_14-1.4.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pgsentinel_14 pgsentinel_14-1.4.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.1 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsentinel_14-1.4.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgsentinel_14 pgsentinel_14-1.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.4.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsentinel_14-1.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgsentinel_14 pgsentinel_14-1.4.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.4.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsentinel_14-1.4.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 pgsentinel_14 pgsentinel_14-1.3.1-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3.1 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsentinel_14-1.3.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgsentinel_14 pgsentinel_14-1.3.1-1PGDG.rhel9.6.aarch64.rpm pgdg 1.3.1 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsentinel_14-1.3.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 pgsentinel_14 pgsentinel_14-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsentinel_14-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pgsentinel_14 pgsentinel_14-1.4.2-1PIGSTY.el10.x86_64.rpm pigsty 1.4.2 24.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsentinel_14-1.4.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pgsentinel_14 pgsentinel_14-1.4.1-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.1 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgsentinel_14-1.4.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgsentinel_14 pgsentinel_14-1.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.4.0 25.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgsentinel_14-1.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgsentinel_14 pgsentinel_14-1.4.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.4.0 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgsentinel_14-1.4.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 pgsentinel_14 pgsentinel_14-1.3.1-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3.1 25.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgsentinel_14-1.3.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgsentinel_14 pgsentinel_14-1.3.1-1PGDG.rhel10.0.x86_64.rpm pgdg 1.3.1 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgsentinel_14-1.3.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 pgsentinel_14 pgsentinel_14-1.2.0-1PGDG.rhel10.x86_64.rpm pgdg 1.2.0 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgsentinel_14-1.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgsentinel_14 pgsentinel_14-1.4.2-1PIGSTY.el10.aarch64.rpm pigsty 1.4.2 23.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsentinel_14-1.4.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pgsentinel_14 pgsentinel_14-1.4.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgsentinel_14-1.4.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pgsentinel_14 pgsentinel_14-1.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.4.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgsentinel_14-1.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgsentinel_14 pgsentinel_14-1.4.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.4.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgsentinel_14-1.4.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 pgsentinel_14 pgsentinel_14-1.3.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3.1 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgsentinel_14-1.3.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgsentinel_14 pgsentinel_14-1.3.1-1PGDG.rhel10.0.aarch64.rpm pgdg 1.3.1 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgsentinel_14-1.3.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 pgsentinel_14 pgsentinel_14-1.2.0-1PGDG.rhel10.aarch64.rpm pgdg 1.2.0 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgsentinel_14-1.2.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.2-1.pgdg12+1_amd64.deb pgdg 1.4.2 44.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1.pgdg12+1_amd64.deb pgdg 1.4.1 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1.pgdg12+1_amd64.deb pgdg 1.4.0 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 40.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.2-1.pgdg12+1_arm64.deb pgdg 1.4.2 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1.pgdg12+1_arm64.deb pgdg 1.4.1 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1.pgdg12+1_arm64.deb pgdg 1.4.0 43.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 39.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.2-1.pgdg13+1_amd64.deb pgdg 1.4.2 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1.pgdg13+1_amd64.deb pgdg 1.4.1 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1.pgdg13+1_amd64.deb pgdg 1.4.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 40.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.2-1.pgdg13+1_arm64.deb pgdg 1.4.2 43.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1.pgdg13+1_arm64.deb pgdg 1.4.1 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1.pgdg13+1_arm64.deb pgdg 1.4.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 39.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.2-1.pgdg22.04+1_amd64.deb pgdg 1.4.2 51.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1.pgdg22.04+1_amd64.deb pgdg 1.4.1 51.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1.pgdg22.04+1_amd64.deb pgdg 1.4.0 50.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 49.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.2-1.pgdg22.04+1_arm64.deb pgdg 1.4.2 49.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1.pgdg22.04+1_arm64.deb pgdg 1.4.1 49.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1.pgdg22.04+1_arm64.deb pgdg 1.4.0 49.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 48.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.2-1.pgdg24.04+1_amd64.deb pgdg 1.4.2 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1.pgdg24.04+1_amd64.deb pgdg 1.4.1 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1.pgdg24.04+1_amd64.deb pgdg 1.4.0 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 42.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.2-1.pgdg24.04+1_arm64.deb pgdg 1.4.2 43.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1.pgdg24.04+1_arm64.deb pgdg 1.4.1 43.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1.pgdg24.04+1_arm64.deb pgdg 1.4.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 41.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.2-1.pgdg26.04+1_amd64.deb pgdg 1.4.2 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1.pgdg26.04+1_amd64.deb pgdg 1.4.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1PIGSTY~resolute_amd64.deb pigsty 1.4.1 43.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1.pgdg26.04+1_amd64.deb pgdg 1.4.0 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.2-1.pgdg26.04+1_arm64.deb pgdg 1.4.2 43.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1.pgdg26.04+1_arm64.deb pgdg 1.4.1 43.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.1-1PIGSTY~resolute_arm64.deb pigsty 1.4.1 42.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 14 postgresql-14-pgsentinel postgresql-14-pgsentinel_1.4.0-1.pgdg26.04+1_arm64.deb pgdg 1.4.0 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsentinel/postgresql-14-pgsentinel_1.4.0-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgsentinel` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgsentinel         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgsentinel` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgsentinel;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgsentinel -v 18  # PG 18
pig ext install -y pgsentinel -v 17  # PG 17
pig ext install -y pgsentinel -v 16  # PG 16
pig ext install -y pgsentinel -v 15  # PG 15
pig ext install -y pgsentinel -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgsentinel_18       # PG 18
dnf install -y pgsentinel_17       # PG 17
dnf install -y pgsentinel_16       # PG 16
dnf install -y pgsentinel_15       # PG 15
dnf install -y pgsentinel_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgsentinel   # PG 18
apt install -y postgresql-17-pgsentinel   # PG 17
apt install -y postgresql-16-pgsentinel   # PG 16
apt install -y postgresql-15-pgsentinel   # PG 15
apt install -y postgresql-14-pgsentinel   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgsentinel';
```


**创建扩展**：

```sql
CREATE EXTENSION pgsentinel;
```

## 用法

来源：

- [pgsentinel 1.4.2 README](https://github.com/pgsentinel/pgsentinel/blob/v1.4.2/README.md)
- [pgsentinel 1.4.2 发行版](https://github.com/pgsentinel/pgsentinel/releases/tag/v1.4.2)
- [pgsentinel 1.4.1 到 1.4.2 的更改](https://github.com/pgsentinel/pgsentinel/compare/v1.4.1...v1.4.2)
- [pgsentinel 控制文件](https://github.com/pgsentinel/pgsentinel/blob/v1.4.2/src/pgsentinel.control)

`pgsentinel` 通过在固定时间间隔内采样 `pg_stat_activity` 并将活动与 `pg_stat_statements` 查询统计信息关联来记录活跃会话历史。它最近的样本存储在由后台工作进程管理的共享内存环形缓冲区中。

```ini
shared_preload_libraries = 'pg_stat_statements,pgsentinel'
pg_stat_statements.track = all
pgsentinel.db_name = 'postgres'
```

重启 PostgreSQL，然后在用于工作的数据库中启用这两个扩展：

```sql
CREATE EXTENSION pg_stat_statements;
CREATE EXTENSION pgsentinel;
```

### 活跃会话历史

```sql
SELECT ash_time, datname, usename, pid, state,
       wait_event_type, wait_event, query, queryid
FROM pg_active_session_history
ORDER BY ash_time DESC;
```

除了 `pg_stat_activity` 之外的关键列：

| 列 | 描述 |
|--------|-------------|
| `ash_time` | 采样时间戳 |
| `top_level_query` | PL/pgSQL 的顶级语句（如果适用） |
| `query` | 包含实际参数值的语句 |
| `cmdtype` | 语句类型：SELECT, UPDATE, INSERT, DELETE, UTILITY, UNKNOWN, NOTHING |
| `queryid` | 与 `pg_stat_statements` 的链接 |
| `blockers` | 阻塞进程的数量 |
| `blockerpid` | 阻塞进程的 PID |
| `blocker_state` | 阻塞者的状态 |

### 查询统计历史

启用时，pgsentinel 还会并发地采样 `pg_stat_statements`：

```sql
SELECT ash_time, queryid, calls, total_exec_time, rows,
       shared_blks_hit, shared_blks_read
FROM pg_stat_statements_history
ORDER BY ash_time DESC;
```

### 示例：等待分析

```sql
-- Top wait events in the last hour
SELECT wait_event_type, wait_event, count(*)
FROM pg_active_session_history
WHERE ash_time > now() - interval '1 hour'
  AND wait_event IS NOT NULL
GROUP BY 1, 2
ORDER BY 3 DESC;

-- Blocking analysis
SELECT blockerpid, blocker_state, count(*)
FROM pg_active_session_history
WHERE blockers > 0
GROUP BY 1, 2
ORDER BY 3 DESC;
```

### 配置

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `pgsentinel_ash.sampling_period` | 1 | 每秒采样周期 |
| `pgsentinel_ash.max_entries` | 1000 | ASH 的环形缓冲区大小 |
| `pgsentinel.db_name` | `postgres` | 工作连接的数据库 |
| `pgsentinel_ash.track_idle_trans` | `false` | 跟踪 idle-in-transaction 会话 |
| `pgsentinel_pgssh.max_entries` | 1000 | pg_stat_statements 历史的环形缓冲区大小 |
| `pgsentinel_pgssh.enable` | `false` | 启用 pg_stat_statements 历史 |

### 版本和操作注意事项

- 发行版 1.4.2 修复了 PostgreSQL 17 上的查询统计历史问题，其 `pg_stat_statements` 视图将阻塞 I/O 时间列重命名为 `shared_blk_read_time` 和 `shared_blk_write_time`。
- 同一发行版在不改变 SQL 视图或 GUC 表面的情况下增加了对 PostgreSQL 19 的构建兼容性。
- 环形缓冲区历史是内存驻留且有限的；只有在考虑共享内存使用情况后才能增加条目限制，并在需要更长保留时间时导出样本。
- 查询文本可以包含字面量参数值。当语句可能包括敏感数据时，应限制对历史视图的访问。

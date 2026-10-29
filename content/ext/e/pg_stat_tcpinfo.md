---
title: "pg_stat_tcpinfo"
linkTitle: "pg_stat_tcpinfo"
description: "Linux TCP 连接统计、延迟与重传观测"
weight: 6480
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/jakubwartakEDB/pg_stat_tcpinfo">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">jakubwartakEDB/pg_stat_tcpinfo</div>
    <div class="ext-card__desc">https://github.com/jakubwartakEDB/pg_stat_tcpinfo</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_stat_tcpinfo-1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_stat_tcpinfo-1.1.tar.gz</div>
    <div class="ext-card__desc">pg_stat_tcpinfo-1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_stat_tcpinfo`**](/ext/e/pg_stat_tcpinfo) | `1.1` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6480  | [**`pg_stat_tcpinfo`**](/ext/e/pg_stat_tcpinfo) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgnodemx`](/ext/e/pgnodemx) [`system_stats`](/ext/e/system_stats) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_statvfs`](/ext/e/pg_statvfs) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Linux >=4.18; procfs and NETLINK_INET_DIAG required. Monitoring roles can see all server-OS-user sockets. No preload or upstream 1.0-to-1.1 upgrade script. PG14-18; PGDG remains principal supplier; PGSTY 1.1 batch supplements published.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_stat_tcpinfo` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_stat_tcpinfo_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-stat-tcpinfo` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 |
| el8.aarch64 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 |
| el9.x86_64 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 |
| el9.aarch64 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 |
| el10.x86_64 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 | AVAIL PIGSTY 1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 | AVAIL PIGSTY 1.1 2 |
| d12.x86_64 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 |
| d12.aarch64 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 |
| d13.x86_64 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 |
| d13.aarch64 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 |
| u22.x86_64 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 |
| u22.aarch64 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 |
| u24.x86_64 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 |
| u24.aarch64 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 |
| u26.x86_64 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 |
| u26.aarch64 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 | AVAIL PGDG 1.1 2 |
@ el8.x86_64 18 pg_stat_tcpinfo_18 pg_stat_tcpinfo_18-1.1-1PGSTY.el8.x86_64.rpm pigsty 1.1 41.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stat_tcpinfo_18-1.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_stat_tcpinfo_18 pg_stat_tcpinfo_18-1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1 21.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_stat_tcpinfo_18-1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 pg_stat_tcpinfo_18 pg_stat_tcpinfo_18-1.1-1PGSTY.el8.aarch64.rpm pigsty 1.1 40.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stat_tcpinfo_18-1.1-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_stat_tcpinfo_18 pg_stat_tcpinfo_18-1.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1 20.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_stat_tcpinfo_18-1.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 pg_stat_tcpinfo_18 pg_stat_tcpinfo_18-1.1-1PGSTY.el9.x86_64.rpm pigsty 1.1 42.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_tcpinfo_18-1.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_stat_tcpinfo_18 pg_stat_tcpinfo_18-1.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1 22.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_tcpinfo_18-1.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 18 pg_stat_tcpinfo_18 pg_stat_tcpinfo_18-1.1-1PGSTY.el9.aarch64.rpm pigsty 1.1 41.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_tcpinfo_18-1.1-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_stat_tcpinfo_18 pg_stat_tcpinfo_18-1.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1 21.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_tcpinfo_18-1.1-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 18 pg_stat_tcpinfo_18 pg_stat_tcpinfo_18-1.1-1PGSTY.el10.x86_64.rpm pigsty 1.1 42.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_tcpinfo_18-1.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_stat_tcpinfo_18 pg_stat_tcpinfo_18-1.1-1PGSTY.el10.aarch64.rpm pigsty 1.1 41.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_tcpinfo_18-1.1-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_stat_tcpinfo_18 pg_stat_tcpinfo_18-1.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.1 21.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_tcpinfo_18-1.1-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg12+1_amd64.deb pgdg 1.1 32.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_amd64.deb pigsty 1.1 32.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg12+1_arm64.deb pgdg 1.1 31.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_arm64.deb pigsty 1.1 31.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg13+1_amd64.deb pgdg 1.1 32.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~trixie_amd64.deb pigsty 1.1 32.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg13+1_arm64.deb pgdg 1.1 32.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~trixie_arm64.deb pigsty 1.1 32.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_amd64.deb pgdg 1.1 33.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~jammy_amd64.deb pigsty 1.1 35.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_arm64.deb pgdg 1.1 32.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~jammy_arm64.deb pigsty 1.1 34.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_amd64.deb pgdg 1.1 32.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~noble_amd64.deb pigsty 1.1 34.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_arm64.deb pgdg 1.1 32.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~noble_arm64.deb pigsty 1.1 33.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_amd64.deb pgdg 1.1 32.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~resolute_amd64.deb pigsty 1.1 34.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_arm64.deb pgdg 1.1 32.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-stat-tcpinfo postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~resolute_arm64.deb pigsty 1.1 33.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-tcpinfo/postgresql-18-pg-stat-tcpinfo_1.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_stat_tcpinfo_17 pg_stat_tcpinfo_17-1.1-1PGSTY.el8.x86_64.rpm pigsty 1.1 40.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stat_tcpinfo_17-1.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_stat_tcpinfo_17 pg_stat_tcpinfo_17-1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1 21.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_stat_tcpinfo_17-1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 pg_stat_tcpinfo_17 pg_stat_tcpinfo_17-1.1-1PGSTY.el8.aarch64.rpm pigsty 1.1 40.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stat_tcpinfo_17-1.1-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_stat_tcpinfo_17 pg_stat_tcpinfo_17-1.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1 20.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_stat_tcpinfo_17-1.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 pg_stat_tcpinfo_17 pg_stat_tcpinfo_17-1.1-1PGSTY.el9.x86_64.rpm pigsty 1.1 41.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_tcpinfo_17-1.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_stat_tcpinfo_17 pg_stat_tcpinfo_17-1.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1 22.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_stat_tcpinfo_17-1.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 17 pg_stat_tcpinfo_17 pg_stat_tcpinfo_17-1.1-1PGSTY.el9.aarch64.rpm pigsty 1.1 41.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_tcpinfo_17-1.1-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_stat_tcpinfo_17 pg_stat_tcpinfo_17-1.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1 21.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_stat_tcpinfo_17-1.1-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 17 pg_stat_tcpinfo_17 pg_stat_tcpinfo_17-1.1-1PGSTY.el10.x86_64.rpm pigsty 1.1 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_tcpinfo_17-1.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_stat_tcpinfo_17 pg_stat_tcpinfo_17-1.1-1PGSTY.el10.aarch64.rpm pigsty 1.1 41.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_tcpinfo_17-1.1-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_stat_tcpinfo_17 pg_stat_tcpinfo_17-1.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.1 21.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_stat_tcpinfo_17-1.1-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg12+1_amd64.deb pgdg 1.1 32.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_amd64.deb pigsty 1.1 32.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg12+1_arm64.deb pgdg 1.1 31.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_arm64.deb pigsty 1.1 31.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg13+1_amd64.deb pgdg 1.1 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~trixie_amd64.deb pigsty 1.1 32.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg13+1_arm64.deb pgdg 1.1 32.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~trixie_arm64.deb pigsty 1.1 32.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_amd64.deb pgdg 1.1 36.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~jammy_amd64.deb pigsty 1.1 38.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_arm64.deb pgdg 1.1 35.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~jammy_arm64.deb pigsty 1.1 37.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_amd64.deb pgdg 1.1 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~noble_amd64.deb pigsty 1.1 34.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_arm64.deb pgdg 1.1 31.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~noble_arm64.deb pigsty 1.1 33.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_amd64.deb pgdg 1.1 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~resolute_amd64.deb pigsty 1.1 33.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_arm64.deb pgdg 1.1 32.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-stat-tcpinfo postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~resolute_arm64.deb pigsty 1.1 33.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-tcpinfo/postgresql-17-pg-stat-tcpinfo_1.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_stat_tcpinfo_16 pg_stat_tcpinfo_16-1.1-1PGSTY.el8.x86_64.rpm pigsty 1.1 40.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stat_tcpinfo_16-1.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_stat_tcpinfo_16 pg_stat_tcpinfo_16-1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1 21.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_tcpinfo_16-1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 pg_stat_tcpinfo_16 pg_stat_tcpinfo_16-1.1-1PGSTY.el8.aarch64.rpm pigsty 1.1 40.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stat_tcpinfo_16-1.1-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_stat_tcpinfo_16 pg_stat_tcpinfo_16-1.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1 20.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_tcpinfo_16-1.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 pg_stat_tcpinfo_16 pg_stat_tcpinfo_16-1.1-1PGSTY.el9.x86_64.rpm pigsty 1.1 41.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_tcpinfo_16-1.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_stat_tcpinfo_16 pg_stat_tcpinfo_16-1.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1 22.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_tcpinfo_16-1.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 16 pg_stat_tcpinfo_16 pg_stat_tcpinfo_16-1.1-1PGSTY.el9.aarch64.rpm pigsty 1.1 41.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_tcpinfo_16-1.1-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_stat_tcpinfo_16 pg_stat_tcpinfo_16-1.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1 21.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_tcpinfo_16-1.1-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 16 pg_stat_tcpinfo_16 pg_stat_tcpinfo_16-1.1-1PGSTY.el10.x86_64.rpm pigsty 1.1 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_tcpinfo_16-1.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_stat_tcpinfo_16 pg_stat_tcpinfo_16-1.1-1PGSTY.el10.aarch64.rpm pigsty 1.1 41.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_tcpinfo_16-1.1-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_stat_tcpinfo_16 pg_stat_tcpinfo_16-1.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.1 21.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_stat_tcpinfo_16-1.1-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg12+1_amd64.deb pgdg 1.1 32.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_amd64.deb pigsty 1.1 32.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg12+1_arm64.deb pgdg 1.1 31.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_arm64.deb pigsty 1.1 31.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg13+1_amd64.deb pgdg 1.1 32.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~trixie_amd64.deb pigsty 1.1 32.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg13+1_arm64.deb pgdg 1.1 32.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~trixie_arm64.deb pigsty 1.1 32.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_amd64.deb pgdg 1.1 36.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~jammy_amd64.deb pigsty 1.1 38.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_arm64.deb pgdg 1.1 35.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~jammy_arm64.deb pigsty 1.1 37.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_amd64.deb pgdg 1.1 32.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~noble_amd64.deb pigsty 1.1 34.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_arm64.deb pgdg 1.1 32.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~noble_arm64.deb pigsty 1.1 34.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_amd64.deb pgdg 1.1 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~resolute_amd64.deb pigsty 1.1 33.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_arm64.deb pgdg 1.1 32.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-stat-tcpinfo postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~resolute_arm64.deb pigsty 1.1 33.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-tcpinfo/postgresql-16-pg-stat-tcpinfo_1.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_stat_tcpinfo_15 pg_stat_tcpinfo_15-1.1-1PGSTY.el8.x86_64.rpm pigsty 1.1 40.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stat_tcpinfo_15-1.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_stat_tcpinfo_15 pg_stat_tcpinfo_15-1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1 21.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_tcpinfo_15-1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 15 pg_stat_tcpinfo_15 pg_stat_tcpinfo_15-1.1-1PGSTY.el8.aarch64.rpm pigsty 1.1 40.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stat_tcpinfo_15-1.1-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_stat_tcpinfo_15 pg_stat_tcpinfo_15-1.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1 20.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_tcpinfo_15-1.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 15 pg_stat_tcpinfo_15 pg_stat_tcpinfo_15-1.1-1PGSTY.el9.x86_64.rpm pigsty 1.1 41.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_tcpinfo_15-1.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_stat_tcpinfo_15 pg_stat_tcpinfo_15-1.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1 22.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_tcpinfo_15-1.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 15 pg_stat_tcpinfo_15 pg_stat_tcpinfo_15-1.1-1PGSTY.el9.aarch64.rpm pigsty 1.1 41.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_tcpinfo_15-1.1-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_stat_tcpinfo_15 pg_stat_tcpinfo_15-1.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1 21.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_tcpinfo_15-1.1-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 15 pg_stat_tcpinfo_15 pg_stat_tcpinfo_15-1.1-1PGSTY.el10.x86_64.rpm pigsty 1.1 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_tcpinfo_15-1.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_stat_tcpinfo_15 pg_stat_tcpinfo_15-1.1-1PGSTY.el10.aarch64.rpm pigsty 1.1 41.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_tcpinfo_15-1.1-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_stat_tcpinfo_15 pg_stat_tcpinfo_15-1.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.1 21.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_stat_tcpinfo_15-1.1-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg12+1_amd64.deb pgdg 1.1 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_amd64.deb pigsty 1.1 32.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg12+1_arm64.deb pgdg 1.1 31.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_arm64.deb pigsty 1.1 35.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg13+1_amd64.deb pgdg 1.1 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~trixie_amd64.deb pigsty 1.1 32.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg13+1_arm64.deb pgdg 1.1 32.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~trixie_arm64.deb pigsty 1.1 32.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_amd64.deb pgdg 1.1 36.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~jammy_amd64.deb pigsty 1.1 38.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_arm64.deb pgdg 1.1 35.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~jammy_arm64.deb pigsty 1.1 37.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_amd64.deb pgdg 1.1 32.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~noble_amd64.deb pigsty 1.1 34.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_arm64.deb pgdg 1.1 31.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~noble_arm64.deb pigsty 1.1 33.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_amd64.deb pgdg 1.1 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~resolute_amd64.deb pigsty 1.1 33.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_arm64.deb pgdg 1.1 32.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-stat-tcpinfo postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~resolute_arm64.deb pigsty 1.1 33.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-tcpinfo/postgresql-15-pg-stat-tcpinfo_1.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_stat_tcpinfo_14 pg_stat_tcpinfo_14-1.1-1PGSTY.el8.x86_64.rpm pigsty 1.1 40.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stat_tcpinfo_14-1.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_stat_tcpinfo_14 pg_stat_tcpinfo_14-1.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1 21.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_tcpinfo_14-1.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 14 pg_stat_tcpinfo_14 pg_stat_tcpinfo_14-1.1-1PGSTY.el8.aarch64.rpm pigsty 1.1 40.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stat_tcpinfo_14-1.1-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_stat_tcpinfo_14 pg_stat_tcpinfo_14-1.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1 20.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_tcpinfo_14-1.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 14 pg_stat_tcpinfo_14 pg_stat_tcpinfo_14-1.1-1PGSTY.el9.x86_64.rpm pigsty 1.1 41.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_tcpinfo_14-1.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_stat_tcpinfo_14 pg_stat_tcpinfo_14-1.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1 22.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_tcpinfo_14-1.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 14 pg_stat_tcpinfo_14 pg_stat_tcpinfo_14-1.1-1PGSTY.el9.aarch64.rpm pigsty 1.1 41.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_tcpinfo_14-1.1-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_stat_tcpinfo_14 pg_stat_tcpinfo_14-1.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1 21.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_tcpinfo_14-1.1-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 14 pg_stat_tcpinfo_14 pg_stat_tcpinfo_14-1.1-1PGSTY.el10.x86_64.rpm pigsty 1.1 41.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_tcpinfo_14-1.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_stat_tcpinfo_14 pg_stat_tcpinfo_14-1.1-1PGSTY.el10.aarch64.rpm pigsty 1.1 41.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_tcpinfo_14-1.1-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_stat_tcpinfo_14 pg_stat_tcpinfo_14-1.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.1 21.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_stat_tcpinfo_14-1.1-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg12+1_amd64.deb pgdg 1.1 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_amd64.deb pigsty 1.1 32.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg12+1_arm64.deb pgdg 1.1 31.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_arm64.deb pigsty 1.1 31.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg13+1_amd64.deb pgdg 1.1 32.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~trixie_amd64.deb pigsty 1.1 32.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg13+1_arm64.deb pgdg 1.1 32.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~trixie_arm64.deb pigsty 1.1 31.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_amd64.deb pgdg 1.1 36.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~jammy_amd64.deb pigsty 1.1 38.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_arm64.deb pgdg 1.1 35.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~jammy_arm64.deb pigsty 1.1 38.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_amd64.deb pgdg 1.1 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~noble_amd64.deb pigsty 1.1 34.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_arm64.deb pgdg 1.1 31.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~noble_arm64.deb pigsty 1.1 33.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_amd64.deb pgdg 1.1 32.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~resolute_amd64.deb pigsty 1.1 33.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_arm64.deb pgdg 1.1 32.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pg-stat-tcpinfo postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~resolute_arm64.deb pigsty 1.1 33.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-tcpinfo/postgresql-14-pg-stat-tcpinfo_1.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_stat_tcpinfo` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_stat_tcpinfo         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_stat_tcpinfo` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_stat_tcpinfo;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_stat_tcpinfo -v 18  # PG 18
pig ext install -y pg_stat_tcpinfo -v 17  # PG 17
pig ext install -y pg_stat_tcpinfo -v 16  # PG 16
pig ext install -y pg_stat_tcpinfo -v 15  # PG 15
pig ext install -y pg_stat_tcpinfo -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_stat_tcpinfo_18       # PG 18
dnf install -y pg_stat_tcpinfo_17       # PG 17
dnf install -y pg_stat_tcpinfo_16       # PG 16
dnf install -y pg_stat_tcpinfo_15       # PG 15
dnf install -y pg_stat_tcpinfo_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-stat-tcpinfo   # PG 18
apt install -y postgresql-17-pg-stat-tcpinfo   # PG 17
apt install -y postgresql-16-pg-stat-tcpinfo   # PG 16
apt install -y postgresql-15-pg-stat-tcpinfo   # PG 15
apt install -y postgresql-14-pg-stat-tcpinfo   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_stat_tcpinfo;
```

## 用法

来源：

- [README](https://github.com/jakubwartakEDB/pg_stat_tcpinfo/blob/v1.1/README.md)
- [安装 SQL](https://github.com/jakubwartakEDB/pg_stat_tcpinfo/blob/v1.1/pg_stat_tcpinfo--1.1.sql)
- [扩展控制文件](https://github.com/jakubwartakEDB/pg_stat_tcpinfo/blob/v1.1/pg_stat_tcpinfo.control)
- [1.1 版本发布](https://github.com/jakubwartakEDB/pg_stat_tcpinfo/releases/tag/v1.1)
- [许可证](https://github.com/jakubwartakEDB/pg_stat_tcpinfo/blob/v1.1/LICENSE)

`pg_stat_tcpinfo` 1.1 通过 SQL 提供 Linux TCP 套接字统计，利用往返延迟、重传次数、拥塞控制和队列大小，帮助排查缓慢的客户端连接、复制链路与外部服务器连接，无需登录主机 Shell。

扩展要求 Linux 4.18 或更新版本，能够访问 `/proc` 和 `NETLINK_INET_DIAG` 接口。须由超级用户安装，无需预加载或重启数据库。

### 核心用法

```sql
CREATE EXTENSION pg_stat_tcpinfo;

SELECT a.pid, a.usename, a.application_name,
       t.dst_addr, t.dst_port, t.state, t.recvq, t.sendq,
       t.tcpinfo->>'rtt' AS rtt_ms,
       t.tcpinfo->>'total_retrans' AS retransmissions,
       t.tcpinfo->>'congestion' AS congestion_control
FROM pg_stat_activity a
JOIN pg_stat_tcpinfo t ON t.pid = a.pid
WHERE t.state = 'ESTABLISHED';
```

### 对象与指标

`pg_stat_tcpinfo` 视图调用 `pg_stat_get_tcpinfo()`。每行包含进程与操作系统用户 ID、本地和远端地址及端口、连接状态、收发队列，以及 `tcpinfo` JSONB 对象。支持 IPv4 和 IPv6 套接字；`rtt` 以毫秒为单位，`total_retrans` 为累计重传计数。

视图包含数据库服务端操作系统用户拥有的全部 TCP 套接字，也可能包含同一账号下其他数据库集群或程序的连接。按后端 PID 关联可将结果缩小到当前集群可见的连接。Unix 域连接不属于 TCP 套接字，不会显示；TIME-WAIT 套接字没有属主，也会被排除。旧内核不支持的指标可能为空。

### 权限

安装脚本撤销函数的公共执行权限，并将函数和视图访问权授予 `pg_read_all_stats`，`pg_monitor` 继承这些权限。普通应用角色默认不能读取指标。额外授权会暴露服务端操作系统用户的全部套接字，并不限于调用者自己的数据库连接。

### 运行边界

每次调用都会扫描进程描述符并查询内核，提供当前状态，不保存历史采样。容器的 PID、网络命名空间和 procfs 访问限制决定可见的套接字与进程。应根据进程和连接数量选择采样间隔。

使用与服务端 PostgreSQL 主版本匹配的软件包。1.1 版本包含 1.0 和 1.1 的新安装 SQL，但未提供两者之间的升级脚本，因此现有 1.0 安装没有上游提供的 `ALTER EXTENSION pg_stat_tcpinfo UPDATE` 升级路径。

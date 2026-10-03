---
title: "sslutils"
linkTitle: "sslutils"
description: "使用SQL管理SSL证书"
weight: 7410
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/EnterpriseDB/sslutils">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">EnterpriseDB/sslutils</div>
    <div class="ext-card__desc">https://github.com/EnterpriseDB/sslutils</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/sslutils-1.4.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">sslutils-1.4.1.tar.gz</div>
    <div class="ext-card__desc">sslutils-1.4.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`sslutils`**](/ext/e/sslutils) | `1.4.1` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7410  | [**`sslutils`**](/ext/e/sslutils) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`sslinfo`](/ext/e/sslinfo) [`pg_oidc_validator`](/ext/e/pg_oidc_validator) [`oidc_validator`](/ext/e/oidc_validator) [`pguecc`](/ext/e/pguecc) [`pg_session_jwt`](/ext/e/pg_session_jwt) [`pgjwt`](/ext/e/pgjwt) [`pgsodium`](/ext/e/pgsodium) [`login_hook`](/ext/e/login_hook) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGDG packages remain absent for PG18 on EL8 x86_64.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `sslutils` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `sslutils_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-sslutils` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el8.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| el9.x86_64 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 |
| el9.aarch64 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 |
| el10.x86_64 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 |
| el10.aarch64 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 | AVAIL PGDG 1.4 3 |
| d12.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| d13.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u22.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u24.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u26.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u26.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
@ el8.x86_64 18 sslutils_18 sslutils_18-1.4-3PIGSTY.el8.x86_64.rpm pigsty 1.4 24.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/sslutils_18-1.4-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 sslutils_18 sslutils_18-1.4-3PIGSTY.el8.aarch64.rpm pigsty 1.4 23.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/sslutils_18-1.4-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 sslutils_18 sslutils_18-1.4-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/sslutils_18-1.4-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 sslutils_18 sslutils_18-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sslutils_18-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 sslutils_18 sslutils_18-1.4-2PGDG.rhel9.x86_64.rpm pgdg 1.4 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/sslutils_18-1.4-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 sslutils_18 sslutils_18-1.4-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/sslutils_18-1.4-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 sslutils_18 sslutils_18-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 23.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sslutils_18-1.4-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 sslutils_18 sslutils_18-1.4-2PGDG.rhel9.aarch64.rpm pgdg 1.4 23.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/sslutils_18-1.4-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 sslutils_18 sslutils_18-1.4-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4 25.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/sslutils_18-1.4-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 sslutils_18 sslutils_18-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sslutils_18-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 sslutils_18 sslutils_18-1.4-2PGDG.rhel10.x86_64.rpm pgdg 1.4 25.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/sslutils_18-1.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/sslutils_18-1.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 24.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sslutils_18-1.4-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/sslutils_18-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~bookworm_amd64.deb pigsty 1.4 37.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~bookworm_arm64.deb pigsty 1.4 35.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~trixie_amd64.deb pigsty 1.4 37.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~trixie_arm64.deb pigsty 1.4 36.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~jammy_amd64.deb pigsty 1.4 40.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~jammy_arm64.deb pigsty 1.4 38.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~noble_amd64.deb pigsty 1.4 39.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~noble_arm64.deb pigsty 1.4 38.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~resolute_amd64.deb pigsty 1.4 40.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~resolute_arm64.deb pigsty 1.4 38.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 24.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/sslutils_17-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 sslutils_17 sslutils_17-1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.4 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/sslutils_17-1.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 23.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/sslutils_17-1.4-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 sslutils_17 sslutils_17-1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.4 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/sslutils_17-1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 sslutils_17 sslutils_17-1.4-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/sslutils_17-1.4-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sslutils_17-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 sslutils_17 sslutils_17-1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/sslutils_17-1.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 sslutils_17 sslutils_17-1.4-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/sslutils_17-1.4-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 23.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sslutils_17-1.4-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 sslutils_17 sslutils_17-1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/sslutils_17-1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 sslutils_17 sslutils_17-1.4-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4 25.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/sslutils_17-1.4-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sslutils_17-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 sslutils_17 sslutils_17-1.4-2PGDG.rhel10.x86_64.rpm pgdg 1.4 25.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/sslutils_17-1.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/sslutils_17-1.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 24.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sslutils_17-1.4-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/sslutils_17-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~bookworm_amd64.deb pigsty 1.4 36.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~bookworm_arm64.deb pigsty 1.4 35.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~trixie_amd64.deb pigsty 1.4 37.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~trixie_arm64.deb pigsty 1.4 36.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~jammy_amd64.deb pigsty 1.4 42.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~jammy_arm64.deb pigsty 1.4 41.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~noble_amd64.deb pigsty 1.4 39.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~noble_arm64.deb pigsty 1.4 38.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~resolute_amd64.deb pigsty 1.4 40.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~resolute_arm64.deb pigsty 1.4 38.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 24.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/sslutils_16-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 sslutils_16 sslutils_16-1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.4 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/sslutils_16-1.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 23.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/sslutils_16-1.4-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 sslutils_16 sslutils_16-1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.4 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/sslutils_16-1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 sslutils_16 sslutils_16-1.4-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/sslutils_16-1.4-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sslutils_16-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 sslutils_16 sslutils_16-1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/sslutils_16-1.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 sslutils_16 sslutils_16-1.4-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/sslutils_16-1.4-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 23.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sslutils_16-1.4-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 sslutils_16 sslutils_16-1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/sslutils_16-1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 sslutils_16 sslutils_16-1.4-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4 25.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/sslutils_16-1.4-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sslutils_16-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 sslutils_16 sslutils_16-1.4-2PGDG.rhel10.x86_64.rpm pgdg 1.4 25.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/sslutils_16-1.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/sslutils_16-1.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 24.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sslutils_16-1.4-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/sslutils_16-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~bookworm_amd64.deb pigsty 1.4 37.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~bookworm_arm64.deb pigsty 1.4 35.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~trixie_amd64.deb pigsty 1.4 37.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~trixie_arm64.deb pigsty 1.4 36.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~jammy_amd64.deb pigsty 1.4 42.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~jammy_arm64.deb pigsty 1.4 41.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~noble_amd64.deb pigsty 1.4 39.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~noble_arm64.deb pigsty 1.4 38.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~resolute_amd64.deb pigsty 1.4 40.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~resolute_arm64.deb pigsty 1.4 38.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 24.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/sslutils_15-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 sslutils_15 sslutils_15-1.3-4.rhel8.x86_64.rpm pgdg 1.3 49.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/sslutils_15-1.3-4.rhel8.x86_64.rpm
@ el8.aarch64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 23.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/sslutils_15-1.4-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 sslutils_15 sslutils_15-1.4-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/sslutils_15-1.4-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sslutils_15-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 sslutils_15 sslutils_15-1.4-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/sslutils_15-1.4-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 23.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sslutils_15-1.4-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 sslutils_15 sslutils_15-1.4-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4 25.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/sslutils_15-1.4-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sslutils_15-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 sslutils_15 sslutils_15-1.4-2PGDG.rhel10.x86_64.rpm pgdg 1.4 25.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/sslutils_15-1.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/sslutils_15-1.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sslutils_15-1.4-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/sslutils_15-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~bookworm_amd64.deb pigsty 1.4 37.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~bookworm_arm64.deb pigsty 1.4 35.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~trixie_amd64.deb pigsty 1.4 37.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~trixie_arm64.deb pigsty 1.4 36.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~jammy_amd64.deb pigsty 1.4 42.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~jammy_arm64.deb pigsty 1.4 41.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~noble_amd64.deb pigsty 1.4 39.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~noble_arm64.deb pigsty 1.4 38.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~resolute_amd64.deb pigsty 1.4 40.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~resolute_arm64.deb pigsty 1.4 38.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 24.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/sslutils_14-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 sslutils_14 sslutils_14-1.3-4.rhel8.x86_64.rpm pgdg 1.3 48.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/sslutils_14-1.3-4.rhel8.x86_64.rpm
@ el8.aarch64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 23.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/sslutils_14-1.4-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 sslutils_14 sslutils_14-1.4-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/sslutils_14-1.4-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sslutils_14-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 sslutils_14 sslutils_14-1.4-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/sslutils_14-1.4-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 23.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sslutils_14-1.4-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 sslutils_14 sslutils_14-1.4-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4 25.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/sslutils_14-1.4-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sslutils_14-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 sslutils_14 sslutils_14-1.4-2PGDG.rhel10.x86_64.rpm pgdg 1.4 25.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/sslutils_14-1.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 sslutils_14 sslutils_14-1.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/sslutils_14-1.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sslutils_14-1.4-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 sslutils_14 sslutils_14-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/sslutils_14-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~bookworm_amd64.deb pigsty 1.4 37.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~bookworm_arm64.deb pigsty 1.4 35.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~trixie_amd64.deb pigsty 1.4 37.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~trixie_arm64.deb pigsty 1.4 36.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~jammy_amd64.deb pigsty 1.4 42.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~jammy_arm64.deb pigsty 1.4 41.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~noble_amd64.deb pigsty 1.4 39.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~noble_arm64.deb pigsty 1.4 38.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~resolute_amd64.deb pigsty 1.4 40.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~resolute_arm64.deb pigsty 1.4 38.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `sslutils` 扩展的 RPM / DEB 包：

```bash
pig build pkg sslutils         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `sslutils` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install sslutils;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y sslutils -v 18  # PG 18
pig ext install -y sslutils -v 17  # PG 17
pig ext install -y sslutils -v 16  # PG 16
pig ext install -y sslutils -v 15  # PG 15
pig ext install -y sslutils -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y sslutils_18       # PG 18
dnf install -y sslutils_17       # PG 17
dnf install -y sslutils_16       # PG 16
dnf install -y sslutils_15       # PG 15
dnf install -y sslutils_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-sslutils   # PG 18
apt install -y postgresql-17-sslutils   # PG 17
apt install -y postgresql-16-sslutils   # PG 16
apt install -y postgresql-15-sslutils   # PG 15
apt install -y postgresql-14-sslutils   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION sslutils;
```

## 用法

来源：

- [1.4.1 README](https://github.com/EnterpriseDB/sslutils/blob/v1.4.1/README.sslutils)
- [1.4.1 SQL API](https://github.com/EnterpriseDB/sslutils/blob/v1.4.1/sslutils--1.4.1.sql)
- [1.4.1 control file](https://github.com/EnterpriseDB/sslutils/blob/v1.4.1/sslutils.control)
- [File-access checks](https://github.com/EnterpriseDB/sslutils/blob/v1.4.1/sslutils.c)

`sslutils` 为 Postgres Enterprise Manager 及受控管理流程提供 SSL 证书生成和吊销辅助函数。部分函数会读取或修改数据库服务器上的文件。

### 安装和检查

```sql
CREATE EXTENSION sslutils;
SELECT sslutils_version();
SELECT openssl_get_crt_expiry_date('server.crt');
```

这个不可重定位的扩展需要超级用户安装。调用函数无需预加载或重启 PostgreSQL；部署生成的证书是另外的服务器配置操作。

### 主要函数

| 函数 | 用途 |
|---|---|
| `openssl_rsa_generate_key(bits)` | 以文本返回 RSA 私钥 |
| `openssl_rsa_key_to_csr(key, cn, country, state, location, unit, email)` | 返回 CSR |
| `openssl_csr_to_crt(csr, ca_cert_path, private_key_path, days)` | 使用服务器证书和私钥文件签署 CSR |
| `openssl_rsa_generate_crl(ca_cert_path, ca_key_path, days)` | 返回证书吊销列表 |
| `openssl_is_crt_expire_on(cert_path, at_time)` | 检查证书到期情况，返回 1、-1 或 0 |
| `openssl_get_crt_expiry_date(cert_path)` | 返回到期时间戳 |
| `openssl_revoke_certificate(cert_pem, crl_path, days)` | 吊销证书并重新生成 CRL |

生成自签名证书时，签署函数的证书路径参数为 NULL，私钥路径指定签名密钥。可选有效期默认是 3650 天。文件路径指向 PostgreSQL 服务器，而非 SQL 客户端机器。

### 保护密钥和服务器文件

在 PostgreSQL 11 及以上，证书检查函数需要 `pg_read_server_files` 成员资格；吊销操作同时检查该角色和 `pg_write_server_files`。这些角色具有广泛的服务器文件访问能力，应仅授予可信管理员，并按需限制函数执行权限。

以 SQL 文本返回的私钥可能进入查询结果、日志、命令历史或应用追踪。应保护它们的传递和存储。这个扩展不提供 SSL 会话检查函数，也不会自动配置 PostgreSQL 的 TLS 设置。

### 1.4.1 的文件访问变化

证书检查和 CA 签名路径会检查是否位于服务器数据目录内；应将输入文件放在该目录，并在适当时使用服务器相对路径。吊销要求设置 `sslutils.revoke_certificate_crl_paths`，它是在 postgresql.conf 中配置、重载后生效的 CRL 输出路径前缀逗号分隔允许列表。吊销检查仅比较字符串前缀，不解析规范化路径来验证目录包含关系；应配置范围较窄的前缀，并保护输出位置。

吊销实现的第一个参数接收 PEM 证书文本，尽管较早 README 和 SQL 注释描述为证书路径。它读取服务器上的 CA 文件 `ca_certificate.crt`、`ca_key.key`，并创建或追加 `revoke_cert.db`。操作前应准备好 CA 文件。不要认为广泛的服务器文件角色能够绕过扩展自身的检查。

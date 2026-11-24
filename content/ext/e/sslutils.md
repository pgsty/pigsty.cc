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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/sslutils-1.4.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">sslutils-1.4.2.tar.gz</div>
    <div class="ext-card__desc">sslutils-1.4.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`sslutils`**](/ext/e/sslutils) | `1.4.2` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7410  | [**`sslutils`**](/ext/e/sslutils) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`sslinfo`](/ext/e/sslinfo) [`pg_oidc_validator`](/ext/e/pg_oidc_validator) [`oidc_validator`](/ext/e/oidc_validator) [`pguecc`](/ext/e/pguecc) [`pg_session_jwt`](/ext/e/pg_session_jwt) [`pgjwt`](/ext/e/pgjwt) [`pgsodium`](/ext/e/pgsodium) [`login_hook`](/ext/e/login_hook) [`libx509pq`](/ext/e/libx509pq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.2` | {{< pgvers "19,18,17,16,15" >}} | `sslutils` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.2` | {{< pgvers "19,18,17,16,15" >}} | `sslutils_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.2` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-sslutils` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 4 | AVAIL PIGSTY 1.4.2 4 | AVAIL PIGSTY 1.4.2 4 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 4 | AVAIL PIGSTY 1.4.2 4 | AVAIL PIGSTY 1.4.2 3 |
| el9.x86_64 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 |
| el9.aarch64 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 |
| el10.x86_64 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 3 |
| el10.aarch64 | AVAIL PIGSTY 1.4.2 3 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 | AVAIL PIGSTY 1.4.2 7 |
| d12.x86_64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u26.x86_64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
| u26.aarch64 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 | AVAIL PIGSTY 1.4.2 1 |
@ el9.x86_64 19 sslutils_19 sslutils_19-1.4.2-1PGSTY.el9.x86_64.rpm pigsty 1.4.2 57.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sslutils_19-1.4.2-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 19 sslutils_19 sslutils_19-1.4.2-1PGDG.rhel9.9.x86_64.rpm pgdg 1.4.2 30.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-x86_64/sslutils_19-1.4.2-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 19 sslutils_19 sslutils_19-1.4.1-4PGDG.rhel9.9.x86_64.rpm pgdg 1.4.1 27.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-x86_64/sslutils_19-1.4.1-4PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 19 sslutils_19 sslutils_19-1.4.2-1PGSTY.el9.aarch64.rpm pigsty 1.4.2 55.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sslutils_19-1.4.2-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 19 sslutils_19 sslutils_19-1.4.2-1PGDG.rhel9.9.aarch64.rpm pgdg 1.4.2 29.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-aarch64/sslutils_19-1.4.2-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 19 sslutils_19 sslutils_19-1.4.1-4PGDG.rhel9.9.aarch64.rpm pgdg 1.4.1 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-aarch64/sslutils_19-1.4.1-4PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 19 sslutils_19 sslutils_19-1.4.2-1PGSTY.el10.x86_64.rpm pigsty 1.4.2 58.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sslutils_19-1.4.2-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 19 sslutils_19 sslutils_19-1.4.2-1PGDG.rhel10.3.x86_64.rpm pgdg 1.4.2 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-x86_64/sslutils_19-1.4.2-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 19 sslutils_19 sslutils_19-1.4.1-4PGDG.rhel10.3.x86_64.rpm pgdg 1.4.1 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-x86_64/sslutils_19-1.4.1-4PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 19 sslutils_19 sslutils_19-1.4.2-1PGSTY.el10.aarch64.rpm pigsty 1.4.2 57.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sslutils_19-1.4.2-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 19 sslutils_19 sslutils_19-1.4.2-1PGDG.rhel10.3.aarch64.rpm pgdg 1.4.2 30.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-aarch64/sslutils_19-1.4.2-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 19 sslutils_19 sslutils_19-1.4.1-4PGDG.rhel10.3.aarch64.rpm pgdg 1.4.1 27.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-aarch64/sslutils_19-1.4.1-4PGDG.rhel10.3.aarch64.rpm
@ d12.x86_64 19 postgresql-19-sslutils postgresql-19-sslutils_1.4.2-1PGSTY~bookworm_amd64.deb pigsty 1.4.2 45.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-19-sslutils_1.4.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-sslutils postgresql-19-sslutils_1.4.2-1PGSTY~bookworm_arm64.deb pigsty 1.4.2 43.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-19-sslutils_1.4.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-sslutils postgresql-19-sslutils_1.4.2-1PGSTY~trixie_amd64.deb pigsty 1.4.2 45.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-19-sslutils_1.4.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-sslutils postgresql-19-sslutils_1.4.2-1PGSTY~trixie_arm64.deb pigsty 1.4.2 44.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-19-sslutils_1.4.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-sslutils postgresql-19-sslutils_1.4.2-1PGSTY~jammy_amd64.deb pigsty 1.4.2 49.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-19-sslutils_1.4.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-sslutils postgresql-19-sslutils_1.4.2-1PGSTY~jammy_arm64.deb pigsty 1.4.2 47.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-19-sslutils_1.4.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-sslutils postgresql-19-sslutils_1.4.2-1PGSTY~noble_amd64.deb pigsty 1.4.2 48.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-19-sslutils_1.4.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-sslutils postgresql-19-sslutils_1.4.2-1PGSTY~noble_arm64.deb pigsty 1.4.2 46.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-19-sslutils_1.4.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-sslutils postgresql-19-sslutils_1.4.2-1PGSTY~resolute_amd64.deb pigsty 1.4.2 48.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-19-sslutils_1.4.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-sslutils postgresql-19-sslutils_1.4.2-1PGSTY~resolute_arm64.deb pigsty 1.4.2 46.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-19-sslutils_1.4.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 sslutils_18 sslutils_18-1.4.2-1PGSTY.el8.x86_64.rpm pigsty 1.4.2 55.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/sslutils_18-1.4.2-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 sslutils_18 sslutils_18-1.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.2 30.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/sslutils_18-1.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 sslutils_18 sslutils_18-1.4.1-4PGDG.rhel8.10.x86_64.rpm pgdg 1.4.1 28.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/sslutils_18-1.4.1-4PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 sslutils_18 sslutils_18-1.4.2-1PGSTY.el8.aarch64.rpm pigsty 1.4.2 54.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/sslutils_18-1.4.2-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 18 sslutils_18 sslutils_18-1.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.2 29.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/sslutils_18-1.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 sslutils_18 sslutils_18-1.4.1-4PGDG.rhel8.10.aarch64.rpm pgdg 1.4.1 26.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/sslutils_18-1.4.1-4PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 sslutils_18 sslutils_18-1.4.2-1PGSTY.el9.x86_64.rpm pigsty 1.4.2 57.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sslutils_18-1.4.2-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 18 sslutils_18 sslutils_18-1.4.2-1PGDG.rhel9.9.x86_64.rpm pgdg 1.4.2 30.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/sslutils_18-1.4.2-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 18 sslutils_18 sslutils_18-1.4.1-4PGDG.rhel9.9.x86_64.rpm pgdg 1.4.1 27.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/sslutils_18-1.4.1-4PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 18 sslutils_18 sslutils_18-1.4.2-1PGSTY.el9.aarch64.rpm pigsty 1.4.2 55.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sslutils_18-1.4.2-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 18 sslutils_18 sslutils_18-1.4.2-1PGDG.rhel9.9.aarch64.rpm pgdg 1.4.2 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/sslutils_18-1.4.2-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 18 sslutils_18 sslutils_18-1.4.1-4PGDG.rhel9.9.aarch64.rpm pgdg 1.4.1 26.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/sslutils_18-1.4.1-4PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 18 sslutils_18 sslutils_18-1.4.2-1PGSTY.el10.x86_64.rpm pigsty 1.4.2 58.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sslutils_18-1.4.2-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 18 sslutils_18 sslutils_18-1.4.2-1PGDG.rhel10.3.x86_64.rpm pgdg 1.4.2 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/sslutils_18-1.4.2-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 18 sslutils_18 sslutils_18-1.4.1-4PGDG.rhel10.3.x86_64.rpm pgdg 1.4.1 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/sslutils_18-1.4.1-4PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4.2-1PGSTY.el10.aarch64.rpm pigsty 1.4.2 56.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sslutils_18-1.4.2-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4.2-1PGDG.rhel10.3.aarch64.rpm pgdg 1.4.2 29.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/sslutils_18-1.4.2-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 30.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/sslutils_18-1.4.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4.1-4PGDG.rhel10.3.aarch64.rpm pgdg 1.4.1 27.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/sslutils_18-1.4.1-4PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4.1-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 27.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/sslutils_18-1.4.1-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/sslutils_18-1.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/sslutils_18-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4.2-1PGSTY~bookworm_amd64.deb pigsty 1.4.2 45.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-18-sslutils_1.4.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4.2-1PGSTY~bookworm_arm64.deb pigsty 1.4.2 43.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-18-sslutils_1.4.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4.2-1PGSTY~trixie_amd64.deb pigsty 1.4.2 45.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-18-sslutils_1.4.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4.2-1PGSTY~trixie_arm64.deb pigsty 1.4.2 44.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-18-sslutils_1.4.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4.2-1PGSTY~jammy_amd64.deb pigsty 1.4.2 49.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-18-sslutils_1.4.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4.2-1PGSTY~jammy_arm64.deb pigsty 1.4.2 47.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-18-sslutils_1.4.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4.2-1PGSTY~noble_amd64.deb pigsty 1.4.2 48.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-18-sslutils_1.4.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4.2-1PGSTY~noble_arm64.deb pigsty 1.4.2 46.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-18-sslutils_1.4.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4.2-1PGSTY~resolute_amd64.deb pigsty 1.4.2 48.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-18-sslutils_1.4.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4.2-1PGSTY~resolute_arm64.deb pigsty 1.4.2 46.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-18-sslutils_1.4.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 sslutils_17 sslutils_17-1.4.2-1PGSTY.el8.x86_64.rpm pigsty 1.4.2 55.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/sslutils_17-1.4.2-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 sslutils_17 sslutils_17-1.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.2 30.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/sslutils_17-1.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 sslutils_17 sslutils_17-1.4.1-4PGDG.rhel8.10.x86_64.rpm pgdg 1.4.1 28.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/sslutils_17-1.4.1-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 sslutils_17 sslutils_17-1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.4 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/sslutils_17-1.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 sslutils_17 sslutils_17-1.4.2-1PGSTY.el8.aarch64.rpm pigsty 1.4.2 54.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/sslutils_17-1.4.2-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 17 sslutils_17 sslutils_17-1.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.2 29.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/sslutils_17-1.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 sslutils_17 sslutils_17-1.4.1-4PGDG.rhel8.10.aarch64.rpm pgdg 1.4.1 26.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/sslutils_17-1.4.1-4PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 sslutils_17 sslutils_17-1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.4 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/sslutils_17-1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 sslutils_17 sslutils_17-1.4.2-1PGSTY.el9.x86_64.rpm pigsty 1.4.2 57.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sslutils_17-1.4.2-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 17 sslutils_17 sslutils_17-1.4.2-1PGDG.rhel9.9.x86_64.rpm pgdg 1.4.2 30.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/sslutils_17-1.4.2-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 17 sslutils_17 sslutils_17-1.4.1-4PGDG.rhel9.9.x86_64.rpm pgdg 1.4.1 27.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/sslutils_17-1.4.1-4PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 17 sslutils_17 sslutils_17-1.4.2-1PGSTY.el9.aarch64.rpm pigsty 1.4.2 55.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sslutils_17-1.4.2-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 17 sslutils_17 sslutils_17-1.4.2-1PGDG.rhel9.9.aarch64.rpm pgdg 1.4.2 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/sslutils_17-1.4.2-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 17 sslutils_17 sslutils_17-1.4.1-4PGDG.rhel9.9.aarch64.rpm pgdg 1.4.1 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/sslutils_17-1.4.1-4PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 17 sslutils_17 sslutils_17-1.4.2-1PGSTY.el10.x86_64.rpm pigsty 1.4.2 58.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sslutils_17-1.4.2-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 17 sslutils_17 sslutils_17-1.4.2-1PGDG.rhel10.3.x86_64.rpm pgdg 1.4.2 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/sslutils_17-1.4.2-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 17 sslutils_17 sslutils_17-1.4.1-4PGDG.rhel10.3.x86_64.rpm pgdg 1.4.1 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/sslutils_17-1.4.1-4PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4.2-1PGSTY.el10.aarch64.rpm pigsty 1.4.2 56.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sslutils_17-1.4.2-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4.2-1PGDG.rhel10.3.aarch64.rpm pgdg 1.4.2 29.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/sslutils_17-1.4.2-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 29.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/sslutils_17-1.4.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4.1-4PGDG.rhel10.3.aarch64.rpm pgdg 1.4.1 27.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/sslutils_17-1.4.1-4PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4.1-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 27.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/sslutils_17-1.4.1-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/sslutils_17-1.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/sslutils_17-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4.2-1PGSTY~bookworm_amd64.deb pigsty 1.4.2 45.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-17-sslutils_1.4.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4.2-1PGSTY~bookworm_arm64.deb pigsty 1.4.2 43.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-17-sslutils_1.4.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4.2-1PGSTY~trixie_amd64.deb pigsty 1.4.2 45.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-17-sslutils_1.4.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4.2-1PGSTY~trixie_arm64.deb pigsty 1.4.2 44.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-17-sslutils_1.4.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4.2-1PGSTY~jammy_amd64.deb pigsty 1.4.2 51.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-17-sslutils_1.4.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4.2-1PGSTY~jammy_arm64.deb pigsty 1.4.2 50.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-17-sslutils_1.4.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4.2-1PGSTY~noble_amd64.deb pigsty 1.4.2 47.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-17-sslutils_1.4.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4.2-1PGSTY~noble_arm64.deb pigsty 1.4.2 46.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-17-sslutils_1.4.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4.2-1PGSTY~resolute_amd64.deb pigsty 1.4.2 48.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-17-sslutils_1.4.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4.2-1PGSTY~resolute_arm64.deb pigsty 1.4.2 46.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-17-sslutils_1.4.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 sslutils_16 sslutils_16-1.4.2-1PGSTY.el8.x86_64.rpm pigsty 1.4.2 55.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/sslutils_16-1.4.2-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 sslutils_16 sslutils_16-1.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.2 30.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/sslutils_16-1.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 sslutils_16 sslutils_16-1.4.1-4PGDG.rhel8.10.x86_64.rpm pgdg 1.4.1 28.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/sslutils_16-1.4.1-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 sslutils_16 sslutils_16-1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.4 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/sslutils_16-1.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 sslutils_16 sslutils_16-1.4.2-1PGSTY.el8.aarch64.rpm pigsty 1.4.2 54.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/sslutils_16-1.4.2-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 16 sslutils_16 sslutils_16-1.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.2 29.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/sslutils_16-1.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 sslutils_16 sslutils_16-1.4.1-4PGDG.rhel8.10.aarch64.rpm pgdg 1.4.1 26.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/sslutils_16-1.4.1-4PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 sslutils_16 sslutils_16-1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.4 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/sslutils_16-1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 sslutils_16 sslutils_16-1.4.2-1PGSTY.el9.x86_64.rpm pigsty 1.4.2 57.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sslutils_16-1.4.2-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 16 sslutils_16 sslutils_16-1.4.2-1PGDG.rhel9.9.x86_64.rpm pgdg 1.4.2 30.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/sslutils_16-1.4.2-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 16 sslutils_16 sslutils_16-1.4.1-4PGDG.rhel9.9.x86_64.rpm pgdg 1.4.1 27.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/sslutils_16-1.4.1-4PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 16 sslutils_16 sslutils_16-1.4.2-1PGSTY.el9.aarch64.rpm pigsty 1.4.2 55.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sslutils_16-1.4.2-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 16 sslutils_16 sslutils_16-1.4.2-1PGDG.rhel9.9.aarch64.rpm pgdg 1.4.2 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/sslutils_16-1.4.2-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 16 sslutils_16 sslutils_16-1.4.1-4PGDG.rhel9.9.aarch64.rpm pgdg 1.4.1 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/sslutils_16-1.4.1-4PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 16 sslutils_16 sslutils_16-1.4.2-1PGSTY.el10.x86_64.rpm pigsty 1.4.2 58.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sslutils_16-1.4.2-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 16 sslutils_16 sslutils_16-1.4.2-1PGDG.rhel10.3.x86_64.rpm pgdg 1.4.2 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/sslutils_16-1.4.2-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 16 sslutils_16 sslutils_16-1.4.1-4PGDG.rhel10.3.x86_64.rpm pgdg 1.4.1 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/sslutils_16-1.4.1-4PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4.2-1PGSTY.el10.aarch64.rpm pigsty 1.4.2 56.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sslutils_16-1.4.2-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4.2-1PGDG.rhel10.3.aarch64.rpm pgdg 1.4.2 29.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/sslutils_16-1.4.2-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 29.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/sslutils_16-1.4.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4.1-4PGDG.rhel10.3.aarch64.rpm pgdg 1.4.1 27.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/sslutils_16-1.4.1-4PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4.1-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 27.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/sslutils_16-1.4.1-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/sslutils_16-1.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/sslutils_16-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4.2-1PGSTY~bookworm_amd64.deb pigsty 1.4.2 45.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-16-sslutils_1.4.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4.2-1PGSTY~bookworm_arm64.deb pigsty 1.4.2 43.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-16-sslutils_1.4.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4.2-1PGSTY~trixie_amd64.deb pigsty 1.4.2 45.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-16-sslutils_1.4.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4.2-1PGSTY~trixie_arm64.deb pigsty 1.4.2 44.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-16-sslutils_1.4.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4.2-1PGSTY~jammy_amd64.deb pigsty 1.4.2 51.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-16-sslutils_1.4.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4.2-1PGSTY~jammy_arm64.deb pigsty 1.4.2 50.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-16-sslutils_1.4.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4.2-1PGSTY~noble_amd64.deb pigsty 1.4.2 47.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-16-sslutils_1.4.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4.2-1PGSTY~noble_arm64.deb pigsty 1.4.2 46.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-16-sslutils_1.4.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4.2-1PGSTY~resolute_amd64.deb pigsty 1.4.2 48.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-16-sslutils_1.4.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4.2-1PGSTY~resolute_arm64.deb pigsty 1.4.2 46.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-16-sslutils_1.4.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 sslutils_15 sslutils_15-1.4.2-1PGSTY.el8.x86_64.rpm pigsty 1.4.2 55.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/sslutils_15-1.4.2-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 15 sslutils_15 sslutils_15-1.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.2 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/sslutils_15-1.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 sslutils_15 sslutils_15-1.4.1-4PGDG.rhel8.10.x86_64.rpm pgdg 1.4.1 28.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/sslutils_15-1.4.1-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 sslutils_15 sslutils_15-1.3-4.rhel8.x86_64.rpm pgdg 1.3 49.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/sslutils_15-1.3-4.rhel8.x86_64.rpm
@ el8.aarch64 15 sslutils_15 sslutils_15-1.4.2-1PGSTY.el8.aarch64.rpm pigsty 1.4.2 54.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/sslutils_15-1.4.2-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 15 sslutils_15 sslutils_15-1.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.2 29.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/sslutils_15-1.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 sslutils_15 sslutils_15-1.4.1-4PGDG.rhel8.10.aarch64.rpm pgdg 1.4.1 26.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/sslutils_15-1.4.1-4PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 15 sslutils_15 sslutils_15-1.4.2-1PGSTY.el9.x86_64.rpm pigsty 1.4.2 57.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/sslutils_15-1.4.2-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 15 sslutils_15 sslutils_15-1.4.2-1PGDG.rhel9.9.x86_64.rpm pgdg 1.4.2 30.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/sslutils_15-1.4.2-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 15 sslutils_15 sslutils_15-1.4.1-4PGDG.rhel9.9.x86_64.rpm pgdg 1.4.1 27.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/sslutils_15-1.4.1-4PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 15 sslutils_15 sslutils_15-1.4.2-1PGSTY.el9.aarch64.rpm pigsty 1.4.2 55.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/sslutils_15-1.4.2-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 15 sslutils_15 sslutils_15-1.4.2-1PGDG.rhel9.9.aarch64.rpm pgdg 1.4.2 29.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/sslutils_15-1.4.2-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 15 sslutils_15 sslutils_15-1.4.1-4PGDG.rhel9.9.aarch64.rpm pgdg 1.4.1 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/sslutils_15-1.4.1-4PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 15 sslutils_15 sslutils_15-1.4.2-1PGSTY.el10.x86_64.rpm pigsty 1.4.2 58.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/sslutils_15-1.4.2-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 15 sslutils_15 sslutils_15-1.4.2-1PGDG.rhel10.3.x86_64.rpm pgdg 1.4.2 31.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/sslutils_15-1.4.2-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 15 sslutils_15 sslutils_15-1.4.1-4PGDG.rhel10.3.x86_64.rpm pgdg 1.4.1 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/sslutils_15-1.4.1-4PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4.2-1PGSTY.el10.aarch64.rpm pigsty 1.4.2 56.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/sslutils_15-1.4.2-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4.2-1PGDG.rhel10.3.aarch64.rpm pgdg 1.4.2 30.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/sslutils_15-1.4.2-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 30.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/sslutils_15-1.4.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4.1-4PGDG.rhel10.3.aarch64.rpm pgdg 1.4.1 27.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/sslutils_15-1.4.1-4PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4.1-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.1 27.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/sslutils_15-1.4.1-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/sslutils_15-1.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/sslutils_15-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4.2-1PGSTY~bookworm_amd64.deb pigsty 1.4.2 45.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-15-sslutils_1.4.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4.2-1PGSTY~bookworm_arm64.deb pigsty 1.4.2 43.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-15-sslutils_1.4.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4.2-1PGSTY~trixie_amd64.deb pigsty 1.4.2 45.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-15-sslutils_1.4.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4.2-1PGSTY~trixie_arm64.deb pigsty 1.4.2 44.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-15-sslutils_1.4.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4.2-1PGSTY~jammy_amd64.deb pigsty 1.4.2 51.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-15-sslutils_1.4.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4.2-1PGSTY~jammy_arm64.deb pigsty 1.4.2 50.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-15-sslutils_1.4.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4.2-1PGSTY~noble_amd64.deb pigsty 1.4.2 48.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-15-sslutils_1.4.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4.2-1PGSTY~noble_arm64.deb pigsty 1.4.2 46.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/sslutils/postgresql-15-sslutils_1.4.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4.2-1PGSTY~resolute_amd64.deb pigsty 1.4.2 48.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-15-sslutils_1.4.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4.2-1PGSTY~resolute_arm64.deb pigsty 1.4.2 46.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/sslutils/postgresql-15-sslutils_1.4.2-1PGSTY~resolute_arm64.deb
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
pig ext install -y sslutils -v 19  # PG 19
pig ext install -y sslutils -v 18  # PG 18
pig ext install -y sslutils -v 17  # PG 17
pig ext install -y sslutils -v 16  # PG 16
pig ext install -y sslutils -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y sslutils_19       # PG 19
dnf install -y sslutils_18       # PG 18
dnf install -y sslutils_17       # PG 17
dnf install -y sslutils_16       # PG 16
dnf install -y sslutils_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-sslutils   # PG 19
apt install -y postgresql-18-sslutils   # PG 18
apt install -y postgresql-17-sslutils   # PG 17
apt install -y postgresql-16-sslutils   # PG 16
apt install -y postgresql-15-sslutils   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION sslutils;
```

## 用法

来源：

- [1.4.2 README](https://github.com/EnterpriseDB/sslutils/blob/v1.4.2/README.sslutils)
- [1.4.2 SQL API](https://github.com/EnterpriseDB/sslutils/blob/v1.4.2/sslutils--1.4.2.sql)
- [1.4.2 control file](https://github.com/EnterpriseDB/sslutils/blob/v1.4.2/sslutils.control)
- [File-access checks](https://github.com/EnterpriseDB/sslutils/blob/v1.4.2/sslutils.c)
- [1.4.1 to 1.4.2 upgrade](https://github.com/EnterpriseDB/sslutils/blob/v1.4.2/sslutils--1.4.1--1.4.2.sql)
- [PEM agent grants](https://github.com/EnterpriseDB/sslutils/blob/v1.4.2/sslutils-pemagent.sql.in)

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

在 1.4.2 中，全部七个 `openssl_*` 函数采用 `SECURITY DEFINER`，并将 `search_path` 固定为 `pg_catalog, pg_temp`。其所有者 `sslutils_owner` 是集群级的 `INHERIT`、`NOLOGIN` 角色。在 PostgreSQL 11 及以上，它拥有 `pg_read_server_files` 和 `pg_write_server_files`，但不得拥有成员、管理权限属性或其他角色的成员资格。已有所有者角色不符合这些要求时，安装会失败。

`PUBLIC` 没有执行权限。安装或升级时，若已存在 `pem_agent`，则授予它 `EXECUTE`；已有的显式函数授权会保留。如果之后才创建代理角色，超级用户需要在扩展所在模式中执行已安装的 `sslutils-pemagent.sql`。使用非 public 模式的代理还需要该模式的 `USAGE`，但不应获得 `CREATE`。调用者需要相应函数权限，无需直接拥有服务器文件角色；绝不能授予它们 `sslutils_owner` 的成员资格。

仅向可信调用者授权，使其能够在允许路径内检查证书和使用 CA 密钥。限制在数据目录内并不能隔离不同代理或不同 CA。

以 SQL 文本返回的私钥可能进入查询结果、日志、命令历史或应用追踪。应保护它们的传递和存储。这个扩展不提供 SSL 会话检查函数，也不会自动配置 PostgreSQL 的 TLS 设置。

### 升级和已有授权

以超级用户升级已有安装：

```sql
ALTER EXTENSION sslutils UPDATE TO '1.4.2';
```

迁移调用者后，撤销代理原有的广泛文件角色授权：

```sql
REVOKE pg_read_server_files, pg_write_server_files FROM pem_agent;
```

还要检查各登录角色直接获得和继承的授权，包括 `pg_execute_server_program` 与超级用户权限。单个数据库内的扩展升级不会自动撤销这些集群级授权。删除扩展也会保留共享的 `sslutils_owner` 角色；只有在所有数据库中卸载扩展并撤销其文件角色成员资格之后，才能移除该角色。

### 文件访问边界

证书检查和 CA 签名路径解析后必须位于服务器数据目录内。吊销还要求设置 `sslutils.revoke_certificate_crl_paths`，这是由超级用户在 postgresql.conf 中配置、重载后生效的 CRL 输出目录逗号分隔允许列表。在 1.4.2 中，检查会解析路径并验证目录边界；新输出文件通过其已有父目录进行检查，已有输出文件本身也会接受检查。

使用由管理员控制的专用 CRL 输出目录。不要允许整个数据目录或存放配置文件的目录，因为获得授权的调用者可以选择允许目录内的输出文件名。证书和私钥路径也必须由管理员控制。

吊销实现的第一个参数接收 PEM 证书文本，尽管较早 README 和 SQL 注释描述为证书路径。它读取服务器上的 CA 文件 `ca_certificate.crt`、`ca_key.key`，并创建或追加 `revoke_cert.db`。操作前应准备好 CA 文件。不要认为广泛的服务器文件角色能够绕过扩展自身的检查。

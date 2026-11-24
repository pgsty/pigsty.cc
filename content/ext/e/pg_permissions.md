---
title: "pg_permissions"
linkTitle: "pg_permissions"
description: "查看对象权限并将其与期望状态进行比较"
weight: 5140
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/cybertec-postgresql/pg_permissions">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">cybertec-postgresql/pg_permissions</div>
    <div class="ext-card__desc">https://github.com/cybertec-postgresql/pg_permissions</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_permissions-1.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_permissions-1.6.tar.gz</div>
    <div class="ext-card__desc">pg_permissions-1.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_permissions`**](/ext/e/pg_permissions) | `1.6` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5140  | [**`pg_permissions`**](/ext/e/pg_permissions) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`set_user`](/ext/e/set_user) [`pg_roast`](/ext/e/pg_roast) [`pg_readonly`](/ext/e/pg_readonly) [`pgaudit`](/ext/e/pgaudit) [`pg_command_fw`](/ext/e/pg_command_fw) [`acl`](/ext/e/acl) [`pg_auditor`](/ext/e/pg_auditor) [`pg_snakeoil`](/ext/e/pg_snakeoil) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGDG RPM SQL 1.3.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.6` | {{< pgvers "19,18,17,16,15" >}} | `pg_permissions` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.1` | {{< pgvers "19,18,17,16,15" >}} | `pg_permissions_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.1` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-pg-permissions` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PGDG - 0 | AVAIL PGDG 1.4.1 4 | AVAIL PGDG 1.4.1 5 | AVAIL PGDG 1.4.1 7 | AVAIL PGDG 1.4.1 7 |
| el8.aarch64 | N/A PGDG - 0 | AVAIL PGDG 1.4.1 4 | AVAIL PGDG 1.4.1 5 | AVAIL PGDG 1.4.1 7 | AVAIL PGDG 1.4.1 7 |
| el9.x86_64 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 |
| el9.aarch64 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 |
| el10.x86_64 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 |
| el10.aarch64 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 6 | AVAIL PGDG 1.4.1 7 | AVAIL PGDG 1.4.1 7 | AVAIL PGDG 1.4.1 7 |
| d12.x86_64 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| d12.aarch64 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| d13.x86_64 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| d13.aarch64 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| u22.x86_64 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| u22.aarch64 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| u24.x86_64 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| u24.aarch64 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| u26.x86_64 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| u26.aarch64 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
@ el9.x86_64 19 pg_permissions_19 pg_permissions_19-1.4.1-4PGDG.rhel9.9.noarch.rpm pgdg 1.4.1 13.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-x86_64/pg_permissions_19-1.4.1-4PGDG.rhel9.9.noarch.rpm
@ el9.aarch64 19 pg_permissions_19 pg_permissions_19-1.4.1-4PGDG.rhel9.9.noarch.rpm pgdg 1.4.1 13.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-aarch64/pg_permissions_19-1.4.1-4PGDG.rhel9.9.noarch.rpm
@ el10.x86_64 19 pg_permissions_19 pg_permissions_19-1.4.1-4PGDG.rhel10.3.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-x86_64/pg_permissions_19-1.4.1-4PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 19 pg_permissions_19 pg_permissions_19-1.4.1-4PGDG.rhel10.3.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-aarch64/pg_permissions_19-1.4.1-4PGDG.rhel10.3.noarch.rpm
@ d12.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg12+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg12+2_all.deb
@ d12.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg12+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg12+1_all.deb
@ d12.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg12+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg12+2_all.deb
@ d12.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg12+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg12+1_all.deb
@ d12.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d13.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg13+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg13+2_all.deb
@ d13.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg13+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg13+1_all.deb
@ d13.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4-2.pgdg13+1_all.deb
@ d13.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg13+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg13+2_all.deb
@ d13.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg13+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg13+1_all.deb
@ d13.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4-2.pgdg13+1_all.deb
@ u22.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb
@ u22.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb
@ u22.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb
@ u22.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb
@ u22.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u24.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb
@ u24.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb
@ u24.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb
@ u24.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb
@ u24.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u26.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb
@ u26.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb
@ u26.x86_64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ u26.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb
@ u26.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb
@ u26.aarch64 19 postgresql-19-pg-permissions postgresql-19-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-19-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ el8.x86_64 18 pg_permissions_18 pg_permissions_18-1.4.1-4PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_permissions_18-1.4.1-4PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 18 pg_permissions_18 pg_permissions_18-1.4.1-1PGSTY.el8.noarch.rpm pigsty 1.4.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_permissions_18-1.4.1-1PGSTY.el8.noarch.rpm
@ el8.x86_64 18 pg_permissions_18 pg_permissions_18-1.4.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_permissions_18-1.4.1-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 18 pg_permissions_18 pg_permissions_18-1.4-2PGDG.rhel8.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_permissions_18-1.4-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_permissions_18 pg_permissions_18-1.4.1-4PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_permissions_18-1.4.1-4PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 18 pg_permissions_18 pg_permissions_18-1.4.1-1PGSTY.el8.noarch.rpm pigsty 1.4.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_permissions_18-1.4.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 18 pg_permissions_18 pg_permissions_18-1.4.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_permissions_18-1.4.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 18 pg_permissions_18 pg_permissions_18-1.4-2PGDG.rhel8.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_permissions_18-1.4-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_permissions_18 pg_permissions_18-1.4.1-4PGDG.rhel9.9.noarch.rpm pgdg 1.4.1 13.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_permissions_18-1.4.1-4PGDG.rhel9.9.noarch.rpm
@ el9.x86_64 18 pg_permissions_18 pg_permissions_18-1.4.1-1PGSTY.el9.noarch.rpm pigsty 1.4.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_permissions_18-1.4.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 18 pg_permissions_18 pg_permissions_18-1.4.1-4PGDG.rhel9.9.noarch.rpm pgdg 1.4.1 13.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_permissions_18-1.4.1-4PGDG.rhel9.9.noarch.rpm
@ el9.aarch64 18 pg_permissions_18 pg_permissions_18-1.4.1-1PGSTY.el9.noarch.rpm pigsty 1.4.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_permissions_18-1.4.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 18 pg_permissions_18 pg_permissions_18-1.4.1-4PGDG.rhel10.3.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_permissions_18-1.4.1-4PGDG.rhel10.3.noarch.rpm
@ el10.x86_64 18 pg_permissions_18 pg_permissions_18-1.4.1-1PGSTY.el10.noarch.rpm pigsty 1.4.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_permissions_18-1.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_permissions_18 pg_permissions_18-1.4.1-4PGDG.rhel10.3.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_permissions_18-1.4.1-4PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 18 pg_permissions_18 pg_permissions_18-1.4.1-4PGDG.rhel10.2.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_permissions_18-1.4.1-4PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 pg_permissions_18 pg_permissions_18-1.4.1-1PGSTY.el10.noarch.rpm pigsty 1.4.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_permissions_18-1.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_permissions_18 pg_permissions_18-1.4.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.4.1 13.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_permissions_18-1.4.1-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 pg_permissions_18 pg_permissions_18-1.4-2PGDG.rhel10.2.noarch.rpm pgdg 1.4 13.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_permissions_18-1.4-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 pg_permissions_18 pg_permissions_18-1.4-2PGDG.rhel10.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_permissions_18-1.4-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg12+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg12+2_all.deb
@ d12.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg12+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg12+1_all.deb
@ d12.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg12+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg12+2_all.deb
@ d12.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg12+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d13.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg13+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg13+2_all.deb
@ d13.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg13+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg13+1_all.deb
@ d13.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg13+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg13+2_all.deb
@ d13.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg13+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg13+1_all.deb
@ u22.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb
@ u22.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb
@ u22.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb
@ u22.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb
@ u22.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u24.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb
@ u24.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb
@ u24.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb
@ u24.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u26.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb
@ u26.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb
@ u26.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ u26.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb
@ u26.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb
@ u26.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ el8.x86_64 17 pg_permissions_17 pg_permissions_17-1.4.1-4PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_permissions_17-1.4.1-4PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 17 pg_permissions_17 pg_permissions_17-1.4.1-1PGSTY.el8.noarch.rpm pigsty 1.4.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_permissions_17-1.4.1-1PGSTY.el8.noarch.rpm
@ el8.x86_64 17 pg_permissions_17 pg_permissions_17-1.4.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_permissions_17-1.4.1-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 17 pg_permissions_17 pg_permissions_17-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_permissions_17-1.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_permissions_17 pg_permissions_17-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_permissions_17-1.3-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_permissions_17 pg_permissions_17-1.4.1-4PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_permissions_17-1.4.1-4PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 17 pg_permissions_17 pg_permissions_17-1.4.1-1PGSTY.el8.noarch.rpm pigsty 1.4.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_permissions_17-1.4.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 pg_permissions_17 pg_permissions_17-1.4.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_permissions_17-1.4.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 17 pg_permissions_17 pg_permissions_17-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_permissions_17-1.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_permissions_17 pg_permissions_17-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_permissions_17-1.3-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_permissions_17 pg_permissions_17-1.4.1-4PGDG.rhel9.9.noarch.rpm pgdg 1.4.1 13.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_permissions_17-1.4.1-4PGDG.rhel9.9.noarch.rpm
@ el9.x86_64 17 pg_permissions_17 pg_permissions_17-1.4.1-1PGSTY.el9.noarch.rpm pigsty 1.4.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_permissions_17-1.4.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 17 pg_permissions_17 pg_permissions_17-1.4.1-4PGDG.rhel9.9.noarch.rpm pgdg 1.4.1 13.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_permissions_17-1.4.1-4PGDG.rhel9.9.noarch.rpm
@ el9.aarch64 17 pg_permissions_17 pg_permissions_17-1.4.1-1PGSTY.el9.noarch.rpm pigsty 1.4.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_permissions_17-1.4.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 17 pg_permissions_17 pg_permissions_17-1.4.1-4PGDG.rhel10.3.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_permissions_17-1.4.1-4PGDG.rhel10.3.noarch.rpm
@ el10.x86_64 17 pg_permissions_17 pg_permissions_17-1.4.1-1PGSTY.el10.noarch.rpm pigsty 1.4.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_permissions_17-1.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_permissions_17 pg_permissions_17-1.4.1-4PGDG.rhel10.3.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_permissions_17-1.4.1-4PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 17 pg_permissions_17 pg_permissions_17-1.4.1-4PGDG.rhel10.2.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_permissions_17-1.4.1-4PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 pg_permissions_17 pg_permissions_17-1.4.1-1PGSTY.el10.noarch.rpm pigsty 1.4.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_permissions_17-1.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_permissions_17 pg_permissions_17-1.4.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.4.1 13.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_permissions_17-1.4.1-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 pg_permissions_17 pg_permissions_17-1.4-2PGDG.rhel10.2.noarch.rpm pgdg 1.4 13.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_permissions_17-1.4-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 pg_permissions_17 pg_permissions_17-1.4-1PGDG.rhel10.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_permissions_17-1.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_permissions_17 pg_permissions_17-1.3-2PGDG.rhel10.noarch.rpm pgdg 1.3 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_permissions_17-1.3-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg12+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg12+2_all.deb
@ d12.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg12+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg12+1_all.deb
@ d12.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg12+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg12+2_all.deb
@ d12.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg12+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d13.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg13+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg13+2_all.deb
@ d13.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg13+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg13+1_all.deb
@ d13.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg13+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg13+2_all.deb
@ d13.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg13+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg13+1_all.deb
@ u22.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb
@ u22.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb
@ u22.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb
@ u22.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb
@ u22.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u24.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb
@ u24.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb
@ u24.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb
@ u24.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u26.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb
@ u26.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb
@ u26.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ u26.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb
@ u26.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb
@ u26.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ el8.x86_64 16 pg_permissions_16 pg_permissions_16-1.4.1-4PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_permissions_16-1.4.1-4PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 16 pg_permissions_16 pg_permissions_16-1.4.1-1PGSTY.el8.noarch.rpm pigsty 1.4.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_permissions_16-1.4.1-1PGSTY.el8.noarch.rpm
@ el8.x86_64 16 pg_permissions_16 pg_permissions_16-1.4.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_permissions_16-1.4.1-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 16 pg_permissions_16 pg_permissions_16-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_permissions_16-1.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_permissions_16 pg_permissions_16-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_permissions_16-1.3-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_permissions_16 pg_permissions_16-1.3-1PGDG.rhel8.noarch.rpm pgdg 1.3 13.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_permissions_16-1.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_permissions_16 pg_permissions_16-1.1-3.rhel8.noarch.rpm pgdg 1.1 12.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_permissions_16-1.1-3.rhel8.noarch.rpm
@ el8.aarch64 16 pg_permissions_16 pg_permissions_16-1.4.1-4PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_permissions_16-1.4.1-4PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 pg_permissions_16 pg_permissions_16-1.4.1-1PGSTY.el8.noarch.rpm pigsty 1.4.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_permissions_16-1.4.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 pg_permissions_16 pg_permissions_16-1.4.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_permissions_16-1.4.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 pg_permissions_16 pg_permissions_16-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_permissions_16-1.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_permissions_16 pg_permissions_16-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_permissions_16-1.3-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_permissions_16 pg_permissions_16-1.3-1PGDG.rhel8.noarch.rpm pgdg 1.3 13.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_permissions_16-1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_permissions_16 pg_permissions_16-1.1-3.rhel8.noarch.rpm pgdg 1.1 12.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_permissions_16-1.1-3.rhel8.noarch.rpm
@ el9.x86_64 16 pg_permissions_16 pg_permissions_16-1.4.1-4PGDG.rhel9.9.noarch.rpm pgdg 1.4.1 13.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_permissions_16-1.4.1-4PGDG.rhel9.9.noarch.rpm
@ el9.x86_64 16 pg_permissions_16 pg_permissions_16-1.4.1-1PGSTY.el9.noarch.rpm pigsty 1.4.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_permissions_16-1.4.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 16 pg_permissions_16 pg_permissions_16-1.4.1-4PGDG.rhel9.9.noarch.rpm pgdg 1.4.1 13.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_permissions_16-1.4.1-4PGDG.rhel9.9.noarch.rpm
@ el9.aarch64 16 pg_permissions_16 pg_permissions_16-1.4.1-1PGSTY.el9.noarch.rpm pigsty 1.4.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_permissions_16-1.4.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 16 pg_permissions_16 pg_permissions_16-1.4.1-4PGDG.rhel10.3.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_permissions_16-1.4.1-4PGDG.rhel10.3.noarch.rpm
@ el10.x86_64 16 pg_permissions_16 pg_permissions_16-1.4.1-1PGSTY.el10.noarch.rpm pigsty 1.4.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_permissions_16-1.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_permissions_16 pg_permissions_16-1.4.1-4PGDG.rhel10.3.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_permissions_16-1.4.1-4PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 16 pg_permissions_16 pg_permissions_16-1.4.1-4PGDG.rhel10.2.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_permissions_16-1.4.1-4PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 pg_permissions_16 pg_permissions_16-1.4.1-1PGSTY.el10.noarch.rpm pigsty 1.4.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_permissions_16-1.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_permissions_16 pg_permissions_16-1.4.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.4.1 13.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_permissions_16-1.4.1-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 pg_permissions_16 pg_permissions_16-1.4-2PGDG.rhel10.2.noarch.rpm pgdg 1.4 13.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_permissions_16-1.4-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 pg_permissions_16 pg_permissions_16-1.4-1PGDG.rhel10.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_permissions_16-1.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_permissions_16 pg_permissions_16-1.3-2PGDG.rhel10.noarch.rpm pgdg 1.3 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_permissions_16-1.3-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg12+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg12+2_all.deb
@ d12.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg12+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg12+1_all.deb
@ d12.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg12+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg12+2_all.deb
@ d12.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg12+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d13.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg13+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg13+2_all.deb
@ d13.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg13+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg13+1_all.deb
@ d13.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg13+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg13+2_all.deb
@ d13.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg13+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg13+1_all.deb
@ u22.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb
@ u22.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb
@ u22.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb
@ u22.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb
@ u22.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u24.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb
@ u24.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb
@ u24.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb
@ u24.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u26.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb
@ u26.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb
@ u26.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ u26.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb
@ u26.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb
@ u26.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ el8.x86_64 15 pg_permissions_15 pg_permissions_15-1.4.1-4PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_permissions_15-1.4.1-4PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 15 pg_permissions_15 pg_permissions_15-1.4.1-1PGSTY.el8.noarch.rpm pigsty 1.4.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_permissions_15-1.4.1-1PGSTY.el8.noarch.rpm
@ el8.x86_64 15 pg_permissions_15 pg_permissions_15-1.4.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_permissions_15-1.4.1-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 15 pg_permissions_15 pg_permissions_15-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_permissions_15-1.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_permissions_15 pg_permissions_15-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_permissions_15-1.3-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_permissions_15 pg_permissions_15-1.3-1PGDG.rhel8.noarch.rpm pgdg 1.3 13.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_permissions_15-1.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_permissions_15 pg_permissions_15-1.1-2.rhel8.noarch.rpm pgdg 1.1 12.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_permissions_15-1.1-2.rhel8.noarch.rpm
@ el8.aarch64 15 pg_permissions_15 pg_permissions_15-1.4.1-4PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_permissions_15-1.4.1-4PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 pg_permissions_15 pg_permissions_15-1.4.1-1PGSTY.el8.noarch.rpm pigsty 1.4.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_permissions_15-1.4.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 15 pg_permissions_15 pg_permissions_15-1.4.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.4.1 14.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_permissions_15-1.4.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 pg_permissions_15 pg_permissions_15-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_permissions_15-1.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_permissions_15 pg_permissions_15-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_permissions_15-1.3-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_permissions_15 pg_permissions_15-1.3-1PGDG.rhel8.noarch.rpm pgdg 1.3 13.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_permissions_15-1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_permissions_15 pg_permissions_15-1.1-2.rhel8.noarch.rpm pgdg 1.1 12.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_permissions_15-1.1-2.rhel8.noarch.rpm
@ el9.x86_64 15 pg_permissions_15 pg_permissions_15-1.4.1-4PGDG.rhel9.9.noarch.rpm pgdg 1.4.1 13.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_permissions_15-1.4.1-4PGDG.rhel9.9.noarch.rpm
@ el9.x86_64 15 pg_permissions_15 pg_permissions_15-1.4.1-1PGSTY.el9.noarch.rpm pigsty 1.4.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_permissions_15-1.4.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 15 pg_permissions_15 pg_permissions_15-1.4.1-4PGDG.rhel9.9.noarch.rpm pgdg 1.4.1 13.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_permissions_15-1.4.1-4PGDG.rhel9.9.noarch.rpm
@ el9.aarch64 15 pg_permissions_15 pg_permissions_15-1.4.1-1PGSTY.el9.noarch.rpm pigsty 1.4.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_permissions_15-1.4.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 15 pg_permissions_15 pg_permissions_15-1.4.1-4PGDG.rhel10.3.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_permissions_15-1.4.1-4PGDG.rhel10.3.noarch.rpm
@ el10.x86_64 15 pg_permissions_15 pg_permissions_15-1.4.1-1PGSTY.el10.noarch.rpm pigsty 1.4.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_permissions_15-1.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 15 pg_permissions_15 pg_permissions_15-1.4.1-4PGDG.rhel10.3.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_permissions_15-1.4.1-4PGDG.rhel10.3.noarch.rpm
@ el10.aarch64 15 pg_permissions_15 pg_permissions_15-1.4.1-4PGDG.rhel10.2.noarch.rpm pgdg 1.4.1 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_permissions_15-1.4.1-4PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 pg_permissions_15 pg_permissions_15-1.4.1-1PGSTY.el10.noarch.rpm pigsty 1.4.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_permissions_15-1.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 15 pg_permissions_15 pg_permissions_15-1.4.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.4.1 13.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_permissions_15-1.4.1-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 pg_permissions_15 pg_permissions_15-1.4-2PGDG.rhel10.2.noarch.rpm pgdg 1.4 13.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_permissions_15-1.4-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 pg_permissions_15 pg_permissions_15-1.4-1PGDG.rhel10.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_permissions_15-1.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_permissions_15 pg_permissions_15-1.3-2PGDG.rhel10.noarch.rpm pgdg 1.3 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_permissions_15-1.3-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg12+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg12+2_all.deb
@ d12.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg12+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg12+1_all.deb
@ d12.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg12+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg12+2_all.deb
@ d12.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg12+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg12+1_all.deb
@ d12.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d13.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg13+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg13+2_all.deb
@ d13.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg13+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg13+1_all.deb
@ d13.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg13+1_all.deb
@ d13.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg13+2_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg13+2_all.deb
@ d13.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg13+1_all.deb pgdg 1.4.1 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg13+1_all.deb
@ d13.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg13+1_all.deb
@ u22.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb
@ u22.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb
@ u22.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg22.04+2_all.deb
@ u22.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg22.04+1_all.deb
@ u22.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u24.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb
@ u24.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb
@ u24.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg24.04+2_all.deb
@ u24.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg24.04+1_all.deb
@ u24.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u26.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb
@ u26.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb
@ u26.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ u26.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg26.04+2_all.deb
@ u26.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb pgdg 1.4.1 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4.1-1.pgdg26.04+1_all.deb
@ u26.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg26.04+1_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_permissions` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_permissions         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_permissions` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_permissions;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_permissions -v 19  # PG 19
pig ext install -y pg_permissions -v 18  # PG 18
pig ext install -y pg_permissions -v 17  # PG 17
pig ext install -y pg_permissions -v 16  # PG 16
pig ext install -y pg_permissions -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_permissions_19       # PG 19
dnf install -y pg_permissions_18       # PG 18
dnf install -y pg_permissions_17       # PG 17
dnf install -y pg_permissions_16       # PG 16
dnf install -y pg_permissions_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pg-permissions   # PG 19
apt install -y postgresql-18-pg-permissions   # PG 18
apt install -y postgresql-17-pg-permissions   # PG 17
apt install -y postgresql-16-pg-permissions   # PG 16
apt install -y postgresql-15-pg-permissions   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION pg_permissions;
```

## 用法

来源：

- [README.md](https://github.com/cybertec-postgresql/pg_permissions/blob/REL_1_6/README.md)
- [pg_permissions.control](https://github.com/cybertec-postgresql/pg_permissions/blob/REL_1_6/pg_permissions.control)
- [pg_permissions--1.5--1.6.sql](https://github.com/cybertec-postgresql/pg_permissions/blob/REL_1_6/pg_permissions--1.5--1.6.sql)

`pg_permissions` 比较实际权限与预期基线，并可生成或执行修正授权。1.6 要求 PostgreSQL 15 及以上版本。它是纯 SQL 扩展，无需预加载，不可重定位，须在首次安装时选定模式；安装者需要该模式的 CREATE 权限。

### 定义并检查基线

下面示例中的应用角色和模式须已存在：

```sql
CREATE EXTENSION pg_permissions SCHEMA public;
INSERT INTO public.permission_target
  (role_name, permissions, object_type, schema_name)
VALUES ('appuser', '{SELECT,INSERT,UPDATE,DELETE}', 'TABLE', 'appschema'),
       ('appuser', '{USAGE}', 'SCHEMA', 'appschema');
SELECT * FROM public.permission_diffs();
SELECT * FROM public.permission_diff_summary ORDER BY objects DESC;
SELECT public.permission_apply();
```

missing 为 true 表示缺少要求的权限，为 false 表示权限多余。对象名为 NULL 表示覆盖该模式下指定类型的全部对象。审计范围限于目标对象、受管理角色及继承其权限的角色；更广泛的检查可用 `all_permissions`。超级用户因隐含拥有全部权限而不显示。

### 先检查再执行

`permission_fix_sql()` 返回修正 SQL。`permission_apply()` 默认只预演；`permission_apply(false)` 使用调用者权限实际执行。权限视图中可写的 `granted` 列同样会执行 GRANT 或 REVOKE。基线写入权限与修改实际授权的权限都应受控。

对象视图覆盖数据库、模式、表、视图、列、函数和序列，`source` 列区分所有权、直接授权、PUBLIC 和继承权限。`PUBLIC` 可显式作为目标被授权者。`permission_target_snapshot(role, schema)` 将当前授权采纳为基线，会改变预期状态，应有意执行。

`default_acl_target`、`default_acl_permissions` 与 `default_acl_diffs()` 单独处理 ALTER DEFAULT PRIVILEGES。默认权限影响未来对象，不能修复已有授权。基线表允许 PUBLIC 读取，仅扩展所有者及明确授权的角色可写。`role_dependencies()` 检查依赖；`role_drop()` 可转移所有权并删除角色，应另行审阅。

### 升级边界

按版本逐步执行升级脚本。已安装 1.4 的数据库可执行：

```sql
ALTER EXTENSION pg_permissions UPDATE TO '1.5';
ALTER EXTENSION pg_permissions UPDATE TO '1.6';
```

1.6 补齐缺失的 1.2 到 1.3 升级路径。1.5 到 1.6 迁移会重写基线：删除空权限列表，将未指定列名的 COLUMN 条目转为表级条目，并合并重复项。升级前应备份并检查预期状态。PostgreSQL 17 之前不接受 MAINTAIN 权限。

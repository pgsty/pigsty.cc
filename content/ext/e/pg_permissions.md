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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_permissions-REL_1_3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_permissions-REL_1_3.tar.gz</div>
    <div class="ext-card__desc">pg_permissions-REL_1_3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_permissions`**](/ext/e/pg_permissions) | `1.4` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5140  | [**`pg_permissions`**](/ext/e/pg_permissions) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_readonly`](/ext/e/pg_readonly) [`pgaudit`](/ext/e/pgaudit) [`set_user`](/ext/e/set_user) [`pg_upless`](/ext/e/pg_upless) [`safeupdate`](/ext/e/safeupdate) [`pgauditlogtofile`](/ext/e/pgauditlogtofile) [`credcheck`](/ext/e/credcheck) [`login_hook`](/ext/e/login_hook) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_permissions` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_permissions_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-permissions` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 4 | AVAIL PGDG 1.4 4 | AVAIL PGDG 1.4 4 |
| el8.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 4 | AVAIL PGDG 1.4 4 | AVAIL PGDG 1.4 4 |
| el9.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 4 | AVAIL PGDG 1.4 4 | AVAIL PGDG 1.4 4 |
| el9.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 4 | AVAIL PGDG 1.4 4 | AVAIL PGDG 1.4 4 |
| el10.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 |
| el10.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 |
| d12.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 |
| d12.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 |
| d13.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
| d13.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
| u22.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 |
| u22.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 |
| u24.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 |
| u24.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 | AVAIL PGDG 1.4 2 |
| u26.x86_64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
| u26.aarch64 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 | AVAIL PGDG 1.4 1 |
@ el8.x86_64 18 pg_permissions_18 pg_permissions_18-1.4-2PGDG.rhel8.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_permissions_18-1.4-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_permissions_18 pg_permissions_18-1.4-2PGDG.rhel8.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_permissions_18-1.4-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_permissions_18 pg_permissions_18-1.4-2PGDG.rhel9.noarch.rpm pgdg 1.4 13.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_permissions_18-1.4-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_permissions_18 pg_permissions_18-1.4-2PGDG.rhel9.noarch.rpm pgdg 1.4 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_permissions_18-1.4-2PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_permissions_18 pg_permissions_18-1.4-2PGDG.rhel10.noarch.rpm pgdg 1.4 13.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_permissions_18-1.4-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_permissions_18 pg_permissions_18-1.4-2PGDG.rhel10.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_permissions_18-1.4-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d13.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg13+1_all.deb
@ u22.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u24.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u26.x86_64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ u26.aarch64 18 postgresql-18-pg-permissions postgresql-18-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-18-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ el8.x86_64 17 pg_permissions_17 pg_permissions_17-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_permissions_17-1.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pg_permissions_17 pg_permissions_17-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_permissions_17-1.3-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_permissions_17 pg_permissions_17-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_permissions_17-1.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_permissions_17 pg_permissions_17-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_permissions_17-1.3-2PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_permissions_17 pg_permissions_17-1.4-1PGDG.rhel9.noarch.rpm pgdg 1.4 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_permissions_17-1.4-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pg_permissions_17 pg_permissions_17-1.3-2PGDG.rhel9.noarch.rpm pgdg 1.3 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_permissions_17-1.3-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_permissions_17 pg_permissions_17-1.4-1PGDG.rhel9.noarch.rpm pgdg 1.4 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_permissions_17-1.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_permissions_17 pg_permissions_17-1.3-2PGDG.rhel9.noarch.rpm pgdg 1.3 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_permissions_17-1.3-2PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pg_permissions_17 pg_permissions_17-1.4-1PGDG.rhel10.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_permissions_17-1.4-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 pg_permissions_17 pg_permissions_17-1.3-2PGDG.rhel10.noarch.rpm pgdg 1.3 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_permissions_17-1.3-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_permissions_17 pg_permissions_17-1.4-1PGDG.rhel10.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_permissions_17-1.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_permissions_17 pg_permissions_17-1.3-2PGDG.rhel10.noarch.rpm pgdg 1.3 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_permissions_17-1.3-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.3-1PIGSTY~bookworm_amd64.deb pigsty 1.3 7.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.3-1PIGSTY~bookworm_arm64.deb pigsty 1.3 7.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg13+1_all.deb
@ u22.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.3-1PIGSTY~jammy_amd64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.3-1PIGSTY~jammy_arm64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.3-1PIGSTY~noble_amd64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.3-1PIGSTY~noble_arm64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ u26.aarch64 17 postgresql-17-pg-permissions postgresql-17-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-17-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ el8.x86_64 16 pg_permissions_16 pg_permissions_16-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_permissions_16-1.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_permissions_16 pg_permissions_16-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_permissions_16-1.3-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_permissions_16 pg_permissions_16-1.3-1PGDG.rhel8.noarch.rpm pgdg 1.3 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_permissions_16-1.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pg_permissions_16 pg_permissions_16-1.1-3.rhel8.noarch.rpm pgdg 1.1 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_permissions_16-1.1-3.rhel8.noarch.rpm
@ el8.aarch64 16 pg_permissions_16 pg_permissions_16-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_permissions_16-1.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_permissions_16 pg_permissions_16-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_permissions_16-1.3-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_permissions_16 pg_permissions_16-1.3-1PGDG.rhel8.noarch.rpm pgdg 1.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_permissions_16-1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_permissions_16 pg_permissions_16-1.1-3.rhel8.noarch.rpm pgdg 1.1 12.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_permissions_16-1.1-3.rhel8.noarch.rpm
@ el9.x86_64 16 pg_permissions_16 pg_permissions_16-1.4-1PGDG.rhel9.noarch.rpm pgdg 1.4 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_permissions_16-1.4-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_permissions_16 pg_permissions_16-1.3-2PGDG.rhel9.noarch.rpm pgdg 1.3 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_permissions_16-1.3-2PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_permissions_16 pg_permissions_16-1.3-1PGDG.rhel9.noarch.rpm pgdg 1.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_permissions_16-1.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pg_permissions_16 pg_permissions_16-1.1-3.rhel9.noarch.rpm pgdg 1.1 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_permissions_16-1.1-3.rhel9.noarch.rpm
@ el9.aarch64 16 pg_permissions_16 pg_permissions_16-1.4-1PGDG.rhel9.noarch.rpm pgdg 1.4 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_permissions_16-1.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_permissions_16 pg_permissions_16-1.3-2PGDG.rhel9.noarch.rpm pgdg 1.3 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_permissions_16-1.3-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_permissions_16 pg_permissions_16-1.3-1PGDG.rhel9.noarch.rpm pgdg 1.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_permissions_16-1.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_permissions_16 pg_permissions_16-1.1-3.rhel9.noarch.rpm pgdg 1.1 12.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_permissions_16-1.1-3.rhel9.noarch.rpm
@ el10.x86_64 16 pg_permissions_16 pg_permissions_16-1.4-1PGDG.rhel10.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_permissions_16-1.4-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 pg_permissions_16 pg_permissions_16-1.3-2PGDG.rhel10.noarch.rpm pgdg 1.3 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_permissions_16-1.3-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_permissions_16 pg_permissions_16-1.4-1PGDG.rhel10.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_permissions_16-1.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_permissions_16 pg_permissions_16-1.3-2PGDG.rhel10.noarch.rpm pgdg 1.3 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_permissions_16-1.3-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.3-1PIGSTY~bookworm_amd64.deb pigsty 1.3 7.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.3-1PIGSTY~bookworm_arm64.deb pigsty 1.3 7.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg13+1_all.deb
@ u22.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.3-1PIGSTY~jammy_amd64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.3-1PIGSTY~jammy_arm64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.3-1PIGSTY~noble_amd64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.3-1PIGSTY~noble_arm64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ u26.aarch64 16 postgresql-16-pg-permissions postgresql-16-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-16-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ el8.x86_64 15 pg_permissions_15 pg_permissions_15-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_permissions_15-1.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_permissions_15 pg_permissions_15-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_permissions_15-1.3-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_permissions_15 pg_permissions_15-1.3-1PGDG.rhel8.noarch.rpm pgdg 1.3 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_permissions_15-1.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_permissions_15 pg_permissions_15-1.1-2.rhel8.noarch.rpm pgdg 1.1 12.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_permissions_15-1.1-2.rhel8.noarch.rpm
@ el8.aarch64 15 pg_permissions_15 pg_permissions_15-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_permissions_15-1.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_permissions_15 pg_permissions_15-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_permissions_15-1.3-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_permissions_15 pg_permissions_15-1.3-1PGDG.rhel8.noarch.rpm pgdg 1.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_permissions_15-1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_permissions_15 pg_permissions_15-1.1-2.rhel8.noarch.rpm pgdg 1.1 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_permissions_15-1.1-2.rhel8.noarch.rpm
@ el9.x86_64 15 pg_permissions_15 pg_permissions_15-1.4-1PGDG.rhel9.noarch.rpm pgdg 1.4 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_permissions_15-1.4-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_permissions_15 pg_permissions_15-1.3-2PGDG.rhel9.noarch.rpm pgdg 1.3 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_permissions_15-1.3-2PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_permissions_15 pg_permissions_15-1.3-1PGDG.rhel9.noarch.rpm pgdg 1.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_permissions_15-1.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_permissions_15 pg_permissions_15-1.1-2.rhel9.noarch.rpm pgdg 1.1 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_permissions_15-1.1-2.rhel9.noarch.rpm
@ el9.aarch64 15 pg_permissions_15 pg_permissions_15-1.4-1PGDG.rhel9.noarch.rpm pgdg 1.4 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_permissions_15-1.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_permissions_15 pg_permissions_15-1.3-2PGDG.rhel9.noarch.rpm pgdg 1.3 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_permissions_15-1.3-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_permissions_15 pg_permissions_15-1.3-1PGDG.rhel9.noarch.rpm pgdg 1.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_permissions_15-1.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_permissions_15 pg_permissions_15-1.1-2.rhel9.noarch.rpm pgdg 1.1 12.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_permissions_15-1.1-2.rhel9.noarch.rpm
@ el10.x86_64 15 pg_permissions_15 pg_permissions_15-1.4-1PGDG.rhel10.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_permissions_15-1.4-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 pg_permissions_15 pg_permissions_15-1.3-2PGDG.rhel10.noarch.rpm pgdg 1.3 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_permissions_15-1.3-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_permissions_15 pg_permissions_15-1.4-1PGDG.rhel10.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_permissions_15-1.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_permissions_15 pg_permissions_15-1.3-2PGDG.rhel10.noarch.rpm pgdg 1.3 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_permissions_15-1.3-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.3-1PIGSTY~bookworm_amd64.deb pigsty 1.3 7.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.3-1PIGSTY~bookworm_arm64.deb pigsty 1.3 7.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg13+1_all.deb
@ d13.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg13+1_all.deb
@ u22.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.3-1PIGSTY~jammy_amd64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.3-1PIGSTY~jammy_arm64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.3-1PIGSTY~noble_amd64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.3-1PIGSTY~noble_arm64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ u26.aarch64 15 postgresql-15-pg-permissions postgresql-15-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-15-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ el8.x86_64 14 pg_permissions_14 pg_permissions_14-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_permissions_14-1.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_permissions_14 pg_permissions_14-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_permissions_14-1.3-2PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_permissions_14 pg_permissions_14-1.3-1PGDG.rhel8.noarch.rpm pgdg 1.3 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_permissions_14-1.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_permissions_14 pg_permissions_14-1.1-2.rhel8.noarch.rpm pgdg 1.1 12.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_permissions_14-1.1-2.rhel8.noarch.rpm
@ el8.aarch64 14 pg_permissions_14 pg_permissions_14-1.4-1PGDG.rhel8.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_permissions_14-1.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_permissions_14 pg_permissions_14-1.3-2PGDG.rhel8.noarch.rpm pgdg 1.3 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_permissions_14-1.3-2PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_permissions_14 pg_permissions_14-1.3-1PGDG.rhel8.noarch.rpm pgdg 1.3 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_permissions_14-1.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_permissions_14 pg_permissions_14-1.1-2.rhel8.noarch.rpm pgdg 1.1 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_permissions_14-1.1-2.rhel8.noarch.rpm
@ el9.x86_64 14 pg_permissions_14 pg_permissions_14-1.4-1PGDG.rhel9.noarch.rpm pgdg 1.4 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_permissions_14-1.4-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_permissions_14 pg_permissions_14-1.3-2PGDG.rhel9.noarch.rpm pgdg 1.3 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_permissions_14-1.3-2PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_permissions_14 pg_permissions_14-1.3-1PGDG.rhel9.noarch.rpm pgdg 1.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_permissions_14-1.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_permissions_14 pg_permissions_14-1.1-2.rhel9.noarch.rpm pgdg 1.1 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_permissions_14-1.1-2.rhel9.noarch.rpm
@ el9.aarch64 14 pg_permissions_14 pg_permissions_14-1.4-1PGDG.rhel9.noarch.rpm pgdg 1.4 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_permissions_14-1.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_permissions_14 pg_permissions_14-1.3-2PGDG.rhel9.noarch.rpm pgdg 1.3 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_permissions_14-1.3-2PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_permissions_14 pg_permissions_14-1.3-1PGDG.rhel9.noarch.rpm pgdg 1.3 12.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_permissions_14-1.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_permissions_14 pg_permissions_14-1.1-2.rhel9.noarch.rpm pgdg 1.1 12.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_permissions_14-1.1-2.rhel9.noarch.rpm
@ el10.x86_64 14 pg_permissions_14 pg_permissions_14-1.4-1PGDG.rhel10.noarch.rpm pgdg 1.4 13.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_permissions_14-1.4-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 pg_permissions_14 pg_permissions_14-1.3-2PGDG.rhel10.noarch.rpm pgdg 1.3 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_permissions_14-1.3-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_permissions_14 pg_permissions_14-1.4-1PGDG.rhel10.noarch.rpm pgdg 1.4 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_permissions_14-1.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_permissions_14 pg_permissions_14-1.3-2PGDG.rhel10.noarch.rpm pgdg 1.3 13.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_permissions_14-1.3-2PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.x86_64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.3-1PIGSTY~bookworm_amd64.deb pigsty 1.3 7.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.4-2.pgdg12+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.4-2.pgdg12+1_all.deb
@ d12.aarch64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.3-1PIGSTY~bookworm_arm64.deb pigsty 1.3 7.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.4-2.pgdg13+1_all.deb
@ d13.aarch64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.4-2.pgdg13+1_all.deb pgdg 1.4 8.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.4-2.pgdg13+1_all.deb
@ u22.x86_64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.x86_64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.3-1PIGSTY~jammy_amd64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.4-2.pgdg22.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.4-2.pgdg22.04+1_all.deb
@ u22.aarch64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.3-1PIGSTY~jammy_arm64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.x86_64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.3-1PIGSTY~noble_amd64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.4-2.pgdg24.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.4-2.pgdg24.04+1_all.deb
@ u24.aarch64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.3-1PIGSTY~noble_arm64.deb pigsty 1.3 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.4-2.pgdg26.04+1_all.deb
@ u26.aarch64 14 postgresql-14-pg-permissions postgresql-14-pg-permissions_1.4-2.pgdg26.04+1_all.deb pgdg 1.4 8.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-permissions/postgresql-14-pg-permissions_1.4-2.pgdg26.04+1_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_permissions` 扩展的 DEB 包：

```bash
pig build pkg pg_permissions         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_permissions` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_permissions;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_permissions -v 18  # PG 18
pig ext install -y pg_permissions -v 17  # PG 17
pig ext install -y pg_permissions -v 16  # PG 16
pig ext install -y pg_permissions -v 15  # PG 15
pig ext install -y pg_permissions -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_permissions_18       # PG 18
dnf install -y pg_permissions_17       # PG 17
dnf install -y pg_permissions_16       # PG 16
dnf install -y pg_permissions_15       # PG 15
dnf install -y pg_permissions_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-permissions   # PG 18
apt install -y postgresql-17-pg-permissions   # PG 17
apt install -y postgresql-16-pg-permissions   # PG 16
apt install -y postgresql-15-pg-permissions   # PG 15
apt install -y postgresql-14-pg-permissions   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_permissions;
```



## 用法

> [pg_permissions: 查看对象权限并与期望状态进行比较](https://github.com/cybertec-postgresql/pg_permissions)

pg_permissions 让你查看数据库对象的实际权限，并与期望的权限状态进行比较。

### 定义期望权限

向 `permission_target` 插入条目以描述应有的权限：

```sql
INSERT INTO permission_target (role_name, permissions, object_type, schema_name)
VALUES ('appuser', '{SELECT,INSERT,UPDATE,DELETE}', 'TABLE', 'appschema');

INSERT INTO permission_target (role_name, permissions, object_type, schema_name)
VALUES ('appuser', '{USAGE}', 'SCHEMA', 'appschema');

INSERT INTO permission_target (role_name, permissions, object_type, schema_name, object_name)
VALUES ('appuser', '{USAGE}', 'SEQUENCE', 'appschema', 'appseq');
```

将 `object_name` 或 `column_name` 设置为 NULL 可应用于模式中该类型的所有对象。

### 查找权限差异

```sql
SELECT * FROM permission_diffs();
```

返回 `missing = TRUE`（权限应存在但不存在）或 `missing = FALSE`（不应存在的多余权限）的行。

### 查看实际权限

可用视图（所有视图具有相同的列结构）：

- `database_permissions` -- 当前数据库的权限
- `schema_permissions` -- 模式的权限
- `table_permissions` -- 表的权限
- `view_permissions` -- 视图的权限
- `column_permissions` -- 表/视图列的权限
- `function_permissions` -- 函数的权限
- `sequence_permissions` -- 序列的权限
- `all_permissions` -- 以上所有的 UNION

```sql
SELECT * FROM table_permissions WHERE role_name = 'appuser' AND schema_name = 'appschema';
```

### 通过视图 Grant/Revoke

权限视图的 `granted` 列是可更新的——更新它会执行相应的 `GRANT` 或 `REVOKE` 命令。

注意：超级用户不显示在视图中（他们自动拥有所有权限）。

---
title: "set_user"
linkTitle: "set_user"
description: "增加了日志记录的 SET ROLE"
weight: 7370
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgaudit/set_user">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgaudit/set_user</div>
    <div class="ext-card__desc">https://github.com/pgaudit/set_user</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`set_user`**](/ext/e/set_user) | `4.3.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7370  | [**`set_user`**](/ext/e/set_user) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_permissions`](/ext/e/pg_permissions) [`login_hook`](/ext/e/login_hook) [`pg_auth_mon`](/ext/e/pg_auth_mon) [`pg_session_jwt`](/ext/e/pg_session_jwt) [`auth_delay`](/ext/e/auth_delay) [`pgaudit`](/ext/e/pgaudit) [`pg_roast`](/ext/e/pg_roast) [`pg_readonly`](/ext/e/pg_readonly) [`acl`](/ext/e/acl) [`pg_command_fw`](/ext/e/pg_command_fw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.3.0` | {{< pgvers "18,17,16,15,14" >}} | `set_user` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.3.0` | {{< pgvers "18,17,16,15,14" >}} | `set_user_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.3.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-set-user` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.3.0 2 | AVAIL PGDG 4.3.0 2 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 4 | AVAIL PGDG 4.3.0 5 |
| el8.aarch64 | AVAIL PGDG 4.3.0 2 | AVAIL PGDG 4.3.0 2 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 4 | AVAIL PGDG 4.3.0 5 |
| el9.x86_64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 4 | AVAIL PGDG 4.3.0 5 | AVAIL PGDG 4.3.0 5 |
| el9.aarch64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 4 | AVAIL PGDG 4.3.0 5 | AVAIL PGDG 4.3.0 6 |
| el10.x86_64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
| el10.aarch64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
| d12.x86_64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
| d12.aarch64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
| d13.x86_64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
| d13.aarch64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
| u22.x86_64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
| u22.aarch64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
| u24.x86_64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
| u24.aarch64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
| u26.x86_64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
| u26.aarch64 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 | AVAIL PGDG 4.3.0 3 |
@ el8.x86_64 18 set_user_18 set_user_18-4.3.0-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3.0 29.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/set_user_18-4.3.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel8.x86_64.rpm pgdg 4.2.0 26.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/set_user_18-4.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 set_user_18 set_user_18-4.3.0-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3.0 29.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/set_user_18-4.3.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel8.aarch64.rpm pgdg 4.2.0 26.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/set_user_18-4.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 set_user_18 set_user_18-4.3.0-1PGDG.rhel9.8.x86_64.rpm pgdg 4.3.0 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/set_user_18-4.3.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 set_user_18 set_user_18-4.2.0-3PGDG.rhel9.8.x86_64.rpm pgdg 4.2.0 26.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/set_user_18-4.2.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel9.x86_64.rpm pgdg 4.2.0 26.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/set_user_18-4.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 set_user_18 set_user_18-4.3.0-1PGDG.rhel9.8.aarch64.rpm pgdg 4.3.0 28.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/set_user_18-4.3.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 set_user_18 set_user_18-4.2.0-3PGDG.rhel9.8.aarch64.rpm pgdg 4.2.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/set_user_18-4.2.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel9.aarch64.rpm pgdg 4.2.0 25.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/set_user_18-4.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 set_user_18 set_user_18-4.3.0-1PGDG.rhel10.2.x86_64.rpm pgdg 4.3.0 29.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/set_user_18-4.3.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 set_user_18 set_user_18-4.2.0-3PGDG.rhel10.2.x86_64.rpm pgdg 4.2.0 26.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/set_user_18-4.2.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel10.x86_64.rpm pgdg 4.2.0 27.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/set_user_18-4.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 set_user_18 set_user_18-4.3.0-1PGDG.rhel10.2.aarch64.rpm pgdg 4.3.0 28.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/set_user_18-4.3.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 set_user_18 set_user_18-4.2.0-3PGDG.rhel10.2.aarch64.rpm pgdg 4.2.0 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/set_user_18-4.2.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel10.aarch64.rpm pgdg 4.2.0 26.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/set_user_18-4.2.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.3.0-1.pgdg12+1_amd64.deb pgdg 4.3.0 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.3.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg12+2_amd64.deb pgdg 4.2.0 35.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg12+2_amd64.deb
@ d12.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg12+1_amd64.deb pgdg 4.2.0 35.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.3.0-1.pgdg12+1_arm64.deb pgdg 4.3.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.3.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg12+2_arm64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg12+2_arm64.deb
@ d12.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg12+1_arm64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.3.0-1.pgdg13+1_amd64.deb pgdg 4.3.0 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.3.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg13+2_amd64.deb pgdg 4.2.0 35.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg13+2_amd64.deb
@ d13.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg13+1_amd64.deb pgdg 4.2.0 35.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.3.0-1.pgdg13+1_arm64.deb pgdg 4.3.0 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.3.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg13+2_arm64.deb pgdg 4.2.0 34.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg13+2_arm64.deb
@ d13.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg13+1_arm64.deb pgdg 4.2.0 34.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.3.0-1.pgdg22.04+1_amd64.deb pgdg 4.3.0 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.3.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg22.04+2_amd64.deb pgdg 4.2.0 35.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg22.04+1_amd64.deb pgdg 4.2.0 35.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.3.0-1.pgdg22.04+1_arm64.deb pgdg 4.3.0 38.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.3.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg22.04+2_arm64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg22.04+1_arm64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.3.0-1.pgdg24.04+1_amd64.deb pgdg 4.3.0 38.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.3.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg24.04+2_amd64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg24.04+1_amd64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.3.0-1.pgdg24.04+1_arm64.deb pgdg 4.3.0 37.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.3.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg24.04+2_arm64.deb pgdg 4.2.0 34.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg24.04+1_arm64.deb pgdg 4.2.0 34.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.3.0-1.pgdg26.04+1_amd64.deb pgdg 4.3.0 38.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.3.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg26.04+2_amd64.deb pgdg 4.2.0 34.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg26.04+1_amd64.deb pgdg 4.2.0 34.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.3.0-1.pgdg26.04+1_arm64.deb pgdg 4.3.0 37.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.3.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg26.04+2_arm64.deb pgdg 4.2.0 33.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg26.04+1_arm64.deb pgdg 4.2.0 34.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 set_user_17 set_user_17-4.3.0-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3.0 29.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/set_user_17-4.3.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 set_user_17 set_user_17-4.1.0-1PGDG.rhel8.x86_64.rpm pgdg 4.1.0 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/set_user_17-4.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 set_user_17 set_user_17-4.3.0-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3.0 29.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/set_user_17-4.3.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 set_user_17 set_user_17-4.1.0-1PGDG.rhel8.aarch64.rpm pgdg 4.1.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/set_user_17-4.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 set_user_17 set_user_17-4.3.0-1PGDG.rhel9.8.x86_64.rpm pgdg 4.3.0 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/set_user_17-4.3.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 set_user_17 set_user_17-4.2.0-3PGDG.rhel9.8.x86_64.rpm pgdg 4.2.0 26.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/set_user_17-4.2.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 set_user_17 set_user_17-4.1.0-1PGDG.rhel9.x86_64.rpm pgdg 4.1.0 26.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/set_user_17-4.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 set_user_17 set_user_17-4.3.0-1PGDG.rhel9.8.aarch64.rpm pgdg 4.3.0 28.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/set_user_17-4.3.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 set_user_17 set_user_17-4.2.0-3PGDG.rhel9.8.aarch64.rpm pgdg 4.2.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/set_user_17-4.2.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 set_user_17 set_user_17-4.1.0-1PGDG.rhel9.aarch64.rpm pgdg 4.1.0 25.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/set_user_17-4.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 set_user_17 set_user_17-4.3.0-1PGDG.rhel10.2.x86_64.rpm pgdg 4.3.0 29.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/set_user_17-4.3.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 set_user_17 set_user_17-4.2.0-3PGDG.rhel10.2.x86_64.rpm pgdg 4.2.0 26.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/set_user_17-4.2.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 set_user_17 set_user_17-4.1.0-2PGDG.rhel10.x86_64.rpm pgdg 4.1.0 26.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/set_user_17-4.1.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 set_user_17 set_user_17-4.3.0-1PGDG.rhel10.2.aarch64.rpm pgdg 4.3.0 28.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/set_user_17-4.3.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 set_user_17 set_user_17-4.2.0-3PGDG.rhel10.2.aarch64.rpm pgdg 4.2.0 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/set_user_17-4.2.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 set_user_17 set_user_17-4.1.0-2PGDG.rhel10.aarch64.rpm pgdg 4.1.0 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/set_user_17-4.1.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.3.0-1.pgdg12+1_amd64.deb pgdg 4.3.0 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.3.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg12+2_amd64.deb pgdg 4.2.0 35.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg12+2_amd64.deb
@ d12.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg12+1_amd64.deb pgdg 4.2.0 35.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.3.0-1.pgdg12+1_arm64.deb pgdg 4.3.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.3.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg12+2_arm64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg12+2_arm64.deb
@ d12.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg12+1_arm64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.3.0-1.pgdg13+1_amd64.deb pgdg 4.3.0 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.3.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg13+2_amd64.deb pgdg 4.2.0 35.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg13+2_amd64.deb
@ d13.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg13+1_amd64.deb pgdg 4.2.0 35.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.3.0-1.pgdg13+1_arm64.deb pgdg 4.3.0 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.3.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg13+2_arm64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg13+2_arm64.deb
@ d13.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg13+1_arm64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.3.0-1.pgdg22.04+1_amd64.deb pgdg 4.3.0 43.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.3.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg22.04+2_amd64.deb pgdg 4.2.0 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg22.04+1_amd64.deb pgdg 4.2.0 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.3.0-1.pgdg22.04+1_arm64.deb pgdg 4.3.0 42.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.3.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg22.04+2_arm64.deb pgdg 4.2.0 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg22.04+1_arm64.deb pgdg 4.2.0 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.3.0-1.pgdg24.04+1_amd64.deb pgdg 4.3.0 38.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.3.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg24.04+2_amd64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg24.04+1_amd64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.3.0-1.pgdg24.04+1_arm64.deb pgdg 4.3.0 37.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.3.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg24.04+2_arm64.deb pgdg 4.2.0 34.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg24.04+1_arm64.deb pgdg 4.2.0 34.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.3.0-1.pgdg26.04+1_amd64.deb pgdg 4.3.0 38.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.3.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg26.04+2_amd64.deb pgdg 4.2.0 34.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg26.04+1_amd64.deb pgdg 4.2.0 34.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.3.0-1.pgdg26.04+1_arm64.deb pgdg 4.3.0 37.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.3.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg26.04+2_arm64.deb pgdg 4.2.0 34.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg26.04+1_arm64.deb pgdg 4.2.0 34.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 set_user_16 set_user_16-4.3.0-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3.0 29.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/set_user_16-4.3.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 set_user_16 set_user_16-4.1.0-1PGDG.rhel8.x86_64.rpm pgdg 4.1.0 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/set_user_16-4.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 set_user_16 set_user_16-4.0.1-2.rhel8.1.x86_64.rpm pgdg 4.0.1 26.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/set_user_16-4.0.1-2.rhel8.1.x86_64.rpm
@ el8.aarch64 16 set_user_16 set_user_16-4.3.0-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3.0 29.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/set_user_16-4.3.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 set_user_16 set_user_16-4.1.0-1PGDG.rhel8.aarch64.rpm pgdg 4.1.0 26.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/set_user_16-4.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 set_user_16 set_user_16-4.0.1-2.rhel8.1.aarch64.rpm pgdg 4.0.1 25.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/set_user_16-4.0.1-2.rhel8.1.aarch64.rpm
@ el9.x86_64 16 set_user_16 set_user_16-4.3.0-1PGDG.rhel9.8.x86_64.rpm pgdg 4.3.0 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/set_user_16-4.3.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 set_user_16 set_user_16-4.2.0-3PGDG.rhel9.8.x86_64.rpm pgdg 4.2.0 26.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/set_user_16-4.2.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 set_user_16 set_user_16-4.1.0-1PGDG.rhel9.x86_64.rpm pgdg 4.1.0 26.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/set_user_16-4.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 set_user_16 set_user_16-4.0.1-2.rhel9.1.x86_64.rpm pgdg 4.0.1 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/set_user_16-4.0.1-2.rhel9.1.x86_64.rpm
@ el9.aarch64 16 set_user_16 set_user_16-4.3.0-1PGDG.rhel9.8.aarch64.rpm pgdg 4.3.0 28.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/set_user_16-4.3.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 set_user_16 set_user_16-4.2.0-3PGDG.rhel9.8.aarch64.rpm pgdg 4.2.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/set_user_16-4.2.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 set_user_16 set_user_16-4.1.0-1PGDG.rhel9.aarch64.rpm pgdg 4.1.0 25.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/set_user_16-4.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 set_user_16 set_user_16-4.0.1-2.rhel9.1.aarch64.rpm pgdg 4.0.1 25.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/set_user_16-4.0.1-2.rhel9.1.aarch64.rpm
@ el10.x86_64 16 set_user_16 set_user_16-4.3.0-1PGDG.rhel10.2.x86_64.rpm pgdg 4.3.0 29.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/set_user_16-4.3.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 set_user_16 set_user_16-4.2.0-3PGDG.rhel10.2.x86_64.rpm pgdg 4.2.0 26.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/set_user_16-4.2.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 set_user_16 set_user_16-4.1.0-2PGDG.rhel10.x86_64.rpm pgdg 4.1.0 26.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/set_user_16-4.1.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 set_user_16 set_user_16-4.3.0-1PGDG.rhel10.2.aarch64.rpm pgdg 4.3.0 28.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/set_user_16-4.3.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 set_user_16 set_user_16-4.2.0-3PGDG.rhel10.2.aarch64.rpm pgdg 4.2.0 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/set_user_16-4.2.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 set_user_16 set_user_16-4.1.0-2PGDG.rhel10.aarch64.rpm pgdg 4.1.0 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/set_user_16-4.1.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.3.0-1.pgdg12+1_amd64.deb pgdg 4.3.0 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.3.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg12+2_amd64.deb pgdg 4.2.0 35.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg12+2_amd64.deb
@ d12.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg12+1_amd64.deb pgdg 4.2.0 35.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.3.0-1.pgdg12+1_arm64.deb pgdg 4.3.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.3.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg12+2_arm64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg12+2_arm64.deb
@ d12.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg12+1_arm64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.3.0-1.pgdg13+1_amd64.deb pgdg 4.3.0 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.3.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg13+2_amd64.deb pgdg 4.2.0 35.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg13+2_amd64.deb
@ d13.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg13+1_amd64.deb pgdg 4.2.0 35.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.3.0-1.pgdg13+1_arm64.deb pgdg 4.3.0 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.3.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg13+2_arm64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg13+2_arm64.deb
@ d13.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg13+1_arm64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.3.0-1.pgdg22.04+1_amd64.deb pgdg 4.3.0 42.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.3.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg22.04+2_amd64.deb pgdg 4.2.0 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg22.04+1_amd64.deb pgdg 4.2.0 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.3.0-1.pgdg22.04+1_arm64.deb pgdg 4.3.0 42.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.3.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg22.04+2_arm64.deb pgdg 4.2.0 38.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg22.04+1_arm64.deb pgdg 4.2.0 38.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.3.0-1.pgdg24.04+1_amd64.deb pgdg 4.3.0 38.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.3.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg24.04+2_amd64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg24.04+1_amd64.deb pgdg 4.2.0 34.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.3.0-1.pgdg24.04+1_arm64.deb pgdg 4.3.0 37.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.3.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg24.04+2_arm64.deb pgdg 4.2.0 34.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg24.04+1_arm64.deb pgdg 4.2.0 34.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.3.0-1.pgdg26.04+1_amd64.deb pgdg 4.3.0 38.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.3.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg26.04+2_amd64.deb pgdg 4.2.0 34.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg26.04+1_amd64.deb pgdg 4.2.0 34.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.3.0-1.pgdg26.04+1_arm64.deb pgdg 4.3.0 37.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.3.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg26.04+2_arm64.deb pgdg 4.2.0 34.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg26.04+1_arm64.deb pgdg 4.2.0 34.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 set_user_15 set_user_15-4.3.0-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3.0 29.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/set_user_15-4.3.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 set_user_15 set_user_15-4.1.0-1PGDG.rhel8.x86_64.rpm pgdg 4.1.0 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/set_user_15-4.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 set_user_15 set_user_15-4.0.1-2.rhel8.x86_64.rpm pgdg 4.0.1 26.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/set_user_15-4.0.1-2.rhel8.x86_64.rpm
@ el8.x86_64 15 set_user_15 set_user_15-4.0.0-1.rhel8.x86_64.rpm pgdg 4.0.0 25.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/set_user_15-4.0.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 set_user_15 set_user_15-4.3.0-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3.0 29.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/set_user_15-4.3.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 set_user_15 set_user_15-4.1.0-1PGDG.rhel8.aarch64.rpm pgdg 4.1.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/set_user_15-4.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 set_user_15 set_user_15-4.0.1-2.rhel8.aarch64.rpm pgdg 4.0.1 25.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/set_user_15-4.0.1-2.rhel8.aarch64.rpm
@ el8.aarch64 15 set_user_15 set_user_15-4.0.0-1.rhel8.aarch64.rpm pgdg 4.0.0 25.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/set_user_15-4.0.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 set_user_15 set_user_15-4.3.0-1PGDG.rhel9.8.x86_64.rpm pgdg 4.3.0 28.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/set_user_15-4.3.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 set_user_15 set_user_15-4.2.0-3PGDG.rhel9.8.x86_64.rpm pgdg 4.2.0 26.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/set_user_15-4.2.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 set_user_15 set_user_15-4.1.0-1PGDG.rhel9.x86_64.rpm pgdg 4.1.0 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/set_user_15-4.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 set_user_15 set_user_15-4.0.1-2.rhel9.x86_64.rpm pgdg 4.0.1 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/set_user_15-4.0.1-2.rhel9.x86_64.rpm
@ el9.x86_64 15 set_user_15 set_user_15-4.0.0-1.rhel9.x86_64.rpm pgdg 4.0.0 25.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/set_user_15-4.0.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 set_user_15 set_user_15-4.3.0-1PGDG.rhel9.8.aarch64.rpm pgdg 4.3.0 28.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/set_user_15-4.3.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 set_user_15 set_user_15-4.2.0-3PGDG.rhel9.8.aarch64.rpm pgdg 4.2.0 26.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/set_user_15-4.2.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 set_user_15 set_user_15-4.1.0-1PGDG.rhel9.aarch64.rpm pgdg 4.1.0 25.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/set_user_15-4.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 set_user_15 set_user_15-4.0.1-2.rhel9.aarch64.rpm pgdg 4.0.1 25.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/set_user_15-4.0.1-2.rhel9.aarch64.rpm
@ el9.aarch64 15 set_user_15 set_user_15-4.0.0-1.rhel9.aarch64.rpm pgdg 4.0.0 25.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/set_user_15-4.0.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 set_user_15 set_user_15-4.3.0-1PGDG.rhel10.2.x86_64.rpm pgdg 4.3.0 29.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/set_user_15-4.3.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 set_user_15 set_user_15-4.2.0-3PGDG.rhel10.2.x86_64.rpm pgdg 4.2.0 26.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/set_user_15-4.2.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 set_user_15 set_user_15-4.1.0-2PGDG.rhel10.x86_64.rpm pgdg 4.1.0 26.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/set_user_15-4.1.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 set_user_15 set_user_15-4.3.0-1PGDG.rhel10.2.aarch64.rpm pgdg 4.3.0 28.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/set_user_15-4.3.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 set_user_15 set_user_15-4.2.0-3PGDG.rhel10.2.aarch64.rpm pgdg 4.2.0 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/set_user_15-4.2.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 set_user_15 set_user_15-4.1.0-2PGDG.rhel10.aarch64.rpm pgdg 4.1.0 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/set_user_15-4.1.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.3.0-1.pgdg12+1_amd64.deb pgdg 4.3.0 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.3.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg12+2_amd64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg12+2_amd64.deb
@ d12.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg12+1_amd64.deb pgdg 4.2.0 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.3.0-1.pgdg12+1_arm64.deb pgdg 4.3.0 38.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.3.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg12+2_arm64.deb pgdg 4.2.0 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg12+2_arm64.deb
@ d12.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg12+1_arm64.deb pgdg 4.2.0 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.3.0-1.pgdg13+1_amd64.deb pgdg 4.3.0 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.3.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg13+2_amd64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg13+2_amd64.deb
@ d13.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg13+1_amd64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.3.0-1.pgdg13+1_arm64.deb pgdg 4.3.0 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.3.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg13+2_arm64.deb pgdg 4.2.0 34.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg13+2_arm64.deb
@ d13.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg13+1_arm64.deb pgdg 4.2.0 34.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.3.0-1.pgdg22.04+1_amd64.deb pgdg 4.3.0 42.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.3.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg22.04+2_amd64.deb pgdg 4.2.0 38.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg22.04+1_amd64.deb pgdg 4.2.0 38.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.3.0-1.pgdg22.04+1_arm64.deb pgdg 4.3.0 41.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.3.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg22.04+2_arm64.deb pgdg 4.2.0 37.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg22.04+1_arm64.deb pgdg 4.2.0 37.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.3.0-1.pgdg24.04+1_amd64.deb pgdg 4.3.0 38.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.3.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg24.04+2_amd64.deb pgdg 4.2.0 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg24.04+1_amd64.deb pgdg 4.2.0 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.3.0-1.pgdg24.04+1_arm64.deb pgdg 4.3.0 37.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.3.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg24.04+2_arm64.deb pgdg 4.2.0 33.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg24.04+1_arm64.deb pgdg 4.2.0 33.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.3.0-1.pgdg26.04+1_amd64.deb pgdg 4.3.0 38.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.3.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg26.04+2_amd64.deb pgdg 4.2.0 34.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg26.04+1_amd64.deb pgdg 4.2.0 34.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.3.0-1.pgdg26.04+1_arm64.deb pgdg 4.3.0 37.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.3.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg26.04+2_arm64.deb pgdg 4.2.0 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg26.04+1_arm64.deb pgdg 4.2.0 33.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 set_user_14 set_user_14-4.3.0-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3.0 29.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/set_user_14-4.3.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 set_user_14 set_user_14-4.1.0-1PGDG.rhel8.x86_64.rpm pgdg 4.1.0 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/set_user_14-4.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 set_user_14 set_user_14-4.0.1-2.rhel8.x86_64.rpm pgdg 4.0.1 26.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/set_user_14-4.0.1-2.rhel8.x86_64.rpm
@ el8.x86_64 14 set_user_14 set_user_14-4.0.0-1.rhel8.x86_64.rpm pgdg 4.0.0 25.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/set_user_14-4.0.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 set_user_14 set_user_14-3.0.0-1.rhel8.x86_64.rpm pgdg 3.0.0 25.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/set_user_14-3.0.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 set_user_14 set_user_14-4.3.0-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3.0 29.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/set_user_14-4.3.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 set_user_14 set_user_14-4.1.0-1PGDG.rhel8.aarch64.rpm pgdg 4.1.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/set_user_14-4.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 set_user_14 set_user_14-4.0.1-2.rhel8.aarch64.rpm pgdg 4.0.1 25.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/set_user_14-4.0.1-2.rhel8.aarch64.rpm
@ el8.aarch64 14 set_user_14 set_user_14-4.0.0-1.rhel8.aarch64.rpm pgdg 4.0.0 25.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/set_user_14-4.0.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 set_user_14 set_user_14-3.0.0-1.rhel8.aarch64.rpm pgdg 3.0.0 25.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/set_user_14-3.0.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 set_user_14 set_user_14-4.3.0-1PGDG.rhel9.8.x86_64.rpm pgdg 4.3.0 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/set_user_14-4.3.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 set_user_14 set_user_14-4.2.0-3PGDG.rhel9.8.x86_64.rpm pgdg 4.2.0 26.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/set_user_14-4.2.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 set_user_14 set_user_14-4.1.0-1PGDG.rhel9.x86_64.rpm pgdg 4.1.0 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/set_user_14-4.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 set_user_14 set_user_14-4.0.1-2.rhel9.x86_64.rpm pgdg 4.0.1 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/set_user_14-4.0.1-2.rhel9.x86_64.rpm
@ el9.x86_64 14 set_user_14 set_user_14-4.0.0-1.rhel9.x86_64.rpm pgdg 4.0.0 25.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/set_user_14-4.0.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 set_user_14 set_user_14-4.3.0-1PGDG.rhel9.8.aarch64.rpm pgdg 4.3.0 28.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/set_user_14-4.3.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 set_user_14 set_user_14-4.2.0-3PGDG.rhel9.8.aarch64.rpm pgdg 4.2.0 26.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/set_user_14-4.2.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 set_user_14 set_user_14-4.1.0-1PGDG.rhel9.aarch64.rpm pgdg 4.1.0 25.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/set_user_14-4.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 set_user_14 set_user_14-4.0.1-2.rhel9.aarch64.rpm pgdg 4.0.1 25.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/set_user_14-4.0.1-2.rhel9.aarch64.rpm
@ el9.aarch64 14 set_user_14 set_user_14-4.0.0-1.rhel9.aarch64.rpm pgdg 4.0.0 25.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/set_user_14-4.0.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 set_user_14 set_user_14-3.0.0-1.rhel9.aarch64.rpm pgdg 3.0.0 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/set_user_14-3.0.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 set_user_14 set_user_14-4.3.0-1PGDG.rhel10.2.x86_64.rpm pgdg 4.3.0 29.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/set_user_14-4.3.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 set_user_14 set_user_14-4.2.0-3PGDG.rhel10.2.x86_64.rpm pgdg 4.2.0 26.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/set_user_14-4.2.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 set_user_14 set_user_14-4.1.0-2PGDG.rhel10.x86_64.rpm pgdg 4.1.0 26.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/set_user_14-4.1.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 set_user_14 set_user_14-4.3.0-1PGDG.rhel10.2.aarch64.rpm pgdg 4.3.0 28.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/set_user_14-4.3.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 set_user_14 set_user_14-4.2.0-3PGDG.rhel10.2.aarch64.rpm pgdg 4.2.0 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/set_user_14-4.2.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 set_user_14 set_user_14-4.1.0-2PGDG.rhel10.aarch64.rpm pgdg 4.1.0 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/set_user_14-4.1.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.3.0-1.pgdg12+1_amd64.deb pgdg 4.3.0 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.3.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg12+2_amd64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg12+2_amd64.deb
@ d12.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg12+1_amd64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.3.0-1.pgdg12+1_arm64.deb pgdg 4.3.0 38.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.3.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg12+2_arm64.deb pgdg 4.2.0 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg12+2_arm64.deb
@ d12.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg12+1_arm64.deb pgdg 4.2.0 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.3.0-1.pgdg13+1_amd64.deb pgdg 4.3.0 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.3.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg13+2_amd64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg13+2_amd64.deb
@ d13.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg13+1_amd64.deb pgdg 4.2.0 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.3.0-1.pgdg13+1_arm64.deb pgdg 4.3.0 38.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.3.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg13+2_arm64.deb pgdg 4.2.0 34.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg13+2_arm64.deb
@ d13.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg13+1_arm64.deb pgdg 4.2.0 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.3.0-1.pgdg22.04+1_amd64.deb pgdg 4.3.0 42.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.3.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg22.04+2_amd64.deb pgdg 4.2.0 38.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg22.04+1_amd64.deb pgdg 4.2.0 38.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.3.0-1.pgdg22.04+1_arm64.deb pgdg 4.3.0 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.3.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg22.04+2_arm64.deb pgdg 4.2.0 37.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg22.04+1_arm64.deb pgdg 4.2.0 37.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.3.0-1.pgdg24.04+1_amd64.deb pgdg 4.3.0 38.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.3.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg24.04+2_amd64.deb pgdg 4.2.0 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg24.04+1_amd64.deb pgdg 4.2.0 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.3.0-1.pgdg24.04+1_arm64.deb pgdg 4.3.0 37.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.3.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg24.04+2_arm64.deb pgdg 4.2.0 33.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg24.04+1_arm64.deb pgdg 4.2.0 33.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.3.0-1.pgdg26.04+1_amd64.deb pgdg 4.3.0 38.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.3.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg26.04+2_amd64.deb pgdg 4.2.0 34.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg26.04+1_amd64.deb pgdg 4.2.0 34.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.3.0-1.pgdg26.04+1_arm64.deb pgdg 4.3.0 37.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.3.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg26.04+2_arm64.deb pgdg 4.2.0 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg26.04+1_arm64.deb pgdg 4.2.0 33.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `set_user` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install set_user;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y set_user -v 18  # PG 18
pig ext install -y set_user -v 17  # PG 17
pig ext install -y set_user -v 16  # PG 16
pig ext install -y set_user -v 15  # PG 15
pig ext install -y set_user -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y set_user_18       # PG 18
dnf install -y set_user_17       # PG 17
dnf install -y set_user_16       # PG 16
dnf install -y set_user_15       # PG 15
dnf install -y set_user_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-set-user   # PG 18
apt install -y postgresql-17-set-user   # PG 17
apt install -y postgresql-16-set-user   # PG 16
apt install -y postgresql-15-set-user   # PG 15
apt install -y postgresql-14-set-user   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'set_user';
```


**创建扩展**：

```sql
CREATE EXTENSION set_user;
```

## 用法

来源：

- [README.md](https://github.com/pgaudit/set_user/blob/45fc481de6874c2afc5199d7efbd2e32c66d702e/README.md)
- [set_user.control](https://github.com/pgaudit/set_user/blob/45fc481de6874c2afc5199d7efbd2e32c66d702e/set_user.control)
- [CHANGELOG.md](https://github.com/pgaudit/set_user/blob/45fc481de6874c2afc5199d7efbd2e32c66d702e/CHANGELOG.md)

`set_user` 允许切换用户和可选的权限提升，并提供增强的审计日志。当非特权用户必须提升为超级用户或对象所有者角色进行维护任务时，它提供额外的控制层。

```sql
CREATE EXTENSION set_user;
```

### 配置

加入 `postgresql.conf`，保留其他预加载条目，然后重启 PostgreSQL：

```ini
shared_preload_libraries = 'set_user'
```

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `set_user.block_alter_system` | `on` | 提升权限后阻止 ALTER SYSTEM |
| `set_user.block_copy_program` | `on` | 提升权限后阻止 COPY PROGRAM |
| `set_user.block_log_statement` | `on` | 阻止 SET log_statement；对超级用户强制 `log_statement=all` |
| `set_user.superuser_allowlist` | `*` | 允许提升为超级用户的角色 |
| `set_user.nosuperuser_target_allowlist` | `*` | 允许作为非超级用户目标的角色 |
| `set_user.superuser_audit_tag` | `AUDIT` | 提升权限时附加到 log_line_prefix 的标签 |
{.wide .expand}

### 函数

```sql
-- Switch to a non-superuser role
SELECT set_user('dbclient');

-- Escalate to superuser (requires EXECUTE on set_user_u)
SELECT set_user_u('postgres');

-- Switch with a token (token required for reset)
SELECT set_user('dbclient', 'my_secret_token');

-- Reset back to original user
SELECT reset_user();
SELECT reset_user('my_secret_token');  -- if token was used

-- Irrevocable session auth switch
SELECT set_session_auth('target_role');
```

### 权限设置

```sql
-- Allow role to switch to non-superuser roles
GRANT EXECUTE ON FUNCTION set_user(text) TO admin;

-- Allow role to escalate to superuser
GRANT EXECUTE ON FUNCTION set_user_u(text) TO dba;
```

### 提升权限时的行为

当提升为超级用户角色时：
- 角色转换会以特定标记记录
- `ALTER SYSTEM` 和 `COPY PROGRAM` 被阻止（如已配置）
- `log_statement` 被强制设为 `all` 以实现完整审计追踪
- `AUDIT` 标签被附加到 `log_line_prefix`

### 4.3.0 安全与兼容性

4.3.0 要求 PostgreSQL 14 或更新版本。它修复 RESET ALL 导致的后端崩溃，阻止 DISCARD ALL 和函数 SET 子句绕过重置令牌检查，并以常量时间比较令牌。许可列表中的角色名现在区分大小写，混合大小写名称应正确加引号。

重置令牌只是尽力而为的保护，不能防御恶意超级用户或其他身份切换途径。应显式限制 EXECUTE 授权和两类角色许可列表。依赖修复前，需要安装匹配文件并替换预加载进程。

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
| [**`set_user`**](/ext/e/set_user) | `4.2.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7370  | [**`set_user`**](/ext/e/set_user) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_readonly`](/ext/e/pg_readonly) [`pg_permissions`](/ext/e/pg_permissions) [`pgaudit`](/ext/e/pgaudit) [`login_hook`](/ext/e/login_hook) [`pgauditlogtofile`](/ext/e/pgauditlogtofile) [`pg_auth_mon`](/ext/e/pg_auth_mon) [`credcheck`](/ext/e/credcheck) [`pgextwlist`](/ext/e/pgextwlist) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.0` | {{< pgvers "18,17,16,15,14" >}} | `set_user` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.0` | {{< pgvers "18,17,16,15,14" >}} | `set_user_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-set-user` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.1.0 1 | AVAIL PGDG 4.1.0 2 | AVAIL PGDG 4.1.0 3 | AVAIL PGDG 4.1.0 4 |
| el8.aarch64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.1.0 1 | AVAIL PGDG 4.1.0 2 | AVAIL PGDG 4.1.0 3 | AVAIL PGDG 4.1.0 4 |
| el9.x86_64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.1.0 1 | AVAIL PGDG 4.1.0 2 | AVAIL PGDG 4.1.0 3 | AVAIL PGDG 4.1.0 3 |
| el9.aarch64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.1.0 1 | AVAIL PGDG 4.1.0 2 | AVAIL PGDG 4.1.0 3 | AVAIL PGDG 4.1.0 4 |
| el10.x86_64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.1.0 1 | AVAIL PGDG 4.1.0 1 | AVAIL PGDG 4.1.0 1 | AVAIL PGDG 4.1.0 1 |
| el10.aarch64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.1.0 1 | AVAIL PGDG 4.1.0 1 | AVAIL PGDG 4.1.0 1 | AVAIL PGDG 4.1.0 1 |
| d12.x86_64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 |
| d12.aarch64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 |
| d13.x86_64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 |
| d13.aarch64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 |
| u22.x86_64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 |
| u22.aarch64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 |
| u24.x86_64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 |
| u24.aarch64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 |
| u26.x86_64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 |
| u26.aarch64 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 | AVAIL PGDG 4.2.0 1 |
@ el8.x86_64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel8.x86_64.rpm pgdg 4.2.0 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/set_user_18-4.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel8.aarch64.rpm pgdg 4.2.0 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/set_user_18-4.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel9.x86_64.rpm pgdg 4.2.0 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/set_user_18-4.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel9.aarch64.rpm pgdg 4.2.0 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/set_user_18-4.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel10.x86_64.rpm pgdg 4.2.0 27.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/set_user_18-4.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 set_user_18 set_user_18-4.2.0-1PGDG.rhel10.aarch64.rpm pgdg 4.2.0 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/set_user_18-4.2.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg12+1_amd64.deb pgdg 4.2.0 35.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg12+1_arm64.deb pgdg 4.2.0 34.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg13+1_amd64.deb pgdg 4.2.0 35.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg13+1_arm64.deb pgdg 4.2.0 34.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg22.04+1_amd64.deb pgdg 4.2.0 35.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg22.04+1_arm64.deb pgdg 4.2.0 34.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg24.04+1_amd64.deb pgdg 4.2.0 34.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg24.04+1_arm64.deb pgdg 4.2.0 34.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg26.04+1_amd64.deb pgdg 4.2.0 34.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-set-user postgresql-18-set-user_4.2.0-1.pgdg26.04+1_arm64.deb pgdg 4.2.0 34.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-18-set-user_4.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 set_user_17 set_user_17-4.1.0-1PGDG.rhel8.x86_64.rpm pgdg 4.1.0 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/set_user_17-4.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 set_user_17 set_user_17-4.1.0-1PGDG.rhel8.aarch64.rpm pgdg 4.1.0 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/set_user_17-4.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 set_user_17 set_user_17-4.1.0-1PGDG.rhel9.x86_64.rpm pgdg 4.1.0 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/set_user_17-4.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 set_user_17 set_user_17-4.1.0-1PGDG.rhel9.aarch64.rpm pgdg 4.1.0 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/set_user_17-4.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 set_user_17 set_user_17-4.1.0-2PGDG.rhel10.x86_64.rpm pgdg 4.1.0 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/set_user_17-4.1.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 set_user_17 set_user_17-4.1.0-2PGDG.rhel10.aarch64.rpm pgdg 4.1.0 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/set_user_17-4.1.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg12+1_amd64.deb pgdg 4.2.0 35.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg12+1_arm64.deb pgdg 4.2.0 34.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg13+1_amd64.deb pgdg 4.2.0 35.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg13+1_arm64.deb pgdg 4.2.0 34.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg22.04+1_amd64.deb pgdg 4.2.0 39.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg22.04+1_arm64.deb pgdg 4.2.0 38.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg24.04+1_amd64.deb pgdg 4.2.0 34.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg24.04+1_arm64.deb pgdg 4.2.0 34.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg26.04+1_amd64.deb pgdg 4.2.0 34.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-set-user postgresql-17-set-user_4.2.0-1.pgdg26.04+1_arm64.deb pgdg 4.2.0 34.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-17-set-user_4.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 set_user_16 set_user_16-4.1.0-1PGDG.rhel8.x86_64.rpm pgdg 4.1.0 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/set_user_16-4.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 set_user_16 set_user_16-4.0.1-2.rhel8.1.x86_64.rpm pgdg 4.0.1 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/set_user_16-4.0.1-2.rhel8.1.x86_64.rpm
@ el8.aarch64 16 set_user_16 set_user_16-4.1.0-1PGDG.rhel8.aarch64.rpm pgdg 4.1.0 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/set_user_16-4.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 set_user_16 set_user_16-4.0.1-2.rhel8.1.aarch64.rpm pgdg 4.0.1 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/set_user_16-4.0.1-2.rhel8.1.aarch64.rpm
@ el9.x86_64 16 set_user_16 set_user_16-4.1.0-1PGDG.rhel9.x86_64.rpm pgdg 4.1.0 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/set_user_16-4.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 set_user_16 set_user_16-4.0.1-2.rhel9.1.x86_64.rpm pgdg 4.0.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/set_user_16-4.0.1-2.rhel9.1.x86_64.rpm
@ el9.aarch64 16 set_user_16 set_user_16-4.1.0-1PGDG.rhel9.aarch64.rpm pgdg 4.1.0 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/set_user_16-4.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 set_user_16 set_user_16-4.0.1-2.rhel9.1.aarch64.rpm pgdg 4.0.1 25.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/set_user_16-4.0.1-2.rhel9.1.aarch64.rpm
@ el10.x86_64 16 set_user_16 set_user_16-4.1.0-2PGDG.rhel10.x86_64.rpm pgdg 4.1.0 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/set_user_16-4.1.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 set_user_16 set_user_16-4.1.0-2PGDG.rhel10.aarch64.rpm pgdg 4.1.0 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/set_user_16-4.1.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg12+1_amd64.deb pgdg 4.2.0 35.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg12+1_arm64.deb pgdg 4.2.0 34.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg13+1_amd64.deb pgdg 4.2.0 35.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg13+1_arm64.deb pgdg 4.2.0 34.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg22.04+1_amd64.deb pgdg 4.2.0 38.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg22.04+1_arm64.deb pgdg 4.2.0 38.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg24.04+1_amd64.deb pgdg 4.2.0 34.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg24.04+1_arm64.deb pgdg 4.2.0 34.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg26.04+1_amd64.deb pgdg 4.2.0 34.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-set-user postgresql-16-set-user_4.2.0-1.pgdg26.04+1_arm64.deb pgdg 4.2.0 34.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-16-set-user_4.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 set_user_15 set_user_15-4.1.0-1PGDG.rhel8.x86_64.rpm pgdg 4.1.0 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/set_user_15-4.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 set_user_15 set_user_15-4.0.1-2.rhel8.x86_64.rpm pgdg 4.0.1 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/set_user_15-4.0.1-2.rhel8.x86_64.rpm
@ el8.x86_64 15 set_user_15 set_user_15-4.0.0-1.rhel8.x86_64.rpm pgdg 4.0.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/set_user_15-4.0.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 set_user_15 set_user_15-4.1.0-1PGDG.rhel8.aarch64.rpm pgdg 4.1.0 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/set_user_15-4.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 set_user_15 set_user_15-4.0.1-2.rhel8.aarch64.rpm pgdg 4.0.1 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/set_user_15-4.0.1-2.rhel8.aarch64.rpm
@ el8.aarch64 15 set_user_15 set_user_15-4.0.0-1.rhel8.aarch64.rpm pgdg 4.0.0 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/set_user_15-4.0.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 set_user_15 set_user_15-4.1.0-1PGDG.rhel9.x86_64.rpm pgdg 4.1.0 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/set_user_15-4.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 set_user_15 set_user_15-4.0.1-2.rhel9.x86_64.rpm pgdg 4.0.1 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/set_user_15-4.0.1-2.rhel9.x86_64.rpm
@ el9.x86_64 15 set_user_15 set_user_15-4.0.0-1.rhel9.x86_64.rpm pgdg 4.0.0 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/set_user_15-4.0.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 set_user_15 set_user_15-4.1.0-1PGDG.rhel9.aarch64.rpm pgdg 4.1.0 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/set_user_15-4.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 set_user_15 set_user_15-4.0.1-2.rhel9.aarch64.rpm pgdg 4.0.1 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/set_user_15-4.0.1-2.rhel9.aarch64.rpm
@ el9.aarch64 15 set_user_15 set_user_15-4.0.0-1.rhel9.aarch64.rpm pgdg 4.0.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/set_user_15-4.0.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 set_user_15 set_user_15-4.1.0-2PGDG.rhel10.x86_64.rpm pgdg 4.1.0 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/set_user_15-4.1.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 set_user_15 set_user_15-4.1.0-2PGDG.rhel10.aarch64.rpm pgdg 4.1.0 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/set_user_15-4.1.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg12+1_amd64.deb pgdg 4.2.0 34.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg12+1_arm64.deb pgdg 4.2.0 34.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg13+1_amd64.deb pgdg 4.2.0 34.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg13+1_arm64.deb pgdg 4.2.0 34.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg22.04+1_amd64.deb pgdg 4.2.0 38.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg22.04+1_arm64.deb pgdg 4.2.0 37.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg24.04+1_amd64.deb pgdg 4.2.0 34.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg24.04+1_arm64.deb pgdg 4.2.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg26.04+1_amd64.deb pgdg 4.2.0 34.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-set-user postgresql-15-set-user_4.2.0-1.pgdg26.04+1_arm64.deb pgdg 4.2.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-15-set-user_4.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 set_user_14 set_user_14-4.1.0-1PGDG.rhel8.x86_64.rpm pgdg 4.1.0 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/set_user_14-4.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 set_user_14 set_user_14-4.0.1-2.rhel8.x86_64.rpm pgdg 4.0.1 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/set_user_14-4.0.1-2.rhel8.x86_64.rpm
@ el8.x86_64 14 set_user_14 set_user_14-4.0.0-1.rhel8.x86_64.rpm pgdg 4.0.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/set_user_14-4.0.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 set_user_14 set_user_14-3.0.0-1.rhel8.x86_64.rpm pgdg 3.0.0 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/set_user_14-3.0.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 set_user_14 set_user_14-4.1.0-1PGDG.rhel8.aarch64.rpm pgdg 4.1.0 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/set_user_14-4.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 set_user_14 set_user_14-4.0.1-2.rhel8.aarch64.rpm pgdg 4.0.1 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/set_user_14-4.0.1-2.rhel8.aarch64.rpm
@ el8.aarch64 14 set_user_14 set_user_14-4.0.0-1.rhel8.aarch64.rpm pgdg 4.0.0 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/set_user_14-4.0.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 set_user_14 set_user_14-3.0.0-1.rhel8.aarch64.rpm pgdg 3.0.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/set_user_14-3.0.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 set_user_14 set_user_14-4.1.0-1PGDG.rhel9.x86_64.rpm pgdg 4.1.0 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/set_user_14-4.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 set_user_14 set_user_14-4.0.1-2.rhel9.x86_64.rpm pgdg 4.0.1 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/set_user_14-4.0.1-2.rhel9.x86_64.rpm
@ el9.x86_64 14 set_user_14 set_user_14-4.0.0-1.rhel9.x86_64.rpm pgdg 4.0.0 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/set_user_14-4.0.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 set_user_14 set_user_14-4.1.0-1PGDG.rhel9.aarch64.rpm pgdg 4.1.0 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/set_user_14-4.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 set_user_14 set_user_14-4.0.1-2.rhel9.aarch64.rpm pgdg 4.0.1 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/set_user_14-4.0.1-2.rhel9.aarch64.rpm
@ el9.aarch64 14 set_user_14 set_user_14-4.0.0-1.rhel9.aarch64.rpm pgdg 4.0.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/set_user_14-4.0.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 set_user_14 set_user_14-3.0.0-1.rhel9.aarch64.rpm pgdg 3.0.0 25.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/set_user_14-3.0.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 set_user_14 set_user_14-4.1.0-2PGDG.rhel10.x86_64.rpm pgdg 4.1.0 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/set_user_14-4.1.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 set_user_14 set_user_14-4.1.0-2PGDG.rhel10.aarch64.rpm pgdg 4.1.0 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/set_user_14-4.1.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg12+1_amd64.deb pgdg 4.2.0 34.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg12+1_arm64.deb pgdg 4.2.0 34.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg13+1_amd64.deb pgdg 4.2.0 34.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg13+1_arm64.deb pgdg 4.2.0 34.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg22.04+1_amd64.deb pgdg 4.2.0 38.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg22.04+1_arm64.deb pgdg 4.2.0 37.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg24.04+1_amd64.deb pgdg 4.2.0 34.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg24.04+1_arm64.deb pgdg 4.2.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg26.04+1_amd64.deb pgdg 4.2.0 34.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-set-user postgresql-14-set-user_4.2.0-1.pgdg26.04+1_arm64.deb pgdg 4.2.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-set-user/postgresql-14-set-user_4.2.0-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `set_user` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install set_user;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y set_user -v 18  # PG 18
pig ext install -y set_user -v 17  # PG 17
pig ext install -y set_user -v 16  # PG 16
pig ext install -y set_user -v 15  # PG 15
pig ext install -y set_user -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y set_user_18       # PG 18
dnf install -y set_user_17       # PG 17
dnf install -y set_user_16       # PG 16
dnf install -y set_user_15       # PG 15
dnf install -y set_user_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-set-user   # PG 18
apt install -y postgresql-17-set-user   # PG 17
apt install -y postgresql-16-set-user   # PG 16
apt install -y postgresql-15-set-user   # PG 15
apt install -y postgresql-14-set-user   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'set_user';
```


**创建扩展**：

```sql
CREATE EXTENSION set_user;
```



## 用法

> [set_user: 带增强日志和控制的用户切换](https://github.com/pgaudit/set_user)

`set_user` 允许切换用户和可选的权限提升，并提供增强的审计日志。当非特权用户必须提升为超级用户或对象所有者角色进行维护任务时，它提供额外的控制层。

```sql
CREATE EXTENSION set_user;
```

### 配置

添加到 `postgresql.conf`：

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

### 函数

```sql
-- 切换到非超级用户角色
SELECT set_user('dbclient');

-- 提升为超级用户（需要 set_user_u 的 EXECUTE 权限）
SELECT set_user_u('postgres');

-- 使用令牌切换（重置时需要令牌）
SELECT set_user('dbclient', 'my_secret_token');

-- 重置回原始用户
SELECT reset_user();
SELECT reset_user('my_secret_token');  -- 如果使用了令牌

-- 不可撤销的会话认证切换
SELECT set_session_auth('target_role');
```

### 权限设置

```sql
-- 允许角色切换到非超级用户角色
GRANT EXECUTE ON FUNCTION set_user(text) TO admin;

-- 允许角色提升为超级用户
GRANT EXECUTE ON FUNCTION set_user_u(text) TO dba;
```

### 提升权限时的行为

当提升为超级用户角色时：
- 角色转换会以特定标记记录
- `ALTER SYSTEM` 和 `COPY PROGRAM` 被阻止（如已配置）
- `log_statement` 被强制设为 `all` 以实现完整审计追踪
- `AUDIT` 标签被附加到 `log_line_prefix`

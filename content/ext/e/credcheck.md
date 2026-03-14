---
title: "credcheck"
linkTitle: "credcheck"
description: "明文凭证检查器"
weight: 7310
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/MigOpsRepos/credcheck">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">MigOpsRepos/credcheck</div>
    <div class="ext-card__desc">https://github.com/MigOpsRepos/credcheck</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`credcheck`**](/ext/e/credcheck) | `4.6` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7310  | [**`credcheck`**](/ext/e/credcheck) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) [`login_hook`](/ext/e/login_hook) [`passwordcheck`](/ext/e/passwordcheck) [`pgaudit`](/ext/e/pgaudit) [`pg_auth_mon`](/ext/e/pg_auth_mon) [`set_user`](/ext/e/set_user) [`auth_delay`](/ext/e/auth_delay) [`pg_permissions`](/ext/e/pg_permissions) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.6` | {{< pgvers "18,17,16,15,14" >}} | `credcheck` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.6` | {{< pgvers "18,17,16,15,14" >}} | `credcheck_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-credcheck` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.6 7 | AVAIL PGDG 4.6 8 | AVAIL PGDG 4.6 11 | AVAIL PGDG 4.6 16 | AVAIL PGDG 4.6 16 |
| el8.aarch64 | AVAIL PGDG 4.6 7 | AVAIL PGDG 4.6 8 | AVAIL PGDG 4.6 11 | AVAIL PGDG 4.6 16 | AVAIL PGDG 4.6 16 |
| el9.x86_64 | AVAIL PGDG 4.6 7 | AVAIL PGDG 4.6 8 | AVAIL PGDG 4.6 11 | AVAIL PGDG 4.6 16 | AVAIL PGDG 4.6 15 |
| el9.aarch64 | AVAIL PGDG 4.6 7 | AVAIL PGDG 4.6 8 | AVAIL PGDG 4.6 11 | AVAIL PGDG 4.6 16 | AVAIL PGDG 4.6 16 |
| el10.x86_64 | AVAIL PGDG 4.5 6 | AVAIL PGDG 4.5 6 | AVAIL PGDG 4.5 6 | AVAIL PGDG 4.5 6 | AVAIL PGDG 4.5 6 |
| el10.aarch64 | AVAIL PGDG 4.6 7 | AVAIL PGDG 4.6 7 | AVAIL PGDG 4.6 7 | AVAIL PGDG 4.6 7 | AVAIL PGDG 4.6 7 |
| d12.x86_64 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 |
| d12.aarch64 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 |
| d13.x86_64 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 |
| d13.aarch64 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 |
| u22.x86_64 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 |
| u22.aarch64 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 |
| u24.x86_64 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 |
| u24.aarch64 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 | AVAIL PGDG 4.6 1 |
@ el8.x86_64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 40.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel8.x86_64.rpm pgdg 3.0 35.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-3.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel8.aarch64.rpm pgdg 3.0 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-3.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel9.x86_64.rpm pgdg 3.0 35.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-3.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel9.aarch64.rpm pgdg 3.0 35.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-3.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg12+1_amd64.deb pgdg 4.6 74.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg12+1_arm64.deb pgdg 4.6 73.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg13+1_amd64.deb pgdg 4.6 74.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg13+1_arm64.deb pgdg 4.6 73.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg22.04+1_amd64.deb pgdg 4.6 68.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg22.04+1_arm64.deb pgdg 4.6 67.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg24.04+1_amd64.deb pgdg 4.6 68.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg24.04+1_arm64.deb pgdg 4.6 66.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel8.x86_64.rpm pgdg 2.8 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-2.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel8.aarch64.rpm pgdg 2.8 34.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-2.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 35.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel9.x86_64.rpm pgdg 2.8 35.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-2.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel9.aarch64.rpm pgdg 2.8 35.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-2.8-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg12+1_amd64.deb pgdg 4.6 74.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg12+1_arm64.deb pgdg 4.6 73.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg13+1_amd64.deb pgdg 4.6 74.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg13+1_arm64.deb pgdg 4.6 73.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg22.04+1_amd64.deb pgdg 4.6 75.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg22.04+1_arm64.deb pgdg 4.6 74.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg24.04+1_amd64.deb pgdg 4.6 68.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg24.04+1_arm64.deb pgdg 4.6 67.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 34.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 34.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 34.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 33.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel9.x86_64.rpm pgdg 2.6 34.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 34.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 34.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg12+1_amd64.deb pgdg 4.6 74.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg12+1_arm64.deb pgdg 4.6 73.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg13+1_amd64.deb pgdg 4.6 74.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg13+1_arm64.deb pgdg 4.6 73.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg22.04+1_amd64.deb pgdg 4.6 75.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg22.04+1_arm64.deb pgdg 4.6 73.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg24.04+1_amd64.deb pgdg 4.6 68.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg24.04+1_arm64.deb pgdg 4.6 67.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 41.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 34.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 34.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.0-1.rhel8.x86_64.rpm pgdg 2.0 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-1.2-1.rhel8.x86_64.rpm pgdg 1.2 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-1.0-1.rhel8.x86_64.rpm pgdg 1.0 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-1.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-0.2.0-3.rhel8.x86_64.rpm pgdg 0.2.0 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-0.2.0-3.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-0.2.0-1.rhel8.x86_64.rpm pgdg 0.2.0 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-0.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 34.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 33.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.0-1.rhel8.aarch64.rpm pgdg 2.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-1.2-1.rhel8.aarch64.rpm pgdg 1.2 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-1.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-1.0-1.rhel8.aarch64.rpm pgdg 1.0 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-1.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-0.2.0-3.rhel8.aarch64.rpm pgdg 0.2.0 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-0.2.0-3.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-0.2.0-1.rhel8.aarch64.rpm pgdg 0.2.0 34.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-0.2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 36.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 35.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel9.x86_64.rpm pgdg 2.6 34.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.0-1.rhel9.x86_64.rpm pgdg 2.0 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-1.2-1.rhel9.x86_64.rpm pgdg 1.2 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-1.0-1.rhel9.x86_64.rpm pgdg 1.0 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-1.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-0.2.0-3.rhel9.x86_64.rpm pgdg 0.2.0 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-0.2.0-3.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-0.2.0-1.rhel9.x86_64.rpm pgdg 0.2.0 35.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-0.2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 38.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 34.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 34.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.0-1.rhel9.aarch64.rpm pgdg 2.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-1.2-1.rhel9.aarch64.rpm pgdg 1.2 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-1.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-1.0-1.rhel9.aarch64.rpm pgdg 1.0 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-1.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-0.2.0-3.rhel9.aarch64.rpm pgdg 0.2.0 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-0.2.0-3.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-0.2.0-1.rhel9.aarch64.rpm pgdg 0.2.0 35.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-0.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg12+1_amd64.deb pgdg 4.6 74.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg12+1_arm64.deb pgdg 4.6 72.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg13+1_amd64.deb pgdg 4.6 73.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg13+1_arm64.deb pgdg 4.6 72.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg22.04+1_amd64.deb pgdg 4.6 74.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg22.04+1_arm64.deb pgdg 4.6 73.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg24.04+1_amd64.deb pgdg 4.6 67.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg24.04+1_arm64.deb pgdg 4.6 66.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 41.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 34.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 34.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.0-1.rhel8.x86_64.rpm pgdg 2.0 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-1.2-1.rhel8.x86_64.rpm pgdg 1.2 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-1.0-1.rhel8.x86_64.rpm pgdg 1.0 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-1.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-0.2.0-3.rhel8.x86_64.rpm pgdg 0.2.0 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-0.2.0-3.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-0.2.0-1.rhel8.x86_64.rpm pgdg 0.2.0 35.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-0.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 39.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 34.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.0-1.rhel8.aarch64.rpm pgdg 2.0 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-1.2-1.rhel8.aarch64.rpm pgdg 1.2 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-1.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-1.0-1.rhel8.aarch64.rpm pgdg 1.0 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-1.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-0.2.0-3.rhel8.aarch64.rpm pgdg 0.2.0 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-0.2.0-3.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-0.2.0-1.rhel8.aarch64.rpm pgdg 0.2.0 34.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-0.2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel9.x86_64.rpm pgdg 2.6 34.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.0-1.rhel9.x86_64.rpm pgdg 2.0 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-1.2-1.rhel9.x86_64.rpm pgdg 1.2 28.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-1.0-1.rhel9.x86_64.rpm pgdg 1.0 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-1.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-0.2.0-3.rhel9.x86_64.rpm pgdg 0.2.0 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-0.2.0-3.rhel9.x86_64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 34.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 34.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.0-1.rhel9.aarch64.rpm pgdg 2.0 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-1.2-1.rhel9.aarch64.rpm pgdg 1.2 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-1.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-1.0-1.rhel9.aarch64.rpm pgdg 1.0 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-1.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-0.2.0-3.rhel9.aarch64.rpm pgdg 0.2.0 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-0.2.0-3.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-0.2.0-1.rhel9.aarch64.rpm pgdg 0.2.0 35.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-0.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 39.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg12+1_amd64.deb pgdg 4.6 73.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg12+1_arm64.deb pgdg 4.6 72.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg13+1_amd64.deb pgdg 4.6 73.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg13+1_arm64.deb pgdg 4.6 72.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg22.04+1_amd64.deb pgdg 4.6 74.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg22.04+1_arm64.deb pgdg 4.6 73.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg24.04+1_amd64.deb pgdg 4.6 67.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg24.04+1_arm64.deb pgdg 4.6 66.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `credcheck` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install credcheck;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y credcheck -v 18  # PG 18
pig ext install -y credcheck -v 17  # PG 17
pig ext install -y credcheck -v 16  # PG 16
pig ext install -y credcheck -v 15  # PG 15
pig ext install -y credcheck -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y credcheck_18       # PG 18
dnf install -y credcheck_17       # PG 17
dnf install -y credcheck_16       # PG 16
dnf install -y credcheck_15       # PG 15
dnf install -y credcheck_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-credcheck   # PG 18
apt install -y postgresql-17-credcheck   # PG 17
apt install -y postgresql-16-credcheck   # PG 16
apt install -y postgresql-15-credcheck   # PG 15
apt install -y postgresql-14-credcheck   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'credcheck';
```


**创建扩展**：

```sql
CREATE EXTENSION credcheck;
```



## 用法

> [credcheck: PostgreSQL 用户名和密码的凭证检查](https://github.com/MigOpsRepos/credcheck)

`credcheck` 在 `CREATE ROLE`、`ALTER ROLE` 和密码修改时，强制执行可配置的用户名和密码强度规则。它还支持密码重用策略和认证失败封禁。

### 配置参数

添加到 `postgresql.conf`：

```ini
shared_preload_libraries = 'credcheck'
```

#### 用户名检查

| 参数 | 描述 | 示例 |
|-----------|-------------|---------|
| `credcheck.username_min_length` | 用户名最小长度 | `4` |
| `credcheck.username_min_special` | 最少特殊字符数 | `1` |
| `credcheck.username_min_digit` | 最少数字字符数 | `1` |
| `credcheck.username_min_upper` | 最少大写字符数 | `2` |
| `credcheck.username_min_lower` | 最少小写字符数 | `1` |
| `credcheck.username_min_repeat` | 相邻最大重复字符数 | `2` |
| `credcheck.username_contain` | 必须包含其中一个字符 | `a,b,c` |
| `credcheck.username_not_contain` | 不得包含这些字符 | `x,y,z` |
| `credcheck.username_contain_password` | 用户名不得包含密码 | `on` |

#### 密码检查

| 参数 | 描述 | 示例 |
|-----------|-------------|---------|
| `credcheck.password_min_length` | 密码最小长度 | `8` |
| `credcheck.password_min_special` | 最少特殊字符数 | `1` |
| `credcheck.password_min_digit` | 最少数字字符数 | `1` |
| `credcheck.password_min_upper` | 最少大写字符数 | `1` |
| `credcheck.password_min_lower` | 最少小写字符数 | `1` |
| `credcheck.password_min_repeat` | 相邻最大重复字符数 | `3` |
| `credcheck.password_contain_username` | 密码不得包含用户名 | `on` |
| `credcheck.password_valid_until` | VALID UNTIL 最少天数 | `60` |
| `credcheck.password_valid_max` | VALID UNTIL 最大天数 | `365` |
| `credcheck.whitelist` | 不受检查约束的用户名 | `admin,super` |

### 使用示例

```sql
-- 拒绝：用户名太短
CREATE USER abc WITH PASSWORD 'pass';
-- ERROR: username length should match the configured credcheck.username_min_length

-- 拒绝：密码包含用户名
CREATE USER abcd$ WITH PASSWORD 'abcd$xyz';
-- ERROR: password should not contain username
```

### 密码重用策略

```sql
SET credcheck.password_reuse_history = 2;
SET credcheck.password_reuse_interval = 365;  -- 天
```

查看密码历史：

```sql
SELECT rolename, password_hash FROM pg_password_history;
```

### 认证失败封禁

```sql
SET credcheck.max_auth_failure = 3;  -- 3次失败后封禁
```

重置被封禁的用户：

```sql
SELECT pg_banned_role_reset();              -- 重置所有
SELECT pg_banned_role_reset('username');     -- 重置特定用户
```

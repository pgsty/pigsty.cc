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
@ el8.x86_64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 40.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel8.x86_64.rpm pgdg 3.0 35.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-3.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 39.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel8.aarch64.rpm pgdg 3.0 35.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-3.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel9.x86_64.rpm pgdg 3.0 35.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-3.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 39.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel9.aarch64.rpm pgdg 3.0 35.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-3.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 39.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg12+1_amd64.deb pgdg 4.6 74.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg12+1_arm64.deb pgdg 4.6 73.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg13+1_amd64.deb pgdg 4.6 74.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg13+1_arm64.deb pgdg 4.6 73.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg22.04+1_amd64.deb pgdg 4.6 68.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg22.04+1_arm64.deb pgdg 4.6 67.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg24.04+1_amd64.deb pgdg 4.6 68.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_4.6-1.pgdg24.04+1_arm64.deb pgdg 4.6 66.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_4.6-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 40.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel8.x86_64.rpm pgdg 2.8 35.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-2.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 40.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel8.aarch64.rpm pgdg 2.8 34.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-2.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 35.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel9.x86_64.rpm pgdg 2.8 35.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-2.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 40.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel9.aarch64.rpm pgdg 2.8 35.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-2.8-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 40.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg12+1_amd64.deb pgdg 4.6 74.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg12+1_arm64.deb pgdg 4.6 73.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg13+1_amd64.deb pgdg 4.6 74.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg13+1_arm64.deb pgdg 4.6 73.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg22.04+1_amd64.deb pgdg 4.6 75.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg22.04+1_arm64.deb pgdg 4.6 74.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg24.04+1_amd64.deb pgdg 4.6 68.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_4.6-1.pgdg24.04+1_arm64.deb pgdg 4.6 67.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_4.6-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 40.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 34.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 34.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 31.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 40.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 34.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 33.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 32.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 31.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 36.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 35.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel9.x86_64.rpm pgdg 2.6 34.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 32.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 40.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 34.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 34.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 31.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 40.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg12+1_amd64.deb pgdg 4.6 74.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg12+1_arm64.deb pgdg 4.6 73.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg13+1_amd64.deb pgdg 4.6 74.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg13+1_arm64.deb pgdg 4.6 73.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg22.04+1_amd64.deb pgdg 4.6 75.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg22.04+1_arm64.deb pgdg 4.6 73.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg24.04+1_amd64.deb pgdg 4.6 68.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_4.6-1.pgdg24.04+1_arm64.deb pgdg 4.6 67.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_4.6-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 41.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 34.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 34.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 33.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 31.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.0-1.rhel8.x86_64.rpm pgdg 2.0 31.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-1.2-1.rhel8.x86_64.rpm pgdg 1.2 27.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-1.0-1.rhel8.x86_64.rpm pgdg 1.0 27.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-1.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-0.2.0-3.rhel8.x86_64.rpm pgdg 0.2.0 18.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-0.2.0-3.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-0.2.0-1.rhel8.x86_64.rpm pgdg 0.2.0 35.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-0.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 39.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 34.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 33.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 32.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 31.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.0-1.rhel8.aarch64.rpm pgdg 2.0 30.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-1.2-1.rhel8.aarch64.rpm pgdg 1.2 27.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-1.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-1.0-1.rhel8.aarch64.rpm pgdg 1.0 26.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-1.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-0.2.0-3.rhel8.aarch64.rpm pgdg 0.2.0 18.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-0.2.0-3.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-0.2.0-1.rhel8.aarch64.rpm pgdg 0.2.0 34.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-0.2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 36.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 35.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel9.x86_64.rpm pgdg 2.6 34.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 32.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.0-1.rhel9.x86_64.rpm pgdg 2.0 31.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-1.2-1.rhel9.x86_64.rpm pgdg 1.2 28.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-1.0-1.rhel9.x86_64.rpm pgdg 1.0 27.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-1.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-0.2.0-3.rhel9.x86_64.rpm pgdg 0.2.0 18.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-0.2.0-3.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-0.2.0-1.rhel9.x86_64.rpm pgdg 0.2.0 35.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-0.2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 39.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 38.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 34.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 34.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 31.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.0-1.rhel9.aarch64.rpm pgdg 2.0 30.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-1.2-1.rhel9.aarch64.rpm pgdg 1.2 27.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-1.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-1.0-1.rhel9.aarch64.rpm pgdg 1.0 26.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-1.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-0.2.0-3.rhel9.aarch64.rpm pgdg 0.2.0 18.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-0.2.0-3.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-0.2.0-1.rhel9.aarch64.rpm pgdg 0.2.0 35.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-0.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 39.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg12+1_amd64.deb pgdg 4.6 74.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg12+1_arm64.deb pgdg 4.6 72.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg13+1_amd64.deb pgdg 4.6 73.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg13+1_arm64.deb pgdg 4.6 72.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg22.04+1_amd64.deb pgdg 4.6 74.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg22.04+1_arm64.deb pgdg 4.6 73.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg24.04+1_amd64.deb pgdg 4.6 67.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_4.6-1.pgdg24.04+1_arm64.deb pgdg 4.6 66.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_4.6-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 41.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 34.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 34.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 31.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.0-1.rhel8.x86_64.rpm pgdg 2.0 31.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-1.2-1.rhel8.x86_64.rpm pgdg 1.2 27.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-1.0-1.rhel8.x86_64.rpm pgdg 1.0 27.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-1.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-0.2.0-3.rhel8.x86_64.rpm pgdg 0.2.0 18.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-0.2.0-3.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-0.2.0-1.rhel8.x86_64.rpm pgdg 0.2.0 35.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-0.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 39.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 34.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 33.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 32.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 31.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.0-1.rhel8.aarch64.rpm pgdg 2.0 30.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-1.2-1.rhel8.aarch64.rpm pgdg 1.2 27.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-1.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-1.0-1.rhel8.aarch64.rpm pgdg 1.0 26.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-1.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-0.2.0-3.rhel8.aarch64.rpm pgdg 0.2.0 18.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-0.2.0-3.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-0.2.0-1.rhel8.aarch64.rpm pgdg 0.2.0 34.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-0.2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 36.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 35.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel9.x86_64.rpm pgdg 2.6 34.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 32.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.0-1.rhel9.x86_64.rpm pgdg 2.0 31.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-1.2-1.rhel9.x86_64.rpm pgdg 1.2 28.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-1.0-1.rhel9.x86_64.rpm pgdg 1.0 27.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-1.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-0.2.0-3.rhel9.x86_64.rpm pgdg 0.2.0 18.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-0.2.0-3.rhel9.x86_64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 39.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 34.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 34.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 31.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.0-1.rhel9.aarch64.rpm pgdg 2.0 30.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-1.2-1.rhel9.aarch64.rpm pgdg 1.2 27.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-1.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-1.0-1.rhel9.aarch64.rpm pgdg 1.0 26.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-1.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-0.2.0-3.rhel9.aarch64.rpm pgdg 0.2.0 18.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-0.2.0-3.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-0.2.0-1.rhel9.aarch64.rpm pgdg 0.2.0 35.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-0.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 39.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 39.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 39.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg12+1_amd64.deb pgdg 4.6 73.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg12+1_arm64.deb pgdg 4.6 72.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg13+1_amd64.deb pgdg 4.6 73.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg13+1_arm64.deb pgdg 4.6 72.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg22.04+1_amd64.deb pgdg 4.6 74.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg22.04+1_arm64.deb pgdg 4.6 73.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg24.04+1_amd64.deb pgdg 4.6 67.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_4.6-1.pgdg24.04+1_arm64.deb pgdg 4.6 66.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_4.6-1.pgdg24.04+1_arm64.deb
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

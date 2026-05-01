---
title: "login_hook"
linkTitle: "login_hook"
description: "在用户登陆时执行login_hook.login()函数"
weight: 7360
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/splendiddata/login_hook">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">splendiddata/login_hook</div>
    <div class="ext-card__desc">https://github.com/splendiddata/login_hook</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/login_hook-1.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">login_hook-1.7.tar.gz</div>
    <div class="ext-card__desc">login_hook-1.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`login_hook`**](/ext/e/login_hook) | `1.7` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7360  | [**`login_hook`**](/ext/e/login_hook) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `login_hook` |
{.ext-table}

| **相关扩展** | [`pg_auth_mon`](/ext/e/pg_auth_mon) [`credcheck`](/ext/e/credcheck) [`set_user`](/ext/e/set_user) [`pg_permissions`](/ext/e/pg_permissions) [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) [`pgaudit`](/ext/e/pgaudit) [`auth_delay`](/ext/e/auth_delay) [`passwordcheck`](/ext/e/passwordcheck) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `login_hook` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `login_hook_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-login-hook` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PGDG 1.7 2 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| el8.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PGDG 1.7 2 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| el9.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PGDG 1.7 2 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| el9.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PGDG 1.7 2 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| el10.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PGDG 1.7 1 | AVAIL PGDG 1.7 1 | AVAIL PGDG 1.7 1 | AVAIL PGDG 1.7 1 |
| el10.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PGDG 1.7 1 | AVAIL PGDG 1.7 1 | AVAIL PGDG 1.7 1 | AVAIL PGDG 1.7 1 |
| d12.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| d12.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| d13.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| d13.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u22.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u22.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u24.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u24.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u26.x86_64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
| u26.aarch64 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 | AVAIL PIGSTY 1.7 1 |
@ el8.x86_64 18 login_hook_18 login_hook_18-1.7-3PIGSTY.el8.x86_64.rpm pigsty 1.7 17.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/login_hook_18-1.7-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 login_hook_18 login_hook_18-1.7-3PIGSTY.el8.aarch64.rpm pigsty 1.7 17.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/login_hook_18-1.7-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 login_hook_18 login_hook_18-1.7-3PIGSTY.el9.x86_64.rpm pigsty 1.7 17.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/login_hook_18-1.7-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 login_hook_18 login_hook_18-1.7-3PIGSTY.el9.aarch64.rpm pigsty 1.7 17.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/login_hook_18-1.7-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 login_hook_18 login_hook_18-1.7-3PIGSTY.el10.x86_64.rpm pigsty 1.7 17.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/login_hook_18-1.7-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 login_hook_18 login_hook_18-1.7-3PIGSTY.el10.aarch64.rpm pigsty 1.7 17.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/login_hook_18-1.7-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-login-hook postgresql-18-login-hook_1.7-2PIGSTY~bookworm_amd64.deb pigsty 1.7 27.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/login-hook/postgresql-18-login-hook_1.7-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-login-hook postgresql-18-login-hook_1.7-2PIGSTY~bookworm_arm64.deb pigsty 1.7 27.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/login-hook/postgresql-18-login-hook_1.7-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-login-hook postgresql-18-login-hook_1.7-2PIGSTY~trixie_amd64.deb pigsty 1.7 27.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/login-hook/postgresql-18-login-hook_1.7-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-login-hook postgresql-18-login-hook_1.7-2PIGSTY~trixie_arm64.deb pigsty 1.7 27.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/login-hook/postgresql-18-login-hook_1.7-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-login-hook postgresql-18-login-hook_1.7-2PIGSTY~jammy_amd64.deb pigsty 1.7 29.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/login-hook/postgresql-18-login-hook_1.7-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-login-hook postgresql-18-login-hook_1.7-2PIGSTY~jammy_arm64.deb pigsty 1.7 29.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/login-hook/postgresql-18-login-hook_1.7-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-login-hook postgresql-18-login-hook_1.7-2PIGSTY~noble_amd64.deb pigsty 1.7 28.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/login-hook/postgresql-18-login-hook_1.7-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-login-hook postgresql-18-login-hook_1.7-2PIGSTY~noble_arm64.deb pigsty 1.7 28.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/login-hook/postgresql-18-login-hook_1.7-2PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-login-hook postgresql-18-login-hook_1.7-2PIGSTY~resolute_amd64.deb pigsty 1.7 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/login-hook/postgresql-18-login-hook_1.7-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-login-hook postgresql-18-login-hook_1.7-2PIGSTY~resolute_arm64.deb pigsty 1.7 27.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/login-hook/postgresql-18-login-hook_1.7-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 login_hook_17 login_hook_17-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/login_hook_17-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 login_hook_17 login_hook_17-1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.6 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/login_hook_17-1.6-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 login_hook_17 login_hook_17-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/login_hook_17-1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 login_hook_17 login_hook_17-1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.6 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/login_hook_17-1.6-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 login_hook_17 login_hook_17-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/login_hook_17-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 login_hook_17 login_hook_17-1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.6 17.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/login_hook_17-1.6-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 login_hook_17 login_hook_17-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/login_hook_17-1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 login_hook_17 login_hook_17-1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.6 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/login_hook_17-1.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 login_hook_17 login_hook_17-1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.7 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/login_hook_17-1.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 login_hook_17 login_hook_17-1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.7 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/login_hook_17-1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-login-hook postgresql-17-login-hook_1.7-2PIGSTY~bookworm_amd64.deb pigsty 1.7 27.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/login-hook/postgresql-17-login-hook_1.7-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-login-hook postgresql-17-login-hook_1.7-2PIGSTY~bookworm_arm64.deb pigsty 1.7 27.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/login-hook/postgresql-17-login-hook_1.7-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-login-hook postgresql-17-login-hook_1.7-2PIGSTY~trixie_amd64.deb pigsty 1.7 27.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/login-hook/postgresql-17-login-hook_1.7-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-login-hook postgresql-17-login-hook_1.7-2PIGSTY~trixie_arm64.deb pigsty 1.7 27.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/login-hook/postgresql-17-login-hook_1.7-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-login-hook postgresql-17-login-hook_1.7-2PIGSTY~jammy_amd64.deb pigsty 1.7 29.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/login-hook/postgresql-17-login-hook_1.7-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-login-hook postgresql-17-login-hook_1.7-2PIGSTY~jammy_arm64.deb pigsty 1.7 29.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/login-hook/postgresql-17-login-hook_1.7-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-login-hook postgresql-17-login-hook_1.7-2PIGSTY~noble_amd64.deb pigsty 1.7 28.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/login-hook/postgresql-17-login-hook_1.7-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-login-hook postgresql-17-login-hook_1.7-2PIGSTY~noble_arm64.deb pigsty 1.7 28.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/login-hook/postgresql-17-login-hook_1.7-2PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-login-hook postgresql-17-login-hook_1.7-2PIGSTY~resolute_amd64.deb pigsty 1.7 27.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/login-hook/postgresql-17-login-hook_1.7-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-login-hook postgresql-17-login-hook_1.7-2PIGSTY~resolute_arm64.deb pigsty 1.7 27.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/login-hook/postgresql-17-login-hook_1.7-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 login_hook_16 login_hook_16-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/login_hook_16-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 login_hook_16 login_hook_16-1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.6 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/login_hook_16-1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 login_hook_16 login_hook_16-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/login_hook_16-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 login_hook_16 login_hook_16-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/login_hook_16-1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 login_hook_16 login_hook_16-1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.6 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/login_hook_16-1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 login_hook_16 login_hook_16-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/login_hook_16-1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 login_hook_16 login_hook_16-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/login_hook_16-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 login_hook_16 login_hook_16-1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.6 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/login_hook_16-1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 login_hook_16 login_hook_16-1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.5 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/login_hook_16-1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 login_hook_16 login_hook_16-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/login_hook_16-1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 login_hook_16 login_hook_16-1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.6 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/login_hook_16-1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 login_hook_16 login_hook_16-1.5-1PGDG.rhel9.aarch64.rpm pgdg 1.5 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/login_hook_16-1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 login_hook_16 login_hook_16-1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.7 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/login_hook_16-1.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 login_hook_16 login_hook_16-1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.7 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/login_hook_16-1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-login-hook postgresql-16-login-hook_1.7-2PIGSTY~bookworm_amd64.deb pigsty 1.7 27.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/login-hook/postgresql-16-login-hook_1.7-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-login-hook postgresql-16-login-hook_1.7-2PIGSTY~bookworm_arm64.deb pigsty 1.7 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/login-hook/postgresql-16-login-hook_1.7-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-login-hook postgresql-16-login-hook_1.7-2PIGSTY~trixie_amd64.deb pigsty 1.7 27.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/login-hook/postgresql-16-login-hook_1.7-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-login-hook postgresql-16-login-hook_1.7-2PIGSTY~trixie_arm64.deb pigsty 1.7 27.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/login-hook/postgresql-16-login-hook_1.7-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-login-hook postgresql-16-login-hook_1.7-2PIGSTY~jammy_amd64.deb pigsty 1.7 29.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/login-hook/postgresql-16-login-hook_1.7-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-login-hook postgresql-16-login-hook_1.7-2PIGSTY~jammy_arm64.deb pigsty 1.7 28.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/login-hook/postgresql-16-login-hook_1.7-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-login-hook postgresql-16-login-hook_1.7-2PIGSTY~noble_amd64.deb pigsty 1.7 28.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/login-hook/postgresql-16-login-hook_1.7-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-login-hook postgresql-16-login-hook_1.7-2PIGSTY~noble_arm64.deb pigsty 1.7 28.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/login-hook/postgresql-16-login-hook_1.7-2PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-login-hook postgresql-16-login-hook_1.7-2PIGSTY~resolute_amd64.deb pigsty 1.7 27.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/login-hook/postgresql-16-login-hook_1.7-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-login-hook postgresql-16-login-hook_1.7-2PIGSTY~resolute_arm64.deb pigsty 1.7 26.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/login-hook/postgresql-16-login-hook_1.7-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 login_hook_15 login_hook_15-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/login_hook_15-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 login_hook_15 login_hook_15-1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.6 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/login_hook_15-1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 login_hook_15 login_hook_15-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/login_hook_15-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 login_hook_15 login_hook_15-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/login_hook_15-1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 login_hook_15 login_hook_15-1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.6 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/login_hook_15-1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 login_hook_15 login_hook_15-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/login_hook_15-1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 login_hook_15 login_hook_15-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 18.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/login_hook_15-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 login_hook_15 login_hook_15-1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.6 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/login_hook_15-1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 login_hook_15 login_hook_15-1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.5 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/login_hook_15-1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 login_hook_15 login_hook_15-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/login_hook_15-1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 login_hook_15 login_hook_15-1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.6 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/login_hook_15-1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 login_hook_15 login_hook_15-1.5-1PGDG.rhel9.aarch64.rpm pgdg 1.5 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/login_hook_15-1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 login_hook_15 login_hook_15-1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.7 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/login_hook_15-1.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 login_hook_15 login_hook_15-1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.7 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/login_hook_15-1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-login-hook postgresql-15-login-hook_1.7-2PIGSTY~bookworm_amd64.deb pigsty 1.7 27.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/login-hook/postgresql-15-login-hook_1.7-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-login-hook postgresql-15-login-hook_1.7-2PIGSTY~bookworm_arm64.deb pigsty 1.7 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/login-hook/postgresql-15-login-hook_1.7-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-login-hook postgresql-15-login-hook_1.7-2PIGSTY~trixie_amd64.deb pigsty 1.7 27.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/login-hook/postgresql-15-login-hook_1.7-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-login-hook postgresql-15-login-hook_1.7-2PIGSTY~trixie_arm64.deb pigsty 1.7 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/login-hook/postgresql-15-login-hook_1.7-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-login-hook postgresql-15-login-hook_1.7-2PIGSTY~jammy_amd64.deb pigsty 1.7 29.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/login-hook/postgresql-15-login-hook_1.7-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-login-hook postgresql-15-login-hook_1.7-2PIGSTY~jammy_arm64.deb pigsty 1.7 28.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/login-hook/postgresql-15-login-hook_1.7-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-login-hook postgresql-15-login-hook_1.7-2PIGSTY~noble_amd64.deb pigsty 1.7 28.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/login-hook/postgresql-15-login-hook_1.7-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-login-hook postgresql-15-login-hook_1.7-2PIGSTY~noble_arm64.deb pigsty 1.7 28.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/login-hook/postgresql-15-login-hook_1.7-2PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-login-hook postgresql-15-login-hook_1.7-2PIGSTY~resolute_amd64.deb pigsty 1.7 27.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/login-hook/postgresql-15-login-hook_1.7-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-login-hook postgresql-15-login-hook_1.7-2PIGSTY~resolute_arm64.deb pigsty 1.7 26.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/login-hook/postgresql-15-login-hook_1.7-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 login_hook_14 login_hook_14-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/login_hook_14-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 login_hook_14 login_hook_14-1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.6 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/login_hook_14-1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 login_hook_14 login_hook_14-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/login_hook_14-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 login_hook_14 login_hook_14-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/login_hook_14-1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 login_hook_14 login_hook_14-1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.6 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/login_hook_14-1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 login_hook_14 login_hook_14-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/login_hook_14-1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 login_hook_14 login_hook_14-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 18.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/login_hook_14-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 login_hook_14 login_hook_14-1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.6 17.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/login_hook_14-1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 login_hook_14 login_hook_14-1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.5 16.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/login_hook_14-1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 login_hook_14 login_hook_14-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/login_hook_14-1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 login_hook_14 login_hook_14-1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.6 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/login_hook_14-1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 login_hook_14 login_hook_14-1.5-1PGDG.rhel9.aarch64.rpm pgdg 1.5 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/login_hook_14-1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 login_hook_14 login_hook_14-1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.7 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/login_hook_14-1.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 login_hook_14 login_hook_14-1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.7 18.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/login_hook_14-1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-login-hook postgresql-14-login-hook_1.7-2PIGSTY~bookworm_amd64.deb pigsty 1.7 27.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/login-hook/postgresql-14-login-hook_1.7-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-login-hook postgresql-14-login-hook_1.7-2PIGSTY~bookworm_arm64.deb pigsty 1.7 27.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/login-hook/postgresql-14-login-hook_1.7-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-login-hook postgresql-14-login-hook_1.7-2PIGSTY~trixie_amd64.deb pigsty 1.7 27.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/login-hook/postgresql-14-login-hook_1.7-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-login-hook postgresql-14-login-hook_1.7-2PIGSTY~trixie_arm64.deb pigsty 1.7 27.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/login-hook/postgresql-14-login-hook_1.7-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-login-hook postgresql-14-login-hook_1.7-2PIGSTY~jammy_amd64.deb pigsty 1.7 29.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/login-hook/postgresql-14-login-hook_1.7-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-login-hook postgresql-14-login-hook_1.7-2PIGSTY~jammy_arm64.deb pigsty 1.7 29.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/login-hook/postgresql-14-login-hook_1.7-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-login-hook postgresql-14-login-hook_1.7-2PIGSTY~noble_amd64.deb pigsty 1.7 28.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/login-hook/postgresql-14-login-hook_1.7-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-login-hook postgresql-14-login-hook_1.7-2PIGSTY~noble_arm64.deb pigsty 1.7 28.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/login-hook/postgresql-14-login-hook_1.7-2PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-login-hook postgresql-14-login-hook_1.7-2PIGSTY~resolute_amd64.deb pigsty 1.7 27.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/login-hook/postgresql-14-login-hook_1.7-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-login-hook postgresql-14-login-hook_1.7-2PIGSTY~resolute_arm64.deb pigsty 1.7 27.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/login-hook/postgresql-14-login-hook_1.7-2PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `login_hook` 扩展的 RPM / DEB 包：

```bash
pig build pkg login_hook         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `login_hook` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install login_hook;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y login_hook -v 18  # PG 18
pig ext install -y login_hook -v 17  # PG 17
pig ext install -y login_hook -v 16  # PG 16
pig ext install -y login_hook -v 15  # PG 15
pig ext install -y login_hook -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y login_hook_18       # PG 18
dnf install -y login_hook_17       # PG 17
dnf install -y login_hook_16       # PG 16
dnf install -y login_hook_15       # PG 15
dnf install -y login_hook_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-login-hook   # PG 18
apt install -y postgresql-17-login-hook   # PG 17
apt install -y postgresql-16-login-hook   # PG 16
apt install -y postgresql-15-login-hook   # PG 15
apt install -y postgresql-14-login-hook   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION login_hook;
```



## 用法

> [login_hook: 在用户登录时执行代码，类似于 Oracle 的 after logon 触发器](https://github.com/splendiddata/login_hook)

`login_hook` 允许在用户登录数据库时执行自定义 PL/pgSQL 代码。

```sql
CREATE EXTENSION login_hook;
```

### 配置

添加到 `postgresql.conf`：

```ini
session_preload_libraries = 'login_hook'
```

### 创建登录函数

定义一个 `login_hook.login()` 函数，该函数将在每次登录时执行：

```sql
CREATE OR REPLACE FUNCTION login_hook.login() RETURNS VOID LANGUAGE PLPGSQL AS $$
BEGIN
    IF NOT login_hook.is_executing_login_hook() THEN
        RAISE EXCEPTION 'Should only be invoked by login_hook';
    END IF;

    -- 你的登录逻辑：
    RAISE NOTICE 'Hello %', current_user;

EXCEPTION
    WHEN OTHERS THEN
        RAISE LOG 'Error in login_hook.login(): %', SQLERRM;
END
$$;
GRANT EXECUTE ON FUNCTION login_hook.login() TO PUBLIC;
```

需要 `PUBLIC` 授权，因为该函数会为每个连接用户运行。

### 函数

| 函数 | 返回类型 | 描述 |
|----------|---------|-------------|
| `login_hook.is_executing_login_hook()` | `boolean` | 仅在登录钩子执行期间调用时返回 true |
| `login_hook.get_login_hook_version()` | `text` | 返回 login_hook 的编译版本 |
| `login_hook.login()` | `void` | 用户提供的在登录时执行的函数 |

### 重要说明

- 该函数不会在后台进程或恢复模式期间被调用
- 在函数内部处理所有异常 —— 失败将阻止普通用户登录
- 超级用户在函数失败时会收到警告但仍可登录
- 对于 PostgreSQL 17+，可考虑使用原生登录事件触发器

---
title: "passwordpolicy"
linkTitle: "passwordpolicy"
description: "可动态配置的 PostgreSQL 密码复杂度检查扩展。"
weight: 7040
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/fmbiete/passwordpolicy">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">fmbiete/passwordpolicy</div>
    <div class="ext-card__desc">https://github.com/fmbiete/passwordpolicy</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/passwordpolicy-2.0.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">passwordpolicy-2.0.5.tar.gz</div>
    <div class="ext-card__desc">passwordpolicy-2.0.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`passwordpolicy`**](/ext/e/passwordpolicy) | `2.0.5` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7040  | [**`passwordpolicy`**](/ext/e/passwordpolicy) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`passwordcheck`](/ext/e/passwordcheck) [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) [`credcheck`](/ext/e/credcheck) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGDG RPM and Pigsty DEB package fmbiete/passwordpolicy 2.0.5; requires shared_preload_libraries and cracklib runtime.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.5` | {{< pgvers "18,17,16,15,14" >}} | `passwordpolicy` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.5` | {{< pgvers "18,17,16,15,14" >}} | `passwordpolicy_$v` | `cracklib` |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-passwordpolicy` | `cracklib-runtime`, `libcrack2` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 1 |
| el8.aarch64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 1 |
| el9.x86_64 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 |
| el9.aarch64 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 |
| el10.x86_64 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 |
| el10.aarch64 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 | AVAIL PGDG 2.0.5 3 |
| d12.x86_64 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 |
| u26.x86_64 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 |
| u26.aarch64 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 | AVAIL PIGSTY 2.0.5 1 |
@ el8.x86_64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.5 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/passwordpolicy_18-2.0.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.5 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/passwordpolicy_18-2.0.5-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0.5 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/passwordpolicy_18-2.0.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.5 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/passwordpolicy_18-2.0.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel9.6.x86_64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/passwordpolicy_18-2.0.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0.5 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/passwordpolicy_18-2.0.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.5 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/passwordpolicy_18-2.0.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel9.6.aarch64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/passwordpolicy_18-2.0.5-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/passwordpolicy_18-2.0.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/passwordpolicy_18-2.0.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel10.0.x86_64.rpm pgdg 2.0.5 28.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/passwordpolicy_18-2.0.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.5 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/passwordpolicy_18-2.0.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.5 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/passwordpolicy_18-2.0.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 passwordpolicy_18 passwordpolicy_18-2.0.5-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0.5 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/passwordpolicy_18-2.0.5-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-passwordpolicy postgresql-18-passwordpolicy_2.0.5-1PIGSTY~bookworm_amd64.deb pigsty 2.0.5 51.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordpolicy/postgresql-18-passwordpolicy_2.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-passwordpolicy postgresql-18-passwordpolicy_2.0.5-1PIGSTY~bookworm_arm64.deb pigsty 2.0.5 51.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordpolicy/postgresql-18-passwordpolicy_2.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-passwordpolicy postgresql-18-passwordpolicy_2.0.5-1PIGSTY~trixie_amd64.deb pigsty 2.0.5 51.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordpolicy/postgresql-18-passwordpolicy_2.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-passwordpolicy postgresql-18-passwordpolicy_2.0.5-1PIGSTY~trixie_arm64.deb pigsty 2.0.5 51.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordpolicy/postgresql-18-passwordpolicy_2.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-passwordpolicy postgresql-18-passwordpolicy_2.0.5-1PIGSTY~jammy_amd64.deb pigsty 2.0.5 55.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordpolicy/postgresql-18-passwordpolicy_2.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-passwordpolicy postgresql-18-passwordpolicy_2.0.5-1PIGSTY~jammy_arm64.deb pigsty 2.0.5 55.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordpolicy/postgresql-18-passwordpolicy_2.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-passwordpolicy postgresql-18-passwordpolicy_2.0.5-1PIGSTY~noble_amd64.deb pigsty 2.0.5 54.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordpolicy/postgresql-18-passwordpolicy_2.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-passwordpolicy postgresql-18-passwordpolicy_2.0.5-1PIGSTY~noble_arm64.deb pigsty 2.0.5 54.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordpolicy/postgresql-18-passwordpolicy_2.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-passwordpolicy postgresql-18-passwordpolicy_2.0.5-1PIGSTY~resolute_amd64.deb pigsty 2.0.5 53.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordpolicy/postgresql-18-passwordpolicy_2.0.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-passwordpolicy postgresql-18-passwordpolicy_2.0.5-1PIGSTY~resolute_arm64.deb pigsty 2.0.5 53.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordpolicy/postgresql-18-passwordpolicy_2.0.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.5 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/passwordpolicy_17-2.0.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.5 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/passwordpolicy_17-2.0.5-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/passwordpolicy_17-2.0.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/passwordpolicy_17-2.0.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel9.6.x86_64.rpm pgdg 2.0.5 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/passwordpolicy_17-2.0.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/passwordpolicy_17-2.0.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/passwordpolicy_17-2.0.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel9.6.aarch64.rpm pgdg 2.0.5 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/passwordpolicy_17-2.0.5-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0.5 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/passwordpolicy_17-2.0.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.5 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/passwordpolicy_17-2.0.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel10.0.x86_64.rpm pgdg 2.0.5 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/passwordpolicy_17-2.0.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.5 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/passwordpolicy_17-2.0.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.5 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/passwordpolicy_17-2.0.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 passwordpolicy_17 passwordpolicy_17-2.0.5-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0.5 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/passwordpolicy_17-2.0.5-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 17 postgresql-17-passwordpolicy postgresql-17-passwordpolicy_2.0.5-1PIGSTY~bookworm_amd64.deb pigsty 2.0.5 51.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordpolicy/postgresql-17-passwordpolicy_2.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-passwordpolicy postgresql-17-passwordpolicy_2.0.5-1PIGSTY~bookworm_arm64.deb pigsty 2.0.5 51.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordpolicy/postgresql-17-passwordpolicy_2.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-passwordpolicy postgresql-17-passwordpolicy_2.0.5-1PIGSTY~trixie_amd64.deb pigsty 2.0.5 51.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordpolicy/postgresql-17-passwordpolicy_2.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-passwordpolicy postgresql-17-passwordpolicy_2.0.5-1PIGSTY~trixie_arm64.deb pigsty 2.0.5 51.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordpolicy/postgresql-17-passwordpolicy_2.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-passwordpolicy postgresql-17-passwordpolicy_2.0.5-1PIGSTY~jammy_amd64.deb pigsty 2.0.5 62.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordpolicy/postgresql-17-passwordpolicy_2.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-passwordpolicy postgresql-17-passwordpolicy_2.0.5-1PIGSTY~jammy_arm64.deb pigsty 2.0.5 61.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordpolicy/postgresql-17-passwordpolicy_2.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-passwordpolicy postgresql-17-passwordpolicy_2.0.5-1PIGSTY~noble_amd64.deb pigsty 2.0.5 54.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordpolicy/postgresql-17-passwordpolicy_2.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-passwordpolicy postgresql-17-passwordpolicy_2.0.5-1PIGSTY~noble_arm64.deb pigsty 2.0.5 54.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordpolicy/postgresql-17-passwordpolicy_2.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-passwordpolicy postgresql-17-passwordpolicy_2.0.5-1PIGSTY~resolute_amd64.deb pigsty 2.0.5 53.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordpolicy/postgresql-17-passwordpolicy_2.0.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-passwordpolicy postgresql-17-passwordpolicy_2.0.5-1PIGSTY~resolute_arm64.deb pigsty 2.0.5 53.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordpolicy/postgresql-17-passwordpolicy_2.0.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.5 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/passwordpolicy_16-2.0.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.5 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/passwordpolicy_16-2.0.5-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/passwordpolicy_16-2.0.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/passwordpolicy_16-2.0.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel9.6.x86_64.rpm pgdg 2.0.5 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/passwordpolicy_16-2.0.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/passwordpolicy_16-2.0.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/passwordpolicy_16-2.0.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel9.6.aarch64.rpm pgdg 2.0.5 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/passwordpolicy_16-2.0.5-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0.5 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/passwordpolicy_16-2.0.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.5 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/passwordpolicy_16-2.0.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel10.0.x86_64.rpm pgdg 2.0.5 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/passwordpolicy_16-2.0.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.5 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/passwordpolicy_16-2.0.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.5 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/passwordpolicy_16-2.0.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 passwordpolicy_16 passwordpolicy_16-2.0.5-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0.5 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/passwordpolicy_16-2.0.5-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 16 postgresql-16-passwordpolicy postgresql-16-passwordpolicy_2.0.5-1PIGSTY~bookworm_amd64.deb pigsty 2.0.5 51.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordpolicy/postgresql-16-passwordpolicy_2.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-passwordpolicy postgresql-16-passwordpolicy_2.0.5-1PIGSTY~bookworm_arm64.deb pigsty 2.0.5 51.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordpolicy/postgresql-16-passwordpolicy_2.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-passwordpolicy postgresql-16-passwordpolicy_2.0.5-1PIGSTY~trixie_amd64.deb pigsty 2.0.5 51.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordpolicy/postgresql-16-passwordpolicy_2.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-passwordpolicy postgresql-16-passwordpolicy_2.0.5-1PIGSTY~trixie_arm64.deb pigsty 2.0.5 51.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordpolicy/postgresql-16-passwordpolicy_2.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-passwordpolicy postgresql-16-passwordpolicy_2.0.5-1PIGSTY~jammy_amd64.deb pigsty 2.0.5 62.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordpolicy/postgresql-16-passwordpolicy_2.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-passwordpolicy postgresql-16-passwordpolicy_2.0.5-1PIGSTY~jammy_arm64.deb pigsty 2.0.5 61.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordpolicy/postgresql-16-passwordpolicy_2.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-passwordpolicy postgresql-16-passwordpolicy_2.0.5-1PIGSTY~noble_amd64.deb pigsty 2.0.5 54.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordpolicy/postgresql-16-passwordpolicy_2.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-passwordpolicy postgresql-16-passwordpolicy_2.0.5-1PIGSTY~noble_arm64.deb pigsty 2.0.5 54.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordpolicy/postgresql-16-passwordpolicy_2.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-passwordpolicy postgresql-16-passwordpolicy_2.0.5-1PIGSTY~resolute_amd64.deb pigsty 2.0.5 53.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordpolicy/postgresql-16-passwordpolicy_2.0.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-passwordpolicy postgresql-16-passwordpolicy_2.0.5-1PIGSTY~resolute_arm64.deb pigsty 2.0.5 53.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordpolicy/postgresql-16-passwordpolicy_2.0.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.5 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/passwordpolicy_15-2.0.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.5 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/passwordpolicy_15-2.0.5-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0.5 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/passwordpolicy_15-2.0.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.5 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/passwordpolicy_15-2.0.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel9.6.x86_64.rpm pgdg 2.0.5 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/passwordpolicy_15-2.0.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0.5 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/passwordpolicy_15-2.0.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.5 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/passwordpolicy_15-2.0.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel9.6.aarch64.rpm pgdg 2.0.5 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/passwordpolicy_15-2.0.5-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0.5 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/passwordpolicy_15-2.0.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.5 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/passwordpolicy_15-2.0.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel10.0.x86_64.rpm pgdg 2.0.5 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/passwordpolicy_15-2.0.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.5 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/passwordpolicy_15-2.0.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.5 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/passwordpolicy_15-2.0.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 passwordpolicy_15 passwordpolicy_15-2.0.5-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0.5 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/passwordpolicy_15-2.0.5-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 15 postgresql-15-passwordpolicy postgresql-15-passwordpolicy_2.0.5-1PIGSTY~bookworm_amd64.deb pigsty 2.0.5 52.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordpolicy/postgresql-15-passwordpolicy_2.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-passwordpolicy postgresql-15-passwordpolicy_2.0.5-1PIGSTY~bookworm_arm64.deb pigsty 2.0.5 51.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordpolicy/postgresql-15-passwordpolicy_2.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-passwordpolicy postgresql-15-passwordpolicy_2.0.5-1PIGSTY~trixie_amd64.deb pigsty 2.0.5 52.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordpolicy/postgresql-15-passwordpolicy_2.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-passwordpolicy postgresql-15-passwordpolicy_2.0.5-1PIGSTY~trixie_arm64.deb pigsty 2.0.5 51.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordpolicy/postgresql-15-passwordpolicy_2.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-passwordpolicy postgresql-15-passwordpolicy_2.0.5-1PIGSTY~jammy_amd64.deb pigsty 2.0.5 62.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordpolicy/postgresql-15-passwordpolicy_2.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-passwordpolicy postgresql-15-passwordpolicy_2.0.5-1PIGSTY~jammy_arm64.deb pigsty 2.0.5 62.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordpolicy/postgresql-15-passwordpolicy_2.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-passwordpolicy postgresql-15-passwordpolicy_2.0.5-1PIGSTY~noble_amd64.deb pigsty 2.0.5 54.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordpolicy/postgresql-15-passwordpolicy_2.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-passwordpolicy postgresql-15-passwordpolicy_2.0.5-1PIGSTY~noble_arm64.deb pigsty 2.0.5 54.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordpolicy/postgresql-15-passwordpolicy_2.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-passwordpolicy postgresql-15-passwordpolicy_2.0.5-1PIGSTY~resolute_amd64.deb pigsty 2.0.5 54.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordpolicy/postgresql-15-passwordpolicy_2.0.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-passwordpolicy postgresql-15-passwordpolicy_2.0.5-1PIGSTY~resolute_arm64.deb pigsty 2.0.5 54.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordpolicy/postgresql-15-passwordpolicy_2.0.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.5 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/passwordpolicy_14-2.0.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.5 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/passwordpolicy_14-2.0.5-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.0.5 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/passwordpolicy_14-2.0.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.5 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/passwordpolicy_14-2.0.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel9.6.x86_64.rpm pgdg 2.0.5 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/passwordpolicy_14-2.0.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.0.5 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/passwordpolicy_14-2.0.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.5 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/passwordpolicy_14-2.0.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel9.6.aarch64.rpm pgdg 2.0.5 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/passwordpolicy_14-2.0.5-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.0.5 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/passwordpolicy_14-2.0.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.5 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/passwordpolicy_14-2.0.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel10.0.x86_64.rpm pgdg 2.0.5 28.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/passwordpolicy_14-2.0.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.5 28.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/passwordpolicy_14-2.0.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.5 28.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/passwordpolicy_14-2.0.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 passwordpolicy_14 passwordpolicy_14-2.0.5-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0.5 28.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/passwordpolicy_14-2.0.5-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 14 postgresql-14-passwordpolicy postgresql-14-passwordpolicy_2.0.5-1PIGSTY~bookworm_amd64.deb pigsty 2.0.5 52.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordpolicy/postgresql-14-passwordpolicy_2.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-passwordpolicy postgresql-14-passwordpolicy_2.0.5-1PIGSTY~bookworm_arm64.deb pigsty 2.0.5 51.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordpolicy/postgresql-14-passwordpolicy_2.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-passwordpolicy postgresql-14-passwordpolicy_2.0.5-1PIGSTY~trixie_amd64.deb pigsty 2.0.5 52.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordpolicy/postgresql-14-passwordpolicy_2.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-passwordpolicy postgresql-14-passwordpolicy_2.0.5-1PIGSTY~trixie_arm64.deb pigsty 2.0.5 51.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordpolicy/postgresql-14-passwordpolicy_2.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-passwordpolicy postgresql-14-passwordpolicy_2.0.5-1PIGSTY~jammy_amd64.deb pigsty 2.0.5 62.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordpolicy/postgresql-14-passwordpolicy_2.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-passwordpolicy postgresql-14-passwordpolicy_2.0.5-1PIGSTY~jammy_arm64.deb pigsty 2.0.5 62.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordpolicy/postgresql-14-passwordpolicy_2.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-passwordpolicy postgresql-14-passwordpolicy_2.0.5-1PIGSTY~noble_amd64.deb pigsty 2.0.5 54.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordpolicy/postgresql-14-passwordpolicy_2.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-passwordpolicy postgresql-14-passwordpolicy_2.0.5-1PIGSTY~noble_arm64.deb pigsty 2.0.5 54.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordpolicy/postgresql-14-passwordpolicy_2.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-passwordpolicy postgresql-14-passwordpolicy_2.0.5-1PIGSTY~resolute_amd64.deb pigsty 2.0.5 54.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordpolicy/postgresql-14-passwordpolicy_2.0.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-passwordpolicy postgresql-14-passwordpolicy_2.0.5-1PIGSTY~resolute_arm64.deb pigsty 2.0.5 54.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordpolicy/postgresql-14-passwordpolicy_2.0.5-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `passwordpolicy` 扩展的 RPM / DEB 包：

```bash
pig build pkg passwordpolicy         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `passwordpolicy` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install passwordpolicy;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y passwordpolicy -v 18  # PG 18
pig ext install -y passwordpolicy -v 17  # PG 17
pig ext install -y passwordpolicy -v 16  # PG 16
pig ext install -y passwordpolicy -v 15  # PG 15
pig ext install -y passwordpolicy -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y passwordpolicy_18       # PG 18
dnf install -y passwordpolicy_17       # PG 17
dnf install -y passwordpolicy_16       # PG 16
dnf install -y passwordpolicy_15       # PG 15
dnf install -y passwordpolicy_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-passwordpolicy   # PG 18
apt install -y postgresql-17-passwordpolicy   # PG 17
apt install -y postgresql-16-passwordpolicy   # PG 16
apt install -y postgresql-15-passwordpolicy   # PG 15
apt install -y postgresql-14-passwordpolicy   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = '$libdir/passwordpolicy';
```


**创建扩展**：

```sql
CREATE EXTENSION passwordpolicy;
```




## 用法

来源：[README](https://github.com/fmbiete/passwordpolicy/blob/v2.0.5/README.md)、[v2.0.5 release](https://github.com/fmbiete/passwordpolicy/releases/tag/v2.0.5)、[control file](https://github.com/fmbiete/passwordpolicy/blob/v2.0.5/passwordpolicy.control)

`passwordpolicy` 是 PostgreSQL `passwordcheck` module 的可配置替代方案。它会在 `CREATE ROLE` 和 `ALTER ROLE` 时检查密码，可以强制执行 password history 和 validity rules，也能在重复登录失败后模拟 soft account lock。

### 启用 Hook

在其他 password-check modules 前加载该 module，然后重启 PostgreSQL：

```conf
shared_preload_libraries = 'passwordpolicy'
```

使用 account soft-lock 或 password-history 功能时，在 `postgres` 数据库中安装 SQL 扩展：

```sql
CREATE EXTENSION passwordpolicy;
```

### 密码复杂度

配置项是动态的，但新值只对新 session 生效：

```conf
password_policy.min_password_len = 15
password_policy.min_special_chars = 1
password_policy.min_numbers = 1
password_policy.min_uppercase_letter = 1
password_policy.min_lowercase_letter = 1
password_policy.require_validuntil = off
```

只有创建 dictionary file 之后，才启用 CrackLib dictionary checks：

```conf
password_policy.cracklib_dictpath = '/var/cache/cracklib/postgresql_dict'
password_policy.enable_dictionary_check = on
```

### 软账号锁定

Soft-locking 会跟踪登录失败次数，并在超过阈值后延迟或拒绝响应：

```conf
password_policy_lock.number_failures = 5
password_policy_lock.failure_delay = 5
password_policy_lock.auto_unlock = on
password_policy_lock.auto_unlock_after = 0
password_policy_lock.max_number_accounts = 100
```

查看并重置 lock state：

```sql
SELECT * FROM passwordpolicy.accounts_locked() ORDER BY usename;
SELECT passwordpolicy.account_locked_reset('app_user');
```

如果 `password_policy_lock.include_all = false`，只有列在 `passwordpolicy.accounts_lockable` 中的 roles 才参与 soft-lock。

### 密码历史

Password history 会在 `postgres` 数据库中存储最近的 password hashes，并检查新密码是否复用：

```conf
password_policy_history.max_password_history = 5
password_policy_history.max_number_accounts = 100
```

### 注意事项

- 版本 2.0.5 支持 PostgreSQL 14-18。
- 该 module 必须 preload；修改 `shared_preload_libraries` 需要重启。
- PostgreSQL 无法在认证发生前真正阻止认证，因此 soft-lock 通过延迟和返回错误来模拟 lock。它不能缓解 authentication DoS attacks。
- 合理设置 `password_policy_lock.max_number_accounts` 和 `password_policy_history.max_number_accounts`，避免浪费内存或漏掉账号。

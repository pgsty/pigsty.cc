---
title: "prioritize"
linkTitle: "prioritize"
description: "获取和设置 PostgreSQL 后端的优先级"
weight: 5100
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/schmiddy/pg_prioritize">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">schmiddy/pg_prioritize</div>
    <div class="ext-card__desc">https://github.com/schmiddy/pg_prioritize</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_prioritize`**](/ext/e/prioritize) | `1.0.4` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5100  | [**`prioritize`**](/ext/e/prioritize) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`plan_filter`](/ext/e/plan_filter) [`pg_kpart`](/ext/e/pg_kpart) [`pg_readonly`](/ext/e/pg_readonly) [`qos`](/ext/e/qos) [`block_copy_command`](/ext/e/block_copy_command) [`safeupdate`](/ext/e/safeupdate) [`pg_command_fw`](/ext/e/pg_command_fw) [`pg_strict`](/ext/e/pg_strict) [`pg_hint_plan`](/ext/e/pg_hint_plan) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_prioritize` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_prioritize_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-prioritize` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| el8.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| el9.x86_64 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 1 |
| el9.aarch64 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 |
| el10.x86_64 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 |
| el10.aarch64 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 |
| d12.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| d12.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| d13.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| d13.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| u22.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| u22.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| u24.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| u24.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| u26.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| u26.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
@ el8.x86_64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel8.x86_64.rpm pgdg 1.0.4 14.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_prioritize_18-1.0.4-7PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel8.aarch64.rpm pgdg 1.0.4 14.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_prioritize_18-1.0.4-7PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-9PGDG.rhel9.8.x86_64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_prioritize_18-1.0.4-9PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel9.x86_64.rpm pgdg 1.0.4 14.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_prioritize_18-1.0.4-7PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-9PGDG.rhel9.8.aarch64.rpm pgdg 1.0.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_prioritize_18-1.0.4-9PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel9.aarch64.rpm pgdg 1.0.4 13.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_prioritize_18-1.0.4-7PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-9PGDG.rhel10.2.x86_64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_prioritize_18-1.0.4-9PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel10.x86_64.rpm pgdg 1.0.4 14.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_prioritize_18-1.0.4-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-9PGDG.rhel10.2.aarch64.rpm pgdg 1.0.4 14.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_prioritize_18-1.0.4-9PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel10.aarch64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_prioritize_18-1.0.4-7PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg12+1_amd64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg12+1_arm64.deb pgdg 1.0.4 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg13+1_amd64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg13+1_arm64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb pgdg 1.0.4 12.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb pgdg 1.0.4 12.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb pgdg 1.0.4 11.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg26.04+1_amd64.deb pgdg 1.0.4 12.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg26.04+1_arm64.deb pgdg 1.0.4 12.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-5PGDG.rhel8.x86_64.rpm pgdg 1.0.4 14.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_prioritize_17-1.0.4-5PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-5PGDG.rhel8.aarch64.rpm pgdg 1.0.4 14.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_prioritize_17-1.0.4-5PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-9PGDG.rhel9.8.x86_64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_prioritize_17-1.0.4-9PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-5PGDG.rhel9.x86_64.rpm pgdg 1.0.4 14.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_prioritize_17-1.0.4-5PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-9PGDG.rhel9.8.aarch64.rpm pgdg 1.0.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_prioritize_17-1.0.4-9PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-5PGDG.rhel9.aarch64.rpm pgdg 1.0.4 13.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_prioritize_17-1.0.4-5PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-9PGDG.rhel10.2.x86_64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_prioritize_17-1.0.4-9PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-6PGDG.rhel10.x86_64.rpm pgdg 1.0.4 14.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_prioritize_17-1.0.4-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-9PGDG.rhel10.2.aarch64.rpm pgdg 1.0.4 14.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_prioritize_17-1.0.4-9PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-6PGDG.rhel10.aarch64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_prioritize_17-1.0.4-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg12+1_amd64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg12+1_arm64.deb pgdg 1.0.4 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg13+1_amd64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg13+1_arm64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb pgdg 1.0.4 12.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb pgdg 1.0.4 12.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb pgdg 1.0.4 11.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg26.04+1_amd64.deb pgdg 1.0.4 12.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg26.04+1_arm64.deb pgdg 1.0.4 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-4PGDG.rhel8.x86_64.rpm pgdg 1.0.4 14.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_prioritize_16-1.0.4-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-4PGDG.rhel8.aarch64.rpm pgdg 1.0.4 13.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_prioritize_16-1.0.4-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-9PGDG.rhel9.8.x86_64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_prioritize_16-1.0.4-9PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-4PGDG.rhel9.x86_64.rpm pgdg 1.0.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_prioritize_16-1.0.4-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-9PGDG.rhel9.8.aarch64.rpm pgdg 1.0.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_prioritize_16-1.0.4-9PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-4PGDG.rhel9.aarch64.rpm pgdg 1.0.4 13.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_prioritize_16-1.0.4-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-9PGDG.rhel10.2.x86_64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_prioritize_16-1.0.4-9PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-6PGDG.rhel10.x86_64.rpm pgdg 1.0.4 14.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_prioritize_16-1.0.4-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-9PGDG.rhel10.2.aarch64.rpm pgdg 1.0.4 14.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_prioritize_16-1.0.4-9PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-6PGDG.rhel10.aarch64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_prioritize_16-1.0.4-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg12+1_amd64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg12+1_arm64.deb pgdg 1.0.4 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg13+1_amd64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg13+1_arm64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb pgdg 1.0.4 12.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb pgdg 1.0.4 12.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb pgdg 1.0.4 11.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg26.04+1_amd64.deb pgdg 1.0.4 12.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg26.04+1_arm64.deb pgdg 1.0.4 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-2.rhel8.x86_64.rpm pgdg 1.0.4 19.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_prioritize_15-1.0.4-2.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-2.rhel8.aarch64.rpm pgdg 1.0.4 19.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_prioritize_15-1.0.4-2.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-9PGDG.rhel9.8.x86_64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_prioritize_15-1.0.4-9PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-2.rhel9.x86_64.rpm pgdg 1.0.4 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_prioritize_15-1.0.4-2.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-9PGDG.rhel9.8.aarch64.rpm pgdg 1.0.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_prioritize_15-1.0.4-9PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-2.rhel9.aarch64.rpm pgdg 1.0.4 19.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_prioritize_15-1.0.4-2.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-9PGDG.rhel10.2.x86_64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_prioritize_15-1.0.4-9PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-6PGDG.rhel10.x86_64.rpm pgdg 1.0.4 14.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_prioritize_15-1.0.4-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-9PGDG.rhel10.2.aarch64.rpm pgdg 1.0.4 14.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_prioritize_15-1.0.4-9PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-6PGDG.rhel10.aarch64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_prioritize_15-1.0.4-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg12+1_amd64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg12+1_arm64.deb pgdg 1.0.4 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg13+1_amd64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg13+1_arm64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb pgdg 1.0.4 12.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb pgdg 1.0.4 12.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb pgdg 1.0.4 11.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg26.04+1_amd64.deb pgdg 1.0.4 12.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg26.04+1_arm64.deb pgdg 1.0.4 12.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-2.rhel8.x86_64.rpm pgdg 1.0.4 20.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_prioritize_14-1.0.4-2.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-2.rhel8.aarch64.rpm pgdg 1.0.4 19.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_prioritize_14-1.0.4-2.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-9PGDG.rhel9.8.x86_64.rpm pgdg 1.0.4 14.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_prioritize_14-1.0.4-9PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-9PGDG.rhel9.8.aarch64.rpm pgdg 1.0.4 13.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_prioritize_14-1.0.4-9PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-2.rhel9.aarch64.rpm pgdg 1.0.4 19.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_prioritize_14-1.0.4-2.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-9PGDG.rhel10.2.x86_64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_prioritize_14-1.0.4-9PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-6PGDG.rhel10.x86_64.rpm pgdg 1.0.4 14.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_prioritize_14-1.0.4-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-9PGDG.rhel10.2.aarch64.rpm pgdg 1.0.4 14.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_prioritize_14-1.0.4-9PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-6PGDG.rhel10.aarch64.rpm pgdg 1.0.4 14.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_prioritize_14-1.0.4-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg12+1_amd64.deb pgdg 1.0.4 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg12+1_arm64.deb pgdg 1.0.4 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg13+1_amd64.deb pgdg 1.0.4 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg13+1_arm64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb pgdg 1.0.4 12.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb pgdg 1.0.4 12.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb pgdg 1.0.4 11.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb pgdg 1.0.4 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg26.04+1_amd64.deb pgdg 1.0.4 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg26.04+1_arm64.deb pgdg 1.0.4 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_prioritize` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_prioritize;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_prioritize -v 18  # PG 18
pig ext install -y pg_prioritize -v 17  # PG 17
pig ext install -y pg_prioritize -v 16  # PG 16
pig ext install -y pg_prioritize -v 15  # PG 15
pig ext install -y pg_prioritize -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_prioritize_18       # PG 18
dnf install -y pg_prioritize_17       # PG 17
dnf install -y pg_prioritize_16       # PG 16
dnf install -y pg_prioritize_15       # PG 15
dnf install -y pg_prioritize_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-prioritize   # PG 18
apt install -y postgresql-17-prioritize   # PG 17
apt install -y postgresql-16-prioritize   # PG 16
apt install -y postgresql-15-prioritize   # PG 15
apt install -y postgresql-14-prioritize   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION prioritize;
```

## 用法

来源：

- [Official README](https://github.com/schmiddy/pg_prioritize/blob/c160271202ca8a713dea10cf1cc30448db786533/README.md)
- [SQL functions](https://github.com/schmiddy/pg_prioritize/blob/c160271202ca8a713dea10cf1cc30448db786533/prioritize.sql.in)
- [Control file](https://github.com/schmiddy/pg_prioritize/blob/c160271202ca8a713dea10cf1cc30448db786533/prioritize.control)

`prioritize` 提供 PostgreSQL 后端进程的操作系统优先级控制。它适合降低指定会话的调度优先级，不是 PostgreSQL 查询调度器。

### 查看和调整后端

```sql
CREATE EXTENSION prioritize;
SELECT get_backend_priority(pg_backend_pid());
SELECT set_backend_priority(pg_backend_pid(), 10);
```

任何用户都可以查询后端优先级。PostgreSQL 超级用户可以请求调整任意后端；其他用户只能调整使用同一数据库角色的后端。

### 调整同角色会话

```sql
SELECT set_backend_priority(pid, get_backend_priority(pid) + 5)
FROM pg_stat_activity
WHERE usename = CURRENT_USER;
```

增大 nice 数值会降低操作系统调度优先级。因此，这个例子降低这些后端的优先级，不会使它们执行得更快。

### 权限和限制

安装需要超级用户，无需预加载或重启。操作系统权限仍然生效：普通 PostgreSQL 进程通常不能通过降低 nice 数值来提高优先级。数据库超级用户权限不等于 root 权限。批量调整前，应检查平台调度策略和进程身份。控制文件使用 SQL 版本 1.0；发行版安装包版本 1.0.4 与之不同。

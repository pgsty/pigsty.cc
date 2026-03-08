---
title: "extra_window_functions"
linkTitle: "extra_window_functions"
description: "额外的窗口函数"
weight: 4720
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/xocolatl/extra_window_functions">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">xocolatl/extra_window_functions</div>
    <div class="ext-card__desc">https://github.com/xocolatl/extra_window_functions</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`extra_window_functions`**](/ext/e/extra_window_functions) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4720  | [**`extra_window_functions`**](/ext/e/extra_window_functions) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`permuteseq`](/ext/e/permuteseq) [`pg_hashids`](/ext/e/pg_hashids) [`sequential_uuids`](/ext/e/sequential_uuids) [`topn`](/ext/e/topn) [`quantile`](/ext/e/quantile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> no pg14 on el8/9


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `extra_window_functions` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `extra_window_functions_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-extra-window-functions` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el8.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el9.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | MISS PGDG - 0 |
| el9.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el10.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el10.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| d12.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| d12.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| d13.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| d13.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| u22.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| u22.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| u24.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| u24.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
@ el8.x86_64 18 extra_window_functions_18 extra_window_functions_18-1.0-6PGDG.rhel8.x86_64.rpm pgdg 1.0 24.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/extra_window_functions_18-1.0-6PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 extra_window_functions_18 extra_window_functions_18-1.0-6PGDG.rhel8.aarch64.rpm pgdg 1.0 24.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/extra_window_functions_18-1.0-6PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 extra_window_functions_18 extra_window_functions_18-1.0-6PGDG.rhel9.x86_64.rpm pgdg 1.0 24.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/extra_window_functions_18-1.0-6PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 extra_window_functions_18 extra_window_functions_18-1.0-6PGDG.rhel9.aarch64.rpm pgdg 1.0 24.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/extra_window_functions_18-1.0-6PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 extra_window_functions_18 extra_window_functions_18-1.0-6PGDG.rhel10.x86_64.rpm pgdg 1.0 25.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/extra_window_functions_18-1.0-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 extra_window_functions_18 extra_window_functions_18-1.0-6PGDG.rhel10.aarch64.rpm pgdg 1.0 25.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/extra_window_functions_18-1.0-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-extra-window-functions postgresql-18-extra-window-functions_1.0-7.pgdg12+1_amd64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-18-extra-window-functions_1.0-7.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-extra-window-functions postgresql-18-extra-window-functions_1.0-7.pgdg12+1_arm64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-18-extra-window-functions_1.0-7.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-extra-window-functions postgresql-18-extra-window-functions_1.0-7.pgdg13+1_amd64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-18-extra-window-functions_1.0-7.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-extra-window-functions postgresql-18-extra-window-functions_1.0-7.pgdg13+1_arm64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-18-extra-window-functions_1.0-7.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-extra-window-functions postgresql-18-extra-window-functions_1.0-7.pgdg22.04+1_amd64.deb pgdg 1.0 15.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-18-extra-window-functions_1.0-7.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-extra-window-functions postgresql-18-extra-window-functions_1.0-7.pgdg22.04+1_arm64.deb pgdg 1.0 15.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-18-extra-window-functions_1.0-7.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-extra-window-functions postgresql-18-extra-window-functions_1.0-7.pgdg24.04+1_amd64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-18-extra-window-functions_1.0-7.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-extra-window-functions postgresql-18-extra-window-functions_1.0-7.pgdg24.04+1_arm64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-18-extra-window-functions_1.0-7.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 extra_window_functions_17 extra_window_functions_17-1.0-5PGDG.rhel8.x86_64.rpm pgdg 1.0 24.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/extra_window_functions_17-1.0-5PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 extra_window_functions_17 extra_window_functions_17-1.0-5PGDG.rhel8.aarch64.rpm pgdg 1.0 24.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/extra_window_functions_17-1.0-5PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 extra_window_functions_17 extra_window_functions_17-1.0-5PGDG.rhel9.x86_64.rpm pgdg 1.0 24.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/extra_window_functions_17-1.0-5PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 extra_window_functions_17 extra_window_functions_17-1.0-5PGDG.rhel9.aarch64.rpm pgdg 1.0 24.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/extra_window_functions_17-1.0-5PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 extra_window_functions_17 extra_window_functions_17-1.0-6PGDG.rhel10.x86_64.rpm pgdg 1.0 25.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/extra_window_functions_17-1.0-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 extra_window_functions_17 extra_window_functions_17-1.0-6PGDG.rhel10.aarch64.rpm pgdg 1.0 25.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/extra_window_functions_17-1.0-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-extra-window-functions postgresql-17-extra-window-functions_1.0-7.pgdg12+1_amd64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-17-extra-window-functions_1.0-7.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-extra-window-functions postgresql-17-extra-window-functions_1.0-7.pgdg12+1_arm64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-17-extra-window-functions_1.0-7.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-extra-window-functions postgresql-17-extra-window-functions_1.0-7.pgdg13+1_amd64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-17-extra-window-functions_1.0-7.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-extra-window-functions postgresql-17-extra-window-functions_1.0-7.pgdg13+1_arm64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-17-extra-window-functions_1.0-7.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-extra-window-functions postgresql-17-extra-window-functions_1.0-7.pgdg22.04+1_amd64.deb pgdg 1.0 15.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-17-extra-window-functions_1.0-7.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-extra-window-functions postgresql-17-extra-window-functions_1.0-7.pgdg22.04+1_arm64.deb pgdg 1.0 15.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-17-extra-window-functions_1.0-7.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-extra-window-functions postgresql-17-extra-window-functions_1.0-7.pgdg24.04+1_amd64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-17-extra-window-functions_1.0-7.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-extra-window-functions postgresql-17-extra-window-functions_1.0-7.pgdg24.04+1_arm64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-17-extra-window-functions_1.0-7.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 extra_window_functions_16 extra_window_functions_16-1.0-3.rhel8.1.x86_64.rpm pgdg 1.0 24.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/extra_window_functions_16-1.0-3.rhel8.1.x86_64.rpm
@ el8.aarch64 16 extra_window_functions_16 extra_window_functions_16-1.0-3.rhel8.1.aarch64.rpm pgdg 1.0 24.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/extra_window_functions_16-1.0-3.rhel8.1.aarch64.rpm
@ el9.x86_64 16 extra_window_functions_16 extra_window_functions_16-1.0-3.rhel9.1.x86_64.rpm pgdg 1.0 24.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/extra_window_functions_16-1.0-3.rhel9.1.x86_64.rpm
@ el9.aarch64 16 extra_window_functions_16 extra_window_functions_16-1.0-3.rhel9.1.aarch64.rpm pgdg 1.0 24.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/extra_window_functions_16-1.0-3.rhel9.1.aarch64.rpm
@ el10.x86_64 16 extra_window_functions_16 extra_window_functions_16-1.0-6PGDG.rhel10.x86_64.rpm pgdg 1.0 25.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/extra_window_functions_16-1.0-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 extra_window_functions_16 extra_window_functions_16-1.0-6PGDG.rhel10.aarch64.rpm pgdg 1.0 25.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/extra_window_functions_16-1.0-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-extra-window-functions postgresql-16-extra-window-functions_1.0-7.pgdg12+1_amd64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-16-extra-window-functions_1.0-7.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-extra-window-functions postgresql-16-extra-window-functions_1.0-7.pgdg12+1_arm64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-16-extra-window-functions_1.0-7.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-extra-window-functions postgresql-16-extra-window-functions_1.0-7.pgdg13+1_amd64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-16-extra-window-functions_1.0-7.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-extra-window-functions postgresql-16-extra-window-functions_1.0-7.pgdg13+1_arm64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-16-extra-window-functions_1.0-7.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-extra-window-functions postgresql-16-extra-window-functions_1.0-7.pgdg22.04+1_amd64.deb pgdg 1.0 15.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-16-extra-window-functions_1.0-7.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-extra-window-functions postgresql-16-extra-window-functions_1.0-7.pgdg22.04+1_arm64.deb pgdg 1.0 15.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-16-extra-window-functions_1.0-7.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-extra-window-functions postgresql-16-extra-window-functions_1.0-7.pgdg24.04+1_amd64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-16-extra-window-functions_1.0-7.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-extra-window-functions postgresql-16-extra-window-functions_1.0-7.pgdg24.04+1_arm64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-16-extra-window-functions_1.0-7.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 extra_window_functions_15 extra_window_functions_15-1.0-2.rhel8.x86_64.rpm pgdg 1.0 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/extra_window_functions_15-1.0-2.rhel8.x86_64.rpm
@ el8.aarch64 15 extra_window_functions_15 extra_window_functions_15-1.0-2.rhel8.aarch64.rpm pgdg 1.0 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/extra_window_functions_15-1.0-2.rhel8.aarch64.rpm
@ el9.x86_64 15 extra_window_functions_15 extra_window_functions_15-1.0-2.rhel9.x86_64.rpm pgdg 1.0 24.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/extra_window_functions_15-1.0-2.rhel9.x86_64.rpm
@ el9.aarch64 15 extra_window_functions_15 extra_window_functions_15-1.0-2.rhel9.aarch64.rpm pgdg 1.0 24.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/extra_window_functions_15-1.0-2.rhel9.aarch64.rpm
@ el10.x86_64 15 extra_window_functions_15 extra_window_functions_15-1.0-6PGDG.rhel10.x86_64.rpm pgdg 1.0 25.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/extra_window_functions_15-1.0-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 extra_window_functions_15 extra_window_functions_15-1.0-6PGDG.rhel10.aarch64.rpm pgdg 1.0 25.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/extra_window_functions_15-1.0-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-extra-window-functions postgresql-15-extra-window-functions_1.0-7.pgdg12+1_amd64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-15-extra-window-functions_1.0-7.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-extra-window-functions postgresql-15-extra-window-functions_1.0-7.pgdg12+1_arm64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-15-extra-window-functions_1.0-7.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-extra-window-functions postgresql-15-extra-window-functions_1.0-7.pgdg13+1_amd64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-15-extra-window-functions_1.0-7.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-extra-window-functions postgresql-15-extra-window-functions_1.0-7.pgdg13+1_arm64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-15-extra-window-functions_1.0-7.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-extra-window-functions postgresql-15-extra-window-functions_1.0-7.pgdg22.04+1_amd64.deb pgdg 1.0 15.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-15-extra-window-functions_1.0-7.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-extra-window-functions postgresql-15-extra-window-functions_1.0-7.pgdg22.04+1_arm64.deb pgdg 1.0 15.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-15-extra-window-functions_1.0-7.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-extra-window-functions postgresql-15-extra-window-functions_1.0-7.pgdg24.04+1_amd64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-15-extra-window-functions_1.0-7.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-extra-window-functions postgresql-15-extra-window-functions_1.0-7.pgdg24.04+1_arm64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-15-extra-window-functions_1.0-7.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 extra_window_functions_14 extra_window_functions_14-1.0-2.rhel8.x86_64.rpm pgdg 1.0 24.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/extra_window_functions_14-1.0-2.rhel8.x86_64.rpm
@ el8.aarch64 14 extra_window_functions_14 extra_window_functions_14-1.0-2.rhel8.aarch64.rpm pgdg 1.0 23.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/extra_window_functions_14-1.0-2.rhel8.aarch64.rpm
@ el9.aarch64 14 extra_window_functions_14 extra_window_functions_14-1.0-2.rhel9.aarch64.rpm pgdg 1.0 24.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/extra_window_functions_14-1.0-2.rhel9.aarch64.rpm
@ el10.x86_64 14 extra_window_functions_14 extra_window_functions_14-1.0-6PGDG.rhel10.x86_64.rpm pgdg 1.0 25.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/extra_window_functions_14-1.0-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 extra_window_functions_14 extra_window_functions_14-1.0-6PGDG.rhel10.aarch64.rpm pgdg 1.0 25.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/extra_window_functions_14-1.0-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-extra-window-functions postgresql-14-extra-window-functions_1.0-7.pgdg12+1_amd64.deb pgdg 1.0 15.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-14-extra-window-functions_1.0-7.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-extra-window-functions postgresql-14-extra-window-functions_1.0-7.pgdg12+1_arm64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-14-extra-window-functions_1.0-7.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-extra-window-functions postgresql-14-extra-window-functions_1.0-7.pgdg13+1_amd64.deb pgdg 1.0 15.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-14-extra-window-functions_1.0-7.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-extra-window-functions postgresql-14-extra-window-functions_1.0-7.pgdg13+1_arm64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-14-extra-window-functions_1.0-7.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-extra-window-functions postgresql-14-extra-window-functions_1.0-7.pgdg22.04+1_amd64.deb pgdg 1.0 15.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-14-extra-window-functions_1.0-7.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-extra-window-functions postgresql-14-extra-window-functions_1.0-7.pgdg22.04+1_arm64.deb pgdg 1.0 15.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-14-extra-window-functions_1.0-7.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-extra-window-functions postgresql-14-extra-window-functions_1.0-7.pgdg24.04+1_amd64.deb pgdg 1.0 15.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-14-extra-window-functions_1.0-7.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-extra-window-functions postgresql-14-extra-window-functions_1.0-7.pgdg24.04+1_arm64.deb pgdg 1.0 15.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/e/extra-window-functions/postgresql-14-extra-window-functions_1.0-7.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `extra_window_functions` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install extra_window_functions;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y extra_window_functions -v 18  # PG 18
pig ext install -y extra_window_functions -v 17  # PG 17
pig ext install -y extra_window_functions -v 16  # PG 16
pig ext install -y extra_window_functions -v 15  # PG 15
pig ext install -y extra_window_functions -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y extra_window_functions_18       # PG 18
dnf install -y extra_window_functions_17       # PG 17
dnf install -y extra_window_functions_16       # PG 16
dnf install -y extra_window_functions_15       # PG 15
dnf install -y extra_window_functions_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-extra-window-functions   # PG 18
apt install -y postgresql-17-extra-window-functions   # PG 17
apt install -y postgresql-16-extra-window-functions   # PG 16
apt install -y postgresql-15-extra-window-functions   # PG 15
apt install -y postgresql-14-extra-window-functions   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION extra_window_functions;
```

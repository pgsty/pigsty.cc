---
title: "tdigest"
linkTitle: "tdigest"
description: "tdigest 聚合函数"
weight: 4700
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tvondra/tdigest">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tvondra/tdigest</div>
    <div class="ext-card__desc">https://github.com/tvondra/tdigest</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`tdigest`**](/ext/e/tdigest) | `1.4.7` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4700  | [**`tdigest`**](/ext/e/tdigest) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`ddsketch`](/ext/e/ddsketch) [`count_distinct`](/ext/e/count_distinct) [`topn`](/ext/e/topn) [`omnisketch`](/ext/e/omnisketch) [`datasketches`](/ext/e/datasketches) [`hll`](/ext/e/hll) [`quantile`](/ext/e/quantile) [`lower_quantile`](/ext/e/lower_quantile) [`weighted_statistics`](/ext/e/weighted_statistics) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.7` | {{< pgvers "18,17,16,15,14" >}} | `tdigest` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.7` | {{< pgvers "18,17,16,15,14" >}} | `tdigest_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-tdigest` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.4.7 5 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 5 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 6 |
| el8.aarch64 | AVAIL PGDG 1.4.7 5 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 5 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 6 |
| el9.x86_64 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 7 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 7 | AVAIL PGDG 1.4.7 7 |
| el9.aarch64 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 7 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 7 | AVAIL PGDG 1.4.7 7 |
| el10.x86_64 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 6 |
| el10.aarch64 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 6 | AVAIL PGDG 1.4.7 6 |
| d12.x86_64 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 |
| d12.aarch64 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 |
| d13.x86_64 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 |
| d13.aarch64 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 |
| u22.x86_64 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 |
| u22.aarch64 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 |
| u24.x86_64 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 |
| u24.aarch64 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 |
| u26.x86_64 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 |
| u26.aarch64 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 | AVAIL PGDG 1.4.7 3 |
@ el8.x86_64 18 tdigest_18 tdigest_18-1.4.7-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.7 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/tdigest_18-1.4.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 tdigest_18 tdigest_18-1.4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.6 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/tdigest_18-1.4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 tdigest_18 tdigest_18-1.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.5 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/tdigest_18-1.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 tdigest_18 tdigest_18-1.4.4-4PGDG.rhel8.10.x86_64.rpm pgdg 1.4.4 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/tdigest_18-1.4.4-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel8.x86_64.rpm pgdg 1.4.2 33.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/tdigest_18-1.4.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 tdigest_18 tdigest_18-1.4.7-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.7 43.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/tdigest_18-1.4.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 tdigest_18 tdigest_18-1.4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.6 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/tdigest_18-1.4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 tdigest_18 tdigest_18-1.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.5 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/tdigest_18-1.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 tdigest_18 tdigest_18-1.4.4-4PGDG.rhel8.10.aarch64.rpm pgdg 1.4.4 33.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/tdigest_18-1.4.4-4PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel8.aarch64.rpm pgdg 1.4.2 32.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/tdigest_18-1.4.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 tdigest_18 tdigest_18-1.4.7-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.7 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/tdigest_18-1.4.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 tdigest_18 tdigest_18-1.4.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.6 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/tdigest_18-1.4.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 tdigest_18 tdigest_18-1.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.5 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/tdigest_18-1.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 tdigest_18 tdigest_18-1.4.4-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4.4 34.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/tdigest_18-1.4.4-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 tdigest_18 tdigest_18-1.4.2-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4.2 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/tdigest_18-1.4.2-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel9.x86_64.rpm pgdg 1.4.2 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/tdigest_18-1.4.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 tdigest_18 tdigest_18-1.4.7-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.7 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/tdigest_18-1.4.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 tdigest_18 tdigest_18-1.4.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.6 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/tdigest_18-1.4.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 tdigest_18 tdigest_18-1.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.5 38.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/tdigest_18-1.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 tdigest_18 tdigest_18-1.4.4-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4.4 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/tdigest_18-1.4.4-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 tdigest_18 tdigest_18-1.4.2-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4.2 32.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/tdigest_18-1.4.2-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel9.aarch64.rpm pgdg 1.4.2 32.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/tdigest_18-1.4.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 tdigest_18 tdigest_18-1.4.7-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.7 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/tdigest_18-1.4.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 tdigest_18 tdigest_18-1.4.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.6 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/tdigest_18-1.4.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 tdigest_18 tdigest_18-1.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.5 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/tdigest_18-1.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 tdigest_18 tdigest_18-1.4.4-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4.4 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/tdigest_18-1.4.4-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 tdigest_18 tdigest_18-1.4.2-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4.2 33.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/tdigest_18-1.4.2-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel10.x86_64.rpm pgdg 1.4.2 33.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/tdigest_18-1.4.2-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 tdigest_18 tdigest_18-1.4.7-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.7 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/tdigest_18-1.4.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 tdigest_18 tdigest_18-1.4.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.6 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/tdigest_18-1.4.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 tdigest_18 tdigest_18-1.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.5 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/tdigest_18-1.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 tdigest_18 tdigest_18-1.4.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.4 34.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/tdigest_18-1.4.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 tdigest_18 tdigest_18-1.4.2-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 32.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/tdigest_18-1.4.2-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel10.aarch64.rpm pgdg 1.4.2 33.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/tdigest_18-1.4.2-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.7-1.pgdg12+1_amd64.deb pgdg 1.4.7 77.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.6-1.pgdg12+1_amd64.deb pgdg 1.4.6 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.4-1.pgdg12+1_amd64.deb pgdg 1.4.4 59.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.4-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.7-1.pgdg12+1_arm64.deb pgdg 1.4.7 76.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.6-1.pgdg12+1_arm64.deb pgdg 1.4.6 71.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.4-1.pgdg12+1_arm64.deb pgdg 1.4.4 59.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.4-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.7-1.pgdg13+1_amd64.deb pgdg 1.4.7 77.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.6-1.pgdg13+1_amd64.deb pgdg 1.4.6 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.4-1.pgdg13+1_amd64.deb pgdg 1.4.4 59.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.4-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.7-1.pgdg13+1_arm64.deb pgdg 1.4.7 77.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.6-1.pgdg13+1_arm64.deb pgdg 1.4.6 71.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.4-1.pgdg13+1_arm64.deb pgdg 1.4.4 59.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.4-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.7-1.pgdg22.04+1_amd64.deb pgdg 1.4.7 76.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.6-1.pgdg22.04+1_amd64.deb pgdg 1.4.6 71.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.4-1.pgdg22.04+1_amd64.deb pgdg 1.4.4 59.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.4-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.7-1.pgdg22.04+1_arm64.deb pgdg 1.4.7 75.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.6-1.pgdg22.04+1_arm64.deb pgdg 1.4.6 70.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.4-1.pgdg22.04+1_arm64.deb pgdg 1.4.4 58.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.4-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.7-1.pgdg24.04+1_amd64.deb pgdg 1.4.7 76.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.6-1.pgdg24.04+1_amd64.deb pgdg 1.4.6 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.4-1.pgdg24.04+1_amd64.deb pgdg 1.4.4 59.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.4-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.7-1.pgdg24.04+1_arm64.deb pgdg 1.4.7 75.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.6-1.pgdg24.04+1_arm64.deb pgdg 1.4.6 70.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.4-1.pgdg24.04+1_arm64.deb pgdg 1.4.4 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.4-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.7-1.pgdg26.04+1_amd64.deb pgdg 1.4.7 75.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.6-1.pgdg26.04+1_amd64.deb pgdg 1.4.6 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.4-1.pgdg26.04+1_amd64.deb pgdg 1.4.4 59.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.4-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.7-1.pgdg26.04+1_arm64.deb pgdg 1.4.7 75.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.6-1.pgdg26.04+1_arm64.deb pgdg 1.4.6 70.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.4-1.pgdg26.04+1_arm64.deb pgdg 1.4.4 59.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.4-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 tdigest_17 tdigest_17-1.4.7-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.7 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/tdigest_17-1.4.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 tdigest_17 tdigest_17-1.4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.6 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/tdigest_17-1.4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 tdigest_17 tdigest_17-1.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.5 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/tdigest_17-1.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 tdigest_17 tdigest_17-1.4.4-4PGDG.rhel8.10.x86_64.rpm pgdg 1.4.4 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/tdigest_17-1.4.4-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 tdigest_17 tdigest_17-1.4.2-1PGDG.rhel8.x86_64.rpm pgdg 1.4.2 33.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/tdigest_17-1.4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 tdigest_17 tdigest_17-1.4.1-3PGDG.rhel8.x86_64.rpm pgdg 1.4.1 33.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/tdigest_17-1.4.1-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 tdigest_17 tdigest_17-1.4.7-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.7 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/tdigest_17-1.4.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 tdigest_17 tdigest_17-1.4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.6 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/tdigest_17-1.4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 tdigest_17 tdigest_17-1.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.5 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/tdigest_17-1.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 tdigest_17 tdigest_17-1.4.4-4PGDG.rhel8.10.aarch64.rpm pgdg 1.4.4 33.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/tdigest_17-1.4.4-4PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 tdigest_17 tdigest_17-1.4.2-1PGDG.rhel8.aarch64.rpm pgdg 1.4.2 32.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/tdigest_17-1.4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 tdigest_17 tdigest_17-1.4.1-3PGDG.rhel8.aarch64.rpm pgdg 1.4.1 31.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/tdigest_17-1.4.1-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 tdigest_17 tdigest_17-1.4.7-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.7 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/tdigest_17-1.4.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 tdigest_17 tdigest_17-1.4.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.6 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/tdigest_17-1.4.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 tdigest_17 tdigest_17-1.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.5 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/tdigest_17-1.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 tdigest_17 tdigest_17-1.4.4-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4.4 34.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/tdigest_17-1.4.4-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 tdigest_17 tdigest_17-1.4.2-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4.2 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/tdigest_17-1.4.2-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 tdigest_17 tdigest_17-1.4.2-1PGDG.rhel9.x86_64.rpm pgdg 1.4.2 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/tdigest_17-1.4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 tdigest_17 tdigest_17-1.4.1-3PGDG.rhel9.x86_64.rpm pgdg 1.4.1 33.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/tdigest_17-1.4.1-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 tdigest_17 tdigest_17-1.4.7-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.7 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/tdigest_17-1.4.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 tdigest_17 tdigest_17-1.4.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.6 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/tdigest_17-1.4.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 tdigest_17 tdigest_17-1.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.5 38.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/tdigest_17-1.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 tdigest_17 tdigest_17-1.4.4-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4.4 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/tdigest_17-1.4.4-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 tdigest_17 tdigest_17-1.4.2-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4.2 32.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/tdigest_17-1.4.2-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 tdigest_17 tdigest_17-1.4.2-1PGDG.rhel9.aarch64.rpm pgdg 1.4.2 32.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/tdigest_17-1.4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 tdigest_17 tdigest_17-1.4.1-3PGDG.rhel9.aarch64.rpm pgdg 1.4.1 32.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/tdigest_17-1.4.1-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 tdigest_17 tdigest_17-1.4.7-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.7 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/tdigest_17-1.4.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 tdigest_17 tdigest_17-1.4.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.6 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/tdigest_17-1.4.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 tdigest_17 tdigest_17-1.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.5 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/tdigest_17-1.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 tdigest_17 tdigest_17-1.4.4-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4.4 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/tdigest_17-1.4.4-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 tdigest_17 tdigest_17-1.4.2-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4.2 33.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/tdigest_17-1.4.2-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 tdigest_17 tdigest_17-1.4.2-2PGDG.rhel10.x86_64.rpm pgdg 1.4.2 33.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/tdigest_17-1.4.2-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 tdigest_17 tdigest_17-1.4.7-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.7 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/tdigest_17-1.4.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 tdigest_17 tdigest_17-1.4.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.6 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/tdigest_17-1.4.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 tdigest_17 tdigest_17-1.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.5 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/tdigest_17-1.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 tdigest_17 tdigest_17-1.4.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.4 34.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/tdigest_17-1.4.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 tdigest_17 tdigest_17-1.4.2-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 32.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/tdigest_17-1.4.2-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 tdigest_17 tdigest_17-1.4.2-2PGDG.rhel10.aarch64.rpm pgdg 1.4.2 33.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/tdigest_17-1.4.2-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.7-1.pgdg12+1_amd64.deb pgdg 1.4.7 77.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.6-1.pgdg12+1_amd64.deb pgdg 1.4.6 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.4-1.pgdg12+1_amd64.deb pgdg 1.4.4 59.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.4-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.7-1.pgdg12+1_arm64.deb pgdg 1.4.7 76.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.6-1.pgdg12+1_arm64.deb pgdg 1.4.6 71.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.4-1.pgdg12+1_arm64.deb pgdg 1.4.4 59.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.4-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.7-1.pgdg13+1_amd64.deb pgdg 1.4.7 77.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.6-1.pgdg13+1_amd64.deb pgdg 1.4.6 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.4-1.pgdg13+1_amd64.deb pgdg 1.4.4 59.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.4-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.7-1.pgdg13+1_arm64.deb pgdg 1.4.7 76.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.6-1.pgdg13+1_arm64.deb pgdg 1.4.6 71.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.4-1.pgdg13+1_arm64.deb pgdg 1.4.4 59.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.4-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.7-1.pgdg22.04+1_amd64.deb pgdg 1.4.7 80.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.6-1.pgdg22.04+1_amd64.deb pgdg 1.4.6 74.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.4-1.pgdg22.04+1_amd64.deb pgdg 1.4.4 62.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.4-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.7-1.pgdg22.04+1_arm64.deb pgdg 1.4.7 79.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.6-1.pgdg22.04+1_arm64.deb pgdg 1.4.6 73.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.4-1.pgdg22.04+1_arm64.deb pgdg 1.4.4 61.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.4-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.7-1.pgdg24.04+1_amd64.deb pgdg 1.4.7 76.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.6-1.pgdg24.04+1_amd64.deb pgdg 1.4.6 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.4-1.pgdg24.04+1_amd64.deb pgdg 1.4.4 59.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.4-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.7-1.pgdg24.04+1_arm64.deb pgdg 1.4.7 75.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.6-1.pgdg24.04+1_arm64.deb pgdg 1.4.6 70.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.4-1.pgdg24.04+1_arm64.deb pgdg 1.4.4 59.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.4-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.7-1.pgdg26.04+1_amd64.deb pgdg 1.4.7 75.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.6-1.pgdg26.04+1_amd64.deb pgdg 1.4.6 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.4-1.pgdg26.04+1_amd64.deb pgdg 1.4.4 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.4-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.7-1.pgdg26.04+1_arm64.deb pgdg 1.4.7 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.6-1.pgdg26.04+1_arm64.deb pgdg 1.4.6 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.4-1.pgdg26.04+1_arm64.deb pgdg 1.4.4 59.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.4-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 tdigest_16 tdigest_16-1.4.7-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.7 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/tdigest_16-1.4.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 tdigest_16 tdigest_16-1.4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.6 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/tdigest_16-1.4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 tdigest_16 tdigest_16-1.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.5 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/tdigest_16-1.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 tdigest_16 tdigest_16-1.4.4-4PGDG.rhel8.10.x86_64.rpm pgdg 1.4.4 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/tdigest_16-1.4.4-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 tdigest_16 tdigest_16-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 33.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/tdigest_16-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 tdigest_16 tdigest_16-1.4.7-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.7 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/tdigest_16-1.4.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 tdigest_16 tdigest_16-1.4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.6 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/tdigest_16-1.4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 tdigest_16 tdigest_16-1.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.5 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/tdigest_16-1.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 tdigest_16 tdigest_16-1.4.4-4PGDG.rhel8.10.aarch64.rpm pgdg 1.4.4 33.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/tdigest_16-1.4.4-4PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 tdigest_16 tdigest_16-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 31.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/tdigest_16-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 tdigest_16 tdigest_16-1.4.7-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.7 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/tdigest_16-1.4.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 tdigest_16 tdigest_16-1.4.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.6 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/tdigest_16-1.4.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 tdigest_16 tdigest_16-1.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.5 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/tdigest_16-1.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 tdigest_16 tdigest_16-1.4.4-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4.4 34.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/tdigest_16-1.4.4-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 tdigest_16 tdigest_16-1.4.2-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4.2 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/tdigest_16-1.4.2-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 tdigest_16 tdigest_16-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 33.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/tdigest_16-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 tdigest_16 tdigest_16-1.4.7-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.7 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/tdigest_16-1.4.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 tdigest_16 tdigest_16-1.4.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.6 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/tdigest_16-1.4.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 tdigest_16 tdigest_16-1.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.5 38.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/tdigest_16-1.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 tdigest_16 tdigest_16-1.4.4-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4.4 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/tdigest_16-1.4.4-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 tdigest_16 tdigest_16-1.4.2-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4.2 32.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/tdigest_16-1.4.2-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 tdigest_16 tdigest_16-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 31.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/tdigest_16-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 tdigest_16 tdigest_16-1.4.7-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.7 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/tdigest_16-1.4.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 tdigest_16 tdigest_16-1.4.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.6 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/tdigest_16-1.4.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 tdigest_16 tdigest_16-1.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.5 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/tdigest_16-1.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 tdigest_16 tdigest_16-1.4.4-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4.4 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/tdigest_16-1.4.4-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 tdigest_16 tdigest_16-1.4.2-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4.2 33.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/tdigest_16-1.4.2-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 tdigest_16 tdigest_16-1.4.2-2PGDG.rhel10.x86_64.rpm pgdg 1.4.2 33.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/tdigest_16-1.4.2-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 tdigest_16 tdigest_16-1.4.7-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.7 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/tdigest_16-1.4.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 tdigest_16 tdigest_16-1.4.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.6 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/tdigest_16-1.4.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 tdigest_16 tdigest_16-1.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.5 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/tdigest_16-1.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 tdigest_16 tdigest_16-1.4.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.4 34.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/tdigest_16-1.4.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 tdigest_16 tdigest_16-1.4.2-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 32.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/tdigest_16-1.4.2-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 tdigest_16 tdigest_16-1.4.2-2PGDG.rhel10.aarch64.rpm pgdg 1.4.2 33.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/tdigest_16-1.4.2-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.7-1.pgdg12+1_amd64.deb pgdg 1.4.7 77.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.6-1.pgdg12+1_amd64.deb pgdg 1.4.6 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.4-1.pgdg12+1_amd64.deb pgdg 1.4.4 59.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.4-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.7-1.pgdg12+1_arm64.deb pgdg 1.4.7 76.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.6-1.pgdg12+1_arm64.deb pgdg 1.4.6 71.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.4-1.pgdg12+1_arm64.deb pgdg 1.4.4 59.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.4-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.7-1.pgdg13+1_amd64.deb pgdg 1.4.7 77.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.6-1.pgdg13+1_amd64.deb pgdg 1.4.6 72.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.4-1.pgdg13+1_amd64.deb pgdg 1.4.4 59.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.4-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.7-1.pgdg13+1_arm64.deb pgdg 1.4.7 76.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.6-1.pgdg13+1_arm64.deb pgdg 1.4.6 71.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.4-1.pgdg13+1_arm64.deb pgdg 1.4.4 59.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.4-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.7-1.pgdg22.04+1_amd64.deb pgdg 1.4.7 80.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.6-1.pgdg22.04+1_amd64.deb pgdg 1.4.6 74.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.4-1.pgdg22.04+1_amd64.deb pgdg 1.4.4 62.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.4-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.7-1.pgdg22.04+1_arm64.deb pgdg 1.4.7 79.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.6-1.pgdg22.04+1_arm64.deb pgdg 1.4.6 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.4-1.pgdg22.04+1_arm64.deb pgdg 1.4.4 61.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.4-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.7-1.pgdg24.04+1_amd64.deb pgdg 1.4.7 76.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.6-1.pgdg24.04+1_amd64.deb pgdg 1.4.6 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.4-1.pgdg24.04+1_amd64.deb pgdg 1.4.4 59.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.4-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.7-1.pgdg24.04+1_arm64.deb pgdg 1.4.7 75.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.6-1.pgdg24.04+1_arm64.deb pgdg 1.4.6 70.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.4-1.pgdg24.04+1_arm64.deb pgdg 1.4.4 59.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.4-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.7-1.pgdg26.04+1_amd64.deb pgdg 1.4.7 75.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.6-1.pgdg26.04+1_amd64.deb pgdg 1.4.6 71.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.4-1.pgdg26.04+1_amd64.deb pgdg 1.4.4 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.4-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.7-1.pgdg26.04+1_arm64.deb pgdg 1.4.7 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.6-1.pgdg26.04+1_arm64.deb pgdg 1.4.6 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.4-1.pgdg26.04+1_arm64.deb pgdg 1.4.4 59.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.4-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 tdigest_15 tdigest_15-1.4.7-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.7 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/tdigest_15-1.4.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 tdigest_15 tdigest_15-1.4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.6 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/tdigest_15-1.4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 tdigest_15 tdigest_15-1.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.5 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/tdigest_15-1.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 tdigest_15 tdigest_15-1.4.4-4PGDG.rhel8.10.x86_64.rpm pgdg 1.4.4 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/tdigest_15-1.4.4-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 tdigest_15 tdigest_15-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 33.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/tdigest_15-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 tdigest_15 tdigest_15-1.4.0-1.rhel8.x86_64.rpm pgdg 1.4.0 70.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/tdigest_15-1.4.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 tdigest_15 tdigest_15-1.4.7-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.7 43.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/tdigest_15-1.4.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 tdigest_15 tdigest_15-1.4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.6 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/tdigest_15-1.4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 tdigest_15 tdigest_15-1.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.5 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/tdigest_15-1.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 tdigest_15 tdigest_15-1.4.4-4PGDG.rhel8.10.aarch64.rpm pgdg 1.4.4 33.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/tdigest_15-1.4.4-4PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 tdigest_15 tdigest_15-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 31.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/tdigest_15-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 tdigest_15 tdigest_15-1.4.0-1.rhel8.aarch64.rpm pgdg 1.4.0 68.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/tdigest_15-1.4.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 tdigest_15 tdigest_15-1.4.7-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.7 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/tdigest_15-1.4.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 tdigest_15 tdigest_15-1.4.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.6 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/tdigest_15-1.4.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 tdigest_15 tdigest_15-1.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.5 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/tdigest_15-1.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 tdigest_15 tdigest_15-1.4.4-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4.4 34.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/tdigest_15-1.4.4-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 tdigest_15 tdigest_15-1.4.2-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4.2 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/tdigest_15-1.4.2-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 tdigest_15 tdigest_15-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 33.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/tdigest_15-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 tdigest_15 tdigest_15-1.4.0-1.rhel9.x86_64.rpm pgdg 1.4.0 72.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/tdigest_15-1.4.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 tdigest_15 tdigest_15-1.4.7-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.7 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/tdigest_15-1.4.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 tdigest_15 tdigest_15-1.4.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.6 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/tdigest_15-1.4.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 tdigest_15 tdigest_15-1.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.5 38.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/tdigest_15-1.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 tdigest_15 tdigest_15-1.4.4-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4.4 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/tdigest_15-1.4.4-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 tdigest_15 tdigest_15-1.4.2-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4.2 32.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/tdigest_15-1.4.2-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 tdigest_15 tdigest_15-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 31.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/tdigest_15-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 tdigest_15 tdigest_15-1.4.0-1.rhel9.aarch64.rpm pgdg 1.4.0 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/tdigest_15-1.4.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 tdigest_15 tdigest_15-1.4.7-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.7 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/tdigest_15-1.4.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 tdigest_15 tdigest_15-1.4.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.6 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/tdigest_15-1.4.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 tdigest_15 tdigest_15-1.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.5 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/tdigest_15-1.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 tdigest_15 tdigest_15-1.4.4-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4.4 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/tdigest_15-1.4.4-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 tdigest_15 tdigest_15-1.4.2-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4.2 33.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/tdigest_15-1.4.2-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 tdigest_15 tdigest_15-1.4.2-2PGDG.rhel10.x86_64.rpm pgdg 1.4.2 33.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/tdigest_15-1.4.2-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 tdigest_15 tdigest_15-1.4.7-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.7 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/tdigest_15-1.4.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 tdigest_15 tdigest_15-1.4.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.6 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/tdigest_15-1.4.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 tdigest_15 tdigest_15-1.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.5 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/tdigest_15-1.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 tdigest_15 tdigest_15-1.4.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.4 34.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/tdigest_15-1.4.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 tdigest_15 tdigest_15-1.4.2-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 32.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/tdigest_15-1.4.2-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 tdigest_15 tdigest_15-1.4.2-2PGDG.rhel10.aarch64.rpm pgdg 1.4.2 33.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/tdigest_15-1.4.2-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.7-1.pgdg12+1_amd64.deb pgdg 1.4.7 77.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.6-1.pgdg12+1_amd64.deb pgdg 1.4.6 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.4-1.pgdg12+1_amd64.deb pgdg 1.4.4 59.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.4-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.7-1.pgdg12+1_arm64.deb pgdg 1.4.7 76.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.6-1.pgdg12+1_arm64.deb pgdg 1.4.6 71.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.4-1.pgdg12+1_arm64.deb pgdg 1.4.4 59.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.4-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.7-1.pgdg13+1_amd64.deb pgdg 1.4.7 77.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.6-1.pgdg13+1_amd64.deb pgdg 1.4.6 72.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.4-1.pgdg13+1_amd64.deb pgdg 1.4.4 59.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.4-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.7-1.pgdg13+1_arm64.deb pgdg 1.4.7 76.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.6-1.pgdg13+1_arm64.deb pgdg 1.4.6 71.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.4-1.pgdg13+1_arm64.deb pgdg 1.4.4 59.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.4-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.7-1.pgdg22.04+1_amd64.deb pgdg 1.4.7 81.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.6-1.pgdg22.04+1_amd64.deb pgdg 1.4.6 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.4-1.pgdg22.04+1_amd64.deb pgdg 1.4.4 62.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.4-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.7-1.pgdg22.04+1_arm64.deb pgdg 1.4.7 79.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.6-1.pgdg22.04+1_arm64.deb pgdg 1.4.6 73.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.4-1.pgdg22.04+1_arm64.deb pgdg 1.4.4 61.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.4-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.7-1.pgdg24.04+1_amd64.deb pgdg 1.4.7 76.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.6-1.pgdg24.04+1_amd64.deb pgdg 1.4.6 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.4-1.pgdg24.04+1_amd64.deb pgdg 1.4.4 59.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.4-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.7-1.pgdg24.04+1_arm64.deb pgdg 1.4.7 75.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.6-1.pgdg24.04+1_arm64.deb pgdg 1.4.6 70.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.4-1.pgdg24.04+1_arm64.deb pgdg 1.4.4 59.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.4-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.7-1.pgdg26.04+1_amd64.deb pgdg 1.4.7 75.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.6-1.pgdg26.04+1_amd64.deb pgdg 1.4.6 71.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.4-1.pgdg26.04+1_amd64.deb pgdg 1.4.4 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.4-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.7-1.pgdg26.04+1_arm64.deb pgdg 1.4.7 74.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.6-1.pgdg26.04+1_arm64.deb pgdg 1.4.6 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.4-1.pgdg26.04+1_arm64.deb pgdg 1.4.4 59.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.4-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 tdigest_14 tdigest_14-1.4.7-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.7 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/tdigest_14-1.4.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 tdigest_14 tdigest_14-1.4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.6 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/tdigest_14-1.4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 tdigest_14 tdigest_14-1.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 1.4.5 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/tdigest_14-1.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 tdigest_14 tdigest_14-1.4.4-4PGDG.rhel8.10.x86_64.rpm pgdg 1.4.4 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/tdigest_14-1.4.4-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 tdigest_14 tdigest_14-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 33.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/tdigest_14-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 tdigest_14 tdigest_14-1.2.0-2.rhel8.x86_64.rpm pgdg 1.2.0 60.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/tdigest_14-1.2.0-2.rhel8.x86_64.rpm
@ el8.aarch64 14 tdigest_14 tdigest_14-1.4.7-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.7 43.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/tdigest_14-1.4.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 tdigest_14 tdigest_14-1.4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.6 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/tdigest_14-1.4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 tdigest_14 tdigest_14-1.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 1.4.5 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/tdigest_14-1.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 tdigest_14 tdigest_14-1.4.4-4PGDG.rhel8.10.aarch64.rpm pgdg 1.4.4 33.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/tdigest_14-1.4.4-4PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 tdigest_14 tdigest_14-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 31.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/tdigest_14-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 tdigest_14 tdigest_14-1.4.0-1.rhel8.aarch64.rpm pgdg 1.4.0 68.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/tdigest_14-1.4.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 tdigest_14 tdigest_14-1.4.7-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.7 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/tdigest_14-1.4.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 tdigest_14 tdigest_14-1.4.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.6 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/tdigest_14-1.4.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 tdigest_14 tdigest_14-1.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 1.4.5 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/tdigest_14-1.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 tdigest_14 tdigest_14-1.4.4-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4.4 34.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/tdigest_14-1.4.4-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 tdigest_14 tdigest_14-1.4.2-4PGDG.rhel9.8.x86_64.rpm pgdg 1.4.2 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/tdigest_14-1.4.2-4PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 tdigest_14 tdigest_14-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 33.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/tdigest_14-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 tdigest_14 tdigest_14-1.4.0-1.rhel9.x86_64.rpm pgdg 1.4.0 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/tdigest_14-1.4.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 tdigest_14 tdigest_14-1.4.7-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.7 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/tdigest_14-1.4.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 tdigest_14 tdigest_14-1.4.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.6 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/tdigest_14-1.4.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 tdigest_14 tdigest_14-1.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 1.4.5 38.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/tdigest_14-1.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 tdigest_14 tdigest_14-1.4.4-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4.4 33.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/tdigest_14-1.4.4-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 tdigest_14 tdigest_14-1.4.2-4PGDG.rhel9.8.aarch64.rpm pgdg 1.4.2 32.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/tdigest_14-1.4.2-4PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 tdigest_14 tdigest_14-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 31.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/tdigest_14-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 tdigest_14 tdigest_14-1.4.0-1.rhel9.aarch64.rpm pgdg 1.4.0 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/tdigest_14-1.4.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 tdigest_14 tdigest_14-1.4.7-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.7 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/tdigest_14-1.4.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 tdigest_14 tdigest_14-1.4.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.6 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/tdigest_14-1.4.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 tdigest_14 tdigest_14-1.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 1.4.5 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/tdigest_14-1.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 tdigest_14 tdigest_14-1.4.4-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4.4 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/tdigest_14-1.4.4-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 tdigest_14 tdigest_14-1.4.2-4PGDG.rhel10.2.x86_64.rpm pgdg 1.4.2 33.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/tdigest_14-1.4.2-4PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 tdigest_14 tdigest_14-1.4.2-2PGDG.rhel10.x86_64.rpm pgdg 1.4.2 33.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/tdigest_14-1.4.2-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 tdigest_14 tdigest_14-1.4.7-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.7 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/tdigest_14-1.4.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 tdigest_14 tdigest_14-1.4.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.6 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/tdigest_14-1.4.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 tdigest_14 tdigest_14-1.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 1.4.5 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/tdigest_14-1.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 tdigest_14 tdigest_14-1.4.4-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.4 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/tdigest_14-1.4.4-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 tdigest_14 tdigest_14-1.4.2-4PGDG.rhel10.2.aarch64.rpm pgdg 1.4.2 32.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/tdigest_14-1.4.2-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 tdigest_14 tdigest_14-1.4.2-2PGDG.rhel10.aarch64.rpm pgdg 1.4.2 33.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/tdigest_14-1.4.2-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.7-1.pgdg12+1_amd64.deb pgdg 1.4.7 77.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.6-1.pgdg12+1_amd64.deb pgdg 1.4.6 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.4-1.pgdg12+1_amd64.deb pgdg 1.4.4 59.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.4-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.7-1.pgdg12+1_arm64.deb pgdg 1.4.7 76.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.6-1.pgdg12+1_arm64.deb pgdg 1.4.6 71.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.4-1.pgdg12+1_arm64.deb pgdg 1.4.4 59.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.4-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.7-1.pgdg13+1_amd64.deb pgdg 1.4.7 77.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.6-1.pgdg13+1_amd64.deb pgdg 1.4.6 72.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.4-1.pgdg13+1_amd64.deb pgdg 1.4.4 59.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.4-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.7-1.pgdg13+1_arm64.deb pgdg 1.4.7 76.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.6-1.pgdg13+1_arm64.deb pgdg 1.4.6 71.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.4-1.pgdg13+1_arm64.deb pgdg 1.4.4 59.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.4-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.7-1.pgdg22.04+1_amd64.deb pgdg 1.4.7 81.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.6-1.pgdg22.04+1_amd64.deb pgdg 1.4.6 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.4-1.pgdg22.04+1_amd64.deb pgdg 1.4.4 62.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.4-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.7-1.pgdg22.04+1_arm64.deb pgdg 1.4.7 79.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.6-1.pgdg22.04+1_arm64.deb pgdg 1.4.6 73.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.4-1.pgdg22.04+1_arm64.deb pgdg 1.4.4 61.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.4-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.7-1.pgdg24.04+1_amd64.deb pgdg 1.4.7 76.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.6-1.pgdg24.04+1_amd64.deb pgdg 1.4.6 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.4-1.pgdg24.04+1_amd64.deb pgdg 1.4.4 59.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.4-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.7-1.pgdg24.04+1_arm64.deb pgdg 1.4.7 75.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.6-1.pgdg24.04+1_arm64.deb pgdg 1.4.6 70.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.4-1.pgdg24.04+1_arm64.deb pgdg 1.4.4 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.4-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.7-1.pgdg26.04+1_amd64.deb pgdg 1.4.7 75.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.6-1.pgdg26.04+1_amd64.deb pgdg 1.4.6 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.4-1.pgdg26.04+1_amd64.deb pgdg 1.4.4 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.4-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.7-1.pgdg26.04+1_arm64.deb pgdg 1.4.7 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.6-1.pgdg26.04+1_arm64.deb pgdg 1.4.6 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.4-1.pgdg26.04+1_arm64.deb pgdg 1.4.4 58.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.4-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `tdigest` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install tdigest;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y tdigest -v 18  # PG 18
pig ext install -y tdigest -v 17  # PG 17
pig ext install -y tdigest -v 16  # PG 16
pig ext install -y tdigest -v 15  # PG 15
pig ext install -y tdigest -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y tdigest_18       # PG 18
dnf install -y tdigest_17       # PG 17
dnf install -y tdigest_16       # PG 16
dnf install -y tdigest_15       # PG 15
dnf install -y tdigest_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-tdigest   # PG 18
apt install -y postgresql-17-tdigest   # PG 17
apt install -y postgresql-16-tdigest   # PG 16
apt install -y postgresql-15-tdigest   # PG 15
apt install -y postgresql-14-tdigest   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION tdigest;
```

## 用法

来源：

- [README.md](https://github.com/tvondra/tdigest/blob/c0af713163e78fe7d7717559fd4862adcb8162d7/README.md)
- [tdigest.control](https://github.com/tvondra/tdigest/blob/c0af713163e78fe7d7717559fd4862adcb8162d7/tdigest.control)
- [Changes](https://github.com/tvondra/tdigest/blob/c0af713163e78fe7d7717559fd4862adcb8162d7/Changes)
- [tdigest--1.4.6--1.4.7.sql](https://github.com/tvondra/tdigest/blob/c0af713163e78fe7d7717559fd4862adcb8162d7/tdigest--1.4.6--1.4.7.sql)

`tdigest` 1.4.7 提供可合并的近似排名统计。可存储部分数据的摘要，再合并计算分位数，无需对全部原始数据排序。

### 核心工作流

```sql
CREATE EXTENSION tdigest;
SELECT tdigest_percentile(v, 100, ARRAY[0.5, 0.95, 0.99])
FROM generate_series(1, 1000) AS g(v);
CREATE TABLE digest_daily AS
SELECT current_date AS day, tdigest(v, 100) AS digest
FROM generate_series(1, 1000) AS g(v);
SELECT tdigest_percentile(digest, 0.95) FROM digest_daily;
```

### 函数与精度

`tdigest(value, compression)` 创建摘要；`tdigest(digest)` 合并已存储的摘要。`tdigest_percentile` 估算分位数，`tdigest_percentile_of` 估算排名，均提供标量和数组形式。`tdigest_add` 与 `tdigest_union` 更新或合并摘要；`tdigest_count`、`tdigest_sum` 与 `tdigest_avg` 返回计数及截尾聚合。截尾聚合的上下界参数表示分位数阈值，而非原始数据值边界。`tdigest_is_valid` 检查序列化值。

`compression` 必须在 10 到 10000 之间。较大值通常以更多内存和 CPU 换取更高精度，但不提供固定误差上界。应使用代表性数据与精确结果对照，并在合并状态时保持压缩参数一致。

### 升级与边界

1.4.7 修复了相邻值分位数插值、大计数反向排名、可复用状态的终结处理及 NULL 压缩参数处理，并将更多标量函数标记为可安全并行执行。应同时更新已安装的共享库和 SQL，并执行 `ALTER EXTENSION tdigest UPDATE TO '1.4.7'`。用 `tdigest_is_valid` 检查已存储摘要；更严格的验证可能拒绝旧版本接受的畸形值。安装需要超级用户权限，扩展可重定位且无需预加载。发布元数据声明最低 PostgreSQL 13，更新日志也记录了 PostgreSQL 19 构建修复，但这些信息不构成性能保证。

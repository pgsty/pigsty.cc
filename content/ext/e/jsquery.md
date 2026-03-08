---
title: "jsquery"
linkTitle: "jsquery"
description: "用于内省 JSONB 数据类型的查询类型"
weight: 2770
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgrespro/jsquery">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgrespro/jsquery</div>
    <div class="ext-card__desc">https://github.com/postgrespro/jsquery</div>
  </a>
  <a class="ext-card ext-card--source" href="jsquery-1.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">jsquery-1.2.tar.gz</div>
    <div class="ext-card__desc">jsquery-1.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`jsquery`**](/ext/e/jsquery) | `1.2` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2770  | [**`jsquery`**](/ext/e/jsquery) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_graphql`](/ext/e/pg_graphql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`plv8`](/ext/e/plv8) [`jsonb_plperl`](/ext/e/jsonb_plperl) [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) [`pg_net`](/ext/e/pg_net) [`pg_summarize`](/ext/e/pg_summarize) [`age`](/ext/e/age) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2` | {{< pgvers "18,17,16,15,14" >}} | `jsquery` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2` | {{< pgvers "18,17,16,15,14" >}} | `jsquery_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-jsquery` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| el8.aarch64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| el9.x86_64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| el9.aarch64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| el10.x86_64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| el10.aarch64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| d12.x86_64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| d12.aarch64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| d13.x86_64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| d13.aarch64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| u22.x86_64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| u22.aarch64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| u24.x86_64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
| u24.aarch64 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 | AVAIL PGDG 1.2 1 |
@ el8.x86_64 18 jsquery_18 jsquery_18-1.2-4PGDG.rhel8.x86_64.rpm pgdg 1.2 49.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/jsquery_18-1.2-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 jsquery_18 jsquery_18-1.2-4PGDG.rhel8.aarch64.rpm pgdg 1.2 46.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/jsquery_18-1.2-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 jsquery_18 jsquery_18-1.2-4PGDG.rhel9.x86_64.rpm pgdg 1.2 48.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/jsquery_18-1.2-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 jsquery_18 jsquery_18-1.2-4PGDG.rhel9.aarch64.rpm pgdg 1.2 47.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/jsquery_18-1.2-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 jsquery_18 jsquery_18-1.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2 50.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/jsquery_18-1.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 jsquery_18 jsquery_18-1.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2 48.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/jsquery_18-1.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-jsquery postgresql-18-jsquery_1.2-3.pgdg12+1_amd64.deb pgdg 1.2 123.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-18-jsquery_1.2-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-jsquery postgresql-18-jsquery_1.2-3.pgdg12+1_arm64.deb pgdg 1.2 120.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-18-jsquery_1.2-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-jsquery postgresql-18-jsquery_1.2-3.pgdg13+1_amd64.deb pgdg 1.2 123.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-18-jsquery_1.2-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-jsquery postgresql-18-jsquery_1.2-3.pgdg13+1_arm64.deb pgdg 1.2 120.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-18-jsquery_1.2-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-jsquery postgresql-18-jsquery_1.2-3.pgdg22.04+1_amd64.deb pgdg 1.2 123.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-18-jsquery_1.2-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-jsquery postgresql-18-jsquery_1.2-3.pgdg22.04+1_arm64.deb pgdg 1.2 120.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-18-jsquery_1.2-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-jsquery postgresql-18-jsquery_1.2-3.pgdg24.04+1_amd64.deb pgdg 1.2 122.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-18-jsquery_1.2-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-jsquery postgresql-18-jsquery_1.2-3.pgdg24.04+1_arm64.deb pgdg 1.2 119.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-18-jsquery_1.2-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 jsquery_17 jsquery_17-1.2-2PGDG.rhel8.x86_64.rpm pgdg 1.2 49.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/jsquery_17-1.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 jsquery_17 jsquery_17-1.2-2PGDG.rhel8.aarch64.rpm pgdg 1.2 46.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/jsquery_17-1.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 jsquery_17 jsquery_17-1.2-2PGDG.rhel9.x86_64.rpm pgdg 1.2 48.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/jsquery_17-1.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 jsquery_17 jsquery_17-1.2-2PGDG.rhel9.aarch64.rpm pgdg 1.2 47.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/jsquery_17-1.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 jsquery_17 jsquery_17-1.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2 50.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/jsquery_17-1.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 jsquery_17 jsquery_17-1.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2 48.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/jsquery_17-1.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-jsquery postgresql-17-jsquery_1.2-3.pgdg12+1_amd64.deb pgdg 1.2 123.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-17-jsquery_1.2-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-jsquery postgresql-17-jsquery_1.2-3.pgdg12+1_arm64.deb pgdg 1.2 120.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-17-jsquery_1.2-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-jsquery postgresql-17-jsquery_1.2-3.pgdg13+1_amd64.deb pgdg 1.2 123.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-17-jsquery_1.2-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-jsquery postgresql-17-jsquery_1.2-3.pgdg13+1_arm64.deb pgdg 1.2 120.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-17-jsquery_1.2-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-jsquery postgresql-17-jsquery_1.2-3.pgdg22.04+1_amd64.deb pgdg 1.2 130.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-17-jsquery_1.2-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-jsquery postgresql-17-jsquery_1.2-3.pgdg22.04+1_arm64.deb pgdg 1.2 127.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-17-jsquery_1.2-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-jsquery postgresql-17-jsquery_1.2-3.pgdg24.04+1_amd64.deb pgdg 1.2 122.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-17-jsquery_1.2-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-jsquery postgresql-17-jsquery_1.2-3.pgdg24.04+1_arm64.deb pgdg 1.2 119.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-17-jsquery_1.2-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 jsquery_16 jsquery_16-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 49.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/jsquery_16-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 jsquery_16 jsquery_16-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 46.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/jsquery_16-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 jsquery_16 jsquery_16-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 48.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/jsquery_16-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 jsquery_16 jsquery_16-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 47.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/jsquery_16-1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 jsquery_16 jsquery_16-1.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2 49.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/jsquery_16-1.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 jsquery_16 jsquery_16-1.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2 48.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/jsquery_16-1.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-jsquery postgresql-16-jsquery_1.2-3.pgdg12+1_amd64.deb pgdg 1.2 122.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-16-jsquery_1.2-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-jsquery postgresql-16-jsquery_1.2-3.pgdg12+1_arm64.deb pgdg 1.2 119.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-16-jsquery_1.2-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-jsquery postgresql-16-jsquery_1.2-3.pgdg13+1_amd64.deb pgdg 1.2 123.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-16-jsquery_1.2-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-jsquery postgresql-16-jsquery_1.2-3.pgdg13+1_arm64.deb pgdg 1.2 120.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-16-jsquery_1.2-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-jsquery postgresql-16-jsquery_1.2-3.pgdg22.04+1_amd64.deb pgdg 1.2 130.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-16-jsquery_1.2-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-jsquery postgresql-16-jsquery_1.2-3.pgdg22.04+1_arm64.deb pgdg 1.2 127.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-16-jsquery_1.2-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-jsquery postgresql-16-jsquery_1.2-3.pgdg24.04+1_amd64.deb pgdg 1.2 122.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-16-jsquery_1.2-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-jsquery postgresql-16-jsquery_1.2-3.pgdg24.04+1_arm64.deb pgdg 1.2 119.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-16-jsquery_1.2-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 jsquery_15 jsquery_15-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 50.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/jsquery_15-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 jsquery_15 jsquery_15-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 47.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/jsquery_15-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 jsquery_15 jsquery_15-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 51.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/jsquery_15-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 jsquery_15 jsquery_15-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 49.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/jsquery_15-1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 jsquery_15 jsquery_15-1.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2 52.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/jsquery_15-1.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 jsquery_15 jsquery_15-1.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2 50.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/jsquery_15-1.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-jsquery postgresql-15-jsquery_1.2-3.pgdg12+1_amd64.deb pgdg 1.2 124.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-15-jsquery_1.2-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-jsquery postgresql-15-jsquery_1.2-3.pgdg12+1_arm64.deb pgdg 1.2 120.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-15-jsquery_1.2-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-jsquery postgresql-15-jsquery_1.2-3.pgdg13+1_amd64.deb pgdg 1.2 124.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-15-jsquery_1.2-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-jsquery postgresql-15-jsquery_1.2-3.pgdg13+1_arm64.deb pgdg 1.2 121.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-15-jsquery_1.2-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-jsquery postgresql-15-jsquery_1.2-3.pgdg22.04+1_amd64.deb pgdg 1.2 132.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-15-jsquery_1.2-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-jsquery postgresql-15-jsquery_1.2-3.pgdg22.04+1_arm64.deb pgdg 1.2 129.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-15-jsquery_1.2-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-jsquery postgresql-15-jsquery_1.2-3.pgdg24.04+1_amd64.deb pgdg 1.2 124.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-15-jsquery_1.2-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-jsquery postgresql-15-jsquery_1.2-3.pgdg24.04+1_arm64.deb pgdg 1.2 121.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-15-jsquery_1.2-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 jsquery_14 jsquery_14-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 50.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/jsquery_14-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 jsquery_14 jsquery_14-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 47.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/jsquery_14-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 jsquery_14 jsquery_14-1.2-1PGDG.rhel9.x86_64.rpm pgdg 1.2 51.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/jsquery_14-1.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 jsquery_14 jsquery_14-1.2-1PGDG.rhel9.aarch64.rpm pgdg 1.2 49.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/jsquery_14-1.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 jsquery_14 jsquery_14-1.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2 52.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/jsquery_14-1.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 jsquery_14 jsquery_14-1.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2 50.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/jsquery_14-1.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-jsquery postgresql-14-jsquery_1.2-3.pgdg12+1_amd64.deb pgdg 1.2 124.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-14-jsquery_1.2-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-jsquery postgresql-14-jsquery_1.2-3.pgdg12+1_arm64.deb pgdg 1.2 121.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-14-jsquery_1.2-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-jsquery postgresql-14-jsquery_1.2-3.pgdg13+1_amd64.deb pgdg 1.2 124.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-14-jsquery_1.2-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-jsquery postgresql-14-jsquery_1.2-3.pgdg13+1_arm64.deb pgdg 1.2 121.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-14-jsquery_1.2-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-jsquery postgresql-14-jsquery_1.2-3.pgdg22.04+1_amd64.deb pgdg 1.2 132.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-14-jsquery_1.2-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-jsquery postgresql-14-jsquery_1.2-3.pgdg22.04+1_arm64.deb pgdg 1.2 129.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-14-jsquery_1.2-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-jsquery postgresql-14-jsquery_1.2-3.pgdg24.04+1_amd64.deb pgdg 1.2 124.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-14-jsquery_1.2-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-jsquery postgresql-14-jsquery_1.2-3.pgdg24.04+1_arm64.deb pgdg 1.2 121.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/j/jsquery/postgresql-14-jsquery_1.2-3.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `jsquery` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install jsquery;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y jsquery -v 18  # PG 18
pig ext install -y jsquery -v 17  # PG 17
pig ext install -y jsquery -v 16  # PG 16
pig ext install -y jsquery -v 15  # PG 15
pig ext install -y jsquery -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y jsquery_18       # PG 18
dnf install -y jsquery_17       # PG 17
dnf install -y jsquery_16       # PG 16
dnf install -y jsquery_15       # PG 15
dnf install -y jsquery_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-jsquery   # PG 18
apt install -y postgresql-17-jsquery   # PG 17
apt install -y postgresql-16-jsquery   # PG 16
apt install -y postgresql-15-jsquery   # PG 15
apt install -y postgresql-14-jsquery   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION jsquery;
```

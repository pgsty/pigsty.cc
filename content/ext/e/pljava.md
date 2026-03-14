---
title: "pljava"
linkTitle: "pljava"
description: "Java 程序语言"
weight: 3090
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tada/pljava">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tada/pljava</div>
    <div class="ext-card__desc">https://github.com/tada/pljava</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pljava`**](/ext/e/pljava) | `1.6.10` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang java" href="/ext/language#java">Java</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3090  | [**`pljava`**](/ext/e/pljava) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `sqlj` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`plv8`](/ext/e/plv8) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) [`pg_tle`](/ext/e/pg_tle) [`pllua`](/ext/e/pllua) [`plluau`](/ext/e/plluau) [`pltclu`](/ext/e/pltclu) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> missing debian/ubuntu pg18


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.6.10` | {{< pgvers "18,17,16,15,14" >}} | `pljava` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.6.10` | {{< pgvers "18,17,16,15,14" >}} | `pljava_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.6.9` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-pljava` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.6.10 1 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 |
| el8.aarch64 | AVAIL PGDG 1.6.10 1 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 |
| el9.x86_64 | AVAIL PGDG 1.6.10 1 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 3 | AVAIL PGDG 1.6.10 3 | AVAIL PGDG 1.6.10 3 |
| el9.aarch64 | AVAIL PGDG 1.6.10 1 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 3 | AVAIL PGDG 1.6.10 3 | AVAIL PGDG 1.6.10 3 |
| el10.x86_64 | AVAIL PGDG 1.6.10 1 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 |
| el10.aarch64 | AVAIL PGDG 1.6.10 1 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 | AVAIL PGDG 1.6.10 2 |
| d12.x86_64 | MISS PGDG - 0 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 |
| d12.aarch64 | MISS PGDG - 0 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 |
| d13.x86_64 | MISS PGDG - 0 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 |
| d13.aarch64 | MISS PGDG - 0 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 |
| u22.x86_64 | MISS PGDG - 0 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 |
| u22.aarch64 | MISS PGDG - 0 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 |
| u24.x86_64 | MISS PGDG - 0 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 |
| u24.aarch64 | MISS PGDG - 0 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 | AVAIL PGDG 1.6.9 1 |
@ el8.x86_64 18 pljava_18 pljava_18-1.6.10-1PGDG.rhel8.x86_64.rpm pgdg 1.6.10 927.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pljava_18-1.6.10-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pljava_18 pljava_18-1.6.10-1PGDG.rhel8.aarch64.rpm pgdg 1.6.10 923.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pljava_18-1.6.10-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pljava_18 pljava_18-1.6.10-1PGDG.rhel9.x86_64.rpm pgdg 1.6.10 917.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pljava_18-1.6.10-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pljava_18 pljava_18-1.6.10-1PGDG.rhel9.aarch64.rpm pgdg 1.6.10 914.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pljava_18-1.6.10-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pljava_18 pljava_18-1.6.10-1PGDG.rhel10.x86_64.rpm pgdg 1.6.10 918.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pljava_18-1.6.10-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pljava_18 pljava_18-1.6.10-1PGDG.rhel10.aarch64.rpm pgdg 1.6.10 914.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pljava_18-1.6.10-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 17 pljava_17 pljava_17-1.6.10-1PGDG.rhel8.x86_64.rpm pgdg 1.6.10 927.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pljava_17-1.6.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pljava_17 pljava_17-1.6.8-1PGDG.rhel8.x86_64.rpm pgdg 1.6.8 914.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pljava_17-1.6.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pljava_17 pljava_17-1.6.10-1PGDG.rhel8.aarch64.rpm pgdg 1.6.10 923.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pljava_17-1.6.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pljava_17 pljava_17-1.6.8-1PGDG.rhel8.aarch64.rpm pgdg 1.6.8 910.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pljava_17-1.6.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pljava_17 pljava_17-1.6.10-1PGDG.rhel9.x86_64.rpm pgdg 1.6.10 917.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pljava_17-1.6.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pljava_17 pljava_17-1.6.8-1PGDG.rhel9.x86_64.rpm pgdg 1.6.8 895.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pljava_17-1.6.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pljava_17 pljava_17-1.6.10-1PGDG.rhel9.aarch64.rpm pgdg 1.6.10 914.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pljava_17-1.6.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pljava_17 pljava_17-1.6.8-1PGDG.rhel9.aarch64.rpm pgdg 1.6.8 892.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pljava_17-1.6.8-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pljava_17 pljava_17-1.6.10-1PGDG.rhel10.x86_64.rpm pgdg 1.6.10 918.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pljava_17-1.6.10-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pljava_17 pljava_17-1.6.9-1PGDG.rhel10.x86_64.rpm pgdg 1.6.9 914.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pljava_17-1.6.9-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pljava_17 pljava_17-1.6.10-1PGDG.rhel10.aarch64.rpm pgdg 1.6.10 914.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pljava_17-1.6.10-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pljava_17 pljava_17-1.6.9-1PGDG.rhel10.aarch64.rpm pgdg 1.6.9 911.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pljava_17-1.6.9-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pljava postgresql-17-pljava_1.6.9-1.pgdg120+1_amd64.deb pgdg 1.6.9 911.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-17-pljava_1.6.9-1.pgdg120+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pljava postgresql-17-pljava_1.6.9-1.pgdg120+1_arm64.deb pgdg 1.6.9 906.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-17-pljava_1.6.9-1.pgdg120+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pljava postgresql-17-pljava_1.6.9-1.pgdg130+1_amd64.deb pgdg 1.6.9 911.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-17-pljava_1.6.9-1.pgdg130+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pljava postgresql-17-pljava_1.6.9-1.pgdg130+1_arm64.deb pgdg 1.6.9 906.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-17-pljava_1.6.9-1.pgdg130+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pljava postgresql-17-pljava_1.6.9-1.pgdg22.04+1_amd64.deb pgdg 1.6.9 901.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-17-pljava_1.6.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pljava postgresql-17-pljava_1.6.9-1.pgdg22.04+1_arm64.deb pgdg 1.6.9 897.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-17-pljava_1.6.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pljava postgresql-17-pljava_1.6.9-1.pgdg24.04+1_amd64.deb pgdg 1.6.9 908.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-17-pljava_1.6.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pljava postgresql-17-pljava_1.6.9-1.pgdg24.04+1_arm64.deb pgdg 1.6.9 904.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-17-pljava_1.6.9-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pljava_16 pljava_16-1.6.10-1PGDG.rhel8.x86_64.rpm pgdg 1.6.10 927.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pljava_16-1.6.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pljava_16 pljava_16-1.6.8-1PGDG.rhel8.x86_64.rpm pgdg 1.6.8 913.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pljava_16-1.6.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pljava_16 pljava_16-1.6.10-1PGDG.rhel8.aarch64.rpm pgdg 1.6.10 923.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pljava_16-1.6.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pljava_16 pljava_16-1.6.8-1PGDG.rhel8.aarch64.rpm pgdg 1.6.8 910.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pljava_16-1.6.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pljava_16 pljava_16-1.6.10-1PGDG.rhel9.x86_64.rpm pgdg 1.6.10 917.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pljava_16-1.6.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pljava_16 pljava_16-1.6.8-1PGDG.rhel9.x86_64.rpm pgdg 1.6.8 895.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pljava_16-1.6.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pljava_16 pljava_16-1.6.6-1PGDG.rhel9.x86_64.rpm pgdg 1.6.6 891.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pljava_16-1.6.6-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pljava_16 pljava_16-1.6.10-1PGDG.rhel9.aarch64.rpm pgdg 1.6.10 914.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pljava_16-1.6.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pljava_16 pljava_16-1.6.8-1PGDG.rhel9.aarch64.rpm pgdg 1.6.8 892.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pljava_16-1.6.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pljava_16 pljava_16-1.6.6-1PGDG.rhel9.aarch64.rpm pgdg 1.6.6 888.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pljava_16-1.6.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pljava_16 pljava_16-1.6.10-1PGDG.rhel10.x86_64.rpm pgdg 1.6.10 918.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pljava_16-1.6.10-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pljava_16 pljava_16-1.6.9-1PGDG.rhel10.x86_64.rpm pgdg 1.6.9 914.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pljava_16-1.6.9-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pljava_16 pljava_16-1.6.10-1PGDG.rhel10.aarch64.rpm pgdg 1.6.10 914.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pljava_16-1.6.10-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pljava_16 pljava_16-1.6.9-1PGDG.rhel10.aarch64.rpm pgdg 1.6.9 911.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pljava_16-1.6.9-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pljava postgresql-16-pljava_1.6.9-1.pgdg120+1_amd64.deb pgdg 1.6.9 911.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-16-pljava_1.6.9-1.pgdg120+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pljava postgresql-16-pljava_1.6.9-1.pgdg120+1_arm64.deb pgdg 1.6.9 906.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-16-pljava_1.6.9-1.pgdg120+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pljava postgresql-16-pljava_1.6.9-1.pgdg130+1_amd64.deb pgdg 1.6.9 911.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-16-pljava_1.6.9-1.pgdg130+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pljava postgresql-16-pljava_1.6.9-1.pgdg130+1_arm64.deb pgdg 1.6.9 906.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-16-pljava_1.6.9-1.pgdg130+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pljava postgresql-16-pljava_1.6.9-1.pgdg22.04+1_amd64.deb pgdg 1.6.9 901.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-16-pljava_1.6.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pljava postgresql-16-pljava_1.6.9-1.pgdg22.04+1_arm64.deb pgdg 1.6.9 897.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-16-pljava_1.6.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pljava postgresql-16-pljava_1.6.9-1.pgdg24.04+1_amd64.deb pgdg 1.6.9 908.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-16-pljava_1.6.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pljava postgresql-16-pljava_1.6.9-1.pgdg24.04+1_arm64.deb pgdg 1.6.9 904.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-16-pljava_1.6.9-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pljava_15 pljava_15-1.6.10-1PGDG.rhel8.x86_64.rpm pgdg 1.6.10 927.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pljava_15-1.6.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pljava_15 pljava_15-1.6.8-1PGDG.rhel8.x86_64.rpm pgdg 1.6.8 914.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pljava_15-1.6.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pljava_15 pljava_15-1.6.10-1PGDG.rhel8.aarch64.rpm pgdg 1.6.10 923.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pljava_15-1.6.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pljava_15 pljava_15-1.6.8-1PGDG.rhel8.aarch64.rpm pgdg 1.6.8 909.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pljava_15-1.6.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pljava_15 pljava_15-1.6.10-1PGDG.rhel9.x86_64.rpm pgdg 1.6.10 917.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pljava_15-1.6.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pljava_15 pljava_15-1.6.8-1PGDG.rhel9.x86_64.rpm pgdg 1.6.8 895.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pljava_15-1.6.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pljava_15 pljava_15-1.6.6-1PGDG.rhel9.x86_64.rpm pgdg 1.6.6 891.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pljava_15-1.6.6-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pljava_15 pljava_15-1.6.10-1PGDG.rhel9.aarch64.rpm pgdg 1.6.10 914.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pljava_15-1.6.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pljava_15 pljava_15-1.6.8-1PGDG.rhel9.aarch64.rpm pgdg 1.6.8 892.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pljava_15-1.6.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pljava_15 pljava_15-1.6.6-1PGDG.rhel9.aarch64.rpm pgdg 1.6.6 887.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pljava_15-1.6.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pljava_15 pljava_15-1.6.10-1PGDG.rhel10.x86_64.rpm pgdg 1.6.10 917.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pljava_15-1.6.10-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pljava_15 pljava_15-1.6.9-1PGDG.rhel10.x86_64.rpm pgdg 1.6.9 914.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pljava_15-1.6.9-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pljava_15 pljava_15-1.6.10-1PGDG.rhel10.aarch64.rpm pgdg 1.6.10 914.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pljava_15-1.6.10-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pljava_15 pljava_15-1.6.9-1PGDG.rhel10.aarch64.rpm pgdg 1.6.9 911.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pljava_15-1.6.9-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pljava postgresql-15-pljava_1.6.9-1.pgdg120+1_amd64.deb pgdg 1.6.9 911.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-15-pljava_1.6.9-1.pgdg120+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pljava postgresql-15-pljava_1.6.9-1.pgdg120+1_arm64.deb pgdg 1.6.9 906.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-15-pljava_1.6.9-1.pgdg120+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pljava postgresql-15-pljava_1.6.9-1.pgdg130+1_amd64.deb pgdg 1.6.9 911.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-15-pljava_1.6.9-1.pgdg130+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pljava postgresql-15-pljava_1.6.9-1.pgdg130+1_arm64.deb pgdg 1.6.9 905.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-15-pljava_1.6.9-1.pgdg130+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pljava postgresql-15-pljava_1.6.9-1.pgdg22.04+1_amd64.deb pgdg 1.6.9 901.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-15-pljava_1.6.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pljava postgresql-15-pljava_1.6.9-1.pgdg22.04+1_arm64.deb pgdg 1.6.9 897.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-15-pljava_1.6.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pljava postgresql-15-pljava_1.6.9-1.pgdg24.04+1_amd64.deb pgdg 1.6.9 908.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-15-pljava_1.6.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pljava postgresql-15-pljava_1.6.9-1.pgdg24.04+1_arm64.deb pgdg 1.6.9 904.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-15-pljava_1.6.9-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pljava_14 pljava_14-1.6.10-1PGDG.rhel8.x86_64.rpm pgdg 1.6.10 927.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pljava_14-1.6.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pljava_14 pljava_14-1.6.8-1PGDG.rhel8.x86_64.rpm pgdg 1.6.8 914.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pljava_14-1.6.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pljava_14 pljava_14-1.6.10-1PGDG.rhel8.aarch64.rpm pgdg 1.6.10 923.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pljava_14-1.6.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pljava_14 pljava_14-1.6.8-1PGDG.rhel8.aarch64.rpm pgdg 1.6.8 910.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pljava_14-1.6.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pljava_14 pljava_14-1.6.10-1PGDG.rhel9.x86_64.rpm pgdg 1.6.10 917.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pljava_14-1.6.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pljava_14 pljava_14-1.6.8-1PGDG.rhel9.x86_64.rpm pgdg 1.6.8 895.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pljava_14-1.6.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pljava_14 pljava_14-1.6.6-1PGDG.rhel9.x86_64.rpm pgdg 1.6.6 891.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pljava_14-1.6.6-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pljava_14 pljava_14-1.6.10-1PGDG.rhel9.aarch64.rpm pgdg 1.6.10 914.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pljava_14-1.6.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pljava_14 pljava_14-1.6.8-1PGDG.rhel9.aarch64.rpm pgdg 1.6.8 892.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pljava_14-1.6.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pljava_14 pljava_14-1.6.6-1PGDG.rhel9.aarch64.rpm pgdg 1.6.6 887.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pljava_14-1.6.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pljava_14 pljava_14-1.6.10-1PGDG.rhel10.x86_64.rpm pgdg 1.6.10 917.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pljava_14-1.6.10-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pljava_14 pljava_14-1.6.9-1PGDG.rhel10.x86_64.rpm pgdg 1.6.9 914.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pljava_14-1.6.9-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pljava_14 pljava_14-1.6.10-1PGDG.rhel10.aarch64.rpm pgdg 1.6.10 914.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pljava_14-1.6.10-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pljava_14 pljava_14-1.6.9-1PGDG.rhel10.aarch64.rpm pgdg 1.6.9 911.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pljava_14-1.6.9-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pljava postgresql-14-pljava_1.6.9-1.pgdg120+1_amd64.deb pgdg 1.6.9 910.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-14-pljava_1.6.9-1.pgdg120+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pljava postgresql-14-pljava_1.6.9-1.pgdg120+1_arm64.deb pgdg 1.6.9 906.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-14-pljava_1.6.9-1.pgdg120+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pljava postgresql-14-pljava_1.6.9-1.pgdg130+1_amd64.deb pgdg 1.6.9 910.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-14-pljava_1.6.9-1.pgdg130+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pljava postgresql-14-pljava_1.6.9-1.pgdg130+1_arm64.deb pgdg 1.6.9 906.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-14-pljava_1.6.9-1.pgdg130+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pljava postgresql-14-pljava_1.6.9-1.pgdg22.04+1_amd64.deb pgdg 1.6.9 901.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-14-pljava_1.6.9-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pljava postgresql-14-pljava_1.6.9-1.pgdg22.04+1_arm64.deb pgdg 1.6.9 897.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-14-pljava_1.6.9-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pljava postgresql-14-pljava_1.6.9-1.pgdg24.04+1_amd64.deb pgdg 1.6.9 908.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-14-pljava_1.6.9-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pljava postgresql-14-pljava_1.6.9-1.pgdg24.04+1_arm64.deb pgdg 1.6.9 904.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pljava/postgresql-14-pljava_1.6.9-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pljava` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pljava;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pljava -v 18  # PG 18
pig ext install -y pljava -v 17  # PG 17
pig ext install -y pljava -v 16  # PG 16
pig ext install -y pljava -v 15  # PG 15
pig ext install -y pljava -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pljava_18       # PG 18
dnf install -y pljava_17       # PG 17
dnf install -y pljava_16       # PG 16
dnf install -y pljava_15       # PG 15
dnf install -y pljava_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pljava   # PG 18
apt install -y postgresql-17-pljava   # PG 17
apt install -y postgresql-16-pljava   # PG 16
apt install -y postgresql-15-pljava   # PG 15
apt install -y postgresql-14-pljava   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pljava;
```



## 用法

> [pljava: PL/Java 过程语言](https://github.com/tada/pljava)

`pljava` 允许使用标准 JDBC API 在 PostgreSQL 中编写 Java 函数、触发器和类型。

```sql
CREATE EXTENSION pljava;
```

### 部署 Java 代码

将 Java 类打包到包含 SQLJ 部署描述符的 JAR 文件中，然后安装：

```sql
SELECT sqlj.install_jar('file:///path/to/my_functions.jar', 'myjar', true);
SELECT sqlj.set_classpath('public', 'myjar');
```

### 创建函数

编写包含静态方法的 Java 类：

```java
package com.example;

import org.postgresql.pljava.annotation.Function;

public class MyFunctions {
    @Function
    public static int add(int a, int b) {
        return a + b;
    }

    @Function
    public static String hello(String name) {
        return "Hello, " + name + "!";
    }
}
```

声明 SQL 函数映射：

```sql
CREATE FUNCTION add(int, int) RETURNS int
  AS 'com.example.MyFunctions.add'
  LANGUAGE java;

CREATE FUNCTION hello(varchar) RETURNS varchar
  AS 'com.example.MyFunctions.hello'
  LANGUAGE java;
```

### 集合返回函数

实现 `ResultSetProvider` 接口以创建集合返回函数：

```java
import org.postgresql.pljava.ResultSetProvider;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MySetFunction implements ResultSetProvider {
    public boolean assignRowValues(ResultSet receiver, int currentRow)
            throws SQLException {
        if (currentRow < 10) {
            receiver.updateInt(1, currentRow);
            receiver.updateString(2, "row " + currentRow);
            return true;
        }
        return false;
    }

    public void close() {}

    public static ResultSetProvider generate()
            throws SQLException {
        return new MySetFunction();
    }
}
```

### 触发器函数

```java
import org.postgresql.pljava.TriggerData;
import org.postgresql.pljava.annotation.Trigger;

public class MyTrigger {
    @Trigger(called = Trigger.Called.BEFORE, table = "my_table",
             events = {Trigger.Event.INSERT, Trigger.Event.UPDATE})
    public static void auditTrigger(TriggerData td) throws SQLException {
        ResultSet newRow = td.getNew();
        newRow.updateTimestamp("modified_at",
            new java.sql.Timestamp(System.currentTimeMillis()));
    }
}
```

### 通过 JDBC 访问数据库

```java
import java.sql.*;

public static int countUsers() throws SQLException {
    Connection conn = DriverManager.getConnection("jdbc:default:connection");
    PreparedStatement stmt = conn.prepareStatement("SELECT count(*) FROM users");
    ResultSet rs = stmt.executeQuery();
    rs.next();
    return rs.getInt(1);
}
```

### JAR 管理

```sql
SELECT sqlj.install_jar('file:///path/to/jar', 'jarname', true);
SELECT sqlj.replace_jar('file:///path/to/new.jar', 'jarname', true);
SELECT sqlj.remove_jar('jarname', true);
SELECT sqlj.set_classpath('schemaname', 'jar1:jar2');
SELECT sqlj.get_classpath('schemaname');
```

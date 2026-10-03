---
title: "credcheck"
linkTitle: "credcheck"
description: "明文凭证检查器"
weight: 7310
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/HexaCluster/credcheck">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">HexaCluster/credcheck</div>
    <div class="ext-card__desc">https://github.com/HexaCluster/credcheck</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`credcheck`**](/ext/e/credcheck) | `5.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7310  | [**`credcheck`**](/ext/e/credcheck) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_pwhash`](/ext/e/pg_pwhash) [`passwordcheck`](/ext/e/passwordcheck) [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) [`passwordpolicy`](/ext/e/passwordpolicy) [`chkpass`](/ext/e/chkpass) [`pg_enigma`](/ext/e/pg_enigma) [`column_encrypt`](/ext/e/column_encrypt) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.0` | {{< pgvers "18,17,16,15,14" >}} | `credcheck` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.7` | {{< pgvers "18,17,16,15,14" >}} | `credcheck_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-credcheck` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.7 8 | AVAIL PGDG 4.7 9 | AVAIL PGDG 4.7 12 | AVAIL PGDG 4.7 17 | AVAIL PGDG 4.7 17 |
| el8.aarch64 | AVAIL PGDG 4.7 8 | AVAIL PGDG 4.7 9 | AVAIL PGDG 4.7 12 | AVAIL PGDG 4.7 17 | AVAIL PGDG 4.7 17 |
| el9.x86_64 | AVAIL PGDG 4.7 14 | AVAIL PGDG 4.7 15 | AVAIL PGDG 4.7 18 | AVAIL PGDG 4.7 23 | AVAIL PGDG 4.7 22 |
| el9.aarch64 | AVAIL PGDG 4.7 14 | AVAIL PGDG 4.7 15 | AVAIL PGDG 4.7 18 | AVAIL PGDG 4.7 23 | AVAIL PGDG 4.7 23 |
| el10.x86_64 | AVAIL PGDG 4.7 13 | AVAIL PGDG 4.7 13 | AVAIL PGDG 4.7 13 | AVAIL PGDG 4.7 13 | AVAIL PGDG 4.7 13 |
| el10.aarch64 | AVAIL PGDG 4.7 14 | AVAIL PGDG 4.7 14 | AVAIL PGDG 4.7 14 | AVAIL PGDG 4.7 14 | AVAIL PGDG 4.7 14 |
| d12.x86_64 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 |
| d12.aarch64 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 |
| d13.x86_64 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 |
| d13.aarch64 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 |
| u22.x86_64 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 |
| u22.aarch64 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 |
| u24.x86_64 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 |
| u24.aarch64 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 |
| u26.x86_64 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 |
| u26.aarch64 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 | AVAIL PGDG 5.0 3 |
@ el8.x86_64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7 42.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel8.x86_64.rpm pgdg 3.0 35.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/credcheck_18-3.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel8.aarch64.rpm pgdg 3.0 35.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/credcheck_18-3.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel9.8.x86_64.rpm pgdg 4.7 41.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7 41.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.7-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel9.6.x86_64.rpm pgdg 4.7 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.7-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel9.6.x86_64.rpm pgdg 4.6 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel9.6.x86_64.rpm pgdg 4.5 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel9.6.x86_64.rpm pgdg 4.4 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 4.3 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel9.x86_64.rpm pgdg 3.0 35.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/credcheck_18-3.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel9.8.aarch64.rpm pgdg 4.7 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.7-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel9.6.aarch64.rpm pgdg 4.7 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.7-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel9.6.aarch64.rpm pgdg 4.6 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.6-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel9.6.aarch64.rpm pgdg 4.5 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel9.6.aarch64.rpm pgdg 4.4 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 4.3 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel9.aarch64.rpm pgdg 3.0 35.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/credcheck_18-3.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel10.2.x86_64.rpm pgdg 4.7 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.7-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel10.0.x86_64.rpm pgdg 4.7 42.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.7-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel10.0.x86_64.rpm pgdg 4.6 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel10.0.x86_64.rpm pgdg 4.5 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel10.0.x86_64.rpm pgdg 4.4 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.4-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 4.3 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/credcheck_18-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel10.2.aarch64.rpm pgdg 4.7 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.7-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.7-1PGDG.rhel10.0.aarch64.rpm pgdg 4.7 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.7-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.6-1PGDG.rhel10.0.aarch64.rpm pgdg 4.6 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.5-1PGDG.rhel10.0.aarch64.rpm pgdg 4.5 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.5-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.4-1PGDG.rhel10.0.aarch64.rpm pgdg 4.4 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.4-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.3-1PGDG.rhel10.0.aarch64.rpm pgdg 4.3 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 credcheck_18 credcheck_18-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/credcheck_18-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg12+2_amd64.deb pgdg 5.0 80.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg12+2_amd64.deb
@ d12.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg12+1_amd64.deb pgdg 5.0 80.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-1.pgdg12+1_amd64.deb pgdg 5.0 80.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg12+2_arm64.deb pgdg 5.0 79.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg12+2_arm64.deb
@ d12.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg12+1_arm64.deb pgdg 5.0 79.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-1.pgdg12+1_arm64.deb pgdg 5.0 79.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg13+2_amd64.deb pgdg 5.0 80.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg13+2_amd64.deb
@ d13.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg13+1_amd64.deb pgdg 5.0 80.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-1.pgdg13+1_amd64.deb pgdg 5.0 80.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg13+2_arm64.deb pgdg 5.0 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg13+2_arm64.deb
@ d13.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg13+1_arm64.deb pgdg 5.0 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-1.pgdg13+1_arm64.deb pgdg 5.0 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg22.04+2_amd64.deb pgdg 5.0 74.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg22.04+2_amd64.deb
@ u22.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg22.04+1_amd64.deb pgdg 5.0 74.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-1.pgdg22.04+1_amd64.deb pgdg 5.0 74.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg22.04+2_arm64.deb pgdg 5.0 73.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg22.04+2_arm64.deb
@ u22.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg22.04+1_arm64.deb pgdg 5.0 73.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-1.pgdg22.04+1_arm64.deb pgdg 5.0 73.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg24.04+2_amd64.deb pgdg 5.0 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg24.04+2_amd64.deb
@ u24.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg24.04+1_amd64.deb pgdg 5.0 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-1.pgdg24.04+1_amd64.deb pgdg 5.0 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg24.04+2_arm64.deb pgdg 5.0 72.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg24.04+2_arm64.deb
@ u24.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg24.04+1_arm64.deb pgdg 5.0 72.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-1.pgdg24.04+1_arm64.deb pgdg 5.0 72.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg26.04+2_amd64.deb pgdg 5.0 73.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg26.04+2_amd64.deb
@ u26.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg26.04+1_amd64.deb pgdg 5.0 73.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-1.pgdg26.04+1_amd64.deb pgdg 5.0 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg26.04+2_arm64.deb pgdg 5.0 72.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg26.04+2_arm64.deb
@ u26.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-2.pgdg26.04+1_arm64.deb pgdg 5.0 72.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-credcheck postgresql-18-credcheck_5.0-1.pgdg26.04+1_arm64.deb pgdg 5.0 72.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-18-credcheck_5.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7 42.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel8.x86_64.rpm pgdg 2.8 35.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/credcheck_17-2.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel8.aarch64.rpm pgdg 2.8 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/credcheck_17-2.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel9.8.x86_64.rpm pgdg 4.7 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.7-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel9.6.x86_64.rpm pgdg 4.7 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.7-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel9.6.x86_64.rpm pgdg 4.6 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel9.6.x86_64.rpm pgdg 4.5 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel9.6.x86_64.rpm pgdg 4.4 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 4.3 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 35.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel9.x86_64.rpm pgdg 2.8 35.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/credcheck_17-2.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel9.8.aarch64.rpm pgdg 4.7 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.7-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel9.6.aarch64.rpm pgdg 4.7 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.7-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel9.6.aarch64.rpm pgdg 4.6 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.6-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel9.6.aarch64.rpm pgdg 4.5 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel9.6.aarch64.rpm pgdg 4.4 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 4.3 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 credcheck_17 credcheck_17-2.8-1PGDG.rhel9.aarch64.rpm pgdg 2.8 35.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/credcheck_17-2.8-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel10.2.x86_64.rpm pgdg 4.7 41.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7 41.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.7-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel10.0.x86_64.rpm pgdg 4.7 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.7-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel10.0.x86_64.rpm pgdg 4.6 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel10.0.x86_64.rpm pgdg 4.5 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel10.0.x86_64.rpm pgdg 4.4 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.4-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 4.3 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 credcheck_17 credcheck_17-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/credcheck_17-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel10.2.aarch64.rpm pgdg 4.7 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.7-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.7-1PGDG.rhel10.0.aarch64.rpm pgdg 4.7 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.7-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.6-1PGDG.rhel10.0.aarch64.rpm pgdg 4.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.5-1PGDG.rhel10.0.aarch64.rpm pgdg 4.5 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.5-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.4-1PGDG.rhel10.0.aarch64.rpm pgdg 4.4 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.4-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.3-1PGDG.rhel10.0.aarch64.rpm pgdg 4.3 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 credcheck_17 credcheck_17-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/credcheck_17-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg12+2_amd64.deb pgdg 5.0 80.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg12+2_amd64.deb
@ d12.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg12+1_amd64.deb pgdg 5.0 80.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-1.pgdg12+1_amd64.deb pgdg 5.0 80.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg12+2_arm64.deb pgdg 5.0 79.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg12+2_arm64.deb
@ d12.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg12+1_arm64.deb pgdg 5.0 79.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-1.pgdg12+1_arm64.deb pgdg 5.0 79.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg13+2_amd64.deb pgdg 5.0 80.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg13+2_amd64.deb
@ d13.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg13+1_amd64.deb pgdg 5.0 81.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-1.pgdg13+1_amd64.deb pgdg 5.0 80.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg13+2_arm64.deb pgdg 5.0 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg13+2_arm64.deb
@ d13.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg13+1_arm64.deb pgdg 5.0 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-1.pgdg13+1_arm64.deb pgdg 5.0 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg22.04+2_amd64.deb pgdg 5.0 81.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg22.04+2_amd64.deb
@ u22.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg22.04+1_amd64.deb pgdg 5.0 81.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-1.pgdg22.04+1_amd64.deb pgdg 5.0 81.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg22.04+2_arm64.deb pgdg 5.0 80.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg22.04+2_arm64.deb
@ u22.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg22.04+1_arm64.deb pgdg 5.0 80.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-1.pgdg22.04+1_arm64.deb pgdg 5.0 80.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg24.04+2_amd64.deb pgdg 5.0 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg24.04+2_amd64.deb
@ u24.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg24.04+1_amd64.deb pgdg 5.0 74.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-1.pgdg24.04+1_amd64.deb pgdg 5.0 74.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg24.04+2_arm64.deb pgdg 5.0 72.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg24.04+2_arm64.deb
@ u24.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg24.04+1_arm64.deb pgdg 5.0 72.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-1.pgdg24.04+1_arm64.deb pgdg 5.0 72.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg26.04+2_amd64.deb pgdg 5.0 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg26.04+2_amd64.deb
@ u26.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg26.04+1_amd64.deb pgdg 5.0 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-1.pgdg26.04+1_amd64.deb pgdg 5.0 73.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg26.04+2_arm64.deb pgdg 5.0 71.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg26.04+2_arm64.deb
@ u26.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-2.pgdg26.04+1_arm64.deb pgdg 5.0 71.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-credcheck postgresql-17-credcheck_5.0-1.pgdg26.04+1_arm64.deb pgdg 5.0 71.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-17-credcheck_5.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7 42.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 34.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 31.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/credcheck_16-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 33.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 32.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 31.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/credcheck_16-2.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel9.8.x86_64.rpm pgdg 4.7 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.7-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel9.6.x86_64.rpm pgdg 4.7 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.7-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel9.6.x86_64.rpm pgdg 4.6 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel9.6.x86_64.rpm pgdg 4.5 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel9.6.x86_64.rpm pgdg 4.4 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 4.3 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 36.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 35.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel9.x86_64.rpm pgdg 2.6 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 32.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/credcheck_16-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel9.8.aarch64.rpm pgdg 4.7 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.7-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel9.6.aarch64.rpm pgdg 4.7 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.7-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel9.6.aarch64.rpm pgdg 4.6 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.6-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel9.6.aarch64.rpm pgdg 4.5 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel9.6.aarch64.rpm pgdg 4.4 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 4.3 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 34.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 34.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 credcheck_16 credcheck_16-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 31.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/credcheck_16-2.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel10.2.x86_64.rpm pgdg 4.7 41.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7 41.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.7-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel10.0.x86_64.rpm pgdg 4.7 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.7-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel10.0.x86_64.rpm pgdg 4.6 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel10.0.x86_64.rpm pgdg 4.5 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel10.0.x86_64.rpm pgdg 4.4 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.4-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 4.3 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 credcheck_16 credcheck_16-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/credcheck_16-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel10.2.aarch64.rpm pgdg 4.7 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.7-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.7-1PGDG.rhel10.0.aarch64.rpm pgdg 4.7 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.7-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.6-1PGDG.rhel10.0.aarch64.rpm pgdg 4.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.5-1PGDG.rhel10.0.aarch64.rpm pgdg 4.5 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.5-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.4-1PGDG.rhel10.0.aarch64.rpm pgdg 4.4 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.4-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.3-1PGDG.rhel10.0.aarch64.rpm pgdg 4.3 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 credcheck_16 credcheck_16-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/credcheck_16-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg12+2_amd64.deb pgdg 5.0 80.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg12+2_amd64.deb
@ d12.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg12+1_amd64.deb pgdg 5.0 80.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-1.pgdg12+1_amd64.deb pgdg 5.0 80.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg12+2_arm64.deb pgdg 5.0 79.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg12+2_arm64.deb
@ d12.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg12+1_arm64.deb pgdg 5.0 79.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-1.pgdg12+1_arm64.deb pgdg 5.0 79.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg13+2_amd64.deb pgdg 5.0 80.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg13+2_amd64.deb
@ d13.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg13+1_amd64.deb pgdg 5.0 80.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-1.pgdg13+1_amd64.deb pgdg 5.0 80.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg13+2_arm64.deb pgdg 5.0 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg13+2_arm64.deb
@ d13.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg13+1_arm64.deb pgdg 5.0 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-1.pgdg13+1_arm64.deb pgdg 5.0 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg22.04+2_amd64.deb pgdg 5.0 81.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg22.04+2_amd64.deb
@ u22.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg22.04+1_amd64.deb pgdg 5.0 81.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-1.pgdg22.04+1_amd64.deb pgdg 5.0 81.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg22.04+2_arm64.deb pgdg 5.0 80.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg22.04+2_arm64.deb
@ u22.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg22.04+1_arm64.deb pgdg 5.0 80.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-1.pgdg22.04+1_arm64.deb pgdg 5.0 80.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg24.04+2_amd64.deb pgdg 5.0 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg24.04+2_amd64.deb
@ u24.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg24.04+1_amd64.deb pgdg 5.0 74.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-1.pgdg24.04+1_amd64.deb pgdg 5.0 73.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg24.04+2_arm64.deb pgdg 5.0 72.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg24.04+2_arm64.deb
@ u24.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg24.04+1_arm64.deb pgdg 5.0 72.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-1.pgdg24.04+1_arm64.deb pgdg 5.0 72.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg26.04+2_amd64.deb pgdg 5.0 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg26.04+2_amd64.deb
@ u26.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg26.04+1_amd64.deb pgdg 5.0 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-1.pgdg26.04+1_amd64.deb pgdg 5.0 73.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg26.04+2_arm64.deb pgdg 5.0 71.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg26.04+2_arm64.deb
@ u26.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-2.pgdg26.04+1_arm64.deb pgdg 5.0 71.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-credcheck postgresql-16-credcheck_5.0-1.pgdg26.04+1_arm64.deb pgdg 5.0 71.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-16-credcheck_5.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7 42.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 34.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 34.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 33.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 31.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-2.0-1.rhel8.x86_64.rpm pgdg 2.0 31.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-1.2-1.rhel8.x86_64.rpm pgdg 1.2 27.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-1.0-1.rhel8.x86_64.rpm pgdg 1.0 27.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-1.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-0.2.0-3.rhel8.x86_64.rpm pgdg 0.2.0 18.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-0.2.0-3.rhel8.x86_64.rpm
@ el8.x86_64 15 credcheck_15 credcheck_15-0.2.0-1.rhel8.x86_64.rpm pgdg 0.2.0 35.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/credcheck_15-0.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 34.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 33.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 32.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 31.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-2.0-1.rhel8.aarch64.rpm pgdg 2.0 30.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-1.2-1.rhel8.aarch64.rpm pgdg 1.2 27.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-1.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-1.0-1.rhel8.aarch64.rpm pgdg 1.0 26.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-1.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-0.2.0-3.rhel8.aarch64.rpm pgdg 0.2.0 18.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-0.2.0-3.rhel8.aarch64.rpm
@ el8.aarch64 15 credcheck_15 credcheck_15-0.2.0-1.rhel8.aarch64.rpm pgdg 0.2.0 34.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/credcheck_15-0.2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel9.8.x86_64.rpm pgdg 4.7 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.7-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel9.6.x86_64.rpm pgdg 4.7 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.7-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel9.6.x86_64.rpm pgdg 4.6 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel9.6.x86_64.rpm pgdg 4.5 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel9.6.x86_64.rpm pgdg 4.4 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 4.3 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 36.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 35.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel9.x86_64.rpm pgdg 2.6 34.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 32.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-2.0-1.rhel9.x86_64.rpm pgdg 2.0 31.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-1.2-1.rhel9.x86_64.rpm pgdg 1.2 28.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-1.0-1.rhel9.x86_64.rpm pgdg 1.0 27.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-1.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-0.2.0-3.rhel9.x86_64.rpm pgdg 0.2.0 18.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-0.2.0-3.rhel9.x86_64.rpm
@ el9.x86_64 15 credcheck_15 credcheck_15-0.2.0-1.rhel9.x86_64.rpm pgdg 0.2.0 35.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/credcheck_15-0.2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel9.8.aarch64.rpm pgdg 4.7 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.7-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel9.6.aarch64.rpm pgdg 4.7 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.7-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel9.6.aarch64.rpm pgdg 4.6 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.6-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel9.6.aarch64.rpm pgdg 4.5 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel9.6.aarch64.rpm pgdg 4.4 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 4.3 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 34.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 34.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 31.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-2.0-1.rhel9.aarch64.rpm pgdg 2.0 30.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-1.2-1.rhel9.aarch64.rpm pgdg 1.2 27.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-1.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-1.0-1.rhel9.aarch64.rpm pgdg 1.0 26.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-1.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-0.2.0-3.rhel9.aarch64.rpm pgdg 0.2.0 18.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-0.2.0-3.rhel9.aarch64.rpm
@ el9.aarch64 15 credcheck_15 credcheck_15-0.2.0-1.rhel9.aarch64.rpm pgdg 0.2.0 35.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/credcheck_15-0.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel10.2.x86_64.rpm pgdg 4.7 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.7-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel10.0.x86_64.rpm pgdg 4.7 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.7-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel10.0.x86_64.rpm pgdg 4.6 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel10.0.x86_64.rpm pgdg 4.5 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel10.0.x86_64.rpm pgdg 4.4 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.4-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 4.3 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 credcheck_15 credcheck_15-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/credcheck_15-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel10.2.aarch64.rpm pgdg 4.7 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.7-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.7-1PGDG.rhel10.0.aarch64.rpm pgdg 4.7 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.7-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.6-1PGDG.rhel10.0.aarch64.rpm pgdg 4.6 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.5-1PGDG.rhel10.0.aarch64.rpm pgdg 4.5 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.5-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.4-1PGDG.rhel10.0.aarch64.rpm pgdg 4.4 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.4-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.3-1PGDG.rhel10.0.aarch64.rpm pgdg 4.3 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 credcheck_15 credcheck_15-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/credcheck_15-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg12+2_amd64.deb pgdg 5.0 80.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg12+2_amd64.deb
@ d12.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg12+1_amd64.deb pgdg 5.0 80.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-1.pgdg12+1_amd64.deb pgdg 5.0 80.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg12+2_arm64.deb pgdg 5.0 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg12+2_arm64.deb
@ d12.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg12+1_arm64.deb pgdg 5.0 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-1.pgdg12+1_arm64.deb pgdg 5.0 79.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg13+2_amd64.deb pgdg 5.0 80.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg13+2_amd64.deb
@ d13.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg13+1_amd64.deb pgdg 5.0 80.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-1.pgdg13+1_amd64.deb pgdg 5.0 80.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg13+2_arm64.deb pgdg 5.0 79.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg13+2_arm64.deb
@ d13.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg13+1_arm64.deb pgdg 5.0 79.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-1.pgdg13+1_arm64.deb pgdg 5.0 79.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg22.04+2_amd64.deb pgdg 5.0 81.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg22.04+2_amd64.deb
@ u22.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg22.04+1_amd64.deb pgdg 5.0 81.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-1.pgdg22.04+1_amd64.deb pgdg 5.0 81.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg22.04+2_arm64.deb pgdg 5.0 79.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg22.04+2_arm64.deb
@ u22.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg22.04+1_arm64.deb pgdg 5.0 79.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-1.pgdg22.04+1_arm64.deb pgdg 5.0 79.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg24.04+2_amd64.deb pgdg 5.0 73.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg24.04+2_amd64.deb
@ u24.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg24.04+1_amd64.deb pgdg 5.0 73.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-1.pgdg24.04+1_amd64.deb pgdg 5.0 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg24.04+2_arm64.deb pgdg 5.0 72.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg24.04+2_arm64.deb
@ u24.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg24.04+1_arm64.deb pgdg 5.0 72.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-1.pgdg24.04+1_arm64.deb pgdg 5.0 72.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg26.04+2_amd64.deb pgdg 5.0 73.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg26.04+2_amd64.deb
@ u26.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg26.04+1_amd64.deb pgdg 5.0 73.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-1.pgdg26.04+1_amd64.deb pgdg 5.0 73.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg26.04+2_arm64.deb pgdg 5.0 71.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg26.04+2_arm64.deb
@ u26.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-2.pgdg26.04+1_arm64.deb pgdg 5.0 71.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-credcheck postgresql-15-credcheck_5.0-1.pgdg26.04+1_arm64.deb pgdg 5.0 71.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-15-credcheck_5.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7 42.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.5 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.4 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 4.3 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel8.x86_64.rpm pgdg 4.1 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 35.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 34.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel8.x86_64.rpm pgdg 2.6 34.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1 31.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-2.0-1.rhel8.x86_64.rpm pgdg 2.0 31.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-1.2-1.rhel8.x86_64.rpm pgdg 1.2 27.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-1.0-1.rhel8.x86_64.rpm pgdg 1.0 27.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-1.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-0.2.0-3.rhel8.x86_64.rpm pgdg 0.2.0 18.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-0.2.0-3.rhel8.x86_64.rpm
@ el8.x86_64 14 credcheck_14 credcheck_14-0.2.0-1.rhel8.x86_64.rpm pgdg 0.2.0 35.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/credcheck_14-0.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.5 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.4 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 4.3 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel8.aarch64.rpm pgdg 4.1 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 35.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 34.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel8.aarch64.rpm pgdg 2.6 33.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 32.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1 31.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-2.0-1.rhel8.aarch64.rpm pgdg 2.0 30.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-1.2-1.rhel8.aarch64.rpm pgdg 1.2 27.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-1.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-1.0-1.rhel8.aarch64.rpm pgdg 1.0 26.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-1.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-0.2.0-3.rhel8.aarch64.rpm pgdg 0.2.0 18.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-0.2.0-3.rhel8.aarch64.rpm
@ el8.aarch64 14 credcheck_14 credcheck_14-0.2.0-1.rhel8.aarch64.rpm pgdg 0.2.0 34.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/credcheck_14-0.2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel9.8.x86_64.rpm pgdg 4.7 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.7-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel9.6.x86_64.rpm pgdg 4.7 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.7-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel9.6.x86_64.rpm pgdg 4.6 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.5 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel9.6.x86_64.rpm pgdg 4.5 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.4 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel9.6.x86_64.rpm pgdg 4.4 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 4.3 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 4.3 40.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel9.x86_64.rpm pgdg 4.1 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 36.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 35.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel9.x86_64.rpm pgdg 2.6 34.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1 32.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-2.0-1.rhel9.x86_64.rpm pgdg 2.0 31.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-1.2-1.rhel9.x86_64.rpm pgdg 1.2 28.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-1.0-1.rhel9.x86_64.rpm pgdg 1.0 27.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-1.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 credcheck_14 credcheck_14-0.2.0-3.rhel9.x86_64.rpm pgdg 0.2.0 18.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/credcheck_14-0.2.0-3.rhel9.x86_64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel9.8.aarch64.rpm pgdg 4.7 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.7-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel9.6.aarch64.rpm pgdg 4.7 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.7-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel9.6.aarch64.rpm pgdg 4.6 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.6-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.5 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel9.6.aarch64.rpm pgdg 4.5 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.4 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel9.6.aarch64.rpm pgdg 4.4 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 4.3 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 4.3 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel9.aarch64.rpm pgdg 4.1 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 35.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 34.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.6-1PGDG.rhel9.aarch64.rpm pgdg 2.6 34.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1 31.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-2.0-1.rhel9.aarch64.rpm pgdg 2.0 30.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-1.2-1.rhel9.aarch64.rpm pgdg 1.2 27.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-1.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-1.0-1.rhel9.aarch64.rpm pgdg 1.0 26.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-1.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-0.2.0-3.rhel9.aarch64.rpm pgdg 0.2.0 18.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-0.2.0-3.rhel9.aarch64.rpm
@ el9.aarch64 14 credcheck_14 credcheck_14-0.2.0-1.rhel9.aarch64.rpm pgdg 0.2.0 35.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/credcheck_14-0.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel10.2.x86_64.rpm pgdg 4.7 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.7-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel10.0.x86_64.rpm pgdg 4.7 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.7-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel10.0.x86_64.rpm pgdg 4.6 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.5 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel10.0.x86_64.rpm pgdg 4.5 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel10.1.x86_64.rpm pgdg 4.4 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel10.0.x86_64.rpm pgdg 4.4 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.4-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 4.3 40.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 4.3 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel10.x86_64.rpm pgdg 4.2 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 credcheck_14 credcheck_14-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 36.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/credcheck_14-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel10.2.aarch64.rpm pgdg 4.7 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.7-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.7-1PGDG.rhel10.0.aarch64.rpm pgdg 4.7 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.7-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6 40.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.6-1PGDG.rhel10.0.aarch64.rpm pgdg 4.6 40.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.5 40.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.5-1PGDG.rhel10.0.aarch64.rpm pgdg 4.5 40.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.5-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel10.1.aarch64.rpm pgdg 4.4 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.4-1PGDG.rhel10.0.aarch64.rpm pgdg 4.4 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.4-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 4.3 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.3-1PGDG.rhel10.0.aarch64.rpm pgdg 4.3 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.2-1PGDG.rhel10.aarch64.rpm pgdg 4.2 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-4.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 credcheck_14 credcheck_14-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 36.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/credcheck_14-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg12+2_amd64.deb pgdg 5.0 75.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg12+2_amd64.deb
@ d12.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg12+1_amd64.deb pgdg 5.0 75.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-1.pgdg12+1_amd64.deb pgdg 5.0 75.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg12+2_arm64.deb pgdg 5.0 74.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg12+2_arm64.deb
@ d12.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg12+1_arm64.deb pgdg 5.0 74.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-1.pgdg12+1_arm64.deb pgdg 5.0 74.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg13+2_amd64.deb pgdg 5.0 75.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg13+2_amd64.deb
@ d13.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg13+1_amd64.deb pgdg 5.0 75.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-1.pgdg13+1_amd64.deb pgdg 5.0 75.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg13+2_arm64.deb pgdg 5.0 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg13+2_arm64.deb
@ d13.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg13+1_arm64.deb pgdg 5.0 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-1.pgdg13+1_arm64.deb pgdg 5.0 74.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg22.04+2_amd64.deb pgdg 5.0 75.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg22.04+2_amd64.deb
@ u22.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg22.04+1_amd64.deb pgdg 5.0 75.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-1.pgdg22.04+1_amd64.deb pgdg 5.0 75.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg22.04+2_arm64.deb pgdg 5.0 74.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg22.04+2_arm64.deb
@ u22.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg22.04+1_arm64.deb pgdg 5.0 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-1.pgdg22.04+1_arm64.deb pgdg 5.0 74.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg24.04+2_amd64.deb pgdg 5.0 69.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg24.04+2_amd64.deb
@ u24.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg24.04+1_amd64.deb pgdg 5.0 69.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-1.pgdg24.04+1_amd64.deb pgdg 5.0 68.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg24.04+2_arm64.deb pgdg 5.0 67.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg24.04+2_arm64.deb
@ u24.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg24.04+1_arm64.deb pgdg 5.0 67.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-1.pgdg24.04+1_arm64.deb pgdg 5.0 67.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg26.04+2_amd64.deb pgdg 5.0 68.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg26.04+2_amd64.deb
@ u26.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg26.04+1_amd64.deb pgdg 5.0 68.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-1.pgdg26.04+1_amd64.deb pgdg 5.0 68.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg26.04+2_arm64.deb pgdg 5.0 66.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg26.04+2_arm64.deb
@ u26.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-2.pgdg26.04+1_arm64.deb pgdg 5.0 66.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-credcheck postgresql-14-credcheck_5.0-1.pgdg26.04+1_arm64.deb pgdg 5.0 66.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/c/credcheck/postgresql-14-credcheck_5.0-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `credcheck` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install credcheck;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y credcheck -v 18  # PG 18
pig ext install -y credcheck -v 17  # PG 17
pig ext install -y credcheck -v 16  # PG 16
pig ext install -y credcheck -v 15  # PG 15
pig ext install -y credcheck -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y credcheck_18       # PG 18
dnf install -y credcheck_17       # PG 17
dnf install -y credcheck_16       # PG 16
dnf install -y credcheck_15       # PG 15
dnf install -y credcheck_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-credcheck   # PG 18
apt install -y postgresql-17-credcheck   # PG 17
apt install -y postgresql-16-credcheck   # PG 16
apt install -y postgresql-15-credcheck   # PG 15
apt install -y postgresql-14-credcheck   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'credcheck';
```


**创建扩展**：

```sql
CREATE EXTENSION credcheck;
```

## 用法

来源：

- [v5.0 README](https://github.com/HexaCluster/credcheck/blob/v5.0/README.md)
- [v5.0 changelog](https://github.com/HexaCluster/credcheck/blob/v5.0/ChangeLog)
- [SQL objects 5.0.0](https://github.com/HexaCluster/credcheck/blob/v5.0/sql/credcheck--5.0.0.sql)
- [Password history WAL implementation](https://github.com/HexaCluster/credcheck/blob/v5.0/credcheck.c)
- [Login-event setup](https://github.com/HexaCluster/credcheck/blob/v5.0/event_trigger.sql)

`credcheck` 在角色创建、密码修改和角色重命名时检查用户名与明文密码，还能限制密码重用、封禁多次认证失败的用户，并要求首次登录修改密码。策略由超级用户配置；默认值不构成完整的密码强度策略。

### 启用和设置策略

将库加入现有预加载列表并重启 PostgreSQL。在管理员需要视图和重置函数的各数据库中安装 SQL 对象：

```ini
shared_preload_libraries = 'credcheck'
credcheck.password_min_length = 12
credcheck.password_contain_username = on
credcheck.password_reuse_history = 2
credcheck.password_reuse_interval = 365
```

```sql
CREATE EXTENSION credcheck;
CREATE ROLE app_user LOGIN PASSWORD 'example-Strong-Pass#123';
SELECT rolename, password_date FROM pg_password_history;
```

时间间隔单位为天。安装 SQL 扩展与加载服务器范围的钩子是两个步骤。上游发布版 5.0 使用 SQL 扩展版本 5.0.0；安装升级文件后需要重启，以重新加载库。

### 策略索引

| 配置项 | 用途 |
|---|---|
| `credcheck.username_min_length`、`credcheck.username_min_special`、`credcheck.username_min_digit`、`credcheck.username_min_upper`、`credcheck.username_min_lower` | 用户名长度和字符要求 |
| `credcheck.password_min_length`、`credcheck.password_min_special`、`credcheck.password_min_digit`、`credcheck.password_min_upper`、`credcheck.password_min_lower` | 密码长度和字符要求 |
| `credcheck.username_min_repeat`、`credcheck.password_min_repeat` | 限制相邻重复次数，参数名称虽然含有 min，但实际表示最大次数 |
| `credcheck.username_contain`、`credcheck.username_not_contain`、`credcheck.password_contain`、`credcheck.password_not_contain` | 必须包含或不得包含的内容 |
| `credcheck.username_contain_password`、`credcheck.password_contain_username` | 拒绝相互包含的凭证 |
| `credcheck.username_ignore_case`、`credcheck.password_ignore_case` | 大小写处理 |
| `credcheck.password_min_length_su`、`credcheck.password_valid_until_su` | 单独的超级用户要求 |
| `credcheck.password_valid_until`、`credcheck.password_valid_max` | 密码有效期的最小和最大天数；修改密码但未指定到期日时，最小值还会自动设置到期日 |
| `credcheck.whitelist`、`credcheck.superuser_nocheck` | 明确的策略豁免 |
| `credcheck.no_password_logging` | 在策略错误日志中隐藏密码，默认启用 |

CrackLib 强度检查仅在库编译时启用相应支持且字典可用时生效。

### 密码历史与复制

历史记录保存 SHA-256 密码散列，在数据库间共享，并持久化到 `$PGDATA/pg_password_history`。应将该文件纳入备份，并保护 SQL 历史视图的访问权限；该视图默认向 PUBLIC 授予查询权限。`credcheck.history_max_size` 改变共享内存容量，需要重启。

5.0 在 PostgreSQL 15 及以上通过编号 150 的自定义 WAL 资源管理器复制历史变化。重放这些 WAL 的副本和恢复服务器应预加载匹配的库。较早 PostgreSQL 版本保留文件持久化历史，但没有这项复制支持。历史重置和时间戳测试函数在恢复期间拒绝执行。

```sql
SELECT pg_password_history_reset('app_user');
```

重置历史会移除相应记录的密码重用保护，应仅由管理员操作。

### 认证与密码修改

```ini
credcheck.max_auth_failure = 3
credcheck.auth_delay_ms = 1000
credcheck.whitelist_auth_failure = 'service_user'
credcheck.password_change_first_login = true
```

```sql
SELECT * FROM pg_banned_role;
SELECT pg_banned_role_reset('app_user');
ALTER ROLE app_user SET credcheck_internal.force_change_password = true;
```

封禁持续到记录被重置，其缓存会在重启时丢失。`credcheck.reset_superuser` 提供上游说明的超级用户恢复入口；`credcheck.auth_failure_cache_size` 需要重启。

禁止修改密码的实际参数是 `credcheck.disallow_change_password`。超级用户也受其影响，除非在会话中启用 `credcheck.superuser_nocheck`。这个豁免会绕过相应的全部角色检查，应严格控制。

`credcheck.password_valid_warning` 要求 PostgreSQL 17 及以上，并需在每个相关数据库单独安装官方登录事件触发器；创建 SQL 扩展不会安装该触发器。

### 明文边界

强度与重用检查需要在修改密码时获得明文。默认拒绝已计算散列的密码，包括 psql 的 `\password` 提交的密码。启用 `credcheck.encrypted_password_allowed` 可以接受它们，但不会提供等效的明文检查。应保护密码修改连接，也不要假设扩展会追溯扫描已有凭证。创建无密码角色，或重命名没有密码的角色时，会跳过用户名检查。

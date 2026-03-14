---
title: "pg4ml"
linkTitle: "pg4ml"
description: "PG4ML是一个机器学习框架"
weight: 1880
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://gitee.com/guotiecheng/plpgsql_pg4ml">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://gitee.com/guotiecheng/plpgsql_pg4ml</div>
    <div class="ext-card__desc">https://gitee.com/guotiecheng/plpgsql_pg4ml</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg4ml-2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg4ml-2.0.tar.gz</div>
    <div class="ext-card__desc">pg4ml-2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg4ml`**](/ext/e/pg4ml) | `2.0` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1880  | [**`pg4ml`**](/ext/e/pg4ml) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`tablefunc`](/ext/e/tablefunc) [`cube`](/ext/e/cube) [`plpython3u`](/ext/e/plpython3u) [`pgml`](/ext/e/pgml) [`vectorize`](/ext/e/vectorize) [`pg_summarize`](/ext/e/pg_summarize) [`pg_tiktoken`](/ext/e/pg_tiktoken) [`vector`](/ext/e/vector) [`vchord`](/ext/e/vchord) [`vectorscale`](/ext/e/vectorscale) [`pg_strom`](/ext/e/pg_strom) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> require python3


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg4ml` | `plpgsql`, `tablefunc`, `cube`, `plpython3u` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg4ml_$v` | - |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg4ml` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
@ el8.x86_64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg4ml_18-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg4ml_18-2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg4ml_18-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 294.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg4ml_18-2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg4ml_18-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg4ml_18-2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0 316.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0 316.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~trixie_amd64.deb pigsty 2.0 317.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~trixie_arm64.deb pigsty 2.0 317.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~jammy_amd64.deb pigsty 2.0 317.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~jammy_arm64.deb pigsty 2.0 317.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~noble_amd64.deb pigsty 2.0 316.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~noble_arm64.deb pigsty 2.0 316.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg4ml_17-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 341.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg4ml_17-2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg4ml_17-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 294.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg4ml_17-2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg4ml_17-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg4ml_17-2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0 316.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0 316.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~trixie_amd64.deb pigsty 2.0 317.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~trixie_arm64.deb pigsty 2.0 317.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~jammy_amd64.deb pigsty 2.0 317.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~jammy_arm64.deb pigsty 2.0 317.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~noble_amd64.deb pigsty 2.0 316.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~noble_arm64.deb pigsty 2.0 316.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg4ml_16-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg4ml_16-2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg4ml_16-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 294.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg4ml_16-2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg4ml_16-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg4ml_16-2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0 316.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0 316.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~trixie_amd64.deb pigsty 2.0 317.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~trixie_arm64.deb pigsty 2.0 317.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~jammy_amd64.deb pigsty 2.0 317.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~jammy_arm64.deb pigsty 2.0 317.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~noble_amd64.deb pigsty 2.0 316.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~noble_arm64.deb pigsty 2.0 316.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg4ml_15-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 341.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg4ml_15-2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg4ml_15-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 294.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg4ml_15-2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg4ml_15-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg4ml_15-2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0 316.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0 316.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~trixie_amd64.deb pigsty 2.0 317.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~trixie_arm64.deb pigsty 2.0 317.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~jammy_amd64.deb pigsty 2.0 317.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~jammy_arm64.deb pigsty 2.0 317.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~noble_amd64.deb pigsty 2.0 316.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~noble_arm64.deb pigsty 2.0 316.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg4ml_14-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 341.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg4ml_14-2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg4ml_14-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg4ml_14-2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg4ml_14-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg4ml_14-2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0 316.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0 316.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~trixie_amd64.deb pigsty 2.0 317.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~trixie_arm64.deb pigsty 2.0 317.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~jammy_amd64.deb pigsty 2.0 317.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~jammy_arm64.deb pigsty 2.0 317.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~noble_amd64.deb pigsty 2.0 316.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~noble_arm64.deb pigsty 2.0 316.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg4ml` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg4ml         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg4ml` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg4ml;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg4ml -v 18  # PG 18
pig ext install -y pg4ml -v 17  # PG 17
pig ext install -y pg4ml -v 16  # PG 16
pig ext install -y pg4ml -v 15  # PG 15
pig ext install -y pg4ml -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg4ml_18       # PG 18
dnf install -y pg4ml_17       # PG 17
dnf install -y pg4ml_16       # PG 16
dnf install -y pg4ml_15       # PG 15
dnf install -y pg4ml_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg4ml   # PG 18
apt install -y postgresql-17-pg4ml   # PG 17
apt install -y postgresql-16-pg4ml   # PG 16
apt install -y postgresql-15-pg4ml   # PG 15
apt install -y postgresql-14-pg4ml   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg4ml CASCADE;  -- 依赖: plpgsql, tablefunc, cube, plpython3u
```



## 用法

> [pg4ml](https://gitee.com/guotiecheng/plpgsql_pg4ml)：PostgreSQL 机器学习框架。
> 来源：[README.md](https://gitee.com/guotiecheng/plpgsql_pg4ml)

`pg4ml` 是一个 PostgreSQL 扩展，完全在数据库内使用 PL/pgSQL 和 PL/Python 实现机器学习框架。它通过 SQL 提供矩阵运算、神经网络构建与训练、聚类算法和科学计算功能。


--------

### 前置条件

- PostgreSQL >= 14，支持 Python3
- 依赖扩展：`plpgsql`、`tablefunc`、`cube`、`plpython3u`

### 快速开始

```sql
CREATE EXTENSION pg4ml CASCADE;
-- 这也会创建所需的依赖：plpgsql, tablefunc, cube, plpython3u
```


--------

### 功能特性

#### 矩阵运算

框架在 `sm_sc` schema 下提供了全面的矩阵运算库：

- **逐元素运算**：算术、比较、取整、拼接、布尔、位运算、复数和广播运算
- **矩阵运算**：乘法、转置、翻转、旋转、拼接
- **构造**：采样、替换、填充、字符匹配、随机生成
- **三角函数**：矩阵上的广播运算
- **聚合**：切片级聚合、矩阵级聚合、按切片值排序、定位极值位置

#### 切片聚合示例

按垂直切片求平均（每组 2 行）：

```sql
SELECT sm_sc.fv_aggr_slice_avg(
    array[[1.5, 11.5],
          [2.1, 12.1],
          [3.3, 13.3],
          [4.3, 14.3],
          [5.5, 15.5],
          [6.1, 16.1]],
    array[2, 1]
);
-- 返回: array[[1.8, 11.8],[3.8, 13.8],[5.8, 15.8]]
```

2x3 块上的最大池化：

```sql
SELECT sm_sc.fv_aggr_slice_max(
    array[[2.3, 5.1, 8.2, 2.56, 3.33, -1.9],
          [3.25, 6.4, 6.6, 6.9, -2.65, -4.6],
          [-2.3, 5.1, -8.2, 2.56, -3.33, -1.9],
          [3.25, -6.4, -6.6, 6.9, -2.65, -4.6]],
    array[2, 3]
);
-- 返回: array[[8.2, 6.9],[5.1, 6.9]]
```

#### 神经网络

框架支持深度神经网络的构建和训练：

- **节点和路径表**：`sm_sc.tb_nn_node` / `sm_sc.tb_nn_path` 用于定义网络结构
- **训练输入缓冲区**：`sm_sc.tb_nn_train_input_buff` 用于接收训练数据
- **任务管理**：`sm_sc.tb_classify_task` 用于部署和管理训练任务
- **激活函数**、**卷积**、**池化**、**Lambda 运算**
- **损失函数**、**导数计算**、**反向传播**
- **推理**：`sm_sc.ft_nn_in_out` 用于将测试/验证数据通过训练好的模型运行

#### 聚类

- **K-means++**：通过 `sm_sc.prc_kmeans_pp` 过程
- **DBSCAN**：通过 `sm_sc.prc_dbscan_pp` 过程

两者都使用 `sm_sc.tb_cluster_task` 进行任务部署和管理。

#### 科学计算

- 波形处理
- 计算图 JSON 序列化/反序列化
- 复数运算
- 线性代数


--------

### 性能提示

- 启用调试模式：`SET session pg4ml._v_is_debug_check = '1';`
- 矩阵乘法使用 `plpython3u` 调用 numpy 进行优化
- 调整 PostgreSQL 并行参数以支持多线程训练：
  - `max_parallel_workers_per_gather`
  - `force_parallel_mode`
  - `parallel_setup_cost`, `parallel_tuple_cost`
- 考虑使用 `pg_strom` 扩展进行 GPU 加速

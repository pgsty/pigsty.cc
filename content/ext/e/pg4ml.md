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
  <a class="ext-card ext-card--source" href="pg4ml-2.0.tar.gz">
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
@ el8.x86_64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg4ml_18-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg4ml_18-2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg4ml_18-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 294.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg4ml_18-2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg4ml_18-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg4ml_18 pg4ml_18-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg4ml_18-2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0 316.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0 316.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~trixie_amd64.deb pigsty 2.0 317.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~trixie_arm64.deb pigsty 2.0 317.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~jammy_amd64.deb pigsty 2.0 317.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~jammy_arm64.deb pigsty 2.0 317.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~noble_amd64.deb pigsty 2.0 316.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg4ml postgresql-18-pg4ml_2.0-2PIGSTY~noble_arm64.deb pigsty 2.0 316.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-18-pg4ml_2.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg4ml_17-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 341.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg4ml_17-2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg4ml_17-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 294.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg4ml_17-2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg4ml_17-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg4ml_17 pg4ml_17-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg4ml_17-2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0 316.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0 316.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~trixie_amd64.deb pigsty 2.0 317.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~trixie_arm64.deb pigsty 2.0 317.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~jammy_amd64.deb pigsty 2.0 317.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~jammy_arm64.deb pigsty 2.0 317.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~noble_amd64.deb pigsty 2.0 316.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg4ml postgresql-17-pg4ml_2.0-2PIGSTY~noble_arm64.deb pigsty 2.0 316.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-17-pg4ml_2.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg4ml_16-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg4ml_16-2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg4ml_16-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 294.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg4ml_16-2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg4ml_16-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg4ml_16 pg4ml_16-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg4ml_16-2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0 316.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0 316.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~trixie_amd64.deb pigsty 2.0 317.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~trixie_arm64.deb pigsty 2.0 317.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~jammy_amd64.deb pigsty 2.0 317.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~jammy_arm64.deb pigsty 2.0 317.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~noble_amd64.deb pigsty 2.0 316.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg4ml postgresql-16-pg4ml_2.0-2PIGSTY~noble_arm64.deb pigsty 2.0 316.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-16-pg4ml_2.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg4ml_15-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 341.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg4ml_15-2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg4ml_15-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 294.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg4ml_15-2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg4ml_15-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg4ml_15 pg4ml_15-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg4ml_15-2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0 316.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0 316.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~trixie_amd64.deb pigsty 2.0 317.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~trixie_arm64.deb pigsty 2.0 317.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~jammy_amd64.deb pigsty 2.0 317.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~jammy_arm64.deb pigsty 2.0 317.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~noble_amd64.deb pigsty 2.0 316.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg4ml postgresql-15-pg4ml_2.0-2PIGSTY~noble_arm64.deb pigsty 2.0 316.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-15-pg4ml_2.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0 341.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg4ml_14-2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0 341.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg4ml_14-2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg4ml_14-2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0 294.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg4ml_14-2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg4ml_14-2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg4ml_14 pg4ml_14-2.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0 294.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg4ml_14-2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0 316.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0 316.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~trixie_amd64.deb pigsty 2.0 317.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~trixie_arm64.deb pigsty 2.0 317.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~jammy_amd64.deb pigsty 2.0 317.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~jammy_arm64.deb pigsty 2.0 317.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~noble_amd64.deb pigsty 2.0 316.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg4ml postgresql-14-pg4ml_2.0-2PIGSTY~noble_arm64.deb pigsty 2.0 316.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg4ml/postgresql-14-pg4ml_2.0-2PIGSTY~noble_arm64.deb
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

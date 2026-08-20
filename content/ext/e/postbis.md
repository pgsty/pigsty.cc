---
title: "postbis"
linkTitle: "postbis"
description: "提供压缩的 DNA、RNA、氨基酸及比对序列类型，以及类型转换、运算符、索引和生物信息学函数。"
weight: 3760
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/no0p/postbis">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">no0p/postbis</div>
    <div class="ext-card__desc">https://github.com/no0p/postbis</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/postbis-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postbis-1.0.tar.gz</div>
    <div class="ext-card__desc">postbis-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`postbis`**](/ext/e/postbis) | `1.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3760  | [**`postbis`**](/ext/e/postbis) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`rdkit`](/ext/e/rdkit) [`vector`](/ext/e/vector) [`pg_similarity`](/ext/e/pg_similarity) [`smlar`](/ext/e/smlar) [`pg_trgm`](/ext/e/pg_trgm) [`pgcontext`](/ext/e/pgcontext) [`vectorize`](/ext/e/vectorize) [`imgsmlr`](/ext/e/imgsmlr) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> The packaged repository is an untagged copy of PostBIS, inactive since 2019; Pigsty pins commit ce454ebf and patches PostgreSQL 14-18 compatibility plus alphabet output and indexed slice correctness.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postbis` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postbis_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-postbis` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 postbis_18 postbis_18-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 65.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postbis_18-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 postbis_18 postbis_18-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 61.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postbis_18-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 postbis_18 postbis_18-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 61.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postbis_18-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 postbis_18 postbis_18-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 59.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postbis_18-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 postbis_18 postbis_18-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 63.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postbis_18-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 postbis_18 postbis_18-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 60.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postbis_18-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-postbis postgresql-18-postbis_1.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0 152.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postbis/postgresql-18-postbis_1.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-postbis postgresql-18-postbis_1.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0 147.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postbis/postgresql-18-postbis_1.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-postbis postgresql-18-postbis_1.0-2PIGSTY~trixie_amd64.deb pigsty 1.0 153.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postbis/postgresql-18-postbis_1.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-postbis postgresql-18-postbis_1.0-2PIGSTY~trixie_arm64.deb pigsty 1.0 147.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postbis/postgresql-18-postbis_1.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-postbis postgresql-18-postbis_1.0-2PIGSTY~jammy_amd64.deb pigsty 1.0 162.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postbis/postgresql-18-postbis_1.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-postbis postgresql-18-postbis_1.0-2PIGSTY~jammy_arm64.deb pigsty 1.0 160.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postbis/postgresql-18-postbis_1.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-postbis postgresql-18-postbis_1.0-2PIGSTY~noble_amd64.deb pigsty 1.0 160.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postbis/postgresql-18-postbis_1.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-postbis postgresql-18-postbis_1.0-2PIGSTY~noble_arm64.deb pigsty 1.0 157.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postbis/postgresql-18-postbis_1.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-postbis postgresql-18-postbis_1.0-2PIGSTY~resolute_amd64.deb pigsty 1.0 160.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postbis/postgresql-18-postbis_1.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-postbis postgresql-18-postbis_1.0-2PIGSTY~resolute_arm64.deb pigsty 1.0 157.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postbis/postgresql-18-postbis_1.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 postbis_17 postbis_17-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 65.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postbis_17-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 postbis_17 postbis_17-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 61.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postbis_17-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 postbis_17 postbis_17-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 61.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postbis_17-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 postbis_17 postbis_17-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 59.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postbis_17-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 postbis_17 postbis_17-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 63.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postbis_17-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 postbis_17 postbis_17-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 60.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postbis_17-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-postbis postgresql-17-postbis_1.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0 152.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postbis/postgresql-17-postbis_1.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-postbis postgresql-17-postbis_1.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0 147.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postbis/postgresql-17-postbis_1.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-postbis postgresql-17-postbis_1.0-2PIGSTY~trixie_amd64.deb pigsty 1.0 153.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postbis/postgresql-17-postbis_1.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-postbis postgresql-17-postbis_1.0-2PIGSTY~trixie_arm64.deb pigsty 1.0 147.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postbis/postgresql-17-postbis_1.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-postbis postgresql-17-postbis_1.0-2PIGSTY~jammy_amd64.deb pigsty 1.0 168.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postbis/postgresql-17-postbis_1.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-postbis postgresql-17-postbis_1.0-2PIGSTY~jammy_arm64.deb pigsty 1.0 167.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postbis/postgresql-17-postbis_1.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-postbis postgresql-17-postbis_1.0-2PIGSTY~noble_amd64.deb pigsty 1.0 160.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postbis/postgresql-17-postbis_1.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-postbis postgresql-17-postbis_1.0-2PIGSTY~noble_arm64.deb pigsty 1.0 157.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postbis/postgresql-17-postbis_1.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-postbis postgresql-17-postbis_1.0-2PIGSTY~resolute_amd64.deb pigsty 1.0 160.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postbis/postgresql-17-postbis_1.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-postbis postgresql-17-postbis_1.0-2PIGSTY~resolute_arm64.deb pigsty 1.0 157.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postbis/postgresql-17-postbis_1.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 postbis_16 postbis_16-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 65.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postbis_16-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 postbis_16 postbis_16-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 61.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postbis_16-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 postbis_16 postbis_16-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 61.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postbis_16-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 postbis_16 postbis_16-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 59.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postbis_16-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 postbis_16 postbis_16-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 63.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postbis_16-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 postbis_16 postbis_16-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 60.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postbis_16-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-postbis postgresql-16-postbis_1.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0 152.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postbis/postgresql-16-postbis_1.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-postbis postgresql-16-postbis_1.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0 147.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postbis/postgresql-16-postbis_1.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-postbis postgresql-16-postbis_1.0-2PIGSTY~trixie_amd64.deb pigsty 1.0 153.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postbis/postgresql-16-postbis_1.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-postbis postgresql-16-postbis_1.0-2PIGSTY~trixie_arm64.deb pigsty 1.0 148.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postbis/postgresql-16-postbis_1.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-postbis postgresql-16-postbis_1.0-2PIGSTY~jammy_amd64.deb pigsty 1.0 169.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postbis/postgresql-16-postbis_1.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-postbis postgresql-16-postbis_1.0-2PIGSTY~jammy_arm64.deb pigsty 1.0 166.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postbis/postgresql-16-postbis_1.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-postbis postgresql-16-postbis_1.0-2PIGSTY~noble_amd64.deb pigsty 1.0 160.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postbis/postgresql-16-postbis_1.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-postbis postgresql-16-postbis_1.0-2PIGSTY~noble_arm64.deb pigsty 1.0 157.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postbis/postgresql-16-postbis_1.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-postbis postgresql-16-postbis_1.0-2PIGSTY~resolute_amd64.deb pigsty 1.0 160.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postbis/postgresql-16-postbis_1.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-postbis postgresql-16-postbis_1.0-2PIGSTY~resolute_arm64.deb pigsty 1.0 157.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postbis/postgresql-16-postbis_1.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 postbis_15 postbis_15-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 66.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postbis_15-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 postbis_15 postbis_15-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 62.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postbis_15-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 postbis_15 postbis_15-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 63.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postbis_15-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 postbis_15 postbis_15-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 61.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postbis_15-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 postbis_15 postbis_15-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 64.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postbis_15-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 postbis_15 postbis_15-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 61.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postbis_15-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-postbis postgresql-15-postbis_1.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0 153.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postbis/postgresql-15-postbis_1.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-postbis postgresql-15-postbis_1.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0 148.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postbis/postgresql-15-postbis_1.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-postbis postgresql-15-postbis_1.0-2PIGSTY~trixie_amd64.deb pigsty 1.0 154.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postbis/postgresql-15-postbis_1.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-postbis postgresql-15-postbis_1.0-2PIGSTY~trixie_arm64.deb pigsty 1.0 149.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postbis/postgresql-15-postbis_1.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-postbis postgresql-15-postbis_1.0-2PIGSTY~jammy_amd64.deb pigsty 1.0 170.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postbis/postgresql-15-postbis_1.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-postbis postgresql-15-postbis_1.0-2PIGSTY~jammy_arm64.deb pigsty 1.0 168.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postbis/postgresql-15-postbis_1.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-postbis postgresql-15-postbis_1.0-2PIGSTY~noble_amd64.deb pigsty 1.0 161.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postbis/postgresql-15-postbis_1.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-postbis postgresql-15-postbis_1.0-2PIGSTY~noble_arm64.deb pigsty 1.0 158.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postbis/postgresql-15-postbis_1.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-postbis postgresql-15-postbis_1.0-2PIGSTY~resolute_amd64.deb pigsty 1.0 161.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postbis/postgresql-15-postbis_1.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-postbis postgresql-15-postbis_1.0-2PIGSTY~resolute_arm64.deb pigsty 1.0 158.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postbis/postgresql-15-postbis_1.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 postbis_14 postbis_14-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 66.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postbis_14-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 postbis_14 postbis_14-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 62.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postbis_14-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 postbis_14 postbis_14-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 63.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postbis_14-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 postbis_14 postbis_14-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 61.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postbis_14-1.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 postbis_14 postbis_14-1.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0 64.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postbis_14-1.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 postbis_14 postbis_14-1.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0 61.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postbis_14-1.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-postbis postgresql-14-postbis_1.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0 153.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postbis/postgresql-14-postbis_1.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-postbis postgresql-14-postbis_1.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0 148.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postbis/postgresql-14-postbis_1.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-postbis postgresql-14-postbis_1.0-2PIGSTY~trixie_amd64.deb pigsty 1.0 154.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postbis/postgresql-14-postbis_1.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-postbis postgresql-14-postbis_1.0-2PIGSTY~trixie_arm64.deb pigsty 1.0 149.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/postbis/postgresql-14-postbis_1.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-postbis postgresql-14-postbis_1.0-2PIGSTY~jammy_amd64.deb pigsty 1.0 170.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postbis/postgresql-14-postbis_1.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-postbis postgresql-14-postbis_1.0-2PIGSTY~jammy_arm64.deb pigsty 1.0 168.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postbis/postgresql-14-postbis_1.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-postbis postgresql-14-postbis_1.0-2PIGSTY~noble_amd64.deb pigsty 1.0 161.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postbis/postgresql-14-postbis_1.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-postbis postgresql-14-postbis_1.0-2PIGSTY~noble_arm64.deb pigsty 1.0 158.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postbis/postgresql-14-postbis_1.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-postbis postgresql-14-postbis_1.0-2PIGSTY~resolute_amd64.deb pigsty 1.0 161.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postbis/postgresql-14-postbis_1.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-postbis postgresql-14-postbis_1.0-2PIGSTY~resolute_arm64.deb pigsty 1.0 158.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/postbis/postgresql-14-postbis_1.0-2PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `postbis` 扩展的 RPM / DEB 包：

```bash
pig build pkg postbis         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `postbis` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install postbis;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y postbis -v 18  # PG 18
pig ext install -y postbis -v 17  # PG 17
pig ext install -y postbis -v 16  # PG 16
pig ext install -y postbis -v 15  # PG 15
pig ext install -y postbis -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y postbis_18       # PG 18
dnf install -y postbis_17       # PG 17
dnf install -y postbis_16       # PG 16
dnf install -y postbis_15       # PG 15
dnf install -y postbis_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-postbis   # PG 18
apt install -y postgresql-17-postbis   # PG 17
apt install -y postgresql-16-postbis   # PG 16
apt install -y postgresql-15-postbis   # PG 15
apt install -y postgresql-14-postbis   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION postbis;
```

## 用法

来源：

- [项目 README](https://github.com/no0p/postbis/blob/ce454ebfbc27e0b6c8357ef6bfc8da1c4b2967c8/README.txt)
- [扩展 control 文件](https://github.com/no0p/postbis/blob/ce454ebfbc27e0b6c8357ef6bfc8da1c4b2967c8/postbis.control)
- [1.0 版 SQL API](https://github.com/no0p/postbis/blob/ce454ebfbc27e0b6c8357ef6bfc8da1c4b2967c8/sql/postbis--1.0.sql)
- [序列回归测试](https://github.com/no0p/postbis/tree/ce454ebfbc27e0b6c8357ef6bfc8da1c4b2967c8/test/sql)

`postbis` 1.0 为 DNA、RNA、氨基酸及比对序列提供紧凑的原生数据类型，并提供可配置字母表与类型修饰符、类型转换、序列操作、生物学变换、比较操作符，以及 B-tree 和哈希操作符类。

### 存储强类型序列

```sql
CREATE EXTENSION postbis;

CREATE TABLE specimen (
  specimen_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  dna dna_sequence(SHORT, FLC, CASE_SENSITIVE) NOT NULL,
  rna rna_sequence(IUPAC, CASE_SENSITIVE),
  protein aa_sequence(IUPAC, CASE_SENSITIVE)
);

INSERT INTO specimen (dna, rna, protein)
VALUES ('AACCGGTT', 'AACGUU', 'ACDEFG');

SELECT specimen_id,
       char_length(dna) AS bases,
       substr(dna, 3, 4)::text AS fragment
FROM specimen;
```

输入验证取决于所选字母表、大小写敏感性和类型修饰符。应验证转换能拒绝所需生物学约定之外的符号，并避免意外混用对齐与未对齐类型。

### 变换与翻译序列

```sql
SELECT complement('ACGTN'::dna_sequence)::text;
-- TGCAN

SELECT reverse_complement('ACGTN'::dna_sequence)::text;
-- NACGT

SELECT transcribe('AACGTT'::dna_sequence)::text;
-- AACGUU

SELECT translate('AUGGCCUAA'::rna_sequence)::text;
-- MA
```

扩展还提供 `reverse_transcribe()`、`six_frame()`、`get_alphabet()`、`entropy()`、`gc_content()` 和序列生成函数。标准遗传密码不适用时，翻译函数可以接收显式翻译表。

### 检查压缩并添加索引

```sql
SELECT char_length(sequence) AS symbols,
       octet_length(sequence) AS storage_bytes,
       compression_ratio(sequence) AS storage_ratio
FROM (
  SELECT repeat('ACGT', 256)::dna_sequence AS sequence
) AS sample;

CREATE INDEX specimen_dna_btree ON specimen USING btree (dna);
CREATE INDEX specimen_dna_hash  ON specimen USING hash  (dna);
```

这些序列类型支持等值、排序、拼接、子串、搜索和长度函数。在生产负载中依赖索引之前，应使用真实数据分布检查执行计划。

### 打包与持久性风险

Pigsty 应用下游兼容补丁，将 PostBIS 1.0 打包到 PostgreSQL 14–18。这一打包结果并不改变上游生命周期：项目已经停止维护，也没有 1.0 以后的扩展升级路径。

自定义类型使用原生压缩磁盘表示。应把已存储值和索引视为绑定到经过测试的准确构建。采用或迁移前，必须验证转储恢复、二进制和逻辑升级、复制、驱动解码、索引重建、错误输入处理和大型序列内存行为。

`reverse()`、`char_length()` 和 `substr()` 等函数重载了常见名称，因此模式限定和受控 `search_path` 设置很重要。对新的持久数据集，除非已经在本地审计、打包该扩展并指定明确的长期迁移负责人，否则应优先使用受维护的序列工具或普通 PostgreSQL 类型。

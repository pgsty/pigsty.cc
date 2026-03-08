---
title: "imgsmlr"
linkTitle: "imgsmlr"
description: "使用Haar小波分析计算图片相似度"
weight: 2830
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgrespro/imgsmlr">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgrespro/imgsmlr</div>
    <div class="ext-card__desc">https://github.com/postgrespro/imgsmlr</div>
  </a>
  <a class="ext-card ext-card--source" href="imgsmlr-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">imgsmlr-1.0.tar.gz</div>
    <div class="ext-card__desc">imgsmlr-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`imgsmlr`**](/ext/e/imgsmlr) | `1.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2830  | [**`imgsmlr`**](/ext/e/imgsmlr) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_graphql`](/ext/e/pg_graphql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`hypopg`](/ext/e/hypopg) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> breaks on el10


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `imgsmlr` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `imgsmlr_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-imgsmlr` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 imgsmlr_18 imgsmlr_18-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/imgsmlr_18-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 imgsmlr_18 imgsmlr_18-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/imgsmlr_18-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 imgsmlr_18 imgsmlr_18-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/imgsmlr_18-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 imgsmlr_18 imgsmlr_18-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 20.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/imgsmlr_18-1.0-2PIGSTY.el9.aarch64.rpm
@ d12.x86_64 18 postgresql-18-imgsmlr postgresql-18-imgsmlr_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 30.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/imgsmlr/postgresql-18-imgsmlr_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-imgsmlr postgresql-18-imgsmlr_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 30.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/imgsmlr/postgresql-18-imgsmlr_1.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 18 postgresql-18-imgsmlr postgresql-18-imgsmlr_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 32.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/imgsmlr/postgresql-18-imgsmlr_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-imgsmlr postgresql-18-imgsmlr_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 32.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/imgsmlr/postgresql-18-imgsmlr_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-imgsmlr postgresql-18-imgsmlr_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/imgsmlr/postgresql-18-imgsmlr_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-imgsmlr postgresql-18-imgsmlr_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/imgsmlr/postgresql-18-imgsmlr_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 imgsmlr_17 imgsmlr_17-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/imgsmlr_17-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 imgsmlr_17 imgsmlr_17-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/imgsmlr_17-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 imgsmlr_17 imgsmlr_17-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/imgsmlr_17-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 imgsmlr_17 imgsmlr_17-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 20.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/imgsmlr_17-1.0-2PIGSTY.el9.aarch64.rpm
@ d12.x86_64 17 postgresql-17-imgsmlr postgresql-17-imgsmlr_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 30.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/imgsmlr/postgresql-17-imgsmlr_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-imgsmlr postgresql-17-imgsmlr_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 30.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/imgsmlr/postgresql-17-imgsmlr_1.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 17 postgresql-17-imgsmlr postgresql-17-imgsmlr_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 34.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/imgsmlr/postgresql-17-imgsmlr_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-imgsmlr postgresql-17-imgsmlr_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 33.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/imgsmlr/postgresql-17-imgsmlr_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-imgsmlr postgresql-17-imgsmlr_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/imgsmlr/postgresql-17-imgsmlr_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-imgsmlr postgresql-17-imgsmlr_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/imgsmlr/postgresql-17-imgsmlr_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 imgsmlr_16 imgsmlr_16-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/imgsmlr_16-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 imgsmlr_16 imgsmlr_16-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/imgsmlr_16-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 imgsmlr_16 imgsmlr_16-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/imgsmlr_16-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 imgsmlr_16 imgsmlr_16-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 20.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/imgsmlr_16-1.0-2PIGSTY.el9.aarch64.rpm
@ d12.x86_64 16 postgresql-16-imgsmlr postgresql-16-imgsmlr_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 30.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/imgsmlr/postgresql-16-imgsmlr_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-imgsmlr postgresql-16-imgsmlr_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 30.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/imgsmlr/postgresql-16-imgsmlr_1.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 16 postgresql-16-imgsmlr postgresql-16-imgsmlr_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 34.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/imgsmlr/postgresql-16-imgsmlr_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-imgsmlr postgresql-16-imgsmlr_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 33.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/imgsmlr/postgresql-16-imgsmlr_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-imgsmlr postgresql-16-imgsmlr_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/imgsmlr/postgresql-16-imgsmlr_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-imgsmlr postgresql-16-imgsmlr_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/imgsmlr/postgresql-16-imgsmlr_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 imgsmlr_15 imgsmlr_15-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/imgsmlr_15-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 imgsmlr_15 imgsmlr_15-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/imgsmlr_15-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 imgsmlr_15 imgsmlr_15-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/imgsmlr_15-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 imgsmlr_15 imgsmlr_15-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 20.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/imgsmlr_15-1.0-2PIGSTY.el9.aarch64.rpm
@ d12.x86_64 15 postgresql-15-imgsmlr postgresql-15-imgsmlr_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 30.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/imgsmlr/postgresql-15-imgsmlr_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-imgsmlr postgresql-15-imgsmlr_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 30.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/imgsmlr/postgresql-15-imgsmlr_1.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 15 postgresql-15-imgsmlr postgresql-15-imgsmlr_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 34.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/imgsmlr/postgresql-15-imgsmlr_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-imgsmlr postgresql-15-imgsmlr_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 33.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/imgsmlr/postgresql-15-imgsmlr_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-imgsmlr postgresql-15-imgsmlr_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/imgsmlr/postgresql-15-imgsmlr_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-imgsmlr postgresql-15-imgsmlr_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/imgsmlr/postgresql-15-imgsmlr_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 imgsmlr_14 imgsmlr_14-1.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/imgsmlr_14-1.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 imgsmlr_14 imgsmlr_14-1.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/imgsmlr_14-1.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 imgsmlr_14 imgsmlr_14-1.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0 21.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/imgsmlr_14-1.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 imgsmlr_14 imgsmlr_14-1.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0 20.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/imgsmlr_14-1.0-2PIGSTY.el9.aarch64.rpm
@ d12.x86_64 14 postgresql-14-imgsmlr postgresql-14-imgsmlr_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 30.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/imgsmlr/postgresql-14-imgsmlr_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-imgsmlr postgresql-14-imgsmlr_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 30.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/i/imgsmlr/postgresql-14-imgsmlr_1.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 14 postgresql-14-imgsmlr postgresql-14-imgsmlr_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 34.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/imgsmlr/postgresql-14-imgsmlr_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-imgsmlr postgresql-14-imgsmlr_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 33.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/i/imgsmlr/postgresql-14-imgsmlr_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-imgsmlr postgresql-14-imgsmlr_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/imgsmlr/postgresql-14-imgsmlr_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-imgsmlr postgresql-14-imgsmlr_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/i/imgsmlr/postgresql-14-imgsmlr_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `imgsmlr` 扩展的 RPM / DEB 包：

```bash
pig build pkg imgsmlr         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `imgsmlr` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install imgsmlr;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y imgsmlr -v 18  # PG 18
pig ext install -y imgsmlr -v 17  # PG 17
pig ext install -y imgsmlr -v 16  # PG 16
pig ext install -y imgsmlr -v 15  # PG 15
pig ext install -y imgsmlr -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y imgsmlr_18       # PG 18
dnf install -y imgsmlr_17       # PG 17
dnf install -y imgsmlr_16       # PG 16
dnf install -y imgsmlr_15       # PG 15
dnf install -y imgsmlr_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-imgsmlr   # PG 18
apt install -y postgresql-17-imgsmlr   # PG 17
apt install -y postgresql-16-imgsmlr   # PG 16
apt install -y postgresql-15-imgsmlr   # PG 15
apt install -y postgresql-14-imgsmlr   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION imgsmlr;
```

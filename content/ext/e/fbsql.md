---
title: "fbsql"
linkTitle: "fbsql"
description: "在 SQL 中保持关系闭包的公式化统计建模扩展"
weight: 4695
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dsc-chiba-u/FbSQL">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dsc-chiba-u/FbSQL</div>
    <div class="ext-card__desc">https://github.com/dsc-chiba-u/FbSQL</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/fbsql-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">fbsql-0.1.0.tar.gz</div>
    <div class="ext-card__desc">fbsql-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`fbsql`**](/ext/e/fbsql) | `0.1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4695  | [**`fbsql`**](/ext/e/fbsql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `fbsql` |
{.ext-table}

| **相关扩展** | [`plr`](/ext/e/plr) [`pg4ml`](/ext/e/pg4ml) [`pgml`](/ext/e/pgml) [`pg_math`](/ext/e/pg_math) [`weighted_statistics`](/ext/e/weighted_statistics) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires PL/R 8.4.0 or newer; PIGSTY packages target PostgreSQL 16 through 18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16" >}} | `fbsql` | `plr` |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16" >}} | `fbsql_$v` | `plr_$v` |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-fbsql` | `postgresql-$v-plr` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 fbsql_18 fbsql_18-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/fbsql_18-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 fbsql_18 fbsql_18-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 19.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/fbsql_18-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 fbsql_18 fbsql_18-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 19.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fbsql_18-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 fbsql_18 fbsql_18-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 19.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fbsql_18-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 fbsql_18 fbsql_18-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fbsql_18-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 fbsql_18 fbsql_18-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fbsql_18-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-fbsql postgresql-18-fbsql_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fbsql/postgresql-18-fbsql_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-fbsql postgresql-18-fbsql_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fbsql/postgresql-18-fbsql_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-fbsql postgresql-18-fbsql_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 14.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fbsql/postgresql-18-fbsql_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-fbsql postgresql-18-fbsql_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 14.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fbsql/postgresql-18-fbsql_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-fbsql postgresql-18-fbsql_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fbsql/postgresql-18-fbsql_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-fbsql postgresql-18-fbsql_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fbsql/postgresql-18-fbsql_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-fbsql postgresql-18-fbsql_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fbsql/postgresql-18-fbsql_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-fbsql postgresql-18-fbsql_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fbsql/postgresql-18-fbsql_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-fbsql postgresql-18-fbsql_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fbsql/postgresql-18-fbsql_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-fbsql postgresql-18-fbsql_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fbsql/postgresql-18-fbsql_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 fbsql_17 fbsql_17-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/fbsql_17-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 fbsql_17 fbsql_17-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 19.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/fbsql_17-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 fbsql_17 fbsql_17-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 19.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fbsql_17-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 fbsql_17 fbsql_17-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 19.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fbsql_17-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 fbsql_17 fbsql_17-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fbsql_17-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 fbsql_17 fbsql_17-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fbsql_17-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-fbsql postgresql-17-fbsql_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fbsql/postgresql-17-fbsql_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-fbsql postgresql-17-fbsql_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fbsql/postgresql-17-fbsql_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-fbsql postgresql-17-fbsql_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 14.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fbsql/postgresql-17-fbsql_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-fbsql postgresql-17-fbsql_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 14.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fbsql/postgresql-17-fbsql_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-fbsql postgresql-17-fbsql_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fbsql/postgresql-17-fbsql_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-fbsql postgresql-17-fbsql_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fbsql/postgresql-17-fbsql_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-fbsql postgresql-17-fbsql_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fbsql/postgresql-17-fbsql_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-fbsql postgresql-17-fbsql_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fbsql/postgresql-17-fbsql_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-fbsql postgresql-17-fbsql_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fbsql/postgresql-17-fbsql_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-fbsql postgresql-17-fbsql_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fbsql/postgresql-17-fbsql_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 fbsql_16 fbsql_16-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/fbsql_16-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 fbsql_16 fbsql_16-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 19.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/fbsql_16-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 fbsql_16 fbsql_16-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 19.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fbsql_16-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 fbsql_16 fbsql_16-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 19.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fbsql_16-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 fbsql_16 fbsql_16-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fbsql_16-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 fbsql_16 fbsql_16-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fbsql_16-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-fbsql postgresql-16-fbsql_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fbsql/postgresql-16-fbsql_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-fbsql postgresql-16-fbsql_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fbsql/postgresql-16-fbsql_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-fbsql postgresql-16-fbsql_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 14.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fbsql/postgresql-16-fbsql_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-fbsql postgresql-16-fbsql_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 14.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fbsql/postgresql-16-fbsql_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-fbsql postgresql-16-fbsql_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fbsql/postgresql-16-fbsql_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-fbsql postgresql-16-fbsql_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fbsql/postgresql-16-fbsql_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-fbsql postgresql-16-fbsql_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fbsql/postgresql-16-fbsql_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-fbsql postgresql-16-fbsql_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fbsql/postgresql-16-fbsql_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-fbsql postgresql-16-fbsql_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fbsql/postgresql-16-fbsql_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-fbsql postgresql-16-fbsql_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fbsql/postgresql-16-fbsql_0.1.0-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `fbsql` 扩展的 RPM / DEB 包：

```bash
pig build pkg fbsql         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `fbsql` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install fbsql;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y fbsql -v 18  # PG 18
pig ext install -y fbsql -v 17  # PG 17
pig ext install -y fbsql -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y fbsql_18       # PG 18
dnf install -y fbsql_17       # PG 17
dnf install -y fbsql_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-fbsql   # PG 18
apt install -y postgresql-17-fbsql   # PG 17
apt install -y postgresql-16-fbsql   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION fbsql CASCADE;  -- 依赖: plr
```

## 用法

来源：

- [FbSQL 0.1.0 README](https://github.com/dsc-chiba-u/FbSQL/blob/v0.1.0/README.md)
- [FbSQL 0.1.0 changes](https://github.com/dsc-chiba-u/FbSQL/blob/v0.1.0/Changes)
- [Extension control file](https://github.com/dsc-chiba-u/FbSQL/blob/v0.1.0/fbsql.control)
- [PGXN release](https://pgxn.org/dist/fbsql/0.1.0/)

`fbsql` 是一个统计建模 DSL 证明概念，它将关系型 SQL 查询作为输入并返回行数据，同时使用 R 公式语法描述模型。0.1.0 版本通过 PL/R 实现广义线性模型的拟合，并通过纯 PL/pgSQL 进行预测。

### 前提条件

FbSQL 在 PostgreSQL 16 上开发和测试，并需要 PL/R 8.4.0 或更高版本以及 R。`plr` 是一个不受信任的语言，因此超级用户必须安装依赖项和扩展。

```sql
CREATE EXTENSION fbsql CASCADE;
SELECT fbsql.version();
```

仅授予常规用户所需的函数访问权限和源数据权限。

### 核心工作流

拟合二元流失模型并保留返回的关系：

```sql
CREATE TEMP TABLE churn_model AS
SELECT *
FROM fbsql.fit_glm(
  relation => $$
    SELECT churn_flag, age, gender
    FROM customer
    WHERE created_at >= DATE '2025-01-01'
      AND created_at <  DATE '2026-01-01'
  $$,
  formula => 'churn_flag ~ age + gender',
  family => 'binomial'
);
```

预测接受新行的查询以及保存模型的查询。由于它返回 `SETOF record`，因此在调用时提供输出列：

```sql
SELECT customer_id, churn_flag_predicted
FROM fbsql.predict_glm(
  relation => $$SELECT customer_id, age, gender FROM customer_2026$$,
  model    => $$SELECT * FROM churn_model$$
) AS p(
  customer_id bigint,
  age integer,
  gender text,
  churn_flag_predicted double precision
);
```

### 重要对象

- `fbsql.fit_glm(relation, formula, family)` 返回每个模型项的一行、重复拟合统计信息以及包含预测所需信息的 `metadata jsonb`。
- `fbsql.predict_glm(relation, model, on_new_levels)` 将 `<response>_predicted` 添加到输入行。默认情况下，`on_new_levels` 为 `error` 或者设置为 `na` 以在未见过的因子水平上生成空预测。
- `fbsql.version()` 报告扩展版本。

### 支持的功能和注意事项

0.1.0 版支持带有恒等连接的高斯模型以及带有对数几率连接的二项式模型，使用数值和因子预测变量。拟合应用完整案例分析并报告已用和丢弃的行数；预测在预测变量为空时返回 `NULL`。预测使用存储的系数和元数据，并不会在运行时调用 R。

交互、自定义对比度、偏移量、权重、预测区间、其他家庭和连接以及分布式拟合均不支持。`relation` 和 `model` 参数包含 SQL 代码：从可信的 SQL 构造它们，而不是未经清理的用户输入，并审查执行角色的权限。

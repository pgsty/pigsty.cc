---
title: "pg_kazsearch"
linkTitle: "pg_kazsearch"
description: "PostgreSQL 哈萨克语全文检索扩展"
weight: 2200
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/darkhanakh/pg-kazsearch">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">darkhanakh/pg-kazsearch</div>
    <div class="ext-card__desc">https://github.com/darkhanakh/pg-kazsearch</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_kazsearch-2.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_kazsearch-2.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_kazsearch-2.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_kazsearch`**](/ext/e/pg_kazsearch) | `0.1.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2200  | [**`pg_kazsearch`**](/ext/e/pg_kazsearch) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


> Upstream release/package version is 2.0.0; extension control version is 0.1.0.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16" >}} | `pg_kazsearch` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16" >}} | `pg_kazsearch_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-pg-kazsearch` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_kazsearch_18 pg_kazsearch_18-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 443.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kazsearch_18-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_kazsearch_18 pg_kazsearch_18-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 321.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kazsearch_18-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_kazsearch_18 pg_kazsearch_18-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 456.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kazsearch_18-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_kazsearch_18 pg_kazsearch_18-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 331.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kazsearch_18-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_kazsearch_18 pg_kazsearch_18-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 456.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kazsearch_18-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_kazsearch_18 pg_kazsearch_18-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 331.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kazsearch_18-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-kazsearch postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 361.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kazsearch/postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-kazsearch postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 251.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kazsearch/postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-kazsearch postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 361.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kazsearch/postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-kazsearch postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 251.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kazsearch/postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-kazsearch postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 406.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kazsearch/postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-kazsearch postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 285.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kazsearch/postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-kazsearch postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 402.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kazsearch/postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-kazsearch postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 284.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kazsearch/postgresql-18-pg-kazsearch_2.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_kazsearch_17 pg_kazsearch_17-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 443.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kazsearch_17-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_kazsearch_17 pg_kazsearch_17-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 321.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kazsearch_17-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_kazsearch_17 pg_kazsearch_17-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 456.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kazsearch_17-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_kazsearch_17 pg_kazsearch_17-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 331.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kazsearch_17-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_kazsearch_17 pg_kazsearch_17-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 456.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kazsearch_17-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_kazsearch_17 pg_kazsearch_17-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 331.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kazsearch_17-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-kazsearch postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 361.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kazsearch/postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-kazsearch postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 251.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kazsearch/postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-kazsearch postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 361.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kazsearch/postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-kazsearch postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 251.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kazsearch/postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-kazsearch postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 406.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kazsearch/postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-kazsearch postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 286.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kazsearch/postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-kazsearch postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 401.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kazsearch/postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-kazsearch postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 283.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kazsearch/postgresql-17-pg-kazsearch_2.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_kazsearch_16 pg_kazsearch_16-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 443.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_kazsearch_16-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_kazsearch_16 pg_kazsearch_16-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 321.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_kazsearch_16-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_kazsearch_16 pg_kazsearch_16-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 456.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_kazsearch_16-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_kazsearch_16 pg_kazsearch_16-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 331.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_kazsearch_16-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_kazsearch_16 pg_kazsearch_16-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 456.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_kazsearch_16-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_kazsearch_16 pg_kazsearch_16-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 331.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_kazsearch_16-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-kazsearch postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 361.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kazsearch/postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-kazsearch postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 251.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-kazsearch/postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-kazsearch postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 361.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kazsearch/postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-kazsearch postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 251.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-kazsearch/postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-kazsearch postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 406.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kazsearch/postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-kazsearch postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 286.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-kazsearch/postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-kazsearch postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 402.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kazsearch/postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-kazsearch postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 283.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-kazsearch/postgresql-16-pg-kazsearch_2.0.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_kazsearch` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_kazsearch         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_kazsearch` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_kazsearch;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_kazsearch -v 18  # PG 18
pig ext install -y pg_kazsearch -v 17  # PG 17
pig ext install -y pg_kazsearch -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_kazsearch_18       # PG 18
dnf install -y pg_kazsearch_17       # PG 17
dnf install -y pg_kazsearch_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-kazsearch   # PG 18
apt install -y postgresql-17-pg-kazsearch   # PG 17
apt install -y postgresql-16-pg-kazsearch   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_kazsearch;
```

## 用法

来源：[README](https://github.com/darkhanakh/pg-kazsearch/blob/main/README.md)，[releases](https://github.com/darkhanakh/pg-kazsearch/releases)

`pg_kazsearch` 是一个面向哈萨克语的 PostgreSQL 全文检索扩展。README 说明它会创建可直接使用的文本搜索配置 `kazakh_cfg` 和词典 `pg_kazsearch_dict`。

### 快速开始

```sql
CREATE EXTENSION pg_kazsearch;

SELECT ts_lexize('pg_kazsearch_dict', 'алмаларымыздағы');
-- {алма}

SELECT to_tsvector('kazakh_cfg', 'президенттің жарлығы');
-- 'жарлық':2 'президент':1
```

### 为表添加哈萨克语 FTS

```sql
ALTER TABLE articles ADD COLUMN fts tsvector
    GENERATED ALWAYS AS (
        setweight(to_tsvector('kazakh_cfg', title), 'A') ||
        setweight(to_tsvector('kazakh_cfg', body), 'B')
    ) STORED;

CREATE INDEX idx_fts ON articles USING GIN (fts);

SELECT title
FROM articles
WHERE fts @@ websearch_to_tsquery('kazakh_cfg', 'президенттің жарлығы')
ORDER BY ts_rank_cd(fts, websearch_to_tsquery('kazakh_cfg', 'президенттің жарлығы')) DESC
LIMIT 10;
```

### 调优

README 说明词典参数可以在运行时调整，无需重启：

```sql
ALTER TEXT SEARCH DICTIONARY pg_kazsearch_dict
  (w_deriv = 3.5, w_short_char = 100.0);
```

### 发布与打包说明

- 上游 `v2.0.0` 引入了当前基于 Rust / `pgrx` 的架构。
- 上游 `v2.1.0` 在 PostgreSQL 扩展之外新增了 Elasticsearch 插件，但 README 中的 PostgreSQL SQL 用法没有变化。
- 仓库 README 发布 Debian `2.x` 软件包，而本项目的 CSV 说明会单独跟踪 extension control version。

### 注意事项

面向 PostgreSQL 的文档目前较简洁，重点只覆盖词干提取与全文检索用法。这里不要推断 README 未明确列出的额外 SQL 对象，保守限定在 `kazakh_cfg`、`pg_kazsearch_dict` 和上面给出的示例。

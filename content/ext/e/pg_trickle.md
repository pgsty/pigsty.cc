---
title: "pg_trickle"
linkTitle: "pg_trickle"
description: "为 PostgreSQL 18 提供流式表与差分视图维护"
weight: 2860
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/grove/pg-trickle">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">grove/pg-trickle</div>
    <div class="ext-card__desc">https://github.com/grove/pg-trickle</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_trickle-0.17.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_trickle-0.17.0.tar.gz</div>
    <div class="ext-card__desc">pg_trickle-0.17.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_trickle`**](/ext/e/pg_trickle) | `0.17.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2860  | [**`pg_trickle`**](/ext/e/pg_trickle) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_ivm`](/ext/e/pg_ivm) [`pg_incremental`](/ext/e/pg_incremental) [`pg_partman`](/ext/e/pg_partman) [`timeseries`](/ext/e/timeseries) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.17.0` | {{< pgvers "18" >}} | `pg_trickle` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.17.0` | {{< pgvers "18" >}} | `pg_trickle_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.17.0` | {{< pgvers "18" >}} | `postgresql-$v-pg-trickle` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.17.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_trickle_18 pg_trickle_18-0.17.0-1PIGSTY.el8.x86_64.rpm pigsty 0.17.0 2.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_trickle_18-0.17.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_trickle_18 pg_trickle_18-0.17.0-1PIGSTY.el8.aarch64.rpm pigsty 0.17.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_trickle_18-0.17.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_trickle_18 pg_trickle_18-0.17.0-1PIGSTY.el9.x86_64.rpm pigsty 0.17.0 2.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_trickle_18-0.17.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_trickle_18 pg_trickle_18-0.17.0-1PIGSTY.el9.aarch64.rpm pigsty 0.17.0 1.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_trickle_18-0.17.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_trickle_18 pg_trickle_18-0.17.0-1PIGSTY.el10.x86_64.rpm pigsty 0.17.0 2.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_trickle_18-0.17.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_trickle_18 pg_trickle_18-0.17.0-1PIGSTY.el10.aarch64.rpm pigsty 0.17.0 1.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_trickle_18-0.17.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.17.0-1PIGSTY~bookworm_amd64.deb pigsty 0.17.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.17.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.17.0-1PIGSTY~bookworm_arm64.deb pigsty 0.17.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.17.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.17.0-1PIGSTY~trixie_amd64.deb pigsty 0.17.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.17.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.17.0-1PIGSTY~trixie_arm64.deb pigsty 0.17.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.17.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.17.0-1PIGSTY~jammy_amd64.deb pigsty 0.17.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.17.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.17.0-1PIGSTY~jammy_arm64.deb pigsty 0.17.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.17.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.17.0-1PIGSTY~noble_amd64.deb pigsty 0.17.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.17.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.17.0-1PIGSTY~noble_arm64.deb pigsty 0.17.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.17.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_trickle` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_trickle         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_trickle` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_trickle;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_trickle -v 18  # PG 18
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_trickle_18       # PG 18
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-trickle   # PG 18
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_trickle';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_trickle;
```

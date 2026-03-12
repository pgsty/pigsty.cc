---
title: "pglogical_origin"
linkTitle: "pglogical_origin"
description: "用于从 Postgres 9.4 升级时的兼容性虚拟扩展"
weight: 9501
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/2ndQuadrant/pglogical">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">2ndQuadrant/pglogical</div>
    <div class="ext-card__desc">https://github.com/2ndQuadrant/pglogical</div>
  </a>
  <a class="ext-card ext-card--source" href="pglogical-2.4.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pglogical-2.4.6.tar.gz</div>
    <div class="ext-card__desc">pglogical-2.4.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pglogical`**](/ext/e/pglogical) | `2.4.6` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9500  | [**`pglogical`**](/ext/e/pglogical) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pglogical` |
| 9501  | [**`pglogical_origin`**](/ext/e/pglogical_origin) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pglogical_origin` |
{.ext-table}

| **相关扩展** | [`pglogical_ticker`](/ext/e/pglogical_ticker) [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`pgactive`](/ext/e/pgactive) [`wal2json`](/ext/e/wal2json) [`decoderbufs`](/ext/e/decoderbufs) [`repmgr`](/ext/e/repmgr) [`decoder_raw`](/ext/e/decoder_raw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.6` | {{< pgvers "18,17,16,15,14" >}} | `pglogical` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.6` | {{< pgvers "18,17,16,15,14" >}} | `pglogical_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pglogical` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.4 1 | AVAIL PGDG 2.4.3 2 | AVAIL PGDG 2.4.3 4 |
| el8.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.4 1 | AVAIL PGDG 2.4.3 2 | AVAIL PGDG 2.4.3 2 |
| el9.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.4 1 | AVAIL PGDG 2.4.3 2 | AVAIL PGDG 2.4.3 3 |
| el9.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.4 1 | AVAIL PGDG 2.4.3 2 | AVAIL PGDG 2.4.3 2 |
| el10.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 |
| el10.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 | AVAIL PGDG 2.4.5 1 |
| d12.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| d12.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| d13.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| d13.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| u22.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| u22.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| u24.x86_64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
| u24.aarch64 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 | AVAIL PGDG 2.4.6 1 |
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pglogical` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pglogical;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pglogical -v 18  # PG 18
pig ext install -y pglogical -v 17  # PG 17
pig ext install -y pglogical -v 16  # PG 16
pig ext install -y pglogical -v 15  # PG 15
pig ext install -y pglogical -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pglogical_18       # PG 18
dnf install -y pglogical_17       # PG 17
dnf install -y pglogical_16       # PG 16
dnf install -y pglogical_15       # PG 15
dnf install -y pglogical_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pglogical   # PG 18
apt install -y postgresql-17-pglogical   # PG 17
apt install -y postgresql-16-pglogical   # PG 16
apt install -y postgresql-15-pglogical   # PG 15
apt install -y postgresql-14-pglogical   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pglogical_origin;
```



## 用法

> [pglogical_origin: 从 Postgres 9.4 升级时的兼容性虚拟扩展](https://github.com/2ndQuadrant/pglogical)

`pglogical_origin` 扩展是随 pglogical 提供的兼容性填充。它的存在仅仅是为了方便从 PostgreSQL 9.4 升级，在该版本中复制源追踪由 pglogical 扩展本身处理而非 PostgreSQL 核心。

### 启用

```sql
CREATE EXTENSION pglogical_origin;
```

### 概述

从 PostgreSQL 9.5 开始，复制源追踪成为 PostgreSQL 内置功能（`pg_replication_origin`）。`pglogical_origin` 扩展是一个空/虚拟扩展：

- 防止升级之前依赖它的数据库时出错
- 提供从 PostgreSQL 9.4 上 pglogical 到新版本的平滑迁移路径
- 不包含实际功能 —— 所有源追踪由 PostgreSQL 核心处理

### 何时使用

仅在以下情况下需要此扩展：

- 从使用了 pglogical 的 PostgreSQL 9.4 数据库升级
- 数据库中有对 `pglogical_origin` 扩展的现有引用

对于新安装，不需要此扩展。直接使用 pglogical，它利用了 PostgreSQL 内置的复制源支持。

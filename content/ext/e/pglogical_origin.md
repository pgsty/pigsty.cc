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

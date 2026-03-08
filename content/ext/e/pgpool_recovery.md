---
title: "pgpool_recovery"
linkTitle: "pgpool_recovery"
description: "PGPool辅助扩展，从v4.3提供的恢复函数"
weight: 5910
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://pgpool.net/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://pgpool.net/</div>
    <div class="ext-card__desc">https://pgpool.net/</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgpool`**](/ext/e/pgpool_adm) | `4.7.1` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5900  | [**`pgpool_adm`**](/ext/e/pgpool_adm) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 5910  | [**`pgpool_recovery`**](/ext/e/pgpool_recovery) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 5920  | [**`pgpool_regclass`**](/ext/e/pgpool_regclass) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgautofailover`](/ext/e/pgautofailover) [`pglogical`](/ext/e/pglogical) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`repmgr`](/ext/e/repmgr) [`pg_repack`](/ext/e/pg_repack) [`pg_rewrite`](/ext/e/pg_rewrite) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.7.1` | {{< pgvers "18,17,16,15,14" >}} | `pgpool` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.7.1` | {{< pgvers "18,17,16,15,14" >}} | `pgpool-II-pg$v-extensions` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.7.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgpool2` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 13 | AVAIL PGDG 4.7.1 16 | AVAIL PGDG 4.7.1 19 |
| el8.aarch64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 13 | AVAIL PGDG 4.7.1 15 | AVAIL PGDG 4.7.1 15 |
| el9.x86_64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 13 | AVAIL PGDG 4.7.1 16 | AVAIL PGDG 4.7.1 18 |
| el9.aarch64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 13 | AVAIL PGDG 4.7.1 16 | AVAIL PGDG 4.7.1 16 |
| el10.x86_64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 |
| el10.aarch64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 |
| d12.x86_64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| d12.aarch64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| d13.x86_64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| d13.aarch64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| u22.x86_64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| u22.aarch64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| u24.x86_64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| u24.aarch64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgpool` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgpool;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgpool -v 18  # PG 18
pig ext install -y pgpool -v 17  # PG 17
pig ext install -y pgpool -v 16  # PG 16
pig ext install -y pgpool -v 15  # PG 15
pig ext install -y pgpool -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgpool-II-pg18-extensions       # PG 18
dnf install -y pgpool-II-pg17-extensions       # PG 17
dnf install -y pgpool-II-pg16-extensions       # PG 16
dnf install -y pgpool-II-pg15-extensions       # PG 15
dnf install -y pgpool-II-pg14-extensions       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgpool2   # PG 18
apt install -y postgresql-17-pgpool2   # PG 17
apt install -y postgresql-16-pgpool2   # PG 16
apt install -y postgresql-15-pgpool2   # PG 15
apt install -y postgresql-14-pgpool2   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgpool_recovery;
```

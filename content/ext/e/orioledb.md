---
title: "orioledb"
linkTitle: "orioledb"
description: "OrioleDB，下一代事务处理引擎"
weight: 2910
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/orioledb/orioledb">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">orioledb/orioledb</div>
    <div class="ext-card__desc">https://github.com/orioledb/orioledb</div>
  </a>
  <a class="ext-card ext-card--source" href="orioledb-beta14.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">orioledb-beta14.tar.gz</div>
    <div class="ext-card__desc">orioledb-beta14.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`orioledb`**](/ext/e/orioledb) | `1.6` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2910  | [**`orioledb`**](/ext/e/orioledb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_mooncake`](/ext/e/pg_mooncake) [`citus_columnar`](/ext/e/citus_columnar) [`pg_analytics`](/ext/e/pg_analytics) [`pg_duckdb`](/ext/e/pg_duckdb) [`timescaledb`](/ext/e/timescaledb) [`citus`](/ext/e/citus) [`pg_strom`](/ext/e/pg_strom) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> special case: this extension only works on patched postgres kernel: oriolepg, 1.6-beta14


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.6` | {{< pgvers "17" >}} | `orioledb` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.6` | {{< pgvers "17" >}} | `orioledb_$v` | `oriolepg_$v` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.6` | {{< pgvers "17" >}} | `oriolepg-$v-orioledb` | `oriolepg-$v` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 17 orioledb_17 orioledb_17-1.6-beta14PIGSTY.el8.x86_64.rpm pigsty 1.6 475.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/orioledb_17-1.6-beta14PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 orioledb_17 orioledb_17-1.6-beta14PIGSTY.el8.aarch64.rpm pigsty 1.6 452.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/orioledb_17-1.6-beta14PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 orioledb_17 orioledb_17-1.6-beta14PIGSTY.el9.x86_64.rpm pigsty 1.6 448.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/orioledb_17-1.6-beta14PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 orioledb_17 orioledb_17-1.6-beta14PIGSTY.el9.aarch64.rpm pigsty 1.6 440.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/orioledb_17-1.6-beta14PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 orioledb_17 orioledb_17-1.6-beta14PIGSTY.el10.x86_64.rpm pigsty 1.6 463.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/orioledb_17-1.6-beta14PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 orioledb_17 orioledb_17-1.6-beta14PIGSTY.el10.aarch64.rpm pigsty 1.6 452.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/orioledb_17-1.6-beta14PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.6-0.beta14PIGSTY~bookworm_amd64.deb pigsty 1.6 1.6MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.6-0.beta14PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.6-0.beta14PIGSTY~bookworm_arm64.deb pigsty 1.6 1.5MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.6-0.beta14PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.6-0.beta14PIGSTY~trixie_amd64.deb pigsty 1.6 1.3MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.6-0.beta14PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.6-0.beta14PIGSTY~trixie_arm64.deb pigsty 1.6 1.3MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.6-0.beta14PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.6-0.beta14PIGSTY~jammy_amd64.deb pigsty 1.6 1.7MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.6-0.beta14PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.6-0.beta14PIGSTY~jammy_arm64.deb pigsty 1.6 1.6MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.6-0.beta14PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.6-0.beta14PIGSTY~noble_amd64.deb pigsty 1.6 1.5MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.6-0.beta14PIGSTY~noble_amd64.deb
@ u24.aarch64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.6-0.beta14PIGSTY~noble_arm64.deb pigsty 1.6 1.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.6-0.beta14PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `orioledb` 扩展的 RPM / DEB 包：

```bash
pig build pkg orioledb         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `orioledb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install orioledb;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y orioledb -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y orioledb_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y oriolepg-17-orioledb   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'orioledb';
```


**创建扩展**：

```sql
CREATE EXTENSION orioledb;
```

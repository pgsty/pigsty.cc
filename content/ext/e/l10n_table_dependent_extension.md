---
title: "l10n_table_dependent_extension"
linkTitle: "l10n_table_dependent_extension"
description: "PostgreSQL l10n 工具包"
weight: 3671
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bigsmoke/pg_xenophile">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bigsmoke/pg_xenophile</div>
    <div class="ext-card__desc">https://github.com/bigsmoke/pg_xenophile</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_xenophile-0.8.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_xenophile-0.8.3.tar.gz</div>
    <div class="ext-card__desc">pg_xenophile-0.8.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_xenophile`**](/ext/e/pg_xenophile) | `0.8.3` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3670  | [**`pg_xenophile`**](/ext/e/pg_xenophile) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `xeno` |
| 3671  | [**`l10n_table_dependent_extension`**](/ext/e/l10n_table_dependent_extension) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_xenophile`](/ext/e/pg_xenophile) [`country`](/ext/e/country) [`currency`](/ext/e/currency) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_xenophile` | `pg_xenophile` |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_xenophile_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.8.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-xenophile` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 | AVAIL PIGSTY 0.8.3 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_xenophile` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_xenophile         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_xenophile` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_xenophile;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_xenophile -v 18  # PG 18
pig ext install -y pg_xenophile -v 17  # PG 17
pig ext install -y pg_xenophile -v 16  # PG 16
pig ext install -y pg_xenophile -v 15  # PG 15
pig ext install -y pg_xenophile -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_xenophile_18       # PG 18
dnf install -y pg_xenophile_17       # PG 17
dnf install -y pg_xenophile_16       # PG 16
dnf install -y pg_xenophile_15       # PG 15
dnf install -y pg_xenophile_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-xenophile   # PG 18
apt install -y postgresql-17-pg-xenophile   # PG 17
apt install -y postgresql-16-pg-xenophile   # PG 16
apt install -y postgresql-15-pg-xenophile   # PG 15
apt install -y postgresql-14-pg-xenophile   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION l10n_table_dependent_extension CASCADE;  -- 依赖: pg_xenophile
```



## 用法

> [l10n_table_dependent_extension: pg_xenophile 的本地化表依赖扩展](https://github.com/bigsmoke/pg_xenophile)

`l10n_table_dependent_extension` 是 `pg_xenophile` 的配套扩展，为依赖其本地化 (l10n) 表机制的其他扩展提供基础设施。

```sql
CREATE EXTENSION l10n_table_dependent_extension;
```

该扩展与 `pg_xenophile` 的 `l10n_table` 系统协同工作，允许依赖扩展将其表注册到本地化框架中。当基表在 `xeno.l10n_table` 中注册后，系统会自动创建配套的翻译表和特定语言的视图。

完整的本地化表管理 API 请参阅 [`pg_xenophile`](https://github.com/bigsmoke/pg_xenophile) 文档。

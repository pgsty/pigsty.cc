---
title: "omni_datasets"
linkTitle: "omni_datasets"
description: "Omnigres 数据库置备工具"
weight: 2947
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://docs.omnigres.org/omni_datasets/northwind/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://docs.omnigres.org/omni_datasets/northwind/</div>
    <div class="ext-card__desc">https://docs.omnigres.org/omni_datasets/northwind/</div>
  </a>
  <a class="ext-card ext-card--source" href="omnigres-20251108.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">omnigres-20251108.tar.gz</div>
    <div class="ext-card__desc">omnigres-20251108.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`omni_datasets`**](/ext/e/omni) | `0.1.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2947  | [**`omni_datasets`**](/ext/e/omni_datasets) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_datasets` |
{.ext-table}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `omni_datasets` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `omnigres_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-omnigres` | - |
{.ext-table}

## 构建

您可以使用 `pig build` 命令构建 `omni_datasets` 扩展的 RPM / DEB 包：

```bash
pig build pkg omni_datasets         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `omni_datasets` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install omni_datasets;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y omni_datasets -v 18  # PG 18
pig ext install -y omni_datasets -v 17  # PG 17
pig ext install -y omni_datasets -v 16  # PG 16
pig ext install -y omni_datasets -v 15  # PG 15
pig ext install -y omni_datasets -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y omnigres_18       # PG 18
dnf install -y omnigres_17       # PG 17
dnf install -y omnigres_16       # PG 16
dnf install -y omnigres_15       # PG 15
dnf install -y omnigres_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-omnigres   # PG 18
apt install -y postgresql-17-omnigres   # PG 17
apt install -y postgresql-16-omnigres   # PG 16
apt install -y postgresql-15-omnigres   # PG 15
apt install -y postgresql-14-omnigres   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION omni_datasets;
```




## 用法

> [omni_datasets: 数据集配置](https://docs.omnigres.org/omni_datasets/northwind/)

`omni_datasets` 扩展提供对示例数据集的访问，目前包含 Northwind 数据库。

### Northwind 数据集

```sql
CREATE EXTENSION omni_datasets;
CREATE SCHEMA northwind;
SELECT omni_datasets.instantiate_northwind(schema => 'northwind');
```

Northwind 数据集是经典的示例数据库，最初来自 Microsoft Access/SQL Server，使用 Yugabyte 维护的 PostgreSQL 兼容版本。它提供了一个小而真实的商业数据集，包含客户、订单、产品、员工等表。

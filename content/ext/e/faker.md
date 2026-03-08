---
title: "faker"
linkTitle: "faker"
description: "插入生成的测试伪造数据，Python库的包装"
weight: 3210
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/anpandu/postgresql_faker">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">anpandu/postgresql_faker</div>
    <div class="ext-card__desc">https://github.com/anpandu/postgresql_faker</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`faker`**](/ext/e/faker) | `0.5.3` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang python" href="/ext/language#python">Python</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3210  | [**`faker`**](/ext/e/faker) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plpython3u`](/ext/e/plpython3u) [`pgtap`](/ext/e/pgtap) [`dbt2`](/ext/e/dbt2) [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) [`ltree_plpython3u`](/ext/e/ltree_plpython3u) [`hstore_plpython3u`](/ext/e/hstore_plpython3u) [`random`](/ext/e/random) [`pg_tle`](/ext/e/pg_tle) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.5.3` | {{< pgvers "18,17,16,15,14" >}} | `faker` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.5.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql_faker_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 2 |
| el8.aarch64 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 |
| el9.x86_64 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 2 |
| el9.aarch64 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 |
| el10.x86_64 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 |
| el10.aarch64 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 | AVAIL PGDG 0.5.3 1 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel8.x86_64.rpm pgdg 0.5.3 46.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/postgresql_faker_18-0.5.3-7PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel8.aarch64.rpm pgdg 0.5.3 46.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/postgresql_faker_18-0.5.3-7PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel9.x86_64.rpm pgdg 0.5.3 44.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/postgresql_faker_18-0.5.3-7PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel9.aarch64.rpm pgdg 0.5.3 43.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/postgresql_faker_18-0.5.3-7PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel10.x86_64.rpm pgdg 0.5.3 44.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/postgresql_faker_18-0.5.3-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel10.aarch64.rpm pgdg 0.5.3 44.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/postgresql_faker_18-0.5.3-7PGDG.rhel10.aarch64.rpm
@ el8.x86_64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-6PGDG.rhel8.x86_64.rpm pgdg 0.5.3 45.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/postgresql_faker_17-0.5.3-6PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-6PGDG.rhel8.aarch64.rpm pgdg 0.5.3 46.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/postgresql_faker_17-0.5.3-6PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-6PGDG.rhel9.x86_64.rpm pgdg 0.5.3 44.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/postgresql_faker_17-0.5.3-6PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-6PGDG.rhel9.aarch64.rpm pgdg 0.5.3 44.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/postgresql_faker_17-0.5.3-6PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-7PGDG.rhel10.x86_64.rpm pgdg 0.5.3 44.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/postgresql_faker_17-0.5.3-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-7PGDG.rhel10.aarch64.rpm pgdg 0.5.3 44.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/postgresql_faker_17-0.5.3-7PGDG.rhel10.aarch64.rpm
@ el8.x86_64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-3PGDG.rhel8.x86_64.rpm pgdg 0.5.3 45.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgresql_faker_16-0.5.3-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-3PGDG.rhel8.aarch64.rpm pgdg 0.5.3 45.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgresql_faker_16-0.5.3-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-3PGDG.rhel9.x86_64.rpm pgdg 0.5.3 44.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgresql_faker_16-0.5.3-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-3PGDG.rhel9.aarch64.rpm pgdg 0.5.3 44.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgresql_faker_16-0.5.3-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-7PGDG.rhel10.x86_64.rpm pgdg 0.5.3 44.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/postgresql_faker_16-0.5.3-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-7PGDG.rhel10.aarch64.rpm pgdg 0.5.3 44.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/postgresql_faker_16-0.5.3-7PGDG.rhel10.aarch64.rpm
@ el8.x86_64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-1.rhel8.x86_64.rpm pgdg 0.5.3 49.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgresql_faker_15-0.5.3-1.rhel8.x86_64.rpm
@ el8.aarch64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-1.rhel8.aarch64.rpm pgdg 0.5.3 49.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgresql_faker_15-0.5.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-1.rhel9.x86_64.rpm pgdg 0.5.3 48.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgresql_faker_15-0.5.3-1.rhel9.x86_64.rpm
@ el9.aarch64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-1.rhel9.aarch64.rpm pgdg 0.5.3 48.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgresql_faker_15-0.5.3-1.rhel9.aarch64.rpm
@ el10.x86_64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-7PGDG.rhel10.x86_64.rpm pgdg 0.5.3 44.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/postgresql_faker_15-0.5.3-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-7PGDG.rhel10.aarch64.rpm pgdg 0.5.3 44.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/postgresql_faker_15-0.5.3-7PGDG.rhel10.aarch64.rpm
@ el8.x86_64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-1.rhel8.x86_64.rpm pgdg 0.5.3 49.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgresql_faker_14-0.5.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 postgresql_faker_14 postgresql_faker_14-0.4.0-1.rhel8.noarch.rpm pgdg 0.4.0 37.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgresql_faker_14-0.4.0-1.rhel8.noarch.rpm
@ el8.aarch64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-1.rhel8.aarch64.rpm pgdg 0.5.3 49.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgresql_faker_14-0.5.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-1.rhel9.x86_64.rpm pgdg 0.5.3 48.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgresql_faker_14-0.5.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-1.rhel9.noarch.rpm pgdg 0.5.3 47.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgresql_faker_14-0.5.3-1.rhel9.noarch.rpm
@ el9.aarch64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-1.rhel9.aarch64.rpm pgdg 0.5.3 48.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgresql_faker_14-0.5.3-1.rhel9.aarch64.rpm
@ el10.x86_64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-7PGDG.rhel10.x86_64.rpm pgdg 0.5.3 44.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/postgresql_faker_14-0.5.3-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-7PGDG.rhel10.aarch64.rpm pgdg 0.5.3 44.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/postgresql_faker_14-0.5.3-7PGDG.rhel10.aarch64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `faker` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install faker;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y faker -v 18  # PG 18
pig ext install -y faker -v 17  # PG 17
pig ext install -y faker -v 16  # PG 16
pig ext install -y faker -v 15  # PG 15
pig ext install -y faker -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y postgresql_faker_18       # PG 18
dnf install -y postgresql_faker_17       # PG 17
dnf install -y postgresql_faker_16       # PG 16
dnf install -y postgresql_faker_15       # PG 15
dnf install -y postgresql_faker_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION faker;
```

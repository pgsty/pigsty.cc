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
| u26.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u26.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel8.x86_64.rpm pgdg 0.5.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/postgresql_faker_18-0.5.3-7PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel8.aarch64.rpm pgdg 0.5.3 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/postgresql_faker_18-0.5.3-7PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel9.x86_64.rpm pgdg 0.5.3 44.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/postgresql_faker_18-0.5.3-7PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel9.aarch64.rpm pgdg 0.5.3 43.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/postgresql_faker_18-0.5.3-7PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel10.x86_64.rpm pgdg 0.5.3 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/postgresql_faker_18-0.5.3-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 postgresql_faker_18 postgresql_faker_18-0.5.3-7PGDG.rhel10.aarch64.rpm pgdg 0.5.3 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgresql_faker_18-0.5.3-7PGDG.rhel10.aarch64.rpm
@ el8.x86_64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-6PGDG.rhel8.x86_64.rpm pgdg 0.5.3 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/postgresql_faker_17-0.5.3-6PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-6PGDG.rhel8.aarch64.rpm pgdg 0.5.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgresql_faker_17-0.5.3-6PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-6PGDG.rhel9.x86_64.rpm pgdg 0.5.3 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/postgresql_faker_17-0.5.3-6PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-6PGDG.rhel9.aarch64.rpm pgdg 0.5.3 44.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/postgresql_faker_17-0.5.3-6PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-7PGDG.rhel10.x86_64.rpm pgdg 0.5.3 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/postgresql_faker_17-0.5.3-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 postgresql_faker_17 postgresql_faker_17-0.5.3-7PGDG.rhel10.aarch64.rpm pgdg 0.5.3 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgresql_faker_17-0.5.3-7PGDG.rhel10.aarch64.rpm
@ el8.x86_64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-3PGDG.rhel8.x86_64.rpm pgdg 0.5.3 45.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgresql_faker_16-0.5.3-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-3PGDG.rhel8.aarch64.rpm pgdg 0.5.3 45.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgresql_faker_16-0.5.3-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-3PGDG.rhel9.x86_64.rpm pgdg 0.5.3 44.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/postgresql_faker_16-0.5.3-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-3PGDG.rhel9.aarch64.rpm pgdg 0.5.3 44.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/postgresql_faker_16-0.5.3-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-7PGDG.rhel10.x86_64.rpm pgdg 0.5.3 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/postgresql_faker_16-0.5.3-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 postgresql_faker_16 postgresql_faker_16-0.5.3-7PGDG.rhel10.aarch64.rpm pgdg 0.5.3 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgresql_faker_16-0.5.3-7PGDG.rhel10.aarch64.rpm
@ el8.x86_64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-1.rhel8.x86_64.rpm pgdg 0.5.3 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgresql_faker_15-0.5.3-1.rhel8.x86_64.rpm
@ el8.aarch64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-1.rhel8.aarch64.rpm pgdg 0.5.3 49.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgresql_faker_15-0.5.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-1.rhel9.x86_64.rpm pgdg 0.5.3 48.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/postgresql_faker_15-0.5.3-1.rhel9.x86_64.rpm
@ el9.aarch64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-1.rhel9.aarch64.rpm pgdg 0.5.3 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/postgresql_faker_15-0.5.3-1.rhel9.aarch64.rpm
@ el10.x86_64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-7PGDG.rhel10.x86_64.rpm pgdg 0.5.3 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/postgresql_faker_15-0.5.3-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 postgresql_faker_15 postgresql_faker_15-0.5.3-7PGDG.rhel10.aarch64.rpm pgdg 0.5.3 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgresql_faker_15-0.5.3-7PGDG.rhel10.aarch64.rpm
@ el8.x86_64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-1.rhel8.x86_64.rpm pgdg 0.5.3 49.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/postgresql_faker_14-0.5.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 postgresql_faker_14 postgresql_faker_14-0.4.0-1.rhel8.noarch.rpm pgdg 0.4.0 37.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/postgresql_faker_14-0.4.0-1.rhel8.noarch.rpm
@ el8.aarch64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-1.rhel8.aarch64.rpm pgdg 0.5.3 49.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/postgresql_faker_14-0.5.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-1.rhel9.x86_64.rpm pgdg 0.5.3 48.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/postgresql_faker_14-0.5.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-1.rhel9.noarch.rpm pgdg 0.5.3 47.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/postgresql_faker_14-0.5.3-1.rhel9.noarch.rpm
@ el9.aarch64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-1.rhel9.aarch64.rpm pgdg 0.5.3 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/postgresql_faker_14-0.5.3-1.rhel9.aarch64.rpm
@ el10.x86_64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-7PGDG.rhel10.x86_64.rpm pgdg 0.5.3 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/postgresql_faker_14-0.5.3-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 postgresql_faker_14 postgresql_faker_14-0.5.3-7PGDG.rhel10.aarch64.rpm pgdg 0.5.3 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/postgresql_faker_14-0.5.3-7PGDG.rhel10.aarch64.rpm
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



## 用法

> [faker: Python Faker 库的包装器](https://github.com/anpandu/postgresql_faker)

`faker` 是一个 PostgreSQL 扩展，封装了 Python 的 Faker 库，提供在 SQL 查询中直接生成逼真假数据的函数。它需要 `plpython3u`。

```sql
CREATE EXTENSION faker;
```

### 生成假数据

```sql
SELECT faker.name();           -- 'John Smith'
SELECT faker.first_name();     -- 'Jane'
SELECT faker.last_name();      -- 'Doe'
SELECT faker.email();          -- 'jane.doe@example.com'
SELECT faker.address();        -- '123 Main St, Anytown, US 12345'
SELECT faker.company();        -- 'Smith LLC'
SELECT faker.phone_number();   -- '(555) 123-4567'
SELECT faker.text();           -- 随机文本段落
SELECT faker.city();           -- 'Portland'
SELECT faker.country();        -- 'United States'
```

注意：`faker.date()` 和 `faker.time()` **不可用**，因为 `date` 和 `time` 是 PostgreSQL 保留关键字。请改用 `faker.date_between()` 或 `faker.date_this_century()`。

### 用假数据填充表

```sql
INSERT INTO users (name, email, address, created_at)
SELECT
  faker.name(),
  faker.email(),
  faker.address(),
  faker.date_this_century()::timestamp
FROM generate_series(1, 1000);
```

### 本地化假数据

语言环境按会话设置，而非按函数调用：

```sql
SELECT faker.faker('de_DE');   -- 为当前会话设置语言环境
SELECT faker.name();           -- 返回德语名字
SELECT faker.address();        -- 返回德语地址
```

### 唯一值

使用 `unique_` 前缀确保会话内值唯一：

```sql
SELECT faker.unique_name();
SELECT faker.unique_email();
```

### 查看所有函数

```sql
SELECT faker._functions();     -- 列出所有 500+ 个可用函数
```

所有 faker 函数返回 `text` 类型。如需其他类型请显式转换。

### 常用 Faker 提供器

| 函数 | 说明 |
|------|------|
| `faker.name()` | 全名 |
| `faker.first_name()` | 名 |
| `faker.last_name()` | 姓 |
| `faker.email()` | 电子邮件地址 |
| `faker.company_email()` | 公司邮箱 |
| `faker.phone_number()` | 电话号码 |
| `faker.address()` | 完整地址 |
| `faker.city()` | 城市名 |
| `faker.country()` | 国家名 |
| `faker.company()` | 公司名 |
| `faker.text()` | 随机文本 |
| `faker.date_this_century()` | 随机日期 |
| `faker.ssn()` | 社会安全号码 |
| `faker.ean()` | EAN 条形码 |

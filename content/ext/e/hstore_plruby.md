---
title: "hstore_plruby"
linkTitle: "hstore_plruby"
description: "在 hstore 与 PL/Ruby 的 Ruby Hash 之间转换"
weight: 3162
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/commandprompt/plruby">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">commandprompt/plruby</div>
    <div class="ext-card__desc">https://github.com/commandprompt/plruby</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/plruby-2.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plruby-2.5.0.tar.gz</div>
    <div class="ext-card__desc">plruby-2.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plruby`**](/ext/e/plruby) | `1.0` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3160  | [**`plruby`**](/ext/e/plruby) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 3161  | [**`jsonb_plruby`**](/ext/e/jsonb_plruby) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 3162  | [**`hstore_plruby`**](/ext/e/hstore_plruby) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 3163  | [**`ltree_plruby`**](/ext/e/ltree_plruby) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`hstore`](/ext/e/hstore) [`plruby`](/ext/e/plruby) [`hstore`](/ext/e/hstore) [`plruby`](/ext/e/plruby) [`jsonb_plruby`](/ext/e/jsonb_plruby) [`ltree_plruby`](/ext/e/ltree_plruby) [`hstore_plperl`](/ext/e/hstore_plperl) [`hstore_plpython3u`](/ext/e/hstore_plpython3u) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Extension control default_version is 1.0; shipped in the PL/Ruby 2.5.0 package.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `plruby` | `hstore`, `plruby` |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.5.0` | {{< pgvers "18,17,16,15,14" >}} | `plruby_$v` | `ruby-libs` |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plruby` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `plruby` 扩展的 RPM / DEB 包：

```bash
pig build pkg plruby         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `plruby` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install plruby;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y plruby -v 18  # PG 18
pig ext install -y plruby -v 17  # PG 17
pig ext install -y plruby -v 16  # PG 16
pig ext install -y plruby -v 15  # PG 15
pig ext install -y plruby -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y plruby_18       # PG 18
dnf install -y plruby_17       # PG 17
dnf install -y plruby_16       # PG 16
dnf install -y plruby_15       # PG 15
dnf install -y plruby_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-plruby   # PG 18
apt install -y postgresql-17-plruby   # PG 17
apt install -y postgresql-16-plruby   # PG 16
apt install -y postgresql-15-plruby   # PG 15
apt install -y postgresql-14-plruby   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION hstore_plruby CASCADE;  -- 依赖: hstore, plruby
```

## 用法

来源：

- [PL/Ruby v2.5.0 README](https://github.com/commandprompt/plruby/blob/v2.5.0/README.md)
- [hstore_plruby v1.0 控制文件](https://github.com/commandprompt/plruby/blob/v2.5.0/hstore_plruby/hstore_plruby.control)
- [hstore_plruby v1.0 扩展 SQL](https://github.com/commandprompt/plruby/blob/v2.5.0/hstore_plruby/hstore_plruby--1.0.sql)

`hstore_plruby` 为 `plruby` 语言安装 PostgreSQL `hstore` 与 Ruby `Hash` 值之间的转换。键会变为 Ruby 字符串，值会变为字符串或 `nil`；兼容的 Ruby 哈希也可以直接作为 `hstore` 返回。

### 安装并使用转换

```sql
CREATE EXTENSION hstore;
CREATE EXTENSION plruby;
CREATE EXTENSION hstore_plruby;

CREATE FUNCTION ruby_add_hstore_key(hstore)
RETURNS hstore
LANGUAGE plruby
TRANSFORM FOR TYPE hstore
AS $$
  value = args[0]
  value['processed'] = 'yes'
  value
$$;

SELECT ruby_add_hstore_key('id=>42'::hstore);
```

只有声明了 `TRANSFORM FOR TYPE hstore` 的函数才会使用该转换。

### 对象与注意事项

- `hstore_to_plruby(internal)` 实现从 SQL 到 Ruby 的转换。
- `plruby_to_hstore(internal)` 实现从 Ruby 到 SQL 的转换。
- 扩展版本为 `1.0`，同时依赖 `hstore` 和 `plruby`，并且可重定位。
- `hstore` 是从字符串到字符串或 NULL 的扁平映射。它不会保留嵌套的 Ruby 哈希、数组或有类型的数值；如果这些数据形态很重要，请使用 `jsonb_plruby`。
- PL/Ruby 仍是不受信任的语言。安装此转换不会为 Ruby 代码提供沙箱，也不会降低创建 PL/Ruby 函数所需的权限。

---
title: "hstore_pllua"
linkTitle: "hstore_pllua"
description: "Lua 程序语言的Hstore适配扩展"
weight: 3021
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pllua/pllua">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pllua/pllua</div>
    <div class="ext-card__desc">https://github.com/pllua/pllua</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pllua`**](/ext/e/pllua) | `2.0.12` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3020  | [**`pllua`**](/ext/e/pllua) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 3021  | [**`hstore_pllua`**](/ext/e/hstore_pllua) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 3030  | [**`plluau`**](/ext/e/plluau) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 3031  | [**`hstore_plluau`**](/ext/e/hstore_plluau) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`hstore`](/ext/e/hstore) [`pllua`](/ext/e/pllua) [`hstore_plperl`](/ext/e/hstore_plperl) [`hstore_plperlu`](/ext/e/hstore_plperlu) [`hstore_plpython3u`](/ext/e/hstore_plpython3u) [`plpgsql`](/ext/e/plpgsql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> missing pg12-15 on el.aarch64


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.12` | {{< pgvers "18,17,16,15,14" >}} | `pllua` | `hstore`, `pllua` |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.12` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pllua` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.11 2 | AVAIL PGDG 2.0.11 2 |
| el8.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.11 2 | AVAIL PGDG 2.0.11 1 |
| el9.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| el10.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| d12.x86_64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| d12.aarch64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| d13.x86_64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| d13.aarch64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| u22.x86_64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| u22.aarch64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| u24.x86_64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| u24.aarch64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pllua` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pllua;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pllua -v 18  # PG 18
pig ext install -y pllua -v 17  # PG 17
pig ext install -y pllua -v 16  # PG 16
pig ext install -y pllua -v 15  # PG 15
pig ext install -y pllua -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pllua   # PG 18
apt install -y postgresql-17-pllua   # PG 17
apt install -y postgresql-16-pllua   # PG 16
apt install -y postgresql-15-pllua   # PG 15
apt install -y postgresql-14-pllua   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION hstore_pllua CASCADE;  -- 依赖: hstore, pllua
```



## 用法

> [hstore_pllua: PL/Lua 的 hstore 转换支持](https://github.com/pllua/pllua)

`hstore_pllua` 扩展提供了一个转换器，允许 `hstore` 值在 PL/Lua 函数中作为原生 Lua 表直接传递和返回，而非不透明的 datum 对象。

```sql
CREATE EXTENSION hstore;
CREATE EXTENSION pllua;
CREATE EXTENSION hstore_pllua;
```

### 在 PL/Lua 中使用 hstore

安装转换器后，`hstore` 参数会自动转换为 Lua 表，Lua 表也可以作为 `hstore` 值返回：

```sql
CREATE FUNCTION process_hstore(h hstore) RETURNS hstore LANGUAGE pllua AS $$
  -- h 是一个具有字符串键和字符串值的 Lua 表
  h["new_key"] = "new_value"
  h["modified"] = "true"
  return h
$$;

SELECT process_hstore('name => "Alice", age => "30"'::hstore);
```

### 遍历 hstore 键

```sql
CREATE FUNCTION hstore_keys(h hstore) RETURNS SETOF text LANGUAGE pllua AS $$
  for k, v in pairs(h) do
    coroutine.yield(k)
  end
$$;
```

如果没有此转换器，`hstore` 值需要使用 `hstore` 类型函数手动转换。

---
title: "plluau"
linkTitle: "plluau"
description: "Lua 程序语言（不受信任的）"
weight: 3030
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

| **相关扩展** | [`plperlu`](/ext/e/plperlu) [`plpgsql`](/ext/e/plpgsql) [`plpython3u`](/ext/e/plpython3u) [`plv8`](/ext/e/plv8) [`pljava`](/ext/e/pljava) [`pltclu`](/ext/e/pltclu) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`hstore_plluau`](/ext/e/hstore_plluau) |
{.ext-table .ext-table--rel}


> missing pg12-15 on el.aarch64


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.12` | {{< pgvers "18,17,16,15,14" >}} | `pllua` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.12` | {{< pgvers "17,16,15,14" >}} | `pllua_$v` | - |
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
| u26.x86_64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| u26.aarch64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
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
{{% tab header="dnf" %}}
```bash
dnf install -y pllua_18       # PG 18
dnf install -y pllua_17       # PG 17
dnf install -y pllua_16       # PG 16
dnf install -y pllua_15       # PG 15
dnf install -y pllua_14       # PG 14
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
CREATE EXTENSION plluau;
```



## 用法

> [plluau: Lua 不可信过程语言](https://github.com/pllua/pllua)

`plluau` 是 `pllua` 的不可信变体，允许 Lua 函数访问文件系统、加载任意模块，以及执行在可信版本中受限的操作。

```sql
CREATE EXTENSION plluau;
```

### 创建函数

```sql
CREATE FUNCTION read_file(path text) RETURNS text LANGUAGE plluau AS $$
  local f = io.open(path, "r")
  if f then
    local content = f:read("*a")
    f:close()
    return content
  end
  return nil
$$;
```

### 与 pllua（可信版本）的区别

| 功能 | pllua（可信） | plluau（不可信） |
|------|--------------|-----------------|
| 文件 I/O | 受限 | 完全访问 |
| 模块加载 | 仅白名单 | 无限制 |
| 操作系统访问 | 否 | 是 |
| 适用于 | 用户自定义函数 | 管理员/超级用户函数 |

### 与 pllua 相同的 API

`plluau` 共享与 `pllua` 相同的 SPI 接口、触发器支持、集合返回函数和数据类型处理。所有 SPI 函数（`spi.execute`、`spi.prepare`、`spi.rows`）、基于协程的集合返回以及触发器函数的工作方式完全相同。

```sql
CREATE FUNCTION run_command(cmd text) RETURNS text LANGUAGE plluau AS $$
  local handle = io.popen(cmd)
  local result = handle:read("*a")
  handle:close()
  return result
$$;
```

### 初始化

通过 GUC 参数配置（仅限超级用户）：

```sql
SET pllua.on_untrusted_init = 'myvar = {}';
```

由于 `plluau` 提供的访问权限不受限制，只有超级用户才能创建 `plluau` 函数。

---
title: "pg_readme_test_extension"
linkTitle: "pg_readme_test_extension"
description: "为模式与扩展生成Markdown文档"
weight: 4301
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bigsmoke/pg_readme">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bigsmoke/pg_readme</div>
    <div class="ext-card__desc">https://github.com/bigsmoke/pg_readme</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_readme-0.7.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_readme-0.7.0.tar.gz</div>
    <div class="ext-card__desc">pg_readme-0.7.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_readme`**](/ext/e/pg_readme) | `0.7.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4300  | [**`pg_readme`**](/ext/e/pg_readme) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 4301  | [**`pg_readme_test_extension`**](/ext/e/pg_readme_test_extension) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`hstore`](/ext/e/hstore) [`schedoc`](/ext/e/schedoc) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) [`pgjq`](/ext/e/pgjq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.7.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_readme` | `hstore` |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.7.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_readme_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.7.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-readme` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 |
| el8.aarch64 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 |
| el9.x86_64 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 |
| el9.aarch64 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 |
| el10.x86_64 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 |
| el10.aarch64 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 | AVAIL PIGSTY 0.7.0 1 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_readme` 扩展的 DEB 包：

```bash
pig build pkg pg_readme         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_readme` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_readme;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_readme -v 18  # PG 18
pig ext install -y pg_readme -v 17  # PG 17
pig ext install -y pg_readme -v 16  # PG 16
pig ext install -y pg_readme -v 15  # PG 15
pig ext install -y pg_readme -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_readme_18       # PG 18
dnf install -y pg_readme_17       # PG 17
dnf install -y pg_readme_16       # PG 16
dnf install -y pg_readme_15       # PG 15
dnf install -y pg_readme_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-readme   # PG 18
apt install -y postgresql-17-pg-readme   # PG 17
apt install -y postgresql-16-pg-readme   # PG 16
apt install -y postgresql-15-pg-readme   # PG 15
apt install -y postgresql-14-pg-readme   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_readme_test_extension CASCADE;  -- 依赖: hstore
```



## 用法

> [pg_readme_test_extension: pg_readme 的测试扩展](https://github.com/bigsmoke/pg_readme)

这是 `pg_readme` 扩展的配套测试扩展。它的存在仅用于测试 `pg_readme` 从 PostgreSQL `COMMENT` 对象生成文档的功能。

该扩展不适用于生产环境。它作为参考实现，演示了如何组织扩展注释和处理指令，以便 `pg_readme` 生成正确的 README 文档。

### 相关

参见 [`pg_readme`](https://github.com/bigsmoke/pg_readme) 扩展了解实际的文档生成功能。

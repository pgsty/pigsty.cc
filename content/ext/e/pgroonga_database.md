---
title: "pgroonga_database"
linkTitle: "pgroonga_database"
description: "PGGroonga 数据库管理模块"
weight: 2111
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgroonga/pgroonga">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgroonga/pgroonga</div>
    <div class="ext-card__desc">https://github.com/pgroonga/pgroonga</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgroonga-4.0.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgroonga-4.0.4.tar.gz</div>
    <div class="ext-card__desc">pgroonga-4.0.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgroonga`**](/ext/e/pgroonga) | `4.0.4` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2110  | [**`pgroonga`**](/ext/e/pgroonga) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 2111  | [**`pgroonga_database`**](/ext/e/pgroonga_database) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`zhparser`](/ext/e/zhparser) [`pg_bigm`](/ext/e/pg_bigm) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`pg_trgm`](/ext/e/pg_trgm) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`rum`](/ext/e/rum) [`unaccent`](/ext/e/unaccent) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pgroonga` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pgroonga_$v` | `groonga-libs` |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgroonga` | `libgroonga0` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| el8.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| el9.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| el9.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| el10.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| el10.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| d12.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| d12.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| d13.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| d13.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| u22.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| u22.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| u24.x86_64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| u24.aarch64 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 | AVAIL PIGSTY 4.0.4 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgroonga` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgroonga         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgroonga` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgroonga;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgroonga -v 18  # PG 18
pig ext install -y pgroonga -v 17  # PG 17
pig ext install -y pgroonga -v 16  # PG 16
pig ext install -y pgroonga -v 15  # PG 15
pig ext install -y pgroonga -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgroonga_18       # PG 18
dnf install -y pgroonga_17       # PG 17
dnf install -y pgroonga_16       # PG 16
dnf install -y pgroonga_15       # PG 15
dnf install -y pgroonga_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgroonga   # PG 18
apt install -y postgresql-17-pgroonga   # PG 17
apt install -y postgresql-16-pgroonga   # PG 16
apt install -y postgresql-15-pgroonga   # PG 15
apt install -y postgresql-14-pgroonga   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgroonga_database;
```



## 用法

> [PGroonga 文档](https://pgroonga.github.io/) | [GitHub: pgroonga/pgroonga](https://github.com/pgroonga/pgroonga)

`pgroonga_database` 是 [PGroonga](https://pgroonga.github.io/) 项目的子扩展。它为 PGroonga 提供数据库管理功能，PGroonga 使 PostgreSQL 成为支持所有语言的快速全文搜索平台。

PGroonga 是一个全面的全文搜索解决方案，以 [Groonga](https://groonga.org/) 作为后端。它开箱即用地支持所有语言（包括中日韩 CJK），并提供丰富功能：

- 支持所有语言的快速全文搜索
- 丰富的查询语法（查询语言、脚本语法）
- JSON 搜索
- 感知 HTML/XML 标签的高亮
- 相似搜索
- 同义词扩展
- 自动补全
- 查询日志分析

PGroonga 文档非常详尽，涵盖数百页。详细用法、API 参考、运算符、函数和调优指南请参见官方文档：

- [PGroonga 官方文档](https://pgroonga.github.io/)
- [入门指南](https://pgroonga.github.io/install/)
- [教程](https://pgroonga.github.io/tutorial/)
- [使用指南](https://pgroonga.github.io/how-to/)
- [参考手册](https://pgroonga.github.io/reference/)

## 快速开始

```sql
CREATE EXTENSION pgroonga_database;
CREATE EXTENSION pgroonga;

-- 创建包含文本内容的表
CREATE TABLE memos (
  id integer,
  content text
);

-- 创建 PGroonga 索引
CREATE INDEX pgroonga_content_index ON memos USING pgroonga (content);

-- 插入数据
INSERT INTO memos VALUES (1, 'PostgreSQL is a relational database management system.');
INSERT INTO memos VALUES (2, 'Groonga is a fast full text search engine that supports all languages.');
INSERT INTO memos VALUES (3, 'PGroonga is a PostgreSQL extension that uses Groonga as its backend.');

-- 全文搜索
SELECT * FROM memos WHERE content &@~ 'PostgreSQL OR Groonga';
```

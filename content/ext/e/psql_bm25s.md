---
title: "psql_bm25s"
linkTitle: "psql_bm25s"
description: "PostgreSQL BM25 系列全文检索扩展，提供原生索引访问方法和 BM25 排序"
weight: 2210
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Intelligent-Internet/psql_bm25s">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Intelligent-Internet/psql_bm25s</div>
    <div class="ext-card__desc">https://github.com/Intelligent-Internet/psql_bm25s</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/psql_bm25s-0.4.13.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">psql_bm25s-0.4.13.tar.gz</div>
    <div class="ext-card__desc">psql_bm25s-0.4.13.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`psql_bm25s`**](/ext/e/psql_bm25s) | `0.4.13` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2210  | [**`psql_bm25s`**](/ext/e/psql_bm25s) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pg_textsearch`](/ext/e/pg_textsearch) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`pgroonga`](/ext/e/pgroonga) [`pg_bigm`](/ext/e/pg_bigm) [`zhparser`](/ext/e/zhparser) [`pg_trgm`](/ext/e/pg_trgm) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Supports PostgreSQL 17-18; optional shared_preload_libraries arena is not required for normal use.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.13` | {{< pgvers "18,17" >}} | `psql_bm25s` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.13` | {{< pgvers "18,17" >}} | `psql_bm25s_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.13` | {{< pgvers "18,17" >}} | `postgresql-$v-psql-bm25s` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 psql_bm25s_18 psql_bm25s_18-0.4.13-1PIGSTY.el8.x86_64.rpm pigsty 0.4.13 244.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/psql_bm25s_18-0.4.13-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 psql_bm25s_18 psql_bm25s_18-0.4.13-1PIGSTY.el8.aarch64.rpm pigsty 0.4.13 229.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/psql_bm25s_18-0.4.13-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 psql_bm25s_18 psql_bm25s_18-0.4.13-1PIGSTY.el9.x86_64.rpm pigsty 0.4.13 231.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/psql_bm25s_18-0.4.13-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 psql_bm25s_18 psql_bm25s_18-0.4.13-1PIGSTY.el9.aarch64.rpm pigsty 0.4.13 221.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/psql_bm25s_18-0.4.13-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 psql_bm25s_18 psql_bm25s_18-0.4.13-1PIGSTY.el10.x86_64.rpm pigsty 0.4.13 239.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/psql_bm25s_18-0.4.13-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 psql_bm25s_18 psql_bm25s_18-0.4.13-1PIGSTY.el10.aarch64.rpm pigsty 0.4.13 227.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/psql_bm25s_18-0.4.13-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-psql-bm25s postgresql-18-psql-bm25s_0.4.13-1PIGSTY~bookworm_amd64.deb pigsty 0.4.13 497.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/psql-bm25s/postgresql-18-psql-bm25s_0.4.13-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-psql-bm25s postgresql-18-psql-bm25s_0.4.13-1PIGSTY~bookworm_arm64.deb pigsty 0.4.13 475.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/psql-bm25s/postgresql-18-psql-bm25s_0.4.13-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-psql-bm25s postgresql-18-psql-bm25s_0.4.13-1PIGSTY~trixie_amd64.deb pigsty 0.4.13 499.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/psql-bm25s/postgresql-18-psql-bm25s_0.4.13-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-psql-bm25s postgresql-18-psql-bm25s_0.4.13-1PIGSTY~trixie_arm64.deb pigsty 0.4.13 479.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/psql-bm25s/postgresql-18-psql-bm25s_0.4.13-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-psql-bm25s postgresql-18-psql-bm25s_0.4.13-1PIGSTY~jammy_amd64.deb pigsty 0.4.13 527.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/psql-bm25s/postgresql-18-psql-bm25s_0.4.13-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-psql-bm25s postgresql-18-psql-bm25s_0.4.13-1PIGSTY~jammy_arm64.deb pigsty 0.4.13 511.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/psql-bm25s/postgresql-18-psql-bm25s_0.4.13-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-psql-bm25s postgresql-18-psql-bm25s_0.4.13-1PIGSTY~noble_amd64.deb pigsty 0.4.13 510.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/psql-bm25s/postgresql-18-psql-bm25s_0.4.13-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-psql-bm25s postgresql-18-psql-bm25s_0.4.13-1PIGSTY~noble_arm64.deb pigsty 0.4.13 497.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/psql-bm25s/postgresql-18-psql-bm25s_0.4.13-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-psql-bm25s postgresql-18-psql-bm25s_0.4.13-1PIGSTY~resolute_amd64.deb pigsty 0.4.13 506.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/psql-bm25s/postgresql-18-psql-bm25s_0.4.13-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-psql-bm25s postgresql-18-psql-bm25s_0.4.13-1PIGSTY~resolute_arm64.deb pigsty 0.4.13 492.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/psql-bm25s/postgresql-18-psql-bm25s_0.4.13-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 psql_bm25s_17 psql_bm25s_17-0.4.13-1PIGSTY.el8.x86_64.rpm pigsty 0.4.13 244.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/psql_bm25s_17-0.4.13-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 psql_bm25s_17 psql_bm25s_17-0.4.13-1PIGSTY.el8.aarch64.rpm pigsty 0.4.13 229.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/psql_bm25s_17-0.4.13-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 psql_bm25s_17 psql_bm25s_17-0.4.13-1PIGSTY.el9.x86_64.rpm pigsty 0.4.13 231.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/psql_bm25s_17-0.4.13-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 psql_bm25s_17 psql_bm25s_17-0.4.13-1PIGSTY.el9.aarch64.rpm pigsty 0.4.13 221.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/psql_bm25s_17-0.4.13-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 psql_bm25s_17 psql_bm25s_17-0.4.13-1PIGSTY.el10.x86_64.rpm pigsty 0.4.13 239.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/psql_bm25s_17-0.4.13-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 psql_bm25s_17 psql_bm25s_17-0.4.13-1PIGSTY.el10.aarch64.rpm pigsty 0.4.13 227.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/psql_bm25s_17-0.4.13-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-psql-bm25s postgresql-17-psql-bm25s_0.4.13-1PIGSTY~bookworm_amd64.deb pigsty 0.4.13 497.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/psql-bm25s/postgresql-17-psql-bm25s_0.4.13-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-psql-bm25s postgresql-17-psql-bm25s_0.4.13-1PIGSTY~bookworm_arm64.deb pigsty 0.4.13 475.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/psql-bm25s/postgresql-17-psql-bm25s_0.4.13-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-psql-bm25s postgresql-17-psql-bm25s_0.4.13-1PIGSTY~trixie_amd64.deb pigsty 0.4.13 499.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/psql-bm25s/postgresql-17-psql-bm25s_0.4.13-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-psql-bm25s postgresql-17-psql-bm25s_0.4.13-1PIGSTY~trixie_arm64.deb pigsty 0.4.13 479.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/psql-bm25s/postgresql-17-psql-bm25s_0.4.13-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-psql-bm25s postgresql-17-psql-bm25s_0.4.13-1PIGSTY~jammy_amd64.deb pigsty 0.4.13 553.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/psql-bm25s/postgresql-17-psql-bm25s_0.4.13-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-psql-bm25s postgresql-17-psql-bm25s_0.4.13-1PIGSTY~jammy_arm64.deb pigsty 0.4.13 538.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/psql-bm25s/postgresql-17-psql-bm25s_0.4.13-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-psql-bm25s postgresql-17-psql-bm25s_0.4.13-1PIGSTY~noble_amd64.deb pigsty 0.4.13 510.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/psql-bm25s/postgresql-17-psql-bm25s_0.4.13-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-psql-bm25s postgresql-17-psql-bm25s_0.4.13-1PIGSTY~noble_arm64.deb pigsty 0.4.13 497.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/psql-bm25s/postgresql-17-psql-bm25s_0.4.13-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-psql-bm25s postgresql-17-psql-bm25s_0.4.13-1PIGSTY~resolute_amd64.deb pigsty 0.4.13 506.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/psql-bm25s/postgresql-17-psql-bm25s_0.4.13-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-psql-bm25s postgresql-17-psql-bm25s_0.4.13-1PIGSTY~resolute_arm64.deb pigsty 0.4.13 492.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/psql-bm25s/postgresql-17-psql-bm25s_0.4.13-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `psql_bm25s` 扩展的 RPM / DEB 包：

```bash
pig build pkg psql_bm25s         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `psql_bm25s` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install psql_bm25s;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y psql_bm25s -v 18  # PG 18
pig ext install -y psql_bm25s -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y psql_bm25s_18       # PG 18
dnf install -y psql_bm25s_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-psql-bm25s   # PG 18
apt install -y postgresql-17-psql-bm25s   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION psql_bm25s;
```




## 用法

来源：[README v0.4.13](https://github.com/Intelligent-Internet/psql_bm25s/blob/v0.4.13/README.md), [API reference](https://github.com/Intelligent-Internet/psql_bm25s/blob/v0.4.13/docs/api-reference.md), [query semantics](https://github.com/Intelligent-Internet/psql_bm25s/blob/v0.4.13/docs/query-semantics.md), [input types](https://github.com/Intelligent-Internet/psql_bm25s/blob/v0.4.13/docs/input-types.md), [index parameters](https://github.com/Intelligent-Internet/psql_bm25s/blob/v0.4.13/docs/index-parameters.md), [index policy](https://github.com/Intelligent-Internet/psql_bm25s/blob/v0.4.13/docs/index-policy.md)

`psql_bm25s` 是 PostgreSQL-native index access method，用于 BM25-family lexical retrieval。它通过基于 corpus statistics 的 ranking、精确 top-k retrieval APIs，以及面向可变表的 PostgreSQL storage/maintenance 行为，保持 BM25 语义明确。

本 catalog 为 PostgreSQL 17 和 18 打包版本 `0.4.13`。

### 基本搜索

```sql
CREATE EXTENSION psql_bm25s;

CREATE TABLE docs (
    id integer PRIMARY KEY,
    title text NOT NULL,
    body text NOT NULL
);

INSERT INTO docs (id, title, body) VALUES
    (1, 'red apple', 'fresh red apple fruit'),
    (2, 'green apple', 'green apple slices'),
    (3, 'orange citrus', 'orange citrus fruit'),
    (4, 'cat guide', 'small cat animal care');

CREATE INDEX docs_bm25_idx
    ON docs USING psql_bm25s (body);

SELECT d.id, d.title, h.score
FROM psql_bm25s_query(
    'docs_bm25_idx'::regclass,
    'apple fruit',
    5
) AS h
JOIN docs AS d ON d.ctid = h.ctid
ORDER BY h.score DESC, d.id;
```

不带 `WITH (...)` 选项时，索引使用 Lucene-style BM25 和 IDF defaults，并使用 `realtime` consistency policy。

### Indexed Inputs

`psql_bm25s` 支持五种被索引源列类型：

- `text` 和 `varchar`：直接索引普通标量文本列。
- `text[]` 和 `varchar[]`：用于应用自行维护的 token streams。
- `int4[]`：用于应用在外部管理 token IDs 的场景。

标量 `text` 和 `varchar` 列会在索引边界 tokenized。Pretokenized arrays 可避免标量重复 tokenization，当应用已经拥有 tokenization 结果时是首选形状。

### Retrieval APIs

规范的精确 BM25 API 是：

- `psql_bm25s_query_tokens(regclass, text[], k, weight_mask)`：用于 token-text indexes。
- `psql_bm25s_query_ids(regclass, int4[], k, weight_mask)`：用于 token-ID indexes。

主要 SQL 便利 API 是：

- `psql_bm25s_query(regclass, query_text, k, weight_mask, ...)`
- `psql_bm25s_prepared_query(regclass, query_text, ...)`
- `psql_bm25s_query_prepared(prepared_query, k, weight_mask)`

这些 rowset APIs 返回包含 `ctid`、`doc_id` 和 `score` 的 `psql_bm25s_result_hit` 行。当查询同时需要行数据和 query-time score 时，用 `ctid` 将 hits 连接回应用表。

### 操作符

操作符表面适用于 SQL-native filtering 和 ordering：

- `tokens @@ 'query text'` 是布尔 document-match predicate。
- `tokens @@@ psql_bm25s_prepared_query(...)` 是 index-bound prepared predicate。
- `ORDER BY tokens <=> psql_bm25s_order_tokens(...) ASC LIMIT k` 是 ordered retrieval 形式。

`@@` 不是 ranking API。只有当 PostgreSQL 选择真正的 `psql_bm25s` index scan 时，`<=>` 才与真实 BM25 ordering 对齐；需要最清晰的精确 top-k 契约时，请使用 rowset retrieval APIs。

```sql
WITH rq AS (
    SELECT psql_bm25s_ranked_query(
        'docs_bm25_idx'::regclass,
        'apple fruit',
        10
    ) AS q
)
SELECT d.*
FROM docs AS d, rq
WHERE d.body @@@ psql_bm25s_filter_query(rq.q)
ORDER BY d.body <=> psql_bm25s_order_tokens(rq.q) ASC
LIMIT (rq.q).k;
```

### 索引选项

Scoring reloptions 包括：

- `method` 和 `idf_method`，默认 `lucene`；支持的 variants 是 `robertson`、`lucene`、`atire`、`bm25l` 和 `bm25+`。
- `k1`，默认 `1.5`。
- `b`，默认 `0.75`。
- `delta`，默认 `0.5`，由 BM25L 和 BM25+ 使用。

标量文本处理 reloptions 包括：

- `text_lowercase`，默认 `true`。
- `text_stopwords`，默认 `NULL`。
- `text_stem_english`，默认 `false`。
- `text_fold_diacritics`，默认 `false`。

```sql
CREATE INDEX docs_body_bm25_idx
    ON docs USING psql_bm25s (body)
    WITH (
        method = 'lucene',
        idf_method = 'lucene',
        k1 = 1.5,
        b = 0.75,
        text_stem_english = true
    );
```

### Multi-Field 与 Hybrid Search

对于独立的 title、abstract 和 body indexes，使用 late fusion helpers，让每个字段先产生 query-scoped hits，然后再组合分数：

```sql
SELECT d.id, d.title, h.score
FROM psql_bm25s_fusion_query(
    ARRAY[
        'docs_title_bm25_idx'::regclass,
        'docs_body_bm25_idx'::regclass
    ],
    'apple fruit',
    ARRAY[3.0, 1.0]::real[],
    10,
    30,
    NULL
) AS h
JOIN docs AS d ON d.ctid = h.ctid
ORDER BY h.score DESC, d.id;
```

Hybrid vector/BM25 search 也是 late-fusion 层。BM25 和 vector indexes 各自产生 candidates，`psql_bm25s_hybrid_fuse_candidates(...)` 默认使用 `rrf` 将它们组合。核心扩展不要求安装 `pgvector`、VectorChord 或任何 vector type。

### 维护与缓存

公开维护开关是 `consistency` reloption：

- `realtime`：默认值，使已提交写入立即可搜索。
- `eventual`：偏向前台读写延迟，允许维护收敛期间 BM25 结果短期陈旧。
- `manual`：将刷新留给显式 operator 或 scheduler 控制。

运维辅助函数包括：

- `psql_bm25s_index_details(regclass)`
- `psql_bm25s_index_policy_recommend(regclass, profile)`
- `psql_bm25s_index_refresh(regclass)`
- `psql_bm25s_index_maintain(regclass)`
- `psql_bm25s_index_try_maintain(regclass)`
- `psql_bm25s_index_maintain_due(max_indexes)`

大型 immutable index payloads 可使用 shared generation cache。零配置 DSM cache 不要求 `shared_preload_libraries`。对于大型 connection-pool 部署，可通过 `shared_preload_libraries = 'psql_bm25s'` 和 `psql_bm25s.shared_generation_cache_size` 启用可选 shared-preload arena，但正常使用不需要该 arena。

相关全局 GUC 包括：

- `psql_bm25s.maintenance_worker_limit`
- `psql_bm25s.preload_timer_interval_ms`
- `psql_bm25s.maintenance_timer_interval_ms`
- `psql_bm25s.maintenance_rebuild_memory_budget`

### 注意事项

- 该扩展创建后不可 relocatable；如有需要，请在 `CREATE EXTENSION` 时选择非 `public` schema。
- `eventual` 和 `manual` consistency 会有意用 immediate freshness 换取更低前台成本或显式刷新控制。
- Logical replication 遵循 PostgreSQL 行为：表行会复制，但 index relations 不会作为 logical data objects 复制，因此 subscribers 上应创建或重建 indexes。
- 可选 shared-preload cache 需要 PostgreSQL 配置并重启，因为 shared arena 在服务器启动时分配。

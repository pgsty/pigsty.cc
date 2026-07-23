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
| el8.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.4.13 1 | AVAIL PIGSTY 0.4.13 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
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

`psql_bm25s` 是 PostgreSQL 原生索引访问方法，用于 BM25 系列的词法检索。它通过基于语料库统计信息的排序、精确的 top-k 检索 API，以及适用于可变表的 PostgreSQL 存储和维护行为，保持明确的 BM25 语义。

本目录为 PostgreSQL 17 和 18 打包版本 `0.4.13`。

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

不带 `WITH (...)` 选项时，索引使用 Lucene 风格的 BM25 和 IDF 默认值，并采用 `realtime` 一致性策略。

### 索引输入

`psql_bm25s` 支持五种可作为索引输入的源列类型：

- `text` 和 `varchar`：直接索引普通标量文本列。
- `text[]` 和 `varchar[]`：用于应用自行维护的词元流。
- `int4[]`：用于应用在外部管理词元 ID 的场景。

标量 `text` 和 `varchar` 列会在索引边界进行分词。预分词数组可以避免对标量重复分词；当应用已经拥有分词结果时，应优先使用这种输入形式。

### 检索 API

规范的精确 BM25 API 是：

- `psql_bm25s_query_tokens(regclass, text[], k, weight_mask)`：用于文本词元索引。
- `psql_bm25s_query_ids(regclass, int4[], k, weight_mask)`：用于词元 ID 索引。

主要的 SQL 便捷 API 是：

- `psql_bm25s_query(regclass, query_text, k, weight_mask, ...)`
- `psql_bm25s_prepared_query(regclass, query_text, ...)`
- `psql_bm25s_query_prepared(prepared_query, k, weight_mask)`

这些行集 API 返回包含 `ctid`、`doc_id` 和 `score` 的 `psql_bm25s_result_hit` 行。当查询同时需要行数据和查询时分数时，可用 `ctid` 将命中结果连接回应用表。

### 操作符

操作符接口适用于 SQL 原生过滤和排序：

- `tokens @@ 'query text'` 是布尔文档匹配谓词。
- `tokens @@@ psql_bm25s_prepared_query(...)` 是与索引绑定的预备谓词。
- `ORDER BY tokens <=> psql_bm25s_order_tokens(...) ASC LIMIT k` 是有序检索形式。

`@@` 不是排序 API。只有当 PostgreSQL 选择真正的 `psql_bm25s` 索引扫描时，`<=>` 才与真实的 BM25 排序一致；需要最明确的精确 top-k 契约时，请使用行集检索 API。

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

评分相关的索引选项包括：

- `method` 和 `idf_method`，默认 `lucene`；支持 `robertson`、`lucene`、`atire`、`bm25l` 和 `bm25+`。
- `k1`，默认 `1.5`。
- `b`，默认 `0.75`。
- `delta`，默认 `0.5`，由 BM25L 和 BM25+ 使用。

标量文本处理相关的索引选项包括：

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

### 多字段与混合搜索

对于独立的标题、摘要和正文索引，可使用后期融合辅助函数，让每个字段先生成当前查询范围内的命中结果，再组合分数：

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

向量/BM25 混合搜索也是一个后期融合层。BM25 和向量索引各自产生候选结果，`psql_bm25s_hybrid_fuse_candidates(...)` 默认使用 `rrf` 将其组合。核心扩展不要求安装 `pgvector`、VectorChord 或任何向量类型。

### 维护与缓存

公开的维护开关是 `consistency` 索引选项：

- `realtime`：默认值，使已提交写入立即可搜索。
- `eventual`：优先降低前台读写延迟，允许 BM25 结果在维护收敛期间短期陈旧。
- `manual`：将刷新交给显式操作或调度器控制。

运维辅助函数包括：

- `psql_bm25s_index_details(regclass)`
- `psql_bm25s_index_policy_recommend(regclass, profile)`
- `psql_bm25s_index_refresh(regclass)`
- `psql_bm25s_index_maintain(regclass)`
- `psql_bm25s_index_try_maintain(regclass)`
- `psql_bm25s_index_maintain_due(max_indexes)`

大型不可变索引载荷可以使用共享代际缓存。零配置 DSM 缓存不要求设置 `shared_preload_libraries`。对于大型连接池部署，可通过 `shared_preload_libraries = 'psql_bm25s'` 和 `psql_bm25s.shared_generation_cache_size` 启用可选的预加载共享内存区，但正常使用不需要该内存区。

相关全局 GUC 包括：

- `psql_bm25s.maintenance_worker_limit`
- `psql_bm25s.preload_timer_interval_ms`
- `psql_bm25s.maintenance_timer_interval_ms`
- `psql_bm25s.maintenance_rebuild_memory_budget`

### 注意事项

- 该扩展创建后不可迁移模式；如有需要，请在 `CREATE EXTENSION` 时选择非 `public` 模式。
- `eventual` 和 `manual` 一致性策略会有意牺牲即时新鲜度，以换取更低的前台成本或显式刷新控制。
- 逻辑复制遵循 PostgreSQL 行为：表行会复制，但索引关系不会作为逻辑数据对象复制，因此应在订阅端创建或重建索引。
- 可选的预加载共享缓存需要修改 PostgreSQL 配置并重启，因为共享内存区在服务器启动时分配。

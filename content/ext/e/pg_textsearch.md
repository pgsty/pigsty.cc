---
title: "pg_textsearch"
linkTitle: "pg_textsearch"
description: "带有BM25排序的全文搜索扩展"
weight: 2180
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/timescale/pg_textsearch">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">timescale/pg_textsearch</div>
    <div class="ext-card__desc">https://github.com/timescale/pg_textsearch</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_textsearch-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_textsearch-1.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_textsearch-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_textsearch`**](/ext/e/pg_textsearch) | `1.1.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2180  | [**`pg_textsearch`**](/ext/e/pg_textsearch) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pgroonga`](/ext/e/pgroonga) [`pg_bigm`](/ext/e/pg_bigm) [`zhparser`](/ext/e/zhparser) [`pg_trgm`](/ext/e/pg_trgm) [`rum`](/ext/e/rum) [`biscuit`](/ext/e/biscuit) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> bm25 am conflicts with pg_search; must be preloaded via shared_preload_libraries.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17" >}} | `pg_textsearch` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17" >}} | `pg_textsearch_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17" >}} | `postgresql-$v-textsearch` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 121.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_textsearch_18-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 115.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_textsearch_18-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 112.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_textsearch_18-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 109.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_textsearch_18-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 115.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_textsearch_18-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 111.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_textsearch_18-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 1003.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 994.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 1003.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 995.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 1.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 1.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.1.0-1PIGSTY~resolute_amd64.deb pigsty 1.1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.1.0-1PIGSTY~resolute_arm64.deb pigsty 1.1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 121.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_textsearch_17-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 115.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_textsearch_17-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 112.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_textsearch_17-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 109.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_textsearch_17-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 115.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_textsearch_17-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 111.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_textsearch_17-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 990.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 980.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 991.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 982.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 1.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 1.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.1.0-1PIGSTY~resolute_amd64.deb pigsty 1.1.0 1.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.1.0-1PIGSTY~resolute_arm64.deb pigsty 1.1.0 1.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_textsearch` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_textsearch         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_textsearch` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_textsearch;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_textsearch -v 18  # PG 18
pig ext install -y pg_textsearch -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_textsearch_18       # PG 18
dnf install -y pg_textsearch_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-textsearch   # PG 18
apt install -y postgresql-17-textsearch   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_textsearch';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_textsearch;
```

## 用法

来源：[README v1.1.0](https://github.com/timescale/pg_textsearch/blob/v1.1.0/README.md)，[v1.1.0 release notes](https://github.com/timescale/pg_textsearch/releases/tag/v1.1.0)

`pg_textsearch` 为 PostgreSQL 提供基于 BM25 的排序全文检索，核心接口是 `bm25` access method 和 `<@>` 评分运算符。上游已将 `v1.1.0` 标记为 production ready。

`v1.1.0` 支持 PostgreSQL 17 和 18，并为这两个 PostgreSQL 版本发布 Linux 与 macOS 预编译包。该扩展必须先通过 `shared_preload_libraries` 加载，再执行 `CREATE EXTENSION`。

### 启用扩展

```ini
shared_preload_libraries = 'pg_textsearch'  # add to any existing list
```

```sql
CREATE EXTENSION pg_textsearch;
```

升级扩展前先安装新二进制并重启 PostgreSQL：

```sql
ALTER EXTENSION pg_textsearch UPDATE;
```

上游说明从 1.0.0 升级到 1.1.0 不需要 `REINDEX`。

### 构建 BM25 索引并查询

```sql
CREATE TABLE documents (id bigserial PRIMARY KEY, content text);

CREATE INDEX docs_idx
ON documents USING bm25(content)
WITH (text_config = 'english');

SELECT *
FROM documents
ORDER BY content <@> 'database system'
LIMIT 5;
```

`<@>` 返回负 BM25 分数，因为 PostgreSQL operator index scan 按升序扫描；值越低表示匹配越好。使用 `ORDER BY ... LIMIT` 可执行快速 top-k 搜索。

如需显式指定索引，可使用 `to_bm25query()`：

```sql
SELECT *
FROM documents
ORDER BY content <@> to_bm25query('database system', 'docs_idx')
LIMIT 5;
```

主要 SQL 接口包括：

- `text <@> 'query'`：在 planner 检测到的索引上下文中对文本评分。
- `text <@> bm25query`：使用显式 `bm25query` 评分。
- `to_bm25query(text)`：用于 `ORDER BY`，由 planner 选择索引上下文。
- `to_bm25query(text, text)`：查询文本加索引名。
- `bm25query = bm25query`：相等性检查。

### 索引选项与数据形态

```sql
CREATE INDEX ON documents USING bm25(content)
WITH (text_config = 'english', k1 = 1.5, b = 0.8);
```

索引选项包括 `text_config`（必填）、`k1`（默认 `1.2`）和 `b`（默认 `0.75`）。`english`、`simple`、`french`、`german` 等文本搜索配置使用 PostgreSQL text search configuration 名称。

`v1.1.0` 新增对 `text[]`、`varchar[]` 和 `bpchar[]` 列的原生数组输入支持；数组元素会先拼接，再分词。

```sql
CREATE TABLE posts (id serial PRIMARY KEY, tags text[]);
CREATE INDEX posts_tags_idx ON posts USING bm25(tags)
WITH (text_config = 'english');

SELECT *
FROM posts
ORDER BY tags <@> 'database'
LIMIT 10;
```

Expression index 支持不可变文本表达式，包括 JSONB 提取、文本变换和多列拼接：

```sql
CREATE INDEX events_msg_idx ON events USING bm25 ((data->>'message'))
WITH (text_config = 'english');

SELECT *
FROM events
ORDER BY (data->>'message') <@> to_bm25query('network error', 'events_msg_idx')
LIMIT 10;
```

Partial index 可将搜索限定在部分行上。查询时需要显式索引名：

```sql
CREATE INDEX docs_en_idx ON docs USING bm25(content)
WITH (text_config = 'english')
WHERE lang = 'en';

SELECT *
FROM docs
WHERE lang = 'en'
ORDER BY content <@> to_bm25query('databases', 'docs_en_idx')
LIMIT 10;
```

### 运维与 GUC

```sql
SELECT bm25_force_merge('docs_idx');
SELECT * FROM bm25_memory_usage();
```

`bm25_force_merge(index_name)` 会将所有 segment 合并为一个，适合批量加载后使用，不适合持续写入流量中使用。`bm25_memory_usage()` 报告 memtable 的共享内存用量。

`v1.1.0` 文档列出的 `pg_textsearch` GUC 包括：

- `pg_textsearch.default_limit`
- `pg_textsearch.compress_segments`
- `pg_textsearch.segments_per_level`
- `pg_textsearch.memory_limit`
- `pg_textsearch.bulk_load_threshold`
- `pg_textsearch.memtable_spill_threshold`（已废弃；新部署使用 `memory_limit`）

`pg_textsearch.memory_limit` 默认值为 `2GB`，用于限制 memtable 使用的动态共享内存。release notes 还记录了并发插入吞吐提升、通过 segment alive bitset 加速 VACUUM、subtransaction 清理以及 parallel build race 修复。

### 注意事项

- `pg_textsearch` 需要 `shared_preload_libraries = 'pg_textsearch'` 并重启 PostgreSQL，然后才能执行 `CREATE EXTENSION`。
- 在 PL/pgSQL 和 stored procedure 中，隐式 `text <@> 'query'` 形式不会使用 planner hook；上游要求改用带显式索引名的 `to_bm25query()`。
- Phrase query 不是原生能力，因为索引保存 term frequency 而不是 term position；可用 BM25 排序后再做短语式 post-filter。
- Partial index 需要带索引名的 `to_bm25query()`，因为隐式查询形式会跳过它们。
- 分区表上的 BM25 索引使用分区本地统计信息，因此跨分区分数可能不能直接比较。
- 超过 PostgreSQL `tsvector` 词长限制的词会在分词时被忽略。

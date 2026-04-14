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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_textsearch-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_textsearch-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_textsearch-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_textsearch`**](/ext/e/pg_textsearch) | `1.0.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17" >}} | `pg_textsearch` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17" >}} | `pg_textsearch_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17" >}} | `postgresql-$v-textsearch` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 110.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_textsearch_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 105.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_textsearch_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 101.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_textsearch_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 99.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_textsearch_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_textsearch_18 pg_textsearch_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 105.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_textsearch_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_textsearch_18 pg_textsearch_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 100.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_textsearch_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 894.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 887.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 895.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 888.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 991.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 990.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-textsearch postgresql-18-textsearch_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 953.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-textsearch postgresql-18-textsearch_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 949.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-18-textsearch_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 110.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_textsearch_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 105.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_textsearch_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 101.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_textsearch_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 99.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_textsearch_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_textsearch_17 pg_textsearch_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 104.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_textsearch_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_textsearch_17 pg_textsearch_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 100.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_textsearch_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 881.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 874.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 881.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 876.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 1.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 1.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-textsearch postgresql-17-textsearch_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 942.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-textsearch postgresql-17-textsearch_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 938.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-textsearch/postgresql-17-textsearch_1.0.0-1PIGSTY~noble_arm64.deb
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

> [pg_textsearch: 使用 BM25 的 PostgreSQL 现代排序文本搜索](https://github.com/timescale/pg_textsearch)

`pg_textsearch` 提供基于 BM25 评分并结合 Block-Max WAND 优化的现代排序文本搜索。它语法简洁，支持快速 top-k 查询、并行索引构建以及分区表。

添加到 `shared_preload_libraries`：

```
shared_preload_libraries = 'pg_textsearch'
```

```sql
CREATE EXTENSION pg_textsearch;
```

### 快速开始

```sql
CREATE TABLE documents (id bigserial PRIMARY KEY, content text);
INSERT INTO documents (content) VALUES
    ('PostgreSQL is a powerful database system'),
    ('BM25 is an effective ranking function'),
    ('Full text search with custom scoring');

-- 创建 BM25 索引
CREATE INDEX docs_idx ON documents USING bm25(content) WITH (text_config='english');

-- 使用 <@> 运算符查询（返回负 BM25 分数，分数越低匹配越好）
SELECT * FROM documents
ORDER BY content <@> 'database system'
LIMIT 5;
```

### 查询

```sql
-- 从列自动检测索引
SELECT * FROM documents
ORDER BY content <@> 'database system'
LIMIT 5;

-- 显式指定索引
SELECT * FROM documents
WHERE content <@> to_bm25query('database system', 'docs_idx') < -1.0;
```

### 过滤

**前置过滤**会在评分前缩减行数，适合选择性强的过滤条件：

```sql
CREATE INDEX ON documents (category_id);
SELECT * FROM documents
WHERE category_id = 123
ORDER BY content <@> 'search terms'
LIMIT 10;
```

**后置过滤**会先执行 BM25 扫描，再应用过滤条件：

```sql
SELECT * FROM documents
WHERE content <@> to_bm25query('search terms', 'docs_idx') < -5.0
ORDER BY content <@> 'search terms'
LIMIT 10;
```

### 索引选项

| 选项 | 默认值 | 说明 |
|------|--------|------|
| `text_config` | （必需） | PostgreSQL 文本搜索配置 |
| `k1` | 1.2 | 词频饱和参数 |
| `b` | 0.75 | 长度归一化参数 |

```sql
CREATE INDEX ON documents USING bm25(content)
  WITH (text_config='english', k1=1.5, b=0.8);

-- 语言专用配置
CREATE INDEX ON french_docs USING bm25(content) WITH (text_config='french');
CREATE INDEX ON german_docs USING bm25(content) WITH (text_config='german');
```

### 数据类型

**bm25query** - 表示 BM25 评分查询：

```sql
SELECT to_bm25query('search query text', 'docs_idx');
-- docs_idx:search query text
```

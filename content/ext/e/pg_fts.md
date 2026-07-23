---
title: "pg_fts"
linkTitle: "pg_fts"
description: "提供 BM25、BM25F 排序与专用倒排索引的全文检索扩展"
weight: 2220
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://codeberg.org/gregburd/pg_fts">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://codeberg.org/gregburd/pg_fts</div>
    <div class="ext-card__desc">https://codeberg.org/gregburd/pg_fts</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_fts-0.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_fts-0.2.0.tar.gz</div>
    <div class="ext-card__desc">pg_fts-0.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_fts`**](/ext/e/pg_fts) | `0.2.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2220  | [**`pg_fts`**](/ext/e/pg_fts) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pg_textsearch`](/ext/e/pg_textsearch) [`vchord_bm25`](/ext/e/vchord_bm25) [`psql_bm25s`](/ext/e/psql_bm25s) [`pg_bestmatch`](/ext/e/pg_bestmatch) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires PostgreSQL 17 or newer; the control file marks the extension trusted and relocatable; RPM builds also provide an llvmjit subpackage.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17" >}} | `pg_fts` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17" >}} | `pg_fts_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17" >}} | `postgresql-$v-pg-fts` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_fts_18 pg_fts_18-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 113.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fts_18-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_fts_18 pg_fts_18-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 109.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fts_18-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_fts_18 pg_fts_18-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 88.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fts_18-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_fts_18 pg_fts_18-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 88.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fts_18-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_fts_18 pg_fts_18-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 91.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fts_18-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_fts_18 pg_fts_18-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 90.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fts_18-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-fts postgresql-18-pg-fts_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 265.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fts/postgresql-18-pg-fts_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-fts postgresql-18-pg-fts_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 258.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fts/postgresql-18-pg-fts_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-fts postgresql-18-pg-fts_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 266.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fts/postgresql-18-pg-fts_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-fts postgresql-18-pg-fts_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 260.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fts/postgresql-18-pg-fts_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-fts postgresql-18-pg-fts_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 271.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fts/postgresql-18-pg-fts_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-fts postgresql-18-pg-fts_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 268.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fts/postgresql-18-pg-fts_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-fts postgresql-18-pg-fts_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 256.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fts/postgresql-18-pg-fts_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-fts postgresql-18-pg-fts_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 253.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fts/postgresql-18-pg-fts_0.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-fts postgresql-18-pg-fts_0.2.0-1PIGSTY~resolute_amd64.deb pigsty 0.2.0 256.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-fts/postgresql-18-pg-fts_0.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-fts postgresql-18-pg-fts_0.2.0-1PIGSTY~resolute_arm64.deb pigsty 0.2.0 252.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-fts/postgresql-18-pg-fts_0.2.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_fts_17 pg_fts_17-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 113.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fts_17-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_fts_17 pg_fts_17-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 109.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fts_17-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_fts_17 pg_fts_17-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 88.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fts_17-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_fts_17 pg_fts_17-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 88.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fts_17-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_fts_17 pg_fts_17-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 91.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fts_17-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_fts_17 pg_fts_17-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 90.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fts_17-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-fts postgresql-17-pg-fts_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 265.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fts/postgresql-17-pg-fts_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-fts postgresql-17-pg-fts_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 258.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fts/postgresql-17-pg-fts_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-fts postgresql-17-pg-fts_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 266.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fts/postgresql-17-pg-fts_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-fts postgresql-17-pg-fts_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 260.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fts/postgresql-17-pg-fts_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-fts postgresql-17-pg-fts_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 290.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fts/postgresql-17-pg-fts_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-fts postgresql-17-pg-fts_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 285.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fts/postgresql-17-pg-fts_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-fts postgresql-17-pg-fts_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 256.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fts/postgresql-17-pg-fts_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-fts postgresql-17-pg-fts_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 253.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fts/postgresql-17-pg-fts_0.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-fts postgresql-17-pg-fts_0.2.0-1PIGSTY~resolute_amd64.deb pigsty 0.2.0 256.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-fts/postgresql-17-pg-fts_0.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-fts postgresql-17-pg-fts_0.2.0-1PIGSTY~resolute_arm64.deb pigsty 0.2.0 252.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-fts/postgresql-17-pg-fts_0.2.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_fts` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_fts         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_fts` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_fts;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_fts -v 18  # PG 18
pig ext install -y pg_fts -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_fts_18       # PG 18
dnf install -y pg_fts_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-fts   # PG 18
apt install -y postgresql-17-pg-fts   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_fts;
```

## 用法

来源：

- [官方 v0.2.0 README](https://codeberg.org/gregburd/pg_fts/src/tag/v0.2.0/README.md)
- [v0.2.0 更新日志](https://codeberg.org/gregburd/pg_fts/src/tag/v0.2.0/CHANGELOG.md)
- [v0.2.0 SQL API](https://codeberg.org/gregburd/pg_fts/src/tag/v0.2.0/pg_fts--0.2.0.sql)
- [v0.2.0 控制文件](https://codeberg.org/gregburd/pg_fts/src/tag/v0.2.0/pg_fts.control)

`pg_fts` 通过专用的 `ftsdoc` 和 `ftsquery` 类型以及 `fts` 倒排索引访问方法提供 BM25/BM25F 全文排序。它支持布尔、短语、NEAR、前缀、模糊和正则表达式术语，同时在索引中保留语料库统计信息以进行相关性评分。版本 `0.2.0` 要求 PostgreSQL 17 或更高版本。

### 创建并查询索引

```sql
CREATE EXTENSION pg_fts;

CREATE TABLE docs (
    id bigint PRIMARY KEY,
    body text NOT NULL
);

CREATE INDEX docs_fts
ON docs USING fts (to_ftsdoc('english', body));
```

使用相同的文本搜索配置用于文档和普通查询术语：

```sql
WITH q AS (
    SELECT to_ftsquery('english', 'postgres & "query planner" & index*') AS query
)
SELECT d.id,
       fts_snippet(d.body, q.query) AS excerpt
FROM docs AS d
CROSS JOIN q
WHERE to_ftsdoc('english', d.body) @@@ q.query
ORDER BY to_ftsdoc('english', d.body) <=> q.query
LIMIT 10;
```

`@@@` 匹配，而 `<=>` 升序距离按降序相关性排序行，并可驱动索引顺序扫描以支持 top-k 查询。

### 查询语言与 API 索引

- `to_ftsdoc([regconfig,] text)` 和 `to_ftsquery([regconfig,] text)`: 分析文档并解析查询。
- `quick brown`, `quick & brown`, `quick | brown` 和 `!slow`: 显式/隐式 AND、OR 和 NOT。
- `"quick brown"`, `NEAR(...)`, `term*`, `term~2` 和 `/regular-expression/`: 短语、接近度、前缀、模糊和正则表达式术语。
- `fts_bm25`, `fts_bm25_opts` 和 `fts_bm25f`: 显式的 BM25 排序变体和多字段排序。
- `fts_index_stats(index)` 和 `fts_index_df(index, query)`: 索引维护的文档计数、平均长度、词汇表大小和词频。
- `fts_highlight` 和 `fts_snippet`: 展示匹配文本。
- `fts_search(index, query, k)` 和 `fts_count(index, query)`: 索引本地 top-k 和 MVCC 意识的计数操作。
- `tsquery_to_ftsquery(tsquery)`: 迁移辅助程序；它不会使 `pg_fts` 成为 `tsvector`/GIN 的透明替代品。

### 维护与版本注意事项

```sql
SELECT fts_merge('docs_fts');
SELECT fts_vacuum('docs_fts');
```

- 插入进入立即可匹配的待处理列表，但排名 `<=>` 和 `fts_search` 结果覆盖合并段。当新插入文档必须立即参与排序时，请运行 `fts_merge()`。
- `fts_vacuum()` 会压缩段并回收可重用的索引页面；普通 `VACUUM` 也会参与待处理列表和删除标记维护。
- 版本 `0.2.0` 将访问方法从 `bm25` 重命名为 `fts`。由 `0.1.0` 创建且使用 `USING bm25` 的索引必须重新创建。
- 如果库报告磁盘格式不匹配，请遵循其 `REINDEX` 提示，而不是尝试用不同版本的格式读取索引。
- 访问方法是非覆盖的，并且在此版本中不提供并行扫描。在逻辑复制订阅者上分别安装扩展和索引；索引本身不会进行逻辑复制。

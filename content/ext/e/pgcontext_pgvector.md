---
title: "pgcontext_pgvector"
linkTitle: "pgcontext_pgvector"
description: "pgcontext HNSW 索引的可选 pgvector 兼容桥接扩展。"
weight: 1970
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://pgxn.org/dist/pgContext/0.2.0/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://pgxn.org/dist/pgContext/0.2.0/</div>
    <div class="ext-card__desc">https://pgxn.org/dist/pgContext/0.2.0/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgcontext-0.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgcontext-0.2.0.tar.gz</div>
    <div class="ext-card__desc">pgcontext-0.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgcontext`**](/ext/e/pgcontext) | `0.2.0` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1960  | [**`pgcontext`**](/ext/e/pgcontext) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgcontext` |
| 1970  | [**`pgcontext_pgvector`**](/ext/e/pgcontext_pgvector) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgcontext`](/ext/e/pgcontext) [`vector`](/ext/e/vector) [`vector`](/ext/e/vector) [`vchord`](/ext/e/vchord) [`vectorscale`](/ext/e/vectorscale) [`vectorize`](/ext/e/vectorize) [`pg_rrf`](/ext/e/pg_rrf) [`pg_search`](/ext/e/pg_search) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`vchord_bm25`](/ext/e/vchord_bm25) [`pgml`](/ext/e/pgml) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Optional control shipped by pgcontext 0.2.0; requires pgcontext and vector.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17" >}} | `pgcontext` | `pgcontext`, `vector` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17" >}} | `pgcontext_$v` | - |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17" >}} | `postgresql-$v-pgcontext` | - |
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
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgcontext` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgcontext         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgcontext` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgcontext;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgcontext -v 18  # PG 18
pig ext install -y pgcontext -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgcontext_18       # PG 18
dnf install -y pgcontext_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgcontext   # PG 18
apt install -y postgresql-17-pgcontext   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgcontext_pgvector CASCADE;  -- 依赖: pgcontext, vector
```

## 用法

来源：

- [pgContext 0.2.0 pgvector 共存指南](https://github.com/evokoa/pgcontext/blob/v0.2.0/docs/user_guide/pgvector_coexist.md)
- [pgContext 0.2.0 pgvector 迁移指南](https://github.com/evokoa/pgcontext/blob/v0.2.0/docs/user_guide/pgvector_migration.md)
- [pgcontext_pgvector 控制文件](https://github.com/evokoa/pgcontext/blob/v0.2.0/pgcontext_pgvector.control)
- [pgcontext_pgvector 扩展 SQL](https://github.com/evokoa/pgcontext/blob/v0.2.0/sql/pgcontext_pgvector--0.2.0.sql)
- [pgContext 0.2.0 发行说明](https://github.com/evokoa/pgcontext/blob/v0.2.0/docs/user_guide/release_notes.md)

`pgcontext_pgvector` 是可选的 pgContext companion 桥，用于在 pgvector 扩展拥有的列上提供 pgContext HNSW 索引。它不会合并两套类型系统，也不会复制应用数据；它增加经过认证的类型转换、支持函数和操作符类，而精确距离语义仍绑定到 pgvector 操作符。

### 认证组合与安装

0.2.0 只有在数据库使用 PostgreSQL 17、pgContext 0.2.0，并把 pgvector 0.8.x 安装在 `public` 时才会通过检查。应显式安装前置扩展与桥：

```sql
CREATE EXTENSION vector;
CREATE EXTENSION pgcontext;
CREATE EXTENSION pgcontext_pgvector;
```

两个前置扩展也可以按相反顺序安装，但 `pgcontext_pgvector` 必须在二者之后安装。安装需要超级用户权限。

### 为已有 pgvector 列创建索引

```sql
CREATE INDEX items_embedding_pgc
    ON items USING pgcontext_hnsw
       (embedding pgcontext.vector_hnsw_pgvector_cosine_ops);

SELECT id
FROM items
ORDER BY embedding <=> $1::public.vector
LIMIT 10;
```

已有 pgvector 写法的 SQL 可以使用 pgContext 访问方法。ANN 候选会重新解析到可见 heap 行，并通过 pgvector 操作符精确重排，从而保留其 `double precision` 距离结果语义。

### 重要对象

- `pgcontext.vector_hnsw_pgvector_l2_ops`、`pgcontext.vector_hnsw_pgvector_ip_ops`、`pgcontext.vector_hnsw_pgvector_cosine_ops` 与 `pgcontext.vector_hnsw_pgvector_l1_ops` 用于已有 `public.vector` 列。
- `pgcontext.sparsevec_hnsw_pgvector_cosine_ops` 用于认证范围内的 `public.sparsevec` 列，但受文档规定的 16,000 维和页面包络限制。
- `pgcontext.migration_report()` 即使没有安装桥，也能盘点 pgvector 列、依赖、HNSW 与 IVFFlat。
- 所有权转换函数提供经过审查的 fast 或 restricted-online 工作流；IVFFlat 会重建为 HNSW，而不是就地转换。

### 依赖与移除边界

主 `pgcontext` 扩展仍独立于 pgvector。桥索引依赖 `pgcontext_pgvector`，而桥依赖两个父扩展，因此在这些索引被删除或转换之前，PostgreSQL 会阻止以 `RESTRICT` 移除它们。

不要把 `DROP EXTENSION vector CASCADE` 当作迁移方式。应先盘点数组、视图、函数、预备会话、表达式索引及其他应用依赖。该桥不会提供 pgvector 的全部辅助函数、IVFFlat、迭代扫描 GUC、并行构建、子向量或进度报告行为。

无需预加载或重启。该桥是带权限的兼容面，并不承诺未来任意 pgContext、pgvector、PostgreSQL 大版本或磁盘索引组合都兼容；任一组件变化后都要重新执行认证预检与重建验证。

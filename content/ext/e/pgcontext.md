---
title: "pgcontext"
linkTitle: "pgcontext"
description: "在 PostgreSQL 权威数据表上提供向量检索、过滤感知 HNSW 与混合检索。"
weight: 1960
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

| **相关扩展** | [`vector`](/ext/e/vector) [`vectorize`](/ext/e/vectorize) [`vchord`](/ext/e/vchord) [`vectorscale`](/ext/e/vectorscale) [`pg_rrf`](/ext/e/pg_rrf) [`pg_search`](/ext/e/pg_search) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`vchord_bm25`](/ext/e/vchord_bm25) [`pgmnemo`](/ext/e/pgmnemo) [`pg_summarize`](/ext/e/pg_summarize) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pgcontext_pgvector`](/ext/e/pgcontext_pgvector) |
{.ext-table .ext-table--rel}


> Upstream 0.2.0 and PIGSTY packages support PostgreSQL 17 and 18; pgcontext_pgvector ships in the same package.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17" >}} | `pgcontext` | - |
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
@ el8.x86_64 18 pgcontext_18 pgcontext_18-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcontext_18-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgcontext_18 pgcontext_18-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcontext_18-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgcontext_18 pgcontext_18-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 3.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcontext_18-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgcontext_18 pgcontext_18-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 3.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcontext_18-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgcontext_18 pgcontext_18-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 3.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcontext_18-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgcontext_18 pgcontext_18-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 3.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcontext_18-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgcontext postgresql-18-pgcontext_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcontext/postgresql-18-pgcontext_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgcontext postgresql-18-pgcontext_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcontext/postgresql-18-pgcontext_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgcontext postgresql-18-pgcontext_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcontext/postgresql-18-pgcontext_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgcontext postgresql-18-pgcontext_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcontext/postgresql-18-pgcontext_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgcontext postgresql-18-pgcontext_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 3.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcontext/postgresql-18-pgcontext_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgcontext postgresql-18-pgcontext_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcontext/postgresql-18-pgcontext_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgcontext postgresql-18-pgcontext_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcontext/postgresql-18-pgcontext_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgcontext postgresql-18-pgcontext_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcontext/postgresql-18-pgcontext_0.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgcontext postgresql-18-pgcontext_0.2.0-1PIGSTY~resolute_amd64.deb pigsty 0.2.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcontext/postgresql-18-pgcontext_0.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgcontext postgresql-18-pgcontext_0.2.0-1PIGSTY~resolute_arm64.deb pigsty 0.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcontext/postgresql-18-pgcontext_0.2.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgcontext_17 pgcontext_17-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcontext_17-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgcontext_17 pgcontext_17-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcontext_17-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgcontext_17 pgcontext_17-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 3.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcontext_17-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgcontext_17 pgcontext_17-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 3.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcontext_17-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgcontext_17 pgcontext_17-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 3.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcontext_17-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgcontext_17 pgcontext_17-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 3.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcontext_17-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgcontext postgresql-17-pgcontext_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcontext/postgresql-17-pgcontext_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgcontext postgresql-17-pgcontext_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgcontext/postgresql-17-pgcontext_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgcontext postgresql-17-pgcontext_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcontext/postgresql-17-pgcontext_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgcontext postgresql-17-pgcontext_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgcontext/postgresql-17-pgcontext_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgcontext postgresql-17-pgcontext_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 3.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcontext/postgresql-17-pgcontext_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgcontext postgresql-17-pgcontext_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgcontext/postgresql-17-pgcontext_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgcontext postgresql-17-pgcontext_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcontext/postgresql-17-pgcontext_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgcontext postgresql-17-pgcontext_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgcontext/postgresql-17-pgcontext_0.2.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgcontext postgresql-17-pgcontext_0.2.0-1PIGSTY~resolute_amd64.deb pigsty 0.2.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcontext/postgresql-17-pgcontext_0.2.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgcontext postgresql-17-pgcontext_0.2.0-1PIGSTY~resolute_arm64.deb pigsty 0.2.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgcontext/postgresql-17-pgcontext_0.2.0-1PIGSTY~resolute_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

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
CREATE EXTENSION pgcontext;
```

## 用法

来源：

- [pgContext 0.2.0 README](https://github.com/evokoa/pgcontext/blob/v0.2.0/README.md)
- [pgContext 0.2.0 发行说明](https://github.com/evokoa/pgcontext/blob/v0.2.0/docs/user_guide/release_notes.md)
- [pgContext collection 快速入门](https://github.com/evokoa/pgcontext/blob/v0.2.0/docs/user_guide/quickstart.md)
- [pgContext 索引指南](https://github.com/evokoa/pgcontext/blob/v0.2.0/docs/user_guide/indexes.md)
- [pgContext 已知限制](https://github.com/evokoa/pgcontext/blob/v0.2.0/docs/user_guide/limitations.md)
- [pgContext 控制文件](https://github.com/evokoa/pgcontext/blob/v0.2.0/pgcontext.control)
- [pgvector 共存指南](https://github.com/evokoa/pgcontext/blob/v0.2.0/docs/user_guide/pgvector_coexist.md)

`pgcontext` 把向量与混合检索保留在 PostgreSQL 内。它提供 pgContext 自有向量类型、基于应用表的 collection 元数据、已注册字段过滤、精确搜索、持久化 HNSW，以及稠密向量与全文搜索融合。应用行仍是 MVCC、ACL/RLS、备份与复制的权威来源；索引和生成产物只是可重建的加速状态。

0.2.0 面向 PostgreSQL 17 与 18，而该版本的受控试点认证重点是 PostgreSQL 17。高级 HNSW、非稠密、量化、映射与晚期交互路径仍有明确的实验性边界。

### 核心流程

```sql
CREATE EXTENSION pgcontext;

CREATE TABLE public.docs (
    id text PRIMARY KEY,
    embedding pgcontext.vector(2) NOT NULL,
    status text NOT NULL,
    body text NOT NULL,
    metadata jsonb NOT NULL
);

INSERT INTO public.docs (id, embedding, status, body, metadata) VALUES
    ('doc-1', '[1,0]'::pgcontext.vector, 'published', 'postgres vector search', '{"topic":"postgres"}'),
    ('doc-2', '[0,1]'::pgcontext.vector, 'published', 'rust extension guide', '{"topic":"rust"}');

SELECT * FROM pgcontext.create_collection('docs', 'public.docs');
SELECT pgcontext.register_vector('docs', 'embedding', 'embedding', 2, 'l2');
SELECT pgcontext.register_filter_column('docs', 'status', 'status');
SELECT pgcontext.register_jsonb_path('docs', 'topic', 'metadata', ARRAY['topic']);
SELECT pgcontext.upsert_points('docs', ARRAY['doc-1', 'doc-2']);

SELECT source_key, score
FROM pgcontext.search(
    'docs',
    '[1,0]'::pgcontext.vector,
    '{"must":[{"key":"status","match":"published"}]}'::jsonb,
    10
);
```

Collection 用于描述应用自有表，不会把这些行复制到另一套权威存储。搜索、计数、分面、分组、滚动、推荐与发现共享已注册的向量和过滤定义。

### HNSW 与混合检索

```sql
SET maintenance_work_mem = '2GB';
CREATE INDEX docs_embedding_hnsw ON public.docs
    USING pgcontext_hnsw
    (embedding pgcontext.vector_hnsw_cosine_ops);
RESET maintenance_work_mem;

SELECT source_key, score
FROM pgcontext.query(
    'docs',
    '[1,0]'::pgcontext.vector,
    'postgres search',
    'body',
    10
);
```

稠密 HNSW 操作符类覆盖 L2、内积、余弦与 L1。索引构建会强制执行 `maintenance_work_mem`；应先确定构建预算，再用精确搜索与 `pgcontext.recall_check` 比较近似结果。`pgcontext.query` 使用倒数排名融合组合稠密向量与 PostgreSQL 全文分支。

### 重要对象

- `pgcontext.vector`、`pgcontext.halfvec`、`pgcontext.sparsevec` 与 `pgcontext.bitvec` 是扩展自有类型；非稠密变体仍属实验性能力。
- `pgcontext.create_collection`、注册函数与点映射函数定义基于源表的检索契约。
- `pgcontext.search`、`count`、`facet`、`scroll`、`grouped_search`、`recommend` 与 `discover` 提供基于表的检索。
- `pgcontext.query` 与 `explain` 提供可组合及混合检索。
- `pgcontext_hnsw` 及按度量区分的操作符类提供 ANN 索引。
- 索引状态、诊断、VACUUM 建议、召回检查、优化状态与有界遥测用于运维复核。

### 升级与 pgvector 边界

0.2.0 把 pgContext 自有类型移动到固定的 `pgcontext` schema。已有独立 0.1.0 安装可以由超级用户执行软件包提供的升级：

```sql
ALTER EXTENSION pgcontext UPDATE TO '0.2.0';
```

升级后，应限定类型名，例如 `pgcontext.vector(1536)`，或有意把该 schema 加入 `search_path`。如果 0.1.0 数据库中的 public 向量类型属于 pgvector，升级会在变更前拒绝执行；应盘点依赖、安装 0.2.0 与独立的 `pgcontext_pgvector` 桥、重建注册和依赖对象，并在不改变 pgvector 列的前提下重建 pgContext 索引。

主扩展不依赖 pgvector。其类型与 `public.vector`、`public.halfvec` 和 `public.sparsevec` 不同；不要假定安装顺序会让一个扩展的类型成为另一个扩展的别名。

### 运维边界

- pgContext 安装访问方法，因此 `CREATE EXTENSION` 与升级需要 PostgreSQL 超级用户；已授权的应用 API 不需要超级用户。
- 主扩展不要求 `shared_preload_libraries`、`LOAD` 或重启。
- 早期版本 HNSW 磁盘格式不稳定；跨版本时应规划并验证索引重建，而不能把索引文件当作可移植数据。
- 精确重排、MVCC、ACL 与 RLS 检查仍是正确性边界，但不能替代针对工作负载的召回率、延迟、重启、VACUUM、复制与故障测试。
- 删除扩展前应移除 collection 注册并检查应用依赖对象；避免未经审查的 `CASCADE`。

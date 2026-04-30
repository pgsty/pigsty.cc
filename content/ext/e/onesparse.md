---
title: "onesparse"
linkTitle: "onesparse"
description: "PostgreSQL 18 的稀疏线性代数与图算法扩展"
weight: 2620
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/OneSparse/OneSparse">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">OneSparse/OneSparse</div>
    <div class="ext-card__desc">https://github.com/OneSparse/OneSparse</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/onesparse-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">onesparse-1.0.0.tar.gz</div>
    <div class="ext-card__desc">onesparse-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`one_sparse`**](/ext/e/onesparse) | `1.0.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2620  | [**`onesparse`**](/ext/e/onesparse) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `onesparse` |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`pgrouting`](/ext/e/pgrouting) [`postgis`](/ext/e/postgis) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG18 only; upstream release v1.0.0 ships extension SQL version 0.1.0


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18" >}} | `one_sparse` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18" >}} | `onesparse_$v` | `graphblas`, `lagraph` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18" >}} | `postgresql-$v-onesparse` | `libgraphblas10`, `liblagraph1`, `liblagraphx1` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 onesparse_18 onesparse_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 222.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/onesparse_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 onesparse_18 onesparse_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 201.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/onesparse_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 onesparse_18 onesparse_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 195.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/onesparse_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 onesparse_18 onesparse_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 182.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/onesparse_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 onesparse_18 onesparse_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 200.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/onesparse_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 onesparse_18 onesparse_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 185.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/onesparse_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-onesparse postgresql-18-onesparse_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 598.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/onesparse/postgresql-18-onesparse_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-onesparse postgresql-18-onesparse_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 578.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/onesparse/postgresql-18-onesparse_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-onesparse postgresql-18-onesparse_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 592.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/onesparse/postgresql-18-onesparse_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-onesparse postgresql-18-onesparse_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 574.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/onesparse/postgresql-18-onesparse_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-onesparse postgresql-18-onesparse_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 693.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/onesparse/postgresql-18-onesparse_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-onesparse postgresql-18-onesparse_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 681.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/onesparse/postgresql-18-onesparse_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-onesparse postgresql-18-onesparse_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 645.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/onesparse/postgresql-18-onesparse_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-onesparse postgresql-18-onesparse_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 634.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/onesparse/postgresql-18-onesparse_1.0.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `one_sparse` 扩展的 RPM / DEB 包：

```bash
pig build pkg one_sparse         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `one_sparse` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install one_sparse;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y one_sparse -v 18  # PG 18
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y onesparse_18       # PG 18
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-onesparse   # PG 18
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION onesparse;
```

## 用法

> 来源：[homepage](https://onesparse.com/), [release v1.0.0](https://github.com/OneSparse/OneSparse/releases/tag/v1.0.0), [control file at v1.0.0](https://raw.githubusercontent.com/OneSparse/OneSparse/v1.0.0/onesparse.control), [intro docs](https://onesparse.com/docs.html), [matrix docs](https://onesparse.com/test_matrix_header.html), [vector docs](https://onesparse.com/test_vector_header.html), [algorithm examples](https://onesparse.com/test_examples_header.html)

OneSparse 是一个把 SuiteSparse:GraphBLAS 绑定进 Postgres 的 PostgreSQL 扩展，它把稀疏线性代数和图算法暴露为新的类型、函数与运算符。文档将 `matrix` 视为核心类型，`vector` 和 `scalar` 建立在同一模型之上。`v1.0.0` release 已存在，但该标签下的 extension control file 仍声明 SQL `default_version = '0.1.0'`。

### 核心设置

```sql
CREATE EXTENSION onesparse;
SET search_path TO public,onesparse;

SELECT 'int32'::matrix;
SELECT 'int32'::vector;
SELECT 'int32:42'::scalar;
```

文档站点按 `matrix`、`vector` 和 `scalar` 组织 API，交互示例主要依赖类型转换和构造器。

### Matrix 与 Vector

`matrix` 页面展示了构造、`print()`、`draw()`、赋值、提取、`cast_to()`、调整大小和聚合等常见操作。`vector` 页面记录了对应的向量 API，包括 `nvals()`, `size()`, `eadd()`, `emult()`, `reduce_scalar()`, `choose()` 和 `apply()`。

```sql
SELECT print('int32(4:4)'::matrix);
SELECT draw('int32(4:4)[1:2:1 2:3:2 3:1:3]'::matrix);
SELECT eadd('int32[0:1 1:2 2:3]'::vector, 'int32[0:1 1:2 2:3]'::vector, 'plus_int32');
SELECT reduce_scalar('int32[0:1 1:2 2:3]'::vector, 'plus_monoid_int32');
```

### 图算法

示例页使用 Matrix Market 输入与 `draw(...)` 图形可视化。文档列出的图算法包括：

- `bfs(graph, 1)`，用于 level 和 parent BFS
- `sssp(cast_to(graph, 'int32'), 1::bigint, 1)`，用于单源最短路径
- `pagerank(graph)`，用于按链接结构给顶点排序
- `triangle_centrality(graph)`，用于基于三角形的中心性
- `betweenness(graph, ARRAY[...])` 和 `square_clustering(graph)`，用于补充图分析

文档中的代表性示例：

```sql
SELECT draw(triu(graph), (SELECT level FROM bfs(graph, 1)), false, false, true, 0.5)
FROM karate;
```

同一份指南还展示了使用 `mmread('/home/postgres/onesparse/demo/karate.mtx')` 加载图。

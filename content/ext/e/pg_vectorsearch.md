---
title: "pg_vectorsearch"
linkTitle: "pg_vectorsearch"
description: "使用 PRISM 索引与 RaBitQ 量化的近似向量检索"
weight: 1990
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/timescale/pg_vectorsearch">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">timescale/pg_vectorsearch</div>
    <div class="ext-card__desc">https://github.com/timescale/pg_vectorsearch</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_vectorsearch-0.2.0.tar.gz meson-0.63.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_vectorsearch-0.2.0.tar.gz meson-0.63.3.tar.gz</div>
    <div class="ext-card__desc">pg_vectorsearch-0.2.0.tar.gz meson-0.63.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_vectorsearch`**](/ext/e/pg_vectorsearch) | `0.2.0` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1990  | [**`pg_vectorsearch`**](/ext/e/pg_vectorsearch) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`vector`](/ext/e/vector) [`vectorscale`](/ext/e/vectorscale) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Alpha; PG18 packages; OpenBLAS required; no pgvector dependency; no in-place RC upgrade.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "19,18" >}} | `pg_vectorsearch` | - |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "19,18" >}} | `pg_vectorsearch_$v` | - |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "19,18" >}} | `postgresql-$v-vectorsearch` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
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
@ el9.x86_64 19 pg_vectorsearch_19 pg_vectorsearch_19-0.2.0-1PGSTY.el9.x86_64.rpm pigsty 0.2.0 579.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_vectorsearch_19-0.2.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 19 pg_vectorsearch_19 pg_vectorsearch_19-0.2.0-1PGSTY.el9.aarch64.rpm pigsty 0.2.0 510.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_vectorsearch_19-0.2.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 19 pg_vectorsearch_19 pg_vectorsearch_19-0.2.0-1PGSTY.el10.x86_64.rpm pigsty 0.2.0 585.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_vectorsearch_19-0.2.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 19 pg_vectorsearch_19 pg_vectorsearch_19-0.2.0-1PGSTY.el10.aarch64.rpm pigsty 0.2.0 518.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_vectorsearch_19-0.2.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 19 postgresql-19-vectorsearch postgresql-19-vectorsearch_0.2.0-1PGSTY~bookworm_amd64.deb pigsty 0.2.0 549.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorsearch/postgresql-19-vectorsearch_0.2.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-vectorsearch postgresql-19-vectorsearch_0.2.0-1PGSTY~bookworm_arm64.deb pigsty 0.2.0 477.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorsearch/postgresql-19-vectorsearch_0.2.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-vectorsearch postgresql-19-vectorsearch_0.2.0-1PGSTY~trixie_amd64.deb pigsty 0.2.0 548.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorsearch/postgresql-19-vectorsearch_0.2.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-vectorsearch postgresql-19-vectorsearch_0.2.0-1PGSTY~trixie_arm64.deb pigsty 0.2.0 479.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorsearch/postgresql-19-vectorsearch_0.2.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-vectorsearch postgresql-19-vectorsearch_0.2.0-1PGSTY~jammy_amd64.deb pigsty 0.2.0 583.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorsearch/postgresql-19-vectorsearch_0.2.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-vectorsearch postgresql-19-vectorsearch_0.2.0-1PGSTY~jammy_arm64.deb pigsty 0.2.0 522.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorsearch/postgresql-19-vectorsearch_0.2.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-vectorsearch postgresql-19-vectorsearch_0.2.0-1PGSTY~noble_amd64.deb pigsty 0.2.0 574.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorsearch/postgresql-19-vectorsearch_0.2.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-vectorsearch postgresql-19-vectorsearch_0.2.0-1PGSTY~noble_arm64.deb pigsty 0.2.0 509.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorsearch/postgresql-19-vectorsearch_0.2.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-vectorsearch postgresql-19-vectorsearch_0.2.0-1PGSTY~resolute_amd64.deb pigsty 0.2.0 575.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vectorsearch/postgresql-19-vectorsearch_0.2.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-vectorsearch postgresql-19-vectorsearch_0.2.0-1PGSTY~resolute_arm64.deb pigsty 0.2.0 509.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vectorsearch/postgresql-19-vectorsearch_0.2.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 pg_vectorsearch_18 pg_vectorsearch_18-0.2.0-1PGSTY.el8.x86_64.rpm pigsty 0.2.0 584.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_vectorsearch_18-0.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_vectorsearch_18 pg_vectorsearch_18-0.2.0-1PGSTY.el8.aarch64.rpm pigsty 0.2.0 505.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_vectorsearch_18-0.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_vectorsearch_18 pg_vectorsearch_18-0.2.0-1PGSTY.el9.x86_64.rpm pigsty 0.2.0 578.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_vectorsearch_18-0.2.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_vectorsearch_18 pg_vectorsearch_18-0.2.0-1PGSTY.el9.aarch64.rpm pigsty 0.2.0 510.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_vectorsearch_18-0.2.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_vectorsearch_18 pg_vectorsearch_18-0.2.0-1PGSTY.el10.x86_64.rpm pigsty 0.2.0 583.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_vectorsearch_18-0.2.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_vectorsearch_18 pg_vectorsearch_18-0.2.0-1PGSTY.el10.aarch64.rpm pigsty 0.2.0 518.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_vectorsearch_18-0.2.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-vectorsearch postgresql-18-vectorsearch_0.2.0-1PGSTY~bookworm_amd64.deb pigsty 0.2.0 547.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorsearch/postgresql-18-vectorsearch_0.2.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-vectorsearch postgresql-18-vectorsearch_0.2.0-1PGSTY~bookworm_arm64.deb pigsty 0.2.0 477.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vectorsearch/postgresql-18-vectorsearch_0.2.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-vectorsearch postgresql-18-vectorsearch_0.2.0-1PGSTY~trixie_amd64.deb pigsty 0.2.0 547.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorsearch/postgresql-18-vectorsearch_0.2.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-vectorsearch postgresql-18-vectorsearch_0.2.0-1PGSTY~trixie_arm64.deb pigsty 0.2.0 480.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vectorsearch/postgresql-18-vectorsearch_0.2.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-vectorsearch postgresql-18-vectorsearch_0.2.0-1PGSTY~jammy_amd64.deb pigsty 0.2.0 581.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorsearch/postgresql-18-vectorsearch_0.2.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-vectorsearch postgresql-18-vectorsearch_0.2.0-1PGSTY~jammy_arm64.deb pigsty 0.2.0 522.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vectorsearch/postgresql-18-vectorsearch_0.2.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-vectorsearch postgresql-18-vectorsearch_0.2.0-1PGSTY~noble_amd64.deb pigsty 0.2.0 572.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorsearch/postgresql-18-vectorsearch_0.2.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-vectorsearch postgresql-18-vectorsearch_0.2.0-1PGSTY~noble_arm64.deb pigsty 0.2.0 509.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vectorsearch/postgresql-18-vectorsearch_0.2.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-vectorsearch postgresql-18-vectorsearch_0.2.0-1PGSTY~resolute_amd64.deb pigsty 0.2.0 572.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vectorsearch/postgresql-18-vectorsearch_0.2.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-vectorsearch postgresql-18-vectorsearch_0.2.0-1PGSTY~resolute_arm64.deb pigsty 0.2.0 509.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vectorsearch/postgresql-18-vectorsearch_0.2.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_vectorsearch` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_vectorsearch         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_vectorsearch` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_vectorsearch;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_vectorsearch -v 19  # PG 19
pig ext install -y pg_vectorsearch -v 18  # PG 18
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_vectorsearch_19       # PG 19
dnf install -y pg_vectorsearch_18       # PG 18
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-vectorsearch   # PG 19
apt install -y postgresql-18-vectorsearch   # PG 18
```


**创建扩展**：

```sql
CREATE EXTENSION pg_vectorsearch;
```

## 用法

来源：

- [README.md](https://github.com/timescale/pg_vectorsearch/blob/v0.2.0/README.md)
- [sql/pg_vectorsearch.sql](https://github.com/timescale/pg_vectorsearch/blob/v0.2.0/sql/pg_vectorsearch.sql)
- [docs/maintenance.md](https://github.com/timescale/pg_vectorsearch/blob/v0.2.0/docs/maintenance.md)
- [docs/tuning.md](https://github.com/timescale/pg_vectorsearch/blob/v0.2.0/docs/tuning.md)
- [CHANGELOG.md](https://github.com/timescale/pg_vectorsearch/blob/v0.2.0/CHANGELOG.md)
- [VERSION](https://github.com/timescale/pg_vectorsearch/blob/v0.2.0/VERSION)
- [meson.build](https://github.com/timescale/pg_vectorsearch/blob/v0.2.0/meson.build)
- [pg_vectorsearch.control.in](https://github.com/timescale/pg_vectorsearch/blob/v0.2.0/pg_vectorsearch.control.in)

`pg_vectorsearch` 0.2.0 是使用 PRISM 索引进行近似最近邻检索的 alpha 扩展，支持 PostgreSQL 18 和 19、原生 `vec32` / `vec16` 类型以及可选的 pgvector 互操作。当前面向测试，行为与维护要求仍在演进。

### 核心用法

```sql
CREATE EXTENSION pg_vectorsearch;
CREATE TABLE vectorsearch_items (
    id serial PRIMARY KEY,
    embedding vec32(3) STORAGE PLAIN
);
INSERT INTO vectorsearch_items (embedding)
SELECT ARRAY[i::real, (i % 7)::real, (i % 5)::real]::vec32
FROM generate_series(1, 1000) AS i;
CREATE INDEX vectorsearch_items_prism ON vectorsearch_items
USING prism (embedding vec32_l2_ops);
SET prism.nprobe = 40;
SELECT id FROM vectorsearch_items
ORDER BY embedding <-> '[3,1,2]' LIMIT 5;
```

### 运行边界

安装需要超级用户，无需预加载，扩展不可重定位。`prism` 访问方法提供 `vec32_l2_ops`、`vec32_ip_ops`、`vec32_cosine_ops` 及对应的 vec16 操作符类；`<->`、`<#>` 和 `<=>` 分别表示 L2、负内积和余弦距离。`prism.nprobe` 用于权衡召回与查询工作量；零表示自动调节，不代表精确召回。

应先装载代表性数据，再建立索引。L2 与余弦索引最多支持 8192 维：1968 维以内任意维度，之后要求是 2 的幂乘以不超过八的奇因子。内积索引对 vec32 仍限制为 1968 维，对 vec16 为 3584 维。不支持表达式索引与非日志索引。应将 `prism.leaf_refine_threshold` 保持为零。过滤后可能不足 LIMIT 行，受 `work_mem` 限制的候选缓冲区也可能截断大量或无上限的结果，应与精确查询基准比较。

可用 `prism_index_settings` 检查配置，并按维护指南处理持续更新。`prism_rebalance` 仅支持关闭 `centroid_fastscan` 的单层 RaBitQ 质心页索引，不支持默认多层格式。DELETE 留下墓碑，退役页仅能通过 REINDEX 回收。早期候选发布版不支持原位升级。

### 升级到 0.2.0

安装匹配文件，打开尚未加载旧库的新会话，更新 SQL 扩展并重建全部 PRISM 索引：

```sql
ALTER EXTENSION pg_vectorsearch UPDATE TO '0.2.0';
REINDEX INDEX vectorsearch_items_prism;
```

0x07 读取端拒绝旧 0x06 索引格式，两版动态库不能共存于同一会话。`vec32_norm` 改名为 `l2_norm`；`vec32_dims` 的 vec16 重载改名为 `vec16_dims`，`vector_dims` 提供兼容 pgvector 的接口。直接调用者须更新函数名，依赖视图仍保留函数 OID。

`posting_reference_format` 默认使用 float16。参考向量元素超出 ±65504 时，构建或分裂会报错，必要时选择 float32。vec16 类型现在拒绝超范围输入。已有过滤、缓冲区大小及维护限制继续适用。

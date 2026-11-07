---
title: "pg_lion_vector"
linkTitle: "pg_lion_vector"
description: "为 pgvector 的 vector 与 halfvec 提供带过滤的近邻索引"
weight: 2717
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/cgkanchi/pg_lion">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">cgkanchi/pg_lion</div>
    <div class="ext-card__desc">https://github.com/cgkanchi/pg_lion</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_lion-0.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_lion-0.3.0.tar.gz</div>
    <div class="ext-card__desc">pg_lion-0.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_lion`**](/ext/e/pg_lion) | `0.3.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2715  | [**`pg_lion`**](/ext/e/pg_lion) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 2716  | [**`pg_lion_citext`**](/ext/e/pg_lion_citext) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 2717  | [**`pg_lion_vector`**](/ext/e/pg_lion_vector) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_lion`](/ext/e/pg_lion) [`vector`](/ext/e/vector) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pgvector >= 0.7.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "16,17,18" >}} | `pg_lion` | `pg_lion`, `vector` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "16,17,18" >}} | `pg_lion_$v` | `pgvector_$v` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "16,17,18" >}} | `postgresql-$v-pg-lion` | `postgresql-$v-pgvector` |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_lion` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_lion         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_lion` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_lion;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_lion -v 18  # PG 18
pig ext install -y pg_lion -v 17  # PG 17
pig ext install -y pg_lion -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_lion_18       # PG 18
dnf install -y pg_lion_17       # PG 17
dnf install -y pg_lion_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-lion   # PG 18
apt install -y postgresql-17-pg-lion   # PG 17
apt install -y postgresql-16-pg-lion   # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION pg_lion_vector CASCADE;  -- 依赖: pg_lion, vector
```

## 用法

来源：

- [README](https://github.com/cgkanchi/pg_lion/blob/v0.3.0/README.md)
- [参考手册](https://github.com/cgkanchi/pg_lion/blob/v0.3.0/docs/REFERENCE.md)
- [扩展控制文件](https://github.com/cgkanchi/pg_lion/blob/v0.3.0/pg_lion_vector.control)
- [扩展 SQL](https://github.com/cgkanchi/pg_lion/blob/v0.3.0/pg_lion_vector--0.3.0.sql)

`pg_lion_vector` 0.3.0 为 pgvector 的 `vector` 与 `halfvec` 值添加 `lionvec` 近邻索引访问方法。它使用父扩展 `pg_lion` 的动态库，依赖 pgvector 0.7 或更新版本。

### 核心流程

先创建父扩展与 `vector`。独立的 `lion` 索引可在按距离排序之前过滤候选行。

```sql
CREATE EXTENSION vector;
CREATE EXTENSION pg_lion;
CREATE EXTENSION pg_lion_vector;
CREATE TABLE lion_items (id integer, category integer, embedding vector(3));
INSERT INTO lion_items VALUES (1, 3, '[1,0,0]'), (2, 3, '[0,1,0]'), (3, 4, '[0,0,1]');
CREATE INDEX lion_embedding ON lion_items USING lionvec (embedding vector_cosine_ops);
CREATE INDEX lion_category ON lion_items USING lion (category);
ALTER FUNCTION cosine_distance(vector, vector) COST 100;
VACUUM ANALYZE lion_items;
SELECT id FROM lion_items
WHERE category = 3
ORDER BY embedding <=> '[1,0,0]'::vector
LIMIT 10;
```

上游建议将所选运算符类对应距离函数的开销设为 `COST 100`，便于规划器比较索引扫描与排序成本。`pg_dump` 不会保留该设置，更新 `vector` 时也可能将其重置。

### 运算符类与调优

| 类型 | L2（`<->`） | 负内积（`<#>`） | 余弦（`<=>`） |
| --- | --- | --- | --- |
| `vector` | `vector_l2_ops`（默认） | `vector_ip_ops` | `vector_cosine_ops` |
| `halfvec` | `halfvec_l2_ops`（默认） | `halfvec_ip_ops` | `halfvec_cosine_ops` |

`partitions` 控制索引构建时的聚类数量；`maintenance_work_mem` 必须容纳足够的样本。`pg_lion.vector_margin` 和 `pg_lion.vector_patience` 控制近似搜索。受支持的 lion 过滤条件产生较小候选集时，可以采用精确评分。`pg_lion.vector_postfilter` 控制 lion 索引无法回答的条件；修改前应阅读参考手册。

### 运行边界

需要 PostgreSQL 16 及以上版本，并由超级用户安装。只支持单个 `vector` 或 `halfvec` 列，最多 8128 维；通常采用近似搜索。存在过滤条件不意味着所有查询都会成为精确近邻搜索。频繁更新和删除可能需要定期 `REINDEX`。父扩展的自定义 WAL 索引仍需维持预加载，父扩展与伴随扩展文件应保持相同版本。

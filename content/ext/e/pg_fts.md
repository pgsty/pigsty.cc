---
title: "pg_fts"
linkTitle: "pg_fts"
description: "提供 BM25、BM25F 排序与专用倒排索引的全文检索扩展"
weight: 2230
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://codeberg.org/gregburd/pg_fts">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://codeberg.org/gregburd/pg_fts</div>
    <div class="ext-card__desc">https://codeberg.org/gregburd/pg_fts</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_fts-1.12.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_fts-1.12.0.tar.gz</div>
    <div class="ext-card__desc">pg_fts-1.12.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_fts`**](/ext/e/pg_fts) | `1.12.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2230  | [**`pg_fts`**](/ext/e/pg_fts) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pg_textsearch`](/ext/e/pg_textsearch) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_rrf`](/ext/e/pg_rrf) [`pgroonga`](/ext/e/pgroonga) [`psql_bm25s`](/ext/e/psql_bm25s) [`pgcontext`](/ext/e/pgcontext) [`vectorize`](/ext/e/vectorize) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG17-18; trusted and relocatable.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.12.0` | {{< pgvers "18,17" >}} | `pg_fts` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.12.0` | {{< pgvers "18,17" >}} | `pg_fts_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.12.0` | {{< pgvers "18,17" >}} | `postgresql-$v-pg-fts` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.9.0 1 | AVAIL PIGSTY 1.9.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_fts_18 pg_fts_18-1.9.0-1PGSTY.el8.x86_64.rpm pigsty 1.9.0 469.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fts_18-1.9.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_fts_18 pg_fts_18-1.9.0-1PGSTY.el8.aarch64.rpm pigsty 1.9.0 458.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fts_18-1.9.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_fts_18 pg_fts_18-1.9.0-1PGSTY.el9.x86_64.rpm pigsty 1.9.0 446.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fts_18-1.9.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_fts_18 pg_fts_18-1.9.0-1PGSTY.el9.aarch64.rpm pigsty 1.9.0 440.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fts_18-1.9.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_fts_18 pg_fts_18-1.9.0-1PGSTY.el10.x86_64.rpm pigsty 1.9.0 450.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fts_18-1.9.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_fts_18 pg_fts_18-1.9.0-1PGSTY.el10.aarch64.rpm pigsty 1.9.0 442.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fts_18-1.9.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-fts postgresql-18-pg-fts_1.9.0-1PGSTY~bookworm_amd64.deb pigsty 1.9.0 453.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fts/postgresql-18-pg-fts_1.9.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-fts postgresql-18-pg-fts_1.9.0-1PGSTY~bookworm_arm64.deb pigsty 1.9.0 442.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fts/postgresql-18-pg-fts_1.9.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-fts postgresql-18-pg-fts_1.9.0-1PGSTY~trixie_amd64.deb pigsty 1.9.0 455.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fts/postgresql-18-pg-fts_1.9.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-fts postgresql-18-pg-fts_1.9.0-1PGSTY~trixie_arm64.deb pigsty 1.9.0 444.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fts/postgresql-18-pg-fts_1.9.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-fts postgresql-18-pg-fts_1.9.0-1PGSTY~jammy_amd64.deb pigsty 1.9.0 469.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fts/postgresql-18-pg-fts_1.9.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-fts postgresql-18-pg-fts_1.9.0-1PGSTY~jammy_arm64.deb pigsty 1.9.0 462.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fts/postgresql-18-pg-fts_1.9.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-fts postgresql-18-pg-fts_1.9.0-1PGSTY~noble_amd64.deb pigsty 1.9.0 448.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fts/postgresql-18-pg-fts_1.9.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-fts postgresql-18-pg-fts_1.9.0-1PGSTY~noble_arm64.deb pigsty 1.9.0 443.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fts/postgresql-18-pg-fts_1.9.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-fts postgresql-18-pg-fts_1.9.0-1PGSTY~resolute_amd64.deb pigsty 1.9.0 446.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-fts/postgresql-18-pg-fts_1.9.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-fts postgresql-18-pg-fts_1.9.0-1PGSTY~resolute_arm64.deb pigsty 1.9.0 439.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-fts/postgresql-18-pg-fts_1.9.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_fts_17 pg_fts_17-1.9.0-1PGSTY.el8.x86_64.rpm pigsty 1.9.0 469.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_fts_17-1.9.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_fts_17 pg_fts_17-1.9.0-1PGSTY.el8.aarch64.rpm pigsty 1.9.0 458.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_fts_17-1.9.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_fts_17 pg_fts_17-1.9.0-1PGSTY.el9.x86_64.rpm pigsty 1.9.0 446.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_fts_17-1.9.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_fts_17 pg_fts_17-1.9.0-1PGSTY.el9.aarch64.rpm pigsty 1.9.0 440.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_fts_17-1.9.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_fts_17 pg_fts_17-1.9.0-1PGSTY.el10.x86_64.rpm pigsty 1.9.0 450.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_fts_17-1.9.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_fts_17 pg_fts_17-1.9.0-1PGSTY.el10.aarch64.rpm pigsty 1.9.0 442.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_fts_17-1.9.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-fts postgresql-17-pg-fts_1.9.0-1PGSTY~bookworm_amd64.deb pigsty 1.9.0 453.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fts/postgresql-17-pg-fts_1.9.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-fts postgresql-17-pg-fts_1.9.0-1PGSTY~bookworm_arm64.deb pigsty 1.9.0 442.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-fts/postgresql-17-pg-fts_1.9.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-fts postgresql-17-pg-fts_1.9.0-1PGSTY~trixie_amd64.deb pigsty 1.9.0 455.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fts/postgresql-17-pg-fts_1.9.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-fts postgresql-17-pg-fts_1.9.0-1PGSTY~trixie_arm64.deb pigsty 1.9.0 444.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-fts/postgresql-17-pg-fts_1.9.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-fts postgresql-17-pg-fts_1.9.0-1PGSTY~jammy_amd64.deb pigsty 1.9.0 495.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fts/postgresql-17-pg-fts_1.9.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-fts postgresql-17-pg-fts_1.9.0-1PGSTY~jammy_arm64.deb pigsty 1.9.0 486.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-fts/postgresql-17-pg-fts_1.9.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-fts postgresql-17-pg-fts_1.9.0-1PGSTY~noble_amd64.deb pigsty 1.9.0 448.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fts/postgresql-17-pg-fts_1.9.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-fts postgresql-17-pg-fts_1.9.0-1PGSTY~noble_arm64.deb pigsty 1.9.0 444.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-fts/postgresql-17-pg-fts_1.9.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-fts postgresql-17-pg-fts_1.9.0-1PGSTY~resolute_amd64.deb pigsty 1.9.0 445.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-fts/postgresql-17-pg-fts_1.9.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-fts postgresql-17-pg-fts_1.9.0-1PGSTY~resolute_arm64.deb pigsty 1.9.0 439.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-fts/postgresql-17-pg-fts_1.9.0-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_fts;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_fts -v 18  # PG 18
pig ext install -y pg_fts -v 17  # PG 17
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_fts_18       # PG 18
dnf install -y pg_fts_17       # PG 17
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-fts   # PG 18
apt install -y postgresql-17-pg-fts   # PG 17
```


**创建扩展**：

```sql
CREATE EXTENSION pg_fts;
```

## 用法

来源：

- [README.md](https://api.pgxn.org/src/pg_fts/pg_fts-1.12.0/README.md)
- [pg_fts.control](https://api.pgxn.org/src/pg_fts/pg_fts-1.12.0/pg_fts.control)
- [CHANGELOG.md](https://api.pgxn.org/src/pg_fts/pg_fts-1.12.0/CHANGELOG.md)
- [pg_fts--1.11.0--1.12.0.sql](https://api.pgxn.org/src/pg_fts/pg_fts-1.12.0/pg_fts--1.11.0--1.12.0.sql)

- [README.md](https://github.com/gburd/pg_fts/blob/8bccf0ce75f04b3af559b34d635a5f71e0d2d04e/README.md)
- [pg_fts.control](https://github.com/gburd/pg_fts/blob/8bccf0ce75f04b3af559b34d635a5f71e0d2d04e/pg_fts.control)
- [CHANGELOG.md](https://github.com/gburd/pg_fts/blob/8bccf0ce75f04b3af559b34d635a5f71e0d2d04e/CHANGELOG.md)
- [pg_fts--1.9.1--1.10.0.sql](https://github.com/gburd/pg_fts/blob/8bccf0ce75f04b3af559b34d635a5f71e0d2d04e/pg_fts--1.9.1--1.10.0.sql)

`pg_fts` 1.12.0 通过专用 fts 倒排索引提供 BM25/BM25F 排序的全文检索。支持 PostgreSQL 17 与 18；PostgreSQL 19/master 的 CI 属于尽力支持。控制文件标记可信且可重定位，核心使用无需共享预加载。

### 检索与排序

```sql
CREATE EXTENSION pg_fts;
CREATE TABLE docs (id bigint, body text);
CREATE INDEX docs_fts ON docs USING fts (to_ftsdoc('english', body));
SELECT id FROM docs
 WHERE to_ftsdoc('english', body) @@@ to_ftsquery('english', 'quick fox')
 ORDER BY to_ftsdoc('english', body) <=> to_ftsquery('english', 'quick fox')
 LIMIT 10;
SELECT fts_merge('docs_fts');
SELECT fts_vacuum('docs_fts');
```

### 对象与查询

`ftsdoc` 与 `ftsquery` 表示分析后的文档和查询。`to_ftsdoc()` 与 `to_ftsquery()` 构造它们；`@@@` 匹配文档，`<=>` 按相关性距离排序。索引 KNN 排序扫描必须包含匹配谓词。查询支持布尔项、短语、前缀、模糊与正则匹配。多列文档支持 BM25F 字段权重。`fts_count()` 与普通计数查询可使用精确的索引计数；`fts_search()` 提供直接排序结果。正则与长模糊项加速需通过 `trigrams = on` 显式启用。

### 维护与权限

待合并的新插入文档立即可搜索，合并不是可见性的前提。`fts_merge()` 合并分段，`fts_vacuum()` 回收物理空间。二者写入 WAL，需要索引所有权且必须在主库运行。较大的待合并文档可能暂时占用大量空间，批量导入时应定期合并与回收。`fts_search()` 与 `fts_anomalous_docs()` 会暴露索引内容，默认撤销 PUBLIC 权限；仅在明确评估后扩大访问。普通表查询可见性与直接辅助函数访问具有不同的权限边界。

### 升级至 1.10.0

安装匹配文件后执行 `ALTER EXTENSION pg_fts UPDATE TO '1.10.0'`。1.10.0 默认在服务端共享各索引分段的文档长度数组，并提供 `fts_shared_doclen_stats()` 查看共享缓存。超级用户可用 `pg_fts.shared_doclen` 切换此路径；共享内存不可用时回退到后端私有副本。没有磁盘格式变化，也不要求 REINDEX。旧版删除后排序和倒排块边界修复仍然包含在本版中；规划内存时应区分共享缓存与回退副本。

### 1.11.0 版本

1.11.0 修复结果错误及并发插入、VACUUM、合并故障。排序遍历按块上界优先处理，`pg_fts.bestfirst` 默认启用。索引格式不变，SQL 升级不新增对象。仅为升级不必重建索引，但 REINDEX 可以修复旧缺陷已遗留或丢失的索引项。

### 1.12.0 版本

1.12.0 在各后端缓存分段词典索引，计入 `pg_fts.doclen_cache_mb` 预算；放不下的分段回退到页链查找。修改该预算现可生效，无需等待分段目录变化。本版不改变索引格式，不新增 SQL 对象，也不要求 REINDEX。缓存重建期间的取消或错误可能导致内存一直保留到该后端退出；这一已知限制不改变查询结果。

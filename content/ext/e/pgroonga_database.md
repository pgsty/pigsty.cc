---
title: "pgroonga_database"
linkTitle: "pgroonga_database"
description: "PGGroonga 数据库管理模块"
weight: 2111
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgroonga/pgroonga">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgroonga/pgroonga</div>
    <div class="ext-card__desc">https://github.com/pgroonga/pgroonga</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgroonga-4.0.9.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgroonga-4.0.9.tar.gz</div>
    <div class="ext-card__desc">pgroonga-4.0.9.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgroonga`**](/ext/e/pgroonga) | `4.0.9` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2110  | [**`pgroonga`**](/ext/e/pgroonga) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 2111  | [**`pgroonga_database`**](/ext/e/pgroonga_database) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_search`](/ext/e/pg_search) [`pg_textsearch`](/ext/e/pg_textsearch) [`pg_fts`](/ext/e/pg_fts) [`pg_bestmatch`](/ext/e/pg_bestmatch) [`vchord_bm25`](/ext/e/vchord_bm25) [`pg_rrf`](/ext/e/pg_rrf) [`psql_bm25s`](/ext/e/psql_bm25s) [`pgcontext`](/ext/e/pgcontext) [`vectorize`](/ext/e/vectorize) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.9` | {{< pgvers "18,17,16,15,14" >}} | `pgroonga` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.9` | {{< pgvers "18,17,16,15,14" >}} | `pgroonga_$v` | `groonga-libs` |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.0.9` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgroonga` | `libgroonga0` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| el8.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| el9.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| el9.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| el10.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| el10.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| d12.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| d12.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| d13.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| d13.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u22.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u22.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u24.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u24.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u26.x86_64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
| u26.aarch64 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 | AVAIL PIGSTY 4.0.9 1 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgroonga` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgroonga         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgroonga` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgroonga;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgroonga -v 18  # PG 18
pig ext install -y pgroonga -v 17  # PG 17
pig ext install -y pgroonga -v 16  # PG 16
pig ext install -y pgroonga -v 15  # PG 15
pig ext install -y pgroonga -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgroonga_18       # PG 18
dnf install -y pgroonga_17       # PG 17
dnf install -y pgroonga_16       # PG 16
dnf install -y pgroonga_15       # PG 15
dnf install -y pgroonga_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pgroonga   # PG 18
apt install -y postgresql-17-pgroonga   # PG 17
apt install -y postgresql-16-pgroonga   # PG 16
apt install -y postgresql-15-pgroonga   # PG 15
apt install -y postgresql-14-pgroonga   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pgroonga_database;
```

## 用法

来源：

- [Version 4.0.9 SQL](https://github.com/pgroonga/pgroonga/blob/4.0.9/data/pgroonga_database.sql)
- [Version 4.0.9 control](https://github.com/pgroonga/pgroonga/blob/4.0.9/pgroonga_database.control)
- [Version 4.0.9 implementation](https://github.com/pgroonga/pgroonga/blob/4.0.9/src/pgroonga-database.c)
- [Official recovery procedure](https://pgroonga.github.io/reference/functions/pgroonga-database-remove.html)

`pgroonga_database` 4.0.9 是用于恢复损坏的 PGroonga 内部数据库的辅助扩展。它只提供一个 SQL 函数，用来删除数据库目录及适用表空间目录中的 PGroonga 文件，不提供搜索访问方法。

### 恢复流程

普通索引损坏可能只需 REINDEX 即可修复。只有内部 Groonga 数据库本身损坏、确定需要重建时，才使用此模块。安排恢复窗口，先断开所有使用 PGroonga 的会话；文件被删除时，残留会话可能崩溃。

在尚未打开任何 PGroonga 索引的新管理连接中执行：

```sql
CREATE EXTENSION pgroonga_database;
SELECT pgroonga_database_remove();
```

执行后立即断开该连接，再建立新连接，对**每一个** PGroonga 索引执行 REINDEX，从 PostgreSQL 表数据重新创建内部数据库。完成所有受影响索引的重建和检查后，再恢复应用流量。

### 返回值与边界

`pgroonga_database_remove()` 结束清理循环时返回 true。表空间所有权检查未通过时，循环会提前停止，但函数仍可能返回 true，因此不能仅凭返回值认定所有位置都已清理。其他失败可能报错。它直接删除内部文件，既不导出文件，也不重建索引。不要在清理连接中使用其他 PGroonga 功能。此操作不是例行清理、卸载命令，也不能仅靠包裹在 SQL 事务中就保证安全。

控制文件未将扩展标记为受信任或可迁移模式。C 实现在遍历位置时检查表空间所有权，应使用拥有所需位置的管理员，并确认清理和全量索引重建完成。模块不需要预加载，仅应为恢复任务启用。

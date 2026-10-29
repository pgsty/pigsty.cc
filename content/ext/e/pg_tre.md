---
title: "pg_tre"
linkTitle: "pg_tre"
description: "面向近似正则匹配的 PostgreSQL 原生索引访问方法"
weight: 2330
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://codeberg.org/gregburd/pg_tre">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://codeberg.org/gregburd/pg_tre</div>
    <div class="ext-card__desc">https://codeberg.org/gregburd/pg_tre</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_tre-4.5.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_tre-4.5.3.tar.gz</div>
    <div class="ext-card__desc">pg_tre-4.5.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_tre`**](/ext/e/pg_tre) | `4.5.3` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license mit and bsd2clause" href="/ext/license#mitandbsd2clause">MIT AND BSD-2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2330  | [**`pg_tre`**](/ext/e/pg_tre) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_trgm`](/ext/e/pg_trgm) [`pg_textsearch`](/ext/e/pg_textsearch) [`pg_fts`](/ext/e/pg_fts) [`vector`](/ext/e/vector) [`pg_mentat`](/ext/e/pg_mentat) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Upstream 4.5.3 fixes a TRE approximate-matcher worklist overflow reachable by query users that could crash a backend and restart the cluster. SQL 4.5.3; update matching library and extension SQL. No on-disk change or new REINDEX requirement; older WAL/format and omitted-posting repair boundaries still apply.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.5.3` | {{< pgvers "17,18" >}} | `pg_tre` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.5.3` | {{< pgvers "18,17" >}} | `pg_tre_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.5.3` | {{< pgvers "18,17" >}} | `postgresql-$v-pg-tre` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 4.5.3 1 | AVAIL PIGSTY 4.5.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_tre_18 pg_tre_18-4.5.3-1PGSTY.el8.x86_64.rpm pigsty 4.5.3 592.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tre_18-4.5.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_tre_18 pg_tre_18-4.5.3-1PGSTY.el8.aarch64.rpm pigsty 4.5.3 576.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tre_18-4.5.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_tre_18 pg_tre_18-4.5.3-1PGSTY.el9.x86_64.rpm pigsty 4.5.3 562.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tre_18-4.5.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_tre_18 pg_tre_18-4.5.3-1PGSTY.el9.aarch64.rpm pigsty 4.5.3 553.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tre_18-4.5.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_tre_18 pg_tre_18-4.5.3-1PGSTY.el10.x86_64.rpm pigsty 4.5.3 569.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tre_18-4.5.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_tre_18 pg_tre_18-4.5.3-1PGSTY.el10.aarch64.rpm pigsty 4.5.3 558.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tre_18-4.5.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-tre postgresql-18-pg-tre_4.5.3-1PGSTY~bookworm_amd64.deb pigsty 4.5.3 574.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tre/postgresql-18-pg-tre_4.5.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-tre postgresql-18-pg-tre_4.5.3-1PGSTY~bookworm_arm64.deb pigsty 4.5.3 555.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tre/postgresql-18-pg-tre_4.5.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-tre postgresql-18-pg-tre_4.5.3-1PGSTY~trixie_amd64.deb pigsty 4.5.3 576.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tre/postgresql-18-pg-tre_4.5.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-tre postgresql-18-pg-tre_4.5.3-1PGSTY~trixie_arm64.deb pigsty 4.5.3 558.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tre/postgresql-18-pg-tre_4.5.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-tre postgresql-18-pg-tre_4.5.3-1PGSTY~jammy_amd64.deb pigsty 4.5.3 588.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tre/postgresql-18-pg-tre_4.5.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-tre postgresql-18-pg-tre_4.5.3-1PGSTY~jammy_arm64.deb pigsty 4.5.3 578.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tre/postgresql-18-pg-tre_4.5.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-tre postgresql-18-pg-tre_4.5.3-1PGSTY~noble_amd64.deb pigsty 4.5.3 572.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tre/postgresql-18-pg-tre_4.5.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-tre postgresql-18-pg-tre_4.5.3-1PGSTY~noble_arm64.deb pigsty 4.5.3 562.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tre/postgresql-18-pg-tre_4.5.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-tre postgresql-18-pg-tre_4.5.3-1PGSTY~resolute_amd64.deb pigsty 4.5.3 569.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tre/postgresql-18-pg-tre_4.5.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-tre postgresql-18-pg-tre_4.5.3-1PGSTY~resolute_arm64.deb pigsty 4.5.3 557.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tre/postgresql-18-pg-tre_4.5.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_tre_17 pg_tre_17-4.5.3-1PGSTY.el8.x86_64.rpm pigsty 4.5.3 593.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tre_17-4.5.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_tre_17 pg_tre_17-4.5.3-1PGSTY.el8.aarch64.rpm pigsty 4.5.3 577.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tre_17-4.5.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_tre_17 pg_tre_17-4.5.3-1PGSTY.el9.x86_64.rpm pigsty 4.5.3 563.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tre_17-4.5.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_tre_17 pg_tre_17-4.5.3-1PGSTY.el9.aarch64.rpm pigsty 4.5.3 554.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tre_17-4.5.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_tre_17 pg_tre_17-4.5.3-1PGSTY.el10.x86_64.rpm pigsty 4.5.3 570.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tre_17-4.5.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_tre_17 pg_tre_17-4.5.3-1PGSTY.el10.aarch64.rpm pigsty 4.5.3 559.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tre_17-4.5.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-tre postgresql-17-pg-tre_4.5.3-1PGSTY~bookworm_amd64.deb pigsty 4.5.3 575.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tre/postgresql-17-pg-tre_4.5.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-tre postgresql-17-pg-tre_4.5.3-1PGSTY~bookworm_arm64.deb pigsty 4.5.3 555.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tre/postgresql-17-pg-tre_4.5.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-tre postgresql-17-pg-tre_4.5.3-1PGSTY~trixie_amd64.deb pigsty 4.5.3 577.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tre/postgresql-17-pg-tre_4.5.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-tre postgresql-17-pg-tre_4.5.3-1PGSTY~trixie_arm64.deb pigsty 4.5.3 558.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tre/postgresql-17-pg-tre_4.5.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-tre postgresql-17-pg-tre_4.5.3-1PGSTY~jammy_amd64.deb pigsty 4.5.3 645.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tre/postgresql-17-pg-tre_4.5.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-tre postgresql-17-pg-tre_4.5.3-1PGSTY~jammy_arm64.deb pigsty 4.5.3 632.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tre/postgresql-17-pg-tre_4.5.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-tre postgresql-17-pg-tre_4.5.3-1PGSTY~noble_amd64.deb pigsty 4.5.3 573.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tre/postgresql-17-pg-tre_4.5.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-tre postgresql-17-pg-tre_4.5.3-1PGSTY~noble_arm64.deb pigsty 4.5.3 563.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tre/postgresql-17-pg-tre_4.5.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-tre postgresql-17-pg-tre_4.5.3-1PGSTY~resolute_amd64.deb pigsty 4.5.3 570.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tre/postgresql-17-pg-tre_4.5.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-tre postgresql-17-pg-tre_4.5.3-1PGSTY~resolute_arm64.deb pigsty 4.5.3 558.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tre/postgresql-17-pg-tre_4.5.3-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_tre` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_tre         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_tre` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_tre;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_tre -v 18  # PG 18
pig ext install -y pg_tre -v 17  # PG 17
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_tre_18       # PG 18
dnf install -y pg_tre_17       # PG 17
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-tre   # PG 18
apt install -y postgresql-17-pg-tre   # PG 17
```


**创建扩展**：

```sql
CREATE EXTENSION pg_tre;
```

## 用法

来源：

- [README.md](https://api.pgxn.org/src/pg_tre/pg_tre-4.5.3/README.md)
- [pg_tre.control](https://api.pgxn.org/src/pg_tre/pg_tre-4.5.3/pg_tre.control)
- [sql/pg_tre--4.5.3.sql](https://api.pgxn.org/src/pg_tre/pg_tre-4.5.3/sql/pg_tre--4.5.3.sql)
- [CHANGELOG.md](https://api.pgxn.org/src/pg_tre/pg_tre-4.5.3/CHANGELOG.md)
- [LIMITATIONS.md](https://api.pgxn.org/src/pg_tre/pg_tre-4.5.3/LIMITATIONS.md)
- [META.json](https://api.pgxn.org/src/pg_tre/pg_tre-4.5.3/META.json)
- [.github/workflows/ci.yml](https://api.pgxn.org/src/pg_tre/pg_tre-4.5.3/.github/workflows/ci.yml)
- [库初始化](https://api.pgxn.org/src/pg_tre/pg_tre-4.5.3/src/module.c)

`pg_tre` 4.5.3 提供 `tre` 原生索引访问方法，对文本执行近似正则表达式匹配。上游支持 PostgreSQL 17–19；Pigsty 的 4.5.2 软件包面向 PostgreSQL 17–18。它利用码点三元组与倒排表缩小候选范围，再到堆表核对匹配。适合需要显式编辑代价的容错标识符、日志消息与词法模式检索。

### 启用与查询

索引写入使用 PostgreSQL 的通用 WAL 机制。从 4.0.0 起，执行 `CREATE EXTENSION` 即可启用，新安装无需设置 `shared_preload_libraries` 或重启。创建扩展要求超级用户，控制文件不标记为可信，也不允许重定位。

```sql
CREATE EXTENSION pg_tre;
CREATE TABLE documents (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  body text NOT NULL
);
INSERT INTO documents (body) VALUES
  ('The PostgreSQL database system'),
  ('The Postgres databse system');
CREATE INDEX documents_body_tre ON documents USING tre (body);
SELECT id, body, body <@> tre_pattern('database', 1) AS distance
FROM documents
WHERE body %~~ tre_pattern('database', 1)
ORDER BY distance ASC NULLS LAST, id;
```

PostgreSQL 19 使用内核正则字符分类器；PostgreSQL 17–18 的 ICU 字符类边界行为可能与原生 PostgreSQL 正则语义不同，具体见上游说明。

### 模式与对象

- `tre_pattern(text)` 使用 `pg_tre.default_max_cost`；`tre_pattern(text, int4)` 显式指定最大代价；五参数形式还可指定插入、删除与替换代价。模式采用 POSIX 扩展正则表达式和 TRE 近似匹配预算。
- `text %~~ tre_pattern` 是可索引的近似匹配谓词；`text <@> tre_pattern` 返回编辑代价，预算内无匹配时返回 NULL。
- `tre_distance`、`tre_similarity`、`tre_amatch`、`tre_amatch_cost` 与 `tre_amatch_detail` 提供匹配及兼容函数。
- 索引操作符族也支持 LIKE、ILIKE、正则与等值谓词，并进行堆表复核。独立命名的三元组函数可与 `pg_trgm` 共存；`pg_tre` 不再安装 3.0 中删除的冲突三元组操作符。

索引通过 `tre_text_ops` 接受一个文本列，支持表达式和部分索引，不支持仅索引扫描。短模式、较大编辑预算与缺少字面的正则可能产生大量候选；应检查实际执行计划，并保留取消机制和查询时间限制。

### 维护与限制

`fastupdate` 必须为 true；关闭它现在会被拒绝，因为直接写入路径无法保持索引格式。已有关闭设置的索引仍可打开，但插入会走待合并列表。`pending_list_limit` 单位为 KiB，默认 0 表示不限制。正值会在越过阈值时触发同步合并，由当前插入后端承担工作；已有合并正在执行时，列表可能暂时超过该值。

`pg_tre.min_trigram_freq` 必须保持为 1。以前大于 1 的值会省略稀有倒排条目，可能漏掉结果；现在这类设置会被拒绝。不可信模式应保留有限的正则状态数、编译和匹配时间。索引构建使用 tuplesort 和临时磁盘，内存由 maintenance_work_mem 控制；安排大型构建前应先估算规模。

```sql
SELECT * FROM tre_estimate_index_build('documents'::regclass, 2);
SELECT * FROM pg_tre_index_pending('documents_body_tre'::regclass);
SELECT * FROM pg_tre_index_check('documents_body_tre'::regclass, 2);
```

`pg_tre_index_check` 比较索引与顺序扫描结果。每个样本会执行多次顺序扫描，大表上须限制样本数量。4.5.1 修复了它的搜索路径处理，固定可信查找路径并限定调用名称；以高权限用户运行此辅助函数前应使用修复版本。

### 升级边界

安装匹配文件，确保会话使用新库，再逐库更新：

```sql
ALTER EXTENSION pg_tre UPDATE TO '4.5.3';
```

从 3.x 跨至 4.x 时，索引页格式虽然不变，WAL 记录类型却不兼容。替换库前必须干净停库；物理备库不能与主库运行不同主版本的扩展，须在主库升级后从新的基础备份重建，此边界不支持滚动升级。还须移除旧的 `wal_consistency_checking = 'pg_tre'` 设置，否则 4.x 无法启动；如需一致性检查，上游建议使用 `wal_consistency_checking = 'all'`。

4.4 写入格式 11，并可读取格式 6–10。从这些格式升级无须例行重建；可选的 REINDEX 用于获得新的密集倒排表示。经过 4.4+ 写入后降级到 4.3，需要按旧格式重建受影响索引。更早版本的升级可能跨越其他边界，应检查更新日志。

所有以大于 1 的 min_trigram_freq 构建的索引都必须 REINDEX；安装修复无法补回已省略的倒排条目。4.5 还会在此前受影响版本的索引上关闭过期的 SuRF 加速，立即恢复正确性；如需重新获得该加速，可选择重建。4.5.0 升至 4.5.1 不改变格式或普通查询行为，无须额外 REINDEX。含已删除元组 bloom 选项的旧索引定义，重建前仍须修正。

### 4.5.2 正则表达式修复

4.5.2 修复换行模式 `(?n)` 中的锚点和否定字符类，不改变索引格式；从 4.5.1 升级不需要额外 REINDEX。从更早的受影响版本升级时，仍须遵守上面的 WAL 迁移及遗漏倒排项重建要求。

```sql
SELECT E'a\nfoo' %~~ tre_pattern('(?n)^foo', 0) AS line_start,
       E'foo\n' %~~ tre_pattern('(?n)foo$', 0) AS line_end,
       E'\n' %~~ tre_pattern('(?n)[^x]', 0) AS negated_class;
```

预期结果依次为 true、true、false。修复同时作用于匹配函数和索引复核；未启用换行模式的模式保持原有行为。

### 4.5.3 安全修复

当近似模式包含大量可达状态时，TRE 的固定工作列表可能溢出，导致后端崩溃，继而触发 postmaster 重启集群中的其他后端。4.5.3 在现有模式限制内动态扩展该列表。应安装匹配的库，替换仍使用旧库的会话，并将扩展 SQL 更新到 4.5.3。本补丁不改变磁盘格式，也不新增 REINDEX 要求；上面的旧版本迁移与损坏索引边界仍适用。

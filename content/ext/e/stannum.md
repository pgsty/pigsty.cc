---
title: "stannum"
linkTitle: "stannum"
description: "提供 TINQL、BM25 与分段索引的实验性文本搜索扩展"
weight: 2320
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/TeamSpringbird/stannum">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">TeamSpringbird/stannum</div>
    <div class="ext-card__desc">https://github.com/TeamSpringbird/stannum</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/stannum-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">stannum-0.1.0.tar.gz</div>
    <div class="ext-card__desc">stannum-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`stannum`**](/ext/e/stannum) | `0.1.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license agpl30orlater" href="/ext/license#agpl30orlater">AGPL-3.0-or-later</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2320  | [**`stannum`**](/ext/e/stannum) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `stannum` |
{.ext-table}

| **相关扩展** | [`tin`](/ext/e/tin) [`pg_search`](/ext/e/pg_search) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Unreleased 0.1.0-dev snapshot; no version release/tag. Conflicts with tin in the same database. Optional preload enables maintenance workers and standby index reads; preload must match on primary and standbys.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17" >}} | `stannum` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "17,18" >}} | `stannum_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "17,18" >}} | `postgresql-$v-stannum` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 stannum_18 stannum_18-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/stannum_18-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 stannum_18 stannum_18-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/stannum_18-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 stannum_18 stannum_18-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/stannum_18-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 stannum_18 stannum_18-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 3.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/stannum_18-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 stannum_18 stannum_18-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/stannum_18-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 stannum_18 stannum_18-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 3.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/stannum_18-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-stannum postgresql-18-stannum_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 2.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/stannum/postgresql-18-stannum_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-stannum postgresql-18-stannum_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/stannum/postgresql-18-stannum_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-stannum postgresql-18-stannum_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/stannum/postgresql-18-stannum_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-stannum postgresql-18-stannum_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/stannum/postgresql-18-stannum_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-stannum postgresql-18-stannum_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/stannum/postgresql-18-stannum_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-stannum postgresql-18-stannum_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/stannum/postgresql-18-stannum_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-stannum postgresql-18-stannum_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/stannum/postgresql-18-stannum_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-stannum postgresql-18-stannum_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/stannum/postgresql-18-stannum_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-stannum postgresql-18-stannum_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/stannum/postgresql-18-stannum_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-stannum postgresql-18-stannum_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/stannum/postgresql-18-stannum_0.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 stannum_17 stannum_17-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/stannum_17-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 stannum_17 stannum_17-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/stannum_17-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 stannum_17 stannum_17-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/stannum_17-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 stannum_17 stannum_17-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 3.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/stannum_17-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 stannum_17 stannum_17-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/stannum_17-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 stannum_17 stannum_17-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 3.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/stannum_17-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-stannum postgresql-17-stannum_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/stannum/postgresql-17-stannum_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-stannum postgresql-17-stannum_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/stannum/postgresql-17-stannum_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-stannum postgresql-17-stannum_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/stannum/postgresql-17-stannum_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-stannum postgresql-17-stannum_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/stannum/postgresql-17-stannum_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-stannum postgresql-17-stannum_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/stannum/postgresql-17-stannum_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-stannum postgresql-17-stannum_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/stannum/postgresql-17-stannum_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-stannum postgresql-17-stannum_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/stannum/postgresql-17-stannum_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-stannum postgresql-17-stannum_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/stannum/postgresql-17-stannum_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-stannum postgresql-17-stannum_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/stannum/postgresql-17-stannum_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-stannum postgresql-17-stannum_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 3.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/stannum/postgresql-17-stannum_0.1.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `stannum` 扩展的 RPM / DEB 包：

```bash
pig build pkg stannum         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `stannum` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install stannum;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y stannum -v 18  # PG 18
pig ext install -y stannum -v 17  # PG 17
```

```bash {tab="dnf" value="dnf"}
dnf install -y stannum_18       # PG 18
dnf install -y stannum_17       # PG 17
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-stannum   # PG 18
apt install -y postgresql-17-stannum   # PG 17
```


**创建扩展**：

```sql
CREATE EXTENSION stannum;
```

## 用法

来源：

- [README](https://github.com/TeamSpringbird/stannum/blob/e163585cb9d6b6f78b8de067a9c4aa33ea238063/README.md)
- [Control file / 控制文件](https://github.com/TeamSpringbird/stannum/blob/e163585cb9d6b6f78b8de067a9c4aa33ea238063/postgres/stannum.control)
- [Cargo.toml](https://github.com/TeamSpringbird/stannum/blob/e163585cb9d6b6f78b8de067a9c4aa33ea238063/Cargo.toml)
- [postgres/sql/stannum--0.1.0.sql](https://github.com/TeamSpringbird/stannum/blob/e163585cb9d6b6f78b8de067a9c4aa33ea238063/postgres/sql/stannum--0.1.0.sql)

`stannum` 是基于 Lead 开发的实验性文本搜索扩展，提供持久索引、布尔和短语查询以及 BM25 评分。审核的 0.1.0 源码使用独立的扩展名称和存储格式。

### 核心工作流

```sql
CREATE EXTENSION stannum;
CREATE TABLE documents (id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY, body text);
INSERT INTO documents (body) VALUES
  ('PostgreSQL supports full text search'), ('Search with exact phrase matching');
CREATE INDEX documents_search ON documents USING stannum (body);
ANALYZE documents;
SELECT id, stannum.full_score(ctid) AS score
FROM documents WHERE body ==> 'search' ORDER BY score DESC LIMIT 10;
SELECT * FROM stannum.segment_info('documents_search');
SELECT * FROM stannum.verify_index('documents_search', heap_check => true);
```

### 运行与兼容性

`==>` 运算符接受 TINQL。`stannum.highlight` 标记匹配文本；`stannum.segment_info` 检查索引段，`stannum.verify_index` 验证一致性，并可同时检查堆数据。索引随 PostgreSQL 写入和清理操作维护。

构建目标为 PostgreSQL 17 和 18，目前大部分生命周期验证集中在 18。超级用户将扩展安装到固定的 `stannum` 模式。主库使用时按需加载；如需在备库读取索引，须在主备两侧的 `shared_preload_libraries` 中加入该库并重启服务器。

### 迁移边界

不要在同一数据库中同时安装 `tin` 和 `stannum`，两者的全局 `==>` 运算符冲突。上游不支持从旧扩展名称或旧存储布局原地迁移。应按实验性软件使用，并针对目标负载验证恢复和维护行为。

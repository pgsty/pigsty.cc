---
title: "tin"
linkTitle: "tin"
description: "用于开发测试的 TIN 兼容文本搜索扩展"
weight: 2310
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/planetscale/lead">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">planetscale/lead</div>
    <div class="ext-card__desc">https://github.com/planetscale/lead</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/lead-1.0.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">lead-1.0.6.tar.gz</div>
    <div class="ext-card__desc">lead-1.0.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`lead`**](/ext/e/tin) | `1.0.6` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license agpl30orlater" href="/ext/license#agpl30orlater">AGPL-3.0-or-later</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2310  | [**`tin`**](/ext/e/tin) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `tin` |
{.ext-table}

| **相关扩展** | [`stannum`](/ext/e/stannum) [`pg_search`](/ext/e/pg_search) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Untagged 1.0.6 source snapshot for development/CI, not production PlanetScale TIN. Conflicts with stannum in the same database.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.6` | {{< pgvers "18,17" >}} | `lead` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.6` | {{< pgvers "17,18" >}} | `lead_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.6` | {{< pgvers "17,18" >}} | `postgresql-$v-lead` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.0.6 1 | AVAIL PIGSTY 1.0.6 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 lead_18 lead_18-1.0.6-1PGSTY.el8.x86_64.rpm pigsty 1.0.6 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/lead_18-1.0.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 lead_18 lead_18-1.0.6-1PGSTY.el8.aarch64.rpm pigsty 1.0.6 2.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/lead_18-1.0.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 lead_18 lead_18-1.0.6-1PGSTY.el9.x86_64.rpm pigsty 1.0.6 2.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/lead_18-1.0.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 lead_18 lead_18-1.0.6-1PGSTY.el9.aarch64.rpm pigsty 1.0.6 2.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/lead_18-1.0.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 lead_18 lead_18-1.0.6-1PGSTY.el10.x86_64.rpm pigsty 1.0.6 2.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/lead_18-1.0.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 lead_18 lead_18-1.0.6-1PGSTY.el10.aarch64.rpm pigsty 1.0.6 2.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/lead_18-1.0.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-lead postgresql-18-lead_1.0.6-1PGSTY~bookworm_amd64.deb pigsty 1.0.6 1.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lead/postgresql-18-lead_1.0.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-lead postgresql-18-lead_1.0.6-1PGSTY~bookworm_arm64.deb pigsty 1.0.6 1.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lead/postgresql-18-lead_1.0.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-lead postgresql-18-lead_1.0.6-1PGSTY~trixie_amd64.deb pigsty 1.0.6 1.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lead/postgresql-18-lead_1.0.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-lead postgresql-18-lead_1.0.6-1PGSTY~trixie_arm64.deb pigsty 1.0.6 1.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lead/postgresql-18-lead_1.0.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-lead postgresql-18-lead_1.0.6-1PGSTY~jammy_amd64.deb pigsty 1.0.6 2.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lead/postgresql-18-lead_1.0.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-lead postgresql-18-lead_1.0.6-1PGSTY~jammy_arm64.deb pigsty 1.0.6 2.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lead/postgresql-18-lead_1.0.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-lead postgresql-18-lead_1.0.6-1PGSTY~noble_amd64.deb pigsty 1.0.6 2.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lead/postgresql-18-lead_1.0.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-lead postgresql-18-lead_1.0.6-1PGSTY~noble_arm64.deb pigsty 1.0.6 2.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lead/postgresql-18-lead_1.0.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-lead postgresql-18-lead_1.0.6-1PGSTY~resolute_amd64.deb pigsty 1.0.6 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/lead/postgresql-18-lead_1.0.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-lead postgresql-18-lead_1.0.6-1PGSTY~resolute_arm64.deb pigsty 1.0.6 2.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/lead/postgresql-18-lead_1.0.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 lead_17 lead_17-1.0.6-1PGSTY.el8.x86_64.rpm pigsty 1.0.6 2.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/lead_17-1.0.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 lead_17 lead_17-1.0.6-1PGSTY.el8.aarch64.rpm pigsty 1.0.6 2.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/lead_17-1.0.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 lead_17 lead_17-1.0.6-1PGSTY.el9.x86_64.rpm pigsty 1.0.6 2.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/lead_17-1.0.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 lead_17 lead_17-1.0.6-1PGSTY.el9.aarch64.rpm pigsty 1.0.6 2.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/lead_17-1.0.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 lead_17 lead_17-1.0.6-1PGSTY.el10.x86_64.rpm pigsty 1.0.6 2.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/lead_17-1.0.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 lead_17 lead_17-1.0.6-1PGSTY.el10.aarch64.rpm pigsty 1.0.6 2.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/lead_17-1.0.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-lead postgresql-17-lead_1.0.6-1PGSTY~bookworm_amd64.deb pigsty 1.0.6 1.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lead/postgresql-17-lead_1.0.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-lead postgresql-17-lead_1.0.6-1PGSTY~bookworm_arm64.deb pigsty 1.0.6 1.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lead/postgresql-17-lead_1.0.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-lead postgresql-17-lead_1.0.6-1PGSTY~trixie_amd64.deb pigsty 1.0.6 1.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lead/postgresql-17-lead_1.0.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-lead postgresql-17-lead_1.0.6-1PGSTY~trixie_arm64.deb pigsty 1.0.6 1.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lead/postgresql-17-lead_1.0.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-lead postgresql-17-lead_1.0.6-1PGSTY~jammy_amd64.deb pigsty 1.0.6 2.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lead/postgresql-17-lead_1.0.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-lead postgresql-17-lead_1.0.6-1PGSTY~jammy_arm64.deb pigsty 1.0.6 2.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lead/postgresql-17-lead_1.0.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-lead postgresql-17-lead_1.0.6-1PGSTY~noble_amd64.deb pigsty 1.0.6 2.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lead/postgresql-17-lead_1.0.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-lead postgresql-17-lead_1.0.6-1PGSTY~noble_arm64.deb pigsty 1.0.6 2.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lead/postgresql-17-lead_1.0.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-lead postgresql-17-lead_1.0.6-1PGSTY~resolute_amd64.deb pigsty 1.0.6 2.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/lead/postgresql-17-lead_1.0.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-lead postgresql-17-lead_1.0.6-1PGSTY~resolute_arm64.deb pigsty 1.0.6 2.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/lead/postgresql-17-lead_1.0.6-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `lead` 扩展的 RPM / DEB 包：

```bash
pig build pkg lead         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `lead` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install lead;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y lead -v 18  # PG 18
pig ext install -y lead -v 17  # PG 17
```

```bash {tab="dnf" value="dnf"}
dnf install -y lead_18       # PG 18
dnf install -y lead_17       # PG 17
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-lead   # PG 18
apt install -y postgresql-17-lead   # PG 17
```


**创建扩展**：

```sql
CREATE EXTENSION tin;
```

## 用法

来源：

- [README](https://github.com/planetscale/lead/blob/e3ed2f4ce1388167b0254a0c0c706a61d0a37d83/README.md)
- [Control file / 控制文件](https://github.com/planetscale/lead/blob/e3ed2f4ce1388167b0254a0c0c706a61d0a37d83/postgres/tin.control)
- [Cargo.toml](https://github.com/planetscale/lead/blob/e3ed2f4ce1388167b0254a0c0c706a61d0a37d83/Cargo.toml)
- [postgres/src/lib.rs](https://github.com/planetscale/lead/blob/e3ed2f4ce1388167b0254a0c0c706a61d0a37d83/postgres/src/lib.rs)
- [PlanetScale TIN and Lead](https://planetscale.com/docs/postgres/search)

`tin` 是 Lead 的扩展名，提供兼容 TIN 的文本搜索，适合开发、CI 和预发布测试。本次核验的 1.0.6 源码快照有意采用简单参考实现，牺牲查询性能，不适合生产搜索。

### 核心工作流

```sql
CREATE EXTENSION tin;
CREATE TABLE documents (id integer, body text);
INSERT INTO documents VALUES (1, 'craft beer'), (2, 'wine'), (3, 'beer festival');
CREATE INDEX documents_search ON documents USING tin (body);
SELECT id, tin.full_score(ctid) AS score
FROM documents WHERE body ==> 'beer' ORDER BY score DESC;
```

### 对象与行为

`tin` 访问方法与 `==>` 运算符用于计算 TINQL 搜索条件。`tin.score`、`tin.full_score`、`tin.max_score`、`tin.score_inspect` 提供评分，`tin.highlight` 和 `tin.highlight_ansi` 标记匹配文本。评分调用绑定到对应的搜索表达式和索引。

每次索引扫描都会将全部堆页面作为有损候选返回，由 PostgreSQL 重新检查可见行、表达式和部分索引条件。索引不保存搜索数据，评分也可能再次扫描可见堆行。这样保留了查询语义，但没有提供生产级倒排索引。

### 使用要求

审核源码的目标版本是 PostgreSQL 17 和 18。安装需要超级用户，对象使用固定的 `tin` 模式。库按需加载，无需预加载或重启；测试时仍需控制数据规模。

PlanetScale 的文档将 TIN 定位为生产搜索实现，将 Lead 定位为本地开发替代品。两者使用同一个规范扩展名 `tin`；本目录条目跟踪开源 Lead 实现。源码快照版本不代表 PlanetScale 线上部署的版本。

当前源码为 `tin.tokenize`、`tin.ql_parse`、`tin.highlight` 和 `tin.highlight_ansi` 增加了末尾的 `stemmer` 参数，并以 `_v1_0_3` 结尾的函数名保留旧签名。修改索引的 `stemmer` 后需要执行 `REINDEX`。评分调用必须与对应的 `==>` 搜索条件处于同一查询层级。

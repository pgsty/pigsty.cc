---
title: "pg_ai_query"
linkTitle: "pg_ai_query"
description: "AI驱动的 Postgres SQL 查询生成"
weight: 2730
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/benodiwal/pg_ai_query">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">benodiwal/pg_ai_query</div>
    <div class="ext-card__desc">https://github.com/benodiwal/pg_ai_query</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_ai_query-0.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_ai_query-0.1.1.tar.gz</div>
    <div class="ext-card__desc">pg_ai_query-0.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_ai_query`**](/ext/e/pg_ai_query) | `0.1.1` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2730  | [**`pg_ai_query`**](/ext/e/pg_ai_query) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgml`](/ext/e/pgml) [`pg4ml`](/ext/e/pg4ml) [`vectorize`](/ext/e/vectorize) [`pg_summarize`](/ext/e/pg_summarize) [`pg_tiktoken`](/ext/e/pg_tiktoken) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_ai_query` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_ai_query_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-ai-query` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d12.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u22.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el9.x86_64 18 pg_ai_query_18 pg_ai_query_18-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 967.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ai_query_18-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_ai_query_18 pg_ai_query_18-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 880.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ai_query_18-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_ai_query_18 pg_ai_query_18-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 899.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ai_query_18-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_ai_query_18 pg_ai_query_18-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 846.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ai_query_18-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d13.x86_64 18 postgresql-18-ai-query postgresql-18-ai-query_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 842.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ai-query/postgresql-18-ai-query_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-ai-query postgresql-18-ai-query_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 760.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ai-query/postgresql-18-ai-query_0.1.1-1PIGSTY~trixie_arm64.deb
@ u24.x86_64 18 postgresql-18-ai-query postgresql-18-ai-query_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 795.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ai-query/postgresql-18-ai-query_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-ai-query postgresql-18-ai-query_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 771.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ai-query/postgresql-18-ai-query_0.1.1-1PIGSTY~noble_arm64.deb
@ el9.x86_64 17 pg_ai_query_17 pg_ai_query_17-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 967.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ai_query_17-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_ai_query_17 pg_ai_query_17-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 881.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ai_query_17-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_ai_query_17 pg_ai_query_17-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 899.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ai_query_17-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_ai_query_17 pg_ai_query_17-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 846.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ai_query_17-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d13.x86_64 17 postgresql-17-ai-query postgresql-17-ai-query_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 845.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ai-query/postgresql-17-ai-query_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-ai-query postgresql-17-ai-query_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 760.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ai-query/postgresql-17-ai-query_0.1.1-1PIGSTY~trixie_arm64.deb
@ u24.x86_64 17 postgresql-17-ai-query postgresql-17-ai-query_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 795.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ai-query/postgresql-17-ai-query_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-ai-query postgresql-17-ai-query_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 771.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ai-query/postgresql-17-ai-query_0.1.1-1PIGSTY~noble_arm64.deb
@ el9.x86_64 16 pg_ai_query_16 pg_ai_query_16-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 967.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ai_query_16-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_ai_query_16 pg_ai_query_16-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 881.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ai_query_16-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_ai_query_16 pg_ai_query_16-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 899.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ai_query_16-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_ai_query_16 pg_ai_query_16-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 846.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ai_query_16-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d13.x86_64 16 postgresql-16-ai-query postgresql-16-ai-query_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 841.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ai-query/postgresql-16-ai-query_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-ai-query postgresql-16-ai-query_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 759.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ai-query/postgresql-16-ai-query_0.1.1-1PIGSTY~trixie_arm64.deb
@ u24.x86_64 16 postgresql-16-ai-query postgresql-16-ai-query_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 795.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ai-query/postgresql-16-ai-query_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-ai-query postgresql-16-ai-query_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 771.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ai-query/postgresql-16-ai-query_0.1.1-1PIGSTY~noble_arm64.deb
@ el9.x86_64 15 pg_ai_query_15 pg_ai_query_15-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 967.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ai_query_15-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_ai_query_15 pg_ai_query_15-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 881.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ai_query_15-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_ai_query_15 pg_ai_query_15-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 899.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ai_query_15-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_ai_query_15 pg_ai_query_15-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 846.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ai_query_15-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d13.x86_64 15 postgresql-15-ai-query postgresql-15-ai-query_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 841.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ai-query/postgresql-15-ai-query_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-ai-query postgresql-15-ai-query_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 758.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ai-query/postgresql-15-ai-query_0.1.1-1PIGSTY~trixie_arm64.deb
@ u24.x86_64 15 postgresql-15-ai-query postgresql-15-ai-query_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 795.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ai-query/postgresql-15-ai-query_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-ai-query postgresql-15-ai-query_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 771.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ai-query/postgresql-15-ai-query_0.1.1-1PIGSTY~noble_arm64.deb
@ el9.x86_64 14 pg_ai_query_14 pg_ai_query_14-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 967.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ai_query_14-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_ai_query_14 pg_ai_query_14-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 881.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ai_query_14-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_ai_query_14 pg_ai_query_14-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 899.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ai_query_14-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_ai_query_14 pg_ai_query_14-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 846.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ai_query_14-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d13.x86_64 14 postgresql-14-ai-query postgresql-14-ai-query_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 841.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ai-query/postgresql-14-ai-query_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-ai-query postgresql-14-ai-query_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 760.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ai-query/postgresql-14-ai-query_0.1.1-1PIGSTY~trixie_arm64.deb
@ u24.x86_64 14 postgresql-14-ai-query postgresql-14-ai-query_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 795.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ai-query/postgresql-14-ai-query_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-ai-query postgresql-14-ai-query_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 771.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ai-query/postgresql-14-ai-query_0.1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_ai_query` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_ai_query         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_ai_query` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_ai_query;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_ai_query -v 18  # PG 18
pig ext install -y pg_ai_query -v 17  # PG 17
pig ext install -y pg_ai_query -v 16  # PG 16
pig ext install -y pg_ai_query -v 15  # PG 15
pig ext install -y pg_ai_query -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_ai_query_18       # PG 18
dnf install -y pg_ai_query_17       # PG 17
dnf install -y pg_ai_query_16       # PG 16
dnf install -y pg_ai_query_15       # PG 15
dnf install -y pg_ai_query_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-ai-query   # PG 18
apt install -y postgresql-17-ai-query   # PG 17
apt install -y postgresql-16-ai-query   # PG 16
apt install -y postgresql-15-ai-query   # PG 15
apt install -y postgresql-14-ai-query   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_ai_query;
```




## 用法

> [pg_ai_query: AI 驱动的 PostgreSQL SQL 查询生成](https://github.com/benodiwal/pg_ai_query)

`pg_ai_query` 使用 LLM 提供商（OpenAI、Anthropic、Google Gemini）从自然语言描述生成 SQL 查询。它会自省数据库模式，将自然语言问题翻译为 SQL。

### 配置

创建 `~/.pg_ai.config`：

```ini
[general]
log_level = "INFO"
enable_logging = false

[query]
enforce_limit = true
default_limit = 1000

[response]
show_explanation = true
show_warnings = true

[openai]
api_key = "your-openai-api-key"
default_model = "gpt-4o"

[anthropic]
api_key = "your-anthropic-api-key"
default_model = "claude-3-5-sonnet-20241022"

[gemini]
api_key = "your-google-api-key"
default_model = "gemini-2.5-flash"
```

### 查询生成

```sql
SELECT generate_query('show all customers');
SELECT generate_query('monthly sales trend for the last year by category');
SELECT generate_query('customers who have not placed orders in the last 6 months');
```

### 模式发现

```sql
SELECT get_database_tables();
SELECT get_table_details('orders');
```

### 查询解释

```sql
SELECT explain_query('SELECT * FROM users WHERE created_at > NOW() - INTERVAL ''7 days''');
```

直接传入 API 凭证：

```sql
SELECT explain_query('SELECT * FROM products WHERE price > 100', 'your-api-key', 'anthropic');
```

### 支持的模型

- **OpenAI**: gpt-4o, gpt-4o-mini
- **Anthropic**: claude-3-5-sonnet-20241022, claude-3-haiku-20240307
- **Google Gemini**: gemini-2.5-pro, gemini-2.5-flash

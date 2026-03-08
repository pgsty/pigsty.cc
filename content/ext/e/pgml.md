---
title: "pgml"
linkTitle: "pgml"
description: "PostgresML：用SQL运行机器学习算法并训练模型"
weight: 1890
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgresml/postgresml">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgresml/postgresml</div>
    <div class="ext-card__desc">https://github.com/postgresml/postgresml</div>
  </a>
  <a class="ext-card ext-card--source" href="pgml-2.10.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgml-2.10.0.tar.gz</div>
    <div class="ext-card__desc">pgml-2.10.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgml`**](/ext/e/pgml) | `2.10.0` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1890  | [**`pgml`**](/ext/e/pgml) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgml` |
{.ext-table}

| **相关扩展** | [`pg4ml`](/ext/e/pg4ml) [`vectorize`](/ext/e/vectorize) [`pg_summarize`](/ext/e/pg_summarize) [`pg_tiktoken`](/ext/e/pg_tiktoken) [`vector`](/ext/e/vector) [`vchord`](/ext/e/vchord) [`vectorscale`](/ext/e/vectorscale) [`pg_strom`](/ext/e/pg_strom) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pgrx=0.12.9


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.10.0` | {{< pgvers "17,16,15,14" >}} | `pgml` | - |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.10.0` | {{< pgvers "17,16,15,14" >}} | `pgml_$v` | - |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.10.0` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-pgml` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 |
| el8.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 |
| el9.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 |
| el9.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 |
| el10.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 |
| d12.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 |
| d13.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 |
| u22.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 |
| u24.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 |
| u24.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 | AVAIL PIGSTY 2.10.0 1 |
@ el8.x86_64 17 pgml_17 pgml_17-2.10.0-1PIGSTY.el8.x86_64.rpm pigsty 2.10.0 5.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgml_17-2.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgml_17 pgml_17-2.10.0-1PIGSTY.el8.aarch64.rpm pigsty 2.10.0 4.8MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgml_17-2.10.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgml_17 pgml_17-2.10.0-1PIGSTY.el9.x86_64.rpm pigsty 2.10.0 5.3MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgml_17-2.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgml_17 pgml_17-2.10.0-1PIGSTY.el9.aarch64.rpm pigsty 2.10.0 5.1MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgml_17-2.10.0-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgml postgresql-17-pgml_2.10.0-1PIGSTY~bookworm_amd64.deb pigsty 2.10.0 4.7MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgml/postgresql-17-pgml_2.10.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgml postgresql-17-pgml_2.10.0-1PIGSTY~bookworm_arm64.deb pigsty 2.10.0 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgml/postgresql-17-pgml_2.10.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 17 postgresql-17-pgml postgresql-17-pgml_2.10.0-1PIGSTY~jammy_amd64.deb pigsty 2.10.0 5.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgml/postgresql-17-pgml_2.10.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgml postgresql-17-pgml_2.10.0-1PIGSTY~jammy_arm64.deb pigsty 2.10.0 4.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgml/postgresql-17-pgml_2.10.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgml postgresql-17-pgml_2.10.0-1PIGSTY~noble_amd64.deb pigsty 2.10.0 5.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgml/postgresql-17-pgml_2.10.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgml postgresql-17-pgml_2.10.0-1PIGSTY~noble_arm64.deb pigsty 2.10.0 4.9MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgml/postgresql-17-pgml_2.10.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgml_16 pgml_16-2.10.0-1PIGSTY.el8.x86_64.rpm pigsty 2.10.0 5.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgml_16-2.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgml_16 pgml_16-2.10.0-1PIGSTY.el8.aarch64.rpm pigsty 2.10.0 4.8MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgml_16-2.10.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgml_16 pgml_16-2.10.0-1PIGSTY.el9.x86_64.rpm pigsty 2.10.0 5.3MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgml_16-2.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgml_16 pgml_16-2.10.0-1PIGSTY.el9.aarch64.rpm pigsty 2.10.0 5.1MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgml_16-2.10.0-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgml postgresql-16-pgml_2.10.0-1PIGSTY~bookworm_amd64.deb pigsty 2.10.0 4.7MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgml/postgresql-16-pgml_2.10.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgml postgresql-16-pgml_2.10.0-1PIGSTY~bookworm_arm64.deb pigsty 2.10.0 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgml/postgresql-16-pgml_2.10.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 16 postgresql-16-pgml postgresql-16-pgml_2.10.0-1PIGSTY~jammy_amd64.deb pigsty 2.10.0 5.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgml/postgresql-16-pgml_2.10.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgml postgresql-16-pgml_2.10.0-1PIGSTY~jammy_arm64.deb pigsty 2.10.0 4.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgml/postgresql-16-pgml_2.10.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgml postgresql-16-pgml_2.10.0-1PIGSTY~noble_amd64.deb pigsty 2.10.0 5.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgml/postgresql-16-pgml_2.10.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgml postgresql-16-pgml_2.10.0-1PIGSTY~noble_arm64.deb pigsty 2.10.0 4.9MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgml/postgresql-16-pgml_2.10.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgml_15 pgml_15-2.10.0-1PIGSTY.el8.x86_64.rpm pigsty 2.10.0 5.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgml_15-2.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgml_15 pgml_15-2.10.0-1PIGSTY.el8.aarch64.rpm pigsty 2.10.0 4.8MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgml_15-2.10.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgml_15 pgml_15-2.10.0-1PIGSTY.el9.x86_64.rpm pigsty 2.10.0 5.3MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgml_15-2.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgml_15 pgml_15-2.10.0-1PIGSTY.el9.aarch64.rpm pigsty 2.10.0 5.1MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgml_15-2.10.0-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgml postgresql-15-pgml_2.10.0-1PIGSTY~bookworm_amd64.deb pigsty 2.10.0 4.7MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgml/postgresql-15-pgml_2.10.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgml postgresql-15-pgml_2.10.0-1PIGSTY~bookworm_arm64.deb pigsty 2.10.0 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgml/postgresql-15-pgml_2.10.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 15 postgresql-15-pgml postgresql-15-pgml_2.10.0-1PIGSTY~jammy_amd64.deb pigsty 2.10.0 5.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgml/postgresql-15-pgml_2.10.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgml postgresql-15-pgml_2.10.0-1PIGSTY~jammy_arm64.deb pigsty 2.10.0 4.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgml/postgresql-15-pgml_2.10.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgml postgresql-15-pgml_2.10.0-1PIGSTY~noble_amd64.deb pigsty 2.10.0 5.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgml/postgresql-15-pgml_2.10.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgml postgresql-15-pgml_2.10.0-1PIGSTY~noble_arm64.deb pigsty 2.10.0 4.9MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgml/postgresql-15-pgml_2.10.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgml_14 pgml_14-2.10.0-1PIGSTY.el8.x86_64.rpm pigsty 2.10.0 5.7MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgml_14-2.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgml_14 pgml_14-2.10.0-1PIGSTY.el8.aarch64.rpm pigsty 2.10.0 4.8MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgml_14-2.10.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgml_14 pgml_14-2.10.0-1PIGSTY.el9.x86_64.rpm pigsty 2.10.0 5.3MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgml_14-2.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgml_14 pgml_14-2.10.0-1PIGSTY.el9.aarch64.rpm pigsty 2.10.0 5.1MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgml_14-2.10.0-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgml postgresql-14-pgml_2.10.0-1PIGSTY~bookworm_amd64.deb pigsty 2.10.0 4.7MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgml/postgresql-14-pgml_2.10.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgml postgresql-14-pgml_2.10.0-1PIGSTY~bookworm_arm64.deb pigsty 2.10.0 4.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgml/postgresql-14-pgml_2.10.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 14 postgresql-14-pgml postgresql-14-pgml_2.10.0-1PIGSTY~jammy_amd64.deb pigsty 2.10.0 5.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgml/postgresql-14-pgml_2.10.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgml postgresql-14-pgml_2.10.0-1PIGSTY~jammy_arm64.deb pigsty 2.10.0 4.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgml/postgresql-14-pgml_2.10.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgml postgresql-14-pgml_2.10.0-1PIGSTY~noble_amd64.deb pigsty 2.10.0 5.4MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgml/postgresql-14-pgml_2.10.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgml postgresql-14-pgml_2.10.0-1PIGSTY~noble_arm64.deb pigsty 2.10.0 4.9MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgml/postgresql-14-pgml_2.10.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgml` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgml         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgml` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgml;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgml -v 17  # PG 17
pig ext install -y pgml -v 16  # PG 16
pig ext install -y pgml -v 15  # PG 15
pig ext install -y pgml -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgml_17       # PG 17
dnf install -y pgml_16       # PG 16
dnf install -y pgml_15       # PG 15
dnf install -y pgml_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-17-pgml   # PG 17
apt install -y postgresql-16-pgml   # PG 16
apt install -y postgresql-15-pgml   # PG 15
apt install -y postgresql-14-pgml   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgml';
```


**创建扩展**：

```sql
CREATE EXTENSION pgml;
```


## 用法

> [!WARNING] 该扩展缺乏维护

在所有集群节点上安装 `pgml` 扩展及 Python 依赖后，即可在 PostgreSQL 集群中启用 `pgml`。

使用 `patronictl` 命令[配置](/pgsql/admin/#config-cluster)集群，将 `pgml` 添加到 `shared_preload_libraries` 中，并在 `pgml.venv` 中指定 `venv` 目录：

```yaml
shared_preload_libraries: pgml, timescaledb, pg_stat_statements, auto_explain
pgml.venv: '/data/pgml'
```

完成后，重启数据库集群，然后使用 SQL 命令创建扩展：

```sql
CREATE EXTENSION vector;        -- 建议同时安装 pgvector！
CREATE EXTENSION pgml;          -- 在当前数据库中创建 PostgresML
SELECT pgml.version();          -- 打印 PostgresML 版本信息
```

如果一切正常，应当看到类似如下的输出：

```bash
# create extension pgml;
INFO:  Python version: 3.11.2 (main, Oct  5 2023, 16:06:03) [GCC 8.5.0 20210514 (Red Hat 8.5.0-18)]
INFO:  Scikit-learn 1.3.0, XGBoost 2.0.0, LightGBM 4.1.0, NumPy 1.26.1
CREATE EXTENSION

# SELECT pgml.version(); -- 打印 PostgresML 版本信息
 version
---------
 2.7.8
```

一切就绪！更多详情请参阅 PostgresML 官方文档：https://postgresml.org/docs/guides/use-cases/


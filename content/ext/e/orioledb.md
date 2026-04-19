---
title: "orioledb"
linkTitle: "orioledb"
description: "OrioleDB，下一代事务处理引擎"
weight: 2910
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/orioledb/orioledb">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">orioledb/orioledb</div>
    <div class="ext-card__desc">https://github.com/orioledb/orioledb</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/orioledb-beta15.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">orioledb-beta15.tar.gz</div>
    <div class="ext-card__desc">orioledb-beta15.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`orioledb`**](/ext/e/orioledb) | `1.7` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2910  | [**`orioledb`**](/ext/e/orioledb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_mooncake`](/ext/e/pg_mooncake) [`citus_columnar`](/ext/e/citus_columnar) [`pg_analytics`](/ext/e/pg_analytics) [`pg_duckdb`](/ext/e/pg_duckdb) [`timescaledb`](/ext/e/timescaledb) [`citus`](/ext/e/citus) [`pg_strom`](/ext/e/pg_strom) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> patched kernel; beta15 / patchset18


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "17" >}} | `orioledb` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "17" >}} | `orioledb_$v` | `oriolepg_$v` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "17" >}} | `oriolepg-$v-orioledb` | `oriolepg-$v` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.7 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 17 orioledb_17 orioledb_17-1.7-beta15PIGSTY.el8.x86_64.rpm pigsty 1.7 495.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/orioledb_17-1.7-beta15PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 orioledb_17 orioledb_17-1.7-beta15PIGSTY.el8.aarch64.rpm pigsty 1.7 471.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/orioledb_17-1.7-beta15PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 orioledb_17 orioledb_17-1.7-beta15PIGSTY.el9.x86_64.rpm pigsty 1.7 468.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/orioledb_17-1.7-beta15PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 orioledb_17 orioledb_17-1.7-beta15PIGSTY.el9.aarch64.rpm pigsty 1.7 459.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/orioledb_17-1.7-beta15PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 orioledb_17 orioledb_17-1.7-beta15PIGSTY.el10.x86_64.rpm pigsty 1.7 482.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/orioledb_17-1.7-beta15PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 orioledb_17 orioledb_17-1.7-beta15PIGSTY.el10.aarch64.rpm pigsty 1.7 472.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/orioledb_17-1.7-beta15PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.7-0.beta15PIGSTY~bookworm_amd64.deb pigsty 1.7 1.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.7-0.beta15PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.7-0.beta15PIGSTY~bookworm_arm64.deb pigsty 1.7 1.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.7-0.beta15PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.7-0.beta15PIGSTY~trixie_amd64.deb pigsty 1.7 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.7-0.beta15PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.7-0.beta15PIGSTY~trixie_arm64.deb pigsty 1.7 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.7-0.beta15PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.7-0.beta15PIGSTY~jammy_amd64.deb pigsty 1.7 1.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.7-0.beta15PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.7-0.beta15PIGSTY~jammy_arm64.deb pigsty 1.7 1.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.7-0.beta15PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.7-0.beta15PIGSTY~noble_amd64.deb pigsty 1.7 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.7-0.beta15PIGSTY~noble_amd64.deb
@ u24.aarch64 17 oriolepg-17-orioledb oriolepg-17-orioledb_1.7-0.beta15PIGSTY~noble_arm64.deb pigsty 1.7 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/oriolepg-17-orioledb/oriolepg-17-orioledb_1.7-0.beta15PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `orioledb` 扩展的 RPM / DEB 包：

```bash
pig build pkg orioledb         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `orioledb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install orioledb;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y orioledb -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y orioledb_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y oriolepg-17-orioledb   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'orioledb';
```


**创建扩展**：

```sql
CREATE EXTENSION orioledb;
```




## 用法

> [orioledb: PostgreSQL 的云原生存储引擎](https://github.com/orioledb/orioledb)

OrioleDB 是 PostgreSQL 的新型存储引擎，为数据库容量、能力和性能提供现代化方案。它使用基于撤销日志的 MVCC、写时复制检查点和行级 WAL，消除了膨胀问题和 VACUUM 的需求。

### 配置

在 `postgresql.conf` 中添加（需要重启）：

```ini
shared_preload_libraries = 'orioledb.so'
```

然后启用扩展：

```sql
CREATE EXTENSION orioledb;
```

### 创建表

使用 `USING orioledb` 子句创建采用 OrioleDB 存储引擎的表：

```sql
CREATE TABLE my_table (
    id serial PRIMARY KEY,
    name text,
    value numeric
) USING orioledb;
```

所有标准 PostgreSQL 操作均可用于 OrioleDB 表：

```sql
INSERT INTO my_table (name, value) VALUES ('test', 42);
SELECT * FROM my_table WHERE id = 1;
UPDATE my_table SET value = 100 WHERE id = 1;
DELETE FROM my_table WHERE id = 1;
```

### 排序规则要求

OrioleDB 表仅支持 **ICU**、**C** 和 **POSIX** 排序规则。为避免在每个文本字段上指定 COLLATE，请使用适当的默认值创建数据库：

```sql
CREATE DATABASE mydb LOCALE 'C' TEMPLATE template0;
-- 或
CREATE DATABASE mydb LOCALE_PROVIDER icu ICU_LOCALE 'en' TEMPLATE template0;
```

### 主要优势

- **无膨胀**：基于撤销日志的 MVCC 意味着旧元组版本不会膨胀主存储
- **无需 VACUUM**：页面合并和撤销日志自动回收空间
- **无回卷问题**：原生 64 位事务标识符
- **无锁页面读取**：内存页面直接链接到存储页面
- **行级 WAL**：紧凑的预写日志，适合并行回放

### 限制

- 公测阶段 -- 建议用于测试，不建议用于生产
- 需要来自 [orioledb/postgres](https://github.com/orioledb/postgres) 的补丁版 PostgreSQL 构建
- 仅支持 ICU、C 和 POSIX 排序规则

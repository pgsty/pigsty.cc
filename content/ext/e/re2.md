---
title: "re2"
linkTitle: "re2"
description: "使用 RE2 的 ClickHouse 兼容正则函数"
weight: 4235
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ClickHouse/pg_re2">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ClickHouse/pg_re2</div>
    <div class="ext-card__desc">https://github.com/ClickHouse/pg_re2</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/re2-0.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">re2-0.1.1.tar.gz</div>
    <div class="ext-card__desc">re2-0.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`re2`**](/ext/e/re2) | `0.1.1` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4235  | [**`re2`**](/ext/e/re2) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


> release 0.1.1; SQL v0.1


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `re2` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16" >}} | `re2_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16" >}} | `postgresql-$v-re2` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 re2_18 re2_18-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 25.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/re2_18-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 re2_18 re2_18-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 25.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/re2_18-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 re2_18 re2_18-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 25.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/re2_18-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 re2_18 re2_18-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 25.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/re2_18-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 re2_18 re2_18-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/re2_18-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 re2_18 re2_18-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/re2_18-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-re2 postgresql-18-re2_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 37.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/re2/postgresql-18-re2_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-re2 postgresql-18-re2_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 36.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/re2/postgresql-18-re2_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-re2 postgresql-18-re2_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 38.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/re2/postgresql-18-re2_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-re2 postgresql-18-re2_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 37.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/re2/postgresql-18-re2_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-re2 postgresql-18-re2_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 38.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/re2/postgresql-18-re2_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-re2 postgresql-18-re2_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 37.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/re2/postgresql-18-re2_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-re2 postgresql-18-re2_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 37.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/re2/postgresql-18-re2_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-re2 postgresql-18-re2_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 37.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/re2/postgresql-18-re2_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 re2_17 re2_17-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 25.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/re2_17-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 re2_17 re2_17-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 25.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/re2_17-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 re2_17 re2_17-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 25.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/re2_17-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 re2_17 re2_17-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 25.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/re2_17-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 re2_17 re2_17-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/re2_17-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 re2_17 re2_17-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/re2_17-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-re2 postgresql-17-re2_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 37.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/re2/postgresql-17-re2_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-re2 postgresql-17-re2_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 36.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/re2/postgresql-17-re2_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-re2 postgresql-17-re2_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 38.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/re2/postgresql-17-re2_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-re2 postgresql-17-re2_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 37.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/re2/postgresql-17-re2_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-re2 postgresql-17-re2_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 39.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/re2/postgresql-17-re2_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-re2 postgresql-17-re2_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 38.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/re2/postgresql-17-re2_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-re2 postgresql-17-re2_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 37.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/re2/postgresql-17-re2_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-re2 postgresql-17-re2_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/re2/postgresql-17-re2_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 re2_16 re2_16-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 25.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/re2_16-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 re2_16 re2_16-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 25.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/re2_16-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 re2_16 re2_16-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 25.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/re2_16-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 re2_16 re2_16-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 25.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/re2_16-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 re2_16 re2_16-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 25.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/re2_16-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 re2_16 re2_16-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/re2_16-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-re2 postgresql-16-re2_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 37.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/re2/postgresql-16-re2_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-re2 postgresql-16-re2_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 36.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/re2/postgresql-16-re2_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-re2 postgresql-16-re2_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 38.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/re2/postgresql-16-re2_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-re2 postgresql-16-re2_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 37.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/re2/postgresql-16-re2_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-re2 postgresql-16-re2_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 39.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/re2/postgresql-16-re2_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-re2 postgresql-16-re2_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 38.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/re2/postgresql-16-re2_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-re2 postgresql-16-re2_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 37.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/re2/postgresql-16-re2_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-re2 postgresql-16-re2_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 37.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/re2/postgresql-16-re2_0.1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `re2` 扩展的 RPM / DEB 包：

```bash
pig build pkg re2         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `re2` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install re2;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y re2 -v 18  # PG 18
pig ext install -y re2 -v 17  # PG 17
pig ext install -y re2 -v 16  # PG 16
pig ext install -y re2 -v 15  # PG 15
pig ext install -y re2 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y re2_18       # PG 18
dnf install -y re2_17       # PG 17
dnf install -y re2_16       # PG 16
dnf install -y re2_15       # PG 15
dnf install -y re2_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-re2   # PG 18
apt install -y postgresql-17-re2   # PG 17
apt install -y postgresql-16-re2   # PG 16
apt install -y postgresql-15-re2   # PG 15
apt install -y postgresql-14-re2   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION re2;
```

## 用法

来源: [official README](https://github.com/ClickHouse/pg_re2/blob/main/README.md), [official reference doc](https://github.com/ClickHouse/pg_re2/blob/main/doc/re2.md), [v0.1.1 release](https://github.com/ClickHouse/pg_re2/releases/tag/v0.1.1)

`re2` 提供由 Google RE2 引擎驱动、与 ClickHouse 兼容的正则表达式函数。它同时暴露 `text` 和 `bytea` 重载，因此也可以搜索包含 `\\0` 字节的二进制数据。

```sql
CREATE EXTENSION re2;

SELECT re2match('hello world', 'h.*o');
SELECT re2extract('Order #123', '(\\d+)');
SELECT re2countmatches('a1 b2 c3', '\\d');
```

### 核心函数

- `re2match(haystack, pattern) -> boolean`
- `re2extract(haystack, pattern) -> text|bytea`
- `re2extractall(haystack, pattern) -> text[]|bytea[]`
- `re2regexpextract(haystack, pattern, index default 1) -> text|bytea`
- `re2extractgroups(haystack, pattern) -> text[]|bytea[]`
- `re2replaceregexpone(haystack, pattern, replacement) -> text|bytea`
- `re2replaceregexpall(haystack, pattern, replacement) -> text|bytea`
- `re2countmatches(...)` 和 `re2countmatchescaseinsensitive(...)`

### 多模式匹配

`re2multimatch*` 系列既接受多个 pattern 参数，也接受 `VARIADIC` 数组：

```sql
SELECT re2multimatchany('error: timeout', 'timeout', 'denied');
SELECT re2multimatchanyindex('error: timeout', VARIADIC ARRAY['timeout', 'denied']);
SELECT re2multimatchallindices('error: timeout', 'error', 'timeout', 'panic');
```

### 匹配语义

- 为了匹配 ClickHouse 的行为，`.` 默认会匹配换行。
- 如果希望 `.` 不跨越换行，请在 pattern 前加上 `(?-s)`。
- 替换字符串支持 `\\0` 到 `\\9` 反向引用。

### 注意事项

- 构建或安装时需要系统 `re2` 库。
- `v0.1.1` 是仅涉及二进制构建的版本：它增加了 PostgreSQL 13+ 支持，并记录了多模式函数对 `VARIADIC` 的用法，但已有 `v0.1` SQL 安装不需要执行 `ALTER EXTENSION UPDATE`。

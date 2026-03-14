---
title: "biscuit"
linkTitle: "biscuit"
description: "使用IAM的高性能文本模式匹配"
weight: 2170
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/CrystallineCore/pg_biscuit">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">CrystallineCore/pg_biscuit</div>
    <div class="ext-card__desc">https://github.com/CrystallineCore/pg_biscuit</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/Biscuit-2.2.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">Biscuit-2.2.2.tar.gz</div>
    <div class="ext-card__desc">Biscuit-2.2.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_biscuit`**](/ext/e/biscuit) | `2.2.2` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2170  | [**`biscuit`**](/ext/e/biscuit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `public` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_textsearch`](/ext/e/pg_textsearch) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.2.2` | {{< pgvers "18,17,16" >}} | `pg_biscuit` | `plpgsql` |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.2.2` | {{< pgvers "18,17,16" >}} | `pg_biscuit_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.2.2` | {{< pgvers "18,17,16" >}} | `postgresql-$v-biscuit` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | AVAIL PIGSTY 2.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_biscuit_18 pg_biscuit_18-2.2.2-1PIGSTY.el8.x86_64.rpm pigsty 2.2.2 65.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_biscuit_18-2.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_biscuit_18 pg_biscuit_18-2.2.2-1PIGSTY.el8.aarch64.rpm pigsty 2.2.2 61.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_biscuit_18-2.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_biscuit_18 pg_biscuit_18-2.2.2-1PIGSTY.el9.x86_64.rpm pigsty 2.2.2 65.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_biscuit_18-2.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_biscuit_18 pg_biscuit_18-2.2.2-1PIGSTY.el9.aarch64.rpm pigsty 2.2.2 63.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_biscuit_18-2.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_biscuit_18 pg_biscuit_18-2.2.2-1PIGSTY.el10.x86_64.rpm pigsty 2.2.2 68.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_biscuit_18-2.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_biscuit_18 pg_biscuit_18-2.2.2-1PIGSTY.el10.aarch64.rpm pigsty 2.2.2 65.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_biscuit_18-2.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.2.2-1PIGSTY~bookworm_amd64.deb pigsty 2.2.2 154.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.2.2-1PIGSTY~bookworm_arm64.deb pigsty 2.2.2 149.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.2.2-1PIGSTY~trixie_amd64.deb pigsty 2.2.2 155.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.2.2-1PIGSTY~trixie_arm64.deb pigsty 2.2.2 150.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.2.2-1PIGSTY~jammy_amd64.deb pigsty 2.2.2 157.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.2.2-1PIGSTY~jammy_arm64.deb pigsty 2.2.2 155.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.2.2-1PIGSTY~noble_amd64.deb pigsty 2.2.2 157.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.2.2-1PIGSTY~noble_arm64.deb pigsty 2.2.2 153.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_biscuit_17 pg_biscuit_17-2.2.2-1PIGSTY.el8.x86_64.rpm pigsty 2.2.2 65.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_biscuit_17-2.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_biscuit_17 pg_biscuit_17-2.2.2-1PIGSTY.el8.aarch64.rpm pigsty 2.2.2 60.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_biscuit_17-2.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_biscuit_17 pg_biscuit_17-2.2.2-1PIGSTY.el9.x86_64.rpm pigsty 2.2.2 65.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_biscuit_17-2.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_biscuit_17 pg_biscuit_17-2.2.2-1PIGSTY.el9.aarch64.rpm pigsty 2.2.2 63.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_biscuit_17-2.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_biscuit_17 pg_biscuit_17-2.2.2-1PIGSTY.el10.x86_64.rpm pigsty 2.2.2 68.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_biscuit_17-2.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_biscuit_17 pg_biscuit_17-2.2.2-1PIGSTY.el10.aarch64.rpm pigsty 2.2.2 65.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_biscuit_17-2.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.2.2-1PIGSTY~bookworm_amd64.deb pigsty 2.2.2 154.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.2.2-1PIGSTY~bookworm_arm64.deb pigsty 2.2.2 149.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.2.2-1PIGSTY~trixie_amd64.deb pigsty 2.2.2 155.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.2.2-1PIGSTY~trixie_arm64.deb pigsty 2.2.2 150.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.2.2-1PIGSTY~jammy_amd64.deb pigsty 2.2.2 168.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.2.2-1PIGSTY~jammy_arm64.deb pigsty 2.2.2 165.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.2.2-1PIGSTY~noble_amd64.deb pigsty 2.2.2 157.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.2.2-1PIGSTY~noble_arm64.deb pigsty 2.2.2 153.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.2.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_biscuit_16 pg_biscuit_16-2.2.2-1PIGSTY.el8.x86_64.rpm pigsty 2.2.2 65.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_biscuit_16-2.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_biscuit_16 pg_biscuit_16-2.2.2-1PIGSTY.el8.aarch64.rpm pigsty 2.2.2 61.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_biscuit_16-2.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_biscuit_16 pg_biscuit_16-2.2.2-1PIGSTY.el9.x86_64.rpm pigsty 2.2.2 65.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_biscuit_16-2.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_biscuit_16 pg_biscuit_16-2.2.2-1PIGSTY.el9.aarch64.rpm pigsty 2.2.2 63.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_biscuit_16-2.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_biscuit_16 pg_biscuit_16-2.2.2-1PIGSTY.el10.x86_64.rpm pigsty 2.2.2 68.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_biscuit_16-2.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_biscuit_16 pg_biscuit_16-2.2.2-1PIGSTY.el10.aarch64.rpm pigsty 2.2.2 65.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_biscuit_16-2.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.2.2-1PIGSTY~bookworm_amd64.deb pigsty 2.2.2 154.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.2.2-1PIGSTY~bookworm_arm64.deb pigsty 2.2.2 149.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.2.2-1PIGSTY~trixie_amd64.deb pigsty 2.2.2 155.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.2.2-1PIGSTY~trixie_arm64.deb pigsty 2.2.2 150.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.2.2-1PIGSTY~jammy_amd64.deb pigsty 2.2.2 168.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.2.2-1PIGSTY~jammy_arm64.deb pigsty 2.2.2 165.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.2.2-1PIGSTY~noble_amd64.deb pigsty 2.2.2 157.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.2.2-1PIGSTY~noble_arm64.deb pigsty 2.2.2 153.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.2.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_biscuit` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_biscuit         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_biscuit` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_biscuit;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_biscuit -v 18  # PG 18
pig ext install -y pg_biscuit -v 17  # PG 17
pig ext install -y pg_biscuit -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_biscuit_18       # PG 18
dnf install -y pg_biscuit_17       # PG 17
dnf install -y pg_biscuit_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-biscuit   # PG 18
apt install -y postgresql-17-biscuit   # PG 17
apt install -y postgresql-16-biscuit   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION biscuit CASCADE;  -- 依赖: plpgsql
```



## 用法

> [GitHub: CrystallineCore/pg_biscuit](https://github.com/CrystallineCore/pg_biscuit)

`biscuit`（pg_biscuit）是一个 PostgreSQL 扩展，提供类似 IAM 的模式匹配和位图索引。它使用专用位图索引实现权限风格模式与文本值的高效匹配。

## 功能特性

- **类 IAM 模式匹配**：支持类似 AWS IAM 策略模式的通配符匹配
- **位图索引**：使用位图索引加速模式匹配查询
- **权限评估**：评估给定操作是否与权限模式集合匹配

## 快速开始

```sql
CREATE EXTENSION biscuit CASCADE;  -- 需要 plpgsql

-- 创建含权限模式的表
CREATE TABLE permissions (
  id serial PRIMARY KEY,
  pattern text NOT NULL
);

-- 插入类 IAM 模式
INSERT INTO permissions (pattern) VALUES
  ('s3:GetObject'),
  ('s3:*'),
  ('ec2:Describe*'),
  ('iam:Create*');
```

## 模式语法

Biscuit 支持 IAM 风格的通配符模式：

- `*` 匹配任意字符序列
- `?` 匹配任意单个字符
- 精确字符串按字面匹配

## 说明

- 需要 `plpgsql` 扩展（使用 `CASCADE` 自动安装）
- 可用于 PostgreSQL 16、17 和 18
- MIT 许可证

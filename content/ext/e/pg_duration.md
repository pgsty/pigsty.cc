---
title: "pg_duration"
linkTitle: "pg_duration"
description: "用于表示时间段的强化数据类型"
weight: 3830
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/jkosh44/pg_duration">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">jkosh44/pg_duration</div>
    <div class="ext-card__desc">https://github.com/jkosh44/pg_duration</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_duration-1.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_duration-1.0.2.tar.gz</div>
    <div class="ext-card__desc">pg_duration-1.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_duration`**](/ext/e/pg_duration) | `1.0.2` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3830  | [**`pg_duration`**](/ext/e/pg_duration) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17" >}} | `pg_duration` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17" >}} | `pg_duration_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17" >}} | `postgresql-$v-pg-duration` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_duration_18 pg_duration_18-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 24.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_duration_18-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_duration_18 pg_duration_18-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 23.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_duration_18-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_duration_18 pg_duration_18-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 23.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duration_18-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_duration_18 pg_duration_18-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duration_18-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_duration_18 pg_duration_18-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 23.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duration_18-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_duration_18 pg_duration_18-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duration_18-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-duration postgresql-18-pg-duration_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 29.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duration/postgresql-18-pg-duration_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-duration postgresql-18-pg-duration_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 28.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duration/postgresql-18-pg-duration_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-duration postgresql-18-pg-duration_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 29.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duration/postgresql-18-pg-duration_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-duration postgresql-18-pg-duration_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 28.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duration/postgresql-18-pg-duration_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-duration postgresql-18-pg-duration_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 31.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duration/postgresql-18-pg-duration_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-duration postgresql-18-pg-duration_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 30.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duration/postgresql-18-pg-duration_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-duration postgresql-18-pg-duration_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 30.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duration/postgresql-18-pg-duration_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-duration postgresql-18-pg-duration_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 30.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duration/postgresql-18-pg-duration_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_duration_17 pg_duration_17-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 24.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_duration_17-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_duration_17 pg_duration_17-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 23.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_duration_17-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_duration_17 pg_duration_17-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 23.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_duration_17-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_duration_17 pg_duration_17-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_duration_17-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_duration_17 pg_duration_17-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 23.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_duration_17-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_duration_17 pg_duration_17-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_duration_17-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-duration postgresql-17-pg-duration_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 29.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duration/postgresql-17-pg-duration_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-duration postgresql-17-pg-duration_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 28.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-duration/postgresql-17-pg-duration_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-duration postgresql-17-pg-duration_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 29.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duration/postgresql-17-pg-duration_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-duration postgresql-17-pg-duration_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 28.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-duration/postgresql-17-pg-duration_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-duration postgresql-17-pg-duration_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 32.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duration/postgresql-17-pg-duration_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-duration postgresql-17-pg-duration_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 31.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-duration/postgresql-17-pg-duration_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-duration postgresql-17-pg-duration_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 30.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duration/postgresql-17-pg-duration_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-duration postgresql-17-pg-duration_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 30.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-duration/postgresql-17-pg-duration_1.0.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_duration` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_duration         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_duration` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_duration;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_duration -v 18  # PG 18
pig ext install -y pg_duration -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_duration_18       # PG 18
dnf install -y pg_duration_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-duration   # PG 18
apt install -y postgresql-17-pg-duration   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_duration;
```



## 用法

> [pg_duration: PostgreSQL 的 ISO 8601 持续时间类型](https://github.com/jkosh44/pg_duration)

`pg_duration` 扩展提供了一个 `duration` 类型，用 8 字节以微秒为单位存储经过时间，比内置的 `interval` 类型更简单且比较行为更一致。

```sql
CREATE EXTENSION pg_duration;
```

### 数据类型

`duration` 类型表示绝对经过时间，不包含日历组件（没有月或日）。有效输入接受任何不超过小时单位的 PostgreSQL interval 语法。

```sql
SELECT '01:30:00'::duration;
SELECT '2 hours 30 minutes'::duration;
```

### 运算符

- **算术运算**：duration 之间的 `+`、`-`；与 `float8` 的 `*`、`/`；一元 `-`
- **比较运算**：`<`、`<=`、`>`、`>=`、`=`、`<>`

### 函数

```sql
-- 从各组件构造
SELECT make_duration(hours => 2, mins => 30, secs => 15.5);

-- 检查是否有限
SELECT isfinite('01:00:00'::duration);

-- 截断到指定精度
SELECT date_trunc('hour', '02:45:30'::duration);

-- 提取子字段
SELECT date_part('minute', '02:45:30'::duration);
SELECT extract_duration('hour', '02:45:30'::duration);
```

### 类型转换

duration 可隐式转换为 `interval`。将 `interval` 转换为 `duration` 需要显式类型转换。

### 聚合与索引

支持标准聚合函数（`avg`、`count`、`max`、`min`、`sum`）以及 B-tree 和 Hash 索引。

---
title: "pg_lion_citext"
linkTitle: "pg_lion_citext"
description: "为 lion 索引提供大小写不敏感的 citext 运算符类"
weight: 2716
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/cgkanchi/pg_lion">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">cgkanchi/pg_lion</div>
    <div class="ext-card__desc">https://github.com/cgkanchi/pg_lion</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_lion-0.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_lion-0.3.0.tar.gz</div>
    <div class="ext-card__desc">pg_lion-0.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_lion`**](/ext/e/pg_lion) | `0.3.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2715  | [**`pg_lion`**](/ext/e/pg_lion) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 2716  | [**`pg_lion_citext`**](/ext/e/pg_lion_citext) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 2717  | [**`pg_lion_vector`**](/ext/e/pg_lion_vector) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_lion`](/ext/e/pg_lion) [`citext`](/ext/e/citext) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "16,17,18" >}} | `pg_lion` | `pg_lion`, `citext` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "16,17,18" >}} | `pg_lion_$v` | `postgresql$v-contrib` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "16,17,18" >}} | `postgresql-$v-pg-lion` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_lion` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_lion         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_lion` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_lion;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_lion -v 18  # PG 18
pig ext install -y pg_lion -v 17  # PG 17
pig ext install -y pg_lion -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_lion_18       # PG 18
dnf install -y pg_lion_17       # PG 17
dnf install -y pg_lion_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-lion   # PG 18
apt install -y postgresql-17-pg-lion   # PG 17
apt install -y postgresql-16-pg-lion   # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION pg_lion_citext CASCADE;  -- 依赖: pg_lion, citext
```

## 用法

来源：

- [README](https://github.com/cgkanchi/pg_lion/blob/v0.3.0/README.md)
- [参考手册](https://github.com/cgkanchi/pg_lion/blob/v0.3.0/docs/REFERENCE.md)
- [扩展控制文件](https://github.com/cgkanchi/pg_lion/blob/v0.3.0/pg_lion_citext.control)
- [扩展 SQL](https://github.com/cgkanchi/pg_lion/blob/v0.3.0/pg_lion_citext--0.3.0.sql)

`pg_lion_citext` 0.3.0 为 `lion` 索引注册 `citext_ops` 运算符类，用于大小写不敏感的文本键。它是随 `pg_lion` 分发的 SQL 伴随扩展，没有独立动态库。

### 核心流程

先创建 `citext` 和 `pg_lion`，再启用此伴随扩展。默认运算符类使用 `citext` 的哈希与比较函数，支持相等、不等及范围比较（`=`、`<>`、`<`、`<=`、`>=`、`>`）。

```sql
CREATE EXTENSION citext;
CREATE EXTENSION pg_lion;
CREATE EXTENSION pg_lion_citext;
CREATE TABLE lion_contacts (email citext);
INSERT INTO lion_contacts VALUES ('Ada@example.com'), ('ADA@example.com');
CREATE INDEX lion_email ON lion_contacts USING lion (email);
SELECT count(*) FROM lion_contacts WHERE email = 'ada@example.com';
```

示例计数为两行，因为两种拼写比较相等。应用继续使用普通的 `citext` 条件。

### 运行边界

需要 PostgreSQL 16 及以上版本，并由超级用户安装。大小写折叠与排序遵循 `citext` 语义。应使用同一父扩展版本中的文件。父扩展索引的可见性、`VACUUM` 及可选自定义 WAL 预加载约束仍然适用。此伴随扩展本身不会启用预加载或修改既有索引。

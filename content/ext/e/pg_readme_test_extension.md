---
title: "pg_readme_test_extension"
linkTitle: "pg_readme_test_extension"
description: "用于测试 pg_readme 文档生成的夹具扩展"
weight: 4301
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bigsmoke/pg_readme/tree/master/pg_readme_test_extension">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">master/pg_readme_test_extension</div>
    <div class="ext-card__desc">https://github.com/bigsmoke/pg_readme/tree/master/pg_readme_test_extension</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_readme-0.7.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_readme-0.7.1.tar.gz</div>
    <div class="ext-card__desc">pg_readme-0.7.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_readme`**](/ext/e/pg_readme) | `0.7.1` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4300  | [**`pg_readme`**](/ext/e/pg_readme) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 4301  | [**`pg_readme_test_extension`**](/ext/e/pg_readme_test_extension) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_readme`](/ext/e/pg_readme) [`schedoc`](/ext/e/schedoc) [`ddlx`](/ext/e/ddlx) [`pgpdf`](/ext/e/pgpdf) [`pg_render`](/ext/e/pg_render) [`pgdd`](/ext/e/pgdd) [`meta`](/ext/e/meta) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Bundled test fixture; its control default_version is forever and it does not require hstore; package ownership follows pg_readme: PGDG RPM 0.7.0 and PIGSTY DEB 0.7.1.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.7.1` | {{< pgvers "14,15,16,17,18" >}} | `pg_readme` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.7.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_readme_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.7.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-readme` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 |
| el8.aarch64 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 | AVAIL PGDG 0.7.0 1 |
| el9.x86_64 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 |
| el9.aarch64 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 |
| el10.x86_64 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 |
| el10.aarch64 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 | AVAIL PGDG 0.7.0 2 |
| d12.x86_64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 | AVAIL PIGSTY 0.7.1 1 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_readme` 扩展的 DEB 包：

```bash
pig build pkg pg_readme         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_readme` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_readme;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_readme -v 18  # PG 18
pig ext install -y pg_readme -v 17  # PG 17
pig ext install -y pg_readme -v 16  # PG 16
pig ext install -y pg_readme -v 15  # PG 15
pig ext install -y pg_readme -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_readme_18       # PG 18
dnf install -y pg_readme_17       # PG 17
dnf install -y pg_readme_16       # PG 16
dnf install -y pg_readme_15       # PG 15
dnf install -y pg_readme_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-readme   # PG 18
apt install -y postgresql-17-pg-readme   # PG 17
apt install -y postgresql-16-pg-readme   # PG 16
apt install -y postgresql-15-pg-readme   # PG 15
apt install -y postgresql-14-pg-readme   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_readme_test_extension;
```

## 用法

来源：

- [pg_readme 0.7.1 README](https://api.pgxn.org/src/pg_readme/pg_readme-0.7.1/README.md)
- [测试扩展控制文件](https://api.pgxn.org/src/pg_readme/pg_readme-0.7.1/pg_readme_test_extension/pg_readme_test_extension.control)
- [测试扩展 SQL 固件](https://api.pgxn.org/src/pg_readme/pg_readme-0.7.1/pg_readme_test_extension/pg_readme_test_extension--forever.sql)
- [Pigsty 软件包矩阵](https://pgext.cloud/ext/pg_readme_test_extension)

`pg_readme_test_extension` 是 `pg_readme` 随附的集成测试固件。它会安装带注释的域、类型、表、视图、例程、触发器和处理指令，以便上游验证 `pg_extension_readme()`。它不是应用功能，也不是生产依赖。

### 使用测试固件

```sql
CREATE EXTENSION pg_readme CASCADE;
CREATE EXTENSION pg_readme_test_extension;

SELECT pg_extension_readme('pg_readme_test_extension'::name);
```

使用输出测试或演示生成器，然后从一次性数据库中移除该固件：

```sql
DROP EXTENSION pg_readme_test_extension;
```

### 边界与注意事项

- 上游发行版本为 0.7.1，但该固件的控制版本刻意使用字面量 `forever`。
- 该固件随 `pg_readme` 一起提供；当前 Pigsty DEB 软件包为 0.7.1，而 RPM 软件包仍为 0.7.0。两边的扩展版本都保持 `forever`。
- 它可重定位，本身不要求 `hstore`，并会创建使用通用名称的示例对象。仅应安装在这些对象不会与真实应用模式冲突的环境中。
- 它的 SQL 接口用于覆盖生成器行为，并可能随测试演进而改变。不要让应用代码依赖这些固件对象。

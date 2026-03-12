---
title: "informix_fdw"
linkTitle: "informix_fdw"
description: "Informix 外部数据包装器"
weight: 8670
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/credativ/informix_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">credativ/informix_fdw</div>
    <div class="ext-card__desc">https://github.com/credativ/informix_fdw</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`informix_fdw`**](/ext/e/informix_fdw) | `0.6.3` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8670  | [**`informix_fdw`**](/ext/e/informix_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


> PGDG non-free (pgnf) only; no SQL-level extension dependency; runtime requires IBM Informix Client SDK (libifsql15a/libifasf15a/libifgen15a/libifos15a/libifgls)


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.6.3` | {{< pgvers "18,17,16,15,14" >}} | `informix_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.6.3` | {{< pgvers "18,17,16,15,14" >}} | `informix_fdw_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.6.3 1 | AVAIL PGDG 0.6.3 1 | AVAIL PGDG 0.6.3 1 | AVAIL PGDG 0.6.3 1 | AVAIL PGDG 0.6.3 1 |
| el8.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 0.6.3 1 | AVAIL PGDG 0.6.3 1 | AVAIL PGDG 0.6.3 2 | AVAIL PGDG 0.6.3 2 | AVAIL PGDG 0.6.3 2 |
| el9.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | AVAIL PGDG 0.6.3 1 | AVAIL PGDG 0.6.3 1 | AVAIL PGDG 0.6.3 2 | AVAIL PGDG 0.6.3 2 | AVAIL PGDG 0.6.3 2 |
| el10.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 informix_fdw_18 informix_fdw_18-0.6.3-1PGDG.rhel8.x86_64.rpm pgdg 0.6.3 61.3KiB https://download.postgresql.org/pub/repos/yum/non-free/18/redhat/rhel-8-x86_64/informix_fdw_18-0.6.3-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 18 informix_fdw_18 informix_fdw_18-0.6.3-1PGDG.rhel9.x86_64.rpm pgdg 0.6.3 59.8KiB https://download.postgresql.org/pub/repos/yum/non-free/18/redhat/rhel-9-x86_64/informix_fdw_18-0.6.3-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 18 informix_fdw_18 informix_fdw_18-0.6.3-1PGDG.rhel10.x86_64.rpm pgdg 0.6.3 60.6KiB https://download.postgresql.org/pub/repos/yum/non-free/18/redhat/rhel-10-x86_64/informix_fdw_18-0.6.3-1PGDG.rhel10.x86_64.rpm
@ el8.x86_64 17 informix_fdw_17 informix_fdw_17-0.6.3-1PGDG.rhel8.x86_64.rpm pgdg 0.6.3 61.3KiB https://download.postgresql.org/pub/repos/yum/non-free/17/redhat/rhel-8-x86_64/informix_fdw_17-0.6.3-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 17 informix_fdw_17 informix_fdw_17-0.6.3-1PGDG.rhel9.x86_64.rpm pgdg 0.6.3 59.9KiB https://download.postgresql.org/pub/repos/yum/non-free/17/redhat/rhel-9-x86_64/informix_fdw_17-0.6.3-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 17 informix_fdw_17 informix_fdw_17-0.6.3-1PGDG.rhel10.x86_64.rpm pgdg 0.6.3 60.5KiB https://download.postgresql.org/pub/repos/yum/non-free/17/redhat/rhel-10-x86_64/informix_fdw_17-0.6.3-1PGDG.rhel10.x86_64.rpm
@ el8.x86_64 16 informix_fdw_16 informix_fdw_16-0.6.3-1PGDG.rhel8.x86_64.rpm pgdg 0.6.3 61.3KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-8-x86_64/informix_fdw_16-0.6.3-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 16 informix_fdw_16 informix_fdw_16-0.6.3-1PGDG.rhel9.x86_64.rpm pgdg 0.6.3 59.8KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-9-x86_64/informix_fdw_16-0.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 informix_fdw_16 informix_fdw_16-0.6.2-2PGDG.rhel9.x86_64.rpm pgdg 0.6.2 59.5KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-9-x86_64/informix_fdw_16-0.6.2-2PGDG.rhel9.x86_64.rpm
@ el10.x86_64 16 informix_fdw_16 informix_fdw_16-0.6.3-1PGDG.rhel10.x86_64.rpm pgdg 0.6.3 60.6KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-10-x86_64/informix_fdw_16-0.6.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 informix_fdw_16 informix_fdw_16-0.6.2-2PGDG.rhel10.x86_64.rpm pgdg 0.6.2 60.2KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-10-x86_64/informix_fdw_16-0.6.2-2PGDG.rhel10.x86_64.rpm
@ el8.x86_64 15 informix_fdw_15 informix_fdw_15-0.6.3-1PGDG.rhel8.x86_64.rpm pgdg 0.6.3 63.4KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/informix_fdw_15-0.6.3-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 15 informix_fdw_15 informix_fdw_15-0.6.3-1PGDG.rhel9.x86_64.rpm pgdg 0.6.3 64.2KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/informix_fdw_15-0.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 informix_fdw_15 informix_fdw_15-0.6.2-2PGDG.rhel9.x86_64.rpm pgdg 0.6.2 63.9KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/informix_fdw_15-0.6.2-2PGDG.rhel9.x86_64.rpm
@ el10.x86_64 15 informix_fdw_15 informix_fdw_15-0.6.3-1PGDG.rhel10.x86_64.rpm pgdg 0.6.3 64.9KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-10-x86_64/informix_fdw_15-0.6.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 informix_fdw_15 informix_fdw_15-0.6.2-2PGDG.rhel10.x86_64.rpm pgdg 0.6.2 64.4KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-10-x86_64/informix_fdw_15-0.6.2-2PGDG.rhel10.x86_64.rpm
@ el8.x86_64 14 informix_fdw_14 informix_fdw_14-0.6.3-1PGDG.rhel8.x86_64.rpm pgdg 0.6.3 63.4KiB https://download.postgresql.org/pub/repos/yum/non-free/14/redhat/rhel-8-x86_64/informix_fdw_14-0.6.3-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 14 informix_fdw_14 informix_fdw_14-0.6.3-1PGDG.rhel9.x86_64.rpm pgdg 0.6.3 64.2KiB https://download.postgresql.org/pub/repos/yum/non-free/14/redhat/rhel-9-x86_64/informix_fdw_14-0.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 informix_fdw_14 informix_fdw_14-0.6.2-2PGDG.rhel9.x86_64.rpm pgdg 0.6.2 63.8KiB https://download.postgresql.org/pub/repos/yum/non-free/14/redhat/rhel-9-x86_64/informix_fdw_14-0.6.2-2PGDG.rhel9.x86_64.rpm
@ el10.x86_64 14 informix_fdw_14 informix_fdw_14-0.6.3-1PGDG.rhel10.x86_64.rpm pgdg 0.6.3 64.9KiB https://download.postgresql.org/pub/repos/yum/non-free/14/redhat/rhel-10-x86_64/informix_fdw_14-0.6.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 informix_fdw_14 informix_fdw_14-0.6.2-2PGDG.rhel10.x86_64.rpm pgdg 0.6.2 64.5KiB https://download.postgresql.org/pub/repos/yum/non-free/14/redhat/rhel-10-x86_64/informix_fdw_14-0.6.2-2PGDG.rhel10.x86_64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `informix_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install informix_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y informix_fdw -v 18  # PG 18
pig ext install -y informix_fdw -v 17  # PG 17
pig ext install -y informix_fdw -v 16  # PG 16
pig ext install -y informix_fdw -v 15  # PG 15
pig ext install -y informix_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y informix_fdw_18       # PG 18
dnf install -y informix_fdw_17       # PG 17
dnf install -y informix_fdw_16       # PG 16
dnf install -y informix_fdw_15       # PG 15
dnf install -y informix_fdw_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION informix_fdw;
```



## 用法

> [informix_fdw: 访问 Informix 的外部数据包装器](https://github.com/credativ/informix_fdw)

### 创建服务器

```sql
CREATE EXTENSION informix_fdw;

CREATE SERVER informix_server
  FOREIGN DATA WRAPPER informix_fdw
  OPTIONS (
    informixserver 'informix_hostname',
    informixdir '/opt/informix/csdk'
  );
```

**服务器选项：** `informixserver`（必填，sqlhosts 文件中的 Informix 服务器标识符）、`informixdir`（必填，Informix Client SDK 路径）、`disable_predicate_pushdown`（禁用 WHERE 下推）、`gl_datetime`（自定义日期时间格式，默认 `%iY-%m-%d %H:%M:%S`）、`gl_date`（自定义日期格式，默认 `%iY-%m-%d`）。

### 创建用户映射

```sql
CREATE USER MAPPING FOR CURRENT_USER
  SERVER informix_server
  OPTIONS (username 'informix', password 'secret');
```

### 创建外部表

```sql
CREATE FOREIGN TABLE remote_table (
  id bigint NOT NULL,
  name varchar(255),
  amount numeric(10,2),
  created timestamp
)
SERVER informix_server
OPTIONS (
  database 'mydb',
  table 'remote_table',
  client_locale 'en_US.utf8',
  db_locale 'en_US.819'
);
```

**表选项：** `database`（必填，远程数据库名）、`table` 或 `query`（二选一）、`client_locale`（必填，须与 PostgreSQL 服务器编码匹配）、`db_locale`（必填，须与 Informix 区域设置匹配）、`disable_rowid`（使用可更新游标替代 ROWID）、`enable_blobs`（表包含 BLOB 时需包含）。

使用 `query` 替代 `table` 实现类视图访问：

```sql
CREATE FOREIGN TABLE remote_view (
  id bigint,
  total numeric(10,2)
)
SERVER informix_server
OPTIONS (
  database 'mydb',
  query 'SELECT id, SUM(amount) AS total FROM orders GROUP BY id',
  client_locale 'en_US.utf8',
  db_locale 'en_US.819'
);
```

### CRUD 操作

```sql
SELECT * FROM remote_table WHERE id > 100;
INSERT INTO remote_table (id, name, amount) VALUES (1, 'test', 99.99);
UPDATE remote_table SET amount = 100.00 WHERE id = 1;
DELETE FROM remote_table WHERE id = 1;
```

### 支持的数据类型

查询：BOOLEAN、DATE、DATETIME、INTERVAL、SMALLINT、INTEGER、BIGINT、SERIAL、VARCHAR、CHARACTER、TEXT、NUMERIC、MONEY。

DML 操作：SERIAL、INTEGER、BIGINT、INTERVAL、TEXT、BYTEA、VARCHAR、NVARCHAR、TIMESTAMP、DATE、NUMERIC、MONEY。

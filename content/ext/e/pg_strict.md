---
title: "pg_strict"
linkTitle: "pg_strict"
description: "防止不带WHERE条件的危险UPDATE和DELETE操作"
weight: 5830
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/spa5k/pg_strict">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">spa5k/pg_strict</div>
    <div class="ext-card__desc">https://github.com/spa5k/pg_strict</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_strict-1.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_strict-1.0.2.tar.gz</div>
    <div class="ext-card__desc">pg_strict-1.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_strict`**](/ext/e/pg_strict) | `1.0.2` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5830  | [**`pg_strict`**](/ext/e/pg_strict) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`safeupdate`](/ext/e/safeupdate) [`pg_savior`](/ext/e/pg_savior) [`pg_upless`](/ext/e/pg_upless) [`pg_drop_events`](/ext/e/pg_drop_events) [`pg_readonly`](/ext/e/pg_readonly) [`table_log`](/ext/e/table_log) [`pgaudit`](/ext/e/pgaudit) [`pg_permissions`](/ext/e/pg_permissions) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manually patched


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_strict` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_strict_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_strict_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d12.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_strict_18 pg_strict_18-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 324.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_strict_18-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_strict_18 pg_strict_18-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 217.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_strict_18-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_strict_18 pg_strict_18-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 338.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_strict_18-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_strict_18 pg_strict_18-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 232.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_strict_18-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_strict_18 pg_strict_18-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 339.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_strict_18-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_strict_18 pg_strict_18-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 232.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_strict_18-1.0.2-1PIGSTY.el10.aarch64.rpm
@ el8.x86_64 17 pg_strict_17 pg_strict_17-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 324.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_strict_17-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_strict_17 pg_strict_17-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 217.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_strict_17-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_strict_17 pg_strict_17-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 339.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_strict_17-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_strict_17 pg_strict_17-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 232.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_strict_17-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_strict_17 pg_strict_17-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 339.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_strict_17-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_strict_17 pg_strict_17-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 232.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_strict_17-1.0.2-1PIGSTY.el10.aarch64.rpm
@ el8.x86_64 16 pg_strict_16 pg_strict_16-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 324.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_strict_16-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_strict_16 pg_strict_16-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 217.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_strict_16-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_strict_16 pg_strict_16-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 339.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_strict_16-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_strict_16 pg_strict_16-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 232.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_strict_16-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_strict_16 pg_strict_16-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 339.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_strict_16-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_strict_16 pg_strict_16-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 232.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_strict_16-1.0.2-1PIGSTY.el10.aarch64.rpm
@ el8.x86_64 15 pg_strict_15 pg_strict_15-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 323.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_strict_15-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_strict_15 pg_strict_15-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 217.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_strict_15-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_strict_15 pg_strict_15-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 338.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_strict_15-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_strict_15 pg_strict_15-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 232.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_strict_15-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_strict_15 pg_strict_15-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 339.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_strict_15-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_strict_15 pg_strict_15-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 232.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_strict_15-1.0.2-1PIGSTY.el10.aarch64.rpm
@ el8.x86_64 14 pg_strict_14 pg_strict_14-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 323.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_strict_14-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_strict_14 pg_strict_14-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 217.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_strict_14-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_strict_14 pg_strict_14-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 338.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_strict_14-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_strict_14 pg_strict_14-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 232.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_strict_14-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_strict_14 pg_strict_14-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 338.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_strict_14-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_strict_14 pg_strict_14-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 232.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_strict_14-1.0.2-1PIGSTY.el10.aarch64.rpm
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_strict` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_strict         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_strict` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_strict;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_strict -v 18  # PG 18
pig ext install -y pg_strict -v 17  # PG 17
pig ext install -y pg_strict -v 16  # PG 16
pig ext install -y pg_strict -v 15  # PG 15
pig ext install -y pg_strict -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_strict_18       # PG 18
dnf install -y pg_strict_17       # PG 17
dnf install -y pg_strict_16       # PG 16
dnf install -y pg_strict_15       # PG 15
dnf install -y pg_strict_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y pg_strict_18   # PG 18
apt install -y pg_strict_17   # PG 17
apt install -y pg_strict_16   # PG 16
apt install -y pg_strict_15   # PG 15
apt install -y pg_strict_14   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_strict';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_strict;
```



## 用法

> [pg_strict: 阻止不带 WHERE 子句的危险 UPDATE 和 DELETE](https://github.com/spa5k/pg_strict)

`pg_strict` 扩展阻止缺少 `WHERE` 子句的 `UPDATE` 和 `DELETE` 语句。它通过 `post_parse_analyze_hook` 在解析/分析阶段运行，为每种语句类型提供三种执行模式。

### 配置参数

| 参数 | 模式 | 描述 |
|-----------|-------|-------------|
| `pg_strict.require_where_on_update` | `on`/`warn`/`off` | 对 UPDATE 强制要求 WHERE |
| `pg_strict.require_where_on_delete` | `on`/`warn`/`off` | 对 DELETE 强制要求 WHERE |

- **`on`**：拒绝不带 WHERE 的语句（抛出错误）
- **`warn`**：允许但发出警告日志
- **`off`**：标准 PostgreSQL 行为

### 会话级配置

```sql
SET pg_strict.require_where_on_update = 'on';
SET pg_strict.require_where_on_delete = 'warn';
```

### 持久化配置

```sql
ALTER DATABASE postgres SET pg_strict.require_where_on_update = 'on';
ALTER ROLE app_service SET pg_strict.require_where_on_delete = 'on';
ALTER ROLE dba_admin SET pg_strict.require_where_on_update = 'off';
```

### 事务级覆盖

```sql
BEGIN;
SET LOCAL pg_strict.require_where_on_delete = 'off';
DELETE FROM temp_table;  -- 在此事务中允许
COMMIT;
```

### API 函数

```sql
SELECT pg_strict_version();           -- 扩展版本
SELECT pg_strict_config();            -- 所有设置及其值和描述

-- 以编程方式验证查询
SELECT pg_strict_check_where_clause('DELETE FROM t', 'DELETE');  -- 返回布尔值
SELECT pg_strict_validate_update('UPDATE t SET x=1');
SELECT pg_strict_validate_delete('DELETE FROM t');

-- 快速模式切换
SELECT pg_strict_enable_update();     -- 将 update 执行设为 'on'
SELECT pg_strict_warn_delete();       -- 将 delete 执行设为 'warn'
SELECT pg_strict_disable_update();    -- 将 update 执行设为 'off'
```

任何非空 WHERE 条件都被接受（包括 `WHERE false`）。支持 CTE 语句。

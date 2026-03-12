---
title: "lolor"
linkTitle: "lolor"
description: "让 PostgreSQL 大对象兼容逻辑复制的扩展"
weight: 9570
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgEdge/lolor">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgEdge/lolor</div>
    <div class="ext-card__desc">https://github.com/pgEdge/lolor</div>
  </a>
  <a class="ext-card ext-card--source" href="lolor-1.2.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">lolor-1.2.2.tar.gz</div>
    <div class="ext-card__desc">lolor-1.2.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`lolor`**](/ext/e/lolor) | `1.2.2` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9570  | [**`lolor`**](/ext/e/lolor) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `lolor` |
{.ext-table}

| **相关扩展** | [`spock`](/ext/e/spock) [`snowflake`](/ext/e/snowflake) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> works on pgedge kernel fork. Requires lolor.node


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.2` | {{< pgvers "17" >}} | `lolor` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.2` | {{< pgvers "17" >}} | `lolor_$v` | `pgedge_$v` |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.2` | {{< pgvers "17" >}} | `pgedge-$v-lolor` | `pgedge-$v` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 1.2.2 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 17 lolor_17 lolor_17-1.2.2-1PIGSTY.el8.x86_64.rpm pigsty 1.2.2 29.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/lolor_17-1.2.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 lolor_17 lolor_17-1.2.2-1PIGSTY.el8.aarch64.rpm pigsty 1.2.2 28.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/lolor_17-1.2.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 lolor_17 lolor_17-1.2.2-1PIGSTY.el9.x86_64.rpm pigsty 1.2.2 28.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/lolor_17-1.2.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 lolor_17 lolor_17-1.2.2-1PIGSTY.el9.aarch64.rpm pigsty 1.2.2 27.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/lolor_17-1.2.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 lolor_17 lolor_17-1.2.2-1PIGSTY.el10.x86_64.rpm pigsty 1.2.2 28.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/lolor_17-1.2.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 lolor_17 lolor_17-1.2.2-1PIGSTY.el10.aarch64.rpm pigsty 1.2.2 28.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/lolor_17-1.2.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 pgedge-17-lolor pgedge-17-lolor_1.2.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2.2 16.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/lolor/pgedge-17-lolor_1.2.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 pgedge-17-lolor pgedge-17-lolor_1.2.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2.2 15.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/lolor/pgedge-17-lolor_1.2.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 pgedge-17-lolor pgedge-17-lolor_1.2.2-1PIGSTY~trixie_amd64.deb pigsty 1.2.2 16.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/lolor/pgedge-17-lolor_1.2.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 pgedge-17-lolor pgedge-17-lolor_1.2.2-1PIGSTY~trixie_arm64.deb pigsty 1.2.2 15.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/lolor/pgedge-17-lolor_1.2.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 pgedge-17-lolor pgedge-17-lolor_1.2.2-1PIGSTY~jammy_amd64.deb pigsty 1.2.2 18.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/lolor/pgedge-17-lolor_1.2.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 pgedge-17-lolor pgedge-17-lolor_1.2.2-1PIGSTY~jammy_arm64.deb pigsty 1.2.2 17.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/lolor/pgedge-17-lolor_1.2.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 pgedge-17-lolor pgedge-17-lolor_1.2.2-1PIGSTY~noble_amd64.deb pigsty 1.2.2 17.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/lolor/pgedge-17-lolor_1.2.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 pgedge-17-lolor pgedge-17-lolor_1.2.2-1PIGSTY~noble_arm64.deb pigsty 1.2.2 17.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/lolor/pgedge-17-lolor_1.2.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `lolor` 扩展的 RPM / DEB 包：

```bash
pig build pkg lolor         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `lolor` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install lolor;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y lolor -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y lolor_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y pgedge-17-lolor   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION lolor;
```



## 用法

> [lolor: 逻辑复制友好的 PostgreSQL 大对象替代](https://github.com/pgEdge/lolor)

使 PostgreSQL 大对象与逻辑复制兼容，将其存储在非目录表中。

### 启用

```sql
CREATE EXTENSION lolor;
```

在 `postgresql.conf` 中配置节点标识符：

```ini
lolor.node = 1  -- 唯一节点 ID（1 到 2^28）
```

可选调整搜索路径：

```sql
SET search_path = lolor, "$user", public, pg_catalog;
```

### 大对象操作

安装后，标准 `lo_*` 函数会重定向到使用 lolor 的表：

```sql
-- 创建大对象
SELECT lo_create(0);

-- 将文件导入大对象
SELECT lo_import('/path/to/file.bin');

-- 将大对象导出到文件
SELECT lo_export(oid, '/path/to/output.bin');

-- 打开、读取、写入、定位、关闭
SELECT lo_open(oid, x'40000'::int);  -- INV_WRITE
SELECT lowrite(fd, 'data'::bytea);
SELECT loread(fd, 1024);
SELECT lo_close(fd);

-- 删除大对象
SELECT lo_unlink(oid);
```

### 复制设置

将 lolor 表添加到复制集：

```sql
-- 用于 spock/pgedge 复制
SELECT spock.repset_add_table('default', 'lolor.pg_largeobject');
SELECT spock.repset_add_table('default', 'lolor.pg_largeobject_metadata');
```

### 内部表

该扩展在以下表中管理大对象：

- `lolor.pg_largeobject` - 存储对象数据块
- `lolor.pg_largeobject_metadata` - 存储对象元数据

### 限制

- lolor 激活时不能使用原生 PostgreSQL 大对象功能
- 不支持将现有原生大对象迁移到 lolor
- 不支持 `ALTER LARGE OBJECT`、`GRANT ON LARGE OBJECT`、`COMMENT ON LARGE OBJECT` 和 `REVOKE ON LARGE OBJECT`
- 需要 PostgreSQL 16 或更新版本

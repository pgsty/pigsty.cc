---
title: "spat"
linkTitle: "spat"
description: "在PG中嵌入Redis风格的内存数据库"
weight: 9400
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Florents-Tselai/spat">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Florents-Tselai/spat</div>
    <div class="ext-card__desc">https://github.com/Florents-Tselai/spat</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/spat-0.1.0a4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">spat-0.1.0a4.tar.gz</div>
    <div class="ext-card__desc">spat-0.1.0a4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`spat`**](/ext/e/spat) | `0.1.0a4` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9400  | [**`spat`**](/ext/e/spat) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`redis_fdw`](/ext/e/redis_fdw) [`redis`](/ext/e/redis) [`pgmemcache`](/ext/e/pgmemcache) [`mongo_fdw`](/ext/e/mongo_fdw) [`kafka_fdw`](/ext/e/kafka_fdw) [`documentdb`](/ext/e/documentdb) [`documentdb_core`](/ext/e/documentdb_core) [`documentdb_distributed`](/ext/e/documentdb_distributed) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Alpha Stage!


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0a4` | {{< pgvers "17" >}} | `spat` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.1.0a4` | {{< pgvers "17" >}} | `spat_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0a4` | {{< pgvers "17" >}} | `postgresql-$v-spat` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | AVAIL PIGSTY 0.1.0 1 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el8.aarch64 | MISS PGDG - 0 | AVAIL PIGSTY 0.1.0 1 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | MISS PGDG - 0 | AVAIL PIGSTY 0.1.0 1 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.aarch64 | MISS PGDG - 0 | AVAIL PIGSTY 0.1.0 1 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 17 spat_17 spat_17-0.1.0a4-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 36.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/spat_17-0.1.0a4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 spat_17 spat_17-0.1.0a4-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 35.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/spat_17-0.1.0a4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 spat_17 spat_17-0.1.0a4-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 36.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/spat_17-0.1.0a4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 spat_17 spat_17-0.1.0a4-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 35.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/spat_17-0.1.0a4-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 17 postgresql-17-spat postgresql-17-spat_0.1.0a4-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 46.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/spat/postgresql-17-spat_0.1.0a4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-spat postgresql-17-spat_0.1.0a4-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 45.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/spat/postgresql-17-spat_0.1.0a4-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 17 postgresql-17-spat postgresql-17-spat_0.1.0a4-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 51.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/spat/postgresql-17-spat_0.1.0a4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-spat postgresql-17-spat_0.1.0a4-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 50.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/spat/postgresql-17-spat_0.1.0a4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-spat postgresql-17-spat_0.1.0a4-1PIGSTY~noble_amd64.deb pigsty 0.1.0 47.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/spat/postgresql-17-spat_0.1.0a4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-spat postgresql-17-spat_0.1.0a4-1PIGSTY~noble_arm64.deb pigsty 0.1.0 47.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/spat/postgresql-17-spat_0.1.0a4-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `spat` 扩展的 RPM / DEB 包：

```bash
pig build pkg spat         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `spat` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install spat;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y spat -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y spat_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-17-spat   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION spat;
```



## 用法

> [spat: 嵌入 Postgres 的类 Redis 内存数据库](https://github.com/Florents-Tselai/spat)

嵌入在 PostgreSQL 共享内存中的内存键值数据结构服务器。键为字符串；值可以是字符串、列表、集合或哈希。

### 启用

```sql
CREATE EXTENSION spat;
```

### 字符串

```sql
SELECT SPSET('key', 'value');
SELECT SPGET('key');              -- 'value'

-- 带 TTL
SELECT SPSET('temp', 'data', ttl => interval '5 minutes');

-- 将任意类型存储为文本
SELECT SPSET('config', '{"a": 1}'::jsonb);
SELECT SPGET('config')::text::jsonb;
```

### 集合

```sql
SELECT SADD('myset', 'elem1');
SELECT SADD('myset', 'elem2');
SELECT SISMEMBER('myset', 'elem1');  -- true
SELECT SCARD('myset');               -- 2
SELECT SREM('myset', 'elem1');       -- 1
```

### 列表

```sql
SELECT LPUSH('mylist', 'a');
SELECT LPUSH('mylist', 'b');
SELECT LPOP('mylist');     -- 'b'（后进先出）
SELECT LLEN('mylist');     -- 1
```

### 哈希

```sql
SELECT HSET('myhash', 'field1', 'Hello');
SELECT HGET('myhash', 'field1');  -- 'Hello'
```

### 通用操作

```sql
SELECT SPTYPE('key');           -- 'string'、'list'、'set' 或 'hash'
SELECT DEL('key');              -- 如果删除则为 true
SELECT TTL('key');              -- 返回 TTL 间隔
SELECT GETEXPIREAT('key');      -- 返回过期时间戳
SELECT SP_DB_NITEMS();          -- 条目数
SELECT SP_DB_SIZE();            -- 友好的大小显示
```

### 多数据库

```sql
SET spat.db = 'db1';             -- 切换到数据库 'db1'
SET spat.db = 'spat-default';   -- 切换回默认
```

### 重要说明

- 数据存储在 PostgreSQL 共享内存中，**非持久化** —— 重启后丢失
- 操作**非事务性** —— ROLLBACK 不会撤销 spat 变更
- 变更**立即可见**于所有会话（无 MVCC 隔离）
- 按键锁确保并发写入安全

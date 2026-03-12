---
title: "pg_tde"
linkTitle: "pg_tde"
description: "Percona加密存储引擎"
weight: 7500
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/percona/pg_tde">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">percona/pg_tde</div>
    <div class="ext-card__desc">https://github.com/percona/pg_tde</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_tde`**](/ext/e/pg_tde) | `2.1` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7500  | [**`pg_tde`**](/ext/e/pg_tde) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgsodium`](/ext/e/pgsodium) [`pgsmcrypto`](/ext/e/pgsmcrypto) [`pgcrypto`](/ext/e/pgcrypto) [`anon`](/ext/e/anon) [`pgcryptokey`](/ext/e/pgcryptokey) [`faker`](/ext/e/faker) [`sslutils`](/ext/e/sslutils) [`uuid-ossp`](/ext/e/uuid-ossp) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> works on percona postgres tde fork


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1` | {{< pgvers "18,17" >}} | `pg_tde` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.1` | {{< pgvers "18,17" >}} | `percona-postgresql$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.1` | {{< pgvers "18,17" >}} | `percona-postgresql-$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_tde` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_tde;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_tde -v 18  # PG 18
pig ext install -y pg_tde -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y percona-postgresql18       # PG 18
dnf install -y percona-postgresql17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y percona-postgresql-18   # PG 18
apt install -y percona-postgresql-17   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_tde';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_tde;
```



## 用法

> [pg_tde: PostgreSQL 透明数据加密](https://github.com/percona/pg_tde)

`pg_tde` 在文件级别提供透明数据加密（TDE），对元组、WAL 和索引进行加密。它使用 `tde_heap` 访问方法，支持基于文件的密钥环和外部密钥管理系统（KMS）。

```sql
CREATE EXTENSION pg_tde;
```

### 配置

添加到 `postgresql.conf`：

```ini
shared_preload_libraries = 'pg_tde'
```

### 设置密钥提供者

```sql
-- 基于文件的密钥提供者（数据库级别）
SELECT pg_tde_add_database_key_provider_file('file_keyring', '/path/to/keyring');

-- 或全局级别的密钥提供者
SELECT pg_tde_add_global_key_provider_file('file_keyring', '/path/to/keyring');

-- 使用数据库密钥提供者设置加密密钥
SELECT pg_tde_set_key_using_database_key_provider('my_key', 'file_keyring');

-- 或使用全局密钥提供者
SELECT pg_tde_set_key_using_global_key_provider('my_key', 'file_keyring');
```

### 创建加密表

```sql
CREATE TABLE sensitive_data (
    id serial PRIMARY KEY,
    secret text
) USING tde_heap;
```

使用 `USING tde_heap` 创建的表中的所有数据都会在磁盘上透明加密。

### 检查加密状态

```sql
SELECT pg_tde_is_encrypted('sensitive_data');
```

### 附加函数

| 函数 | 描述 |
|----------|-------------|
| `pg_tde_add_database_key_provider_file(name, path)` | 添加基于文件的数据库密钥提供者 |
| `pg_tde_add_global_key_provider_file(name, path)` | 添加基于文件的全局密钥提供者 |
| `pg_tde_add_database_key_provider_vault_v2(...)` | 添加 HashiCorp Vault 数据库密钥提供者 |
| `pg_tde_add_global_key_provider_vault_v2(...)` | 添加 HashiCorp Vault 全局密钥提供者 |
| `pg_tde_set_key_using_database_key_provider(key, provider)` | 通过数据库提供者设置加密密钥 |
| `pg_tde_set_key_using_global_key_provider(key, provider)` | 通过全局提供者设置加密密钥 |
| `pg_tde_is_encrypted(table)` | 检查表是否已加密 |

### 注意事项

- 仅适用于 Percona Server for PostgreSQL 17+
- 加密元组、WAL 和索引
- 尚不支持加密临时文件和统计信息

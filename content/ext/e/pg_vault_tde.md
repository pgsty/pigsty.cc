---
title: "pg_vault_tde"
linkTitle: "pg_vault_tde"
description: "通过自定义表与索引访问方法为 PostgreSQL 提供透明数据加密"
weight: 7510
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/labmiriade/pg_vault_tde">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">labmiriade/pg_vault_tde</div>
    <div class="ext-card__desc">https://github.com/labmiriade/pg_vault_tde</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_vault_tde-1.7.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_vault_tde-1.7.0.tar.gz</div>
    <div class="ext-card__desc">pg_vault_tde-1.7.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_vault_tde`**](/ext/e/pg_vault_tde) | `1.7.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7510  | [**`pg_vault_tde`**](/ext/e/pg_vault_tde) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_tde`](/ext/e/pg_tde) [`supabase_vault`](/ext/e/supabase_vault) [`pgsodium`](/ext/e/pgsodium) [`column_encrypt`](/ext/e/column_encrypt) [`pgcryptokey`](/ext/e/pgcryptokey) [`pgcrypto`](/ext/e/pgcrypto) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires PostgreSQL 17+, OpenSSL 3, libcurl, and shared_preload_libraries=pg_vault_tde; RPM excludes EL8; includes pg_dump_tde, pg_restore_tde, and pg_basebackup_tde.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.0` | {{< pgvers "17,18" >}} | `pg_vault_tde` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.0` | {{< pgvers "18,17" >}} | `pg_vault_tde_$v` | `openssl-libs`, `libcurl` |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.0` | {{< pgvers "18,17" >}} | `postgresql-$v-pg-vault-tde` | `libssl3 | libssl3t64`, `libcurl4 | libcurl4t64` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el9.x86_64 18 pg_vault_tde_18 pg_vault_tde_18-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 161.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_vault_tde_18-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_vault_tde_18 pg_vault_tde_18-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 158.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_vault_tde_18-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_vault_tde_18 pg_vault_tde_18-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 164.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_vault_tde_18-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_vault_tde_18 pg_vault_tde_18-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 159.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_vault_tde_18-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 319.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 309.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 320.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 309.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 342.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 334.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 333.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 327.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~resolute_amd64.deb pigsty 1.7.0 332.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~resolute_arm64.deb pigsty 1.7.0 323.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.0-1PIGSTY~resolute_arm64.deb
@ el9.x86_64 17 pg_vault_tde_17 pg_vault_tde_17-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 162.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_vault_tde_17-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_vault_tde_17 pg_vault_tde_17-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 158.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_vault_tde_17-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_vault_tde_17 pg_vault_tde_17-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 165.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_vault_tde_17-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_vault_tde_17 pg_vault_tde_17-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 159.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_vault_tde_17-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~bookworm_amd64.deb pigsty 1.7.0 321.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~bookworm_arm64.deb pigsty 1.7.0 311.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~trixie_amd64.deb pigsty 1.7.0 323.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~trixie_arm64.deb pigsty 1.7.0 312.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~jammy_amd64.deb pigsty 1.7.0 384.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~jammy_arm64.deb pigsty 1.7.0 376.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~noble_amd64.deb pigsty 1.7.0 335.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~noble_arm64.deb pigsty 1.7.0 329.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~resolute_amd64.deb pigsty 1.7.0 334.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~resolute_arm64.deb pigsty 1.7.0 325.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_vault_tde` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_vault_tde         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_vault_tde` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_vault_tde;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_vault_tde -v 18  # PG 18
pig ext install -y pg_vault_tde -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_vault_tde_18       # PG 18
dnf install -y pg_vault_tde_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-vault-tde   # PG 18
apt install -y postgresql-17-pg-vault-tde   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_vault_tde';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_vault_tde;
```

## 用法

来源：

- [pg_vault_tde 1.7.0 README](https://api.pgxn.org/src/pg_vault_tde/pg_vault_tde-1.7.0/README.md)
- [pg_vault_tde v1.7.0 发行版](https://github.com/labmiriade/pg_vault_tde/releases/tag/v1.7.0)
- [pg_vault_tde 1.7 控制文件](https://api.pgxn.org/src/pg_vault_tde/pg_vault_tde-1.7.0/pg_vault_tde.control)
- [pg_vault_tde 运维文档](https://api.pgxn.org/src/pg_vault_tde/pg_vault_tde-1.7.0/doc/pg_vault_tde.md)

`pg_vault_tde` 通过 `encrypted_heap` 表访问方法，为 PostgreSQL 17 和 18 提供透明的元组加密。它会在存储前使用 AES-256-GCM 加密用户列数据，并通过 HashiCorp Vault/OpenBao、本地 PKCS#12 钱包，或 v1.7 新增的 PKCS#11 HSM 管理每个关系的数据加密密钥。MVCC 元组头仍为明文。

### 配置与安装

```conf
shared_preload_libraries = 'pg_vault_tde'
pg_vault_tde.kms_provider = 'vault'
pg_vault_tde.vault_url = 'https://vault.example.com:8200'
pg_vault_tde.vault_transit_mount = 'transit'
pg_vault_tde.vault_key_name = 'pg-tde-dek'
pg_vault_tde.vault_ca_cert = '/etc/ssl/vault/ca.pem'
```

按照文档通过令牌、AppRole 或 Kubernetes 设置配置 Vault 身份验证，不要将机密写入 PostgreSQL 配置。重启 PostgreSQL，然后创建扩展：

```sql
CREATE EXTENSION pg_vault_tde;
SELECT * FROM pg_vault_tde_health_check();
```

`kms_provider` 没有可用的默认值，必须显式设置。除了 PostgreSQL 服务器文件，扩展还要求 OpenSSL 3 和 libcurl。

### 创建加密表

```sql
CREATE TABLE customer_secrets (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  email text,
  ssn text
) USING encrypted_heap;
```

加密以表为单位：普通 `heap` 表不受影响。元组值、TOAST 数据和 WAL 表示会被加密；MVCC 所需的元组头仍然可见。

### 索引

使用 `tde_btree` 进行等值查找，同时避免存储明文键：

```sql
CREATE UNIQUE INDEX customer_secrets_id_tde_idx
ON customer_secrets USING tde_btree (id);

CREATE INDEX customer_secrets_email_tde_idx
ON customer_secrets USING tde_btree (email);
```

`tde_btree` 使用确定性的 AES-256-SIV，支持等值比较，但不支持范围排序或仅索引扫描。默认情况下，`encrypted_heap` 表会拒绝其他访问方法，因为它们会写入明文索引键。`PRIMARY KEY` 和 `UNIQUE` 表约束仍会创建原生 btree 索引并产生警告；定义它们前请判断这种暴露是否可以接受。

### 完整性与轮换

```sql
SELECT * FROM pg_vault_tde_verify_integrity('customer_secrets');
SELECT * FROM pg_vault_tde_encrypted_size('customer_secrets');

SELECT pg_vault_tde_rotate_online('customer_secrets', 1000);
SELECT * FROM pg_vault_tde_get_rotation_status('customer_secrets');

SELECT pg_vault_tde_rotate_kek();
```

在线 DEK 轮换会分批重新加密表，并重建其 `tde_btree` 索引。KEK 轮换只会重新包装每张表的 DEK，不会重写元组。请限制这些操作的权限、监控完成状态，并避免并发恢复密钥目录。

### 提供方与备份边界

- 本地钱包默认位于 `PGDATA` 之外；应单独复制并保护，因为普通 `pg_basebackup` 不会包含它。
- 版本 1.7 新增 `pkcs11` 提供方和 `pg_vault_tde_pkcs11_keygen()`。独立工具 `pg_dump_tde` 与 `pg_restore_tde` 在此版本中不支持 PKCS#11。
- 普通 `pg_dump` 和 `COPY ... TO` 会读取解密后的行，因此会在没有警告的情况下生成明文。在支持的场景中，应使用随附的加密逻辑备份工具。
- 物理备份包含加密的关系字节和已包装的 DEK，但不包含 KEK。应预先配置 Vault/HSM 访问权限，或单独复制本地钱包。密钥封装函数与 `pg_basebackup_tde` 包装器可为物理备份附带一份能检出篡改的 DEK 包。

### 关键注意事项

- 当 `encrypted_heap` 表中存在以另一种设置写入的行时，绝不要切换 `pg_vault_tde.enabled`。扩展不会重写已有行，混合格式可能被静默误判为损坏。
- 普通索引、统计信息、日志、查询结果、客户端流量、临时工作数据和备份都可能在加密堆之外暴露明文。TDE 只是存储层控制，并非端到端加密。
- `tde_btree` 禁用范围语义，并且当前设计下加密表会禁用 HOT 更新；请对更新密集型工作负载和索引维护进行基准测试。
- 应对 KMS 凭据、钱包口令、HSM PIN、KEK、密封包和恢复流程实施相互独立的访问控制。缺少匹配密钥路径的备份将无法恢复。
- 软件包发行版本 1.7.0 安装的 SQL 扩展版本为 `1.7`；该扩展不可重定位，需要预加载和重启，并且仅支持 PostgreSQL 17-18。

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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_vault_tde-1.7.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_vault_tde-1.7.2.tar.gz</div>
    <div class="ext-card__desc">pg_vault_tde-1.7.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_vault_tde`**](/ext/e/pg_vault_tde) | `1.7.2` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7510  | [**`pg_vault_tde`**](/ext/e/pg_vault_tde) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_tde`](/ext/e/pg_tde) [`supabase_vault`](/ext/e/supabase_vault) [`pgsodium`](/ext/e/pgsodium) [`column_encrypt`](/ext/e/column_encrypt) [`pgcryptokey`](/ext/e/pgcryptokey) [`pgcrypto`](/ext/e/pgcrypto) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires PostgreSQL 17+, OpenSSL 3, libcurl, and shared_preload_libraries=pg_vault_tde; RPM excludes EL8; includes pg_dump_tde, pg_restore_tde, and pg_basebackup_tde. Package 1.7.2; SQL control version 1.7. Export existing 1.7.0 encrypted TOAST data with the old binary before upgrading. Rewrite existing encrypted tables after upgrade; custom WAL users must coordinate primary/standby upgrades for resource-manager ID 128 to 161.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.2` | {{< pgvers "17,18" >}} | `pg_vault_tde` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.2` | {{< pgvers "18,17" >}} | `pg_vault_tde_$v` | `openssl-libs`, `libcurl` |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.2` | {{< pgvers "18,17" >}} | `postgresql-$v-pg-vault-tde` | `libssl3 | libssl3t64`, `libcurl4 | libcurl4t64` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.7.2 1 | AVAIL PIGSTY 1.7.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el9.x86_64 18 pg_vault_tde_18 pg_vault_tde_18-1.7.2-1PGSTY.el9.x86_64.rpm pigsty 1.7.2 424.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_vault_tde_18-1.7.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_vault_tde_18 pg_vault_tde_18-1.7.2-1PGSTY.el9.aarch64.rpm pigsty 1.7.2 416.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_vault_tde_18-1.7.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_vault_tde_18 pg_vault_tde_18-1.7.2-1PGSTY.el10.x86_64.rpm pigsty 1.7.2 427.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_vault_tde_18-1.7.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_vault_tde_18 pg_vault_tde_18-1.7.2-1PGSTY.el10.aarch64.rpm pigsty 1.7.2 418.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_vault_tde_18-1.7.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.2-1PGSTY~bookworm_amd64.deb pigsty 1.7.2 425.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.2-1PGSTY~bookworm_arm64.deb pigsty 1.7.2 411.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.2-1PGSTY~trixie_amd64.deb pigsty 1.7.2 426.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.2-1PGSTY~trixie_arm64.deb pigsty 1.7.2 412.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.2-1PGSTY~jammy_amd64.deb pigsty 1.7.2 446.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.2-1PGSTY~jammy_arm64.deb pigsty 1.7.2 435.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.2-1PGSTY~noble_amd64.deb pigsty 1.7.2 434.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.2-1PGSTY~noble_arm64.deb pigsty 1.7.2 426.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.2-1PGSTY~resolute_amd64.deb pigsty 1.7.2 432.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-vault-tde postgresql-18-pg-vault-tde_1.7.2-1PGSTY~resolute_arm64.deb pigsty 1.7.2 423.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vault-tde/postgresql-18-pg-vault-tde_1.7.2-1PGSTY~resolute_arm64.deb
@ el9.x86_64 17 pg_vault_tde_17 pg_vault_tde_17-1.7.2-1PGSTY.el9.x86_64.rpm pigsty 1.7.2 426.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_vault_tde_17-1.7.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_vault_tde_17 pg_vault_tde_17-1.7.2-1PGSTY.el9.aarch64.rpm pigsty 1.7.2 417.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_vault_tde_17-1.7.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_vault_tde_17 pg_vault_tde_17-1.7.2-1PGSTY.el10.x86_64.rpm pigsty 1.7.2 428.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_vault_tde_17-1.7.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_vault_tde_17 pg_vault_tde_17-1.7.2-1PGSTY.el10.aarch64.rpm pigsty 1.7.2 420.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_vault_tde_17-1.7.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.2-1PGSTY~bookworm_amd64.deb pigsty 1.7.2 426.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.2-1PGSTY~bookworm_arm64.deb pigsty 1.7.2 413.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.2-1PGSTY~trixie_amd64.deb pigsty 1.7.2 427.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.2-1PGSTY~trixie_arm64.deb pigsty 1.7.2 413.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.2-1PGSTY~jammy_amd64.deb pigsty 1.7.2 491.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.2-1PGSTY~jammy_arm64.deb pigsty 1.7.2 483.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.2-1PGSTY~noble_amd64.deb pigsty 1.7.2 436.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.2-1PGSTY~noble_arm64.deb pigsty 1.7.2 428.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.2-1PGSTY~resolute_amd64.deb pigsty 1.7.2 433.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-vault-tde postgresql-17-pg-vault-tde_1.7.2-1PGSTY~resolute_arm64.deb pigsty 1.7.2 424.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-vault-tde/postgresql-17-pg-vault-tde_1.7.2-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_vault_tde;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_vault_tde -v 18  # PG 18
pig ext install -y pg_vault_tde -v 17  # PG 17
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_vault_tde_18       # PG 18
dnf install -y pg_vault_tde_17       # PG 17
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-vault-tde   # PG 18
apt install -y postgresql-17-pg-vault-tde   # PG 17
```


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

- [pg_vault_tde.control](https://github.com/labmiriade/pg_vault_tde/blob/2520a0d80fc3c4d905f57e47e2d871ed7e6b0e7d/pg_vault_tde.control)
- [README.md](https://github.com/labmiriade/pg_vault_tde/blob/2520a0d80fc3c4d905f57e47e2d871ed7e6b0e7d/README.md)
- [doc/pg_vault_tde.md](https://github.com/labmiriade/pg_vault_tde/blob/2520a0d80fc3c4d905f57e47e2d871ed7e6b0e7d/doc/pg_vault_tde.md)

`pg_vault_tde` 发行版 1.7.2 通过 `encrypted_heap` 使用 AES-256-GCM 加密表值，支持 Vault/OpenBao、本地 PKCS#12 钱包或 PKCS#11。SQL/control 版本仍为 1.7。需要 PostgreSQL 17–18、OpenSSL 3 与 libcurl。先配置密钥提供方和认证，预加载库并重启，再由超级用户创建扩展。

### 核心用法

```ini
shared_preload_libraries = 'pg_vault_tde'
```

```sql
CREATE EXTENSION pg_vault_tde;
SELECT * FROM pg_vault_tde_health_check();
CREATE TABLE customer_secrets (id bigint, secret text) USING encrypted_heap;
CREATE INDEX customer_secrets_id_idx ON customer_secrets USING tde_btree (id);
```

### 运行边界

示例假定密钥提供方已配置。`pg_vault_tde_health_check`、`pg_vault_tde_verify_integrity`、`pg_vault_tde_get_rotation_status` 和加密大小辅助函数提供运行状态。`tde_btree` 支持加密等值查询，不支持排序／范围或仅索引扫描。不支持 numeric 和非确定性排序规则的加密索引；应审计旧有唯一／排除约束，它们的检查可能无效。普通索引可能暴露键值，pg_dump/COPY 会输出解密数据。保护外部钱包／KMS，并在支持时使用匹配的加密备份工具。元组头、统计、日志和查询结果不在其保护范围内。

替换旧库或重启之前，必须按上游恢复清单检查：旧版轮换后的表可能依赖仅存于内存的密钥；并发轮换可能要求趁数据仍可读时导出，轮换过的行外值需要指定的重写步骤。1.7.0 的 TOAST 升级还另有导出要求。检查轮换／部分索引及钱包创建者。升级到 1.7.2 后，所有既有加密表需执行 VACUUM FULL 迁移元组布局，应预留维护窗口和额外磁盘空间。启用 `pg_vault_tde.toast_custom_rmgr` 时，WAL ID 从 128 改为 161，要求干净停机、主备协调升级、复制槽追平和新的基础备份，不能跨这两种 WAL 格式滚动升级。

密钥管理操作必须逐一执行。表轮换保留读取，但在单个事务期间阻塞写入；逻辑槽必须在重启或再次轮换前完成解码。1.7.2 收紧调用者权限，但上游仍记录 SECURITY DEFINER 包装器的限制，应遵循列出的授权／撤权步骤。不要在已有数据的加密表上切换 `pg_vault_tde.enabled`。本次目录更新不执行实际升级，也不改变 Pigsty 软件包基线。

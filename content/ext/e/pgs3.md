---
title: "pgs3"
linkTitle: "pgs3"
description: "在 PostgreSQL 内实现的 S3 兼容对象存储端点"
weight: 9430
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgsty/pgs3">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgsty/pgs3</div>
    <div class="ext-card__desc">https://github.com/pgsty/pgs3</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgs3-0.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgs3-0.1.1.tar.gz</div>
    <div class="ext-card__desc">pgs3-0.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgs3`**](/ext/e/pgs3) | `0.1.1` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9430  | [**`pgs3`**](/ext/e/pgs3) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgs3` |
{.ext-table}

| **相关扩展** | [`aws_s3`](/ext/e/aws_s3) [`pg_lake`](/ext/e/pg_lake) [`pg_parquet`](/ext/e/pg_parquet) [`pg_ducklake`](/ext/e/pg_ducklake) [`omni_aws`](/ext/e/omni_aws) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Early alpha; PG17-18; endpoint startup requires preload or pgs3.start(); TLS terminates externally; small-object and 100,000-object Fork performance gates remain unmet.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17" >}} | `pgs3` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17" >}} | `pgs3_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17" >}} | `postgresql-$v-pgs3` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pgs3_18 pgs3_18-0.1.1-1PGSTY.el8.x86_64.rpm pigsty 0.1.1 919.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgs3_18-0.1.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgs3_18 pgs3_18-0.1.1-1PGSTY.el8.aarch64.rpm pigsty 0.1.1 740.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgs3_18-0.1.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgs3_18 pgs3_18-0.1.1-1PGSTY.el9.x86_64.rpm pigsty 0.1.1 892.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgs3_18-0.1.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgs3_18 pgs3_18-0.1.1-1PGSTY.el9.aarch64.rpm pigsty 0.1.1 795.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgs3_18-0.1.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgs3_18 pgs3_18-0.1.1-1PGSTY.el10.x86_64.rpm pigsty 0.1.1 892.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgs3_18-0.1.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgs3_18 pgs3_18-0.1.1-1PGSTY.el10.aarch64.rpm pigsty 0.1.1 796.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgs3_18-0.1.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgs3 postgresql-18-pgs3_0.1.1-1PGSTY~bookworm_amd64.deb pigsty 0.1.1 796.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgs3/postgresql-18-pgs3_0.1.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgs3 postgresql-18-pgs3_0.1.1-1PGSTY~bookworm_arm64.deb pigsty 0.1.1 655.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgs3/postgresql-18-pgs3_0.1.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgs3 postgresql-18-pgs3_0.1.1-1PGSTY~trixie_amd64.deb pigsty 0.1.1 796.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgs3/postgresql-18-pgs3_0.1.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgs3 postgresql-18-pgs3_0.1.1-1PGSTY~trixie_arm64.deb pigsty 0.1.1 657.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgs3/postgresql-18-pgs3_0.1.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgs3 postgresql-18-pgs3_0.1.1-1PGSTY~jammy_amd64.deb pigsty 0.1.1 863.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgs3/postgresql-18-pgs3_0.1.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgs3 postgresql-18-pgs3_0.1.1-1PGSTY~jammy_arm64.deb pigsty 0.1.1 767.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgs3/postgresql-18-pgs3_0.1.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgs3 postgresql-18-pgs3_0.1.1-1PGSTY~noble_amd64.deb pigsty 0.1.1 858.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgs3/postgresql-18-pgs3_0.1.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgs3 postgresql-18-pgs3_0.1.1-1PGSTY~noble_arm64.deb pigsty 0.1.1 762.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgs3/postgresql-18-pgs3_0.1.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgs3 postgresql-18-pgs3_0.1.1-1PGSTY~resolute_amd64.deb pigsty 0.1.1 856.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgs3/postgresql-18-pgs3_0.1.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgs3 postgresql-18-pgs3_0.1.1-1PGSTY~resolute_arm64.deb pigsty 0.1.1 760.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgs3/postgresql-18-pgs3_0.1.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgs3_17 pgs3_17-0.1.1-1PGSTY.el8.x86_64.rpm pigsty 0.1.1 919.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgs3_17-0.1.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgs3_17 pgs3_17-0.1.1-1PGSTY.el8.aarch64.rpm pigsty 0.1.1 740.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgs3_17-0.1.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgs3_17 pgs3_17-0.1.1-1PGSTY.el9.x86_64.rpm pigsty 0.1.1 892.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgs3_17-0.1.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgs3_17 pgs3_17-0.1.1-1PGSTY.el9.aarch64.rpm pigsty 0.1.1 796.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgs3_17-0.1.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgs3_17 pgs3_17-0.1.1-1PGSTY.el10.x86_64.rpm pigsty 0.1.1 892.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgs3_17-0.1.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgs3_17 pgs3_17-0.1.1-1PGSTY.el10.aarch64.rpm pigsty 0.1.1 794.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgs3_17-0.1.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgs3 postgresql-17-pgs3_0.1.1-1PGSTY~bookworm_amd64.deb pigsty 0.1.1 796.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgs3/postgresql-17-pgs3_0.1.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgs3 postgresql-17-pgs3_0.1.1-1PGSTY~bookworm_arm64.deb pigsty 0.1.1 654.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgs3/postgresql-17-pgs3_0.1.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgs3 postgresql-17-pgs3_0.1.1-1PGSTY~trixie_amd64.deb pigsty 0.1.1 796.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgs3/postgresql-17-pgs3_0.1.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgs3 postgresql-17-pgs3_0.1.1-1PGSTY~trixie_arm64.deb pigsty 0.1.1 654.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgs3/postgresql-17-pgs3_0.1.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgs3 postgresql-17-pgs3_0.1.1-1PGSTY~jammy_amd64.deb pigsty 0.1.1 862.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgs3/postgresql-17-pgs3_0.1.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgs3 postgresql-17-pgs3_0.1.1-1PGSTY~jammy_arm64.deb pigsty 0.1.1 767.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgs3/postgresql-17-pgs3_0.1.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgs3 postgresql-17-pgs3_0.1.1-1PGSTY~noble_amd64.deb pigsty 0.1.1 858.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgs3/postgresql-17-pgs3_0.1.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgs3 postgresql-17-pgs3_0.1.1-1PGSTY~noble_arm64.deb pigsty 0.1.1 762.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgs3/postgresql-17-pgs3_0.1.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgs3 postgresql-17-pgs3_0.1.1-1PGSTY~resolute_amd64.deb pigsty 0.1.1 856.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgs3/postgresql-17-pgs3_0.1.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgs3 postgresql-17-pgs3_0.1.1-1PGSTY~resolute_arm64.deb pigsty 0.1.1 759.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgs3/postgresql-17-pgs3_0.1.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgs3` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgs3         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgs3` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgs3;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgs3 -v 18  # PG 18
pig ext install -y pgs3 -v 17  # PG 17
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgs3_18       # PG 18
dnf install -y pgs3_17       # PG 17
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pgs3   # PG 18
apt install -y postgresql-17-pgs3   # PG 17
```


**预加载配置**：

```bash
shared_preload_libraries = 'pgs3';
```


**创建扩展**：

```sql
CREATE EXTENSION pgs3;
```

## 用法

来源：

- [官方版本 v0.1.1](https://github.com/pgsty/pgs3/releases/tag/v0.1.1)
- [官方 README v0.1.1](https://github.com/pgsty/pgs3/blob/v0.1.1/README.md)
- [扩展控制文件](https://github.com/pgsty/pgs3/blob/v0.1.1/pgs3.control)
- [配置参数参考](https://github.com/pgsty/pgs3/blob/v0.1.1/docs/guc.md)
- [运维指南](https://github.com/pgsty/pgs3/blob/v0.1.1/docs/operations.md)
- [已知限制](https://github.com/pgsty/pgs3/blob/v0.1.1/docs/known-limitations.md)

`pgs3` 0.1.1 将一个 PostgreSQL 数据库变成仅支持 path-style 的 S3 兼容端点。PostgreSQL 后台 worker 验证 SigV4 请求，并在普通 SQL 表上执行带版本的对象操作，因此对象 metadata、payload、授权、WAL、物理备份与恢复都留在 PostgreSQL 内部。它面向 PostgreSQL 17 与 18，目前仍属于早期 alpha 软件。

### 核心流程

先在承载对象存储的数据库中安装扩展，创建受限租户角色与凭据，再启动 worker 池：

```sql
CREATE EXTENSION pgs3;

CREATE ROLE tenant_app
  NOLOGIN NOINHERIT NOSUPERUSER NOCREATEDB NOCREATEROLE
  NOREPLICATION NOBYPASSRLS;

SELECT pgs3.create_credential(
  'tenant-access-key', 'replace-with-a-secret', 'tenant_app'::name, true
);

SELECT pgs3.start();
TABLE pgs3.worker_state;
TABLE pgs3.stats;
```

如需自动启动，应先预加载动态库、配置目标数据库，再重启 PostgreSQL：

```conf
shared_preload_libraries = 'pgs3'
pgs3.enabled = on
pgs3.target_database = 'artifacts'
pgs3.listen_addr = '127.0.0.1'
pgs3.port = 9000
pgs3.workers = 4
```

增删 `shared_preload_libraries` 或修改 `pgs3.target_database` 都需要重启 PostgreSQL。其他已记录参数使用 SIGHUP 语义，但运维就绪状态必须通过 `pgs3.worker_state` 与日志判断，不能只看 TCP 端口是否开放。手工启动的 worker 池可以用 `pgs3.stop()` 停止。

### 客户端与存储行为

客户端必须使用 path-style addressing，并显式指定 endpoint：

```bash
export PGS3_ENDPOINT='https://s3.example.com'
export AWS_ACCESS_KEY_ID='<access-key>'
export AWS_SECRET_ACCESS_KEY='<secret-key>'
export AWS_DEFAULT_REGION='us-east-1'

aws --endpoint-url "$PGS3_ENDPOINT" s3api list-buckets
```

务必传入 `--endpoint-url`，否则 AWS 客户端可能把请求静默发送到 AWS。已验证的客户端路径包括 AWS CLI、boto3、rclone、s3fs 和 DuckDB `httpfs`。Bucket 与 object 操作涵盖 range 和条件读写、ListObjectsV2、永久版本历史、delete marker、CopyObject 与 multipart upload。

规范 payload 保存在 `pgs3.blob`。Object version、CopyObject、SQL Restore 与仅复制 metadata 的 Fork 操作可以共享同一 blob，而不重复复制字节。一个 endpoint 只服务一个已配置数据库。

### 运维与安全

Credential access key 映射到 PostgreSQL 租户角色。角色应保持 `NOLOGIN`、`NOINHERIT` 和 `NOBYPASSRLS`；不要把 `pgs3.server_role` 用作应用身份。Row-level security 是租户隔离边界，credential 管理与 worker 控制函数仍只应交给管理员。

SigV4 需要可逆存储 secret，因此数据库备份与副本包含 credential 材料，必须加密并限制访问。`pgs3` 只提供明文 HTTP；生产环境需要外部 TLS 代理，并保持签名 path、host 与 header 不变。对象状态应使用物理备份：扩展自有对象数据目前不支持逻辑 dump/restore。

### 兼容性与限制

当前打包和上游支持路径为 PostgreSQL 17、18 与 pgrx 0.19.2。版本 0.1.1 包含已验证的 `0.1.0 -> 0.1.1` 扩展升级边。

`pgs3` 不是通用生产级 S3 替代品。它尚未实现 virtual-host addressing、内置 TLS、IAM 或 bucket policy 语言、ACL、lifecycle rule 与跨数据库路由；小对象 GET/PUT 目标和十万对象 Fork 目标也未达成，完整对象 GET 当前还会在内存中物化响应。部署时应设置适合自身场景的对象大小上限，并在暴露 endpoint 前阅读上游限制。

---
title: "oidc_validator"
linkTitle: "oidc_validator"
description: "使用 Rust 与 pgrx 编写的 PostgreSQL 18 OIDC Bearer 令牌验证模块"
weight: 7180
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/UnAfraid/pg_oidc_validator_rust">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">UnAfraid/pg_oidc_validator_rust</div>
    <div class="ext-card__desc">https://github.com/UnAfraid/pg_oidc_validator_rust</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_oidc_validator_rust-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_oidc_validator_rust-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_oidc_validator_rust-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_oidc_validator_rust`**](/ext/e/oidc_validator) | `0.1.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license licenserefupstreamnolicense" href="/ext/license#licenserefupstreamnolicense">LicenseRef-Upstream-No-License</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7180  | [**`oidc_validator`**](/ext/e/oidc_validator) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_oidc_validator`](/ext/e/pg_oidc_validator) [`pg_session_jwt`](/ext/e/pg_session_jwt) [`pgjwt`](/ext/e/pgjwt) [`login_hook`](/ext/e/login_hook) [`auth_delay`](/ext/e/auth_delay) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Configure oauth_validator_libraries='oidc_validator'. Built from upstream commit b65bbbe288f84fab91d58b8304e8a526d1326af5; upstream publishes no license grant.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18" >}} | `pg_oidc_validator_rust` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18" >}} | `pg_oidc_validator_rust_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18" >}} | `postgresql-$v-pg-oidc-validator-rust` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_oidc_validator_rust_18 pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_oidc_validator_rust_18 pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_oidc_validator_rust_18 pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_oidc_validator_rust_18 pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 3.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_oidc_validator_rust_18 pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_oidc_validator_rust_18 pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_oidc_validator_rust_18-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-oidc-validator-rust postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 2.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-oidc-validator-rust/postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-oidc-validator-rust postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-oidc-validator-rust/postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-oidc-validator-rust postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 2.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-oidc-validator-rust/postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-oidc-validator-rust postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-oidc-validator-rust/postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-oidc-validator-rust postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-oidc-validator-rust/postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-oidc-validator-rust postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-oidc-validator-rust/postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-oidc-validator-rust postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-oidc-validator-rust/postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-oidc-validator-rust postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-oidc-validator-rust/postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-oidc-validator-rust postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 2.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-oidc-validator-rust/postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-oidc-validator-rust postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 2.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-oidc-validator-rust/postgresql-18-pg-oidc-validator-rust_0.1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_oidc_validator_rust` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_oidc_validator_rust         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_oidc_validator_rust` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_oidc_validator_rust;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_oidc_validator_rust -v 18  # PG 18
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_oidc_validator_rust_18       # PG 18
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-oidc-validator-rust   # PG 18
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'oidc_validator';
```


## 用法

来源：

- [官方README](https://github.com/UnAfraid/pg_oidc_validator_rust/blob/b65bbbe288f84fab91d58b8304e8a526d1326af5/README.md)
- [验证器配置源码](https://github.com/UnAfraid/pg_oidc_validator_rust/blob/b65bbbe288f84fab91d58b8304e8a526d1326af5/src/config.rs)
- [PostgreSQL OAuth回调实现](https://github.com/UnAfraid/pg_oidc_validator_rust/blob/b65bbbe288f84fab91d58b8304e8a526d1326af5/src/ffi.rs)
- [PostgreSQL 18 OAuth认证文档](https://www.postgresql.org/docs/18/auth-oauth.html)

`oidc_validator` 是一个用 Rust 编写的 PostgreSQL 18 OAuth 验证模块。它会验证 JWT 访问令牌并将其主题作为已认证的身份返回。这是一个无头的认证库，而不是 SQL 扩展，因此不会创建任何 SQL 对象，也不会使用 `CREATE EXTENSION`。

### 核心工作流程

将 `oidc_validator.so` 安装到 PostgreSQL 的库目录中，然后配置 PostgreSQL 18 验证模块：

```conf
oauth_validator_libraries = 'oidc_validator'
```

在 `pg_hba.conf` 中添加一个 OAuth 规则：

```conf
host all all 0.0.0.0/0 oauth issuer="https://issuer.example" scope="openid profile"
```

向 PostgreSQL 服务器进程提供验证器配置：

```shell
POSTGRES_OIDC_ISSUER=https://issuer.example
POSTGRES_OIDC_CLIENT_ID=postgres
POSTGRES_OIDC_AUDIENCE=postgres
```

更改 `oauth_validator_libraries` 或服务器进程环境后重启 PostgreSQL。然后，OAuth 客户端可以通过匹配的 `pg_hba.conf` 规则进行认证。

### 配置索引

- `POSTGRES_OIDC_ISSUER`: 不带已知发现后缀的发行人 URL。
- `POSTGRES_OIDC_CLIENT_ID`: OIDC 应用客户端 ID。
- `POSTGRES_OIDC_AUDIENCE`: 必须的令牌受众，通常为客户端 ID。
- `oauth_validator_libraries`: PostgreSQL 18 设置项，用于加载受信任验证模块。

### 要求和注意事项

- 上游版本 `0.1.0` 针对 PostgreSQL 18，并要求在编译 PostgreSQL 时启用 OpenSSL 和 libcurl。
- 只接受 JWT 样式的凭据令牌。不接受密文访问令牌。
- 验证会执行 OIDC 发现和 JWKS 获取操作，因此 PostgreSQL 服务器必须能够通过 TLS 访问发行人。
- 当前回调忽略请求的 PostgreSQL 角色，并基于成功的令牌验证进行授权。不要使用此实现设置 `delegate_ident_mapping=1`；保持 PostgreSQL 的标准精确名称映射或 `pg_ident.conf` 映射，以便返回的令牌主题可以与请求的角色进行检查。

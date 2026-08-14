---
title: "pg_oidc_validator"
linkTitle: "pg_oidc_validator"
description: "PostgreSQL 18 OAuth 与 OIDC 令牌验证模块"
weight: 7170
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/percona/pg_oidc_validator">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">percona/pg_oidc_validator</div>
    <div class="ext-card__desc">https://github.com/percona/pg_oidc_validator</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_oidc_validator-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_oidc_validator-1.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_oidc_validator-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_oidc_validator`**](/ext/e/pg_oidc_validator) | `1.1.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7170  | [**`pg_oidc_validator`**](/ext/e/pg_oidc_validator) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`oidc_validator`](/ext/e/oidc_validator) [`pg_session_jwt`](/ext/e/pg_session_jwt) [`pgjwt`](/ext/e/pgjwt) [`login_hook`](/ext/e/login_hook) [`sslinfo`](/ext/e/sslinfo) [`sslutils`](/ext/e/sslutils) [`pgsodium`](/ext/e/pgsodium) [`pguecc`](/ext/e/pguecc) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Configure oauth_validator_libraries=pg_oidc_validator; 1.1.0 adds discovery_url_override; RPM is available on EL10 only while DEB covers all supported Debian and Ubuntu targets.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18" >}} | `pg_oidc_validator` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18" >}} | `pg_oidc_validator_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18" >}} | `postgresql-$v-pg-oidc-validator` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.1.0 3 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.1.0 3 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el10.x86_64 18 pg_oidc_validator_18 pg_oidc_validator_18-1.1.0-1PGSTY.el10.x86_64.rpm pigsty 1.1.0 142.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_oidc_validator_18-1.1.0-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_oidc_validator_18 pg_oidc_validator_18-1.0.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0.0 173.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_oidc_validator_18-1.0.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_oidc_validator_18 pg_oidc_validator_18-0.2-1PGDG.rhel10.2.x86_64.rpm pgdg 0.2 173.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_oidc_validator_18-0.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 18 pg_oidc_validator_18 pg_oidc_validator_18-1.1.0-1PGSTY.el10.aarch64.rpm pigsty 1.1.0 129.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_oidc_validator_18-1.1.0-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_oidc_validator_18 pg_oidc_validator_18-1.0.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.0.0 155.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_oidc_validator_18-1.0.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_oidc_validator_18 pg_oidc_validator_18-0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 0.2 154.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_oidc_validator_18-0.2-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 108.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 94.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 116.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 101.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 106.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 98.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 107.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 99.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 120.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 105.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_1.1.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_oidc_validator` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_oidc_validator         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_oidc_validator` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_oidc_validator;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_oidc_validator -v 18  # PG 18
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_oidc_validator_18       # PG 18
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-oidc-validator   # PG 18
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_oidc_validator';
```


## 用法

来源：

- [pg_oidc_validator 1.1.0 README](https://github.com/percona/pg_oidc_validator/blob/1.1.0/README.md)
- [pg_oidc_validator 1.1.0 Keycloak 示例](https://github.com/percona/pg_oidc_validator/tree/1.1.0/examples/keycloak)
- [pg_oidc_validator 1.1.0 验证器源码](https://github.com/percona/pg_oidc_validator/blob/1.1.0/src/pg_oidc_validator.cpp)
- [PostgreSQL 18 OAuth 认证文档](https://www.postgresql.org/docs/18/auth-oauth.html)
- [PostgreSQL 18 libpq OAuth 文档](https://www.postgresql.org/docs/18/libpq-oauth.html)

`pg_oidc_validator` 1.1.0 是 PostgreSQL 18 的 OAuth 验证模块，用于根据 OpenID Connect 提供者验证 JWT 访问令牌。它是没有 control 文件或 SQL 扩展的服务器动态库，因此不要运行 `CREATE EXTENSION`。

### 配置服务器

在 `postgresql.conf` 中加载模块，然后重启 PostgreSQL：

```ini
oauth_validator_libraries = 'pg_oidc_validator'
```

在 `pg_hba.conf` 中添加 OAuth 规则；发行者与所需 scope 必须和提供者匹配。除严格的本地测试外，应使用 `hostssl`：

```text
hostssl  all  all  127.0.0.1/32  oauth  issuer=https://id.example.com/realms/postgres scope="openid postgres" validator=pg_oidc_validator
```

修改 HBA 或验证器设置后应重新加载 PostgreSQL；把模块加入 `oauth_validator_libraries` 本身则需要重启。

默认使用 `sub` 声明作为认证身份。如需返回另一个稳定的字符串声明用于角色匹配，可配置：

```ini
pg_oidc_validator.authn_field = 'email'
```

1.1.0 还提供 `pg_oidc_validator.discovery_url_override`。它会改变发现元数据与 JWKS 的获取位置，但不会改变用于验证 JWT `iss` 声明的发行者；适用于 OIDC 提供者具有不同内外部 URL 的环境。这两个验证器设置都可以通过 `SIGHUP` 重新加载。

如果 HBA 规则没有设置 `map=`，选中的声明必须与请求的 PostgreSQL 角色完全一致。提供者身份与数据库角色不同时，应使用具名的 `pg_ident.conf` 映射；验证器不会创建角色。

### 使用 libpq 连接

支持 OAuth 的 libpq 客户端可以启动提供者的设备授权流程：

```bash
psql 'host=127.0.0.1 dbname=app user=alice oauth_issuer=https://id.example.com/realms/postgres oauth_client_id=postgres-client'
```

仅在注册客户端要求时使用 `oauth_client_secret`。客户端标识、请求的 scope、发行者与提供者配置必须一致。

### 提供者与安全边界

- Keycloak 必须为命令行客户端启用 OAuth 2 device flow。
- Microsoft Entra ID 要求租户专属的 v2 发行者与自定义 scope；在 `pg_hba.conf` 中使用完整 scope 名称。
- Google 无法通过 libpq 内置 device flow 使用，但自定义客户端可能可用。
- Dex 不会发送 OAuth scope；显式使用空的 `scope=""` 会关闭 scope 校验，从而削弱常规检查。
- 客户端的 `oauth_issuer` 必须与 HBA 发行者及发现文档完全一致。应把发行者与任何 `pg_oidc_validator.discovery_url_override` 端点都视为可信安全边界，并对数据库和提供者连接强制执行经过验证的 TLS。
- 令牌校验不能替代 PostgreSQL 授权、角色成员关系或行级安全。
- Pigsty RPM 软件包仅覆盖 EL10；DEB 软件包覆盖受支持的 Debian 与 Ubuntu 目标。该模块要求 PostgreSQL 18。

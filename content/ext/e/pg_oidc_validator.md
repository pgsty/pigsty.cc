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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_oidc_validator-0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_oidc_validator-0.2.tar.gz</div>
    <div class="ext-card__desc">pg_oidc_validator-0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_oidc_validator`**](/ext/e/pg_oidc_validator) | `0.2` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7170  | [**`pg_oidc_validator`**](/ext/e/pg_oidc_validator) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`oidc_validator`](/ext/e/oidc_validator) [`pg_session_jwt`](/ext/e/pg_session_jwt) [`pgjwt`](/ext/e/pgjwt) [`login_hook`](/ext/e/login_hook) [`auth_delay`](/ext/e/auth_delay) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Configure oauth_validator_libraries='pg_oidc_validator'. RPM is available on EL10 only; EL8/EL9 RPMs were excluded after libstdc++ ABI smoke failures. DEB covers all supported Debian/Ubuntu targets.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2` | {{< pgvers "18" >}} | `pg_oidc_validator` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2` | {{< pgvers "18" >}} | `pg_oidc_validator_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2` | {{< pgvers "18" >}} | `postgresql-$v-pg-oidc-validator` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.2 2 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.2 2 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el10.x86_64 18 pg_oidc_validator_18 pg_oidc_validator_18-0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2 141.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_oidc_validator_18-0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_oidc_validator_18 pg_oidc_validator_18-0.2-1PGDG.rhel10.2.x86_64.rpm pgdg 0.2 173.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_oidc_validator_18-0.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 18 pg_oidc_validator_18 pg_oidc_validator_18-0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2 127.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_oidc_validator_18-0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_oidc_validator_18 pg_oidc_validator_18-0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 0.2 154.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_oidc_validator_18-0.2-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2 107.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2 94.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_0.2-1PIGSTY~trixie_amd64.deb pigsty 0.2 115.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_0.2-1PIGSTY~trixie_arm64.deb pigsty 0.2 100.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_0.2-1PIGSTY~jammy_amd64.deb pigsty 0.2 105.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_0.2-1PIGSTY~jammy_arm64.deb pigsty 0.2 96.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_0.2-1PIGSTY~noble_amd64.deb pigsty 0.2 107.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_0.2-1PIGSTY~noble_arm64.deb pigsty 0.2 98.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_0.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_0.2-1PIGSTY~resolute_amd64.deb pigsty 0.2 119.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_0.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-oidc-validator postgresql-18-pg-oidc-validator_0.2-1PIGSTY~resolute_arm64.deb pigsty 0.2 104.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-oidc-validator/postgresql-18-pg-oidc-validator_0.2-1PIGSTY~resolute_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

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

- [pg_oidc_validator 0.2 README](https://github.com/percona/pg_oidc_validator/blob/0.2/README.md)
- [Keycloak example for 0.2](https://github.com/percona/pg_oidc_validator/tree/0.2/examples/keycloak)

pg_oidc_validator 是一个用于 PostgreSQL 18 的 OAuth 验证模块，可以验证 libpq OAuth 令牌与 OpenID Connect 发行商。当 PostgreSQL 客户端通过 OIDC 提供者进行身份验证时，请使用此模块；它由服务器加载，并不定义 SQL 扩展，因此无需运行 CREATE EXTENSION。

该项目将该模块描述为实验性且尚未准备好生产环境使用。在依赖之前，请先测试具体的认证提供者、客户端和 PostgreSQL 版本。

### 配置服务器

加载验证器并重启 PostgreSQL：

    oauth_validator_libraries = 'pg_oidc_validator'

向 pg_hba.conf 添加一个 OAuth 规则。发行商和范围必须与提供商匹配：

    host  all  all  127.0.0.1/32  oauth  issuer=https://id.example.com/realms/postgres scope="openid postgres"

编辑完 pg_hba.conf 后重新加载它。验证器会根据从发行商发现的提供者元数据检查令牌的发行商、受众、范围、签名和过期时间。

默认情况下，PostgreSQL 角色与 JWT 的 sub 声明进行匹配。要通过其他声明（如 email）进行身份验证，请设置：

    pg_oidc_validator.authn_field = 'email'

此设置更改了用于角色匹配的身份声明；它不会创建或配置数据库角色。

### 使用 libpq 连接

支持 OAuth 的 libpq 客户端可以启动设备授权流程：

    psql "host=127.0.0.1 dbname=app user=alice +      oauth_issuer=https://id.example.com/realms/postgres +      oauth_client_id=postgres-client"

仅在注册客户端需要时使用 oauth_client_secret。客户端标识符、重定向/设备流设置、受众和请求的范围必须与身份提供者配置一致。

### 配置索引

- oauth_validator_libraries: 服务器级别的 OAuth 验证模块列表；添加 pg_oidc_validator 需要重启。
- pg_oidc_validator.authn_field: 用于角色匹配的 JWT 声明，默认为 sub。
- pg_hba.conf oauth 方法: 选择 OAuth 认证并提供接受的发行商和范围。
- oauth_issuer, oauth_client_id, oauth_client_secret: libpq 连接参数，用于获取令牌。

### 提供者与安全边界

- 上游 0.2 文档针对 PostgreSQL 18，并要求使用支持 OAuth 的 libpq 客户端。
- 验证器支持常见的 OIDC 提供者，但 README 特别指出 Google 不受支持，并描述了 Microsoft Entra ID 的特定设置。
- 令牌验证只是授权的一部分。PostgreSQL 角色成员资格和对象权限仍然控制数据库访问。
- 尽可能在外连接字符串之外保护客户端密钥和提供者凭据，并验证对发行商的信任 TLS。

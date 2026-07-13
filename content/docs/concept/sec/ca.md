---
title: 加密通信
weight: 234
description: Pigsty 内置自签名 CA，为受管组件签发证书并分发信任，提供统一的 TLS 基础设施。
icon: fa-solid fa-certificate
module: [PIGSTY, INFRA, PGSQL]
categories: [概念]
---

TLS 可以提供三类保护：**传输加密**、**服务端身份验证**与 **客户端身份验证**。这三项能力需要分别配置：启用服务端 TLS 并不等于客户端已经验证了服务端身份，也不等于服务端要求客户端证书。

TLS 的主要运维成本不在加密算法本身，而在证书的签发、分发、信任与轮换。缺少统一管理时，内网服务往往只启用加密，却跳过证书验证，或者干脆继续使用明文连接。

Pigsty 的做法是把 PKI 也纳入声明式管理：部署时自动创建本地自签名 CA，为受管组件签发证书并分发信任，让 TLS 在部署完成后即可使用。


---------------

## 本地 CA

首次执行部署时，Pigsty 会在 [**管理节点**](/docs/concept/arch/node#admin节点) 上检查并按需创建 CA：

| 文件                    | 说明                    | 权限                |
|:----------------------|:----------------------|:------------------|
| `files/pki/ca/ca.key` | CA 私钥：整个部署的信任根，务必妥善保管 | `0600`（目录 `0700`） |
| `files/pki/ca/ca.crt` | CA 根证书：可以自由分发         | `0644`            |
{.full-width}

- CA 的行为由 [`ca_create`](/docs/infra/param#ca_create) 控制：CA 文件已存在则原样复用（幂等），不存在则新建；
  设为 `false` 时若找不到 CA 文件，部署会直接报错中止，防止意外生成新的信任根。
- CA 证书的 CN 由 [`ca_cn`](/docs/infra/param#ca_cn) 指定，默认 `pigsty-ca`；密钥为 RSA 4096 位。
- 有效期：CA 根证书 100 年，组件证书默认 20 年（[`cert_validity`](/docs/infra/param#cert_validity)：`7300d`）。
  面向浏览器的 Nginx 证书是例外，当前默认有效期为 397 天。

较长的默认有效期用于降低私有基础设施的初始维护成本，并不意味着生产环境无需轮换。组织已有证书策略时，应缩短有效期，并建立到期监控和换证流程。


---------------

## 信任分发

签发证书只是一半，另一半是让每个 [**节点**](/docs/concept/arch/node) 信任这些证书。节点纳入管理时，Pigsty 将 CA 证书分发到所有节点的 `/etc/pki/ca.crt`，并链接进操作系统信任链：

- EL 系（RHEL、Rocky、Alma）：链接至 `/etc/pki/ca-trust/source/anchors/` 并执行 `update-ca-trust`
- Debian、Ubuntu：链接至 `/usr/local/share/ca-certificates/` 并执行 `update-ca-certificates`

此后，使用操作系统信任库的客户端（例如 `curl`）可以验证 Pigsty CA 签发的证书。
CA 证书还会发布到 [**Nginx 门户**](/docs/concept/arch/infra#nginx) 的站点根目录（`ca.crt`），供浏览器与外部客户端下载安装。

PostgreSQL 的 libpq 客户端需要单独说明：它默认使用 `~/.postgresql/root.crt`，默认 `sslmode` 为 `prefer`，不会直接使用操作系统信任库验证服务端身份。


---------------

## 客户端验证服务端

安全敏感的 PostgreSQL 客户端应使用 `sslmode=verify-full`，并指定 Pigsty CA：

```bash
psql "host=pg-meta dbname=postgres user=dbuser_dba sslmode=verify-full sslrootcert=/etc/pki/ca.crt"
```

`verify-full` 会同时验证证书链与连接主机名，因此客户端使用的 DNS 名称或 IP 地址必须出现在服务端证书的 SAN 中。外部客户端需要先安装 `ca.crt`，或通过 `sslrootcert` 指定 CA 文件。


---------------

## 证书矩阵

本地 CA 为下列组件签发证书，构成统一的信任链：

| 组件                                                    | 证书身份（CN）            | 部署路径                         | 加密状态                                                                           |
|:------------------------------------------------------|:--------------------|:-----------------------------|:-------------------------------------------------------------------------------|
| [**PostgreSQL**](/docs/concept/arch/pgsql#postgresql) | `<集群>-<序号>`         | `/pg/cert/server.{crt,key}`  | 服务端 SSL 默认启用；是否强制由 HBA 决定                                                      |
| [**PgBouncer**](/docs/concept/arch/pgsql#pgbouncer)   | 复用 PostgreSQL 证书    | `/pg/cert/`                  | TLS 默认关闭（[`pgbouncer_sslmode`](/docs/pgsql/param#pgbouncer_sslmode)）           |
| [**Patroni**](/docs/concept/arch/pgsql#patroni)       | 复用 PostgreSQL 证书    | `/pg/cert/`                  | API HTTPS 默认关闭（[`patroni_ssl_enabled`](/docs/pgsql/param#patroni_ssl_enabled)） |
| [**etcd**](/docs/concept/arch/pgsql#etcd)             | `<实例名>`             | `/etc/etcd/server.{crt,key}` | 客户端与对等通信使用 TLS                                                                 |
| [**MinIO**](/docs/concept/model/minio)                | `<节点名>`             | `~minio/.minio/certs/`       | HTTPS 默认开启（[`minio_https`](/docs/minio/param#minio_https)）                     |
| [**Nginx**](/docs/concept/arch/infra#nginx)           | `pigsty`（SAN 含门户域名） | `/etc/nginx/conf.d/cert/`    | HTTPS 默认开启（[`nginx_sslmode`](/docs/infra/param#nginx_sslmode)）                 |
| [**INFRA 节点**](/docs/concept/arch/node#infra节点)       | `<节点名>`             | `/etc/pki/infra.{crt,key}`   | 供基础设施组件使用                                                                      |
{.full-width}

表中的“加密状态”一列如实反映了默认配置的取舍：

- **部署时启用**：PostgreSQL 服务端可以接受 SSL 连接，etcd 的客户端与对等通信使用 TLS。
- **默认加密**：MinIO（备份流量）与 Nginx（Web 流量）默认启用 HTTPS。
- **默认关闭，按需启用**：Patroni REST API 与 PgBouncer 的 TLS 默认关闭，证书已经就位，可以通过相应参数开启；[**`ha/safe`**](/docs/conf/safe) 模板中两者均默认开启。

还有一层需要分清的区别：**服务端支持 SSL 不等于强制客户端使用 SSL，更不等于客户端验证了服务端身份**。
是否强制加密由 [**HBA 规则**](/docs/concept/sec/auth) 决定（`auth: ssl` 或 `cert`）；是否验证服务端则由客户端的 `sslmode` 与信任配置决定。默认规则仅对任意来源的管理员连接强制 TLS，safe 模板将主要 TCP 规则改为 `ssl` 或 `cert`，但仍保留本地 `ident` 与部分 localhost 口令规则。


---------------

## 客户端证书

内置剧本 `cert.yml` 用于签发客户端证书。证书的 CN 对应数据库用户名，供 HBA 的 `cert` 认证方式使用：

```bash
./cert.yml -e cn=dbuser_dba                  # 为 dbuser_dba 签发客户端证书，默认有效期 20 年
./cert.yml -e cn=dbuser_dba -e expire=365d   # 或指定更短的有效期
```

签发结果位于 `files/pki/misc/<cn>.key` 与 `files/pki/misc/<cn>.crt`。客户端私钥应通过受控渠道交付，并设置为仅对应用户可读。客户端证书解决服务端对客户端身份的验证，客户端仍需使用 `verify-full` 验证数据库服务端。


---------------

## 使用企业 CA

如果组织已有 PKI 体系，可以让 Pigsty 改用您的 CA（或由企业根 CA 签出的中间 CA）签发证书：把证书与私钥放到指定位置即可，剧本检测到已有 CA 后不会重新生成：

```bash
files/pki/ca/ca.key    # 您的 CA 私钥（或中间 CA 私钥）
files/pki/ca/ca.crt    # 对应的 CA 证书
```

同时建议设置 `ca_create: false`：这样当文件缺失时部署会显式失败，避免意外创建新的自签名 CA，破坏既有的信任链。


---------------

## 密钥保护与轮换

- CA 私钥只存在于管理节点上。它与 `pigsty.yml` 一起构成部署中信任等级最高的资产（参见 [**信任边界**](/docs/concept/sec/level#信任边界)），建议离线备份。
- CA 私钥一旦泄露，需要建立新的信任根并重新签发全部组件与客户端证书。执行前应规划新旧 CA 的信任过渡，避免一次性中断所有连接。
- 组件证书的签发源保存在管理节点的 `files/pki/<component>/`，节点上的证书只是部署副本。仅删除节点上的证书会重新复制原证书，不会触发重新签发。轮换时应更新或删除管理节点上的对应证书源，再执行相关剧本，并按组件要求重载或滚动重启。


---------------

## 接下来

- 🔑 [**身份认证**](/docs/concept/sec/auth)：用 HBA 决定谁必须走 SSL 与证书
- 🔒 [**数据安全**](/docs/concept/sec/data)：静态数据与备份的加密
- ✅ [**合规实践**](/docs/concept/sec/compliance)：证书管理的合规证据

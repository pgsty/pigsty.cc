---
title: 安全建议
weight: 290
description: 单机部署，快速上手时的三点安全加固建议
icon: fas fa-shield-halved
module: [PIGSTY]
categories: [教程]
---

对于单机部署的 Demo/Dev 场景，只要您 [**修改了默认密码**](#密码)，Pigsty 的默认配置已经足够安全。

如果您的部署对互联网开放，可以考虑添加 [**防火墙**](#防火墙) 规则，限制端口访问与来源IP，进一步加固安全性。

除此之外，我们建议您保护好 Pigsty 的 [**关键文件**](#文件)（配置文件与 CA 私钥）防止未授权访问并定期备份。

对于有着严格安全要求的企业级生产环境，请参考 [**部署-安全加固**](/docs/deploy/security/) 文档进行进阶配置。


----------------

## 密码

Pigsty 是一个开源项目，**默认密码众所周知**。如果您的部署面向互联网或者办公网开放，请务必修改所有默认密码！

|             模块             | 参数                                                                         | 默认值                 |
|:--------------------------:|----------------------------------------------------------------------------|---------------------|
| [**`INFRA`**](/docs/infra) | [**`grafana_admin_password`**](/docs/infra/param#grafana_admin_password)   | `pigsty`            |
| [**`INFRA`**](/docs/infra) | [**`grafana_view_password`**](/docs/infra/param#grafana_view_password)     | `DBUser.Viewer`     |
| [**`PGSQL`**](/docs/pgsql) | [**`pg_admin_password`**](/docs/pgsql/param#pg_admin_password)             | `DBUser.DBA`        |
| [**`PGSQL`**](/docs/pgsql) | [**`pg_monitor_password`**](/docs/pgsql/param#pg_monitor_password)         | `DBUser.Monitor`    |
| [**`PGSQL`**](/docs/pgsql) | [**`pg_replication_password`**](/docs/pgsql/param#pg_replication_password) | `DBUser.Replicator` |
| [**`PGSQL`**](/docs/pgsql) | [**`patroni_password`**](/docs/pgsql/param#patroni_password)               | `Patroni.API`       |
|  [**`NODE`**](/docs/node)  | [**`haproxy_admin_password`**](/docs/node/param#haproxy_admin_password)    | `pigsty`            |
| [**`MINIO`**](/docs/minio) | [**`minio_secret_key`**](/docs/minio/param#minio_secret_key)               | `S3User.MinIO`      |
|  [**`ETCD`**](/docs/etcd)  | [**`etcd_root_password`**](/docs/etcd/param#etcd_root_password)            | `Etcd.Root`         |
{.full-width}

为了避免手动修改密码的繁琐，Pigsty 的 **配置向导** 提供了自动生成随机强密码的功能，使用 `configure` 的 `-g` 参数即可。

```bash
$ ./configure -g
configure pigsty v4.1.0 begin
[ OK ] region = china
[WARN] kernel  = Darwin, can be used as admin node only
[ OK ] machine = arm64
[ OK ] package = brew (macOS)
[WARN] primary_ip = default placeholder 10.10.10.10 (macOS)
[ OK ] mode = meta (unknown distro)
[ OK ] locale  = C.UTF-8
[ OK ] generating random passwords...
    grafana_admin_password   : CdG0bDcfm3HFT9H2cvFuv9w7
    pg_admin_password        : 86WqSGdokjol7WAU9fUxY8IG
    pg_monitor_password      : 0X7PtgMmLxuCd2FveaaqBuX9
    pg_replication_password  : 4iAjjXgEY32hbRGVUMeFH460
    patroni_password         : DsD38QLTSq36xejzEbKwEqBK
    haproxy_admin_password   : uhdWhepXrQBrFeAhK9sCSUDo
    minio_secret_key         : z6zrYUN1SbdApQTmfRZlyWMT
    etcd_root_password       : Bmny8op1li1wKlzcaAmvPiWc
    DBUser.Meta              : U5v3CmeXICcMdhMNzP9JN3KY
    DBUser.Viewer            : 9cGQF1QMNCtV3KlDn44AEzpw
    S3User.Backup            : 2gjgSCFYNmDs5tOAiviCqM2X
    S3User.Meta              : XfqkAKY6lBtuDMJ2GZezA15T
    S3User.Data              : OygorcpCbV7DpDmqKe3G6UOj
[ OK ] random passwords generated, check and save them
[ OK ] ansible = ready
[ OK ] pigsty configured
[WARN] don't forget to check it and change passwords!
proceed with ./deploy.yml
```

我们建议在规划部署之前，就修改所有默认密码，确保部署完成后系统即处于安全状态。事后修改密码是一个繁琐的工作：

- [**管理 PostgreSQL 默认用户密码**](/docs/pgsql/admin/user/#管理默认用户密码)
- [**管理 Grafana 密码**](/docs/infra/admin/sop#管理-grafana-密码)
- [**管理 Haproxy 密码**](/docs/node/admin#管理-haproxy-密码)
- [**管理 Etcd 密码**](/docs/etcd/admin#管理-etcd-密码)
- [**管理 MinIO 密码**](/docs/minio/admin#管理-minio-密码)

----------------

## 防火墙

在互联网或者办公网开放的部署场景中，强烈建议配置 **防火墙规则**，限制访问 IP 范围与端口。

您可以使用云厂商提供的安全组功能，或者使用 Linux 发行版自带的防火墙服务（如 `firewalld`、`ufw`、`iptables` 等）来实现。

| 方向: | 协议  | 端口       | 服务         | 说明                |
|:---:|:---:|----------|------------|-------------------|
| 入站  | TCP | **22**   | SSH        | 允许 ssh 登陆管理       |
| 入站  | TCP | **80**   | Nginx      | 允许 Nginx HTTP 访问  |
| 入站  | TCP | **443**  | Nginx      | 允许 Nginx HTTPS 访问 |
| 入站  | TCP | **5432** | PostgreSQL | 远程公网访问数据库，按需启用    |
{.full-width}

Pigsty 默认支持配置防火墙规则，允许 22/80/443/5432 从外部网络访问，但这并非默认启用。


----------------

## 文件

在 Pigsty 中，您需要特别保护以下文件：

- **`pigsty.yml`**：Pigsty 主配置文件，包含所有节点的访问信息与密码
- **`files/pki/ca/ca.key`**：Pigsty 自签名 CA 的私钥，用于签发部署中所有的 SSL 证书（部署时自动生成）

我们建议您严格控制这两个文件的访问权限，并定期进行备份，将它们存储在一个安全的位置。

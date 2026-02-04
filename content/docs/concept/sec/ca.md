---
title: 加密通信与本地 CA
weight: 234
description: Pigsty 内置自签 CA，签发 TLS 证书并加密通信流量。
icon: fa-solid fa-certificate
module: [INFRA, PGSQL]
categories: [概念]
---

加密通信解决三个问题：

- **窃听**：防止明文流量被监听
- **篡改**：防止中间人修改数据
- **冒充**：防止服务端/客户端被伪造

Pigsty 通过 **本地 CA + TLS** 为数据库与基础设施组件提供统一的信任根。


---------------

## 本地 CA 的作用

Pigsty 默认会在管理节点生成自签 CA：

```
files/pki/ca/ca.key   # CA 私钥（必须严格保护）
files/pki/ca/ca.crt   # CA 根证书（可分发）
```

源码默认值：

- `ca_create: true`：找不到 CA 时自动生成。
- `ca_cn: pigsty-ca`：CA 证书 CN 固定为 `pigsty-ca`。
- 根证书有效期约 100 年（自签）。
- 由 CA 签发的服务器/客户端证书有效期 `cert_validity: 7300d`（20 年）。


---------------

## 证书覆盖范围

本地 CA 会签发多种组件证书，统一信任链：

| 组件 | 目的 | 典型路径 |
|---|---|---|
| PostgreSQL / PgBouncer | 连接加密 | `/pg/cert/` |
| Patroni | API 通信 | `/pg/cert/` |
| etcd | DCS 加密 | `/etc/etcd/` |
| MinIO | 对象存储 HTTPS | `~minio/.minio/certs/` |
| Nginx | Web 入口 HTTPS | `/etc/nginx/conf.d/cert/` |
{.full-width}

**解决的问题**：不同组件自建证书会产生信任碎片，统一 CA 可以一次分发，多处复用。


---------------

## 信任分发

Pigsty 安装时会将 `ca.crt` 分发到所有节点并加入系统信任：

- 证书路径：`/etc/pki/ca.crt`
- EL 系列：`/etc/pki/ca-trust/source/anchors/`
- Debian/Ubuntu：`/usr/local/share/ca-certificates/`

这样可以让系统内的客户端自动信任 Pigsty 签发的证书。


---------------

## 使用外部 CA

如果你已有企业 CA，可以直接替换：

```
files/pki/ca/ca.key
files/pki/ca/ca.crt
```

建议设置：

```yaml
ca_create: false
```

**解决的问题**：防止系统误生成新的自签 CA，导致证书信任链混乱。


---------------

## 客户端证书认证

证书认证可以替代或增强密码认证：

- 避免密码被钓鱼或泄露
- 证书可绑定设备与账号

Pigsty 自带 `cert.yml` 用于签发客户端证书：

```bash
./cert.yml -e cn=dbuser_dba
./cert.yml -e cn=dbuser_monitor
```

默认生成在：

```
files/pki/misc/<cn>.key
files/pki/misc/<cn>.crt
```


---------------

## 密钥保护与轮换

- CA 私钥默认 0600 权限，并在 0700 目录中保存。
- 一旦 CA 私钥泄露，必须重新生成 CA 并重签所有证书。
- 建议在重大升级或密钥泄露事件后进行证书轮换。


---------------

## 接下来

- 🔑 [**身份认证**](../auth/)：HBA 与证书认证
- 👤 [**访问控制**](../ac/)：角色与权限模型
- ✅ [**合规清单**](../compliance/)：合规要求与证据准备

---
title: 使用方法
weight: 4985
description: 通过 bao 命令行与 HTTP API 使用 VAULT：KV 机密存储、Transit 加密服务与 AppRole 应用凭据。
icon: fa-solid fa-bell-concierge
module: [VAULT]
categories: [参考]
---

当您 [配置](/docs/vault/config) 并执行 [剧本](/docs/vault/playbook) 部署 VAULT 后，可以参考本页开始使用它。
VAULT 部署完成后默认启用了以下引擎与认证方式，可以直接供业务使用：

| 路径 | 类型 | 用途 |
|:---|:---|:---|
| `secret/` | KV v2 机密引擎 | 保存密码、API 密钥、证书等静态机密，支持多版本 |
| `transit/` | Transit 机密引擎 | 加密即服务：应用把明文交给 VAULT 加解密，密钥永不离开 VAULT |
| `auth/approle/` | AppRole 认证方式 | 为应用与自动化程序发放机器凭据 |
| `auth/token/` | Token 认证方式 | 内置，最长租期已调整为 10 年 |
{.full-width}

OpenBao 的 API 与 HashiCorp Vault 基本兼容，常见的 Vault 客户端库与工具通常也可以直接使用。完整用法请参考 [OpenBao 文档](https://openbao.org/docs/)。


--------

## 接入地址

所有客户端都应通过服务域名与 HTTPS 访问 VAULT，并使用 Pigsty CA 校验服务端证书：

| 项目 | 取值 |
|:---|:---|
| 地址 | `https://vault.pigsty:8200` |
| CA 证书 | Pigsty CA，在纳管节点上位于 `/etc/pki/ca.crt`，在管理节点上位于 `files/pki/ca/ca.crt` |
| TLS 版本 | 最低 TLS 1.3 |
{.full-width}

在三节点集群上，`vault.pigsty` 指向 VIP，HAProxy 会把请求转发给当前的 active 成员。直接访问 standby 成员也可以，它会把请求转发给 active 成员。

```bash
export BAO_ADDR=https://vault.pigsty:8200
export BAO_CACERT=/etc/pki/ca.crt
```

`bao` 命令行随 `openbao` 软件包安装在 VAULT 成员上；其他节点可以直接使用 `curl` 调用 [HTTP API](#http-api)，或者安装 `openbao` 软件包以获得 `bao` 命令。


--------

## 管理员登录

下面的示例在 VAULT 成员上以 root 身份执行，并使用管理员令牌（root token），获取方式参见 [管理员凭据](/docs/vault/admin#管理员凭据)：

```bash
sudo -i                                     # BAO_ADDR 与 BAO_CACERT 已由 /etc/profile.d/bao.sh 设置
read -rs BAO_TOKEN && export BAO_TOKEN      # 输入 root token，输入不回显
bao secrets list                            # 列出已启用的机密引擎
bao auth list                               # 列出已启用的认证方式
```

root token 只应用于管理操作。应用访问 VAULT 时，请为其 [发放最小权限的凭据](#为应用发放凭据)。


--------

## KV 机密存储

`secret/` 是 KV v2 引擎，每次写入都会保存一个新版本：

```bash
bao kv put secret/app/db username=dbuser_app password='S3cret!'   # 写入一个机密
bao kv get secret/app/db                                          # 读取最新版本
bao kv get -field=password secret/app/db                          # 只读取某个字段
bao kv get -version=1 secret/app/db                               # 读取历史版本
bao kv list secret/app                                            # 列出路径下的机密
bao kv metadata get secret/app/db                                 # 查看版本元数据
bao kv delete secret/app/db                                       # 软删除最新版本，可以 undelete 恢复
```

请注意，在 KV v2 的 policy 与 HTTP API 中，读写机密的实际路径是 `secret/data/<path>`，元数据路径是 `secret/metadata/<path>`。


--------

## Transit 加密服务

`transit/` 提供加密即服务：应用不接触密钥，只把数据交给 VAULT 加密或解密，适合在应用层加密数据库中的敏感字段。

```bash
bao write -f transit/keys/app                                    # 创建名为 app 的加密密钥
bao write transit/encrypt/app plaintext=$(echo -n 'hello' | base64)
# ciphertext    vault:v1:8SDd3WHDOjf7mq69CyCqYjBXAiQQAVZRkFM13ok481zoCmHnSeDX9vyf7w==
bao write -field=plaintext transit/decrypt/app \
  ciphertext='vault:v1:8SDd3WHDOjf7mq69CyCqYjBXAiQQAVZRkFM13ok481zoCmHnSeDX9vyf7w==' | base64 -d
bao write -f transit/keys/app/rotate                             # 轮换密钥，旧密文仍可解密
```

明文需要先进行 Base64 编码。轮换密钥后，新数据使用新版本加密，旧版本的密文依然可以解密，也可以用 `transit/rewrap/app` 将旧密文重新封装到新版本。


--------

## 为应用发放凭据

为每个应用创建一个只包含必要权限的 policy，并用 AppRole 发放机器凭据：

```bash
# 1. 创建 policy：只允许读写 secret/app/ 下的机密，并使用 transit 的 app 密钥
bao policy write app - <<'EOF'
path "secret/data/app/*"     { capabilities = ["create", "read", "update", "delete", "list"] }
path "secret/metadata/app/*" { capabilities = ["read", "list"] }
path "transit/encrypt/app"   { capabilities = ["update"] }
path "transit/decrypt/app"   { capabilities = ["update"] }
EOF

# 2. 创建 AppRole，登录后得到的令牌绑定上面的 policy
bao write auth/approle/role/app token_policies=app token_ttl=1h token_max_ttl=24h

# 3. 读取 role_id 与 secret_id，分发给应用
bao read -field=role_id auth/approle/role/app/role-id
bao write -f -field=secret_id auth/approle/role/app/secret-id
```

`role_id` 相当于用户名，`secret_id` 相当于密码。应用用它们登录，换取一个短期令牌，再用令牌访问机密：

```bash
bao write auth/approle/login role_id=<role_id> secret_id=<secret_id>
```

请通过安全的渠道把 `secret_id` 交给应用，并根据需要设置 `secret_id_ttl`、`secret_id_num_uses`、`token_bound_cidrs` 等参数进一步收紧凭据的使用范围。


--------

## HTTP API

不安装 `bao` 命令的客户端，可以直接调用 HTTP API。以 AppRole 登录并读取机密为例：

```bash
CA=/etc/pki/ca.crt
URL=https://vault.pigsty:8200

# 使用 AppRole 登录，取得客户端令牌
TOKEN=$(curl -s --cacert $CA -X POST $URL/v1/auth/approle/login \
  -d '{"role_id":"<role_id>","secret_id":"<secret_id>"}' | jq -r .auth.client_token)

# 读取 KV v2 机密（注意路径中的 data/）
curl -s --cacert $CA -H "X-Vault-Token: $TOKEN" $URL/v1/secret/data/app/db | jq .data.data
```

无需认证的接口可以用于健康检查与监控：

```bash
curl -s --cacert /etc/pki/ca.crt https://vault.pigsty:8200/v1/sys/health     # 健康状态
curl -s --cacert /etc/pki/ca.crt https://vault.pigsty:8200/v1/sys/leader     # active 成员
```


--------

## 保留路径

以下路径与名称由 Pigsty 使用或为后续功能预留，业务请勿占用：

| 路径 / 名称 | 用途 |
|:---|:---|
| `tde/<pg_cluster>` | 预留给 PGSQL `pg_tde` 透明加密的密钥（KV v2，每个 PG 集群一个） |
| `kes/<minio_cluster>` | 预留给 MINIO KES 服务端加密的密钥（KV v2，每个对象存储集群一个） |
| `tde-*`、`kes-*` policy | 预留给上述消费者 |
| `vault-backup` policy | 快照备份令牌使用，只能读取 `sys/storage/raft/snapshot` |
{.full-width}

移除整个 VAULT 集群时，[`vault-rm.yml`](/docs/vault/playbook#vault-rmyml) 会列出现存的 `tde/*` 与 `kes/*` mount，提示哪些消费者将永久失去密钥。

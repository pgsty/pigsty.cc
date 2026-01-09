---
title: CA 与证书
weight: 3107
description: 使用自签名 CA 或真实 HTTPS 证书
icon: fa-solid fa-shield-halved
categories: [任务]
---


Pigsty 默认使用**自签名证书颁发机构 (CA)** 进行内部 SSL/TLS 加密。本文档包含：

- [自签名 CA](#自签名-ca)：默认的 PKI 基础设施
- [签发证书](#签发证书)：使用 `cert.yml` 签发额外证书
- [信任 CA 证书](#信任-ca-证书)：在客户端机器上安装 CA
- [Let's Encrypt](#lets-encrypt)：为公网服务使用真实证书


----------------

## 自签名 CA

Pigsty 在基础设施初始化 (`infra.yml`) 时自动创建自签名 CA。该 CA 用于签发以下证书：

- PostgreSQL 服务器/客户端 SSL
- Patroni REST API
- etcd 集群通信
- MinIO 集群通信
- Nginx HTTPS（备用）
- 基础设施服务

### PKI 目录结构

```
files/pki/
├── ca/
│   ├── ca.key                # CA 私钥（务必保管好！）
│   └── ca.crt                # CA 证书
├── csr/                      # 证书签名请求
├── misc/                     # 杂项证书（cert.yml 输出）
├── etcd/                     # ETCD 证书
├── pgsql/                    # PostgreSQL 证书
├── minio/                    # MinIO 证书
├── infra/                    # 基础设施证书
├── nginx/                    # Nginx 证书
└── mongo/                    # FerretDB 证书
```

### CA 变量

| 变量             | 默认值       | 说明                         |
|------------------|--------------|------------------------------|
| `ca_create`      | `true`       | 如果不存在则创建 CA，否则中止 |
| `ca_cn`          | `pigsty-ca`  | CA 证书通用名称               |
| `cert_validity`  | `7300d`      | 签发证书的默认有效期          |

### 证书有效期

| 证书类型       | 有效期    | 控制参数                      |
|----------------|-----------|-------------------------------|
| CA 证书        | 100 年    | 硬编码（36500 天）            |
| 服务器/客户端  | 20 年     | `cert_validity`（7300d）      |
| Nginx HTTPS    | ~1 年     | `nginx_cert_validity`（397d） |

> **注意**：浏览器厂商限制超过 398 天的证书信任。Nginx 使用较短有效期以保证浏览器兼容性。


### 使用外部 CA

如需使用企业自有 CA 而非自动生成的 CA：

1. 在配置中设置 `ca_create: false`
2. 在运行 playbook 之前放置 CA 文件：

   ```bash
   mkdir -p files/pki/ca
   cp /path/to/your/ca.key files/pki/ca/ca.key
   cp /path/to/your/ca.crt files/pki/ca/ca.crt
   chmod 600 files/pki/ca/ca.key
   chmod 644 files/pki/ca/ca.crt
   ```

3. 运行 `./infra.yml`

### 备份 CA 文件

CA 私钥至关重要，请安全备份：

```bash
# 带时间戳备份
tar -czvf pigsty-ca-$(date +%Y%m%d).tar.gz files/pki/ca/
```

> **警告**：如果丢失 CA 私钥，由其签发的所有证书都将无法验证。您需要重新生成所有内容。


----------------

## 签发证书

使用 `cert.yml` 签发由 Pigsty CA 签名的额外证书。

### 基本用法

```bash
# 为数据库用户签发证书（客户端证书）
./cert.yml -e cn=dbuser_dba

# 为监控用户签发证书
./cert.yml -e cn=dbuser_monitor
```

默认情况下，证书生成在 `files/pki/misc/<cn>.{key,crt}`。

### 参数说明

| 参数      | 默认值                      | 说明                     |
|-----------|----------------------------|--------------------------|
| `cn`      | `pigsty`                   | 通用名称（必填）          |
| `san`     | `[DNS:localhost, IP:127.0.0.1]` | 主题备用名称        |
| `org`     | `pigsty`                   | 组织名称                  |
| `unit`    | `pigsty`                   | 组织单位名称              |
| `expire`  | `7300d`                    | 证书有效期（20 年）       |
| `key`     | `files/pki/misc/<cn>.key`  | 私钥输出路径              |
| `crt`     | `files/pki/misc/<cn>.crt`  | 证书输出路径              |

### 高级示例

```bash
# 签发带自定义 SAN（DNS 和 IP）的证书
./cert.yml -e cn=myservice \
  -e '{"san":["DNS:myservice.local","DNS:myservice","IP:10.10.10.10"]}'

# 签发自定义有效期（10 年）的证书
./cert.yml -e cn=shortlived -e expire=3650d

# 签发到自定义路径
./cert.yml -e cn=custom \
  -e key=/tmp/custom.key \
  -e crt=/tmp/custom.crt

# 签发带自定义组织的证书
./cert.yml -e cn=external \
  -e org="My Company" \
  -e unit="IT Department"
```

### 使用场景

**PostgreSQL 客户端证书**

用于 SSL 客户端认证（`pg_hba.conf` 中的 `cert` 认证方式）：

```bash
# 为 DBA 用户签发证书
./cert.yml -e cn=dbuser_dba

# 复制到客户端机器
scp files/pki/misc/dbuser_dba.{key,crt} user@client:~/.postgresql/
scp files/pki/ca/ca.crt user@client:~/.postgresql/root.crt

# 使用客户端证书连接
psql "host=pg-test port=5432 dbname=postgres user=dbuser_dba sslmode=verify-full sslcert=~/.postgresql/dbuser_dba.crt sslkey=~/.postgresql/dbuser_dba.key sslrootcert=~/.postgresql/root.crt"
```

**服务间 TLS**

用于需要双向 TLS 的内部服务：

```bash
./cert.yml -e cn=myapp -e '{"san":["DNS:myapp.service.local","IP:10.10.10.50"]}'
```


----------------

## 信任 CA 证书

在客户端机器上信任自签名 CA：

### Linux (Debian/Ubuntu)

```bash
sudo cp files/pki/ca/ca.crt /usr/local/share/ca-certificates/pigsty-ca.crt
sudo update-ca-certificates
```

### Linux (RHEL/Rocky/Alma)

```bash
sudo cp files/pki/ca/ca.crt /etc/pki/ca-trust/source/anchors/pigsty-ca.crt
sudo update-ca-trust
```

### macOS

```bash
sudo security add-trusted-cert -d -r trustRoot \
  -k /Library/Keychains/System.keychain files/pki/ca/ca.crt
```

### Windows

```powershell
Import-Certificate -FilePath files\pki\ca\ca.crt -CertStoreLocation Cert:\LocalMachine\Root
```

### 从 Nginx 下载

CA 证书也可通过 Nginx 在 `http://<infra_ip>/ca.crt` 获取：

```bash
curl -o ca.crt http://10.10.10.10/ca.crt
```


----------------

## Let's Encrypt

对于公网服务，您可以通过 Certbot 使用 Let's Encrypt 的真实证书。

### 前置条件

- 拥有公网域名
- DNS 记录指向服务器的公网 IP
- Nginx 已正确配置
- 80 和 443 端口可访问


### 第一步：域名配置

在 `infra_portal` 中配置服务域名：

```yaml
infra_portal:
  home: { domain: pigsty.cc }
  grafana: { domain: g.pigsty.cc, endpoint: "${admin_ip}:3000", websocket: true }
  prometheus: { domain: p.pigsty.cc, endpoint: "${admin_ip}:8428" }
  alertmanager: { domain: a.pigsty.cc, endpoint: "${admin_ip}:9059" }
```


### 第二步：DNS 配置

通过 A 记录将所有域名指向服务器的公网 IP：

```bash
nslookup g.pigsty.cc
dig +short g.pigsty.cc
```


### 第三步：申请证书

**交互式方式：**

```bash
certbot --nginx -d pigsty.cc -d g.pigsty.cc -d p.pigsty.cc -d a.pigsty.cc
```

**非交互式方式：**

```bash
certbot --nginx --agree-tos --email admin@pigsty.cc -n \
  -d pigsty.cc -d g.pigsty.cc -d p.pigsty.cc -d a.pigsty.cc
```


### 第四步：Nginx 配置

在 portal 条目中添加 `certbot: true` 参数，然后重新生成配置：

```bash
./infra.yml -t nginx_config,nginx_launch
```


### 第五步：自动续期

测试续期（预演模式）：

```bash
certbot renew --dry-run
```

设置 cron 定时任务（每月 1 日凌晨 2 点）：

```bash
0 2 1 * * certbot renew --quiet
```

或启用 systemd 定时器：

```bash
systemctl enable certbot.timer
```


----------------

## 管理命令

### Certbot 命令

| 命令                                             | 说明         |
|--------------------------------------------------|--------------|
| `certbot certificates`                           | 列出所有证书 |
| `certbot renew --cert-name domain.com`           | 续期指定证书 |
| `certbot delete --cert-name domain.com`          | 删除证书     |
| `certbot revoke --cert-path /path/to/cert.pem`   | 吊销证书     |

### OpenSSL 命令

```bash
# 查看证书详情
openssl x509 -in files/pki/ca/ca.crt -text -noout

# 查看证书过期时间
openssl x509 -in files/pki/pgsql/pg-meta-1.crt -enddate -noout

# 验证证书是否由 CA 签发
openssl verify -CAfile files/pki/ca/ca.crt files/pki/pgsql/pg-meta-1.crt

# 检查证书链
openssl s_client -connect 10.10.10.10:5432 -starttls postgres </dev/null
```


----------------

## 故障排查

| 问题        | 解决方案                              |
|-----------|-----------------------------------|
| 证书过期      | 重新运行 playbook 重新生成，或使用 `cert.yml` |
| CA 不被信任   | 在客户端安装 CA 证书（参见信任 CA 章节）          |
| 域名无法访问    | 验证 DNS 传播是否完成                     |
| 端口 80 被阻止 | 确保 Let's Encrypt 验证时端口 80 开放      |
| 请求频率限制    | 避免短时间内多次申请 Let's Encrypt 证书       |
| 权限被拒绝     | 检查文件权限（密钥：0600，证书：0644）           |


----------------

## 最佳实践

- **备份 CA 密钥**：将 `files/pki/ca/ca.key` 安全地离线存储
- **使用适当的有效期**：nginx 用短期（浏览器兼容），内部服务用长期
- **轮换证书**：定期重新运行 playbook 刷新证书
- **监控过期**：设置证书过期告警
- **公网用 Let's Encrypt**：内部用自签名，公网服务用真实证书
- **记录配置**：跟踪哪些服务使用哪些证书

---
title: CA 与证书
weight: 3107
description: 管理 Pigsty 自签名 CA、服务证书与面向公网的 Certbot 证书。
icon: fa-solid fa-shield-halved
categories: [任务]
---

Pigsty 默认在管理节点维护一套自签名证书颁发机构（CA），为 PostgreSQL、Patroni、etcd、Silo、Nginx 和其他内部服务签发证书。面向公网的 Nginx 入口可以按 `infra_portal` 配置改用 Certbot/Let's Encrypt 证书。

> [!CAUTION] 保护 CA 私钥
> `files/pki/ca/ca.key` 是整个部署的信任根私钥。不要打印、提交、上传或通过不受保护的渠道传输它；应将它与 `ca.crt` 成对加密备份，并严格限制读权限。

--------

## 自签名 CA

`infra.yml` 的 `ca` 阶段在 **执行 Ansible 的管理节点本地** 创建或复用 CA，不是在远端 Infra 节点生成私钥。默认路径如下：

```text
files/pki/
├── ca/                       # CA 私钥、证书与 OpenSSL CA 状态
│   ├── ca.key
│   └── ca.crt
├── csr/                      # 证书签名请求
├── misc/                     # cert.yml 签发的通用证书
├── etcd/
├── infra/
├── kafka/
├── minio/                    # MINIO 模块（Silo）证书
├── mongo/
├── mysql/
├── nginx/
└── pgsql/
```

核心默认值与 v4.5.0 角色一致：

| 参数                    | 默认值         | 含义                       |
|:----------------------|:------------|:-------------------------|
| `ca_create`           | `true`      | `ca.key` 缺失时是否允许创建       |
| `ca_cn`               | `pigsty-ca` | CA 证书的 Common Name       |
| `cert_validity`       | `7300d`     | 一般内部服务/客户端证书的默认有效期（20 年） |
| `nginx_cert_validity` | `397d`      | Nginx 自签名 HTTPS 证书有效期    |
{.full-width}

CA 证书在角色中固定为 `36500d`（约 100 年）。这些长期证书适用于受控内部信任域，不代表它们会被公网浏览器信任；客户端仍需显式信任 `ca.crt`。公网入口应使用公开受信 CA 签发的证书。

初始化本地 CA 阶段：

```bash
./infra.yml -t ca
```

实际执行 `./infra.yml -t ca` 会在缺失时创建密钥或证书，属于 PKI 状态变更；执行前应确认管理节点、配置与现有 CA 备份。

--------

## 使用外部 CA

如需复用企业 CA：

1. 在 `pigsty.yml` 设置 `ca_create: false`。
2. 在管理节点预先放置匹配的一对 `files/pki/ca/ca.key` 与 `files/pki/ca/ca.crt`。
3. 设置目录/文件权限，并用公钥摘要确认私钥与证书匹配。

```bash
chmod 700 files/pki/ca
chmod 600 files/pki/ca/ca.key
chmod 644 files/pki/ca/ca.crt

# 两条命令输出的公钥摘要应一致；不会输出私钥内容
openssl pkey -in files/pki/ca/ca.key -pubout -outform PEM | openssl sha256
openssl x509 -in files/pki/ca/ca.crt -pubkey -noout | openssl sha256
```

`ca_create: false` 只阻止在私钥缺失时自动生成新私钥。如果 `ca.key` 存在但 `ca.crt` 缺失，角色仍会用该私钥重新生成一个自签名 CA 证书；因此必须成对恢复两者，不要依赖自动补齐证书。

执行 CA 阶段前，应核对将要使用的文件、现有 CA 备份与管理节点。

--------

## 备份与恢复 CA

至少保留以下内容：

- `files/pki/ca/ca.key` 与 `ca.crt`
- `ca.srl`、`index.txt`、CRL 等 CA 状态文件（若已用于签发/撤销管理）
- 备份时间、CA 证书 SHA-256 指纹与恢复说明

```bash
# 只查看公开 CA 证书的标识与指纹
openssl x509 -in files/pki/ca/ca.crt -noout -subject -issuer -dates -fingerprint -sha256
```

备份必须加密并保存到受控的离线介质或密钥管理系统；不要留下未加密的 tar 包。恢复时先放到隔离临时目录，核对文件数量、类型、权限、公钥匹配与证书指纹，再替换目标文件。

丢失 `ca.key` **不会让已签发证书立刻无法验证**：只要客户端仍信任 `ca.crt`，既有证书可继续验证到失效或撤销。但您将无法用原 CA 签发、续发或撤销证书，通常需要建立新 CA、重新签发全部证书并滚动更新信任链。

--------

## 使用 `cert.yml` 签发证书

[`cert.yml`](https://github.com/pgsty/pigsty/blob/main/cert.yml) 只在管理节点本地运行，使用 Pigsty CA 签发通用证书。请显式传入 `cn`，避免使用脚本中的通用默认值：

```bash
./cert.yml -e cn=dbuser_dba
```

默认输出为：

```text
files/pki/misc/<cn>.key   # 0600
files/pki/misc/<cn>.crt   # 0600
files/pki/csr/<cn>.csr
```

| 参数       | 默认值                             | 说明                        |
|:---------|:--------------------------------|:--------------------------|
| `cn`     | `pigsty`                        | Common Name；实际使用时应显式指定    |
| `san`    | `[DNS:localhost, IP:127.0.0.1]` | Subject Alternative Names |
| `org`    | `pigsty`                        | Organization              |
| `unit`   | `pigsty`                        | Organizational Unit       |
| `expire` | `7300d`                         | 有效期                       |
| `key`    | `files/pki/misc/<cn>.key`       | 私钥输出路径                    |
| `crt`    | `files/pki/misc/<cn>.crt`       | 证书输出路径                    |
{.full-width}

高级示例：

```bash
# 签发带 DNS/IP SAN 的证书，SAN 必须使用 JSON 列表传入
./cert.yml -e cn=myservice \
  -e '{"san":["DNS:myservice.local","DNS:myservice","IP:10.10.10.50"]}'

# 签发一年期证书
./cert.yml -e cn=myservice \
  -e '{"san":["DNS:myservice.local","DNS:myservice","IP:10.10.10.50"]}' \
  -e expire=365d

# 自定义 key/crt 时必须同时给出两者
./cert.yml -e cn=custom \
  -e key=/secure/path/custom.key \
  -e crt=/secure/path/custom.crt
```

签发后验证证书，不要查看或复制私钥内容：

```bash
openssl x509 -in files/pki/misc/myservice.crt -noout -subject -issuer -dates -ext subjectAltName
openssl verify -CAfile files/pki/ca/ca.crt files/pki/misc/myservice.crt
```

PostgreSQL 客户端证书的 `cn` 必须与 HBA/cert 认证预期的数据库角色一致。将证书、私钥与根证书安装到客户端时，私钥应为 `0600`，且连接串使用 `sslmode=verify-full` 时，目标主机名必须出现在服务器证书 SAN 中。

--------

## 信任 CA 证书

仅分发公开的 `ca.crt`，绝不分发 `ca.key`。安装前先通过独立可信渠道核对 SHA-256 指纹。

### Debian / Ubuntu

```bash
sudo cp ca.crt /usr/local/share/ca-certificates/pigsty-ca.crt
sudo update-ca-certificates
```

### RHEL / Rocky / AlmaLinux

```bash
sudo cp ca.crt /etc/pki/ca-trust/source/anchors/pigsty-ca.crt
sudo update-ca-trust
```

### macOS

```bash
sudo security add-trusted-cert -d -r trustRoot \
  -k /Library/Keychains/System.keychain ca.crt
```

### Windows（管理员 PowerShell）

```powershell
Import-Certificate -FilePath .\ca.crt -CertStoreLocation Cert:\LocalMachine\Root
```

Infra Nginx 默认可在 `http://<infra_ip>/ca.crt` 提供公开 CA 证书。下载后仍应核对指纹；HTTP 传输本身不能证明证书真实性。

--------

## Nginx 与 Let's Encrypt

每个 `infra_portal` 条目都可以指定 `certbot` 证书名称。Pigsty 的 `/etc/nginx/sign-cert` 使用 Certbot `webroot` 模式，聚合同一证书名下的 `domain` 与 `domains`，签发后由 `/etc/nginx/link-cert` 将证书链接到 Nginx。

前置条件：

- 公网 DNS A/AAAA 记录准确指向目标 Infra 节点。
- 公网可访问 HTTP-01 所需的 80 端口；Nginx 已提供 ACME webroot。
- `certbot_email` 是有效邮箱，Certbot 软件包已安装。
- `infra_portal` 的域名、额外域名与证书名准确无误。

```yaml
certbot_email: dba@example.com
infra_portal:
  home:
    domain: example.com
    domains: [www.example.com]
    certbot: example.com
  grafana:
    domain: grafana.example.com
    endpoint: "${admin_ip}:3000"
    websocket: true
    certbot: grafana.example.com
```

更新 Nginx 配置并签发证书：

```bash
dig +short example.com
./infra.yml -l infra -t nginx_config,nginx_launch

./infra.yml -l infra -t nginx_certbot,nginx_reload -e certbot_sign=true
```

> [!WARNING] 必须单独验证签发结果
> v4.5.0 的 `nginx_certbot` 任务设置了 `ignore_errors: true`。Playbook 继续执行或总体成功不代表证书已签发；必须检查 Certbot 状态、证书文件、Nginx 配置和真实 TLS 握手。

```bash
certbot certificates
test -r /etc/letsencrypt/live/example.com/fullchain.pem
nginx -t
openssl s_client -connect example.com:443 -servername example.com </dev/null
```

续期调度由所用发行版的 Certbot 软件包决定，不要在未检查现有 timer/cron 前重复添加任务：

```bash
systemctl list-timers --all | grep -i certbot
certbot renew --dry-run
```

Certbot 更新磁盘上的证书后，Nginx 还需要 reload 才会加载新证书。应配置并验证续期 deploy hook（例如 `systemctl reload nginx`），或建立等价的受管流程；完成一次真实或 staging 续期演练后再视为自动续期可用。

--------

## 故障排查与验收

| 现象                 | 核对项                                                       |
|:-------------------|:----------------------------------------------------------|
| 浏览器不信任内部证书         | 客户端是否安装了正确 `ca.crt`；主机名是否在 SAN；系统时间是否准确                   |
| `verify-full` 失败   | 连接主机名、证书 SAN、证书链与根证书是否一致                                  |
| Certbot HTTP-01 失败 | DNS、80 端口、Nginx ACME webroot、代理/CDN 与速率限制                 |
| Playbook 成功但仍是旧证书  | `nginx_certbot` 错误是否被忽略；`link-cert` 链接与 Nginx reload 是否完成 |
| 权限错误               | 私钥 `0600`（部署后的 Nginx key 为 `0640 root:nginx`）；证书/目录属主是否正确 |
| CA 轮换后服务互信失败       | 是否按客户端信任 → 服务证书 → 服务重载的顺序完成滚动更新                           |
{.full-width}

最终验收应分别证明：证书内容与 SAN 正确、链验证成功、服务实际加载新证书、目标客户端信任、续期任务存在且 dry-run 成功。生成了文件或 playbook 返回成功，都不能替代这些检查。

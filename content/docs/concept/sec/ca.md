---
title: 本地 CA
weight: 231
description: Pigsty 带有一套自签名的 CA 公私钥基础设施，用于签发 SSL 证书，加密网络通信流量。
icon: fa-solid fa-bank
module: [INFRA]
categories: [概念]
---

Pigsty 部署默认启用了一些安全最佳实践：使用 SSL 加密网络流量，使用 HTTPS 加密 Web 界面。

为了实现这一功能，Pigsty 内置了本地自签名的 CA ，用于签发 SSL 证书，加密网络通信流量。

在默认情况下，SSL 与 HTTPS 是启用，但不强制使用的。对于有着较高安全要求的环境，您可以强制使用 SSL 与 HTTPS。


---------------

## 本地CA

Pigsty 默认会在初始化时，在 [**ADMIN节点**](/docs/concept/arch/node#admin节点) 本机 Pigsty 源码目录（`~/pigsty`）中生成一个自签名的 CA。
当您需要使用 SSL，HTTPS，数字签名，签发数据库客户端证书，高级安全特性时，可以使用此 CA。

每一套 Pigsty 部署使用的 CA 都是唯一的，不同的 Pigsty 部署之间的 CA 是不相互信任的。

本地 CA 由两个文件组成，默认放置于 **`files/pki/ca`** 目录中：

- **`ca.crt`**：自签名的 CA 根证书，应当分发安装至到所有纳管节点，用于证书验证。
- **`ca.key`**：CA 私钥，用于签发证书，验证 CA 身份，应当妥善保管，避免泄漏！

{{% alert title="请保护好CA私钥文件" color="warning" %}}
请妥善保管 CA 私钥文件，不要遗失，不要泄漏。我们建议您在完成 Pigsty 安装后及时备份此文件。
{{% /alert %}}


---------------

## 使用现有CA

如果您本身已经有 CA 公私钥基础设施，Pigsty 也可以配置为使用现有 CA 。 

在执行部署前，将您的 CA 公钥与私钥文件放置于 **`files/pki/ca`** 目录中即可，并使用以下名称。

```bash
files/pki/ca/ca.key     # 核心的 CA 私钥文件，必须存在，如果不存在，默认会重新随机生成一个
files/pki/ca/ca.crt     # 如果没有证书文件，Pigsty会自动重新从 CA 私钥生成新的根证书文件
```

当 Pigsty 执行 [**`deploy.yml`**](/docs/infra/#deployyml) 与 [**`infra.yml`**](/docs/infra/#infrayml) 剧本进行安装时，如果发现 `files/pki/ca` 目录中的 `ca.key` 私钥文件存在，则会使用已有的 CA 。`ca.crt` 文件可以从 `ca.key` 私钥文件生成，所以如果没有证书文件，Pigsty 会自动重新从 CA 私钥生成新的根证书文件。


{{% alert title="使用现有CA时请注意" color="secondary" %}}
您可以将 [**`ca_method`**](/docs/infra/param#ca_method) 参数配置为 `copy`，确保 Pigsty 找不到本地 CA 时报错中止，而不是自行重新生成新的自签名 CA。
{{% /alert %}}


---------------

## 信任CA

在 Pigsty 安装过程中，**`ca.crt`** 会在 [**`node.yml`**](/docs/node/#nodeyml) 剧本的 **`node_ca`** 任务中，被分发至所有节点上的 **`/etc/pki/ca.crt`** 路径下。

EL系操作系统与 Debian系操作系统默认信任的 CA 根证书路径不同，因此分发的路径与更新的方式也不同。

{{< tabpane persist="disabled" >}}
{{% tab header="信任CA证书" disabled=true /%}}

{{< tab header="EL" lang="Bash" >}}
rm -rf /etc/pki/ca-trust/source/anchors/ca.crt
ln -s /etc/pki/ca.crt /etc/pki/ca-trust/source/anchors/ca.crt
/bin/update-ca-trust
{{% /tab %}}

{{< tab header="Debian / Ubuntu" lang="Bash" >}}
rm -rf /usr/local/share/ca-certificates/ca.crt
ln -s /etc/pki/ca.crt /usr/local/share/ca-certificates/ca.crt
/usr/sbin/update-ca-certificates
{{< /tab >}}

{{< /tabpane >}}

Pigsty 默认会为基础设施节点上的 Web 系统使用的域名签发 HTTPS 证书，您可以 HTTPS 访问 Pigsty 的 Web 系统。
如果您希望在客户端电脑上浏览器访问时不要弹出“不受信任的 CA 证书”信息，可以将 `ca.crt` 分发至客户端电脑的信任证书目录中。

您可以双击 `ca.crt` 文件将其加入系统钥匙串，例如在 MacOS 系统中，需要打开“钥匙串访问” 搜索 `pigsty-ca` 然后“信任”此根证书


---------------

## 查看证书内容

使用以下命令，可以查阅 Pigsty CA 证书的内容

```bash
openssl x509 -text -in /etc/pki/ca.crt
```

<details><summary>本地 CA 根证书内容样例</summary>

```
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            50:29:e3:60:96:93:f4:85:14:fe:44:81:73:b5:e1:09:2a:a8:5c:0a
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: O=pigsty, OU=ca, CN=pigsty-ca
        Validity
            Not Before: Feb  7 00:56:27 2023 GMT
            Not After : Jan 14 00:56:27 2123 GMT
        Subject: O=pigsty, OU=ca, CN=pigsty-ca
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (4096 bit)
                Modulus:
                    00:c1:41:74:4f:28:c3:3c:2b:13:a2:37:05:87:31:
                    ....
                    e6:bd:69:a5:5b:e3:b4:c0:65:09:6e:84:14:e9:eb:
                    90:f7:61
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Subject Alternative Name: 
                DNS:pigsty-ca
            X509v3 Key Usage: 
                Digital Signature, Certificate Sign, CRL Sign
            X509v3 Basic Constraints: critical
                CA:TRUE, pathlen:1
            X509v3 Subject Key Identifier: 
                C5:F6:23:CE:BA:F3:96:F6:4B:48:A5:B1:CD:D4:FA:2B:BD:6F:A6:9C
    Signature Algorithm: sha256WithRSAEncryption
    Signature Value:
        89:9d:21:35:59:6b:2c:9b:c7:6d:26:5b:a9:49:80:93:81:18:
        ....
        9e:dd:87:88:0d:c4:29:9e
-----BEGIN CERTIFICATE-----
...
cXyWAYcvfPae3YeIDcQpng==
-----END CERTIFICATE-----
```

</details>


---------------

## 签发证书

如果您希望通过客户端证书认证，那么可以使用本地 CA 与 [**`cert.yml`**](https://github.com/pgsty/pigsty/blob/main/cert.yml) 剧本手工签发PostgreSQL 客户端证书。

将证书的 `CN` 字段设置为数据库用户名即可：

```bash
./cert.yml -e cn=dbuser_dba
./cert.yml -e cn=dbuser_monitor
```

签发的证书会默认生成在 `files/pki/misc/<cn>.{key,crt}` 路径下。

---
title: 使用方法
weight: 3610
description: 快速上手，如何上手使用 MinIO ？如何可靠地接入 MinIO？如何使用 mc / rclone 客户端工具？
icon: fa-solid fa-bell-concierge
module: [MINIO]
categories: [参考]
---

当您 [配置](/docs/minio/config/) 并执行 [剧本](/docs/minio/playbook/) 部署 MinIO 集群后，可以参考这里的说明开始使用与接入 MinIO 集群。



--------

## 部署集群

在 Pigsty 中部署一个开箱即用的 单机单盘 MinIO 实例非常简单：首先在 [配置清单](/docs/setup/config/) 中定义一套 MinIO 集群：

```yaml
minio: { hosts: { 10.10.10.10: { minio_seq: 1 } }, vars: { minio_cluster: minio } }
```

然后，针对定义的分组（这里为 `minio` ）执行 Pigsty 提供的 [`minio.yml`](/docs/minio/playbook/) 剧本即可：

```bash
./minio.yml -l minio
```

请注意在 [`deploy.yml`](/docs/setup/playbook#部署剧本) 中，事先定义好的 MinIO 集群将自动创建，无需手动再次执行 `minio.yml` 剧本。

如果您计划部署一个生产等级的大规模多节点 MinIO 集群，我们强烈建议您通读 Pigsty MinIO [配置文档](/docs/minio/config/) 与 MinIO [官方文档](https://min.io/docs/minio/linux/operations/concepts.html) 后再进行。



--------

## 接入集群

请注意：MinIO 服务必须通过域名与 HTTPS 访问，所以请务必确保： MinIO 服务域名（默认为 `sss.pigsty`） 正确指向 MinIO 服务器节点

1. 您可以在 [`node_etc_hosts`](/docs/node/param#node_etc_hosts) 中添加静态解析记录，或者手工修改 `/etc/hosts` 文件
2. 您可以在内网的 DNS 服务器上添加一条记录，如果已经有了现成的 DNS 服务
3. 如果您启用了 Infra 节点上的 DNS 服务器，可以在 [`dns_records`](/docs/infra/param#dns_records) 中添加记录

对于生产环境访问 MinIO，通常我们建议使用第一种方式：静态 DNS 解析记录，避免 MinIO 对于 DNS 的额外依赖。

您应当将 MinIO 服务域名指向 MinIO 服务器节点的 IP 地址与服务端口，或者负载均衡器的 IP 地址与服务端口。
Pigsty 默认使用的 MinIO 服务域名是 `sss.pigsty`，在单机部署时默认指向本机，在 `9000` 端口提供服务。

在一些例子中，MinIO 集群上还部署了 HAProxy 实例对外暴露服务，在这种情况下，`9002` 是模板中使用的服务端口。







--------

## 添加别名

要使用 `mcli` 客户端访问 `minio` 服务器集群，首先要配置服务器的别名（`alias`）：

```bash
mcli alias ls  # 列出 minio 别名（默认使用sss）
mcli alias set sss https://sss.pigsty:9000 minioadmin S3User.MinIO            # root 用户
mcli alias set sss https://sss.pigsty:9002 minioadmin S3User.MinIO            # root 用户，使用负载均衡器 9002 端口

mcli alias set pgbackrest https://sss.pigsty:9000 pgbackrest S3User.Backup    # 使用备份用户
```

在管理节点的管理用户上，已经默认配置了名为 `sss` 的 MinIO 别名，可以直接使用。

MinIO 客户端工具 `mcli` 的完整功能参考，请查阅文档： [MinIO 客户端](https://min.io/docs/minio/linux/reference/minio-mc.html)。

{{% alert title="注意：请使用您实际配置的密码" color="warning" %}}
上述示例中的密码 `S3User.MinIO` 是 Pigsty 的默认值。如果您在部署时修改了 [`minio_secret_key`](/docs/minio/param#minio_secret_key)，请使用您实际配置的密码。
{{% /alert %}}



----------------

## 用户管理

使用 `mcli` 可以管理 MinIO 中的业务用户，例如这里我们可以使用命令行创建两个业务用户：

```bash
mcli admin user list sss     # 列出 sss 上的所有用户
set +o history # 在历史记录中隐藏密码并创建 minio 用户
mcli admin user add sss dba S3User.DBA
mcli admin user add sss pgbackrest S3User.Backup
set -o history 
```


----------------

## 存储桶管理

**您可以对MinIO中的存储桶进行增删改查**：

```bash
mcli ls sss/                         # 列出别名 'sss' 的所有桶
mcli mb --ignore-existing sss/hello  # 创建名为 'hello' 的桶
mcli rb --force sss/hello            # 强制删除 'hello' 桶
```


----------------

## 对象管理

**您也可以对存储桶内的对象进行增删改查**，详情请参考官方文档：[对象管理](https://min.io/docs/minio/linux/administration/object-management.html)

```bash
mcli cp /www/pigsty/* sss/infra/     # 将本地软件源的内容上传到 MinIO 的 infra 桶中 
mcli cp sss/infra/plugins.tgz /tmp/  # 从 minio 下载文件到本地
mcli ls sss/infra                    # 列出 infra 桶中的所有文件
mcli rm sss/infra/plugins.tgz        # 删除 infra 桶中的特定文件  
mcli cat sss/infra/repo_complete     # 查看 infra 桶中的文件内容
```


----------------

## 使用rclone

Pigsty 仓库中提供了 [rclone](https://rclone.org/)， 一个方便的多云对象存储客户端，您可以使用它来访问 MinIO 服务。

```bash
yum install rclone;  # EL 系列系统
apt install rclone;  # Debian/Ubuntu 系统

mkdir -p ~/.config/rclone/;
tee ~/.config/rclone/rclone.conf > /dev/null <<EOF
[sss]
type = s3
access_key_id = minioadmin
secret_access_key = S3User.MinIO
endpoint = https://sss.pigsty:9000
EOF

rclone ls sss:/
```

{{% alert title="注意：HTTPS 与证书信任" color="warning" %}}
如果 MinIO 使用 HTTPS（默认配置），您需要确保客户端信任 Pigsty 的 CA 证书（`/etc/pki/ca.crt`），或者在 rclone 配置中添加 `no_check_certificate = true` 来跳过证书验证（不建议在生产环境使用）。
{{% /alert %}}


----------------

## 配置备份仓库

在 Pigsty 中，MinIO 默认的用例是作为 pgBackRest 的备份存储仓库。
当您修改 [`pgbackrest_method`](/docs/pgsql/param#pgbackrest_method) 为 `minio` 时，PGSQL 模块会自动将备份存储仓库切换到 MinIO 上。

```yaml
pgbackrest_method: local          # pgbackrest repo method: local,minio,[user-defined...]
pgbackrest_repo:                  # pgbackrest repo: https://pgbackrest.org/configuration.html#section-repository
  local:                          # default pgbackrest repo with local posix fs
    path: /pg/backup              # local backup directory, `/pg/backup` by default
    retention_full_type: count    # retention full backups by count
    retention_full: 2             # keep 2, at most 3 full backup when using local fs repo
  minio:                          # optional minio repo for pgbackrest
    type: s3                      # minio is s3-compatible, so s3 is used
    s3_endpoint: sss.pigsty       # minio endpoint domain name, `sss.pigsty` by default
    s3_region: us-east-1          # minio region, us-east-1 by default, useless for minio
    s3_bucket: pgsql              # minio bucket name, `pgsql` by default
    s3_key: pgbackrest            # minio user access key for pgbackrest
    s3_key_secret: S3User.Backup  # minio user secret key for pgbackrest
    s3_uri_style: path            # use path style uri for minio rather than host style
    path: /pgbackrest             # minio backup path, default is `/pgbackrest`
    storage_port: 9000            # minio port, 9000 by default
    storage_ca_file: /pg/cert/ca.crt  # minio ca file path, `/pg/cert/ca.crt` by default
    bundle: y                     # bundle small files into a single file
    cipher_type: aes-256-cbc      # enable AES encryption for remote backup repo
    cipher_pass: pgBackRest       # AES encryption password, default is 'pgBackRest'
    retention_full_type: time     # retention full backup by time on minio repo
    retention_full: 14            # keep full backup for last 14 days
```

请注意，如果您使用了多节点部署的 MinIO 集群，并通过负载均衡器对外提供服务，您需要相应地修改这里的 `s3_endpoint` 与 `storage_port` 参数。

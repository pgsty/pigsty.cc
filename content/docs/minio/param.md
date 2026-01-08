---
title: 参数列表
weight: 3630
description: MinIO 模块提供了 21 个相关配置参数，用于定制所需的 MinIO 集群。
icon: fa-solid fa-terminal
module: [MINIO]
categories: [参考]
---

MinIO 模块的参数列表，共有 **21** 个参数，分为两个部分：

- [**`MINIO`**](#minio)：18 个参数，用于 MinIO 集群的部署与配置
- [**`MINIO_REMOVE`**](#minio_remove)：3 个参数，控制 MinIO 集群的移除

{{% alert title="架构变化：Pigsty v3.6+" color="info" %}}
自 Pigsty v3.6 起，`minio.yml` 剧本不再包含移除功能，移除相关参数已迁移至独立的 `minio_remove` 角色和 `minio-rm.yml` 剧本。
{{% /alert %}}


----------------

## 参数概览

[`MINIO`](#minio) 参数组用于 MinIO 集群的部署与配置，包括身份标识、存储路径、端口、认证凭据以及存储桶和用户的置备。

| 参数                                      |    类型    |  级别   | 说明                              |
|:----------------------------------------|:--------:|:-----:|:--------------------------------|
| [`minio_seq`](#minio_seq)               |  `int`   |  `I`  | minio 实例标识符，必填                  |
| [`minio_cluster`](#minio_cluster)       | `string` |  `C`  | minio 集群名称，默认为 minio            |
| [`minio_user`](#minio_user)             | `username` | `C` | minio 操作系统用户，默认为 `minio`        |
| [`minio_https`](#minio_https)           |  `bool`  | `G/C` | 是否为 MinIO 启用 HTTPS？默认为 true     |
| [`minio_node`](#minio_node)             | `string` |  `C`  | minio 节点名模式                     |
| [`minio_data`](#minio_data)             |  `path`  |  `C`  | minio 数据目录，使用 `{x...y}` 指定多个磁盘  |
| [`minio_volumes`](#minio_volumes)       | `string` |  `C`  | minio 核心参数，指定成员节点与磁盘，默认不指定      |
| [`minio_domain`](#minio_domain)         | `string` |  `G`  | minio 外部域名，默认为 `sss.pigsty`     |
| [`minio_port`](#minio_port)             |  `port`  |  `C`  | minio 服务端口，默认为 9000             |
| [`minio_admin_port`](#minio_admin_port) |  `port`  |  `C`  | minio 控制台端口，默认为 9001            |
| [`minio_access_key`](#minio_access_key) | `username` | `C` | 根访问密钥，默认为 `minioadmin`          |
| [`minio_secret_key`](#minio_secret_key) | `password` | `C` | 根密钥，默认为 `S3User.MinIO`          |
| [`minio_extra_vars`](#minio_extra_vars) | `string` |  `C`  | minio 服务器的额外环境变量                |
| [`minio_provision`](#minio_provision)   |  `bool`  | `G/C` | 是否执行 minio 资源置备任务？默认为 true      |
| [`minio_alias`](#minio_alias)           | `string` |  `G`  | minio 部署的客户端别名                  |
| [`minio_endpoint`](#minio_endpoint)     | `string` |  `C`  | minio 部署的客户端别名对应的端点             |
| [`minio_buckets`](#minio_buckets)       | `bucket[]` | `C` | 待创建的 minio 存储桶列表                |
| [`minio_users`](#minio_users)           | `user[]` |  `C`  | 待创建的 minio 用户列表                 |

[`MINIO_REMOVE`](#minio_remove) 参数组控制 MinIO 集群的移除行为，包括防误删保险、数据清理以及软件包卸载。

| 参数                                    |   类型   |   级别    | 说明                        |
|:--------------------------------------|:------:|:-------:|:--------------------------|
| [`minio_safeguard`](#minio_safeguard) | `bool` | `G/C/A` | 防止意外删除？默认为 false          |
| [`minio_rm_data`](#minio_rm_data)     | `bool` | `G/C/A` | 移除时是否删除 minio 数据？默认为 true |
| [`minio_rm_pkg`](#minio_rm_pkg)       | `bool` | `G/C/A` | 移除时是否卸载 minio 软件包？默认为 false |

其中，`minio_volumes` 与 `minio_endpoint` 为自动生成的参数，但您可以显式覆盖指定这两个参数。



--------

## 默认参数

`MINIO`：18 个参数，定义于 [`roles/minio/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/minio/defaults/main.yml)

```yaml
#-----------------------------------------------------------------
# MINIO
#-----------------------------------------------------------------
#minio_seq: 1                     # minio 实例标识符，必填
minio_cluster: minio              # minio 集群名称，默认为 minio
minio_user: minio                 # minio 操作系统用户，默认为 `minio`
minio_https: true                 # 是否为 MinIO 启用 HTTPS？默认为 true
minio_node: '${minio_cluster}-${minio_seq}.pigsty' # minio 节点名模式
minio_data: '/data/minio'         # minio 数据目录，使用 `{x...y}` 指定多个磁盘
#minio_volumes:                   # minio 核心参数，如果未指定，则使用拼接生成的默认值
minio_domain: sss.pigsty          # minio 外部域名，默认为 `sss.pigsty`
minio_port: 9000                  # minio 服务端口，默认为 9000
minio_admin_port: 9001            # minio 控制台端口，默认为 9001
minio_access_key: minioadmin      # 根访问密钥，默认为 `minioadmin`
minio_secret_key: S3User.MinIO    # 根密钥，默认为 `S3User.MinIO`
minio_extra_vars: ''              # minio 服务器的额外环境变量
minio_provision: true             # 是否执行 minio 资源置备任务？
minio_alias: sss                  # minio 部署的客户端别名
#minio_endpoint: https://sss.pigsty:9000 # minio 别名对应的接入点，如果未指定，则使用拼接生成的默认值
minio_buckets:                    # 待创建的 minio 存储桶列表
  - { name: pgsql }
  - { name: meta ,versioning: true }
  - { name: data }
minio_users:                      # 待创建的 minio 用户列表
  - { access_key: pgbackrest  ,secret_key: S3User.Backup ,policy: pgsql }
  - { access_key: s3user_meta ,secret_key: S3User.Meta   ,policy: meta  }
  - { access_key: s3user_data ,secret_key: S3User.Data   ,policy: data  }
```

`MINIO_REMOVE`：3 个参数，定义于 [`roles/minio_remove/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/minio_remove/defaults/main.yml)

```yaml
#-----------------------------------------------------------------
# MINIO_REMOVE
#-----------------------------------------------------------------
minio_safeguard: false            # 防止意外删除？默认为 false
minio_rm_data: true               # 移除时是否删除 minio 数据？默认为 true
minio_rm_pkg: false               # 移除时是否卸载 minio 软件包？默认为 false
```





--------

## `MINIO`

本节包含 [`minio`](https://github.com/pgsty/pigsty/blob/main/roles/minio/defaults/main.yml) 角色的参数，
这些是 [`minio.yml`](/docs/minio/playbook#minioyml) 剧本使用的操作标志参数。


### `minio_seq`

参数名称： `minio_seq`， 类型： `int`， 层次：`I`

MinIO 实例标识符，必需的身份参数。没有默认值，您必须手动分配这些序列号。

通常的最佳实践是，从 1 开始分配，依次加 1，并永远不使用已经分配的序列号。
序列号与集群名称 [`minio_cluster`](#minio_cluster) 一起，唯一标识每一个 MinIO 实例（例如：`minio-1`）。

在多节点部署中，序列号还会用于生成节点名称，写入 `/etc/hosts` 文件中进行静态解析。





--------

### `minio_cluster`

参数名称： `minio_cluster`， 类型： `string`， 层次：`C`

MinIO 集群名称，默认为 `minio`。当部署多个 MinIO 集群时，可以使用此参数进行区分。

集群名称与序列号 [`minio_seq`](#minio_seq) 一起，唯一标识每一个 MinIO 实例。
例如，当集群名为 `minio`，序列号为 `1` 时，实例名称为 `minio-1`。

请注意，Pigsty 默认一套部署中只有一个 MinIO 集群。如果您需要部署多个 MinIO 集群，
需要显式设置 [`minio_alias`](#minio_alias)、[`minio_domain`](#minio_domain)、[`minio_endpoint`](#minio_endpoint) 等参数以避免命名冲突。





--------

### `minio_user`

参数名称： `minio_user`， 类型： `username`， 层次：`C`

MinIO 操作系统用户名，默认为 `minio`。

MinIO 服务将以此用户身份运行，该用户的家目录（默认为 `/home/minio`）中将存储 MinIO 使用的 SSL 证书（位于 `~/.minio/certs/` 目录下）。




--------

### `minio_https`

参数名称： `minio_https`， 类型： `bool`， 层次：`G/C`

是否为 MinIO 服务启用 HTTPS？默认为 `true`，即使用 HTTPS。

请注意，pgBackREST 需要 MinIO 启用 HTTPS 才能正常工作。但如果您不使用 MinIO 进行 PostgreSQL 备份，且不需要使用 HTTPS，可以将此参数设置为 `false`。

启用 HTTPS 后，Pigsty 会自动为 MinIO 服务器签发 SSL 证书，证书包含 [`minio_domain`](#minio_domain) 指定的域名以及各个节点的 IP 地址。




--------

### `minio_node`

参数名称： `minio_node`， 类型： `string`， 层次：`C`

MinIO 节点名称模式，用于[多节点](/docs/minio/config#多机多盘)部署。

默认值为：`${minio_cluster}-${minio_seq}.pigsty`，即以实例名 + `.pigsty` 后缀作为默认的节点名。

在这里指定的域名模式将用于生成节点名，节点名将写入所有 MinIO 节点的 `/etc/hosts` 文件中。





--------

### `minio_data`

参数名称： `minio_data`， 类型： `path`， 层次：`C`

MinIO 数据目录（们），默认值：`/data/minio`，这是[单节点](/docs/minio/config#单机单盘)部署的常见目录。

对于 [多机多盘](/docs/minio/config#多机多盘) 与 [**单机多盘**](/docs/minio/config#单机多盘) 部署，您可以使用 `{x...y}` 的记法来指定多个磁盘。





--------

### `minio_volumes`

参数名称： `minio_volumes`， 类型： `string`， 层次：`C`

MinIO 核心参数，默认不指定留空，留空情况下，该参数会自动使用以下规则拼接生成：

```yaml
minio_volumes: "{% if minio_cluster_size|int > 1 %}https://{{ minio_node|replace('${minio_cluster}', minio_cluster)|replace('${minio_seq}',minio_seq_range) }}:{{ minio_port|default(9000) }}{% endif %}{{ minio_data }}"
```

- 在单机部署（无论是单盘还是多盘）模式下，`minio_volumes` 直接使用 [`minio_data`](#minio_data) 的值，进行单机部署。
- 在多机部署模式下，`minio_volumes` 会使用 `minio_node`, `minio_port`, `minio_data` 参数的值生成多节点的地址，用于多机部署。
- 在多池部署模式下，通常需要您直接指定并覆盖 `minio_volumes` 的值，以指定多个节点池的地址。

指定本参数时，您需要确保使用的参数与 `minio_node`, `minio_port`, `minio_data` 三者匹配。








--------

### `minio_domain`

参数名称： `minio_domain`， 类型： `string`， 层次：`G`

MinIO 服务域名，默认为 `sss.pigsty`。

客户端可以通过此域名访问 MinIO S3 服务。此名称将注册到本地 DNSMASQ，并包含在 SSL 证书的 SAN（Subject Alternative Name）字段中。

建议在 [`node_etc_hosts`](/docs/node/param#node_etc_hosts) 中添加静态解析记录，将此域名指向 MinIO 服务器节点的 IP 地址（单机部署），或负载均衡器的 VIP 地址（多节点部署）。






--------

### `minio_port`

参数名称： `minio_port`， 类型： `port`， 层次：`C`

MinIO 服务端口，默认为 `9000`。

这是 MinIO S3 API 的监听端口，客户端通过此端口访问对象存储服务。在多节点部署中，此端口也用于节点间通信。





--------

### `minio_admin_port`

参数名称： `minio_admin_port`， 类型： `port`， 层次：`C`

MinIO 控制台端口，默认为 `9001`。

这是 MinIO 内置 Web 管理控制台的监听端口。您可以通过 `https://<minio-ip>:9001` 访问 MinIO 的图形化管理界面。

如果希望通过 Nginx 对外暴露 MinIO 控制台，可以将其添加到 [`infra_portal`](/docs/infra/param#infra_portal) 中。请注意，MinIO 控制台需要使用 HTTPS 和 WebSocket。





--------

### `minio_access_key`

参数名称： `minio_access_key`， 类型： `username`， 层次：`C`

根访问用户名（access key），默认为 `minioadmin`。

这是 MinIO 的超级管理员用户名，拥有对所有存储桶和对象的完全访问权限。建议在生产环境中修改此默认值。






--------

### `minio_secret_key`

参数名称： `minio_secret_key`， 类型： `password`， 层次：`C`

根访问密钥（secret key），默认为 `S3User.MinIO`。

这是 MinIO 超级管理员的密码，与 [`minio_access_key`](#minio_access_key) 配合使用。

{{% alert title="安全警告：请务必修改默认密码！" color="danger" %}}
使用默认密码是高危行为！请务必在您的生产环境部署中修改此密码。

提示：执行 `./configure` 或 `./configure -g` 时，会自动修改配置文件模板中的这些默认密码。
{{% /alert %}}








--------

### `minio_extra_vars`

参数名称： `minio_extra_vars`， 类型： `string`， 层次：`C`

MinIO 服务器的额外环境变量。查看 [MinIO Server](https://min.io/docs/minio/linux/reference/minio-server/minio-server.html) 文档以获取完整列表。

默认值为空字符串，您可以使用多行字符串来传递多个环境变量。例如：

```yaml
minio_extra_vars: |
  MINIO_BROWSER_REDIRECT_URL=https://minio.example.com
  MINIO_SERVER_URL=https://s3.example.com
```





--------

### `minio_provision`

参数名称： `minio_provision`， 类型： `bool`， 层次：`G/C`

是否执行 MinIO 资源置备任务？默认为 `true`。

当启用时，Pigsty 将自动创建 [`minio_buckets`](#minio_buckets) 和 [`minio_users`](#minio_users) 中定义的存储桶和用户。
如果您不需要自动置备这些资源，可以将此参数设置为 `false`。




--------

### `minio_alias`

参数名称： `minio_alias`， 类型： `string`， 层次：`G`

本地 MinIO 集群的 MinIO 客户端别名，默认值：`sss`。

此别名将被写入管理节点上管理员用户的 MinIO 客户端配置文件中（`~/.mcli/config.json`），
使您可以直接使用 `mcli <alias>` 命令访问 MinIO 集群，例如 `mcli ls sss/`。

如果部署多个 MinIO 集群，需要为每个集群指定不同的别名以避免冲突。






--------

### `minio_endpoint`

参数名称：`minio_endpoint`， 类型： `string`， 层次：`C`

部署的客户端别名对应的端点，如果指定，这里的 `minio_endpoint` （例如： `https://sss.pigsty:9002`）将会替代默认值，作为写入管理节点 MinIO Alias 的目标端点。

```bash
mcli alias set {{ minio_alias }} {% if minio_endpoint is defined and minio_endpoint != '' %}{{ minio_endpoint }}{% else %}https://{{ minio_domain }}:{{ minio_port }}{% endif %} {{ minio_access_key }} {{ minio_secret_key }}
```

以上 MinIO Alias 会在管理节点上以默认管理用户执行。






--------

### `minio_buckets`

参数名称： `minio_buckets`， 类型： `bucket[]`， 层次：`C`

默认创建的 MinIO 存储桶列表：

```yaml
minio_buckets:
  - { name: pgsql }
  - { name: meta ,versioning: true }
  - { name: data }
```

默认创建三个存储桶，各有不同的用途和策略：

- `pgsql` 存储桶：默认用于 PostgreSQL 的 pgBackREST 备份存储。
- `meta` 存储桶：开放式存储桶，启用了版本控制（versioning），适合存储需要版本管理的重要元数据。
- `data` 存储桶：开放式存储桶，用于其他用途，例如 Supabase 模板可能使用此存储桶存储业务数据。

每个存储桶都会创建一个同名的访问策略，例如 `pgsql` 策略拥有对 `pgsql` 存储桶的所有权限，以此类推。

您还可以在存储桶定义中添加 `lock` 标志，启用对象锁定功能，防止存储桶中的对象被意外删除。






--------

### `minio_users`

参数名称： `minio_users`， 类型： `user[]`， 层次：`C`

要创建的 MinIO 用户列表，默认值：

```yaml
minio_users:
  - { access_key: pgbackrest  ,secret_key: S3User.Backup ,policy: pgsql }
  - { access_key: s3user_meta ,secret_key: S3User.Meta   ,policy: meta  }
  - { access_key: s3user_data ,secret_key: S3User.Data   ,policy: data  }
```

默认配置会创建三个用户，分别对应三个默认存储桶：

- `pgbackrest`：用于 PostgreSQL pgBackREST 备份，拥有 `pgsql` 存储桶的访问权限。
- `s3user_meta`：用于访问 `meta` 存储桶。
- `s3user_data`：用于访问 `data` 存储桶。

{{% alert title="使用默认密码是高危行为！请务必在您的部署中调整这些凭证！" color="danger" %}}

提示：`./configure -g` 会默认修改配置文件模板中的这些密码，如果这些默认密码出现在模版文件中。

{{% /alert %}}




--------

## `MINIO_REMOVE`

本节包含 [`minio_remove`](https://github.com/pgsty/pigsty/blob/main/roles/minio_remove/defaults/main.yml) 角色的参数，
这些是 [`minio-rm.yml`](/docs/minio/playbook#minio-rmyml) 剧本使用的操作标志参数。


### `minio_safeguard`

参数名称： `minio_safeguard`， 类型： `bool`， 层次：`G/C/A`

防止意外删除的保险开关，默认值为 `false`。

如果启用此参数，[`minio-rm.yml`](/docs/minio/playbook/#minio-rmyml) 剧本将中止并拒绝移除 MinIO 集群，从而提供防止意外删除的保护。

建议在生产环境中启用此保险开关，防止误操作导致数据丢失：

```yaml
minio_safeguard: true   # 启用后，minio-rm.yml 将拒绝执行
```




--------

### `minio_rm_data`

参数名称： `minio_rm_data`， 类型： `bool`， 层次：`G/C/A`

移除时是否删除 MinIO 数据？默认值为 `true`。

当启用时，[`minio-rm.yml`](/docs/minio/playbook/#minio-rmyml) 剧本将在集群移除过程中删除 MinIO 数据目录和配置文件。




--------

### `minio_rm_pkg`

参数名称： `minio_rm_pkg`， 类型： `bool`， 层次：`G/C/A`

移除时是否卸载 MinIO 软件包？默认值为 `false`。

当启用时，[`minio-rm.yml`](/docs/minio/playbook/#minio-rmyml) 剧本将在集群移除过程中卸载 MinIO 软件包。默认禁用此选项，以便保留 MinIO 安装供将来可能的使用。



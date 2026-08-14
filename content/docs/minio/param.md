---
title: 参数列表
weight: 3630
description: MINIO 模块提供 22 个公开参数，用于部署、配置与移除 Silo 对象存储集群。
icon: fa-solid fa-terminal
module: [MINIO]
categories: [参考]
---

MINIO 模块共有 **22** 个公开参数，分为两个部分：

- [**`MINIO`**](#minio)：19 个参数，用于部署 Silo 对象存储集群
- [**`MINIO_REMOVE`**](#minio_remove)：3 个参数，控制对象存储集群的移除

{{% alert title="架构变化：Pigsty v3.6+" color="info" %}}
自 Pigsty v3.6 起，`minio.yml` 剧本不再包含移除功能，移除相关参数已迁移至独立的 `minio_remove` 角色和 `minio-rm.yml` 剧本。
{{% /alert %}}


----------------

## 参数概览

[`MINIO`](#minio) 参数组用于配置 Silo 对象存储集群，包括身份、存储路径、端口、认证凭据以及存储桶和用户置备。

| 参数                                      |     类型     |  级别   | 说明                             |
|:----------------------------------------|:----------:|:-----:|:-------------------------------|
| [`minio_type`](#minio_type)             |   `enum`   | `G/C` | 保留的后端选择器，当前只接受 `silo`          |
| [`minio_seq`](#minio_seq)               |   `int`    |  `I`  | minio 实例标识符，必填                 |
| [`minio_cluster`](#minio_cluster)       |  `string`  |  `C`  | 对象存储集群名称，必填                    |
| [`minio_user`](#minio_user)             | `username` |  `C`  | minio 操作系统用户，默认为 `minio`       |
| [`minio_https`](#minio_https)           |   `bool`   | `G/C` | 是否为对象存储启用 HTTPS？默认为 true       |
| [`minio_node`](#minio_node)             |  `string`  |  `C`  | minio 节点名模式                    |
| [`minio_data`](#minio_data)             |   `path`   |  `C`  | minio 数据目录，使用 `{x...y}` 指定多个磁盘 |
| [`minio_volumes`](#minio_volumes)       |  `string`  |  `C`  | minio 核心参数，指定成员节点与磁盘，默认不指定     |
| [`minio_domain`](#minio_domain)         |  `string`  |  `G`  | minio 外部域名，默认为 `sss.pigsty`    |
| [`minio_port`](#minio_port)             |   `port`   |  `C`  | minio 服务端口，默认为 9000            |
| [`minio_admin_port`](#minio_admin_port) |   `port`   |  `C`  | minio 控制台端口，默认为 9001           |
| [`minio_access_key`](#minio_access_key) | `username` |  `C`  | 根访问密钥，默认为 `minioadmin`         |
| [`minio_secret_key`](#minio_secret_key) | `password` |  `C`  | 根密钥，默认为 `S3User.MinIO`         |
| [`minio_extra_vars`](#minio_extra_vars) |  `string`  |  `C`  | minio 服务器的额外环境变量               |
| [`minio_provision`](#minio_provision)   |   `bool`   | `G/C` | 是否执行 minio 资源置备任务？默认为 true     |
| [`minio_alias`](#minio_alias)           |  `string`  |  `G`  | minio 部署的客户端别名                 |
| [`minio_endpoint`](#minio_endpoint)     |  `string`  |  `C`  | minio 部署的客户端别名对应的端点            |
| [`minio_buckets`](#minio_buckets)       | `bucket[]` |  `C`  | 待创建的 minio 存储桶列表               |
| [`minio_users`](#minio_users)           |  `user[]`  |  `C`  | 待创建的 minio 用户列表                |
{.full-width}

[`MINIO_REMOVE`](#minio_remove) 参数组控制对象存储集群的移除行为，包括防误删保险、数据清理以及软件包卸载。

| 参数                                    |   类型   |   级别    | 说明                            |
|:--------------------------------------|:------:|:-------:|:------------------------------|
| [`minio_safeguard`](#minio_safeguard) | `bool` | `G/C/A` | 防止意外删除？默认为 false              |
| [`minio_rm_data`](#minio_rm_data)     | `bool` | `G/C/A` | 移除时是否删除 Silo 数据？默认为 true      |
| [`minio_rm_pkg`](#minio_rm_pkg)       | `bool` | `G/C/A` | 移除时是否卸载 Silo 与 mcli？默认为 false |
{.full-width}

其中，`minio_volumes` 与 `minio_endpoint` 为自动生成的参数，但您可以显式覆盖指定这两个参数。



--------

## 默认参数

`MINIO`：19 个公开参数，定义于 [`roles/minio/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/minio/defaults/main.yml)

```yaml
#-----------------------------------------------------------------
# SILO
#-----------------------------------------------------------------
minio_type: silo                  # 保留的对象存储后端选择器，当前只接受 silo
#minio_seq: 1                     # minio 实例标识符，必填
#minio_cluster: minio             # minio 集群标识符，必填
minio_user: minio                 # minio 操作系统用户，默认为 `minio`
minio_https: true                 # 是否为 Silo 启用 HTTPS？默认为 true
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
# MINIO（引用）
minio_type: silo                  # 对象存储引擎，当前必须为 silo
```





--------

## `MINIO`

本节包含 [`minio`](https://github.com/pgsty/pigsty/blob/main/roles/minio/defaults/main.yml) 角色的参数，
这些是 [`minio.yml`](/docs/minio/playbook#minioyml) 剧本使用的操作标志参数。


### `minio_type`

参数名称：`minio_type`，类型：`enum`，层次：`G/C`

保留的对象存储后端选择器，默认值与当前唯一合法值都是 `silo`。Silo 沿用 MinIO S3/Admin API、`MINIO_*` 环境变量与磁盘格式。

`minio` 与 `rustfs` 不再是有效取值，会在角色身份检查阶段失败。旧 MinIO 集群升级到 v4.5 前，必须独立验证备份、MinIO → Silo 数据兼容性与回滚方案；修改参数本身不会执行数据迁移。

部署与移除角色都将 `minio_type` 默认为 `silo`。执行 `minio-rm.yml` 时仍必须提供 `minio_cluster` 与 `minio_seq` 身份参数，并受 `minio_safeguard`、数据与软件包清理开关约束；默认引擎值不会绕过这些删除保护。



--------

### `minio_seq`

参数名称： `minio_seq`， 类型： `int`， 层次：`I`

对象存储实例标识符，必需的身份参数。没有默认值，您必须手动分配这些序列号。

通常的最佳实践是，从 1 开始分配，依次加 1，并永远不使用已经分配的序列号。
序列号与集群名称 [`minio_cluster`](#minio_cluster) 一起，唯一标识每一个对象存储实例（例如：`minio-1`）。

在多节点部署中，序列号还会用于生成节点名称，写入 `/etc/hosts` 文件中进行静态解析。





--------

### `minio_cluster`

参数名称： `minio_cluster`， 类型： `string`， 层次：`C`

对象存储集群名称，必填且没有默认值。当部署多个集群时，使用此参数区分各自的成员与监控身份。

集群名称与序列号 [`minio_seq`](#minio_seq) 一起，唯一标识每一个对象存储实例。
例如，当集群名为 `minio`，序列号为 `1` 时，实例名称为 `minio-1`。

角色会在整个清单中按主机的 `minio_cluster` 值查找成员，因此 Ansible Group 名称可以与集群标识不同。请在对象存储分组的集群变量中显式定义本参数，不要放入 `all.vars`，否则会把所有主机标记为 MINIO 模块成员。

部署多套集群时，还应分别设置 [`minio_alias`](#minio_alias)、[`minio_domain`](#minio_domain)、[`minio_endpoint`](#minio_endpoint)，避免共享客户端别名与域名冲突。





--------

### `minio_user`

参数名称： `minio_user`， 类型： `username`， 层次：`C`

对象存储操作系统用户名，默认为 `minio`。

Silo 将以此用户身份运行，证书位于 `~/.minio/certs/`。




--------

### `minio_https`

参数名称： `minio_https`， 类型： `bool`， 层次：`G/C`

是否为对象存储服务启用 HTTPS？默认为 `true`。

Pigsty 默认的 pgBackRest `minio` 仓库预设使用 HTTPS，并通过 `/etc/pki/ca.crt` 校验证书，因此按默认配置使用时应保持本参数为 `true`。pgBackRest 本身并不强制 Silo 使用 HTTPS；若显式改用 HTTP，还必须同步调整 `pgbackrest_repo` 的存储 TLS 选项，不能只切换本参数。

启用 HTTPS 后，Pigsty 会自动为所选服务端签发证书，证书包含 [`minio_domain`](#minio_domain) 指定的域名以及各个节点的 IP 地址。




--------

### `minio_node`

参数名称： `minio_node`， 类型： `string`， 层次：`C`

对象存储节点名称模式，用于 [多机单盘](/docs/minio/config#多机单盘) 与 [多机多盘](/docs/minio/config#多机多盘) 部署。

默认值为：`${minio_cluster}-${minio_seq}.pigsty`，即以实例名 + `.pigsty` 后缀作为默认的节点名。

在这里指定的域名模式用于生成节点名，并写入所有 Silo 节点的 `/etc/hosts`。





--------

### `minio_data`

参数名称： `minio_data`， 类型： `path`， 层次：`C`

Silo 数据目录，默认值为 `/data/minio`。该参数填写文件系统目录，而不是 `/dev/sdb` 之类的裸块设备；MINIO 角色会创建目录并设置权限，但不会格式化或挂载生产服务器的数据盘。

[单机单盘](/docs/minio/config#单机单盘) 可以使用根文件系统中的普通目录，但只适合开发测试。[多机单盘](/docs/minio/config#多机单盘)、[多机多盘](/docs/minio/config#多机多盘) 与 [单机多盘](/docs/minio/config#单机多盘) 应使用非根盘的独立持久文件系统。分布式 Silo 会拒绝根文件系统上的数据路径。

`/data/minio` 可以是独立挂载点 `/data` 下的子目录；如果 `/data` 只是 `/` 下的普通目录，则仍属于根盘。对于多盘部署，可以使用 `{x...y}` 记法指定多个挂载点，例如 `/data{1...4}/minio`，每个展开后的路径应对应独立文件系统。

完整的挂载要求与检查方法参见 [集群配置：存储路径与挂载](/docs/minio/config#存储路径与挂载)。





--------

### `minio_volumes`

参数名称： `minio_volumes`， 类型： `string`， 层次：`C`

Silo 核心卷参数，默认不指定；留空时会自动使用以下规则拼接生成：

```yaml
minio_volumes: "{% if minio_cluster_size|int > 1 %}{% if minio_https|bool %}https{% else %}http{% endif %}://{{ minio_node|replace('${minio_cluster}', minio_cluster)|replace('${minio_seq}',minio_seq_range) }}:{{ minio_port|default(9000) }}{% endif %}{{ minio_data }}"
```

- 在单机部署（无论是单盘还是多盘）模式下，`minio_volumes` 直接使用 [`minio_data`](#minio_data) 的值，进行单机部署。
- 在多机部署模式下，`minio_volumes` 会使用 `minio_node`, `minio_port`, `minio_data` 参数的值生成多节点的地址，用于多机部署。
- 在多池部署模式下，通常需要您直接指定并覆盖 `minio_volumes` 的值，以指定多个节点池的地址。

指定本参数时，您需要确保使用的参数与 `minio_node`, `minio_port`, `minio_data` 三者匹配。








--------

### `minio_domain`

参数名称： `minio_domain`， 类型： `string`， 层次：`G`

Silo 服务域名，默认为 `sss.pigsty`。

客户端可以通过此域名访问 Silo S3 服务；该名称会包含在角色签发的 SSL 证书 SAN（Subject Alternative Name）字段中，但
MINIO 角色不会自动为 `minio_domain` 创建 DNS 记录。请通过 [`node_etc_hosts`](/docs/node/param#node_etc_hosts)
或 [`dns_records`](/docs/infra/param#dns_records) 显式添加解析，将它指向 Silo 节点 IP（单机部署）或负载均衡器 VIP（多节点部署）。






--------

### `minio_port`

参数名称： `minio_port`， 类型： `port`， 层次：`C`

Silo 服务端口，默认为 `9000`。

这是 Silo S3 API 的监听端口，客户端通过此端口访问对象存储服务。在多节点部署中，此端口也用于节点间通信。





--------

### `minio_admin_port`

参数名称： `minio_admin_port`， 类型： `port`， 层次：`C`

Silo 控制台端口，默认为 `9001`。

这是 Silo Web 管理控制台的监听端口。可以通过 `https://<minio-ip>:9001` 访问图形化管理界面。

如果希望通过 Nginx 对外暴露 Silo 控制台，可以将其添加到 [`infra_portal`](/docs/infra/param#infra_portal) 中。控制台需要使用 HTTPS 和 WebSocket。





--------

### `minio_access_key`

参数名称： `minio_access_key`， 类型： `username`， 层次：`C`

根访问用户名（access key），默认为 `minioadmin`。

这是 Silo 的超级管理员用户名，拥有对所有存储桶和对象的完全访问权限。建议在生产环境中修改此默认值。






--------

### `minio_secret_key`

参数名称： `minio_secret_key`， 类型： `password`， 层次：`C`

根访问密钥（secret key），默认为 `S3User.MinIO`。

这是 Silo 超级管理员密码，与 [`minio_access_key`](#minio_access_key) 配合使用。

{{% alert title="安全警告：请务必修改默认密码！" color="danger" %}}
使用默认密码是高危行为！请务必在您的生产环境部署中修改此密码。

提示：执行 `./configure -g` 时，会随机化配置向导识别的默认密码；完整范围见 [**默认凭证清单**](/docs/concept/sec/compliance#默认凭证清单)。
{{% /alert %}}








--------

### `minio_extra_vars`

参数名称： `minio_extra_vars`， 类型： `string`， 层次：`C`

传递给 Silo 的额外环境变量。Silo 沿用 `MINIO_*` 变量名。

默认值为空字符串，您可以使用多行字符串来传递多个环境变量。例如：

```yaml
minio_extra_vars: |
  MINIO_BROWSER_REDIRECT_URL=https://minio.example.com
  MINIO_SERVER_URL=https://s3.example.com
```





--------

### `minio_provision`

参数名称： `minio_provision`， 类型： `bool`， 层次：`G/C`

是否执行 Silo 资源置备任务？默认为 `true`。

当启用时，Pigsty 将自动创建 [`minio_buckets`](#minio_buckets) 和 [`minio_users`](#minio_users) 中定义的存储桶和用户。
如果您不需要自动置备这些资源，可以将此参数设置为 `false`。




--------

### `minio_alias`

参数名称： `minio_alias`， 类型： `string`， 层次：`G`

本地 Silo 集群的 `mcli` 客户端别名，默认值为 `sss`。

启用 [`minio_provision`](#minio_provision) 时，此别名会写入所有 Infra 节点与 Silo 成员上
Ansible 执行用户的 `mcli` 配置文件（`~/.mcli/config.json`）；分组重叠的节点不会重复写入。
随后可以直接使用 `mcli <alias>` 命令访问 Silo，例如 `mcli ls sss/`。

如果部署多个 Silo 集群，需要为每个集群指定不同的别名以避免冲突。






--------

### `minio_endpoint`

参数名称：`minio_endpoint`， 类型： `string`， 层次：`C`

部署的客户端别名对应的端点。如果指定，`minio_endpoint`（例如 `https://sss.pigsty:9002`）会替代自动拼接的
`<scheme>://<minio_domain>:<minio_port>`，作为 Infra 节点与 Silo 成员上客户端别名的目标端点。

```bash
mcli alias set {{ minio_alias }} {% if minio_endpoint is defined and minio_endpoint != '' %}{{ minio_endpoint }}{% else %}{% if minio_https|bool %}https{% else %}http{% endif %}://{{ minio_domain }}:{{ minio_port }}{% endif %} {{ minio_access_key }} {{ minio_secret_key }}
```

以上命令由角色以 Ansible 执行用户身份，在 Infra 节点与 Silo 成员上执行。






--------

### `minio_buckets`

参数名称： `minio_buckets`， 类型： `bucket[]`， 层次：`C`

默认创建的 Silo 存储桶列表：

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

要创建的 Silo 用户列表，默认值：

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

如果启用此参数，[`minio-rm.yml`](/docs/minio/playbook/#minio-rmyml) 剧本将中止并拒绝移除 Silo 集群，从而提供防止意外删除的保护。

建议在生产环境中启用此保险开关，防止误操作导致数据丢失：

```yaml
minio_safeguard: true   # 启用后，minio-rm.yml 将拒绝执行
```




--------

### `minio_rm_data`

参数名称： `minio_rm_data`， 类型： `bool`， 层次：`G/C/A`

移除时是否删除 Silo 数据与配置？默认值为 `true`。

启用后，[`minio-rm.yml`](/docs/minio/playbook/#minio-rmyml) 会删除数据目录、`/etc/default/silo`、`.minio` 用户目录，以及 `/etc/systemd/system/silo.service`。设置为 `false` 会保留这些数据与配置，但不会阻止服务注销、停止和禁用。




--------

### `minio_rm_pkg`

参数名称： `minio_rm_pkg`， 类型： `bool`， 层次：`G/C/A`

移除时是否卸载 Silo 软件包？默认值为 `false`。

启用后，[`minio-rm.yml`](/docs/minio/playbook/#minio-rmyml) 会卸载 `silo` 与 `mcli`。默认禁用此选项，以便保留软件包供后续使用。

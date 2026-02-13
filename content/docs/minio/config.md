---
title: 集群配置
weight: 3620
description: 根据需求场景选择合适的 MinIO 部署类型，并对外提供可靠的接入。
icon: fa-solid fa-code
module: [MINIO]
categories: [参考]
---

在部署 MinIO 之前，你需要在 [配置清单](/docs/setup/config) 中定义一个 MinIO 集群，MinIO 有三种经典部署模式：

- [单机单盘：SNSD](#单机单盘)：单机单盘模式，可以使用任意目录作为数据盘，仅作为开发、测试、演示使用。
- [单机多盘：SNMD](#单机多盘)：折中模式，在单台服务器上使用多块磁盘 (>=2)，仅当资源极为有限时使用。
- [多机多盘：MNMD](#多机多盘)：多机多盘模式，标准生产环境部署，具有最好的可靠性，但需要多台服务器。

通常我们建议使用 SNSD 与 MNMD 这两种模式，前者用于开发测试，后者用于生产部署，SNMD 仅在资源有限（只有一台服务器）的情况下使用。

此外，还可以使用 [多池部署](#多池部署) 来实现现有 MinIO 集群的扩容，或者直接部署 [多套集群](#多套集群)。

使用多节点 MinIO 集群时，访问任意节点都可以获取服务，因此最佳实践是在 MinIO 集群前使用负载均衡与 [高可用服务接入机制](#服务接入)。



----------------

## 核心参数

MinIO 部署中，[`MINIO_VOLUMES`](https://min.io/docs/minio/linux/reference/minio-server/settings/core.html#envvar.MINIO_VOLUMES) 是一个核心配置参数，用于指定 MinIO 的部署模式。
Pigsty 提供了一些便捷的参数用于自动根据配置清单，生成 `MINIO_VOLUMES` 与其他配置参数的值，但您也可以直接指定它们。

- 单机单盘： `MINIO_VOLUMES` 指向本机上的一个普通目录，默认由 [`minio_data`](/docs/minio/param#minio_data) 指定，默认位置为 `/data/minio`。
- 单机多盘： `MINIO_VOLUMES` 指向本机上的序列挂载点，同样是由 [`minio_data`](/docs/minio/param#minio_data) 指定，但需要用特殊语法显式覆盖指定真实挂载点，例如 `/data{1...4}`。
- 多机多盘： `MINIO_VOLUMES` 指向多台服务器上的序列挂载点，由以下两部分自动组合生成：
  - 首先要使用 [`minio_data`](/docs/minio/param#minio_data) 指定集群每个成员的磁盘挂载点序列 `/data{1...4}`，
  - 还需要使用 [`minio_node`](/docs/minio/param#minio_node) 指定节点的命名模式 `${minio_cluster}-${minio_seq}.pigsty`
- 多池部署： 您需要显式指定 [`minio_volumes`](/docs/minio/param#minio_volumes) 参数来分配每个存储池的节点，从而实现集群扩容


----------------

## 单机单盘

SNSD 模式，部署参考教程：[MinIO 单机单盘部署](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-single-drive.html)

在 Pigsty 中，定义一个单例 MinIO 实例非常简单：

```yaml
# 1 节点 1 驱动器（默认）
minio: { hosts: { 10.10.10.10: { minio_seq: 1 } }, vars: { minio_cluster: minio } }
```

单机模式下，唯一必要的参数是 [`minio_seq`](/docs/minio/param#minio_seq) 和 [`minio_cluster`](/docs/minio/param#minio_cluster)，它们会唯一标识每一个 MinIO 实例。

单节点单磁盘模式仅用于开发目的，因此您可以使用一个普通的目录作为数据目录，该目录由参数 [`minio_data`](/docs/minio/param#minio_data) 默认为 `/data/minio`。

在您使用 MinIO 时，强烈建议您通过静态解析的域名记录访问 MinIO，例如，假设 [`minio_domain`](/docs/minio/param#minio_domain) 设置的内部服务域名使用了默认的 `sss.pigsty`，
那么您可以在所有节点上添加一个静态解析，便于其他节点访问此服务。

```yaml
node_etc_hosts: ["10.10.10.10 sss.pigsty"] # domain name to access minio from all nodes (required)
```


{{% alert title="SNSD 仅适用于开发测试" color="warning" %}}
单节点单盘模式应当仅用于开发、测试、演示目的，因为它无法容忍任何硬件故障，也无法带来多磁盘的性能改善。生产环境请使用 [多机多盘](#多机多盘) 模式。
{{% /alert %}}



----------------

## 单机多盘

SNMD 模式，部署参考教程：[MinIO 单机多盘部署](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html)

要在单节点上使用多块磁盘，所需的操作与 [单机单盘](#单机单盘) 基本一致，但用户需要以 `{{ prefix }}{x...y}` 的特定格式指定 [`minio_data`](/docs/minio/param#minio_data)，该格式定义了序列磁盘挂载点。

```yaml
minio:
  hosts: { 10.10.10.10: { minio_seq: 1 } }
  vars:
    minio_cluster: minio         # minio 集群名称，默认为 minio
    minio_data: '/data{1...4}'   # minio 数据目录，使用 {x...y} 记号来指定多块磁盘
```

{{% alert title="请使用真实磁盘挂载点" color="warning" %}}
请注意，SNMD 模式不支持使用普通目录作为数据目录。如果您使用 SNMD 模式拉起 MinIO，但数据目录不是有效的磁盘挂载点，MinIO 将拒绝启动。请确保使用 XFS 格式化的真实磁盘。
{{% /alert %}}



例如 Vagrant MinIO [沙箱](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/minio.rb) 定义了一个带有4块磁盘的单节点 MinIO 集群：`/data1`、`/data2`、`/data3` 和 `/data4`。启动 MinIO 之前，你需要正确地挂载它们（请务必使用 `xfs` 格式化磁盘）：

```bash
mkfs.xfs /dev/vdb; mkdir /data1; mount -t xfs /dev/vdb /data1;   # 挂载第1块盘……
mkfs.xfs /dev/vdc; mkdir /data2; mount -t xfs /dev/vdc /data2;   # 挂载第2块盘……
mkfs.xfs /dev/vdd; mkdir /data3; mount -t xfs /dev/vdd /data3;   # 挂载第3块盘……
mkfs.xfs /dev/vde; mkdir /data4; mount -t xfs /dev/vde /data4;   # 挂载第4块盘……
```

挂载磁盘属于服务器置备的部分，超出 Pigsty 的处理范畴。挂载的磁盘应该同时写入 `/etc/fstab` 以便在服务器重启后可以自动挂载。

```bash
/dev/vdb /data1 xfs defaults,noatime,nodiratime 0 0
/dev/vdc /data2 xfs defaults,noatime,nodiratime 0 0
/dev/vdd /data3 xfs defaults,noatime,nodiratime 0 0
/dev/vde /data4 xfs defaults,noatime,nodiratime 0 0
```

SNMD 模式可以利用单机上的多块磁盘，提供更高的性能和容量，并且容忍部分磁盘故障。
但单节点模式无法容忍整个节点的故障，而且您无法在运行时添加新的节点，因此如果没有特殊原因，我们不建议在生产环境中使用 SNMD 模式。






----------------

## 多机多盘

MNMD 模式，部署参考教程：[MinIO 多机多盘部署](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html)

除了需要 [单机多盘](#单机多盘) 模式中的 [`minio_data`](/docs/minio/param#minio_data) 指定磁盘驱动器，使用MinIO 多节点部署需要使用一个额外的 [`minio_node`](/docs/minio/param#minio_node) 参数。

例如，以下配置定义了一个 MinIO 集群，其中有四个节点，每个节点有四块磁盘：

```yaml
minio:
  hosts:
    10.10.10.10: { minio_seq: 1 }  # 实际节点名： minio-1.pigsty
    10.10.10.11: { minio_seq: 2 }  # 实际节点名： minio-2.pigsty
    10.10.10.12: { minio_seq: 3 }  # 实际节点名： minio-3.pigsty
    10.10.10.13: { minio_seq: 4 }  # 实际节点名： minio-4.pigsty
  vars:
    minio_cluster: minio
    minio_data: '/data{1...4}'                         # 每个节点使用四块磁盘
    minio_node: '${minio_cluster}-${minio_seq}.pigsty' # minio 节点名称规则
```

[`minio_node`](/docs/minio/param#minio_node)  参数指定了 MinIO 节点名称的模式，用于生成每个节点的唯一名称。
默认情况下，节点名称是 `${minio_cluster}-${minio_seq}.pigsty`，其中 `${minio_cluster}` 是集群名称，`${minio_seq}` 是节点序号。
MinIO 实例的名称非常重要，会自动写入到 MinIO 节点的 `/etc/hosts` 中进行静态解析。MinIO 依靠这些名称来识别并访问集群中的其他节点。

在这种情况下，`MINIO_VOLUMES` 将被设置为 `https://minio-{1...4}.pigsty:9000/data{1...4}` ，以标识四个节点上的四块盘。
您可以直接在 MinIO 集群中指定 [`minio_volumes`](/docs/minio/param#minio_volumes) 参数，来覆盖自动根据规则生成的值。
但通常不需要这样做，因为 Pigsty 会自动根据配置清单生成它。





----------------

## 多池部署

MinIO 的架构允许通过添加新的存储池来扩容。在 Pigsty 中，您可以通过显式指定 [`minio_volumes`](/docs/minio/param#minio_volumes) 参数来分配每个存储池的节点，从而实现集群扩容。

例如，假设您已经创建了 [多机多盘](#多机多盘) 样例中定义的 MinIO 集群，现在您想要添加一个新的存储池，同样由四个节点构成。

那么，你需要直接覆盖指定 [`minio_volumes`](/docs/minio/param#minio_volumes) 参数：

```yaml
minio:
  hosts:
    10.10.10.10: { minio_seq: 1 }
    10.10.10.11: { minio_seq: 2 }
    10.10.10.12: { minio_seq: 3 }
    10.10.10.13: { minio_seq: 4 }
    
    10.10.10.14: { minio_seq: 5 }
    10.10.10.15: { minio_seq: 6 }
    10.10.10.16: { minio_seq: 7 }
    10.10.10.17: { minio_seq: 8 }
  vars:
    minio_cluster: minio
    minio_data: "/data{1...4}"
    minio_node: '${minio_cluster}-${minio_seq}.pigsty' # minio 节点名称规则
    minio_volumes: 'https://minio-{1...4}.pigsty:9000/data{1...4} https://minio-{5...8}.pigsty:9000/data{1...4}'
```

在这里，空格分割的两个参数分别代表两个存储池，每个存储池有四个节点，每个节点有四块磁盘。更多关于存储池的信息请参考 [管理预案：MinIO集群扩容](/docs/minio/admin/)



----------------

## 多套集群

您可以将新的 MinIO 节点部署为一个全新的 MinIO 集群，使用不同的集群名称定义一个新的分组即可，以下配置声明了两个独立的 MinIO 集群：

```yaml
minio1:
  hosts:
    10.10.10.10: { minio_seq: 1 }
    10.10.10.11: { minio_seq: 2 }
    10.10.10.12: { minio_seq: 3 }
    10.10.10.13: { minio_seq: 4 }
  vars:
    minio_cluster: minio1
    minio_data: "/data{1...4}"

minio2:
  hosts:    
    10.10.10.14: { minio_seq: 5 }
    10.10.10.15: { minio_seq: 6 }
    10.10.10.16: { minio_seq: 7 }
    10.10.10.17: { minio_seq: 8 }
  vars:
    minio_cluster: minio2
    minio_data: "/data{1...4}"
    minio_alias: sss2
    minio_domain: sss2.pigsty
    minio_endpoint: https://sss2.pigsty:9000
```

请注意，Pigsty 默认一套部署中只有一个 MinIO 集群，如果您需要部署多个 MinIO 集群，那么一些带有默认值的参数需要显式设置，无法省略，否则会出现命名冲突，如上所示。




----------------

## 服务接入

MinIO 默认使用 `9000` 端口提供服务。多节点 MinIO 集群可以通过访问 **任意一个节点** 来访问其服务。

服务接入属于 [NODE](/docs/node) 模块的功能范畴，这里仅做基本介绍。

多节点 MinIO 集群的高可用接入可以使用 L2 VIP 或 HAProxy 实现。例如，您可以选择使用 keepalived 在 MinIO 集群上绑定一个 L2 [VIP](/docs/node/param#node_vip)，
或者使用由 [`NODE`](/docs/node) 模块的提供的 [`haproxy`](/docs/node/param#haproxy) 组件，通过负载均衡器对外暴露 MinIO 服务。

```yaml
# minio cluster with 4 nodes and 4 drivers per node
minio:
  hosts:
    10.10.10.10: { minio_seq: 1 , nodename: minio-1 }
    10.10.10.11: { minio_seq: 2 , nodename: minio-2 }
    10.10.10.12: { minio_seq: 3 , nodename: minio-3 }
    10.10.10.13: { minio_seq: 4 , nodename: minio-4 }
  vars:
    minio_cluster: minio
    minio_data: '/data{1...4}'
    minio_buckets: [ { name: pgsql }, { name: infra }, { name: redis } ]
    minio_users:
      - { access_key: dba , secret_key: S3User.DBA, policy: consoleAdmin }
      - { access_key: pgbackrest , secret_key: S3User.SomeNewPassWord , policy: readwrite }

    # bind a node l2 vip (10.10.10.9) to minio cluster (optional)
    node_cluster: minio
    vip_enabled: true
    vip_vrid: 128
    vip_address: 10.10.10.9
    vip_interface: eth1

    # expose minio service with haproxy on all nodes
    haproxy_services:
      - name: minio                    # [REQUIRED] service name, unique
        port: 9002                     # [REQUIRED] service port, unique
        balance: leastconn             # [OPTIONAL] load balancer algorithm
        options:                       # [OPTIONAL] minio health check
          - option httpchk
          - option http-keep-alive
          - http-check send meth OPTIONS uri /minio/health/live
          - http-check expect status 200
        servers:
          - { name: minio-1 ,ip: 10.10.10.10 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
          - { name: minio-2 ,ip: 10.10.10.11 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
          - { name: minio-3 ,ip: 10.10.10.12 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
          - { name: minio-4 ,ip: 10.10.10.13 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
```

例如，上面的配置块为 MinIO 集群的所有节点上启用了 HAProxy ，在 9002 端口上暴露 MinIO 服务，同时为集群绑定了一个二层 VIP。
当使用时，用户应当将 `sss.pigsty` 域名解析指向 VIP 地址 `10.10.10.9`，并使用 `9002` 端口访问 MinIO 服务。这样当任意一个节点发生故障时，VIP 会自动切换到另一个节点，保证服务的高可用性。

在这种情况下，您通常还需要在全局修改域名解析的目的地，以及 [`minio_endpoint`](/docs/minio/param#minio_endpoint) 参数，修改写入管理节点 MinIO Alias 对应的端点地址：

```yaml
minio_endpoint: https://sss.pigsty:9002   # 覆盖默认值： https://sss.pigsty:9000
node_etc_hosts: ["10.10.10.9 sss.pigsty"] # 其他节点将使用 sss.pigsty 域名来访问 MinIO
```


----------------

## 专用负载均衡

Pigsty 允许用户使用专用的负载均衡服务器组，而不是集群本身来运行 VIP 与 HAProxy。例如 [`prod`](/docs/conf/pro) 模板中就使用了这种方式。

```yaml
proxy:
  hosts:
    10.10.10.18 : { nodename: proxy1 ,node_cluster: proxy ,vip_interface: eth1 ,vip_role: master }
    10.10.10.19 : { nodename: proxy2 ,node_cluster: proxy ,vip_interface: eth1 ,vip_role: backup }
  vars:
    vip_enabled: true
    vip_address: 10.10.10.20
    vip_vrid: 20
    
    haproxy_services:      # expose minio service : sss.pigsty:9002
      - name: minio        # [REQUIRED] service name, unique
        port: 9002         # [REQUIRED] service port, unique
        balance: leastconn # Use leastconn algorithm and minio health check
        options: [ "option httpchk", "option http-keep-alive", "http-check send meth OPTIONS uri /minio/health/live", "http-check expect status 200" ]
        servers:           # reload service with ./node.yml -t haproxy_config,haproxy_reload
          - { name: minio-1 ,ip: 10.10.10.21 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
          - { name: minio-2 ,ip: 10.10.10.22 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
          - { name: minio-3 ,ip: 10.10.10.23 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
          - { name: minio-4 ,ip: 10.10.10.24 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
          - { name: minio-5 ,ip: 10.10.10.25 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
```

在这种情况下，您通常还需要在全局修改 MinIO 域名的解析，将 `sss.pigsty` 指向负载均衡器的地址，并修改 [`minio_endpoint`](/docs/minio/param#minio_endpoint) 参数，修改写入管理节点 MinIO Alias 对应的端点地址：

```yaml
minio_endpoint: https://sss.pigsty:9002    # overwrite the defaults: https://sss.pigsty:9000
node_etc_hosts: ["10.10.10.20 sss.pigsty"] # domain name to access minio from all nodes (required)
```




----------------

## 访问服务

如果您想要访问上面通过 HAProxy 暴露的 MinIO，以 PGSQL 备份配置为例，可以修改 [`pgbackrest_repo`](/docs/pgsql/param#pgbackrest_repo) 中的配置，添加新的备份仓库定义：

```yaml
# 这是新添加的 HA MinIO Repo 定义，使用此配置代替之前的单机 MinIO 配置
minio_ha:
  type: s3
  s3_endpoint: minio-1.pigsty   # s3_endpoint 可以是任何一个负载均衡器：10.10.10.1{0,1,2}，或指向任意 3 个节点的域名
  s3_region: us-east-1          # 你可以使用外部域名：sss.pigsty，该域名指向任一成员（`minio_domain`）
  s3_bucket: pgsql              # 你可使用实例名和节点名：minio-1.pigsty minio-1.pigsty minio-1.pigsty minio-1 minio-2 minio-3
  s3_key: pgbackrest            # 最好为 MinIO 的 pgbackrest 用户使用专门的密码
  s3_key_secret: S3User.SomeNewPassWord
  s3_uri_style: path
  path: /pgbackrest
  storage_port: 9002            # 使用负载均衡器的端口 9002 代替默认的 9000（直接访问）
  storage_ca_file: /etc/pki/ca.crt
  bundle: y
  cipher_type: aes-256-cbc      # 在您的生产环境中最好使用新的加密密码，这里可以使用集群名作为密码的一部分。
  cipher_pass: pgBackRest.With.Some.Extra.PassWord.And.Salt.${pg_cluster}
  retention_full_type: time
  retention_full: 14
```



----------------

## 暴露管控

MinIO 默认通过 `9001` 端口（由 [`minio_admin_port`](/docs/minio/param#minio_admin_port) 参数指定）提供Web管控界面。

将后台管理界面暴露给外部可能存在安全隐患。如果你希望这样做，请将 MinIO 添加到 [`infra_portal`](/docs/infra/param#infra_portal) 并刷新 Nginx 配置。

```yaml  
# ./infra.yml -t nginx
infra_portal:
  home         : { domain: h.pigsty }
  grafana      : { domain: g.pigsty ,endpoint: "${admin_ip}:3000" , websocket: true }
  vmetrics     : { domain: v.pigsty ,endpoint: "${admin_ip}:8428" }
  alertmanager : { domain: a.pigsty ,endpoint: "${admin_ip}:9059" }
  blackbox     : { endpoint: "${admin_ip}:9115" }
  vlogs        : { endpoint: "${admin_ip}:9428" }

  # MinIO 管理页面需要 HTTPS / Websocket 才能工作
  minio        : { domain: m.pigsty     ,endpoint: "10.10.10.10:9001" ,scheme: https ,websocket: true }
  minio10      : { domain: m10.pigsty   ,endpoint: "10.10.10.10:9001" ,scheme: https ,websocket: true }
  minio11      : { domain: m11.pigsty   ,endpoint: "10.10.10.11:9001" ,scheme: https ,websocket: true }
  minio12      : { domain: m12.pigsty   ,endpoint: "10.10.10.12:9001" ,scheme: https ,websocket: true }
  minio13      : { domain: m13.pigsty   ,endpoint: "10.10.10.13:9001" ,scheme: https ,websocket: true }
```

请注意，MinIO 管控页面需要使用 HTTPS，请 **不要** 在生产环境中暴露未加密的 MinIO 管控页面。

这意味着，您通常需要在您的 DNS 服务器，或者本机 `/etc/hosts` 中添加 `m.pigsty` 的解析记录，以便访问 MinIO 管控页面。

与此同时，如果您使用的是 Pigsty 自签名的 CA 而不是一个正规的公共 CA ，通常您还需要手工信任该 CA 或证书，才能跳过浏览器中的 “不安全” 提示信息。 

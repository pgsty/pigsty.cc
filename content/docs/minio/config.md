---
title: 集群配置
weight: 3620
description: 使用 MINIO 模块部署 Silo，并按单机、多盘、多节点模式配置可靠的 S3 对象存储接入。
icon: fa-solid fa-code
module: [MINIO]
categories: [参考]
---

在部署 MINIO 模块之前，需要在 [配置清单](/docs/setup/config) 中定义 Silo 对象存储集群。v4.5.0 当前源码要求 [`minio_type: silo`](/docs/minio/param#minio_type)，支持以下清单部署模式：

- [单机单盘：SNSD](#单机单盘)：单机单盘模式，可以使用任意目录作为数据盘，仅作为开发、测试、演示使用。
- [单机多盘：SNMD](#单机多盘)：折中模式，在单台服务器上使用多块磁盘 (>=2)，仅当资源极为有限时使用。
- [多机多盘：MNMD](#多机多盘)：多机多盘模式，标准生产环境部署，具有最好的可靠性，但需要多台服务器。

通常我们建议使用 SNSD 与 MNMD 这两种模式，前者用于开发测试，后者用于生产部署，SNMD 仅在资源有限（只有一台服务器）的情况下使用。

此外，Silo 可以使用 [多池部署](#多池部署) 扩容，或直接部署 [多套集群](#多套集群)。

使用多节点集群时，访问任意成员都可以获取 S3 服务，因此最佳实践是在集群前使用负载均衡与 [高可用服务接入机制](#服务接入)。


----------------

## 后端选择

```yaml
minio_type: silo   # v4.5.0 当前唯一合法值
```

`minio_type` 是为后续扩展保留的选择器，但当前部署与移除角色都只接受 `silo`。它对应 `silo` 软件包、`silo.service`、`/etc/default/silo` 与 `~/.minio/certs/`。为支持原地迁移，`silo.service` 会先读取旧的 `/etc/default/minio`，再读取优先级更高的 `/etc/default/silo`，并与旧 `minio.service` 冲突；新部署只应维护 Silo 配置文件。

旧清单中的 `minio_type: minio` 或 `minio_type: rustfs` 会在身份检查阶段失败。升级已有 MinIO 部署前，应先验证 MinIO → Silo 的数据兼容性、备份与回滚路径。下文引用 MinIO 上游拓扑术语和链接，是因为 Silo 保留对应兼容接口，并不表示当前角色仍安装 `minio` 软件包。



----------------

## 核心参数

Pigsty 使用 [`minio_volumes`](/docs/minio/param#minio_volumes) 描述成员与磁盘，并将其渲染为 Silo 的 `MINIO_VOLUMES`。角色会根据清单自动生成该值，也允许显式覆盖。

- 单机单盘：`minio_volumes` 指向本机上的普通目录，默认由 [`minio_data`](/docs/minio/param#minio_data) 生成，默认位置为 `/data/minio`。
- 单机多盘：`minio_volumes` 指向本机上的序列挂载点，同样由 `minio_data` 生成，例如 `/data{1...4}`。
- 多机多盘：`minio_volumes` 指向多台服务器上的序列挂载点，由以下两部分自动组合生成：
  - 首先要使用 [`minio_data`](/docs/minio/param#minio_data) 指定集群每个成员的磁盘挂载点序列 `/data{1...4}`，
  - 还需要使用 [`minio_node`](/docs/minio/param#minio_node) 指定节点的命名模式 `${minio_cluster}-${minio_seq}.pigsty`
- 多池部署：需要显式指定 `minio_volumes` 来分配每个存储池的节点。


----------------

## 单机单盘

SNSD 模式，兼容拓扑参考：[MinIO 单机单盘部署](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-single-drive.html)

在 Pigsty 中，定义一个单例 Silo 实例非常简单：

```yaml
# 1 节点 1 数据目录
minio: { hosts: { 10.10.10.10: { minio_seq: 1 } }, vars: { minio_cluster: minio, minio_type: silo } }
```

单机模式下，必要的身份参数是 [`minio_seq`](/docs/minio/param#minio_seq) 和 [`minio_cluster`](/docs/minio/param#minio_cluster)，它们会唯一标识每一个对象存储实例。

单节点单磁盘模式仅用于开发目的，因此您可以使用一个普通的目录作为数据目录，该目录由参数 [`minio_data`](/docs/minio/param#minio_data) 默认为 `/data/minio`。

使用 Silo 时，强烈建议通过静态解析的域名记录访问服务。例如，假设 [`minio_domain`](/docs/minio/param#minio_domain) 使用默认的 `sss.pigsty`，
那么您可以在所有节点上添加一个静态解析，便于其他节点访问此服务。

```yaml
node_etc_hosts: ["10.10.10.10 sss.pigsty"] # domain name to access minio from all nodes (required)
```


{{% alert title="SNSD 仅适用于开发测试" color="warning" %}}
单节点单盘模式应当仅用于开发、测试、演示目的，因为它无法容忍任何硬件故障，也无法带来多磁盘的性能改善。生产环境请使用 [多机多盘](#多机多盘) 模式。
{{% /alert %}}



----------------

## 单机多盘

SNMD 模式，兼容拓扑参考：[MinIO 单机多盘部署](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html)

要在单节点上使用多块磁盘，所需的操作与 [单机单盘](#单机单盘) 基本一致，但用户需要以 `{{ prefix }}{x...y}` 的特定格式指定 [`minio_data`](/docs/minio/param#minio_data)，该格式定义了序列磁盘挂载点。

```yaml
minio:
  hosts: { 10.10.10.10: { minio_seq: 1 } }
  vars:
    minio_cluster: minio         # 对象存储集群标识，必填
    minio_data: '/data{1...4}'   # minio 数据目录，使用 {x...y} 记号来指定多块磁盘
```

{{% alert title="请使用真实磁盘挂载点" color="warning" %}}
请注意，SNMD 模式不支持使用普通目录作为数据目录。如果数据目录不是有效的磁盘挂载点，Silo 将拒绝启动。请确保使用 XFS 格式化的真实磁盘。
{{% /alert %}}



例如 Vagrant 对象存储 [沙箱](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/minio.rb) 定义了一个带有 4 块磁盘的单节点 Silo 集群：`/data1`、`/data2`、`/data3` 和 `/data4`。启动 Silo 前，需要正确挂载并使用 `xfs` 格式化这些磁盘：

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

MNMD 模式，兼容拓扑参考：[MinIO 多机多盘部署](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html)

除了使用 [单机多盘](#单机多盘) 模式中的 [`minio_data`](/docs/minio/param#minio_data) 指定磁盘，还需要使用 [`minio_node`](/docs/minio/param#minio_node) 指定多节点名称模式。

例如，以下配置定义了一个 Silo 集群，其中有四个节点，每个节点有四块磁盘：

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

[`minio_node`](/docs/minio/param#minio_node) 参数指定 MINIO 模块内部的节点名称模式，用于生成每个节点的唯一名称。
默认情况下，节点名称是 `${minio_cluster}-${minio_seq}.pigsty`，其中 `${minio_cluster}` 是集群名称，`${minio_seq}` 是节点序号。
实例名称会自动写入各 Silo 节点的 `/etc/hosts` 中进行静态解析，供集群成员互相识别和访问。

在这种情况下，派生的 `minio_volumes` 为 `https://minio-{1...4}.pigsty:9000/data{1...4}`，以标识四个节点上的四块盘；角色再将其写入 Silo 使用的兼容环境变量。
您可以直接在对象存储集群中指定 [`minio_volumes`](/docs/minio/param#minio_volumes)，覆盖自动生成的值。
但通常不需要这样做，因为 Pigsty 会自动根据配置清单生成它。





----------------

## 多池部署

Silo 保留通过添加新存储池扩容的兼容能力。在 Pigsty 中，可以显式指定 [`minio_volumes`](/docs/minio/param#minio_volumes) 为每个存储池分配节点。

例如，假设您已经创建了 [多机多盘](#多机多盘) 样例中的 Silo 集群，现在需要添加一个同样由四个节点构成的新存储池。

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

在这里，空格分隔的两个参数分别代表两个存储池，每个存储池有四个节点，每个节点有四块磁盘。更多信息见 [管理预案：集群扩容](/docs/minio/admin/)。



----------------

## 多套集群

您可以将新节点部署为独立的 Silo 集群。以下配置使用不同身份声明两套对象存储集群：

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

`minio_cluster` 没有默认值，每套集群都必须显式定义。多集群共存时，还必须使用不同的 `minio_alias`、`minio_domain` 与 `minio_endpoint`，否则 Infra 节点上的共享客户端别名或域名会互相覆盖。Ansible 分组名可以与 `minio_cluster` 不同，角色按身份参数从整个清单发现成员。




----------------

## 服务接入

Silo 默认使用 `9000` 端口提供 S3 服务。多节点集群可以通过访问 **任意一个成员** 来访问服务。

服务接入属于 [NODE](/docs/node) 模块的功能范畴，这里仅做基本介绍。

多节点对象存储集群的高可用接入可以使用 L2 VIP 或 HAProxy 实现。例如，可用 keepalived 绑定 L2 [VIP](/docs/node/param#node_vip)，或使用 [`NODE`](/docs/node) 模块提供的 [`haproxy`](/docs/node/param#haproxy) 组件暴露 S3 服务。

```yaml
# object storage cluster with 4 nodes and 4 drives per node
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

例如，上面的配置块在 Silo 集群的所有节点上启用 HAProxy，通过 9002 端口暴露 S3 服务，并为集群绑定一个二层 VIP。
使用时应将 `sss.pigsty` 解析到 VIP `10.10.10.9`，并通过 `9002` 端口访问。任意节点故障时，VIP 会切换到其他节点。

在这种情况下，还需要修改全局域名解析以及 [`minio_endpoint`](/docs/minio/param#minio_endpoint)，更新写入管理节点的 `mcli` Alias 端点：

```yaml
minio_endpoint: https://sss.pigsty:9002   # 覆盖默认值： https://sss.pigsty:9000
node_etc_hosts: ["10.10.10.9 sss.pigsty"] # 其他节点使用 sss.pigsty 访问 Silo
```


----------------

## 专用负载均衡

Pigsty 允许用户使用专用的负载均衡服务器组，而不是集群本身来运行 VIP 与 HAProxy。例如 [`ha/simu`](/docs/conf/simu) 模板中就使用了这种方式。

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

在这种情况下，还需要将 `sss.pigsty` 指向负载均衡器，并修改 [`minio_endpoint`](/docs/minio/param#minio_endpoint)，更新管理节点上的 `mcli` Alias 端点：

```yaml
minio_endpoint: https://sss.pigsty:9002    # overwrite the defaults: https://sss.pigsty:9000
node_etc_hosts: ["10.10.10.20 sss.pigsty"] # domain name to access minio from all nodes (required)
```




----------------

## 访问服务

如果要从 PGSQL 访问上面通过 HAProxy 暴露的 Silo，可以在 [`pgbackrest_repo`](/docs/pgsql/param#pgbackrest_repo) 中添加新的备份仓库定义：

```yaml
# 新增的 HA S3 Repo 定义，替代之前的单机配置
minio_ha:
  type: s3
  s3_endpoint: minio-1.pigsty   # s3_endpoint 可以是任何一个负载均衡器：10.10.10.1{0,1,2}，或指向任意 3 个节点的域名
  s3_region: us-east-1          # 你可以使用外部域名：sss.pigsty，该域名指向任一成员（`minio_domain`）
  s3_bucket: pgsql              # 你可使用实例名和节点名：minio-1.pigsty minio-1.pigsty minio-1.pigsty minio-1 minio-2 minio-3
  s3_key: pgbackrest            # 为 Silo 的 pgbackrest 用户使用专用密码
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

Silo 默认通过 `9001` 端口（由 [`minio_admin_port`](/docs/minio/param#minio_admin_port) 指定）提供 Web 管控界面。

将后台管理界面暴露给外部可能存在安全隐患。如果确实需要，请将 Silo 添加到 [`infra_portal`](/docs/infra/param#infra_portal) 并刷新 Nginx 配置。

```yaml  
# ./infra.yml -t nginx
infra_portal:
  home         : { domain: h.pigsty }
  grafana      : { domain: g.pigsty ,endpoint: "${admin_ip}:3000" , websocket: true }
  vmetrics     : { domain: v.pigsty ,endpoint: "${admin_ip}:8428" }
  alertmanager : { domain: a.pigsty ,endpoint: "${admin_ip}:9059" }
  blackbox     : { endpoint: "${admin_ip}:9115" }
  vlogs        : { endpoint: "${admin_ip}:9428" }

  # 对象存储管理页面需要 HTTPS / Websocket
  minio        : { domain: m.pigsty     ,endpoint: "10.10.10.10:9001" ,scheme: https ,websocket: true }
  minio10      : { domain: m10.pigsty   ,endpoint: "10.10.10.10:9001" ,scheme: https ,websocket: true }
  minio11      : { domain: m11.pigsty   ,endpoint: "10.10.10.11:9001" ,scheme: https ,websocket: true }
  minio12      : { domain: m12.pigsty   ,endpoint: "10.10.10.12:9001" ,scheme: https ,websocket: true }
  minio13      : { domain: m13.pigsty   ,endpoint: "10.10.10.13:9001" ,scheme: https ,websocket: true }
```

请 **不要** 在生产环境中暴露未加密的对象存储管控页面。

这意味着，通常需要在 DNS 服务器或本机 `/etc/hosts` 中添加 `m.pigsty` 解析记录，以便访问 Silo 管控页面。

与此同时，如果您使用的是 Pigsty 自签名的 CA 而不是一个正规的公共 CA，通常您还需要手工信任该 CA 或证书，才能跳过浏览器中的 “不安全” 提示信息。

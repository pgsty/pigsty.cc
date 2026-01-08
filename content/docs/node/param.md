---
title: 参数列表
weight: 3230
description: NODE 模块提供了 11 组共 83 个配置参数
icon: fa-solid fa-sliders
modules: [NODE]
categories: [参考]
---


[NODE](/docs/node) 模块负责将主机节点调整到期待的目标状态，并将其纳入 Pigsty 的监控系统中。



------------------------------


| 参数组                               | 功能说明               |
|:----------------------------------|:-------------------|
| [`NODE_ID`](#node_id)             | NODE_ID 相关参数       |
| [`NODE_DNS`](#node_dns)           | NODE_DNS 相关参数      |
| [`NODE_PACKAGE`](#node_package)   | NODE_PACKAGE 相关参数  |
| [`NODE_TUNE`](#node_tune)         | NODE_TUNE 相关参数     |
| [`NODE_SEC`](#node_sec)           | NODE_SEC 安全相关参数    |
| [`NODE_ADMIN`](#node_admin)       | NODE_ADMIN 相关参数    |
| [`NODE_TIME`](#node_time)         | NODE_TIME 相关参数     |
| [`NODE_VIP`](#node_vip)           | NODE_VIP 相关参数      |
| [`HAPROXY`](#haproxy)             | HAPROXY 相关参数       |
| [`NODE_EXPORTER`](#node_exporter) | NODE_EXPORTER 相关参数 |
| [`VECTOR`](#vector)               | VECTOR 日志收集相关参数    |


----------------

## 参数概览

[`NODE_ID`](#node_id) 参数组用于定义节点的身份标识参数，包括节点名称、集群名称，以及是否从 PostgreSQL 借用身份。

| 参数                                              |     类型      |   级别    | 说明                            |
|:------------------------------------------------|:-----------:|:-------:|:------------------------------|
| [`nodename`](#nodename)                         |  `string`   |   `I`   | node 实例标识，如缺失则使用主机名，可选        |
| [`node_cluster`](#node_cluster)                 |  `string`   |   `C`   | node 集群标识，如缺失则使用默认值'nodes'，可选 |
| [`nodename_overwrite`](#nodename_overwrite)     |   `bool`    |   `C`   | 用 nodename 覆盖节点的主机名吗？         |
| [`nodename_exchange`](#nodename_exchange)       |   `bool`    |   `C`   | 在剧本主机之间交换 nodename 吗？         |
| [`node_id_from_pg`](#node_id_from_pg)           |   `bool`    |   `C`   | 如果可行，是否借用 postgres 身份作为节点身份？  |

[`NODE_DNS`](#node_dns) 参数组用于配置节点的 DNS 解析，包括静态 hosts 记录与动态 DNS 服务器。

| 参数                                                  |     类型      |    级别    | 说明                              |
|:----------------------------------------------------|:-----------:|:--------:|:--------------------------------|
| [`node_write_etc_hosts`](#node_write_etc_hosts)     |   `bool`    | `G/C/I`  | 是否修改目标节点上的 `/etc/hosts`？        |
| [`node_default_etc_hosts`](#node_default_etc_hosts) | `string[]`  |   `G`    | /etc/hosts 中的静态 DNS 记录          |
| [`node_etc_hosts`](#node_etc_hosts)                 | `string[]`  |   `C`    | /etc/hosts 中的额外静态 DNS 记录        |
| [`node_dns_method`](#node_dns_method)               |   `enum`    |   `C`    | 如何处理现有DNS服务器：add,none,overwrite |
| [`node_dns_servers`](#node_dns_servers)             | `string[]`  |   `C`    | /etc/resolv.conf 中的动态域名服务器列表    |
| [`node_dns_options`](#node_dns_options)             | `string[]`  |   `C`    | /etc/resolv.conf 中的DNS解析选项      |

[`NODE_PACKAGE`](#node_package) 参数组用于配置节点的软件源与软件包安装。

| 参数                                                |     类型     | 级别  | 说明                      |
|:--------------------------------------------------|:----------:|:---:|:------------------------|
| [`node_repo_modules`](#node_repo_modules)         |   `enum`   | `C` | 在节点上启用哪些软件源模块？默认为 local |
| [`node_repo_remove`](#node_repo_remove)           |   `bool`   | `C` | 配置节点软件仓库时，删除节点上现有的仓库吗？  |
| [`node_packages`](#node_packages)                 | `string[]` | `C` | 要在当前节点上安装的软件包列表         |
| [`node_default_packages`](#node_default_packages) | `string[]` | `G` | 默认在所有节点上安装的软件包列表        |

[`NODE_TUNE`](#node_tune) 参数组用于配置节点的内核参数、特性开关与性能调优模板。

| 参数                                                |     类型     | 级别  | 说明                                      |
|:--------------------------------------------------|:----------:|:---:|:----------------------------------------|
| [`node_disable_numa`](#node_disable_numa)         |   `bool`   | `C` | 禁用节点 numa，禁用需要重启                        |
| [`node_disable_swap`](#node_disable_swap)         |   `bool`   | `C` | 禁用节点 Swap，谨慎使用                          |
| [`node_static_network`](#node_static_network)     |   `bool`   | `C` | 重启后保留 DNS 解析器设置，即静态网络，默认启用              |
| [`node_disk_prefetch`](#node_disk_prefetch)       |   `bool`   | `C` | 在 HDD 上配置磁盘预取以提高性能                      |
| [`node_kernel_modules`](#node_kernel_modules)     | `string[]` | `C` | 在此节点上启用的内核模块列表                          |
| [`node_hugepage_count`](#node_hugepage_count)     |   `int`    | `C` | 主机节点分配的 2MB 大页数量，优先级比比例更高               |
| [`node_hugepage_ratio`](#node_hugepage_ratio)     |  `float`   | `C` | 主机节点分配的内存大页占总内存比例，0 默认禁用                |
| [`node_overcommit_ratio`](#node_overcommit_ratio) |  `float`   | `C` | 节点内存允许的 OverCommit 超额比率 (50-100)，0 默认禁用 |
| [`node_tune`](#node_tune)                         |   `enum`   | `C` | 节点调优配置文件：无，oltp,olap,crit,tiny          |
| [`node_sysctl_params`](#node_sysctl_params)       |   `dict`   | `C` | 额外的 sysctl 配置参数，k:v 格式                  |

[`NODE_SEC`](#node_sec) 参数组用于配置节点的安全相关选项，包括 SELinux、防火墙等。

| 参数                                                        |     类型      |   级别    | 说明                                         |
|:----------------------------------------------------------|:-----------:|:-------:|:-------------------------------------------|
| [`node_selinux_mode`](#node_selinux_mode)                 |   `enum`    |   `C`   | SELinux 模式：disabled, permissive, enforcing |
| [`node_firewall_mode`](#node_firewall_mode)               |   `enum`    |   `C`   | 防火墙模式：off, none, zone                      |
| [`node_firewall_intranet`](#node_firewall_intranet)       |  `cidr[]`   |   `C`   | 内网 CIDR 列表，用于配置防火墙规则                       |
| [`node_firewall_public_port`](#node_firewall_public_port) |  `port[]`   |   `C`   | 公网开放端口列表，默认为 [22, 80, 443, 5432]           |

[`NODE_ADMIN`](#node_admin) 参数组用于配置节点的管理员用户、数据目录与命令别名。

| 参数                                                    |     类型     | 级别  | 说明                                        |
|:------------------------------------------------------|:----------:|:---:|:------------------------------------------|
| [`node_data`](#node_data)                             |   `path`   | `C` | 节点主数据目录，默认为 `/data`                       |
| [`node_admin_enabled`](#node_admin_enabled)           |   `bool`   | `C` | 在目标节点上创建管理员用户吗？                           |
| [`node_admin_uid`](#node_admin_uid)                   |   `int`    | `C` | 节点管理员用户的 uid 和 gid                        |
| [`node_admin_username`](#node_admin_username)         | `username` | `C` | 节点管理员用户的名称，默认为 `dba`                      |
| [`node_admin_sudo`](#node_admin_sudo)                 |   `enum`   | `C` | 管理员用户的 sudo 权限：limited, nopass, all, none |
| [`node_admin_ssh_exchange`](#node_admin_ssh_exchange) |   `bool`   | `C` | 是否在节点集群之间交换管理员 ssh 密钥                     |
| [`node_admin_pk_current`](#node_admin_pk_current)     |   `bool`   | `C` | 将当前用户的 ssh 公钥添加到管理员的 authorized_keys 中吗？  |
| [`node_admin_pk_list`](#node_admin_pk_list)           | `string[]` | `C` | 要添加到管理员用户的 ssh 公钥                         |
| [`node_aliases`](#node_aliases)                       |   `dict`   | `C` | 配置主机上的 Shell Alias 命令，KV字典                |

[`NODE_TIME`](#node_time) 参数组用于配置节点的时区、NTP 时间同步与定时任务。

| 参数                                                  |     类型      |   级别    | 说明                            |
|:----------------------------------------------------|:-----------:|:-------:|:------------------------------|
| [`node_timezone`](#node_timezone)                   |  `string`   |   `C`   | 设置主机节点时区，空字符串跳过               |
| [`node_ntp_enabled`](#node_ntp_enabled)             |   `bool`    |   `C`   | 启用 chronyd 时间同步服务吗？           |
| [`node_ntp_servers`](#node_ntp_servers)             | `string[]`  |   `C`   | /etc/chrony.conf 中的 ntp 服务器列表 |
| [`node_crontab_overwrite`](#node_crontab_overwrite) |   `bool`    |   `C`   | 写入 /etc/crontab 时，追加写入还是全部覆盖？ |
| [`node_crontab`](#node_crontab)                     | `string[]`  |   `C`   | 在 /etc/crontab 中的 crontab 条目  |

[`NODE_VIP`](#node_vip) 参数组用于配置节点集群的 L2 VIP，由 keepalived 实现。

| 参数                                        |     类型     |  级别   | 说明                                  |
|:------------------------------------------|:----------:|:-----:|:------------------------------------|
| [`vip_enabled`](#vip_enabled)             |   `bool`   |  `C`  | 在此节点集群上启用 L2 vip 吗？                 |
| [`vip_address`](#vip_address)             |    `ip`    |  `C`  | 节点 vip 地址的 ipv4 格式，启用 vip 时为必要参数    |
| [`vip_vrid`](#vip_vrid)                   |   `int`    |  `C`  | 所需的整数，1-254，在同一 VLAN 中应唯一           |
| [`vip_role`](#vip_role)                   |   `enum`   |  `I`  | 可选，master/backup，默认为 backup         |
| [`vip_preempt`](#vip_preempt)             |   `bool`   | `C/I` | 可选，true/false，默认为 false，启用 vip 抢占   |
| [`vip_interface`](#vip_interface)         |  `string`  | `C/I` | 节点 vip 网络接口监听，默认为 eth0              |
| [`vip_dns_suffix`](#vip_dns_suffix)       |  `string`  |  `C`  | 节点 vip DNS 名称后缀，默认为空字符串             |
| [`vip_auth_pass`](#vip_auth_pass)         | `password` |  `C`  | VRRP 认证密码，空则使用 `<cls>-<vrid>` 作为默认值 |
| [`vip_exporter_port`](#vip_exporter_port) |   `port`   |  `C`  | keepalived exporter 监听端口，默认为 9650   |

[`HAPROXY`](#haproxy) 参数组用于配置节点上的 HAProxy 负载均衡器与服务暴露。

| 参数                                                  |     类型      |   级别    | 说明                            |
|:----------------------------------------------------|:-----------:|:-------:|:------------------------------|
| [`haproxy_enabled`](#haproxy_enabled)               |   `bool`    |   `C`   | 在此节点上启用 haproxy 吗？            |
| [`haproxy_clean`](#haproxy_clean)                   |   `bool`    | `G/C/A` | 清除所有现有的 haproxy 配置吗？          |
| [`haproxy_reload`](#haproxy_reload)                 |   `bool`    |   `A`   | 配置后重新加载 haproxy 吗？            |
| [`haproxy_auth_enabled`](#haproxy_auth_enabled)     |   `bool`    |   `G`   | 启用 haproxy 管理页面的身份验证？         |
| [`haproxy_admin_username`](#haproxy_admin_username) | `username`  |   `G`   | haproxy 管理用户名，默认为 `admin`     |
| [`haproxy_admin_password`](#haproxy_admin_password) | `password`  |   `G`   | haproxy 管理密码，默认为 `pigsty`     |
| [`haproxy_exporter_port`](#haproxy_exporter_port)   |   `port`    |   `C`   | haproxy exporter 的端口，默认为 9101 |
| [`haproxy_client_timeout`](#haproxy_client_timeout) | `interval`  |   `C`   | haproxy 客户端连接超时，默认为 24h       |
| [`haproxy_server_timeout`](#haproxy_server_timeout) | `interval`  |   `C`   | haproxy 服务器端连接超时，默认为 24h      |
| [`haproxy_services`](#haproxy_services)             | `service[]` |   `C`   | 要在节点上对外暴露的 haproxy 服务列表       |

[`NODE_EXPORTER`](#node_exporter) 参数组用于配置节点监控 Exporter。

| 参数                                                |   类型   | 级别  | 说明                          |
|:--------------------------------------------------|:------:|:---:|:----------------------------|
| [`node_exporter_enabled`](#node_exporter_enabled) | `bool` | `C` | 在此节点上配置 node_exporter 吗？    |
| [`node_exporter_port`](#node_exporter_port)       | `port` | `C` | node exporter 监听端口，默认为 9100 |
| [`node_exporter_options`](#node_exporter_options) | `arg`  | `C` | node_exporter 的额外服务器选项      |

[`VECTOR`](#vector) 参数组用于配置 Vector 日志收集器。

| 参数                                            |     类型     |  级别   | 说明                           |
|:----------------------------------------------|:----------:|:-----:|:-----------------------------|
| [`vector_enabled`](#vector_enabled)           |   `bool`   |  `C`  | 启用 vector 日志收集器吗？            |
| [`vector_clean`](#vector_clean)               |   `bool`   | `G/A` | 初始化期间清除 vector 数据目录吗？        |
| [`vector_data`](#vector_data)                 |   `path`   |  `C`  | vector 数据目录，默认为 /data/vector |
| [`vector_port`](#vector_port)                 |   `port`   |  `C`  | vector 指标监听端口，默认为 9598       |
| [`vector_read_from`](#vector_read_from)       |   `enum`   |  `C`  | vector 从头还是从尾开始读取日志          |
| [`vector_log_endpoint`](#vector_log_endpoint) | `string[]` |  `C`  | 日志发送目标端点，默认发送至 infra 组       |


------------------------------

## `NODE_ID`

每个节点都有**身份参数**，通过在`<cluster>.hosts`与`<cluster>.vars`中的相关参数进行配置。

Pigsty使用**IP地址**作为**数据库节点**的唯一标识，**该IP地址必须是数据库实例监听并对外提供服务的IP地址**，但不宜使用公网IP地址。
尽管如此，用户并不一定非要通过该IP地址连接至该数据库。例如，通过SSH隧道或跳板机中转的方式间接操作管理目标节点也是可行的。
但在标识数据库节点时，首要IPv4地址依然是节点的核心标识符。**这一点非常重要，用户应当在配置时保证这一点**。
IP地址即配置清单中主机的`inventory_hostname` ，体现为`<cluster>.hosts`对象中的`key`。

```yaml
node-test:
  hosts:
    10.10.10.11: { nodename: node-test-1 }
    10.10.10.12: { nodename: node-test-2 }
    10.10.10.13: { nodename: node-test-3 }
  vars:
    node_cluster: node-test
```

除此之外，在Pigsty监控系统中，节点还有两个重要的身份参数：[`nodename`](#nodename) 与 [`node_cluster`](#node_cluster)，这两者将在监控系统中被用作节点的 **实例标识**（`ins`） 与 **集群标识** （`cls`）。

```yaml
node_load1{cls="pg-meta", ins="pg-meta-1", ip="10.10.10.10", job="nodes"}
node_load1{cls="pg-test", ins="pg-test-1", ip="10.10.10.11", job="nodes"}
node_load1{cls="pg-test", ins="pg-test-2", ip="10.10.10.12", job="nodes"}
node_load1{cls="pg-test", ins="pg-test-3", ip="10.10.10.13", job="nodes"}
```

在执行默认的PostgreSQL部署时，因为Pigsty默认采用节点独占1:1部署，因此可以通过 [`node_id_from_pg`](#node_id_from_pg) 参数，将数据库实例的身份参数（ [`pg_cluster`](#pg_cluster) 借用至节点的`ins`与`cls`标签上。

|               名称                |    类型    |  层级   | 必要性    | 说明         |
|:-------------------------------:|:--------:|:-----:|--------|------------|
|      `inventory_hostname`       |   `ip`   | **-** | **必选** | **节点IP地址** |
|     [`nodename`](#nodename)     | `string` | **I** | 可选     | **节点名称**   |
| [`node_cluster`](#node_cluster) | `string` | **C** | 可选     | **节点集群名称** |


```yaml
#nodename:                # [实例] # 节点实例标识，如缺失则使用现有主机名，可选，无默认值
node_cluster: nodes       # [集群] # 节点集群标识，如缺失则使用默认值'nodes'，可选
nodename_overwrite: true          # 用 nodename 覆盖节点的主机名吗？
nodename_exchange: false          # 在剧本主机之间交换 nodename 吗？
node_id_from_pg: true             # 如果可行，是否借用 postgres 身份作为节点身份？
```




### `nodename`

参数名称： `nodename`， 类型： `string`， 层次：`I`

主机节点的身份参数，如果没有显式设置，则会使用现有的主机 Hostname 作为节点名。本参数虽然是身份参数，但因为有合理默认值，所以是可选项。

如果启用了 [`node_id_from_pg`](#node_id_from_pg) 选项（默认启用），且 `nodename` 没有被显式指定，
那么 [`nodename`](#nodename) 会尝试使用 `${pg_cluster}-${pg_seq}` 作为实例身份参数，如果集群没有定义 PGSQL 模块，那么会回归到默认值，也就是主机节点的 HOSTNAME。




### `node_cluster`

参数名称： `node_cluster`， 类型： `string`， 层次：`C`

该选项可为节点显式指定一个集群名称，通常在节点集群层次定义才有意义。使用默认空值将直接使用固定值`nodes`作为节点集群标识。

如果启用了 [`node_id_from_pg`](#node_id_from_pg) 选项（默认启用），且 `node_cluster` 没有被显式指定，那么 [`node_cluster`](#node_cluster) 会尝试使用 `${pg_cluster}-${pg_seq}` 作为集群身份参数，如果集群没有定义 PGSQL 模块，那么会回归到默认值 `nodes`。







### `nodename_overwrite`

参数名称： `nodename_overwrite`， 类型： `bool`， 层次：`C`

是否使用 [`nodename`](#nodename) 覆盖主机名？默认值为 `true`，在这种情况下，如果你设置了一个非空的 [`nodename`](#nodename) ，那么它会被用作当前主机的 HOSTNAME 。

当 `nodename` 配置为空时，如果  [`node_id_from_pg`](#node_id_from_pg) 参数被配置为 `true` （默认为真），那么 Pigsty 会尝试借用1:1定义在节点上的 PostgreSQL 实例的身份参数作为主机的节点名。
也就是 `{{ pg_cluster }}-{{ pg_seq }}`，如果该节点没有安装 PGSQL 模块，则会回归到默认什么都不做的状态。

因此，如果您将 [`nodename`](#nodename) 留空，并且没有启用 [`node_id_from_pg`](#node_id_from_pg) 参数时，Pigsty不会对现有主机名进行任何修改。






### `nodename_exchange`

参数名称： `nodename_exchange`， 类型： `bool`， 层次：`C`

是否在剧本节点间交换主机名？默认值为：`false`

启用此参数时，同一批组执行 [**`node.yml`**](/docs/node/playbook#nodeyml) 剧本的节点之间会相互交换节点名称，写入`/etc/hosts`中。





### `node_id_from_pg`

参数名称： `node_id_from_pg`， 类型： `bool`， 层次：`C`

从节点上 1:1 部署的 PostgreSQL 实例/集群上借用身份参数？ 默认值为 `true`。

Pigsty 中的 PostgreSQL 实例与节点默认使用 1:1 部署，因此，您可以从数据库实例上“借用” 身份参数。
此参数默认启用，这意味着一套 PostgreSQL 集群如果没有特殊配置，主机节点集群和实例的身份参数默认值是与数据库身份参数保持一致的。对于问题分析，监控数据处理都提供了额外便利。





------------------------------

## `NODE_DNS`

Pigsty会为节点配置静态DNS解析记录与动态DNS服务器。

如果您的节点供应商已经为您配置了DNS服务器，您可以将 [`node_dns_method`](#node_dns_method) 设置为 `none` 跳过DNS设置。

```yaml
node_write_etc_hosts: true        # modify `/etc/hosts` on target node?
node_default_etc_hosts:           # static dns records in `/etc/hosts`
  - "${admin_ip} i.pigsty"
node_etc_hosts: []                # extra static dns records in `/etc/hosts`
node_dns_method: add              # how to handle dns servers: add,none,overwrite
node_dns_servers: ['${admin_ip}'] # dynamic nameserver in `/etc/resolv.conf`
node_dns_options:                 # dns resolv options in `/etc/resolv.conf`
  - options single-request-reopen timeout:1
```




### node_write_etc_hosts

参数名称： `node_write_etc_hosts`， 类型： `bool`， 层次：`G|C|I`

是否修改目标节点上的 `/etc/hosts`？例如，在容器环境中通常不允许修改此配置文件。




### `node_default_etc_hosts`

参数名称： `node_default_etc_hosts`， 类型： `string[]`， 层次：`G`

默认写入所有节点 `/etc/hosts` 的静态DNS记录，默认值为：

```yaml
["${admin_ip} i.pigsty"]
```

[`node_default_etc_hosts`](#node_default_etc_hosts) 是一个数组，每个元素都是一条 DNS 记录，格式为 `<ip> <name>`，您可以指定多个用空格分隔的域名。

这个参数是用于配置全局静态DNS解析记录的，如果您希望为单个集群与实例配置特定的静态DNS解析，则可以使用 [`node_etc_hosts`](#node_etc_hosts) 参数。






### `node_etc_hosts`

参数名称： `node_etc_hosts`， 类型： `string[]`， 层次：`C`

写入节点 `/etc/hosts` 的额外的静态DNS记录，默认值为：`[]` 空数组。

本参数与 [`node_default_etc_hosts`](#node_default_etc_hosts)，形式一样，但用途不同：适合在集群/实例层面进行配置。




### `node_dns_method`

参数名称： `node_dns_method`， 类型： `enum`， 层次：`C`

如何配置DNS服务器？有三种选项：`add`、`none`、`overwrite`，默认值为 `add`。

* `add`：将 [`node_dns_servers`](#node_dns_servers) 中的记录**追加**至`/etc/resolv.conf`，并保留已有DNS服务器。（默认）
* `overwrite`：使用将 [`node_dns_servers`](#node_dns_servers) 中的记录覆盖`/etc/resolv.conf`
* `none`：跳过DNS服务器配置，如果您的环境中已经配置有DNS服务器，则可以直接跳过DNS配置。




### `node_dns_servers`

参数名称： `node_dns_servers`， 类型： `string[]`， 层次：`C`

配置 `/etc/resolv.conf` 中的动态DNS服务器列表：默认值为： `["${admin_ip}"]`，即将管理节点作为首要DNS服务器。





### `node_dns_options`

参数名称： `node_dns_options`， 类型： `string[]`， 层次：`C`

`/etc/resolv.conf` 中的DNS解析选项，默认值为：

```yaml
- "options single-request-reopen timeout:1"
```

如果 [`node_dns_method`](#node_dns_method) 配置为`add`或`overwrite`，则本配置项中的记录会被首先写入`/etc/resolv.conf` 中。具体格式请参考Linux文档关于`/etc/resolv.conf`的说明











------------------------------

## `NODE_PACKAGE`

Pigsty会为纳入管理的节点配置Yum源，并安装软件包。

```yaml
node_repo_modules: local          # upstream repo to be added on node, local by default.
node_repo_remove: true            # remove existing repo on node?
node_packages: [openssh-server]   # packages to be installed current nodes with latest version
#node_default_packages:           # default packages to be installed on all nodes
```  




### `node_repo_modules`

参数名称： `node_repo_modules`， 类型： `string`， 层次：`C/A`

需要在节点上添加的的软件源模块列表，形式同 [`repo_modules`](#repo_modules)。默认值为 `local`，即使用 [`repo_upstream`](#repo_upstream) 中 `local` 所指定的本地软件源。

当 Pigsty 纳管节点时，会根据此参数的值来过滤 [`repo_upstream`](#repo_upstream) 中的条目，只有 `module` 字段与此参数值匹配的条目才会被添加到节点的软件源中。






### `node_repo_remove`

参数名称： `node_repo_remove`， 类型： `bool`， 层次：`C/A`

是否移除节点已有的软件仓库定义？默认值为：`true`。

如果启用，则Pigsty会 **移除** 节点上`/etc/yum.repos.d`中原有的配置文件，并备份至`/etc/yum.repos.d/backup`。
在 Debian/Ubuntu 系统上，则是 `/etc/apt/sources.list(.d)` 备份至 `/etc/apt/backup`。






### `node_packages`

参数名称： `node_packages`， 类型： `string[]`， 层次：`C`

在当前节点上要安装并升级的软件包列表，默认值为：`[openssh-server]` ，即在安装时会将 sshd 升级到最新版本（避免安全漏洞）。

每一个数组元素都是字符串：由逗号分隔的软件包名称。形式上与 [`node_packages_default`](#node_default_packages) 相同。本参数通常用于在节点/集群层面指定需要额外安装的软件包。

在本参数中指定的软件包，会 **升级到可用的最新版本**，如果您需要保持现有节点软件版本不变（存在即可），请使用 [`node_default_packages`](#node_default_packages) 参数。






### `node_default_packages`

参数名称： `node_default_packages`， 类型： `string[]`， 层次：`G`

默认在所有节点上安装的软件包，默认值是 EL 7/8/9 通用的 RPM 软件包列表，数组，每个元素为逗号分隔的包名：

字符串数组类型，每一行都是 **由空格分隔** 的软件包列表字符串，指定默认在所有节点上安装的软件包列表。

在此变量中指定的软件包，只要求 **存在**，而不要求 **最新**。如果您需要安装最新版本的软件包，请使用 [`node_packages`](#node_packages) 参数。

本参数没有默认值，即默认值为未定义状态。如果用户不在配置文件中显式指定本参数，则 Pigsty 会从根据当前节点的操作系统族，从定义于 [`roles/node_id/vars`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/) 中的 `node_packages_default` 变量中加载获取默认值。

默认值（EL系操作系统）：

```yaml
- lz4,unzip,bzip2,pv,jq,git,ncdu,make,patch,bash,lsof,wget,uuid,tuned,nvme-cli,numactl,sysstat,iotop,htop,rsync,tcpdump
- python3,python3-pip,socat,lrzsz,net-tools,ipvsadm,telnet,ca-certificates,openssl,keepalived,etcd,haproxy,chrony,pig
- zlib,yum,audit,bind-utils,readline,vim-minimal,node_exporter,grubby,openssh-server,openssh-clients,chkconfig,vector
```

默认值（Debian/Ubuntu）：

```yaml
- lz4,unzip,bzip2,pv,jq,git,ncdu,make,patch,bash,lsof,wget,uuid,tuned,nvme-cli,numactl,sysstat,iotop,htop,rsync
- python3,python3-pip,socat,lrzsz,net-tools,ipvsadm,telnet,ca-certificates,openssl,keepalived,etcd,haproxy,chrony,pig
- zlib1g,acl,dnsutils,libreadline-dev,vim-tiny,node-exporter,openssh-server,openssh-client,vector
```

本参数形式上与 [`node_packages`](#node_packages) 相同，但本参数通常用于全局层面指定所有节点都必须安装的默认软件包






------------------------------

## `NODE_TUNE`

主机节点特性、内核模块与参数调优模板。


```yaml
node_disable_numa: false          # disable node numa, reboot required
node_disable_swap: false          # disable node swap, use with caution
node_static_network: true         # preserve dns resolver settings after reboot
node_disk_prefetch: false         # setup disk prefetch on HDD to increase performance
node_kernel_modules: [ softdog, ip_vs, ip_vs_rr, ip_vs_wrr, ip_vs_sh ]
node_hugepage_count: 0            # number of 2MB hugepage, take precedence over ratio
node_hugepage_ratio: 0            # node mem hugepage ratio, 0 disable it by default
node_overcommit_ratio: 0          # node mem overcommit ratio, 0 disable it by default
node_tune: oltp                   # node tuned profile: none,oltp,olap,crit,tiny
node_sysctl_params: { }           # sysctl parameters in k:v format in addition to tuned
```





### `node_disable_numa`

参数名称： `node_disable_numa`， 类型： `bool`， 层次：`C`

是否关闭NUMA？默认不关闭NUMA：`false`。

注意，关闭NUMA需要重启机器后方可生效！如果您不清楚如何绑核，在生产环境使用数据库时建议关闭 NUMA。







### `node_disable_swap`

参数名称： `node_disable_swap`， 类型： `bool`， 层次：`C`

是否关闭 SWAP ？ 默认不关闭SWAP：`false`。

通常情况下不建议关闭 SWAP，例外情况是如果您有足够的内存用于独占式 PostgreSQL 部署，则可以关闭 SWAP 提高性能。

例外：当您的节点用于部署 Kubernetes 模块时，应当禁用SWAP。






### `node_static_network`

参数名称： `node_static_network`， 类型： `bool`， 层次：`C`

是否使用静态DNS服务器, 类型：`bool`，层级：C，默认值为：`true`，默认启用。

启用静态网络，意味着您的DNS Resolv配置不会因为机器重启与网卡变动被覆盖，建议启用，或由网络工程师负责配置。





### `node_disk_prefetch`

参数名称： `node_disk_prefetch`， 类型： `bool`， 层次：`C`

是否启用磁盘预读？默认不启用：`false`。

针对HDD部署的实例可以优化性能，使用机械硬盘时建议启用。





### `node_kernel_modules`

参数名称： `node_kernel_modules`， 类型： `string[]`， 层次：`C`

启用哪些内核模块？默认启用以下内核模块：

```yaml
node_kernel_modules: [ softdog, ip_vs, ip_vs_rr, ip_vs_wrr, ip_vs_sh ]
```

形式上是由内核模块名称组成的数组，声明了需要在节点上安装的内核模块。






### `node_hugepage_count`

参数名称： `node_hugepage_count`， 类型： `int`， 层次：`C`

在节点上分配 2MB 大页的数量，默认为 `0`，另一个相关的参数是 [`node_hugepage_ratio`](#node_hugepage_ratio)。

如果这两个参数 `node_hugepage_count` 和 `node_hugepage_ratio` 都为 `0`（默认），则大页将完全被禁用，本参数的优先级相比 [`node_hugepage_ratio`](#node_hugepage_ratio) 更高，因为它更加精确。

如果设定了一个非零值，它将被写入 `/etc/sysctl.d/hugepage.conf` 中应用生效；负值将不起作用，高于 90% 节点内存的数字将被限制为节点内存的 90%

如果不为零，它应该略大于[`pg_shared_buffer_ratio`](#pg_shared_buffer_ratio) 的对应值，这样才能让 PostgreSQL 用上大页。





### `node_hugepage_ratio`

参数名称： `node_hugepage_ratio`， 类型： `float`， 层次：`C`

节点内存大页占内存的比例，默认为 `0`，有效范围：`0` ~ `0.40`

此内存比例将以大页的形式分配，并为PostgreSQL预留。 [`node_hugepage_count`](#node_hugepage_count) 是具有更高优先级和精度的参数版本。

默认值：`0`，这将设置 `vm.nr_hugepages=0` 并完全不使用大页。

本参数应该等于或略大于[`pg_shared_buffer_ratio`](#pg_shared_buffer_ratio)，如果不为零。

例如，如果您为Postgres共享缓冲区默认分配了25%的内存，您可以将此值设置为 0.27 ~ 0.30，并在初始化后使用 `/pg/bin/pg-tune-hugepage` 精准回收浪费的大页。





### `node_overcommit_ratio`

参数名称： `node_overcommit_ratio`， 类型： `int`， 层次：`C`

节点内存超额分配比率，默认为：`0`。这是一个从 `0` 到 `100+` 的整数。

默认值：`0`，这将设置 `vm.overcommit_memory=0`，否则将使用 `vm.overcommit_memory=2`， 并使用此值作为 `vm.overcommit_ratio`。

建议在 pgsql 独占节点上设置 `vm.overcommit_ratio`，避免内存过度提交。





### `node_tune`

参数名称： `node_tune`， 类型： `enum`， 层次：`C`

针对机器进行调优的预制方案，基于`tuned` 提供服务。有四种预制模式：

* `tiny`：微型虚拟机
* `oltp`：常规OLTP模板，优化延迟（默认值）
* `olap`：常规OLAP模板，优化吞吐量
* `crit`：核心金融业务模板，优化脏页数量

通常，数据库的调优模板 [`pg_conf`](/docs/pgsql/param#pg_conf)应当与机器调优模板配套。







### `node_sysctl_params`

参数名称： `node_sysctl_params`， 类型： `dict`， 层次：`C`

使用 K:V 形式的 sysctl 内核参数，会添加到 `tuned` profile 中，默认值为： `{}` 空对象。

这是一个 KV 结构的字典参数，Key 是内核 `sysctl` 参数名，Value 是参数值。你也可以考虑直接在 `roles/node/templates` 中的 tuned 模板中直接定义额外的 sysctl 参数。







------------------------------

## `NODE_SEC`

节点安全相关参数，包括 SELinux 与防火墙配置。

```yaml
node_selinux_mode: permissive             # selinux mode: disabled, permissive, enforcing
node_firewall_mode: zone                  # firewall mode: disabled, zone, rules
node_firewall_intranet:           # which intranet cidr considered as internal network
  - 10.0.0.0/8
  - 192.168.0.0/16
  - 172.16.0.0/12
node_firewall_public_port:        # expose these ports to public network in (zone, strict) mode
  - 22                            # enable ssh access
  - 80                            # enable http access
  - 443                           # enable https access
  - 5432                          # enable postgresql access (think twice before exposing it!)
```




### `node_selinux_mode`

参数名称： `node_selinux_mode`， 类型： `enum`， 层次：`C`

SELinux 运行模式，默认值为：`permissive`（宽容模式）。

可选值：

* `disabled`：完全禁用 SELinux（等同于旧版本的 `node_disable_selinux: true`）
* `permissive`：宽容模式，记录违规但不阻止（推荐，默认值）
* `enforcing`：强制模式，严格执行 SELinux 策略

如果您没有专业的操作系统/安全专家，建议使用 `permissive` 或 `disabled` 模式。

请注意，SELinux 默认只在 EL 系列系统上启用，如果你想要在 Debian/Ubuntu 系统上启用 SELinux，请自行安装并启用 SELinux 配置。
另外，SELinux 模式的更改可能需要重启系统才能完全生效。





### `node_firewall_mode`

参数名称： `node_firewall_mode`， 类型： `enum`， 层次：`C`

防火墙运行模式，默认值为：`zone`（区域模式）。

可选值：

* `off`：关闭并禁用防火墙（等同于旧版本的 `node_disable_firewall: true`）
* `none`：什么也不管，维持现有防火墙规则不变。
* `zone`：使用 firewalld / ufw 配置防火墙规则：内网信任，公网只开放指定端口。

在 EL 系统上使用 `firewalld` 服务，在 Debian/Ubuntu 系统上使用 `ufw` 服务。

如果您在完全受信任的内网环境中部署，或者通过云厂商安全组等方式进行访问控制，您可以选择 `none` 模式以保留现有防火墙配置，或者设置为 `off` 完全禁用防火墙。

生产环境建议使用 `zone` 模式，配合 [`node_firewall_intranet`](#node_firewall_intranet) 和 [`node_firewall_public_port`](#node_firewall_public_port) 进行精细化访问控制。

请注意，`zone` 模式不会自动替你启用防火墙。




### `node_firewall_intranet`

参数名称： `node_firewall_intranet`， 类型： `cidr[]`， 层次：`C`

内网 CIDR 地址列表，空数组，自 v4.0 版本引入，默认值为：

```yaml
node_firewall_intranet:
  - 10.0.0.0/8
  - 172.16.0.0/12
  - 192.168.0.0/16
```

此参数定义了被视为"内部网络"的 IP 地址范围。来自这些网络的流量将被允许访问所有服务端口，而无需单独配置开放规则。

这些 CIDR 范围内的主机将被视为可信内网主机，享有更宽松的防火墙规则。同时，在 PG/PGB HBA 规则中，这里定义的内网范围也会被视作 “内网” 对待。





### `node_firewall_public_port`

参数名称： `node_firewall_public_port`， 类型： `port[]`， 层次：`C`

公网开放端口列表，默认值为：`[22, 80, 443, 5432]`。

此参数定义了对公网（非内网 CIDR）开放的端口列表。默认开放的端口包括：

* `22`：SSH 服务端口
* `80`：HTTP 服务端口
* `443`：HTTPS 服务端口
* `5432`：PostgreSQL 数据库端口

您可以根据实际需求调整此列表。例如，如果不需要对外暴露数据库端口，可以移除 `5432`：

```yaml
node_firewall_public_port: [22, 80, 443]
```

Pigsty 中 PostgreSQL 默认安全策略仅允许管理员通过公网访问数据库端口。
如果您想要让其他用户也能通过公网访问数据库，请确保在 PG/PGB HBA 规则中正确配置相应的访问权限。

如果你想要将其他服务端口对公网开放，也可以将它们添加到此列表中，
如果您想要收紧防火墙规则，可以移除 5432 数据库端口，确保只开放真正需要的服务端口。

请注意，只有当 [`node_firewall_mode`](#node_firewall_mode) 设置为 `zone` 时，此参数才会生效。






------------------------------

## `NODE_ADMIN`

这一节关于主机节点上的管理员，谁能登陆，怎么登陆。

```yaml
node_data: /data                  # node main data directory, `/data` by default
node_admin_enabled: true          # create a admin user on target node?
node_admin_uid: 88                # uid and gid for node admin user
node_admin_username: dba          # name of node admin user, `dba` by default
node_admin_sudo: nopass           # admin user's sudo privilege: limited, nopass, all, none
node_admin_ssh_exchange: true     # exchange admin ssh key among node cluster
node_admin_pk_current: true       # add current user's ssh pk to admin authorized_keys
node_admin_pk_list: []            # ssh public keys to be added to admin user
node_aliases: {}                  # alias name -> IP address dict for `/etc/hosts`
```





### `node_data`

参数名称： `node_data`， 类型： `path`， 层次：`C`

节点的主数据目录，默认为 `/data`。

如果该目录不存在，则该目录会被创建。该目录应当由 `root` 拥有，并拥有 `777` 权限。






### `node_admin_enabled`

参数名称： `node_admin_enabled`， 类型： `bool`， 层次：`C`

是否在本节点上创建一个专用管理员用户？默认值为：`true`。

Pigsty默认会在每个节点上创建一个管理员用户（拥有免密sudo与ssh权限），默认的管理员名为`dba (uid=88)`的管理用户，可以从元节点上通过SSH免密访问环境中的其他节点并执行免密sudo。




### `node_admin_uid`

参数名称： `node_admin_uid`， 类型： `int`， 层次：`C`

管理员用户UID，默认值为：`88`。

请尽可能确保 UID 在所有节点上都相同，可以避免一些无谓的权限问题。

如果默认 UID 88 已经被占用，您可以选择一个其他 UID ，手工分配时请注意UID命名空间冲突。







### `node_admin_username`

参数名称： `node_admin_username`， 类型： `username`， 层次：`C`

管理员用户名，默认为 `dba` 。




### `node_admin_sudo`

参数名称： `node_admin_sudo`， 类型： `enum`， 层次：`C`

管理员用户的 sudo 权限级别，默认值为：`nopass`（免密 sudo）。

可选值：

* `none`：不授予 sudo 权限
* `limited`：授予有限的 sudo 权限（仅允许执行特定命令）
* `nopass`：授予免密 sudo 权限（默认，允许执行所有命令但无需密码）
* `all`：授予完整 sudo 权限（需要密码）

Pigsty 默认使用 `nopass` 模式，管理员用户可以无需密码执行任意 sudo 命令，这对于自动化运维非常方便。

在安全要求较高的生产环境中，您可能需要将此参数调整为 `limited` 或 `all`，以限制管理员的权限范围。





### `node_admin_ssh_exchange`

参数名称： `node_admin_ssh_exchange`， 类型： `bool`， 层次：`C`

在节点集群间交换节点管理员SSH密钥, 类型：`bool`，层级：C，默认值为：`true`

启用时，Pigsty会在执行剧本时，在成员间交换SSH公钥，允许管理员 [`node_admin_username`](#node_admin_username) 从不同节点上相互访问。





### `node_admin_pk_current`

参数名称： `node_admin_pk_current`， 类型： `bool`， 层次：`C`

是否将当前节点 & 用户的公钥加入管理员账户，默认值是： `true`

启用时，将会把当前节点上执行此剧本的管理用户的SSH公钥（`~/.ssh/id_rsa.pub`）拷贝至目标节点管理员用户的 `authorized_keys` 中。

生产环境部署时，请务必注意此参数，此参数会将当前执行命令用户的默认公钥安装至所有机器的管理用户上。








### `node_admin_pk_list`

参数名称： `node_admin_pk_list`， 类型： `string[]`， 层次：`C`

可登陆管理员的公钥列表，默认值为：`[]` 空数组。

数组的每一个元素为字符串，内容为写入到管理员用户`~/.ssh/authorized_keys`中的公钥，持有对应私钥的用户可以以管理员身份登录。

生产环境部署时，请务必注意此参数，仅将信任的密钥加入此列表中。




### `node_aliases`

参数名称： `node_aliases`， 类型： `dict`， 层次：`C`

用于写入主机 `/etc/profile.d/node.alias.sh` 的 shell 别名，默认值为：`{}` 空字典。

此参数允许您为主机的 shell 环境配置方便使用的 alias，此处定义的 K:V 字典将以 `alias k=v` 的形式写入到目标节点的 `profile.d` 文件中生效。

例如，以下命令声明了一个名为 `dp` 的别名，用于快速执行 `docker compose pull` 命令：

```yaml
node_alias:
  dp: 'docker compose pull'
```







------------------------------

## `NODE_TIME`

关于主机时间/时区/NTP/定时任务的相关配置。

时间同步对于数据库服务来说非常重要，请确保系统 `chronyd` 授时服务正常运行。

```yaml
node_timezone: ''                 # 设置节点时区，空字符串表示跳过
node_ntp_enabled: true            # 启用chronyd时间同步服务？
node_ntp_servers:                 # `/etc/chrony.conf`中的ntp服务器
  - pool pool.ntp.org iburst
node_crontab_overwrite: true      # 覆盖还是追加到`/etc/crontab`？
node_crontab: [ ]                 # `/etc/crontab`中的crontab条目
```


### `node_timezone`

参数名称： `node_timezone`， 类型： `string`， 层次：`C`

设置节点时区，空字符串表示跳过。默认值是空字符串，默认不会修改默认的时区（即使用通常的默认值UTC）

在中国地区使用时，建议设置为 `Asia/Hong_Kong` / `Asia/ShangHai`。




### `node_ntp_enabled`

参数名称： `node_ntp_enabled`， 类型： `bool`， 层次：`C`

启用chronyd时间同步服务？默认值为：`true`

此时 Pigsty 将使用 [`node_ntp_servers`](#node_ntp_servers) 中指定的 NTP服务器列表覆盖节点的 `/etc/chrony.conf`。

如果您的节点已经配置好了 NTP 服务器，那么可以将此参数设置为 `false` 跳过时间同步配置。




### `node_ntp_servers`

参数名称： `node_ntp_servers`， 类型： `string[]`， 层次：`C`

在 `/etc/chrony.conf` 中使用的 NTP 服务器列表。默认值为：`["pool pool.ntp.org iburst"]`

本参数是一个数组，每一个数组元素是一个字符串，代表一行 NTP 服务器配置。仅当 [`node_ntp_enabled`](#node_ntp_enabled) 启用时生效。

Pigsty 默认使用全球 NTP 服务器 `pool.ntp.org`，您可以根据自己的网络环境修改此参数，例如 `cn.pool.ntp.org iburst`，或内网的时钟服务。

您也可以在配置中使用 `${admin_ip}` 占位符，使用管理节点上的时间服务器。

```yaml
node_ntp_servers: [ 'pool ${admin_ip} iburst' ]
```





### `node_crontab_overwrite`

参数名称： `node_crontab_overwrite`， 类型： `bool`， 层次：`C`

处理 [`node_crontab`](#node_crontab) 中的定时任务时，是追加还是覆盖？默认值为：`true`，即覆盖。

如果您希望在节点上追加定时任务，可以将此参数设置为 `false`，Pigsty 将会在节点的 crontab 上 **追加**，而非 **覆盖所有** 定时任务。






### `node_crontab`

参数名称： `node_crontab`， 类型： `string[]`， 层次：`C`

定义在节点 `/etc/crontab` 中的定时任务：默认值为：`[]` 空数组。

每一个数组数组元素都是一个字符串，代表一行定时任务。使用标准的 cron 格式定义。

例如，以下配置会以  postgres 用户在每天凌晨1点执行全量备份任务。

```yaml
node_crontab: 
  - '00 01 * * * postgres /pg/bin/pg-backup full' ] # make a full backup every 1am
```




------------------------------

## `NODE_VIP`

您可以为节点集群绑定一个可选的 L2 VIP，默认不启用此特性。L2 VIP 只对一组节点集群有意义，该 VIP 会根据配置的优先级在集群中的节点之间进行切换，确保节点服务的高可用。

请注意，L2 VIP  **只能** 在同一 L2 网段中使用，这可能会对您的网络拓扑产生额外的限制，如果不想受此限制，您可以考虑使用 DNS LB 或者 Haproxy 实现类似的功能。

当启用此功能时，您需要为这个 L2 VIP 显式分配可用的 [`vip_address`](#vip_address) 与 [`vip_vrid`](#vip_vrid)，用户应当确保这两者在同一网段内唯一。

请注意，NODE VIP 与 PG VIP 不同，PG VIP 是为 PostgreSQL 实例服务的 VIP，由 vip-manager 组件管理并绑定在 PG 集群主库上。
而 NODE VIP 由 Keepalived 组件管理，绑定在节点集群上。可以是主备模式，也可以是负载均衡模式，两者可以并存。


```yaml
vip_enabled: false                # enable vip on this node cluster?
# vip_address:         [IDENTITY] # node vip address in ipv4 format, required if vip is enabled
# vip_vrid:            [IDENTITY] # required, integer, 1-254, should be unique among same VLAN
vip_role: backup                  # optional, `master/backup`, backup by default, use as init role
vip_preempt: false                # optional, `true/false`, false by default, enable vip preemption
vip_interface: eth0               # node vip network interface to listen, `eth0` by default
vip_dns_suffix: ''                # node vip dns name suffix, empty string by default
vip_auth_pass: ''                 # vrrp auth password, empty to use `<cls>-<vrid>` as default
vip_exporter_port: 9650           # keepalived exporter listen port, 9650 by default
```




### `vip_enabled`

参数名称： `vip_enabled`， 类型： `bool`， 层次：`C`

是否在当前这个节点集群中配置一个由 Keepalived 管理的 L2 VIP ？ 默认值为： `false`。







### `vip_address`

参数名称： `vip_address`， 类型： `ip`， 层次：`C`

节点 VIP 地址，IPv4 格式（不带 CIDR 网段后缀），当节点启用 [`vip_enabled`](#vip_enabled) 时，这是一个必选参数。

本参数没有默认值，这意味着您必须显式地为节点集群分配一个唯一的 VIP 地址。




### `vip_vrid`

参数名称： `vip_vrid`， 类型： `int`， 层次：`C`

VRID 是一个范围从 `1` 到 `254` 的正整数，用于标识一个网络中的 VIP，当节点启用 [`vip_enabled`](#vip_enabled) 时，这是一个必选参数。

本参数没有默认值，这意味着您必须显式地为节点集群分配一个网段内唯一的 ID。







### `vip_role`

参数名称： `vip_role`， 类型： `enum`， 层次：`I`

节点 VIP 角色，可选值为： `master` 或 `backup`，默认值为 `backup`

该参数的值会被设置为 keepalived 的初始状态。




### `vip_preempt`

参数名称： `vip_preempt`， 类型： `bool`， 层次：`C/I`

是否启用 VIP 抢占？可选参数，默认值为 `false`，即不抢占 VIP。

所谓抢占，是指一个 `backup` 角色的节点，当其优先级高于当前存活且正常工作的 `master` 角色的节点时，是否取抢占其 VIP？






### `vip_interface`

参数名称： `vip_interface`， 类型： `string`， 层次：`C/I`

节点 VIP 监听使用的网卡，默认为 `eth0`。

您应当使用与节点主IP地址（即：你填入清单中IP地址）所使用网卡相同的名称。

如果你的节点有着不同的网卡名称，你可以在实例/节点层次对其进行覆盖。




### `vip_dns_suffix`

参数名称： `vip_dns_suffix`， 类型： `string`， 层次：`C/I`

节点集群 L2 VIP 使用的DNS名称，默认是空字符串，即直接使用集群名本身作为DNS名。




### `vip_auth_pass`

参数名称： `vip_auth_pass`， 类型： `password`， 层次：`C`

VRRP 认证密码，用于 keepalived VRRP 协议认证。默认为空字符串。

当为空时，Pigsty 会自动使用 `<cluster_name>-<vrid>` 模式生成密码。
在有安全要求的生产环境中，建议设置一个显式的强密码。




### `vip_exporter_port`

参数名称： `vip_exporter_port`， 类型： `port`， 层次：`C/I`

keepalived exporter 监听端口号，默认为：`9650`。






------------------------------

## `HAPROXY`

HAProxy 默认在所有节点上安装启用，并以类似于 Kubernetes NodePort 的方式对外暴露服务。

[`PGSQL`](/docs/pgsql) 模块对外[服务](pgsql-service)使用到了 Haproxy。


```yaml
haproxy_enabled: true             # 在此节点上启用haproxy？
haproxy_clean: false              # 清理所有现有的haproxy配置？
haproxy_reload: true              # 配置后重新加载haproxy？
haproxy_auth_enabled: true        # 为haproxy管理页面启用身份验证
haproxy_admin_username: admin     # haproxy管理用户名，默认为`admin`
haproxy_admin_password: pigsty    # haproxy管理密码，默认为`pigsty`
haproxy_exporter_port: 9101       # haproxy管理/导出端口，默认为9101
haproxy_client_timeout: 24h       # 客户端连接超时，默认为24小时
haproxy_server_timeout: 24h       # 服务器端连接超时，默认为24小时
haproxy_services: []              # 需要在节点上暴露的haproxy服务列表
```



### `haproxy_enabled`

参数名称： `haproxy_enabled`， 类型： `bool`， 层次：`C`

在此节点上启用haproxy？默认值为： `true`。





### `haproxy_clean`

参数名称： `haproxy_clean`， 类型： `bool`， 层次：`G/C/A`

清理所有现有的haproxy配置？默认值为 `false`。




### `haproxy_reload`

参数名称： `haproxy_reload`， 类型： `bool`， 层次：`A`

配置后重新加载 haproxy？默认值为 `true`，配置更改后会重新加载haproxy。

如果您希望在应用配置前进行手工检查，您可以使用命令参数关闭此选项，并进行检查后再应用。




### `haproxy_auth_enabled`

参数名称： `haproxy_auth_enabled`， 类型： `bool`， 层次：`G`

为haproxy管理页面启用身份验证，默认值为 `true`，它将要求管理页面进行http基本身份验证。

建议不要禁用认证，因为您的流量控制页面将对外暴露，这是比较危险的。




### `haproxy_admin_username`

参数名称： `haproxy_admin_username`， 类型： `username`， 层次：`G`

haproxy 管理员用户名，默认为：`admin`。






### `haproxy_admin_password`

参数名称： `haproxy_admin_password`， 类型： `password`， 层次：`G`

haproxy管理密码，默认为 `pigsty`

> 在生产环境中请务必修改此密码！




### `haproxy_exporter_port`

参数名称： `haproxy_exporter_port`， 类型： `port`， 层次：`C`

haproxy 流量管理/指标对外暴露的端口，默认为：`9101`







### `haproxy_client_timeout`

参数名称： `haproxy_client_timeout`， 类型： `interval`， 层次：`C`

客户端连接超时，默认为 `24h`。

设置一个超时可以避免难以清理的超长的连接，但如果您真的需要一个长连接，您可以将其设置为更长的时间。







### `haproxy_server_timeout`

参数名称： `haproxy_server_timeout`， 类型： `interval`， 层次：`C`

服务端连接超时，默认为 `24h`。

设置一个超时可以避免难以清理的超长的连接，但如果您真的需要一个长连接，您可以将其设置为更长的时间。





### `haproxy_services`

参数名称： `haproxy_services`， 类型： `service[]`， 层次：`C`

需要在此节点上通过 Haproxy 对外暴露的服务列表，默认值为： `[]` 空数组。

每一个数组元素都是一个服务定义，下面是一个服务定义的例子：

```yaml
haproxy_services:                   # list of haproxy service

  # expose pg-test read only replicas
  - name: pg-test-ro                # [REQUIRED] service name, unique
    port: 5440                      # [REQUIRED] service port, unique
    ip: "*"                         # [OPTIONAL] service listen addr, "*" by default
    protocol: tcp                   # [OPTIONAL] service protocol, 'tcp' by default
    balance: leastconn              # [OPTIONAL] load balance algorithm, roundrobin by default (or leastconn)
    maxconn: 20000                  # [OPTIONAL] max allowed front-end connection, 20000 by default
    default: 'inter 3s fastinter 1s downinter 5s rise 3 fall 3 on-marked-down shutdown-sessions slowstart 30s maxconn 3000 maxqueue 128 weight 100'
    options:
      - option httpchk
      - option http-keep-alive
      - http-check send meth OPTIONS uri /read-only
      - http-check expect status 200
    servers:
      - { name: pg-test-1 ,ip: 10.10.10.11 , port: 5432 , options: check port 8008 , backup: true }
      - { name: pg-test-2 ,ip: 10.10.10.12 , port: 5432 , options: check port 8008 }
      - { name: pg-test-3 ,ip: 10.10.10.13 , port: 5432 , options: check port 8008 }

```

每个服务定义会被渲染为 `/etc/haproxy/<service.name>.cfg` 配置文件，并在 Haproxy 重载后生效。









------------------------------

## `NODE_EXPORTER`

```yaml
node_exporter_enabled: true       # setup node_exporter on this node?
node_exporter_port: 9100          # node exporter listen port, 9100 by default
node_exporter_options: '--no-collector.softnet --no-collector.nvme --collector.tcpstat --collector.processes'
```



### `node_exporter_enabled`

参数名称： `node_exporter_enabled`， 类型： `bool`， 层次：`C`

在当前节点上启用节点指标收集器？默认启用：`true`




### `node_exporter_port`

参数名称： `node_exporter_port`， 类型： `port`， 层次：`C`

对外暴露节点指标使用的端口，默认为 `9100`。





### `node_exporter_options`

参数名称： `node_exporter_options`， 类型： `arg`， 层次：`C`

节点指标采集器的命令行参数，默认值为：

`--no-collector.softnet --no-collector.nvme --collector.tcpstat --collector.processes`

该选项会启用/禁用一些指标收集器，请根据您的需要进行调整。






------------------------------

## `VECTOR`

Vector 是 Pigsty v4.0 使用的日志收集组件，会收集各个模块产生的日志并发送至基础设施节点上的 VictoriaLogs 服务。

* `INFRA`： 基础设施组件的日志只会在 Infra 节点上收集。
    * `nginx-access`: `/var/log/nginx/access.log`
    * `nginx-error`: `/var/log/nginx/error.log`
    * `grafana`: `/var/log/grafana/grafana.log`

* `NODES`：主机相关的日志，所有节点上都会启用收集。
    * `syslog`: `/var/log/messages` （Debian上为 `/var/log/syslog`）
    * `dmesg`: `/var/log/dmesg`
    * `cron`: `/var/log/cron`

* `PGSQL`：PostgreSQL 相关的日志，只有节点配置了 [PGSQL](/docs/pgsql) 模块才会启用收集。
    * `postgres`: `/pg/log/postgres/*`
    * `patroni`: `/pg/log/patroni.log`
    * `pgbouncer`: `/pg/log/pgbouncer/pgbouncer.log`
    * `pgbackrest`: `/pg/log/pgbackrest/*.log`

* `REDIS`：Redis 相关日志，只有节点配置了 [REDIS](/docs/redis) 模块才会启用收集。
    * `redis`: `/var/log/redis/*.log`

> 日志目录会根据这些参数的配置自动调整：[`pg_log_dir`](/docs/pgsql/param#pg_log_dir), [`patroni_log_dir`](/docs/pgsql/param#patroni_log_dir), [`pgbouncer_log_dir`](/docs/pgsql/param#pgbouncer_log_dir), [`pgbackrest_log_dir`](/docs/pgsql/param#pgbackrest_log_dir)


```yaml
vector_enabled: true              # 启用 vector 日志收集器吗？
vector_clean: false               # 初始化时清除 vector 数据目录吗？
vector_data: /data/vector         # vector 数据目录，默认为 /data/vector
vector_port: 9598                 # vector 指标端口，默认为 9598
vector_read_from: beginning       # vector 从头还是从尾开始读取日志
vector_log_endpoint: [ infra ]    # 日志发送目标端点，默认发送至 infra 组
```



### `vector_enabled`

参数名称： `vector_enabled`， 类型： `bool`， 层次：`C`

是否启用 Vector 日志收集服务？默认值为： `true`

Vector 是 Pigsty v4.0 使用的日志收集代理，替代了之前版本使用的 Promtail，用于收集节点和服务的日志并发送至 VictoriaLogs。




### `vector_clean`

参数名称： `vector_clean`， 类型： `bool`， 层次：`G/A`

是否在安装 Vector 时清除已有数据目录？默认值为： `false`。

默认不会清理，当您选择清理时，Pigsty 会在部署 Vector 时移除现有数据目录 [`vector_data`](#vector_data)，这意味着 Vector 会重新收集当前节点上的所有日志并发送至 VictoriaLogs。




### `vector_data`

参数名称： `vector_data`， 类型： `path`， 层次：`C`

Vector 数据目录路径，默认值为：`/data/vector`。

Vector 会将日志读取的偏移量和缓冲数据存储在此目录中。





### `vector_port`

参数名称： `vector_port`， 类型： `port`， 层次：`C`

Vector 指标监听端口号，默认为：`9598`

此端口用于暴露 Vector 自身的监控指标，可被 VictoriaMetrics 抓取。




### `vector_read_from`

参数名称： `vector_read_from`， 类型： `enum`， 层次：`C`

Vector 日志读取起始位置，默认值为：`beginning`。

可选值为 `beginning`（从头开始）或 `end`（从尾开始）。`beginning` 会读取现有日志文件的全部内容，`end` 只读取新产生的日志。




### `vector_log_endpoint`

参数名称： `vector_log_endpoint`， 类型： `string[]`， 层次：`C`

日志发送目标端点列表，默认值为：`[ infra ]`。

指定将日志发送至哪个节点组的 VictoriaLogs 服务。默认发送至 `infra` 组的节点。




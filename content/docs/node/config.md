---
title: 集群配置
weight: 3220
description: 根据需求场景选择合适的 Node 部署类型，并对外提供可靠的接入。
icon: fa-solid fa-code
modules: [NODE]
categories: [参考]
---

Pigsty 使用 **IP地址** 作为 **节点** 的唯一身份标识，**该IP地址应当是数据库实例监听并对外提供服务的内网IP地址**。

```yaml
node-test:
  hosts:
    10.10.10.11: { nodename: node-test-1 }
    10.10.10.12: { nodename: node-test-2 }
    10.10.10.13: { nodename: node-test-3 }
  vars:
    node_cluster: node-test
```

该IP地址必须是数据库实例监听并对外提供服务的IP地址，但不宜使用公网IP地址。尽管如此，用户并不一定非要通过该IP地址连接至该数据库。例如，通过SSH隧道或跳板机中转的方式间接操作管理目标节点也是可行的。但在标识数据库节点时，首要IPv4地址依然是节点的核心标识符。**这一点非常重要，用户应当在配置时保证这一点**。

IP地址即配置清单中主机的 `inventory_hostname`，体现为 `<cluster>.hosts` 对象中的 `key`。除此之外，每个节点还有两个额外的身份参数：

|                        名称                        |    类型    |  层级   | 必要性    | 说明         |
|:------------------------------------------------:|:--------:|:-----:|--------|------------|
|               `inventory_hostname`               |   `ip`   | **-** | **必选** | **节点IP地址** |
|     [`nodename`](/docs/node/param/#nodename)     | `string` | **I** | 可选     | **节点名称**   |
| [`node_cluster`](/docs/node/param/#node_cluster) | `string` | **C** | 可选     | **节点集群名称** |
{.full-width}

[`nodename`](/docs/node/param/#nodename) 与 [`node_cluster`](/docs/node/param/#node_cluster) 两个参数是可选的，如果不提供，会使用节点现有的主机名，和固定值 `nodes` 作为默认值。在 Pigsty 的监控系统中，这两者将会被用作节点的 **集群标识**（`cls`）与 **实例标识**（`ins`）。

对于 [**PGSQL节点**](/docs/concept/arch/node#pgsql节点) 来说，因为Pigsty默认采用PG:节点独占1:1部署，因此可以通过 [**`node_id_from_pg`**](/docs/node/param/#node_id_from_pg) 参数，将 PostgreSQL 实例的身份参数（[`pg_cluster`](/docs/pgsql/param/#pg_cluster) 与 [`pg_seq`](/docs/pgsql/param/#pg_seq)）借用至节点的 `ins` 与 `cls` 标签上，从而让数据库与节点的监控指标拥有相同的标签，便于交叉分析。

```yaml
#nodename:                # [实例] # 节点实例标识，如缺失则使用现有主机名，可选，无默认值
node_cluster: nodes       # [集群] # 节点集群标识，如缺失则使用默认值'nodes'，可选
nodename_overwrite: true          # 用 nodename 覆盖节点的主机名吗？
nodename_exchange: false          # 在剧本主机之间交换 nodename 吗？
node_id_from_pg: true             # 如果可行，是否借用 postgres 身份作为节点身份？
```

您还可以为主机集群配置丰富的功能参数，例如，使用节点集群上的 HAProxy 对外提供负载均衡，暴露服务，或者为集群绑定一个 L2 VIP。

---
title: "Citus 支持"
weight: 130
icon: fas fa-lemon
description: "Patroni 与 Citus 协调节点及工作节点组的集成详情。"
module: [PATRONI]
category: [Concept]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/citus.html

<a id="citus"></a>
Patroni 使部署 [多节点 Citus](https://docs.citusdata.com/en/stable/installation/multi_node.html) 集群变得极为简单。

--------

## TL;DR

只需遵循以下几条简单规则：

1. 所有节点上必须安装 [Citus](https://github.com/citusdata/citus) 数据库扩展。最低支持的 Citus 版本为 10.0，但为了充分利用工作节点透明主从切换和重启的特性，建议使用至少 Citus 11.2。
2. 集群名称（`scope`）在所有 Citus 节点上必须相同！
3. 超级用户凭据在协调节点和所有工作节点上必须相同，且 `pg_hba.conf` 应允许所有节点之间的超级用户访问。
4. 工作节点到协调节点的 [**REST API**](/docs/patroni/config/yaml#restapi_settings) 访问必须被允许。例如，凭据应相同，如果配置了客户端证书，工作节点的客户端证书必须被协调节点接受。
5. 在 `patroni.yaml` 中添加以下配置节：

```yaml
citus:
  group: X  # 0 表示协调节点，工作节点使用 1、2、3 等
  database: citus  # 所有节点上必须相同
```

之后只需启动 Patroni，它会处理其余的一切：

0. Patroni 会将 `bootstrap.dcs.synchronous_mode` 设置为 [**法定人数模式**](/docs/patroni/replication_modes#quorum_mode)，除非已显式设置为其他值。
1. [`citus`](/docs/patroni/citus#citus) 扩展将自动添加到 `shared_preload_libraries`。
2. 如果全局 [**动态配置**](/docs/patroni/config/dynamic#dynamic) 中未显式设置 `max_prepared_transactions`，Patroni 将自动将其设置为 `2*max_connections`。
3. `citus.local_hostname` GUC 的值将从 `localhost` 调整为 Patroni 用于连接本地 PostgreSQL 实例的值。有时该值与 `localhost` 不同，因为 PostgreSQL 可能没有在该地址上监听。
4. `citus.database` 指定的数据库将被自动创建，随后执行 `CREATE EXTENSION citus`。
5. 当前超级用户 [**凭据**](/docs/patroni/config/yaml#postgresql_settings) 将被添加到 `pg_dist_authinfo` 表中，以允许跨节点通信。如果之后决定修改超级用户的用户名/密码/sslcert/sslkey，别忘了同步更新此表！
6. 协调节点主库将自动发现工作节点主库，并使用 `citus_add_node()` 函数将其添加到 `pg_dist_node` 表中。
7. Patroni 还会在协调节点或工作节点集群发生故障转移/主从切换时，自动维护 `pg_dist_node`。

--------

## patronictl

协调节点和工作节点集群是物理上独立的 PostgreSQL/Patroni 集群，仅通过 [Citus](https://github.com/citusdata/citus) 数据库扩展在逻辑上组合在一起。因此，在大多数情况下无法将它们作为单一实体进行管理。

当 `patroni.yaml` 中包含 [`citus`](/docs/patroni/citus#citus) 配置节时，与通常情况相比，[`patronictl`](/docs/patroni/patronictl#patronictl) 的行为存在两个主要差异：

1. `list` 和 `topology` 命令默认输出 Citus formation 的所有成员（协调节点和工作节点），新增的 `Group` 列表明它们所属的 Citus 组。
2. 所有 [`patronictl`](/docs/patroni/patronictl#patronictl) 命令都引入了新选项 `--group`。对于某些命令，组的默认值可以从 `patroni.yaml` 中获取。例如，[`patronictl pause`](/docs/patroni/patronictl#patronictl_pause) 默认会为 [`citus`](/docs/patroni/citus#citus) 配置节中设置的 `group` 启用维护模式，但对于 [`patronictl switchover`](/docs/patroni/patronictl#patronictl_switchover) 或 [`patronictl remove`](/docs/patroni/patronictl#patronictl_remove) 等命令，则必须显式指定 group。

以下是 Citus 集群的 [`patronictl list`](/docs/patroni/patronictl#patronictl_list) 输出示例：

    postgres@coord1:~$ patronictl list demo
    + Citus cluster: demo ----------+----------------+---------+----+-------------+-----+------------+-----+
    | Group | Member  | Host        | Role           | State   | TL | Receive LSN | Lag | Replay LSN | Lag |
    +-------+---------+-------------+----------------+---------+----+-------------+-----+------------+-----+
    |     0 | coord1  | 172.27.0.10 | Replica        | running |  1 |   0/41C0368 |   0 |  0/41C0368 |   0 |
    |     0 | coord2  | 172.27.0.6  | Quorum Standby | running |  1 |   0/41C0368 |   0 |  0/41C0368 |   0 |
    |     0 | coord3  | 172.27.0.4  | Leader         | running |  1 |             |     |            |     |
    |     1 | work1-1 | 172.27.0.8  | Quorum Standby | running |  1 |   0/31D3198 |   0 |  0/31D3198 |   0 |
    |     1 | work1-2 | 172.27.0.2  | Leader         | running |  1 |             |     |            |     |
    |     2 | work2-1 | 172.27.0.5  | Quorum Standby | running |  1 |   0/31CDFC0 |   0 |  0/31CDFC0 |   0 |
    |     2 | work2-2 | 172.27.0.7  | Leader         | running |  1 |             |     |            |     |
    +-------+---------+-------------+----------------+---------+----+-------------+-----+------------+-----+

添加 `--group` 选项后，输出将变为：

    postgres@coord1:~$ patronictl list demo --group 0
    + Citus cluster: demo (group: 0, 7179854923829112860) -+-------------+-----+------------+-----+
    | Member | Host        | Role           | State   | TL | Receive LSN | Lag | Replay LSN | Lag |
    +--------+-------------+----------------+---------+----+-------------+-----+------------+-----+
    | coord1 | 172.27.0.10 | Replica        | running |  1 |   0/41C0368 |   0 |  0/41C0368 |   0 |
    | coord2 | 172.27.0.6  | Quorum Standby | running |  1 |   0/41C0368 |   0 |  0/41C0368 |   0 |
    | coord3 | 172.27.0.4  | Leader         | running |  1 |             |     |            |     |
    +--------+-------------+----------------+---------+----+-------------+-----+------------+-----+

    postgres@coord1:~$ patronictl list demo --group 1
    + Citus cluster: demo (group: 1, 7179854923881963547) -+-------------+-----+------------+-----+
    | Member  | Host       | Role           | State   | TL | Receive LSN | Lag | Replay LSN | Lag |
    +---------+------------+----------------+---------+----+-------------+-----+------------+-----+
    | work1-1 | 172.27.0.8 | Quorum Standby | running |  1 |   0/31D3198 |   0 |  0/31D3198 |   0 |
    | work1-2 | 172.27.0.2 | Leader         | running |  1 |             |     |            |     |
    +---------+------------+----------------+---------+----+-------------+-----+------------+-----+

--------

## Citus 工作节点主从切换

当对 Citus 工作节点编排主从切换时，Citus 提供了使切换对应用程序接近透明的能力。由于应用程序连接到协调节点，再由协调节点连接工作节点，因此 Citus 能够在协调节点上 [**暂停**](/docs/patroni/pause#pause) 对某个工作节点组所承载分片的 SQL 流量。主从切换在流量保持在协调节点的同时进行，并在新的工作节点主库准备好接受读写查询后立即恢复。

以下是在工作节点集群上执行 [`patronictl switchover`](/docs/patroni/patronictl#patronictl_switchover) 的示例：

    postgres@coord1:~$ patronictl switchover demo
    + Citus cluster: demo ----------+----------------+---------+----+-------------+-----+------------+-----+
    | Group | Member  | Host        | Role           | State   | TL | Receive LSN | Lag | Replay LSN | Lag |
    +-------+---------+-------------+----------------+---------+----+-------------+-----+------------+-----+
    |     0 | coord1  | 172.27.0.10 | Replica        | running |  1 |   0/41C0368 |   0 |  0/41C0368 |   0 |
    |     0 | coord2  | 172.27.0.6  | Quorum Standby | running |  1 |   0/41C0368 |   0 |  0/41C0368 |   0 |
    |     0 | coord3  | 172.27.0.4  | Leader         | running |  1 |             |     |            |     |
    |     1 | work1-1 | 172.27.0.8  | Leader         | running |  1 |             |     |            |     |
    |     1 | work1-2 | 172.27.0.2  | Quorum Standby | running |  1 |   0/31D3198 |   0 |  0/31D3198 |   0 |
    |     2 | work2-1 | 172.27.0.5  | Quorum Standby | running |  1 |   0/31CDFC0 |   0 |  0/31CDFC0 |   0 |
    |     2 | work2-2 | 172.27.0.7  | Leader         | running |  1 |             |     |            |     |
    +-------+---------+-------------+----------------+---------+----+-------------+-----+------------+-----+
    Citus group: 2
    Primary [work2-2]:
    Candidate ['work2-1'] []:
    When should the switchover take place (e.g. 2024-08-26T08:02 )  [now]:
    Current cluster topology
    + Citus cluster: demo (group: 2, 7179854924063375386) -+-------------+-----+------------+-----+
    | Member  | Host       | Role           | State   | TL | Receive LSN | Lag | Replay LSN | Lag |
    +---------+------------+----------------+---------+----+-------------+-----+------------+-----+
    | work2-1 | 172.27.0.5 | Quorum Standby | running |  1 |   0/31CDFC0 |   0 |  0/31CDFC0 |   0 |
    | work2-2 | 172.27.0.7 | Leader         | running |  1 |             |     |            |     |
    +---------+------------+----------------+---------+----+-------------+-----+------------+-----+
    Are you sure you want to switchover cluster demo, demoting current primary work2-2? [y/N]: y
    2024-08-26 07:02:40.33003 Successfully switched over to "work2-1"
    + Citus cluster: demo (group: 2, 7179854924063375386) --------+---------+------------+---------+
    | Member  | Host       | Role    | State   | TL | Receive LSN |     Lag | Replay LSN |     Lag |
    +---------+------------+---------+---------+----+-------------+---------+------------+---------+
    | work2-1 | 172.27.0.5 | Leader  | running |  1 |             |         |            |         |
    | work2-2 | 172.27.0.7 | Replica | stopped |    |     unknown | unknown |    unknown | unknown |
    +---------+------------+---------+---------+----+-------------+---------+------------+---------+

    postgres@coord1:~$ patronictl list demo
    + Citus cluster: demo ----------+----------------+---------+----+-------------+-----+------------+-----+
    | Group | Member  | Host        | Role           | State   | TL | Receive LSN | Lag | Replay LSN | Lag |
    +-------+---------+-------------+----------------+---------+----+-------------+-----+------------+-----+
    |     0 | coord1  | 172.27.0.10 | Replica        | running |  1 |   0/41C0368 |   0 |  0/41C0368 |   0 |
    |     0 | coord2  | 172.27.0.6  | Quorum Standby | running |  1 |   0/41C0368 |   0 |  0/41C0368 |   0 |
    |     0 | coord3  | 172.27.0.4  | Leader         | running |  1 |             |     |            |     |
    |     1 | work1-1 | 172.27.0.8  | Leader         | running |  1 |             |     |            |     |
    |     1 | work1-2 | 172.27.0.2  | Quorum Standby | running |  1 |   0/31D3198 |   0 |  0/31D3198 |   0 |
    |     2 | work2-1 | 172.27.0.5  | Leader         | running |  2 |             |     |            |     |
    |     2 | work2-2 | 172.27.0.7  | Quorum Standby | running |  2 |   0/31CDFC0 |   0 |  0/31CDFC0 |   0 |
    +-------+---------+-------------+----------------+---------+----+-------------+-----+------------+-----+

以下是协调节点侧的日志：

    # 工作节点主库通知协调节点，它即将执行 "pg_ctl stop"。
    2024-08-26 07:02:38,636 DEBUG: query(BEGIN, ())
    2024-08-26 07:02:38,636 DEBUG: query(SELECT pg_catalog.citus_update_node(%s, %s, %s, true, %s), (3, '172.19.0.7-demoted', 5432, 10000))
    # 从此刻起，协调节点上发往工作节点组 2 的所有应用流量被暂停。

    # 旧的工作节点主库被指定为从库。
    2024-08-26 07:02:40,084 DEBUG: query(SELECT pg_catalog.citus_update_node(%s, %s, %s, true, %s), (7, '172.19.0.7', 5432, 10000))

    # 未来的工作节点主库通知协调节点，它已在 DCS 中获取了 leader 锁，即将运行 "pg_ctl promote"。
    2024-08-26 07:02:40,085 DEBUG: query(SELECT pg_catalog.citus_update_node(%s, %s, %s, true, %s), (3, '172.19.0.5', 5432, 10000))

    # 新的工作节点主库刚完成提升，通知协调节点它已准备好接受读写流量。
    2024-08-26 07:02:41,485 DEBUG: query(COMMIT, ())
    # 从此刻起，协调节点上发往工作节点组 2 的应用流量被解除阻塞。

--------

## 从节点（Secondary nodes）

从 Patroni v4.0.0 起，没有 `noloadbalance` [**标签**](/docs/patroni/config/yaml#tags_settings) 的 Citus 从节点也会被注册到 `pg_dist_node` 中。但若要将从节点用于只读查询，应用程序需要修改 [citus.use_secondary_nodes](https://docs.citusdata.com/en/latest/develop/api_guc.html#citus-use-secondary-nodes-enum) GUC。

--------

## 查看 DCS 结构

Citus 集群（协调节点和工作节点）在 DCS 中以逻辑分组的 Patroni 集群群组方式存储：

    /service/batman/              # scope=batman
    /service/batman/0/            # citus.group=0，协调节点
    /service/batman/0/initialize
    /service/batman/0/leader
    /service/batman/0/members/
    /service/batman/0/members/m1
    /service/batman/0/members/m2
    /service/batman/1/            # citus.group=1，工作节点
    /service/batman/1/initialize
    /service/batman/1/leader
    /service/batman/1/members/
    /service/batman/1/members/m3
    /service/batman/1/members/m4
    ...

选择这种方式是因为，对于大多数 DCS，可以通过单次递归读取请求获取整个 Citus 集群的数据。只有 Citus 协调节点需要读取整棵树，因为它们需要发现工作节点。工作节点只读取自身组的子树，某些情况下也可能读取协调节点组的子树。

--------

## Kubernetes 上的 Citus

由于 Kubernetes 不支持层级结构，我们必须在 Patroni 创建的所有 K8s 对象中包含 citus group：

    batman-0-leader  # 协调节点的 leader ConfigMap
    batman-0-config  # 存储 initialize、config 和 history "键"的 ConfigMap
    ...
    batman-1-leader  # 工作节点组 1 的 leader ConfigMap
    batman-1-config
    ...

命名规则为：`${scope}-${citus.group}-${type}`。

Patroni 使用 [标签选择器](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors) 来发现所有 Kubernetes 对象，因此带有 Patroni&Citus 的所有 Pod 以及 Endpoints/ConfigMaps 必须具有相同的标签，且必须通过 Kubernetes [**Kubernetes 配置**](/docs/patroni/config/yaml#kubernetes_settings) 或环境变量来配置 Patroni 使用这些标签。

以下是使用 Pod 环境变量配置 Patroni 的两个示例：

1. 协调节点集群

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    application: patroni
    citus-group: "0"
    citus-type: coordinator
    cluster-name: citusdemo
  name: citusdemo-0-0
  namespace: default
spec:
  containers:
  - env:
    - name: PATRONI_SCOPE
      value: citusdemo
    - name: PATRONI_NAME
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: metadata.name
    - name: PATRONI_KUBERNETES_POD_IP
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: status.podIP
    - name: PATRONI_KUBERNETES_NAMESPACE
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: metadata.namespace
    - name: PATRONI_KUBERNETES_LABELS
      value: '{application: patroni}'
    - name: PATRONI_CITUS_DATABASE
      value: citus
    - name: PATRONI_CITUS_GROUP
      value: "0"
```

2. 第 2 组工作节点集群

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    application: patroni
    citus-group: "2"
    citus-type: worker
    cluster-name: citusdemo
  name: citusdemo-2-0
  namespace: default
spec:
  containers:
  - env:
    - name: PATRONI_SCOPE
      value: citusdemo
    - name: PATRONI_NAME
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: metadata.name
    - name: PATRONI_KUBERNETES_POD_IP
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: status.podIP
    - name: PATRONI_KUBERNETES_NAMESPACE
      valueFrom:
        fieldRef:
          apiVersion: v1
          fieldPath: metadata.namespace
    - name: PATRONI_KUBERNETES_LABELS
      value: '{application: patroni}'
    - name: PATRONI_CITUS_DATABASE
      value: citus
    - name: PATRONI_CITUS_GROUP
      value: "2"
```

你可能注意到，两个示例都设置了 `citus-group` 标签。该标签允许 Patroni 识别对象属于哪个 Citus 组。此外，还有 `PATRONI_CITUS_GROUP` 环境变量，其值与 `citus-group` 标签相同。当 Patroni 创建新的 Kubernetes 对象（ConfigMaps 或 Endpoints）时，会自动为其添加 `citus-group: ${env.PATRONI_CITUS_GROUP}` 标签：

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: citusdemo-0-leader  # 由 ${env.PATRONI_SCOPE}-${env.PATRONI_CITUS_GROUP}-leader 生成
  labels:
    application: patroni    # 从 ${env.PATRONI_KUBERNETES_LABELS} 中设置
    cluster-name: citusdemo # 从 ${env.PATRONI_SCOPE} 自动设置
    citus-group: '0'        # 从 ${env.PATRONI_CITUS_GROUP} 自动设置
```

你可以在 Patroni 仓库的 [kubernetes](https://github.com/patroni/patroni/tree/master/kubernetes) 目录中找到支持 Citus 的 Patroni Kubernetes 部署完整示例。

其中两个重要文件：

1. Dockerfile.citus
2. citus_k8s.yaml

--------

## Citus 升级与 PostgreSQL 大版本升级

首先，请阅读 Citus [文档](https://docs.citusdata.com/en/latest/admin_guide/upgrading_citus.html) 中关于升级 Citus 版本的内容。流程中有一处小变化：在执行升级时，必须使用 [`patronictl restart`](/docs/patroni/patronictl#patronictl_restart) 代替 `systemctl restart` 来重启 PostgreSQL。

包含 Citus 的 PostgreSQL 大版本升级相对复杂。你需要结合 Citus 文档中关于大版本升级的技术，以及 Patroni 文档中关于 `PostgreSQL major upgrade<major_upgrade>` 的内容。请记住，Citus 集群由多个 Patroni 集群（协调节点和工作节点）组成，它们都需要独立升级。

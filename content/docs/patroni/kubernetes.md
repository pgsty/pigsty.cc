---
title: "在 Kubernetes 中使用 Patroni"
linkTitle: "与 Kubernetes 集成"
weight: 120
icon: fas fa-dharmachakra
description: "结合 Kubernetes 对象、标签和服务发现使用 Patroni。"
module: [PATRONI]
categories: [任务]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/kubernetes.html

<a id="kubernetes"></a>
Patroni 可以利用 Kubernetes 对象来存储集群状态并管理领导者键，从而无需任何额外的一致性存储即可在 Kubernetes 环境中运行 PostgreSQL——也就是说，不需要单独部署 Etcd。Patroni 支持两种不同类型的 Kubernetes 对象来存储领导者键和配置键，通过 **`kubernetes.use_endpoints`** 配置项或 **`PATRONI_KUBERNETES_USE_ENDPOINTS`** 环境变量进行选择。

--------

## 使用 Endpoints

尽管这是推荐模式，但出于兼容性考虑，默认情况下该模式是关闭的。启用后，Patroni 会将集群配置和领导者键存储在其创建的 **`Endpoints`** 对象的 **`metadata: annotations`** 字段中。与使用 **`ConfigMaps`** 相比，这种方式的领导者切换更为安全——包含领导者信息的注解与指向当前领导者 Pod 的实际地址，会在同一次操作中被原子更新。

--------

## 使用 ConfigMaps

在此模式下，Patroni 将创建 ConfigMaps 而非 Endpoints，并将键值存储在 ConfigMaps 的元数据中。领导者切换至少需要两次更新操作：一次更新领导者 ConfigMap，另一次更新对应的 Endpoint。

若要将流量引导至 PostgreSQL 主库，您需要将 Kubernetes PostgreSQL Service 配置为使用带有 **`role_label`**（在 Patroni 配置中设定）的标签选择器。

请注意，在某些场景下（例如在 OpenShift 上运行时）只能使用 ConfigMaps 模式。

--------

## 配置

Patroni 的 Kubernetes [**配置项**](/docs/patroni/config/yaml#kubernetes_settings) 和 [**环境变量**](/docs/patroni/config/env#kubernetes_environment) 在文档的通用章节中有详细说明。

<a id="kubernetes_role_values"></a>
### 自定义角色标签

默认情况下，Patroni 会根据节点角色在其所在 Pod 上设置对应标签，例如 **`role=primary`**。标签的键名和值可通过 **`kubernetes.role_label`**、**`kubernetes.leader_label_value`**、**`kubernetes.follower_label_value`** 和 **`kubernetes.standby_leader_label_value`** 进行自定义。

如需从默认角色标签迁移到自定义标签，可按照以下步骤操作以减少停机时间：

1.  使用 **`kubernetes.tmp_role_label`**（如 **`tmp_role`**）为 Pod 添加一个使用原始角色值的临时标签。所有 Pod 重启后，Patroni 将为其设置以下标签：

> ```yaml
> labels:
>   cluster-name: foo
>   role: primary
>   tmp_role: primary
> ```

2.  待所有 Pod 更新完成后，将 Service 的选择器修改为使用临时标签：

> ```yaml
> selector:
>   cluster-name: foo
>   tmp_role: primary
> ```

3.  添加自定义角色标签（例如，设置 **`kubernetes.leader_label_value=primary`**）。所有 Pod 重启后，Patroni 将为其设置以下新标签：

> ```yaml
> labels:
>   cluster-name: foo
>   role: primary
>   tmp_role: primary
> ```

4.  待所有 Pod 再次更新完成后，将 Service 的选择器修改为使用新的角色值：

> ```yaml
> selector:
>   cluster-name: foo
>   role: primary
> ```

5.  最后，从配置中删除临时标签并更新所有 Pod：

> ```yaml
> labels:
>   cluster-name: foo
>   role: primary
> ```

--------

## 示例

- Patroni 仓库的 [kubernetes](https://github.com/patroni/patroni/tree/master/kubernetes) 目录中包含 Docker 镜像示例以及用于测试 Patroni Kubernetes 部署的 Kubernetes 清单文件。请注意，在当前状态下，由于权限问题，无法使用 PersistentVolumes。
- 支持 Persistent Volumes 的完整功能 Docker 镜像可在 [Spilo 项目](https://github.com/zalando/spilo) 中找到。
- 此外，还有一个 [Helm Chart](https://github.com/kubernetes/charts/tree/master/incubator/patroni) 可用于在 Kubernetes 上部署配置了 Patroni 的 Spilo 镜像。
- 若要大规模运行基于 Patroni 和 Spilo 的数据库集群，请参阅 [postgres-operator](https://github.com/zalando/postgres-operator) 项目，它实现了用于管理 Spilo 集群的 Operator 模式。

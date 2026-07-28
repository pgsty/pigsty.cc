---
title: 模块：Kubernetes
linkTitle: "模块：KUBE"
weight: 5020
description: 使用 Pigsty 安装 Kubernetes，生产级无状态容器调度编排私有云平台
icon: fas fa-dharmachakra
module: [PILOT]
categories: [参考]
---

[Kubernetes](https://kubernetes.io/) 是生产级无状态容器调度编排私有云平台。

Pigsty 提供了原生的 [**`ETCD`**](/docs/etcd/) 集群支持，可以作为 Kubernetes 的外部 etcd 使用。

当前开源源码树没有 `kube.yml` 剧本、Kubernetes 角色或 `kube_*` 参数；Pigsty 在这里提供的是软件仓库与基础节点置备能力，集群初始化、网络插件、控制面和升级仍需由 kubeadm、SealOS 或其他 Kubernetes 工具完成。


-------

## SealOS

[SealOS](https://sealos.io/) 是一个 Kubernetes 发行版，可以用于将整个 Kubernetes 集群打包制作为一个镜像在其他地方使用

当前 Pigsty 节点平台映射包含 `sealos` 软件包，可以从 Infra 仓库安装后使用 SealOS 管理集群。

```bash
./node.yml -t node_install -e '{"node_repo_modules":"infra","node_packages":["sealos"]}'
```


-------

## Kubernetes

如果您使用经典的 kubeadm 部署 Kubernetes，可以先安装以下软件包：

```bash
./node.yml -t node_install -e '{"node_repo_modules":"kube","node_packages":["kubeadm","kubelet","kubectl"]}'
```

Kubernetes 支持多种容器运行时，要使用 Containerd 容器运行时，请确保节点上已经安装了 Containerd 软件包。

```bash
./node.yml -t node_install -e '{"node_repo_modules":"node,infra","node_packages":["containerd.io"]}'
```

若要使用 Docker 作为容器运行时，您需要安装 Docker，并自行提供 `cri-dockerd` 桥接组件。当前默认包映射只内置 `containerd.io` 运行时：

```bash
./node.yml -t node_install -e '{"node_repo_modules":"node,infra","node_packages":["docker-ce","docker-compose-plugin"]}'
```


## 监控

Kubernetes 集群监控通常由集群内的可观测组件（如 kube-prometheus-stack）负责。

Pigsty 侧可以监控 Kubernetes 依赖的基础能力：

- [**ETCD 监控告警**](/docs/etcd/monitor/)：控制面元数据一致性与可用性
- [**NODE 监控告警**](/docs/node/monitor/)：宿主机资源、内核与网络状态
- [**INFRA 监控告警**](/docs/infra/monitor/)：监控后端、告警链路与观测平台健康度

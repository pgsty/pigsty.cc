---
title: 模块：Kubernetes
weight: 5100
description: 使用 Pigsty 安装 Kubernetes，生产级无状态容器调度编排私有云平台
icon: fas fa-dharmachakra
module: [PILOT]
categories: [参考]
---

[Kubernetes](https://kubernetes.io/) 是生产级无状态容器调度编排私有云平台。

Pigsty 提供了原生的 [**`ETCD`**] 集群支持，可以供 Kubernetes 使用，因此也在专业版中提供了 **`KUBE`** 模块，用于部署生产级 Kubernetes 集群。 

Kubernetes 模块目前仅在 Pigsty Pro 专业版本中提供 Beta 预览，在开源版本中不可用。

但您可以直接在 Pigsty 中指定节点仓库，安装 Kubernetes 软件包，并使用 Pigsty 调整环境配置，置备节点供 K8S 部署使用，解决交付的最后一公里问题。 


-------

## SealOS

[SealOS](https://sealos.io/) 是一个 Kubernetes 发行版，可以用于将整个 Kubernetes 集群打包制作为一个镜像在其他地方使用

Pigsty 在 Infra 仓库中提供了 SealOS 5.0 的 RPM 与 DEB 安装包，可以直接下载安装，并使用 SealOS 管理集群。

```bash
./node.yml -t node_install -e '{"node_repo_modules":"infra","node_packages":["sealos"]}'
```


-------

## Kubernetes

如果您更喜欢使用经典的 Kubeadm 来部署 Kubernetes，请参考下面的 KUBE 模块参考。

```bash
./node.yml -t node_install -e '{"node_repo_modules":"kube","node_packages":["kubeadm,kubelet,kubectl"]}'
```

Kubernetes 支持多种容器运行时，要是用 Containerd 容器运行时，请确保节点上已经安装了 Containerd 软件包。

```bash
./node.yml -t node_install -e '{"node_repo_modules":"node,docker","node_packages":["containerd.io"]}'
```

若要使用 Docker 作为容器运行时，您需要安装 Docker ，并使用 `cri-dockerd` 项目桥接（EL9 / D11 / U20 尚不可用）：

```bash
./node.yml -t node_install -e '{"node_repo_modules":"node,infra,docker","node_packages":["docker-ce,docker-compose-plugin,cri-dockerd"]}'
```


-------

## 剧本

`kube.yml` 剧本


-------

## 监控

TBD

-------

## 参数

Kubernetes 模块支持以下配置参数

```yaml
#kube_cluster:                                          #IDENTITY# # define kubernetes cluster name 
kube_role: node                                                    # default kubernetes role (master|node)
kube_version: 1.31.0                                               # kubernetes version
kube_registry: registry.aliyuncs.com/google_containers             # kubernetes version aliyun k8s miiror repository
kube_pod_cidr: "10.11.0.0/16"                                      # kubernetes pod network cidr
kube_service_cidr: "10.12.0.0/16"                                  # kubernetes service network cidr
kube_dashboard_admin_user: dashboard-admin-sa                      # kubernetes dashboard admin user name
```


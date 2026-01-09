---
title: 集群概念图
weight: 170
description: Pigsty 是如何将不同种类的功能抽象成为模块的，以及这些模块的逻辑模型，实体关系图。
icon: fa-solid fa-coins
module: [PIGSTY]
categories: [概念]
---

在 Pigsty 中最大的实体概念叫做 **部署（Deployment）**，一套部署中的主要实体与关系（E-R图）如下所示： 

![](/img/pigsty/er-full.svg)

一套部署也可以理解为一个 **环境（Environment）**。例如，生产环境（Prod），用户测试环境（UTA），预发环境（Staging），测试环境（Testing），开发环境（Devbox），等等。
每个环境中，都对应着一份 Pigsty [**配置清单**](/docs/concept/iac/inventory)，描述了环境中的所有实体与属性。

通常来说，一套环境中也会带有一套共用的基础设施（[**`INFRA`**](/docs/infra)），广义的基础设施还包括 [**`ETCD`**](/docs/etcd)（高可用 DCS）以及 [**`MINIO`**](/docs/minio)（集中式备份仓库），
同时供环境中的多套 PostgreSQL 数据库集群（以及其他数据库模块组件）使用。（例外：也有 [**不带基础设施的部署**](/docs/setup/slim)）

在 Pigsty 中，几乎所有数据库模块都是以 “**集群**” （Cluster） 的方式组织起来的。每一个集群都是一个 Ansible 分组，包含有若干节点资源。
例如 PostgreSQL 高可用数据库集群，Redis，Etcd / MinIO 这些数据库都是以集群的形式存在。一套环境中可以包含多个集群。

- [**PostgreSQL 集群**](/docs/concept/model/pgsql)
- [**ETCD 集群**](/docs/concept/model/etcd)
- [**MinIO 集群**](/docs/concept/model/minio)
- [**Redis 集群**](/docs/concept/model/redis)
- [**INFRA 节点**](/docs/concept/model/infra)


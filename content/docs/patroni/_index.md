---
title: "Patroni 4.1 中文文档"
linkTitle: patroni 文档
weight: 8050
icon: fas fa-yin-yang
description: "Patroni PostgreSQL 高可用模板，v4.1 中文文档"
sidebar_root_for: self
module: [PATRONI]
category: [Concept]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/index.html

Patroni 是一个基于 Python 的 PostgreSQL 高可用（HA）解决方案模板。为了最大程度地兼容各种环境，Patroni 支持多种分布式配置存储后端，包括 [ZooKeeper](https://zookeeper.apache.org/)、[etcd](https://github.com/coreos/etcd)、[Consul](https://github.com/hashicorp/consul) 和 [Kubernetes](https://kubernetes.io)。希望在数据中心或任何其他环境中快速部署 PostgreSQL 高可用的数据库工程师、DBA、DevOps 工程师和 SRE 们，都能从中受益。

我们将 Patroni 称为"模板"，是因为它远非一套放之四海而皆准的即插即用复制系统，使用时需要结合实际情况量力而行。实现 PostgreSQL 高可用的方案有很多，详情可参阅 [**PostgreSQL 文档**](https://wiki.postgresql.org/wiki/Replication,_Clustering,_and_Connection_Pooling)。

目前支持的 PostgreSQL 版本：9.3 至 18。

**Citus 用户注意**：从 3.0 版本起，Patroni 已与 PostgreSQL 扩展 [Citus](https://github.com/citusdata/citus) 深度集成。如需了解如何将 Patroni 高可用与 Citus 分布式集群结合使用，请参阅文档中的 [**Citus 支持页面**](/docs/patroni/citus#citus)。

**Kubernetes 用户注意**：Patroni 可原生运行在 Kubernetes 之上。请参阅文档中的 [**Kubernetes**](/docs/patroni/kubernetes#kubernetes) 章节。

<img src="/img/docs/patroni/patroni-logo.png" width="128" height="128" alt="image" />

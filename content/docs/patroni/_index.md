---
title: "Patroni 4.1.5 中文文档"
linkTitle: patroni 文档
weight: 8050
icon: fas fa-yin-yang
description: "Patroni PostgreSQL 高可用模板，v4.1.5 中文文档"
sidebar_root_for: self
module: [PATRONI]
categories: [概念]
upstream_link: "https://patroni.readthedocs.io/en/latest/index.html"
upstream_source: "patroni"
upstream_ref: "v4.1.5"
search_keywords: ["v4.1.5"]
cascade: {"upstream_source": "patroni"}
---

> [!WARNING]
> 在 **内存受限且使用 Python 3.11+ 的系统** 上运行 Patroni

如果系统设置了严格的内存限制，例如启用 PostgreSQL 推荐的 `vm.overcommit_memory=2`，并使用 Python 3.11 或更高版本，可能出现以下异常：

- Patroni 表面上保持健康；
- PostgreSQL 继续运行；
- Patroni **REST API 失去响应**；
- 操作系统仍显示 Patroni 正在监听 REST API 端口；
- Patroni 日志看似正常，但以下消息可能只出现一次：`Exception ignored in thread started by: <object repr() failed>`、`MemoryError`；
- 内核日志可能出现 `not enough memory for the allocation` 等消息。

该行为源于 [Python 3.11+ 的缺陷](https://github.com/python/cpython/issues/140746)：在严格的内存约束下，如果可用内存不足，启动新线程可能会无限期挂起。

<div id="推荐方案"></div>

## 推荐方案 {#recommended-solution}

Patroni 4.1.1+ 与 4.0.8+ 会在启动早期、系统尚未承受内存压力时创建所需线程，从而降低该问题的影响。

<div id="其他建议linuxglibc"></div>

## 其他建议（Linux、glibc） {#additional-recommendations-linux-glibc}

在使用 `vm.overcommit_memory=2`（PostgreSQL 推荐设置）时，还建议在启动 Patroni 时配置以下环境变量：

- `MALLOC_ARENA_MAX=1`：减少 glibc 为多线程应用分配的虚拟内存；
- `PG_MALLOC_ARENA_MAX=`：为 Patroni 启动的 PostgreSQL 进程重置 `MALLOC_ARENA_MAX` 的值。

还可以调整以下 Patroni 参数：

- `thread_stack_size`：Patroni 线程栈大小。调低可减少 Patroni 的内存用量；默认值为 `512kB`。若 Patroni 出现线程栈相关的崩溃，应调高 `thread_stack_size`；否则默认值已足够；
- `thread_pool_size`：Patroni 用于异步任务，以及在领导者竞选或故障安全检查期间与其他成员进行 REST API 通信的线程池大小，默认值 `5` 足以满足三节点集群；
- `restapi.thread_pool_size`：处理 REST API 请求的线程池大小，默认值 `5`，最多可支持五个并行的 REST API 请求。涉及 SQL 查询的请求会因为共用一个数据库连接而实际串行执行，因此调高该值通常没有收益。

--------

Patroni 是一个基于 Python 的 PostgreSQL 高可用（HA）解决方案模板。为了最大程度地兼容各种环境，Patroni 支持多种分布式配置存储后端，包括 [ZooKeeper](https://zookeeper.apache.org/)、[etcd](https://github.com/coreos/etcd)、[Consul](https://github.com/hashicorp/consul) 和 [Kubernetes](https://kubernetes.io)。希望在数据中心或任何其他环境中快速部署 PostgreSQL 高可用的数据库工程师、DBA、DevOps 工程师和 SRE 们，都有望从中受益。

我们将 Patroni 称为"模板"，是因为它远非一套放之四海而皆准的即插即用复制系统。它自有其注意事项，请谨慎使用。实现 PostgreSQL 高可用的方案有很多，详情可参阅 [**PostgreSQL 文档**](https://wiki.postgresql.org/wiki/Replication,_Clustering,_and_Connection_Pooling)。

目前支持的 PostgreSQL 版本：9.3 至 18。

**Citus 用户注意**：从 3.0 版本起，Patroni 已与 PostgreSQL 扩展 [Citus](https://github.com/citusdata/citus) 良好集成。如需了解如何将 Patroni 高可用与 Citus 分布式集群结合使用，请参阅文档中的 [**Citus 支持页面**](/docs/patroni/citus#citus)。

**Kubernetes 用户注意**：Patroni 可原生运行在 Kubernetes 之上。请参阅文档中的 [**Kubernetes**](/docs/patroni/kubernetes#kubernetes) 章节。

<img src="/img/docs/patroni/patroni-logo.png" width="128" height="128" alt="图像" />

## 来源与许可 {#upstream-attribution}

本手册以 Patroni 4.1.5 为基准，于 2026-10-28 从 [PG.CENTER 中文文档](https://doc.pg.center/zh/patroni/) 同步，并适配本站路径与导航。

Copyright (c) 2025 Compose, Zalando SE, Patroni Contributors。原始文档采用 [MIT 许可证](https://opensource.org/license/mit)，完整版权与许可声明见 [上游文件](https://github.com/patroni/patroni/blob/v4.1.5/LICENSE)。

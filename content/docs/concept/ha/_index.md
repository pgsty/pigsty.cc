---
title: PG 高可用
weight: 200
description: Pigsty 使用 Patroni 实现了 PostgreSQL 的高可用，确保主库不可用时自动进行故障转移，由从库接管。
icon: fa-solid fa-infinity
module: [PIGSTY, PGSQL]
categories: [概念]
---

-----------

## 概览

Pigsty 的 PostgreSQL 集群带有开箱即用的高可用方案，由 [**Patroni**](https://patroni.readthedocs.io/en/latest/)、[**Etcd**](https://etcd.io/) 和 [**HAProxy**](http://www.haproxy.org/) 强力驱动。

当您的 PostgreSQL 集群含有两个或更多实例时，您无需任何配置即拥有了硬件故障自愈的数据库高可用能力 —— 只要集群中有任意实例存活，集群就可以对外提供完整的服务，而客户端只要连接至集群中的任意节点，即可获得完整的服务，而无需关心主从拓扑变化。

在默认配置下，主库故障恢复时间目标 RTO ≈ 45s，数据恢复点目标 RPO < 1MB；从库故障 RPO = 0，RTO ≈ 0 (闪断)；在一致性优先模式下，可确保故障切换数据零损失：
RPO = 0。以上指标均可通过参数，根据您的实际硬件条件与可靠性要求 [**按需配置**](/docs/concept/ha/rto)。

Pigsty 内置了 HAProxy 负载均衡器用于自动流量切换，提供 DNS/VIP/LVS 等多种接入方式供客户端选用。故障切换与主动切换对业务侧除零星闪断外几乎无感知，应用不需要修改连接串重启。
极小的维护窗口需求带来了极大的灵活便利：您完全可以在无需应用配合的情况下滚动维护升级整个集群。硬件故障可以等到第二天再抽空善后处置的特性，让研发，运维与 DBA 都能在故障时安心睡个好觉。

~~![pigsty-ha](/img/pigsty/ha.png)~~

许多大型组织与核心机构已经在生产环境中长时间使用 Pigsty ，最大的部署有 25K CPU 核心与 220+ PostgreSQL 超大规格实例（64c / 512g / 3TB NVMe SSD）；在这一部署案例中，五年内经历了数十次硬件故障与各类事故，但依然可以保持高于 **99.999%** 的总体可用性战绩。

-----------------

**高可用（High-Availability）解决什么问题？**

* 将数据安全C/IA中的可用性提高到一个新高度：RPO ≈ 0, RTO < 45s。
* 获得无缝滚动维护的能力，最小化维护窗口需求，带来极大便利。
* 硬件故障可以立即自愈，无需人工介入，运维DBA可以睡个好觉。
* 从库可以用于承载只读请求，分担主库负载，让资源得以充分利用。

**高可用有什么代价？**

* 基础设施依赖：高可用需要依赖 DCS (etcd/zk/consul) 提供共识。
* 起步门槛增加：一个有意义的高可用部署环境至少需要 **三个节点**。
* 额外的资源消耗：一个新从库就要消耗一份额外资源，不算大问题。
* 复杂度代价显著升高：备份成本显著加大，需要使用工具压制复杂度。

**高可用的局限性**

因为复制实时进⾏，所有变更被⽴即应⽤⾄从库。因此基于流复制的高可用方案⽆法应对⼈为错误与软件缺陷导致的数据误删误改。（例如：`DROP TABLE`，或 `DELETE` 数据）
此类故障需要使用 [**延迟集群**](/docs/pgsql/config/cluster#延迟集群)，或使用先前的基础备份与 WAL 归档进行 [**时间点恢复**](/docs/concept/pitr)。

| 配置策略                                                                                                                       | RTO                                                                             | RPO                                                                                  |
|:---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| 单机 + <i class="fa-solid fa-music text-danger"></i> 什么也不做                                                                   | <i class="fas fa-circle-xmark text-danger"></i> **数据永久丢失，无法恢复**                 | <i class="fas fa-circle-xmark text-danger"></i> **数据全部丢失**                           |
| 单机 + <i class="fa-solid fa-copy text-secondary"></i> 基础备份                                                                  | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 取决于备份大小与带宽（几小时） | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 丢失上一次备份后的数据（几个小时到几天） |
| 单机 + <i class="fa-solid fa-copy text-primary"></i> 基础备份 + <i class="fa-solid fa-clock-rotate-left text-primary"></i> WAL归档 | <i class="fa-solid fa-triangle-exclamation text-primary"></i> 取决于备份大小与带宽（几小时）   | <i class="fa-solid fa-triangle-exclamation text-primary"></i> 丢失最后尚未归档的数据（几十MB）      |
| 主从 + <i class="fa-solid fa-wrench text-secondary"></i> 手工故障切换                                                              | <i class="fa-solid fa-triangle-exclamation text-primary"></i>  十分钟              | <i class="fa-solid fa-circle-check text-primary"></i> 丢失复制延迟中的数据（约百KB）               |
| 主从 + <i class="fa-solid fa-infinity text-primary"></i> 自动故障切换                                                              | <i class="fa-solid fa-circle-check text-primary"></i> 一分钟内                      | <i class="fa-solid fa-circle-check text-primary"></i> 丢失复制延迟中的数据（约百KB）               |
| 主从 + <i class="fa-solid fa-infinity text-primary"></i> 自动故障切换 + <i class="fa-solid fa-rotate text-success"></i> 同步提交       | <i class="fa-solid fa-circle-check text-success"></i> 一分钟内                      | <i class="fa-solid fa-circle-check text-success"></i> 无数据丢失                          |





-----------

## 原理

在 Pigsty 中，高可用架构的实现原理如下：

- PostgreSQL 使⽤标准流复制搭建物理从库，主库故障时由从库接管。
- Patroni 负责管理 PostgreSQL 服务器进程，处理高可用相关事宜。
- Etcd 提供分布式配置存储（DCS）能力，并用于故障后的领导者选举
- Patroni 依赖 Etcd 达成集群领导者共识，并对外提供健康检查接口。
- HAProxy 对外暴露集群服务，并利⽤ Patroni 健康检查接口，自动分发流量至健康节点。
- vip-manager 提供一个可选的二层 VIP，从 Etcd 中获取领导者信息，并将 VIP 绑定在集群主库所在节点上。

当主库故障时，将触发新一轮领导者竞选，集群中最为健康的从库将胜出（LSN位点最高，数据损失最小者），并被提升为新的主库。 胜选从库提升后，读写流量将立即路由至新的主库。
主库故障影响是 **写服务短暂不可用**：从主库故障到新主库提升期间，写入请求将被阻塞或直接失败，不可用时长通常在 15秒 ～ 30秒，通常不会超过 1 分钟。

当从库故障时，只读流量将路由至其他从库，如果所有从库都故障，只读流量才会最终由主库承载。
从库故障的影响是 **部分只读查询闪断**：当前从库上正在运行查询将由于连接重置而中止，并立即由其他可用从库接管。

故障检测由 Patroni 和 Etcd 共同完成，集群领导者将持有一个租约，
如果集群领导者因为故障而没有及时续租（10s），租约将会被释放，并触发 **故障切换**（Failover） 与新一轮集群选举。

即使没有出现任何故障，您依然可以主动通过 [**主动切换**](/docs/pgsql/admin/patroni#主动切换)（Switchover）变更集群的主库。
在这种情况下，主库上的写入查询将会闪断，并立即路由至新主库执行。这一操作通常可用于滚动维护/升级数据库服务器。

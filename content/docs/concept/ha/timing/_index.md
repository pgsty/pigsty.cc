---
title: 故障时序模型
weight: 210
description: 详细分析三种经典故障检测/恢复路径下，最差，最优，平均 RTO 的计算逻辑与结果
icon: fa-regular fa-clock
module: [PGSQL]
categories: [概念]
---

在 Patroni 中，根据故障检测的机制，有三条典型的 RTO 计算路径，本节将分情况讨论。

| 检测机制                                        | 检测主体        | 检测信号                           | 典型故障                 | 主要来源                    |
|---------------------------------------------|-------------|--------------------------------|----------------------|-------------------------|
| [**被动检测**](/docs/concept/ha/timing/passive) | DCS (etcd)  | leader key TTL 到期              | 网络分区，节点崩溃，Patroni 宕机 | `ttl`                   |
| [**主动探测**](/docs/concept/ha/timing/active)  | Patroni 领导者 | pg_isready 失败                  | PG 进程崩溃              | `priamry_start_timeout` |
| [**手动触发**](/docs/concept/ha/timing/manual)  | 运维人员        | patronictl switchover/failover | 主动切换命令，维护操作          | `haproxy_up`            |
{.full-width}

检测到故障之后，恢复过程的 RTO 还需要包括恢复策略的耗时，以及 HAProxy 健康检查的耗时。

---
title: 监控告警
weight: 3850
description: 如何监控 redis？有哪些告警规则值得关注？
icon: fa-solid fa-binoculars
module: [REDIS]
categories: [参考]
---


--------

## 监控面板

REDIS 模块提供了 3 个监控面板

- Redis Overview：redis 集群概览
- Redis Cluster：redis 集群详情
- Redis Instance：redis 实例详情


----------------

## 监控

Pigsty 提供了三个与 [`REDIS`](/docs/redis) 模块有关的监控仪表盘：

----------------

### Redis Overview

[Redis Overview](https://demo.pigsty.cc/d/redis-overview)：关于所有Redis集群/实例的详细信息

[![redis-overview.jpg](/img/dashboard/redis-overview.jpg)](https://demo.pigsty.cc/d/redis-overview)

----------------

### Redis Cluster

[Redis Cluster](https://demo.pigsty.cc/d/redis-cluster)：关于单个Redis集群的详细信息

<details><summary>Redis Cluster Dashboard</summary>

[![redis-cluster.jpg](/img/dashboard/redis-cluster.jpg)](https://demo.pigsty.cc/d/redis-cluster)

</details><br>

----------------

### Redis Instance

[Redis Instance](https://demo.pigsty.cc/d/redis-instance)： 关于单个Redis实例的详细信息

<details><summary>Redis Instance Dashboard</summary>

[![redis-instance](/img/dashboard/redis-instance.jpg)](https://demo.pigsty.cc/d/redis-instance)

</details><br>




---------

## 告警规则

Pigsty 针对 redis 提供了以下六条预置告警规则，定义于 [`files/victoria/rules/redis.yml`](https://github.com/pgsty/pigsty/blob/main/files/victoria/rules/redis.yml)

- `RedisDown`：redis 实例不可用
- `RedisRejectConn`：redis 实例拒绝连接
- `RedisRTHigh`：redis 实例响应时间过高
- `RedisCPUHigh`：redis 实例 CPU 使用率过高
- `RedisMemHigh`：redis 实例内存使用率过高
- `RedisQPSHigh`：redis 实例 QPS 过高


```yaml
#==============================================================#
#                         Error                                #
#==============================================================#
# redis down triggers a P0 alert
- alert: RedisDown
  expr: redis_up < 1
  for: 1m
  labels: { level: 0, severity: CRIT, category: redis }
  annotations:
    summary: "CRIT RedisDown: {{ $labels.ins }} {{ $labels.instance }} {{ $value }}"
    description: |
      redis_up[ins={{ $labels.ins }}, instance={{ $labels.instance }}] = {{ $value }} == 0
      /ui/d/redis-instance?from=now-5m&to=now&var-ins={{$labels.ins}}

# redis reject connection in last 5m
- alert: RedisRejectConn
  expr: redis:ins:conn_reject > 0
  labels: { level: 0, severity: CRIT, category: redis }
  annotations:
    summary: "CRIT RedisRejectConn: {{ $labels.ins }} {{ $labels.instance }} {{ $value }}"
    description: |
      redis:ins:conn_reject[cls={{ $labels.cls }}, ins={{ $labels.ins }}][5m] = {{ $value }} > 0
      /ui/d/redis-instance?from=now-10m&to=now&viewPanel=88&fullscreen&var-ins={{ $labels.ins }}



#==============================================================#
#                         Latency                              #
#==============================================================#
# redis avg query response time > 160 µs
- alert: RedisRTHigh
  expr: redis:ins:rt > 0.00016
  for: 1m
  labels: { level: 1, severity: WARN, category: redis }
  annotations:
    summary: "WARN RedisRTHigh: {{ $labels.cls }} {{ $labels.ins }}"
    description: |
      pg:ins:query_rt[cls={{ $labels.cls }}, ins={{ $labels.ins }}] = {{ $value }} > 160µs
      /ui/d/redis-instance?from=now-10m&to=now&viewPanel=97&fullscreen&var-ins={{ $labels.ins }}



#==============================================================#
#                        Saturation                            #
#==============================================================#
# redis cpu usage more than 70% for 1m
- alert: RedisCPUHigh
  expr: redis:ins:cpu_usage > 0.70
  for: 1m
  labels: { level: 1, severity: WARN, category: redis }
  annotations:
    summary: "WARN RedisCPUHigh: {{ $labels.cls }} {{ $labels.ins }}"
    description: |
      redis:ins:cpu_all[cls={{ $labels.cls }}, ins={{ $labels.ins }}] = {{ $value }} > 60%
      /ui/d/redis-instance?from=now-10m&to=now&viewPanel=43&fullscreen&var-ins={{ $labels.ins }}

# redis mem usage more than 70% for 1m
- alert: RedisMemHigh
  expr: redis:ins:mem_usage > 0.70
  for: 1m
  labels: { level: 1, severity: WARN, category: redis }
  annotations:
    summary: "WARN RedisMemHigh: {{ $labels.cls }} {{ $labels.ins }}"
    description: |
      redis:ins:mem_usage[cls={{ $labels.cls }}, ins={{ $labels.ins }}] = {{ $value }} > 80%
      /ui/d/redis-instance?from=now-10m&to=now&viewPanel=7&fullscreen&var-ins={{ $labels.ins }}

#==============================================================#
#                         Traffic                              #
#==============================================================#
# redis qps more than 32000 for 5m
- alert: RedisQPSHigh
  expr: redis:ins:qps > 32000
  for: 5m
  labels: { level: 2, severity: INFO, category: redis }
  annotations:
    summary: "INFO RedisQPSHigh: {{ $labels.cls }} {{ $labels.ins }}"
    description: |
      redis:ins:qps[cls={{ $labels.cls }}, ins={{ $labels.ins }}] = {{ $value }} > 16000
      /ui/d/redis-instance?from=now-10m&to=now&viewPanel=96&fullscreen&var-ins={{ $labels.ins }}

```

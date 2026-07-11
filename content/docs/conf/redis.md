---
title: demo/redis
weight: 1045
description: Redis 主从、Sentinel 与原生 Cluster 三种模式的四节点演示模板
icon: fa-solid fa-bolt
categories: [参考]
---

`demo/redis` 在一份配置中演示 Pigsty Redis 模块支持的 standalone/replica、Sentinel 与原生 Cluster 模式。


--------

## 配置概览

- 配置名称：`demo/redis`
- 节点数量：4 个
- 集群：`redis-ms`、`redis-meta`、`redis-test`
- 相关配置：[`demo/demo`](/docs/conf/demo/)

```bash
./configure -c demo/redis -s
```


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/redis.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/redis.yml)

{{< readfile file="yaml/demo/redis.yml" code="true" lang="yaml" >}}


--------

## 配置解读

- `redis-ms`：同一节点上的 `6379` 主实例与 `6380` 从实例
- `redis-meta`：三个 Sentinel 实例，监控 `redis-ms` 的 `6379` 主实例
- `redis-test`：两个节点、每节点三个实例组成的原生 Redis Cluster
- 每个实例设置较小的内存上限，适合功能演示

模板中的 IP、密码和内存值都是演示值，部署前应按实际拓扑修改，并使用 [`redis.yml`](/docs/redis/) 剧本安装 Redis 模块。

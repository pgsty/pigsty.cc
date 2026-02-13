---
title: 常见问题
weight: 3870
description: Pigsty REDIS 模块常见问题答疑
icon: fa-solid fa-circle-question
module: [REDIS]
categories: [参考]
---


----------------

## Redis移除失败：ABORT due to redis_safeguard enabled

这意味着正准备移除的 Redis 实例打开了防误删保险：当 [`redis_safeguard`](/docs/redis/param#redis_safeguard) 设置为 `true` 时，`redis-rm.yml` 剧本会拒绝执行，防止误删正在运行的 Redis 实例。

您可以通过命令行参数 `-e redis_safeguard=false` 来覆盖此保护，强制移除 Redis 实例。这就是 `redis_safeguard` 的设计目的。



----------------

## 如何在某个节点上添加一个新的Redis实例？

使用 `bin/redis-add <ip> <port>` 在节点上部署一个新的redis实例。



----------------

## 如何从节点上移除一个特定实例？

使用 `bin/redis-rm <ip> <port>` 从节点上移除一个单独的redis实例。


----------------

## 是否有计划升级到 Valkey 或最新版本？

当前 Pigsty v4.1 仍以 Redis 7.2 BSD 分支作为默认实现，尚未切换到 Redis 新许可证版本或 Valkey 作为默认组件。
不同操作系统渠道里的 Redis 小版本可能不同（例如 APT 渠道可见 7.2.7），请以您实际使用仓库中的包版本为准。

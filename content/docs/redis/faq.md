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

这意味着正准备移除的 Redis 实例打开了防误删保险：当 [`redis_safeguard`](/docs/redis/param#redis_safeguard) 设置为 `true` 时，`redis-rm.yml` 会无条件拒绝执行。
该开关不会探测实例是否正在运行。

确认精确的 `-l`/`redis_port` 目标、近期备份以及 `redis_rm_data` 的取值后，通过 `-e redis_safeguard=false` 覆盖保护并执行移除。该参数只解除保险，不会替您验证目标或数据可恢复性。



----------------

## 如何在某个节点上添加一个新的Redis实例？

使用 `bin/redis-add <ip> <port>` 在节点上部署一个新的 redis 实例。



----------------

## 如何从节点上移除一个特定实例？

使用 `bin/redis-rm <ip> <port>` 从节点上移除一个单独的 redis 实例。


----------------

## 如何选择 Redis 或 Valkey？

当前源码默认使用 `redis_type: redis`，同时已经支持显式设置 `redis_type: valkey`。
角色会据此安装 `redis` 或 `valkey` 软件包，并在实例单元中调用对应的 `redis-server` / `valkey-server` 与 CLI；
配置路径、实例服务名、监控 `job` 和参数前缀仍保留 `redis` 命名空间。

默认 Redis 软件包继续采用 7.2 BSD 分支，不同操作系统渠道里的小版本可能不同，请以实际仓库元数据为准。
已有集群改用 Valkey 不等于自动迁移：切换前应核对目标版本的数据文件兼容性、复制与 Sentinel/Cluster 行为，并准备回滚方案。

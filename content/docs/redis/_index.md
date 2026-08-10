---
title: 模块：REDIS
weight: 3800
description: 使用统一的 REDIS 模块部署 Redis 或 Valkey，并支持独立主从、原生集群与 Sentinel 三种模式。
icon: fas fa-layer-group
module: [REDIS]
categories: [参考]
---

REDIS 是 Pigsty 的 Redis 兼容缓存模块。您可以通过 [`redis_type`](/docs/redis/param#redis_type) 选择 **Redis** 或 **Valkey**，默认仍为 `redis`。
两种引擎都支持主从复制、Sentinel 与原生集群模式，并复用相同的配置路径、实例服务名、监控和日志入口。

```yaml
redis_type: redis   # 默认；也可设置为 valkey
```

角色会安装所选引擎与 `redis-exporter`，实例进程分别使用 `redis-server` / `redis-cli` 或 `valkey-server` / `valkey-cli`。切换 `redis_type` 会改变软件包和二进制，并不会自动验证数据格式、复制拓扑或回滚路径；已有集群切换前应先演练，且同一逻辑集群的所有节点必须使用同一引擎。

默认 Redis 软件包继续采用 7.2 BSD 分支；不同操作系统仓库中的小版本可能不同，应以目标仓库元数据为准。


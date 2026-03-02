---
title: "Watchdog 支持"
weight: 90
icon: fa-solid fa-dog
description: "Patroni 集群的 watchdog 集成与隔离（fencing）注意事项。"
module: [PATRONI]
category: [Concept]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/watchdog.html

<a id="watchdog"></a>

同时存在多个以主库身份运行的 PostgreSQL 实例，可能因时间线分叉而导致事务丢失，这种情况也称为脑裂（split-brain）问题。为了避免脑裂，Patroni 需要确保在 DCS 中的领导者键过期后，PostgreSQL 不再接受任何事务提交。正常情况下，Patroni 会在领导者锁更新失败时尝试停止 PostgreSQL 来实现这一目标。然而，以下各种原因可能导致该机制失效：

- Patroni 因程序缺陷、内存溢出或系统管理员误操作而崩溃。
- PostgreSQL 关闭速度过慢。
- 系统高负载、虚拟机被 hypervisor 暂停或其他基础设施故障导致 Patroni 无法及时运行。

为了在上述情况下保证行为的正确性，Patroni 支持 watchdog 设备。watchdog 设备是一种软件或硬件机制，当其在指定时间内未收到保活心跳时，会强制重置整个系统，为 Patroni 常规脑裂防护机制失效时提供额外的故障安全保障。

Patroni 会在将 PostgreSQL 提升为主库之前尝试激活 watchdog。若 watchdog 激活失败且 watchdog 模式设置为 **`required`**，该节点将拒绝成为领导者。在决定是否参与领导者选举时，Patroni 也会检查 watchdog 配置是否允许其成为领导者。PostgreSQL 降级后（例如因手动故障转移），Patroni 将再次禁用 watchdog；处于暂停模式时，watchdog 同样会被禁用。

默认情况下，Patroni 会将 watchdog 设置为在 TTL 到期前 5 秒触发。在默认配置 **`loop_wait=10`** 和 **`ttl=30`** 下，HA 循环至少有 15 秒（**`ttl`** - **`safety_margin`** - **`loop_wait`**）的时间完成，系统才会被强制重置。访问 DCS 的超时时间默认配置为 10 秒。这意味着当 DCS 因网络问题等原因不可用时，Patroni 和 PostgreSQL 至少有 5 秒（**`ttl`** - **`safety_margin`** - **`loop_wait`** - **`retry_timeout`**）的时间来断开所有客户端连接。

安全余量（**`safety_margin`**）是 Patroni 为领导者键更新与 watchdog 保活之间的时间差所预留的缓冲时长。Patroni 会在确认领导者键更新后立即发送保活信号。若 Patroni 进程在恰好合适的时刻被长时间挂起，保活信号的延迟可能超过安全余量而不触发 watchdog，从而产生一个时间窗口——在领导者键过期之前 watchdog 不会触发，使上述保证失效。若要绝对确保 watchdog 在任何情况下都能触发，可将 **`safety_margin`** 设为 **`-1`**，令 watchdog 超时时间等于 **`ttl // 2`**。如需这种保证，建议适当增大 **`ttl`** 并减小 **`loop_wait`** 和 **`retry_timeout`**。

目前 watchdog 仅支持 Linux watchdog 设备接口。

--------

## 在 Linux 上设置软件 watchdog

Patroni 的默认配置会在 Linux 上尝试使用 **`/dev/watchdog`**（若该设备对 Patroni 可访问）。对于大多数使用场景，Linux 内核内置的软件 watchdog 已足够安全。

在启动 Patroni 之前，以 root 身份执行以下命令来启用软件 watchdog：

``` bash
modprobe softdog
# 将 postgres 替换为实际运行 patroni 的用户
chown postgres /dev/watchdog
```

测试时，可在 modprobe 命令行中添加 **`soft_noboot=1`** 来禁用重启行为。此时 watchdog 仅会在内核环形缓冲区中记录一行日志，可通过 **`dmesg`** 查看。

watchdog 成功启用后，Patroni 会将相关信息写入日志。

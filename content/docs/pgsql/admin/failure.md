---
title: 故障排查
weight: 1607
description: 常见故障与分析排查思路
icon: fa-solid fa-fire
module: [PGSQL]
categories: [任务]
---


本文档列举了 PostgreSQL 和 Pigsty 中可能出现的故障，以及定位、处理、分析问题的 SOP。


--------

## 磁盘空间写满

磁盘空间写满是最常见的故障类型。

### 现象

当数据库所在磁盘空间耗尽时，PostgreSQL 将无法正常工作，可能出现以下现象：数据库日志反复报错"no space left on device"（磁盘空间不足），
新数据无法写入，甚至 PostgreSQL 可能触发 PANIC 强制关闭。

Pigsty 带有 NodeFsSpaceFull 告警规则，当文件系统可用空间不足 10% 时触发告警。
使用监控系统 NODE Instance 面板查阅 FS 指标面板定位问题。

### 诊断

您也可以登录数据库节点，使用 `df -h` 查看各挂载盘符使用率，确定哪个分区被写满。
对于数据库节点，重点检查以下目录及其大小，以判断是哪个类别的文件占满了空间：

- **数据目录**（`/pg/data/base`）：存放表和索引的数据文件，大量写入与临时文件需要关注
- **WAL目录**（如 `pg/data/pg_wal`）：存放 PG WAL，WAL 堆积/复制槽保留是常见的磁盘写满原因。
- **数据库日志目录**（如 `pg/log`）：如果 PG 日志未及时轮转写大量报错写入，也可能占用大量空间。
- **本地备份目录**（如 `data/backups`）：使用 pgBackRest 等在本机保存备份时，也有可能撑满磁盘。

如果问题出在 Pigsty 管理节点或监控节点，还需考虑：

- **监控数据**：VictoriaMetrics 的时序指标和 VictoriaLogs 日志存储都会占用磁盘，可检查保留策略。
- **对象存储数据**：Pigsty 集成的 MinIO 对象存储可能会被用于 PG 备份保存。

明确占用空间最大的目录后，可进一步使用 `du -sh <目录>` 深入查找特定大型文件或子目录。

### 处理

磁盘写满属于紧急问题，需立即采取措施释放空间并保证数据库继续运行。
当数据盘并未与系统盘区分时，写满磁盘可能导致 Shell 命令无法执行。这种情况下，可以删除 `/pg/dummy` 占位文件，释放少量应急空间以便 shell 命令恢复正常。
如果数据库由于 pg_wal 写满已经宕机，清理空间后需要重启数据库服务并仔细检查数据完整性。




--------

## 事务号回卷

PostgreSQL 循环使用 32 位事务ID (XID)，耗尽时会出现"事务号回卷"故障（XID Wraparound）。

### 现象

第一阶段的典型征兆是 [PGSQL Persist - Age Usage](https://demo.pigsty.cc/d/pgsql-persist) 面板年龄饱和度进入警告区域。
数据库日志开始出现：`WARNING: database "postgres" must be vacuumed within xxxxxxxx transactions` 字样的信息。

若问题持续恶化，PostgreSQL 会进入保护模式：当剩余事务ID不到约100万时数据库切换为只读模式；达到上限约21亿（2^31）时则拒绝任何新事务并迫使服务器停机以避免数据错误。

### 诊断

PostgreSQL 与 Pigsty 默认启用自动垃圾回收（AutoVacuum），因此此类故障出现通常有更深层次的根因。
常见的原因包括：超长事务（SAGE），Autovacuum 配置失当，复制槽阻塞，资源不足，存储引擎/扩展BUG，磁盘坏块。

首先定位年龄最大的数据库，然后可通过 Pigsty PGCAT Database - Tables 面板来确认表的年龄分布。
同时查阅数据库错误日志，通常可以找到定位根因的线索。

### 处理

1. **立即冻结老事务**：如果数据库尚未进入只读保护状态，立刻对受影响的库执行一次手动 VACUUM FREEZE。可以从老化最严重的表开始逐个冻结，而不是整库一起做，以加快效果。使用超级用户连接数据库，针对识别出的 `relfrozenxid` 最大的表运行 `VACUUM FREEZE 表名;`，优先冻结那些XID年龄最大的表元组。这样可以迅速回收大量事务ID空间。
2. **单用户模式救援**：如果数据库已经拒绝写入或宕机保护，此时需要启动数据库到单用户模式执行冻结操作。在单用户模式下运行 `VACUUM FREEZE database_name;` 对整个数据库进行冻结清理。完成后再以多用户模式重启数据库。这样做可以解除回卷锁定，让数据库重新可写。需要注意在单用户模式下操作要非常谨慎，并确保有足够的事务ID余量完成冻结。
3. **备用节点接管**：在某些复杂场景（例如遭遇硬件问题导致 vacuum 无法完成），可考虑提升集群中的只读备节点为主，以获取一个相对干净的环境来处理冻结。例如主库因坏块导致无法 vacuum，此时可以手动Failover提升备库为新的主库，再对其进行紧急 vacuum freeze。确保新主库已冻结老事务后，再将负载切回来。




--------

## 连接耗尽

PostgreSQL 有一个最大连接数配置 (`max_connections`)，当客户端连接数超过此上限时，新的连接请求将被拒绝。典型现象是在应用端看到数据库无法连接，并报出类似
**FATAL: remaining connection slots are reserved for non-replication superuser connections** 或 **too many clients already** 的错误。
这表示普通连接数已用完，仅剩下保留给超管或复制的槽位

### 诊断

连接耗尽通常由客户端大量并发请求引起。您可以通过 PGCAT Instance / PGCAT Database / PGCAT Locks 直接查阅数据库当前的活跃会话。
并判断是什么样的查询填满了系统，并进行进一步的处理。特别需要关注是否存在大量 Idle in Transaction 状态的连接以及长时间运行的事务（以及慢查询）。

### 处理

**杀查询**：对于已经耗尽导致业务受阻的情况，通常立即使用 `pg_terminate_backend(pid)` 进行紧急降压。
对于使用连接池的情况，则可以调整连接池大小参数，并执行 reload 重载的方式减少数据库层面的连接数量。

您也可以修改 `max_connections` 参数为更大的值，但本参数需要重启数据库后才能生效。


--------

## etcd 配额写满

etcd 配额写满将导致 PG 高可用控制面失效，无法进行配置变更。


### 诊断

Pigsty 在实现高可用时使用 etcd 作为分布式配置存储(DCS)，etcd 自身有一个存储配额（默认约为2GB）。
当 etcd 存储用量达到配额上限时，etcd 将拒绝写入操作，报错 "**etcdserver: mvcc: database space exceeded**"。在这种情况下，Patroni 无法向 etcd 写入心跳或更新配置，从而导致集群管理功能失效。

### 解决

在 Pigsty v2.0.0 - v2.5.1 之间的版本默认受此问题影响。Pigsty v2.6.0 为部署的 etcd 新增了自动压实的配置项，如果您仅将其用于 PG 高可用租约，则常规用例下不会再有此问题。



--------

## 有缺陷的存储引擎

目前，TimescaleDB 的试验性存储引擎 Hypercore 被证实存在缺陷，已经出现 VACUUM 无法回收出现 XID 回卷故障的案例。
请使用该功能的用户及时迁移至 PostgreSQL 原生表或者 TimescaleDB 默认引擎

详细介绍：《[PG新存储引擎故障案例](https://mp.weixin.qq.com/s/LdZVVyOj4BA9C892I25lQw)》


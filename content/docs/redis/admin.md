---
title: 管理预案
weight: 3840
description: Redis 集群管理 SOP，创建、销毁、扩容、缩容与高可用的详细说明
icon: fa-solid fa-building-columns
module: [REDIS]
categories: [任务]
---



以下是一些常见的 Redis 管理任务 SOP（预案）：

**基础运维**
- [初始化Redis](#初始化redis)
- [下线Redis](#下线redis)
- [重新配置Redis](#重新配置redis)
- [使用Redis客户端](#使用redis客户端)

**高可用管理**
- [手工设置Redis从库](#手工设置redis从库)
- [设置Redis主从高可用](#设置redis主从高可用)
- [初始化Redis原生集群](#初始化-redis-原生集群)

**扩缩容与迁移**
- [扩容Redis节点](#扩容redis节点)
- [缩容Redis节点](#缩容redis节点)
- [数据备份与恢复](#数据备份与恢复)

**故障排查**
- [常见问题诊断](#常见问题诊断)
- [性能调优](#性能调优)

更多问题请参考 [FAQ：REDIS](/docs/redis/faq/)。


-------------

### 初始化Redis

您可以使用 [`redis.yml`](/docs/redis/playbook#redisyml) 剧本来初始化 Redis 集群、节点、或实例：

```bash
# 初始化集群内所有 Redis 实例
./redis.yml -l <cluster>      # 初始化 redis 集群

# 初始化特定节点上的所有 Redis 实例
./redis.yml -l 10.10.10.10    # 初始化 redis 节点

# 初始化特定 Redis 实例：  10.10.10.11:6379
./redis.yml -l 10.10.10.11 -e redis_port=6379 -t redis
```

你也可以使用包装脚本命令行脚本来初始化：

```bash
bin/redis-add redis-ms          # 初始化 redis 集群 'redis-ms'
bin/redis-add 10.10.10.10       # 初始化 redis 节点 '10.10.10.10'
bin/redis-add 10.10.10.10 6379  # 初始化 redis 实例 '10.10.10.10:6379'
```

-------------

### 下线Redis

您可以使用 [`redis-rm.yml`](/docs/redis/playbook#redis-rmyml) 剧本来下线 Redis 集群、节点、或实例：

```bash
# 下线 Redis 集群 `redis-test`
./redis-rm.yml -l redis-test

# 下线 Redis 集群 `redis-test` 并卸载 Redis 软件包
./redis-rm.yml -l redis-test -e redis_rm_pkg=true

# 下线 Redis 节点 10.10.10.13 上的所有实例
./redis-rm.yml -l 10.10.10.13

# 下线特定 Redis 实例 10.10.10.13:6379
./redis-rm.yml -l 10.10.10.13 -e redis_port=6379
```

你也可以使用包装脚本来下线 Redis 集群/节点/实例：

```bash
bin/redis-rm redis-ms          # 下线 redis 集群 'redis-ms'
bin/redis-rm 10.10.10.10       # 下线 redis 节点 '10.10.10.10'
bin/redis-rm 10.10.10.10 6379  # 下线 redis 实例 '10.10.10.10:6379'
```

-------------

### 重新配置Redis

您可以部分执行 [`redis.yml`](/docs/redis/playbook#redisyml) 剧本来重新配置 Redis 集群、节点、或实例：

```bash
./redis.yml -l <cluster> -t redis_config,redis_launch
```

请注意，redis 无法在线重载配置，您只能使用 launch 任务进行重启来让配置生效。


-------------

## 使用Redis客户端

使用 `redis-cli` 访问 Reids 实例：

```bash
$ redis-cli -h 10.10.10.10 -p 6379 # <--- 使用 Host 与 Port 访问对应 Redis 实例
10.10.10.10:6379> auth redis.ms    # <--- 使用密码验证
OK
10.10.10.10:6379> set a 10         # <--- 设置一个Key
OK
10.10.10.10:6379> get a            # <--- 获取 Key 的值
"10"
```

Redis提供了`redis-benchmark`工具，可以用于Redis的性能评估，或生成一些负载用于测试。

```bash
redis-benchmark -h 10.10.10.13 -p 6379
```

-------------

### 手工设置Redis从库

https://redis.io/commands/replicaof/

```bash
# 将一个 Redis 实例提升为主库
> REPLICAOF NO ONE
"OK"

# 将一个 Redis 实例设置为另一个实例的从库
> REPLICAOF 127.0.0.1 6799
"OK"
```

-------------

### 设置Redis主从高可用

Redis独立主从集群可以通过 Redis 哨兵集群配置自动高可用，详细用户请参考 [Sentinel官方文档](https://redis.io/docs/management/sentinel/)

以四节点 [**沙箱**](/docs/deploy/sandbox) 为例，一套 Redis Sentinel 集群 `redis-meta`，可以用来管理很多套独立 Redis 主从集群。

以一主一从的Redis普通主从集群 `redis-ms` 为例，您需要在每个 Sentinel 实例上，使用 `SENTINEL MONITOR` 添加目标，并使用 `SENTINEL SET` 提供密码，高可用就配置完毕了。

```bash
# 对于每一个 sentinel，将 redis 主服务器纳入哨兵管理：（26379,26380,26381）
$ redis-cli -h 10.10.10.11 -p 26379 -a redis.meta
10.10.10.11:26379> SENTINEL MONITOR redis-ms 10.10.10.10 6379 1
10.10.10.11:26379> SENTINEL SET redis-ms auth-pass redis.ms      # 如果启用了授权，需要配置密码
```

如果您想移除某个由 Sentinel 管理的 Redis 主从集群，使用 `SENTINEL REMOVE <name>` 移除即可。

您可以使用定义在 Sentinel 集群上的 [`redis_sentinel_monitor`](/docs/redis/param#redis_sentinel_monitor) 参数，来自动配置管理哨兵监控管理的主库列表。

```yaml
redis_sentinel_monitor:  # 需要被监控的主库列表，端口、密码、法定人数（应为1/2以上的哨兵数量）为可选参数
  - { name: redis-src, host: 10.10.10.45, port: 6379 ,password: redis.src, quorum: 1 }
  - { name: redis-dst, host: 10.10.10.48, port: 6379 ,password: redis.dst, quorum: 1 }
```

`redis.yml` 中的 `redis-ha` 阶段会根据该列表在每个哨兵实例上渲染 `/tmp/<cluster>.monitor` 并依次执行 `SENTINEL REMOVE` 与 `SENTINEL MONITOR` 命令，
从而保证哨兵纳管状态与清单保持一致。如果只想移除某个目标而不再重新添加，可以在监控对象上设置 `remove: true`，剧本会在 `SENTINEL REMOVE` 后跳过重新注册。

使用以下命令刷新 Redis 哨兵集群上的纳管主库列表：

```bash
./redis.yml -l redis-meta -t redis-ha   # 如果您的 Sentinel 集群名称不是 redis-meta，请在这里替换。
```

-------------

### 初始化 Redis 原生集群

当 [`redis_mode`](/docs/redis/param#redis_mode) 设置为 `cluster` 时，`redis.yml` 会额外执行 `redis-join` 阶段 ：
在 `/tmp/<cluster>-join.sh` 中使用 `redis-cli --cluster create --cluster-yes ... --cluster-replicas {{ redis_cluster_replicas }}` 把所有实例拼成原生集群。
该步骤在首次部署时自动运行，后续重新执行 `./redis.yml -l <cluster> -t redis-join` 将再次生成并运行相同命令；
由于 `--cluster create` 并非幂等操作， 只有在你确认需要重建整个原生集群时才应单独触发这一阶段。


-------------

### 扩容Redis节点

#### 扩容独立主从集群

向现有的 Redis 主从集群添加新节点/实例时，首先在配置清单中添加新的定义：

```yaml
redis-ms:
  hosts:
    10.10.10.10: { redis_node: 1 , redis_instances: { 6379: { }, 6380: { replica_of: '10.10.10.10 6379' } } }
    10.10.10.11: { redis_node: 2 , redis_instances: { 6379: { replica_of: '10.10.10.10 6379' } } }  # 新增节点
  vars: { redis_cluster: redis-ms ,redis_password: 'redis.ms' ,redis_max_memory: 64MB }
```

然后仅针对新节点执行部署：

```bash
./redis.yml -l 10.10.10.11   # 仅部署新增的节点
```

#### 扩容原生集群

向 Redis 原生集群添加新节点需要额外的步骤：

```bash
# 1. 在配置清单中添加新节点
# 2. 部署新节点
./redis.yml -l 10.10.10.14

# 3. 将新节点添加到集群中（手动执行）
redis-cli --cluster add-node 10.10.10.14:6379 10.10.10.12:6379

# 4. 重新分配槽位（如需要）
redis-cli --cluster reshard 10.10.10.12:6379
```

#### 扩容哨兵集群

向 Sentinel 集群添加新实例：

```bash
# 在配置清单中添加新的哨兵实例，然后执行：
./redis.yml -l <sentinel-cluster> -t redis_instance
```


-------------

### 缩容Redis节点

#### 缩容独立主从集群

```bash
# 1. 如果要移除的是从库，直接移除即可
./redis-rm.yml -l 10.10.10.11 -e redis_port=6379

# 2. 如果要移除的是主库，先进行主从切换
redis-cli -h 10.10.10.10 -p 6380 REPLICAOF NO ONE      # 提升从库
redis-cli -h 10.10.10.10 -p 6379 REPLICAOF 10.10.10.10 6380  # 降级原主库

# 3. 然后移除原主库
./redis-rm.yml -l 10.10.10.10 -e redis_port=6379

# 4. 更新配置清单，移除相关定义
```

#### 缩容原生集群

```bash
# 1. 先迁移数据槽位
redis-cli --cluster reshard 10.10.10.12:6379 \
  --cluster-from <node-id> --cluster-to <target-node-id> --cluster-slots <count>

# 2. 从集群中移除节点
redis-cli --cluster del-node 10.10.10.12:6379 <node-id>

# 3. 下线实例
./redis-rm.yml -l 10.10.10.14

# 4. 更新配置清单
```


-------------

### 数据备份与恢复

#### 手动备份

```bash
# 触发 RDB 快照
redis-cli -h 10.10.10.10 -p 6379 -a <password> BGSAVE

# 查看快照状态
redis-cli -h 10.10.10.10 -p 6379 -a <password> LASTSAVE

# 复制 RDB 文件（默认位置）
cp /data/redis/redis-ms-1-6379/dump.rdb /backup/redis-ms-$(date +%Y%m%d).rdb
```

#### 数据恢复

```bash
# 1. 停止 Redis 实例
sudo systemctl stop redis-ms-1-6379

# 2. 替换 RDB 文件
cp /backup/redis-ms-20241231.rdb /data/redis/redis-ms-1-6379/dump.rdb
chown redis:redis /data/redis/redis-ms-1-6379/dump.rdb

# 3. 启动 Redis 实例
sudo systemctl start redis-ms-1-6379
```

#### 使用 AOF 持久化

如果需要更高的数据安全性，可以启用 AOF：

```yaml
redis-ms:
  vars:
    redis_aof_enabled: true
    redis_rdb_save: ['900 1', '300 10', '60 10000']  # 同时保留 RDB
```

重新部署以应用 AOF 配置：

```bash
./redis.yml -l redis-ms -t redis_config,redis_launch
```


-------------

### 常见问题诊断

#### 连接问题排查

```bash
# 检查 Redis 服务状态
systemctl status redis-ms-1-6379

# 检查端口监听
ss -tlnp | grep 6379

# 检查防火墙
sudo iptables -L -n | grep 6379

# 测试连接
redis-cli -h 10.10.10.10 -p 6379 PING
```

#### 内存问题排查

```bash
# 查看内存使用情况
redis-cli -h 10.10.10.10 -p 6379 INFO memory

# 查看大 Key
redis-cli -h 10.10.10.10 -p 6379 --bigkeys

# 查看内存分析报告
redis-cli -h 10.10.10.10 -p 6379 MEMORY DOCTOR
```

#### 性能问题排查

```bash
# 查看慢查询日志
redis-cli -h 10.10.10.10 -p 6379 SLOWLOG GET 10

# 实时监控命令
redis-cli -h 10.10.10.10 -p 6379 MONITOR

# 查看客户端连接
redis-cli -h 10.10.10.10 -p 6379 CLIENT LIST
```

#### 复制问题排查

```bash
# 查看复制状态
redis-cli -h 10.10.10.10 -p 6379 INFO replication

# 检查复制延迟
redis-cli -h 10.10.10.10 -p 6380 INFO replication | grep lag
```


-------------

### 性能调优

#### 内存优化

```yaml
redis-cache:
  vars:
    redis_max_memory: 4GB           # 根据可用内存设置
    redis_mem_policy: allkeys-lru   # 缓存场景推荐 LRU
    redis_conf: redis.conf
```

#### 持久化优化

```yaml
# 纯缓存场景：禁用持久化
redis-cache:
  vars:
    redis_rdb_save: []              # 禁用 RDB
    redis_aof_enabled: false        # 禁用 AOF

# 数据安全场景：同时启用 RDB 和 AOF
redis-data:
  vars:
    redis_rdb_save: ['900 1', '300 10', '60 10000']
    redis_aof_enabled: true
```

#### 连接池配置建议

客户端应用连接 Redis 时，建议：

- 使用连接池，避免频繁创建连接
- 设置合理的超时时间（推荐 1-3 秒）
- 启用 TCP keepalive
- 对于高并发场景，考虑使用 Pipeline 批量操作

#### 监控关键指标

通过 Grafana 仪表盘关注以下指标：

- **内存使用率**：`redis:ins:mem_usage` > 80% 时需要关注
- **CPU 使用率**：`redis:ins:cpu_usage` > 70% 时需要关注
- **QPS**：关注突增和异常波动
- **响应时间**：`redis:ins:rt` > 1ms 时需要排查
- **连接数**：关注连接数增长趋势
- **复制延迟**：主从复制场景下需要关注

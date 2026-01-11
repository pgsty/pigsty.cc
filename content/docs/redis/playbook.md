---
title: 预置剧本
weight: 3830
description: 如何使用预置的 ansible 剧本来管理 Redis 集群，常用管理命令速查。
icon: fa-solid fa-scroll
module: [REDIS]
categories: [任务]
---



REDIS模块提供了两个剧本，用于部署/移除 Redis 集群/节点/实例：

- [`redis.yml`](#redisyml)：部署 Redis 集群/节点/实例
- [`redis-rm.yml`](#redis-rmyml)：移除 Redis 集群/节点/实例



--------

## `redis.yml`

用于部署 Redis 的 [`redis.yml`](https://github.com/pgsty/pigsty/blob/main/redis.yml) 剧本包含以下子任务：

```bash
redis_node        : 初始化redis节点
  - redis_install : 安装redis & redis_exporter
  - redis_user    : 创建操作系统用户 redis
  - redis_dir     : 配置 redis的FHS目录结构
redis_exporter    : 配置 redis_exporter 监控
  - redis_exporter_config  : 生成redis_exporter配置
  - redis_exporter_launch  : 启动redis_exporter
redis_instance    : 初始化并重启redis集群/节点/实例
  - redis_config  : 生成redis实例配置
  - redis_launch  : 启动redis实例
redis_register    : 将redis注册到基础设施中
redis_ha          : 配置redis哨兵（仅sentinel模式）
redis_join        : 组建redis原生集群（仅cluster模式）
```


### 操作级别

`redis.yml` 支持三种操作级别，通过 `-l` 限制目标范围，通过 `-e redis_port=<port>` 指定单个实例：

| 操作级别 | 限制参数 | 说明 |
|:--------|:--------|:-----|
| **集群** | `-l <cluster>` | 部署整个 Redis 集群的所有节点和实例 |
| **节点** | `-l <ip>` | 部署指定节点上的所有 Redis 实例 |
| **实例** | `-l <ip> -e redis_port=<port>` | 仅部署指定节点上的单个实例 |
{.full-width}


### 集群级别操作

部署整个 Redis 集群，包括所有节点上的所有实例：

```bash
./redis.yml -l redis-ms           # 部署名为 redis-ms 的整个集群
./redis.yml -l redis-test         # 部署名为 redis-test 的整个集群
./redis.yml -l redis-sentinel     # 部署哨兵集群
```

集群级别操作会：
- 在所有节点上安装 Redis 软件包
- 在所有节点上创建 redis 用户和目录结构
- 启动所有节点上的 redis_exporter
- 部署并启动所有定义的 Redis 实例
- 将所有实例注册到监控系统
- 如果是 `sentinel` 模式，配置哨兵监控目标
- 如果是 `cluster` 模式，组建原生集群


### 节点级别操作

仅部署指定节点上的所有 Redis 实例：

```bash
./redis.yml -l 10.10.10.10        # 部署该节点上的所有实例
./redis.yml -l 10.10.10.11        # 部署另一个节点
```

节点级别操作适用于：
- 向现有集群**扩容新节点**
- 重新部署某个节点上的所有实例
- 节点故障恢复后重新初始化

> **注意**：节点级别操作不会执行 `redis-ha` 和 `redis-join` 阶段，如果需要将新节点加入原生集群，需要手动执行 `redis-cli --cluster add-node`


### 实例级别操作

通过 `-e redis_port=<port>` 参数指定单个实例进行操作：

```bash
# 仅部署 10.10.10.10 上的 6379 端口实例
./redis.yml -l 10.10.10.10 -e redis_port=6379

# 仅部署 10.10.10.11 上的 6380 端口实例
./redis.yml -l 10.10.10.11 -e redis_port=6380
```

实例级别操作适用于：
- 向现有节点**添加新实例**
- 重新部署单个故障实例
- 更新单个实例的配置

当指定 `redis_port` 时：
- 仅渲染该端口对应的配置文件
- 仅启动/重启该端口对应的 systemd 服务
- 仅注册该实例到监控系统
- **不会**影响同节点上的其他实例


### 常用标签

可以通过 `-t <tag>` 参数选择性执行部分任务：

```bash
# 仅安装软件包，不启动服务
./redis.yml -l redis-ms -t redis_node

# 仅更新配置并重启实例
./redis.yml -l redis-ms -t redis_config,redis_launch

# 仅更新监控注册
./redis.yml -l redis-ms -t redis_register

# 仅配置哨兵监控目标（sentinel模式）
./redis.yml -l redis-sentinel -t redis-ha

# 仅组建原生集群（cluster模式，首次部署后自动执行）
./redis.yml -l redis-cluster -t redis-join
```


### 幂等性说明

`redis.yml` 是**幂等**的，可以安全地重复执行：

- 重复执行会**覆盖**现有配置文件
- 重复执行会**重启** Redis 实例
- 不会检查实例是否已存在，直接渲染配置并重启
- 适用于配置变更后的批量更新

> **提示**：如果只想更新配置而不想重启所有实例，可以使用 `-t redis_config` 仅渲染配置，然后手动重启需要的实例。



--------

## `redis-rm.yml`

用于移除 Redis 的 [`redis-rm.yml`](https://github.com/pgsty/pigsty/blob/main/redis-rm.yml) 剧本包含以下子任务：

```bash
redis_safeguard  : 安全检查，当 redis_safeguard=true 时拒绝执行
redis_deregister : 从监控系统移除注册信息
  - rm_metrics   : 删除 /infra/targets/redis/*.yml
  - rm_logs      : 撤销 /etc/vector/redis.yaml
redis_exporter   : 停止并禁用 redis_exporter
redis            : 停止并禁用 redis 实例
redis_data       : 删除数据目录（当 redis_rm_data=true）
redis_pkg        : 卸载软件包（当 redis_rm_pkg=true）
```


### 操作级别

`redis-rm.yml` 同样支持三种操作级别：

| 操作级别 | 限制参数 | 说明 |
|:--------|:--------|:-----|
| **集群** | `-l <cluster>` | 移除整个 Redis 集群的所有节点和实例 |
| **节点** | `-l <ip>` | 移除指定节点上的所有 Redis 实例 |
| **实例** | `-l <ip> -e redis_port=<port>` | 仅移除指定节点上的单个实例 |
{.full-width}


### 集群级别移除

移除整个 Redis 集群：

```bash
./redis-rm.yml -l redis-ms        # 移除整个 redis-ms 集群
./redis-rm.yml -l redis-test      # 移除整个 redis-test 集群
```

集群级别移除会：
- 从监控系统注销所有节点的所有实例
- 停止所有节点上的 redis_exporter
- 停止并禁用所有 Redis 实例
- 删除所有数据目录（如果 `redis_rm_data=true`）
- 卸载软件包（如果 `redis_rm_pkg=true`）


### 节点级别移除

仅移除指定节点上的所有 Redis 实例：

```bash
./redis-rm.yml -l 10.10.10.10     # 移除该节点上的所有实例
./redis-rm.yml -l 10.10.10.11     # 移除另一个节点
```

节点级别移除适用于：
- 集群**缩容**，下线整个节点
- 节点退役前的清理
- 节点迁移前的准备

节点级别移除会：
- 从监控系统注销该节点的所有实例
- 停止该节点上的 redis_exporter
- 停止该节点上的所有 Redis 实例
- 删除该节点上的所有数据目录
- 删除该节点上的 Vector 日志配置


### 实例级别移除

通过 `-e redis_port=<port>` 参数指定移除单个实例：

```bash
# 仅移除 10.10.10.10 上的 6379 端口实例
./redis-rm.yml -l 10.10.10.10 -e redis_port=6379

# 仅移除 10.10.10.11 上的 6380 端口实例
./redis-rm.yml -l 10.10.10.11 -e redis_port=6380
```

实例级别移除适用于：
- 移除节点上的**单个从库**
- 移除不再需要的实例
- 主从切换后移除原主库

当指定 `redis_port` 时的行为差异：

| 组件 | 节点级别（无 redis_port） | 实例级别（有 redis_port） |
|:-----|:------------------------|:------------------------|
| 监控注册 | 删除整个节点的注册文件 | 仅从注册文件中移除该实例 |
| redis_exporter | 停止并禁用 | **不操作**（其他实例还需要） |
| Redis 实例 | 停止所有实例 | 仅停止指定端口的实例 |
| 数据目录 | 删除 `/data/redis/` 整个目录 | 仅删除 `/data/redis/<cluster>-<node>-<port>/` |
| Vector 配置 | 删除 `/etc/vector/redis.yaml` | **不操作**（其他实例还需要） |
| 软件包 | 可选卸载 | **不操作** |
{.full-width}


### 控制参数

`redis-rm.yml` 提供以下控制参数：

| 参数 | 默认值 | 说明 |
|:----|:------|:-----|
| `redis_safeguard` | `false` | 安全保险，设为 `true` 时拒绝执行移除操作 |
| `redis_rm_data` | `true` | 是否删除数据目录（RDB/AOF 文件） |
| `redis_rm_pkg` | `false` | 是否卸载 Redis 软件包 |
{.full-width}

使用示例：

```bash
# 移除集群但保留数据目录
./redis-rm.yml -l redis-ms -e redis_rm_data=false

# 移除集群并卸载软件包
./redis-rm.yml -l redis-ms -e redis_rm_pkg=true

# 绕过安全保险强制移除
./redis-rm.yml -l redis-ms -e redis_safeguard=false
```


### 安全保险机制

当集群配置了 `redis_safeguard: true` 时，`redis-rm.yml` 会拒绝执行：

```yaml
redis-production:
  vars:
    redis_safeguard: true    # 生产环境开启保护
```

```bash
$ ./redis-rm.yml -l redis-production
TASK [ABORT due to redis_safeguard enabled] ***
fatal: [10.10.10.10]: FAILED! => {"msg": "Abort due to redis_safeguard..."}
```

需要显式覆盖才能执行：

```bash
./redis-rm.yml -l redis-production -e redis_safeguard=false
```



--------

## 快速参考

### 部署操作速查

```bash
# 部署整个集群
./redis.yml -l <cluster>

# 扩容：部署新节点
./redis.yml -l <new-node-ip>

# 扩容：在现有节点上添加新实例（先在配置中添加定义）
./redis.yml -l <ip> -e redis_port=<new-port>

# 更新配置并重启
./redis.yml -l <cluster> -t redis_config,redis_launch

# 仅更新单个实例配置
./redis.yml -l <ip> -e redis_port=<port> -t redis_config,redis_launch
```

### 移除操作速查

```bash
# 移除整个集群
./redis-rm.yml -l <cluster>

# 缩容：移除整个节点
./redis-rm.yml -l <ip>

# 缩容：移除单个实例
./redis-rm.yml -l <ip> -e redis_port=<port>

# 移除但保留数据
./redis-rm.yml -l <cluster> -e redis_rm_data=false

# 彻底清理（包括软件包）
./redis-rm.yml -l <cluster> -e redis_rm_pkg=true
```

### 包装脚本

Pigsty 提供了便捷的包装脚本：

```bash
# 部署
bin/redis-add <cluster>           # 部署集群
bin/redis-add <ip>                # 部署节点
bin/redis-add <ip> <port>         # 部署实例

# 移除
bin/redis-rm <cluster>            # 移除集群
bin/redis-rm <ip>                 # 移除节点
bin/redis-rm <ip> <port>          # 移除实例
```


--------

## 示例演示

使用 Redis 剧本初始化 Redis 集群：

[![asciicast](https://asciinema.org/a/568808.svg)](https://asciinema.org/a/568808)


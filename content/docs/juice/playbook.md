---
title: 预置剧本
weight: 4530
description: 如何使用预置的 ansible 剧本来管理 JuiceFS 文件系统，常用管理命令速查。
icon: fa-solid fa-scroll
module: [JUICE]
categories: [任务]
---


JUICE 模块提供了一个剧本，用于部署和移除 JuiceFS 文件系统实例：

- [`juice.yml`](#juiceyml)：部署/移除 JuiceFS 实例


--------

## `juice.yml`

用于部署 JuiceFS 的 [`juice.yml`](https://github.com/pgsty/pigsty/blob/main/juice.yml) 剧本包含以下子任务：

```bash
juice_id        : 验证配置，检查端口冲突
juice_install   : 安装 juicefs 软件包
juice_cache     : 创建共享缓存目录
juice_clean     : 清理实例（state=absent）
juice_instance  : 创建实例（state=create）
  - juice_init  : 格式化文件系统
  - juice_dir   : 创建挂载点目录
  - juice_config: 渲染配置文件
  - juice_launch: 启动 systemd 服务
juice_register  : 注册到监控系统
```


### 操作级别

`juice.yml` 支持两种操作级别：

| 操作级别  | 限制参数                       | 说明                    |
|:------|:---------------------------|:----------------------|
| **节点** | `-l <ip>`                  | 部署指定节点上的所有 JuiceFS 实例 |
| **实例** | `-l <ip> -e fsname=<name>` | 仅部署指定节点上的单个实例         |
{.full-width}


### 节点级别操作

部署指定节点上定义的所有 JuiceFS 实例：

```bash
./juice.yml -l 10.10.10.10        # 部署该节点上的所有实例
./juice.yml -l 10.10.10.11        # 部署另一个节点
```

节点级别操作会：

- 安装 JuiceFS 软件包
- 创建共享缓存目录
- 格式化并挂载所有定义的文件系统实例
- 将所有实例注册到监控系统


### 实例级别操作

通过 `-e fsname=<name>` 参数指定单个实例进行操作：

```bash
# 仅部署 10.10.10.10 上名为 jfs 的实例
./juice.yml -l 10.10.10.10 -e fsname=jfs

# 仅部署 10.10.10.11 上名为 shared 的实例
./juice.yml -l 10.10.10.11 -e fsname=shared
```

实例级别操作适用于：

- 向现有节点**添加新的文件系统实例**
- 重新部署单个故障实例
- 更新单个实例的配置


### 常用标签

可以通过 `-t <tag>` 参数选择性执行部分任务：

```bash
# 仅安装软件包，不启动服务
./juice.yml -l 10.10.10.10 -t juice_install

# 仅更新配置文件（不启动服务）
./juice.yml -l 10.10.10.10 -t juice_config

# 仅更新监控注册
./juice.yml -l 10.10.10.10 -t juice_register

# 移除实例（需先在配置中设置 state: absent）
./juice.yml -l 10.10.10.10 -t juice_clean
```


### 幂等性说明

`juice.yml` 是**幂等**的，可以安全地重复执行：

- `juice_init`（格式化）使用 `--no-update` 参数，仅在文件系统不存在时执行实际格式化
- 重复执行会**覆盖**现有配置文件并执行 `daemon-reload`
- 配置变更后需要**手动重启**服务，或通过完整执行剧本来启动服务
- 适用于配置变更后的批量更新

> **提示**：如果只想更新配置文件而不启动服务，可以使用 `-t juice_config` 仅渲染配置。


--------

## 移除实例

要移除 JuiceFS 实例，需要两个步骤：

1. 在配置中将实例的 `state` 设置为 `absent`
2. 执行剧本的 `juice_clean` 任务

```yaml
# 步骤 1：修改配置
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://...
    state : absent    # 标记为待移除
```

```bash
# 步骤 2：执行移除
./juice.yml -l 10.10.10.10 -t juice_clean

# 或仅移除指定实例
./juice.yml -l 10.10.10.10 -e fsname=jfs -t juice_clean
```

移除操作会：

- 停止对应的 systemd 服务
- 执行 `umount -l` 懒卸载文件系统
- 删除 systemd 服务文件
- 删除环境配置文件
- 重载 systemd daemon

> **注意**：移除操作不会删除 PostgreSQL 中的元数据和文件数据，如需彻底清理，请手动删除对应的数据库。


--------

## 快速参考

### 部署操作速查

```bash
# 部署节点上所有实例
./juice.yml -l <ip>

# 部署单个实例
./juice.yml -l <ip> -e fsname=<name>

# 更新配置文件
./juice.yml -l <ip> -t juice_config

# 仅更新单个实例配置
./juice.yml -l <ip> -e fsname=<name> -t juice_config
```

### 移除操作速查

```bash
# 移除节点上所有标记为 absent 的实例
./juice.yml -l <ip> -t juice_clean

# 移除单个实例
./juice.yml -l <ip> -e fsname=<name> -t juice_clean
```

### 任务标签速查

| 标签               | 说明                   |
|:-----------------|:---------------------|
| `juice_id`       | 验证配置和端口冲突            |
| `juice_install`  | 安装 juicefs 软件包       |
| `juice_cache`    | 创建缓存目录               |
| `juice_clean`    | 移除实例（state=absent）   |
| `juice_instance` | 创建实例（伞形标签）           |
| `juice_init`     | 格式化文件系统              |
| `juice_dir`      | 创建挂载点目录              |
| `juice_config`   | 渲染配置文件               |
| `juice_launch`   | 启动 systemd 服务        |
| `juice_register` | 注册到 VictoriaMetrics  |
{.full-width}



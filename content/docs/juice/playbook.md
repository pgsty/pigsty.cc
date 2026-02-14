---
title: 预置剧本
weight: 4530
description: JUICE 模块剧本使用说明。
icon: fa-solid fa-scroll
module: [JUICE]
categories: [任务]
---

JUICE 模块提供 `juice.yml` 剧本，用于部署与移除 JuiceFS 实例。

--------

## `juice.yml`

[`juice.yml`](https://github.com/pgsty/pigsty/blob/v4.1.0/juice.yml) 的任务结构如下：

```bash
juice_id        : 校验配置、检查端口冲突
juice_install   : 安装 juicefs 软件包
juice_cache     : 创建共享缓存目录
juice_clean     : 移除实例（state=absent）
juice_instance  : 创建实例（state=create）
  - juice_init  : 格式化文件系统（--no-update）
  - juice_dir   : 创建挂载点目录
  - juice_config: 渲染环境文件与 systemd 服务单元
  - juice_launch: 启动服务并等待指标端口就绪
juice_register  : 注册到 VictoriaMetrics 目标文件
```

--------

## 运行粒度

| 粒度 | 限制参数 | 说明 |
|:-----|:--------|:-----|
| 节点 | `-l <host>` | 部署该节点所有实例 |
| 实例 | `-l <host> -e fsname=<name>` | 只处理指定实例 |
{.full-width}

示例：

```bash
./juice.yml -l 10.10.10.10                 # 部署该节点所有实例
./juice.yml -l 10.10.10.10 -e fsname=jfs   # 仅部署 jfs 实例
```

--------

## 常用标签

| 标签 | 说明 |
|:-----|:-----|
| `juice_id` | 校验 `juice_instances` 与端口冲突 |
| `juice_install` | 安装 `juicefs` 软件包 |
| `juice_cache` | 创建共享缓存目录 |
| `juice_clean` | 移除实例（state=absent） |
| `juice_instance` | 创建实例（伞形标签） |
| `juice_init` | 格式化文件系统 |
| `juice_dir` | 创建挂载点目录 |
| `juice_config` | 渲染配置文件 |
| `juice_launch` | 启动服务 |
| `juice_register` | 写入 VictoriaMetrics 目标文件 |
{.full-width}

--------

## 配置更新

仅更新配置文件（不重启服务）：

```bash
./juice.yml -l <host> -t juice_config
```

更新配置并确保服务在线（不强制重启）：

```bash
./juice.yml -l <host> -t juice_config,juice_launch
```

如需让新的挂载参数立即生效，请手动重启对应实例服务：

```bash
systemctl restart juicefs-<name>
```

--------

## 移除实例

移除流程：

1. 将实例 `state` 置为 `absent`
2. 执行 `juice_clean`

```yaml
juice_instances:
  jfs:
    path: /fs
    meta: postgres://...
    state: absent
```

```bash
./juice.yml -l <host> -t juice_clean
./juice.yml -l <host> -e fsname=jfs -t juice_clean
```

移除动作包括：停止服务、懒卸载、删除 systemd 单元与环境文件、重载 systemd。
**不会删除** PostgreSQL 元数据或对象存储数据。

--------

## 监控注册

`juice_register` 会在 **infra 节点** 写入目标文件：

```
/infra/targets/juice/<hostname>.yml
```

如需手动重新注册：

```bash
./juice.yml -l <host> -t juice_register
```

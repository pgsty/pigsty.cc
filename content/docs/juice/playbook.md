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

[`juice.yml`](https://github.com/pgsty/pigsty/blob/main/juice.yml) 的任务结构如下：

```bash
juice_id        : 校验实例名、必填字段、端口与路径冲突（always）
juice_install   : 安装 juicefs 软件包
juice_cache     : 创建共享缓存目录
juice_clean     : 移除实例（state=absent），并刷新监控目标文件
juice_instance  : 创建实例（state=create）
  - juice_init  : 格式化文件系统（--no-update），失败时打印错误
  - juice_config: 渲染环境文件与 systemd 服务单元（不重启）
  - juice_launch: 启动服务并等待挂载点就绪
  - juice_dir   : 挂载后设置文件系统根目录的属主、属组与权限
juice_register  : 注册到 VictoriaMetrics 目标文件
```

--------

## 运行粒度

| 粒度 | 限制参数                         | 说明        |
|:---|:-----------------------------|:----------|
| 节点 | `-l <host>`                  | 部署该节点所有实例 |
| 实例 | `-l <host> -e fsname=<name>` | 只处理指定实例   |
{.full-width}

示例：

```bash
./juice.yml -l 10.10.10.10                 # 部署该节点所有实例
./juice.yml -l 10.10.10.10 -e fsname=jfs   # 仅部署 jfs 实例
```

未定义 `juice_instances` 或其为空字典的主机会被直接跳过：即使不带 `-l` 执行，也不会给无关节点安装软件包、创建缓存目录或写入空的监控目标文件。不过仍建议用 `-l` 明确执行范围。

--------

## 常用标签

| 标签               | 说明                                   |
|:-----------------|:-------------------------------------|
| `juice_id`       | 校验实例名、必填字段、端口与路径冲突，任何标签组合下都会执行       |
| `juice_install`  | 安装 `juicefs` 软件包                     |
| `juice_cache`    | 创建共享缓存目录                             |
| `juice_clean`    | 移除 `state: absent` 的实例，并重写该节点的监控目标文件 |
| `juice_instance` | 创建实例（伞形标签）                           |
| `juice_init`     | 格式化文件系统，失败时打印 JuiceFS 输出的最后一行错误      |
| `juice_config`   | 渲染环境文件与服务单元，不重启服务                    |
| `juice_launch`   | 启动服务并等待挂载点就绪（最多 60 秒）                |
| `juice_dir`      | 挂载后设置文件系统根目录的属主、属组与权限                |
| `juice_register` | 写入 VictoriaMetrics 目标文件              |
{.full-width .wide .expand}

--------

## 配置更新

仅渲染配置文件（不重载 systemd，也不重启服务）：

```bash
./juice.yml -l <host> -t juice_config
```

更新配置并重载 systemd，确保服务在线并等待挂载点就绪（不强制重启）：

```bash
./juice.yml -l <host> -t juice_config,juice_launch
```

剧本从不自动重启正在运行的实例。如需让新的挂载参数立即生效，请在执行上一条命令后手动重启对应实例服务：

```bash
systemctl restart juicefs-<name>
```

重启等于先卸载再重新挂载，已打开的文件与容器中对该路径的 bind mount 都会中断，请选择合适的时间窗口。

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

移除动作包括：停止并禁用服务、`umount -l` 懒卸载、删除 systemd 单元与环境文件、重载 systemd。
`juice_clean` 还会重写该节点的监控目标文件，移除已下线实例的抓取地址。不带标签完整执行 `juice.yml` 同样会清理 `state: absent` 的实例。
清理完成前不要从配置中删除该条目，否则剧本无从得知需要清理哪个实例。

以下内容 **不会删除**，如需回收请手动处理：

- 元数据引擎中的元数据
- 文件数据：PostgreSQL 的 `jfs_blob` 表或对象存储中的数据
- 本地缓存：[`juice_cache`](/docs/juice/param#juice_cache) 目录下按文件系统 UUID 划分的子目录
- 挂载点目录

> [!WARNING] 旧版本
> v4.5.0 及更早版本中，`-t juice_clean` 只会载入清理任务文件，不会执行其中的任务。这些版本请改用不带标签的完整执行来移除 `state: absent` 的实例：`./juice.yml -l <host> -e fsname=<name>`。

--------

## 监控注册

`juice_register` 会在 **infra 节点** 写入目标文件，内容按配置整体重写，只包含 `state: create` 的实例：

```text
/infra/targets/juice/<ip>.yml
```

如需手动重新注册：

```bash
./juice.yml -l <host> -t juice_register
```

---
title: 预置剧本
weight: 3440
description: 如何使用预置的 ansible 剧本来管理 Etcd 集群，常用管理命令速查。
icon: fa-solid fa-scroll
module: [ETCD]
categories: [任务]
---


Etcd 模块提供了两个核心剧本：[`etcd.yml`](#etcdyml) 用于安装与配置 Etcd 集群，[`etcd-rm.yml`](#etcd-rmyml) 用于移除 Etcd 集群或成员。

{{% alert title="架构变化：Pigsty v3.6+" color="info" %}}
自 Pigsty v3.6 起，`etcd.yml` 剧本专注于集群安装和成员添加，所有移除操作已迁移至独立的 `etcd-rm.yml` 剧本和 `etcd_remove` 角色。
{{% /alert %}}


--------

## `etcd.yml`

剧本原始文件：[`etcd.yml`](https://github.com/pgsty/pigsty/blob/main/etcd.yml)

执行本剧本，将会在硬编码的固定分组 `etcd` 上安装配置 Etcd 集群，并启动 etcd 服务。

在 [`etcd.yml`](https://github.com/pgsty/pigsty/blob/main/etcd.yml) 中，提供了以下是可用的任务子集：

- `etcd_assert`   ：验证 etcd 身份参数（`etcd_seq` 必须定义且为非负整数）
- `etcd_install`  ：安装 etcd 软件包
- `etcd_dir`      ：创建 etcd 数据和配置目录
- `etcd_config`   ：生成 etcd 配置
  - `etcd_conf`   ：生成 etcd 主配置文件 `/etc/etcd/etcd.conf`
  - `etcd_cert`   ：生成 etcd TLS 证书（CA、服务器证书、私钥）
- `etcd_member`   ：将新成员添加到现有集群（仅当 `etcd_init=existing` 时执行）
- `etcd_launch`   ：启动 etcd 服务
- `etcd_auth`     ：启用 RBAC 认证（创建 root 用户并启用认证）
- `etcd_register` ：将 etcd 注册到 VictoriaMetrics/Prometheus 监控



--------

## `etcd-rm.yml`

剧本原始文件：[`etcd-rm.yml`](https://github.com/pgsty/pigsty/blob/main/etcd-rm.yml)

用于移除 Etcd 集群或单个成员的专用剧本。在 [`etcd-rm.yml`](https://github.com/pgsty/pigsty/blob/main/etcd-rm.yml) 中，提供了以下可用的任务子集：

- `etcd_safeguard`  ：检查防误删保险，如果启用则中止执行
- `etcd_pause`      ：暂停 3 秒，允许用户使用 Ctrl-C 中止执行
- `etcd_deregister` ：从 VictoriaMetrics 监控目标中移除 etcd 注册
- `etcd_leave`      ：在清理前尝试优雅地离开 etcd 集群
- `etcd_svc`        ：使用 systemd 停止并禁用 etcd 服务
- `etcd_data`       ：移除 etcd 数据（可通过 `etcd_rm_data=false` 禁用）
- `etcd_pkg`        ：卸载 etcd 软件包（需通过 `etcd_rm_pkg=true` 显式启用）

移除剧本使用 [`etcd_remove`](https://github.com/pgsty/pigsty/blob/main/roles/etcd_remove) 角色，支持以下可配置参数：

- [`etcd_safeguard`](/docs/etcd/param#etcd_safeguard)：设置为 `true` 时阻止意外移除
- [`etcd_rm_data`](/docs/etcd/param#etcd_rm_data)：控制是否删除 ETCD 数据（默认：`true`）
- [`etcd_rm_pkg`](/docs/etcd/param#etcd_rm_pkg)：控制是否卸载 ETCD 软件包（默认：`false`）



--------

## 执行演示

[![asciicast](https://asciinema.org/a/566414.svg)](https://asciinema.org/a/566414)



----------------

## 命令速查

**Etcd 安装与配置：**

```bash
./etcd.yml                                      # 初始化 etcd 集群
./etcd.yml -t etcd_launch                       # 重启整个 etcd 集群
./etcd.yml -t etcd_conf                         # 使用最新状态刷新 /etc/etcd/etcd.conf
./etcd.yml -t etcd_cert                         # 重新生成 etcd TLS 证书
./etcd.yml -l 10.10.10.12 -e etcd_init=existing # 扩容节点：添加新成员到现有集群
```

**Etcd 移除与清理：**

```bash
./etcd-rm.yml                                   # 移除整个 etcd 集群
./etcd-rm.yml -l 10.10.10.12                    # 移除单个 etcd 成员
./etcd-rm.yml -e etcd_safeguard=false           # 覆盖防误删保险强制移除
./etcd-rm.yml -e etcd_rm_data=false             # 仅停止服务，保留数据
./etcd-rm.yml -e etcd_rm_pkg=true               # 同时卸载 etcd 软件包
```

**便捷脚本：**

```bash
bin/etcd-add <ip>                               # 向现有集群添加新成员（推荐）
bin/etcd-rm <ip>                                # 从集群中移除指定成员（推荐）
bin/etcd-rm                                     # 移除整个 etcd 集群
```



--------

## 保护机制

出于防止误删的目的，Pigsty 的 ETCD 模块提供了防误删保险，由 [`etcd_safeguard`](/docs/etcd/param#etcd_safeguard) 参数控制，默认为 `false`，即默认不打开防误删保护。

对于生产环境已经初始化好的 etcd 集群，建议打开防误删保护，避免误删现有的 etcd 实例：

```yaml
etcd:
  hosts:
    10.10.10.10: { etcd_seq: 1 }
    10.10.10.11: { etcd_seq: 2 }
    10.10.10.12: { etcd_seq: 3 }
  vars:
    etcd_cluster: etcd
    etcd_safeguard: true  # 打开防误删保护
```

当 `etcd_safeguard` 设置为 `true` 时，`etcd-rm.yml` 剧本会检测到存活的 etcd 实例并主动中止，避免误删。您可以使用命令行参数来覆盖这一行为：

```bash
./etcd-rm.yml -e etcd_safeguard=false  # 强制覆盖防误删保险
```

除非您清楚地知道自己在做什么，我们并不建议用户随意清理 Etcd 集群。


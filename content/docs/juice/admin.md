---
title: 管理预案
weight: 4540
description: JUICE 模块运维与故障排查手册。
icon: fa-solid fa-building-columns
module: [JUICE]
categories: [任务]
---

常见运维场景如下：

- [初始化实例](#初始化实例)
- [重新配置](#重新配置)
- [移除实例](#移除实例)
- [添加新实例](#添加新实例)
- [多节点共享挂载](#多节点共享挂载)
- [PITR 恢复](#pitr-恢复)
- [故障排查](#故障排查)
- [性能调优](#性能调优)

更多问题参见 [FAQ](/docs/juice/faq/)。

-------------

## 初始化实例

```bash
./juice.yml -l <host>
./juice.yml -l <host> -e fsname=<name>
```

初始化流程：

- 安装 `juicefs` 软件包
- 创建共享缓存目录（默认 `/data/juice`）
- 执行 `juicefs format --no-update`（仅首次创建有效）
- 创建挂载点目录并设置权限
- 渲染 systemd 单元与环境文件
- 启动服务并等待指标端口就绪
- 注册到 VictoriaMetrics（若存在 infra 节点）

-------------

## 重新配置

修改配置后，建议执行以下命令（更新配置并确保服务在线）：

```bash
./juice.yml -l <host> -t juice_config,juice_launch
```

仅渲染配置文件而不触碰服务状态：

```bash
./juice.yml -l <host> -t juice_config
```

说明：

- `juice_config,juice_launch` 会确保服务处于 `started`，但不会强制重启已运行实例
- `data` 仅在首次 `format` 时生效
- 变更 `mount` 参数后，请手动重启对应服务（`systemctl restart juicefs-<name>`）

-------------

## 移除实例

1. 将实例 `state` 设为 `absent`
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

移除动作：

- 停止 systemd 服务
- `umount -l` 懒卸载
- 删除 unit 与环境文件
- 重载 systemd

**不会删除** PostgreSQL 元数据与对象存储数据。

-------------

## 添加新实例

在配置中新增实例，确保端口唯一：

```yaml
juice_instances:
  newfs:
    path: /newfs
    meta: postgres://...
    data: --storage minio --bucket http://minio:9000/newfs
    port: 9568
```

部署：

```bash
./juice.yml -l <host> -e fsname=newfs
```

-------------

## 多节点共享挂载

多个节点配置相同的 `meta` 与实例名：

```yaml
app:
  hosts:
    10.10.10.11: { juice_instances: { shared: { path: /shared, meta: "postgres://...", port: 9567 } } }
    10.10.10.12: { juice_instances: { shared: { path: /shared, meta: "postgres://...", port: 9567 } } }
```

首次格式化由任一节点完成，其余节点会通过 `--no-update` 自动跳过。

-------------

## PITR 恢复

当 **数据也存储在 PostgreSQL**（`--storage postgres`）时，可通过 PG 的 PITR 恢复文件系统：

```bash
# 停止所有节点上的服务
systemctl stop juicefs-jfs

# 使用 pgBackRest 恢复元数据库
pb restore --stanza=meta --type=time --target="2024-01-15 10:30:00"

# 启动 PostgreSQL
systemctl start postgresql

# 启动 JuiceFS 服务
systemctl start juicefs-jfs
```

如果数据存储在 MinIO/S3，仅元数据可回滚，数据对象不会自动回退。

-------------

## 故障排查

### 挂载失败

```bash
systemctl status juicefs-jfs
journalctl -u juicefs-jfs -f
mountpoint /fs
```

### 元数据连接问题

```bash
psql "postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta" -c "SELECT 1"
```

### 指标端口检查

```bash
ss -tlnp | grep 9567
curl http://localhost:9567/metrics
```

-------------

## 性能调优

通过 `mount` 传入 `juicefs mount` 选项：

```yaml
juice_instances:
  jfs:
    path: /fs
    meta: postgres://...
    mount: --cache-size 102400 --prefetch 3 --max-uploads 50
```

常用关注指标：

- `juicefs_blockcache_hits/juicefs_blockcache_miss`：缓存命中率
- `juicefs_object_request_durations_histogram_seconds`：对象存储延迟
- `juicefs_transaction_durations_histogram_seconds`：元数据事务延迟

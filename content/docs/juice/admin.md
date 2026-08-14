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
./juice.yml -l <host> -t juice_clean,juice_register
./juice.yml -l <host> -e fsname=jfs -t juice_clean,juice_register
```

移除动作：

- 停止 systemd 服务
- `umount -l` 懒卸载
- 删除 unit 与环境文件
- 重载 systemd
- 重写该节点的 VictoriaMetrics 目标文件，移除 `state=absent` 的实例

**不会删除** PostgreSQL 元数据、PostgreSQL `jfs_blob` 数据表或对象存储数据。

只执行 `-t juice_clean` 不会更新监控目标，会暂时留下已移除实例的陈旧抓取地址；因此上面的命令同时执行 `juice_register`。

-------------

## 添加新实例

在配置中新增实例，确保端口唯一：

```yaml
juice_instances:
  newfs:
    path: /newfs
    meta: postgres://...
    data: --storage minio --bucket https://sss.pigsty:9000/newfs --access-key <s3_access_key> --secret-key <s3_secret_key>
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

JuiceFS 元数据与数据必须恢复到相互一致的状态。
执行任何恢复前，请停止所有写入方并卸载/停止每个客户端上的对应 JuiceFS 服务，明确目标 PostgreSQL 集群和时间点，并先确认可用备份：

```bash
# 核对 Patroni 集群成员；在数据库节点核对目标 stanza 的备份
pig pt list <cluster>
pig pb info -s <stanza>

# 在目标数据库节点以 postgres 用户执行恢复
sudo -iu postgres pg-pitr -s <stanza> -t "2026-08-14 10:30:00+08"
```

{{% alert color="danger" title="PITR 会覆盖 PostgreSQL 数据目录" %}}
确认准确的集群名、近期备份、恢复时间点与回滚方案后，按照 [PostgreSQL PITR 教程](/docs/pgsql/tutorial/pitr/) 停止 Patroni/PostgreSQL 并执行恢复。`pg-pitr` 不负责停止服务、恢复 Patroni/DCS、验证数据或重建副本，不要把上述命令当作完整恢复流程。
{{% /alert %}}

当元数据与 `--storage postgres` 的 `jfs_blob` 位于同一个被恢复的 PostgreSQL 数据库中时，数据库级 PITR 可以把两者恢复到同一时间点。
若两者位于不同数据库或集群，必须设计一致的联合恢复点。

如果文件数据位于 Silo/S3，对 PostgreSQL 做 PITR **只会回滚元数据**，不会回滚对象：
目标时间点之后的新对象可能残留，而已删除或回收的旧对象可能无法找回。恢复能否得到完整文件系统取决于对象版本、回收站与生命周期策略；验证完成前不要运行垃圾回收。

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

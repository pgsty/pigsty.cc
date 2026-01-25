---
title: 管理预案
weight: 4540
description: JuiceFS 文件系统管理 SOP，创建、移除、扩容与故障排查
icon: fa-solid fa-building-columns
module: [JUICE]
categories: [任务]
---


以下是一些常见的 JuiceFS 管理任务 SOP（预案）：

**基础运维**

- [初始化 JuiceFS](#初始化-juicefs)
- [移除 JuiceFS](#移除-juicefs)
- [重新配置 JuiceFS](#重新配置-juicefs)
- [使用 JuiceFS 客户端](#使用-juicefs-客户端)

**扩容与维护**

- [添加新实例](#添加新实例)
- [多节点共享挂载](#多节点共享挂载)
- [PITR 恢复文件系统](#pitr-恢复文件系统)

**故障排查**

- [常见问题诊断](#常见问题诊断)
- [性能调优](#性能调优)

更多问题请参考 [FAQ：JUICE](faq)。


-------------

## 初始化 JuiceFS

您可以使用 [`juice.yml`](playbook#juiceyml) 剧本来初始化 JuiceFS 实例：

```bash
# 初始化节点上所有 JuiceFS 实例
./juice.yml -l 10.10.10.10

# 初始化特定实例
./juice.yml -l 10.10.10.10 -e fsname=jfs
```

初始化流程：

1. 安装 `juicefs` 软件包
2. 创建共享缓存目录 `/data/juice`
3. 执行 `juicefs format` 格式化文件系统
4. 创建挂载点目录并设置权限
5. 渲染 systemd 服务配置
6. 启动服务并等待端口就绪
7. 注册到 VictoriaMetrics 监控


-------------

## 移除 JuiceFS

移除 JuiceFS 实例需要两个步骤：

```bash
# 步骤 1：在配置中将 state 设置为 absent
# juice_instances:
#   jfs:
#     path: /fs
#     meta: postgres://...
#     state: absent

# 步骤 2：执行移除
./juice.yml -l 10.10.10.10 -t juice_clean

# 或移除指定实例
./juice.yml -l 10.10.10.10 -e fsname=jfs -t juice_clean
```

移除操作会：

- 停止 systemd 服务
- 卸载文件系统（lazy umount）
- 删除服务配置文件
- 重载 systemd

> **注意**：移除操作不会删除 PostgreSQL 中的数据，如需彻底清理请手动处理数据库。


-------------

## 重新配置 JuiceFS

您可以部分执行剧本来重新配置 JuiceFS 实例：

```bash
./juice.yml -l 10.10.10.10 -t juice_config
```

配置变更会触发服务重启。如果只想渲染配置而不重启，可以手动管理 systemd 服务。


-------------

## 使用 JuiceFS 客户端

JuiceFS 挂载后就是标准的 POSIX 文件系统，可以直接使用：

```bash
# 查看挂载状态
df -h /fs

# 查看文件系统信息
juicefs status /fs

# 查看文件系统统计
juicefs info /fs

# 列出活跃会话
juicefs status postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
```

### 常用命令

```bash
# 查看缓存使用情况
juicefs warmup /fs/some/path

# 预热缓存
juicefs warmup -p 4 /fs/some/path

# 清理本地缓存
juicefs gc postgres://... --delete

# 导出文件系统元数据（备份）
juicefs dump postgres://... > metadata.json

# 导入元数据（恢复）
juicefs load postgres://... < metadata.json
```


-------------

## 添加新实例

向节点添加新的 JuiceFS 实例：

```yaml
# 在配置清单中添加新实例
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://...
    port  : 9567
  newfs:                        # 新增实例
    path  : /newfs
    meta  : postgres://...
    port  : 9568                # 端口必须唯一
```

```bash
# 部署新实例
./juice.yml -l 10.10.10.10 -e fsname=newfs
```


-------------

## 多节点共享挂载

JuiceFS 支持多节点挂载同一文件系统，实现共享存储：

```yaml
# 多节点配置相同的元数据 URL
app:
  hosts:
    10.10.10.11: { juice_instances: { shared: { path: /shared, meta: "postgres://..." } } }
    10.10.10.12: { juice_instances: { shared: { path: /shared, meta: "postgres://..." } } }
    10.10.10.13: { juice_instances: { shared: { path: /shared, meta: "postgres://..." } } }
```

```bash
# 部署到所有节点
./juice.yml -l app
```

> **注意**：首次格式化只需要在一个节点执行，其他节点会自动跳过格式化步骤。


-------------

## PITR 恢复文件系统

当使用 PostgreSQL 作为元数据和数据存储时，可以利用 PostgreSQL 的 PITR 能力恢复文件系统到任意时间点：

```bash
# 1. 停止所有节点的 JuiceFS 服务
systemctl stop juicefs-jfs

# 2. 使用 pgBackRest 恢复 PostgreSQL 到指定时间点
pb restore --stanza=meta --type=time --target="2024-01-15 10:30:00"

# 3. 重新启动 PostgreSQL 主库
systemctl start postgresql

# 4. 重新启动所有节点的 JuiceFS 服务
systemctl start juicefs-jfs
```

这种方式可以恢复文件系统到备份时间范围内的任意时刻。


-------------

## 常见问题诊断

### 挂载失败排查

```bash
# 检查 systemd 服务状态
systemctl status juicefs-jfs

# 查看服务日志
journalctl -u juicefs-jfs -f

# 检查挂载点
mountpoint /fs

# 手动挂载测试
juicefs mount postgres://... /fs --foreground
```

### 连接问题排查

```bash
# 测试元数据引擎连接
psql "postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta" -c "SELECT 1"

# 检查端口监听
ss -tlnp | grep 9567

# 测试指标端口
curl http://localhost:9567/metrics
```

### 文件系统问题

```bash
# 检查文件系统状态
juicefs status /fs

# 检查文件系统一致性
juicefs fsck postgres://...

# 查看活跃会话
juicefs status postgres://... --session
```


-------------

## 性能调优

### 缓存优化

```yaml
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://...
    mount : --cache-size 102400 --prefetch 3    # 100GB 缓存，预取 3 个块
```

### 并发优化

```yaml
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://...
    mount : --max-uploads 50 --max-deletes 10   # 并发上传/删除数
```

### 内存优化

```yaml
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://...
    mount : --buffer-size 300 --open-cache 3600 # 缓冲区大小，打开文件缓存时间
```

### 监控关键指标

通过 Prometheus 指标监控 JuiceFS 性能：

- `juicefs_object_request_durations_histogram_seconds`：对象存储请求延迟
- `juicefs_blockcache_hits/misses`：缓存命中率
- `juicefs_fuse_*`：FUSE 操作统计
- `juicefs_meta_ops_durations_histogram_seconds`：元数据操作延迟



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
- [节点下线](#节点下线)
- [PITR 恢复](#pitr-恢复)
- [故障排查](#故障排查)
- [性能调优](#性能调优)

更多问题参见 [**FAQ**](/docs/juice/faq/)。

-------------

## 初始化实例

```bash
./juice.yml -l <host>
./juice.yml -l <host> -e fsname=<name>
```

初始化流程：

- 跳过未定义 `juice_instances`、其值为 `null` 或为空字典的主机（以及指定 `-e fsname=<name>` 但未命中的主机）
- 校验控制端 `ansible-core >= 2.16`、`juice_cache` 与实例配置（实例名、必填字段、`unit`、端口与路径冲突，见 [**配置校验**](/docs/juice/config#配置校验)）
- 安装 `juicefs` 软件包
- 创建共享缓存目录（默认 `/data/juice`）
- 执行 `juicefs format --no-update`（仅首次创建有效，失败时打印最后一行错误），并通过 `juicefs status` 核验已有元数据的卷名与当前实例名一致
- 渲染环境文件 `/etc/default/<unit>`（权限 `0600`）与 systemd 单元（权限 `0644`）
- 启动服务，并通过 `systemctl is-active`、`findmnt`（精确核验 `FSTYPE="fuse.juicefs"` 与 `SOURCE="JuiceFS:<name>"`）及 `stat -f` 等待真实挂载就绪；挂载点目录不存在时由 `juicefs mount` 自动创建
- 核验挂载就绪后设置文件系统根目录的属主、属组与权限（默认 `root:root 0755`）
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

- `juice_config,juice_launch` 会确保服务处于 `started` 并等待挂载点就绪，但不会强制重启已运行实例
- `data` 仅在首次 `format` 时生效
- 变更 `mount` 参数并执行 `juice_config,juice_launch` 后，请手动重启对应服务（`systemctl restart juicefs-<name>`）；重启等于卸载后重新挂载，已打开的文件与容器的 bind mount 会中断

-------------

## 移除实例

1. 先停止正在访问该挂载点的应用进程（并退出以挂载点为当前目录的终端），将实例 `state` 设为 `absent`（默认 `unit` 无需保留 `path` 与 `meta`；若有自定义 `unit` 则继续保留 `unit`）
2. 执行 `juice_clean`

```yaml
juice_instances:
  jfs:
    state: absent
    # unit: my-juice-unit   # 原实例有自定义 unit 时保留
```

```bash
./juice.yml -l <host> -t juice_clean
./juice.yml -l <host> -e fsname=jfs -t juice_clean
```

移除动作：

- 停止并禁用活跃的 systemd 服务（`ExecStop` 执行 `juicefs umount`），并强校验 `systemctl show <unit> --property=Result` 为 `success`（**不执行 `umount -l` 强制懒卸载**）
- 若卸载失败（例如 `Device or resource busy`），任务在删除单元与环境文件、刷新监控目标之前立即报错中止，保留现场以便排查；使用 `fuser -vm <path>` 或 `lsof` 释放占用后重跑 `juice_clean` 即可完成清理
- 确认停止成功后删除 `.service` 单元与 `/etc/default/<unit>` 环境文件，重载 systemd
- 重写该节点的 VictoriaMetrics 目标文件，移除 `state: absent` 的实例（若该节点已无 `state: create` 实例，则直接删除 `/infra/targets/juice/<ip>.yml`）

不带标签完整执行 `juice.yml` 同样会清理 `state: absent` 的实例。确认清理完成后，再从配置中删除该条目。

**不会删除** 元数据、文件数据（PostgreSQL `jfs_blob` 表或对象存储）、[`juice_cache`](/docs/juice/param#juice_cache) 下该文件系统的本地缓存子目录，以及挂载点目录。

> [!WARNING] 旧版本
> v4.5.0 及更早版本中，`-t juice_clean` 不会执行清理任务，请改用不带标签的完整执行：`./juice.yml -l <host> -e fsname=<name>`。

-------------

## 添加新实例

在配置中新增实例，确保 `port` 与 `path` 在该节点上唯一：

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

也可以在集群级别 `vars` 中定义一次 `juice_instances`，由所有成员共享：

```yaml
app:
  hosts:
    10.10.10.11: {}
    10.10.10.12: {}
  vars:
    juice_instances:
      shared: { path: /shared, meta: "postgres://...", port: 9567 }
```

`owner` / `group` / `mode` 作用于共享的文件系统根目录，各节点必须保持一致，否则每次执行都会互相覆盖。

-------------

## 节点下线

[`node-rm.yml`](/docs/node/playbook#node-rmyml) 的 `node_deregister` 会一并删除该节点的监控目标文件 `/infra/targets/juice/<ip>.yml`，但 **不会** 停止 JuiceFS 服务或卸载文件系统。
因此下线节点前，应先将该节点上的实例全部标记为 `state: absent` 并移除：

```bash
./juice.yml -l <host> -t juice_clean    # 先移除该节点上的 JuiceFS 实例
./node-rm.yml -l <host>                 # 再下线节点
```

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

> [!CAUTION] PITR 会覆盖 PostgreSQL 数据目录
> 确认准确的集群名、近期备份、恢复时间点与回滚方案后，按照 [**PostgreSQL PITR 教程**](/docs/pgsql/tutorial/pitr/) 停止 Patroni/PostgreSQL 并执行恢复。`pg-pitr` 不负责停止服务、恢复 Patroni/DCS、验证数据或重建副本，不要把上述命令当作完整恢复流程。

当元数据与 `--storage postgres` 的 `jfs_blob` 位于同一个被恢复的 PostgreSQL 数据库中时，数据库级 PITR 可以把两者恢复到同一时间点。
若两者位于不同数据库或集群，必须设计一致的联合恢复点。

如果文件数据位于 Silo/S3，对 PostgreSQL 做 PITR **只会回滚元数据**，不会回滚对象：
目标时间点之后的新对象可能残留，而已删除或回收的旧对象可能无法找回。恢复能否得到完整文件系统取决于对象版本、回收站与生命周期策略；验证完成前不要运行垃圾回收。

-------------

## 故障排查

### 配置校验失败

`juice_id` 会一次性列出所有不合规的实例，例如：

```text
invalid juice_instances: [jfs] port conflicts with jfs2. [jfs2] port conflicts with jfs.
```

按提示修改配置：为冲突实例指定不同的 `port` 或 `path`；若其中一个是要下线的旧实例，将其标记为 `state: absent` 即可豁免 `port` 与 `path` 冲突检查（注意 **`unit` 在全部实例之间仍不能重复**，如需复用同名实例或同一 `unit`，请先执行 `juice_clean` 移除旧实例）。
其他常见报错还包括 `juice_cache` 与挂载路径重叠、缺少 `path` / `meta`、非法 `state` / `unit`，以及实例名不符合 `3-63` 位 `[a-z0-9-]` 规则。

### 格式化与卷名校验失败

`juice_init` 执行 `juicefs format --no-update` 失败时，剧本会打印最后一行错误（命令行含凭据，保持隐藏），并在格式化后通过 `juicefs status` 核验元数据中的卷名（`Setting.Name`）是否等于当前实例名。常见失败原因：

- `meta` 指向的元数据引擎已经格式化为 **另一个不同的卷名**（禁止把已初始化的其他卷挂在错误的实例键下；共享 PostgreSQL 时应使用独立数据库或不同实例键）
- `meta` 或 `--bucket` 指向的数据库不存在
- 数据库用户权限不足
- 对象存储 bucket 非空或不可写

可先用下文 [**元数据连接问题**](#元数据连接问题) 中的命令确认数据库可达。

### 挂载未就绪

`juice_launch` 启动服务后每 2 秒执行一次就绪核验（最多重试 30 次，共等待 60 秒；单独执行 `-t juice_dir` 时也会在修改目录属性前做一次同样的挂载核验），要求同时满足：

1. `systemctl is-active --quiet <unit>` 服务处于活跃态；
2. `findmnt -knP -d backward -f -M <path> -o FSTYPE,SOURCE` 输出精确为 `FSTYPE="fuse.juicefs" SOURCE="JuiceFS:<name>"`；
3. `stat -f <path>` 能正常访问挂载点文件系统。

超时或来源不匹配时任务失败，请查看服务状态、挂载表与日志：

```bash
systemctl show juicefs-jfs -p ActiveState -p MainPID -p Result
journalctl -u juicefs-jfs -n 50 --no-pager
findmnt -knP -d backward -f -M /fs -o FSTYPE,SOURCE
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

指标端口被其他进程占用时，JuiceFS 只会在日志中记录一条 `listen on ... failed` 错误并继续挂载：文件系统可用，但没有指标，监控侧通常表现为抓取失败。
用 `journalctl -u juicefs-<name>` 确认后，修改 `port`，执行 `./juice.yml -l <host> -t juice_config,juice_launch,juice_register`，再手动重启该实例。

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
